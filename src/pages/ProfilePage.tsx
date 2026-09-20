import person from "../assets/person.jpg";
import personcer from "../assets/personcer.jpg"
import functionco from "../assets/Function International.png";
import inheritco from "../assets/inherit.png"; 

function ProfilePage() {
  return (
    <div className="flex flex-wrap items-center m-15 pb-10">
      <div className="flex flex-wrap gap-20">
          <div className="flex flex-col gap-5">
            <h1 className="text-7xl font-bebas font-bold">my profile</h1>
            <p className="text-2xl font-bebas font-bold">firstname : thanapat</p>
            <p className="text-2xl font-bebas font-bold">lastname : sukhonthip</p>
            <p className="text-2xl font-bebas font-bold">nickname : mix</p>
            <p className="text-2xl font-bebas font-bold">age : 22</p>
            <p className="text-2xl font-bebas font-bold">Vocational certificate : minburi technical college (mtc)</p>
            <p className="text-2xl font-bebas font-bold">bachelor's degree : Rajamangala University of Technology Thanyaburi (rmutt)</p>
            <p className="text-2xl font-bebas font-bold">internship : function international (fti)</p>
            <p className="text-2xl font-bebas font-bold">internship : inherit co</p>
          </div>
          <div className="flex flex-col gap-10 items-center justify-center w-150">
            <div className="flex flex-wrap gap-20">
              <img src={person} className="w-40 m-5 border-2"/>
              <img src={personcer} className="w-40 m-5 border-2"/>
            </div>
            <div className="flex flex-wrap gap-20">
              <img src={functionco} className="w-40 m-5 transition duration-300 hover:scale-120"/>
              <img src={inheritco} className="w-40 m-5 transition duration-300 hover:scale-120"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProfilePage
