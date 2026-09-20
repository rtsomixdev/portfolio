import Github from "../assets/GitHub.png";
import Facebook from "../assets/Facebook.png";
import Gmail from "../assets/Gmail.png";
import Outlook from "../assets/Outlook.png"

function ContactPage() {
    const facebookurl = "https://www.facebook.com/profile.php?id=61594522766902";
    const githuburl = "https://github.com/rtsomixdev";
    const gmailurl = "thanaputnubza@gmail.com";
    const outlookurl = "rtsomixdev@hotmail.com";
  return (
    <div className="flex flex-col justify-center items-center m-15 pb-10">
        <h1 className="text-center text-7xl font-bebas font-bold uppercase">Contact Me</h1>
        <div className="flex flex-wrap gap-20 m-20">
            <a href={facebookurl} target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-120">
                <img src={Facebook} className="h-40"/>
                <span className="flex items-center justify-center text-4xl uppercase font-bebas m-5">facebook</span>
            </a>
            <a href={`mailto:${gmailurl}`} target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-120">
                <img src={Gmail} className="h-40"/>
                <span className="flex items-center justify-center text-4xl uppercase font-bebas m-5">gmail</span>
            </a>
            <a href={`mailto:${outlookurl}`} target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-120">
                <img src={Outlook} className="h-40"/>
                <span className="flex items-center justify-center text-4xl uppercase font-bebas m-5">outlook</span>
            </a>
            <a href={githuburl} target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-120">
                <img src={Github} className="h-40"/>
                <span className="flex items-center justify-center text-4xl uppercase font-bebas m-5">github</span>
            </a>
        </div>
    </div>
  );
}

export default ContactPage;