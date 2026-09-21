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
    <div className="flex flex-col items-center gap-5 px-4">
      <h1 className="mt-12 text-center font-bebas text-5xl font-bold uppercase sm:mt-20 sm:text-7xl">thanapat sukhonthip</h1>
      <p className="text-center font-bebas text-xl font-bold sm:text-2xl">Software Engineer & Software Developer</p>
      <span className="flex w-full max-w-4xl flex-col gap-6 rounded-lg border border-black p-5 sm:gap-10 sm:p-10">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="w-28 shrink-0 font-bebas text-2xl font-bold uppercase">frontend</h1>
          <img src={REACT} className="h-10 transition duration-300 hover:scale-200"/>
          <img src={VUE} className="h-10 transition duration-300 hover:scale-200"/>
          <img src={Xml} className="h-10 transition duration-300 hover:scale-200"/>
          <img src={Tailwindcss} className="h-10 transition duration-300 hover:scale-200"/>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="w-28 shrink-0 font-bebas text-2xl font-bold uppercase">backend</h1>
          <img src={DOTNET} className="h-10 transition duration-300 hover:scale-200"/>
          <img src={Csharp} className="h-10 transition duration-300 hover:scale-200"/>
          <img src={Typescript} className="h-10 transition duration-300 hover:scale-200"/>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="w-28 shrink-0 font-bebas text-2xl font-bold uppercase">database</h1>
          <img src={Sqlite} className="h-10 transition duration-300 hover:scale-200"/>
          <img src={MicrosoftSqlServer} className="h-10 transition duration-300 hover:scale-200"/>
          <img src={Postgresql} className="h-10 transition duration-300 hover:scale-200"/>
          <img src={Mongodb} className="h-10 transition duration-300 hover:scale-200"/>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="w-28 shrink-0 font-bebas text-2xl font-bold uppercase">Tools</h1>
          <img src={Vs} className="h-10 transition duration-300 hover:scale-200"/>
          <img src={Vscode} className="h-10 transition duration-300 hover:scale-200"/>
          <img src={Dbeaver} className="h-10 transition duration-300 hover:scale-200"/>
          <img src={Docker} className="h-10 transition duration-300 hover:scale-200"/>
          <img src={Cloudflare} className="h-10 transition duration-300 hover:scale-200"/>
        </div>
      </span>
    </div>
  )
}

export default MainPage
