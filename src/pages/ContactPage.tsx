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
    <div className="m-4 flex flex-col items-center justify-center pb-10 sm:m-15">
        <h1 className="text-center font-bebas text-5xl font-bold uppercase sm:text-7xl">Contact Me</h1>
        <div className="my-10 flex w-full flex-wrap justify-center gap-6 sm:m-20 sm:gap-20">
            <a href={facebookurl} target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-120">
                <img src={Facebook} className="h-24 sm:h-40"/>
                <span className="m-3 flex items-center justify-center font-bebas text-2xl uppercase sm:m-5 sm:text-4xl">facebook</span>
            </a>
            <a href={`mailto:${gmailurl}`} target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-120">
                <img src={Gmail} className="h-24 sm:h-40"/>
                <span className="m-3 flex items-center justify-center font-bebas text-2xl uppercase sm:m-5 sm:text-4xl">gmail</span>
            </a>
            <a href={`mailto:${outlookurl}`} target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-120">
                <img src={Outlook} className="h-24 sm:h-40"/>
                <span className="m-3 flex items-center justify-center font-bebas text-2xl uppercase sm:m-5 sm:text-4xl">outlook</span>
            </a>
            <a href={githuburl} target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-120">
                <img src={Github} className="h-24 sm:h-40"/>
                <span className="m-3 flex items-center justify-center font-bebas text-2xl uppercase sm:m-5 sm:text-4xl">github</span>
            </a>
        </div>
    </div>
  );
}

export default ContactPage;