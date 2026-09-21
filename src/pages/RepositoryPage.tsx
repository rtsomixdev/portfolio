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
      <h1 className="m-6 text-center font-bebas text-5xl font-bold sm:m-10 sm:text-7xl">my repository</h1>
      <div className="flex w-full max-w-5xl flex-col gap-8 px-4 sm:gap-10">
        <h1 className="text-center font-bebas text-4xl font-bold sm:text-5xl">rfid system diagram</h1>
        <img src={rfidsystem} className="h-auto w-full max-w-[62.5rem]"/>
        <h1 className="text-center font-bebas text-4xl font-bold sm:text-5xl">hardware diagram</h1>
        <img src={rfiddiagram} className="h-auto w-full max-w-[62.5rem] border"/>
        <h1 className="text-center font-bebas text-4xl font-bold sm:text-5xl">hardware</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <img src={hardware1} className="h-auto w-full border"/>
          <img src={hardware2} className="h-auto w-full border"/>
        </div>
        <h1 className="text-center font-bebas text-4xl font-bold sm:text-5xl">menucal wpf c# application</h1>
        <img src={menucal3} className="h-auto w-full max-w-[62.5rem] border"/>
        <h1 className="text-center font-bebas text-4xl font-bold sm:text-5xl">menucal wpf c# application menu page</h1>
        <img src={menucal1} className="h-auto w-full max-w-[62.5rem] border"/>
        <h1 className="text-center font-bebas text-4xl font-bold sm:text-5xl">menucal wpf c# application material page</h1>
        <img src={menucal2} className="h-auto w-full max-w-[62.5rem] border"/>
        <a href={menucalurl} target="_blank" rel="noopener noreferrer" className="text-center font-bebas text-3xl font-bold underline sm:text-5xl">
          menucal link download click here window10/11 only
        </a>
      </div>
    </div>
  )
}

export default RepositoryPage
