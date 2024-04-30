

export default function CountDown() {
  return (
    <div className="flex flex-col items-center min-h-[45dvh] justify-center">
      <h1 className="flex flex-col text-xl md:text-4xl font-bold text-[#3a86ff] text-center items-center">
        <span className="">We are</span>
        <span className="">Coming Soon.</span>
      </h1>
      <p className="text-center animate-pulse text-5xl md:text-8xl font-[800] text-stroke stroke-green-400">
        1st June, 2024
      </p>
    </div>
  )
}
