import cybercer from "../assets/cyberawarenesscer.jpg";
import fullstack from "../assets/fullstackcer.jpg";
import cloud from "../assets/cloudcer.jpg";

function CertificatePage() {
  return (
    <div className="flex flex-col justify-center items-center m-15">
      <h1 className="text-center font-bebas font-bold text-7xl">my certificate</h1>
      <div className="flex flex-wrap justify-center items-center gap-20 my-20">
          <img src={fullstack} className="w-100 transition duration-300 hover:scale-120"/>
          <img src={cybercer} className="w-100 transition duration-300 hover:scale-120"/>
          <img src={cloud} className="w-100 transition duration-300 hover:scale-120"/>
      </div>
    </div>
  )
}

export default CertificatePage
