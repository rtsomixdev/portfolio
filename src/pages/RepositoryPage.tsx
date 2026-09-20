import rfidsystem from "../assets/rfidsystem.png";
import rfiddiagram from "../assets/rfidhardwarediagram.png";
import hardware1 from "../assets/hardware1.png";
import hardware2 from "../assets/hardware2.png";
import menucal1 from "../assets/menucal1.png";
import menucal2 from "../assets/menucal2.png";
import menucal3 from "../assets/menucal3.png";

function RepositoryPage() {
  const menucalurl = "https://drive.google.com/drive/folders/14dIVUyU3QUb1IXT2j2fluRZmG8dtZzxS?usp=sharing";
  return (
    <div className="flex flex-col justify-center items-center pb-20">
      <h1 className="text-7xl font-bebas font-bold m-10">my repository</h1>
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bebas font-bold text-center">rfid system diagram</h1>
        <img src={rfidsystem} className="w-250"/>
        <h1 className="text-5xl font-bebas font-bold text-center">hardware diagram</h1>
        <img src={rfiddiagram} className="w-250 border"/>
        <h1 className="text-5xl font-bebas font-bold text-center">hardware</h1>
        <div className="flex flex-wrap">
          <img src={hardware1} className="w-125 h-125 border"/>
          <img src={hardware2} className="w-125 h-125 border"/>
        </div>
        <h1 className="text-5xl font-bebas font-bold text-center">menucal wpf c# application</h1>
        <img src={menucal3} className="w-250 border"/>
        <h1 className="text-5xl font-bebas font-bold text-center">menucal wpf c# application menu page</h1>
        <img src={menucal1} className="w-250 border"/>
        <h1 className="text-5xl font-bebas font-bold text-center">menucal wpf c# application material page</h1>
        <img src={menucal2} className="w-250 border"/>
        <a href={menucalurl} target="_blank" rel="noopener noreferrer" className="font-bebas font-bold text-5xl text-center underline">
          menucal link download click here window10/11 only
        </a>
      </div>
    </div>
  )
}

export default RepositoryPage
