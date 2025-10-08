
import Footer from "@/components/footer";
import Station from "@/components/station";
import Sid from "@/components/sid";
import Image from "next/image";




export default function Xbox() {
  return (
    <div className="bg-[#191B1F] md:h-[430vh] h-[870vh] relative z-0 ">
      <div>
     <Image src='https://res.cloudinary.com/dvqhcm07a/image/upload/v1757405232/adbanner-9_oix4oq.png' alt='banner' width={700} height={500}
     className='rounded-xl relative top-50 mx-auto w-70 md:w-160'
     /> 
    </div>
      <div className="grid md:grid-cols-2">
        <div><Station /></div>
        <div><Sid /></div>
      


      </div>

  <Footer/>
    </div>
  );
}
