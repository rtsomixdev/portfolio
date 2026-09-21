import person from "../assets/person.jpg";
import personcer from "../assets/personcer.jpg"
import functionco from "../assets/Function International.png";
import inheritco from "../assets/inherit.png"; 

function ProfilePage() {
  return (
    <div className="flex flex-wrap items-center px-4 pb-10 py-6 sm:m-15 sm:p-0">
      <div className="flex w-full flex-col gap-8 md:flex-row md:gap-20">
          <div className="flex min-w-0 flex-col gap-5">
            <h1 className="font-bebas text-5xl font-bold sm:text-7xl">my profile</h1>
            <p className="font-bebas text-lg font-bold sm:text-2xl">firstname : thanapat</p>
            <p className="font-bebas text-lg font-bold sm:text-2xl">lastname : sukhonthip</p>
            <p className="font-bebas text-lg font-bold sm:text-2xl">nickname : mix</p>
            <p className="font-bebas text-lg font-bold sm:text-2xl">age : 22</p>
            <p className="break-words font-bebas text-lg font-bold sm:text-2xl">Vocational certificate : minburi technical college (mtc)</p>
            <p className="break-words font-bebas text-lg font-bold sm:text-2xl">bachelor's degree : Rajamangala University of Technology Thanyaburi (rmutt)</p>
            <p className="font-bebas text-lg font-bold sm:text-2xl">internship : function international (fti)</p>
            <p className="font-bebas text-lg font-bold sm:text-2xl">internship : inherit co</p>
          </div>
          <div className="flex w-full max-w-[37.5rem] flex-col items-center justify-center gap-10">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-20">
              <img src={person} className="m-2 w-32 border-2 sm:m-5 sm:w-40"/>
              <img src={personcer} className="m-2 w-32 border-2 sm:m-5 sm:w-40"/>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-20">
              <img src={functionco} className="m-2 w-32 transition duration-300 hover:scale-120 sm:m-5 sm:w-40"/>
              <img src={inheritco} className="m-2 w-32 transition duration-300 hover:scale-120 sm:m-5 sm:w-40"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProfilePage
