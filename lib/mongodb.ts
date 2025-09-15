import mongoose from "mongoose";

const MONGO_URI= 
"mongodb+srv://geraldgchibanda6025_db_user:c9OeXEWOGvxJ3YE0@cluster0.xhwm0ed.mongodb.net/Next15?retryWrites=true&w=majority&appName=Cluster0"
  

if (!MONGO_URI) {
  throw new Error("MongoDB URI is not defined");
}


declare global {
 
  var _mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}


global._mongoose = global._mongoose || { conn: null, promise: null };

async function connectToDB() {
  if (global._mongoose.conn) {
    return global._mongoose.conn;
  }

  if (!global._mongoose.promise) {
    global._mongoose.promise = mongoose
      .connect(MONGO_URI)
      .then((mongoose) => mongoose)
      .catch((err) => {
        console.error("MongoDB connection error:", err);
        throw err;
      });
  }

  global._mongoose.conn = await global._mongoose.promise;
  return global._mongoose.conn;
}

export default connectToDB;
