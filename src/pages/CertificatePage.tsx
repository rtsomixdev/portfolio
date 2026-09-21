import cybercer from "../assets/cyberawarenesscer.jpg";
import fullstack from "../assets/fullstackcer.jpg";
import cloud from "../assets/cloudcer.jpg";

function CertificatePage() {
  return (
    <div className="m-4 flex flex-col items-center justify-center sm:m-15">
      <h1 className="text-center font-bebas text-5xl font-bold sm:text-7xl">my certificate</h1>
      <div className="my-10 flex w-full flex-wrap items-center justify-center gap-6 sm:my-20 sm:gap-20">
          <img src={fullstack} className="h-auto w-full max-w-[25rem] transition duration-300 hover:scale-120"/>
          <img src={cybercer} className="h-auto w-full max-w-[25rem] transition duration-300 hover:scale-120"/>
          <img src={cloud} className="h-auto w-full max-w-[25rem] transition duration-300 hover:scale-120"/>
      </div>
    </div>
  )
}

export default CertificatePage
