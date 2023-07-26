import {RiUserSettingsLine} from "react-icons/ri"
import {BiFilterAlt} from 'react-icons/bi'
import {GiChoice} from "react-icons/gi"

const FeaturesIcons = () => {
  return(
    <section className="flex justify-between items-center gap-8 my-4">
          <div className="flex flex-col gap-2 items-center">
            <RiUserSettingsLine style={{fontSize: "3.5rem"}}/>
            {/* <img
              src="https://source.unsplash.com/random/200x200/?nature&1"
              className="min-h-full rounded-2xl"
              alt="img-1"
            /> */}
            <h1 className="text-center font-semibold">Personal Preferences</h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <BiFilterAlt style={{fontSize: "3.5rem"}}/>
            {/* <img
              src="https://source.unsplash.com/random/200x200/?nature&2"
              className="min-h-full rounded-2xl"
              alt="img-2"
            /> */}
            <h1 className="text-center font-semibold">Allergens Filter</h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <GiChoice style={{fontSize: "3.5rem"}}/>
            {/* <img
              src="https://source.unsplash.com/random/200x200/?nature&3"
              className="min-h-full rounded-2xl"
              alt="img-3"
            /> */}
            <h1 className="text-center font-semibold">Better Choices</h1>
          </div>
        </section>
  )
}

export default FeaturesIcons;