import ChatIcon from "../_assets/ChatIcon"
import Handlens from "../_assets/Handlens"
import PeopleGroup from "../_assets/PeopleGroup"
import FeatureCard from "./FeatureCard"
import GetSwiper from "./Swiper"

export default function FeaturesSection() {
  return (
    <>
      <div className="min-h-[40dvh] bg-white text-center justify-center flex w-full py-[3rem] md:py-[5rem]">
        <main className="w-[95dvw]">
          <h1 className="mb-[2rem] text-4xl">What Roomeyfinder offers</h1>
          <p className="text-md text-gray-400 md:text-lg text-gray-600 max-w-[800px] mb-9 mx-auto leading-5">
            RoomeyFinder: From finding the perfect roommate to the perfect room,
            we make finding your ideal living situation hassle-free
          </p>
          <ul className="max-w-[600px] mx-auto">
            <GetSwiper
              slides={[
                <FeatureCard
                  iconChild={<PeopleGroup />}
                  heading="List your space"
                  body="Roomeyfinder will help you effortlessly project and list your available living spaces. Our platform will serve as a dedicated avenue to showcase your space and connect with individuals searching for their ideal space."
                />,
                <FeatureCard
                  iconChild={<Handlens />}
                  heading="Find a new space"
                  body="Discover your ideal living space effortlessly with Roomeyfinder. Explore a curated selection of spaces tailored to your preferences and make informed decisions, all in one place."
                />,
                <FeatureCard
                  iconChild={<ChatIcon />}
                  heading="Message potential roommates"
                  body="Unlock seamless communication with potential roommates through Roomeyfinder's intuitive messaging system. Foster connections, share details, and find your ideal living companion effortlessly."
                />,
              ]}
            />
          </ul>
        </main>
      </div>
    </>
  )
}
