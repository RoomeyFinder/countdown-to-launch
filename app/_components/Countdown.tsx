import { useState, useCallback, useEffect } from "react"

export default function CountDown() {
  const [days, setDays] = useState<string | number>("00")
  const [hours, setHours] = useState<string | number>("00")
  const [minutes, setMinutes] = useState<string | number>("00")
  const [seconds, setSeconds] = useState<string | number>("00")
  const formatNumber = useCallback((number: number) => {
    return number < 10 ? `0${number}` : number
  }, [])
  useEffect(() => {
    const countDownDate = new Date("May 15, 2024 15:37:25").getTime()

    const intervalId = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      if (distance < 0) {
        clearInterval(intervalId)
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        setDays(formatNumber(days))
        setHours(formatNumber(hours))
        setMinutes(formatNumber(minutes))
        setSeconds(formatNumber(seconds))
      }
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [formatNumber])
  return (
    <div className="flex flex-col items-center min-h-[50dvh] justify-center">
      <div className="flex justify-between w-full md:flex-nowrap gap-y-[18px] py-[18px] md:py-0">
        <div className="flex gap-[3px] md:gap-[10px] stroke-text">
          <div className="text-block">{days}</div>
          <div className="text-block-2">d</div>
        </div>
        <div className="flex gap-[3px] md:gap-[10px] stroke-text">
          <div className="text-block">{hours}</div>
          <div className="text-block-2">h</div>
        </div>
        <div className="w-layout-hflex gap-[3px] md:gap-[10px] stroke-text">
          <div className="text-block">{minutes}</div>
          <div className="text-block-2">m</div>
        </div>
        <div className="w-layout-hflex gap-[3px] md:gap-[10px] stroke-text">
          <div className="text-block">{seconds}</div>
          <div className="text-block-2">s</div>
        </div>
      </div>{" "}
      <h1 className="w-layout-vflex flex-block-3 !items-center sm:!items-start">
        <span className="text-block-3">We are</span>
        <span className="text-block-3">Coming Soon.</span>
      </h1>
    </div>
  )
}
