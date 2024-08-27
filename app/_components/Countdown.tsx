export default function CountDown() {
  return (
    <div className="flex flex-col items-center min-h-[45dvh] justify-center border-b min-h-[60dvh] bg-[#3a86ff]/5">
      <h1 className="flex flex-col text-xl md:text-4xl font-bold text-[#3a86ff] text-center items-center">
        <span className="">We are</span>
        <span className="">Coming Soon.</span>
      </h1>
      <p className="text-center animate-pulse text-5xl md:text-8xl font-[800] text-stroke stroke-green-400">
        1st October, 2024
      </p>
      <a
        type="button"
        className="bg-[#3a86ff] w-auto mt-[30px] mx-auto max-w-max py-2 mt-3 mr-auto  text-base leading-7 w-1/3 text-white text-[14px] px-4 font-[500] cursor-pointer border-0 hover:brightness-[105%] rounded-lg"
        href="#subscribe"
      >
        Get notified when we launch
      </a>
    </div>
  )
}
