import Cloudflare from "../assets/Cloudflare.png"
import Docker from "../assets/Docker.png"
import DOTNET from "../assets/NET.png"
import Mongodb from "../assets/MongoDB.png"
import MicrosoftSqlServer from "../assets/Microsoft SQL Server.png"
import Sqlite from "../assets/SQLite.png"
import Postgresql from "../assets/PostgresSQL.png"
import Typescript from "../assets/TypeScript.png"
import REACT from "../assets/React.png"
import VUE from "../assets/Vue.js.png"
import Dbeaver from "../assets/DBeaver.png"
import Xml from "../assets/XML.png"
import Csharp from "../assets/CSharp.png"
import Tailwindcss from "../assets/Tailwind CSS.png"
import Vscode from "../assets/Visual Studio Code.png"
import Vs from "../assets/Visual Studio.png"

function MainPage() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-center font-bebas font-bold text-7xl uppercase mt-20">thanapat sukhonthip</h1>
      <p className="font-bebas font-bold text-2xl">Software Engineer & Software Developer</p>
      <span className="flex border border-black gap-10 p-10 flex-col rounded-lg">
        <div className="flex flex-row">
          <h1 className="font-bold font-bebas flex items-center text-2xl uppercase w-28">frontend</h1>
          <img src={REACT} className="h-10 justify-center items-center transition duration-300 hover:scale-200"/>
          <img src={VUE} className="h-10 ml-10 justify-center items-center transition duration-300 hover:scale-200"/>
          <img src={Xml} className="h-10 ml-10 justify-center items-center transition duration-300 hover:scale-200"/>
          <img src={Tailwindcss} className="h-10 ml-10 justify-center items-center transition duration-300 hover:scale-200"/>
        </div>
        <div className="flex flex-row">
          <h1 className="font-bold font-bebas flex items-center text-2xl uppercase w-28">backend</h1>
          <img src={DOTNET} className="h-10 justify-center items-center transition duration-300 hover:scale-200"/>
          <img src={Csharp} className="h-10 ml-10 justify-center items-center transition duration-300 hover:scale-200"/>
          <img src={Typescript} className="h-10 ml-10 justify-center items-center transition duration-300 hover:scale-200"/>
        </div>
        <div className="flex flex-row">
          <h1 className="font-bold font-bebas flex items-center text-2xl uppercase w-28">database</h1>
          <img src={Sqlite} className="h-10 justify-center items-center transition duration-300 hover:scale-200"/>
          <img src={MicrosoftSqlServer} className="h-10 ml-10 justify-center items-center transition duration-300 hover:scale-200"/>
          <img src={Postgresql} className="h-10 ml-10 justify-center items-center transition duration-300 hover:scale-200"/>
          <img src={Mongodb} className="h-10 ml-10 justify-center items-center transition duration-300 hover:scale-200"/>
        </div>
        <div className="flex flex-row">
          <h1 className="font-bold font-bebas flex items-center text-2xl uppercase w-28">Tools</h1>
          <img src={Vs} className="h-10 justify-center items-center transition duration-300 hover:scale-200"/>
          <img src={Vscode} className="h-10 ml-10 justify-center items-center transition duration-300 hover:scale-200"/>
          <img src={Dbeaver} className="h-10 ml-10 justify-center items-center transition duration-300 hover:scale-200"/>
          <img src={Docker} className="h-10 ml-10 justify-center items-center transition duration-300 hover:scale-200"/>
          <img src={Cloudflare} className="h-10 ml-10 justify-center items-center transition duration-300 hover:scale-200"/>
        </div>
      </span>
    </div>
  )
}

export default MainPage
