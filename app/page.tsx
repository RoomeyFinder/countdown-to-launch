"use client"

import { useState, useEffect, useCallback, FormEventHandler } from "react"
import toast from "react-hot-toast"

export default function Home() {
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
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const handleFormSubmission: FormEventHandler = useCallback(async (e) => {
    e.preventDefault()
    setLoading(true)
    const baseUrl = "https://backend-fwhl.onrender.com/api/v1"
    try {
      const res = await fetch(
        `${baseUrl}/subscriptions/launch`,
        {
          body: JSON.stringify({ email }),
          method: "POST",
          headers: {
            'Content-Type': "application/json"
          }
        }
      )
      const resJson = await res.json()
      if (resJson.statusCode === 200 || resJson.statusCode === 201)
        toast.success("Thank you for subscribing!")
      else toast.error("Please try again, something went wrong", )
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong!")
      console.log(err)
    }
    setLoading(false)
    setEmail("")
  }, [email])

  return (
    <>
      <section className="gap-[100px] md:gap-[80px] flex pb-[30px] pt-[20px] mx-auto min-h-screen max-w-[1400px] items-stretch justify-center flex-col">
        <div className="flex items-center justify-center">
          <div className="scale-[.3]">
            <LogoSvg />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex justify-between w-full flex-wrap md:flex-nowrap gap-y-[18px] py-[18px] md:py-0">
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
            <div className="w-layout-hflex animate-bounce w-full md:w-fit gap-[3px] md:gap-[10px] stroke-text">
              <div className="text-block !text-[#3a86ff]/30">{seconds}</div>
              <div className="text-block-2 !text-[#3a86ff]/30">s</div>
            </div>
          </div>
          <div className="w-layout-vflex flex-block-3 !items-center sm:!items-start">
            <div className="text-block-3">We are</div>
            <div className="text-block-3">Coming Soon.</div>
          </div>
        </div>
        <div className="w-[90%] mx-auto md:mr-[15dvw] max-w-[450px]">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            onSubmit={handleFormSubmission}
            aria-label="Email Form"
          >
            <label htmlFor="name" className="field-label-2">
              Get notified when we launch
            </label>
            <div className="relative overflow-hidden rounded-[100px]">
              <input
                className="text-field w-input"
                maxLength={256}
                name="Email"
                data-name="Email"
                placeholder="Email"
                type="email"
                id="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="submit"
                className={`${loading ? "!bg-gray-500/50 !text-black/40" : ""} submit-button w-button`}
                value={loading ? "Please wait...":"Subscribe"}
              />
            </div>
          </form>
        </div>
        <div className="w-layout-vflex flex-block-5">
          <div className="w-layout-vflex flex-block-4">
            <a target="_blank" href="https://facebook.com/61558566416460">
              <FacebookIcon />
            </a>
            <a target="_blank" href="https://twitter.com/roomeyfinder">
              <TwitterIcon />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/roomeyfinder"
            >
              <LinkedInIcon />
            </a>
            <a target="_blank" href="https://www.instagram.com/roomeyfinder">
              <InstagramIcon />
            </a>
          </div>
          <div className="w-layout-hflex flex-block-6">
            <svg
              className="ikonik-hbf18j"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1024 1024"
            >
              <path
                className="path-b3onr"
                fill="currentColor"
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"
              ></path>
            </svg>
            <div className="text-block-4">
              Copyright RoomeyFinder 2024 &nbsp;&nbsp;| &nbsp;&nbsp;All rights
              reserved
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FacebookIcon() {
  return (
    <svg
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        className="path-9lcag"
        d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"></path>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"></path>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 1024 1024"
    >
      <path
        className="path-hi3rp"
        fill="currentColor"
        d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"
      ></path>
    </svg>
  )
}
function LogoSvg() {
  return (
    <svg
      width="760"
      height="186"
      viewBox="0 0 760 186"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="188" height="186" fill="url(#pattern0_6282_7320)" />
      <path
        d="M238.68 119L225.36 96.59H214.92V119H204.39V58.97H230.76C242.64 58.97 250.38 66.71 250.38 77.78C250.38 88.49 243.36 94.25 236.16 95.42L250.83 119H238.68ZM239.58 77.78C239.58 72.02 235.26 68.24 229.32 68.24H214.92V87.32H229.32C235.26 87.32 239.58 83.54 239.58 77.78ZM277.529 120.08C263.759 120.08 255.209 109.73 255.209 97.22C255.209 84.8 263.759 74.45 277.529 74.45C291.479 74.45 299.939 84.8 299.939 97.22C299.939 109.73 291.479 120.08 277.529 120.08ZM277.529 111.71C285.629 111.71 290.129 104.96 290.129 97.22C290.129 89.57 285.629 82.82 277.529 82.82C269.519 82.82 265.019 89.57 265.019 97.22C265.019 104.96 269.519 111.71 277.529 111.71ZM329.121 120.08C315.351 120.08 306.801 109.73 306.801 97.22C306.801 84.8 315.351 74.45 329.121 74.45C343.071 74.45 351.531 84.8 351.531 97.22C351.531 109.73 343.071 120.08 329.121 120.08ZM329.121 111.71C337.221 111.71 341.721 104.96 341.721 97.22C341.721 89.57 337.221 82.82 329.121 82.82C321.111 82.82 316.611 89.57 316.611 97.22C316.611 104.96 321.111 111.71 329.121 111.71ZM414.373 119V90.65C414.373 85.97 412.303 82.82 407.263 82.82C403.033 82.82 399.073 85.79 397.183 88.58V119H387.733V90.65C387.733 85.97 385.663 82.82 380.533 82.82C376.393 82.82 372.523 85.79 370.543 88.67V119H361.093V75.53H370.543V81.47C372.343 78.77 378.103 74.45 384.673 74.45C391.153 74.45 395.113 77.69 396.553 82.46C399.073 78.5 404.833 74.45 411.313 74.45C419.323 74.45 423.823 78.77 423.823 87.59V119H414.373ZM433.363 97.22C433.363 84.62 442.543 74.45 455.413 74.45C468.463 74.45 476.833 84.44 476.833 98.12V100.37H443.263C443.983 106.94 448.933 112.34 457.123 112.34C461.353 112.34 466.393 110.63 469.453 107.57L473.773 113.78C469.453 117.92 463.063 120.08 456.133 120.08C443.083 120.08 433.363 110.99 433.363 97.22ZM455.413 82.19C447.313 82.19 443.623 88.4 443.173 93.71H467.653C467.473 88.58 463.963 82.19 455.413 82.19ZM485.711 127.55C486.701 128 488.231 128.27 489.311 128.27C492.281 128.27 494.261 127.37 495.521 124.49L497.681 119.54L479.861 75.53H489.941L502.631 108.11L515.321 75.53H525.491L504.521 126.83C501.551 134.21 496.331 136.55 489.581 136.64C488.231 136.64 485.621 136.37 484.271 136.01L485.711 127.55ZM563.825 68.33C560.675 68.33 557.975 65.72 557.975 62.48C557.975 59.24 560.675 56.63 563.825 56.63C567.065 56.63 569.675 59.24 569.675 62.48C569.675 65.72 567.065 68.33 563.825 68.33ZM533.675 119V83.81H526.475V75.53H533.675V73.1C533.675 63.38 539.435 58.07 547.445 58.07C550.415 58.07 553.115 58.7 555.005 59.78L552.935 66.8C552.035 66.17 550.775 65.81 549.155 65.81C545.465 65.81 543.125 68.24 543.125 73.1V75.53H551.945V83.81H543.125V119H533.675ZM559.145 119V75.53H568.595V119H559.145ZM610.159 119V91.82C610.159 85.07 606.739 82.82 601.429 82.82C596.569 82.82 592.429 85.7 590.269 88.67V119H580.819V75.53H590.269V81.47C593.149 78.05 598.729 74.45 605.569 74.45C614.929 74.45 619.609 79.49 619.609 88.4V119H610.159ZM662.484 119V113.06C659.154 117.38 654.114 120.08 648.534 120.08C637.374 120.08 629.184 111.62 629.184 97.31C629.184 83.27 637.284 74.45 648.534 74.45C653.934 74.45 658.974 76.97 662.484 81.56V58.97H671.934V119H662.484ZM662.484 105.95V88.67C660.324 85.43 655.734 82.82 651.234 82.82C643.764 82.82 638.994 88.85 638.994 97.31C638.994 105.68 643.764 111.71 651.234 111.71C655.734 111.71 660.324 109.19 662.484 105.95ZM681.479 97.22C681.479 84.62 690.659 74.45 703.529 74.45C716.579 74.45 724.949 84.44 724.949 98.12V100.37H691.379C692.099 106.94 697.049 112.34 705.239 112.34C709.469 112.34 714.509 110.63 717.569 107.57L721.889 113.78C717.569 117.92 711.179 120.08 704.249 120.08C691.199 120.08 681.479 110.99 681.479 97.22ZM703.529 82.19C695.429 82.19 691.739 88.4 691.289 93.71H715.769C715.589 88.58 712.079 82.19 703.529 82.19ZM734.276 119V75.53H743.726V81.92C746.966 77.78 752.186 74.54 757.856 74.54V83.9C757.046 83.72 756.056 83.63 754.886 83.63C750.926 83.63 745.616 86.33 743.726 89.39V119H734.276Z"
        fill="black"
      />
      <defs>
        <pattern
          id="pattern0_6282_7320"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_6282_7320"
            transform="matrix(0.00277132 0 0 0.00280112 -0.00438048 0)"
          />
        </pattern>
        <image
          id="image0_6282_7320"
          width="364"
          height="357"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWwAAAFlCAYAAADPkNJxAAAgAElEQVR4nO2dPXIbSdKGaybWo7HcEyz3BKJOINJHhKgTiDoBNQZtDW0YlE5A6gSkIugLcwJBJxDnBB/WgP9Fc7OlJroB9E9WVVbV80QwOAI0IgBWv531Zlbmbw4gMrP5+sg5d7TxKpYPlwcr7VcW8mcBaINgQ1Bm8/WJc676eiXCuSmemyzl67tz7v7h8uCx9Te2EPJnAYQAwQbvzObrY+fchXPuzDl3OPHnVSL62Tl32yWoItJvlX7WUn4W4g0mQLDBG7P5+kyE+sTTz7h1zl1VYjqbr8/lZx23/pbyz2o9AxAIBBvUkYj62qNQb/LYw+7Q4qMIN543BAfBBlVm83Ul1O8z/1QrsX73cHlw33oGwCMINqggUfWNR0vCIpWP/o4VBKFAsGEyItZfFZJ8KVIlJk+xSCAEv/MpwxQk2VeqWDvZUXydzdelvn8ICBE2jEZK6L7yCT5BpA3eIcKGUYgNcsen95Njbl7gGwQbBiPb/7uCbZBtHM/m65stzwFMBsGGMdwErHtOjXM5MASgDh42DELECCtkN5WP/R/8bNCGCBt6I1bINZ/YXqrP6YPx1wgJgmDDEN5jhfTmvbRyBVADwYZeSHR9wac1CKJsUAXBhr5otCstjXMO1IAmCDb0heh6HOcpvmiwCYINexEvtqSmTpq8zeetQGwQbOgDdcXjOSb5CFog2NCH13xKk8BOAhUQbNiJJM1CTY7JFXYooAKCDftAbKZzJM2yACaBYMM+sEN0IPkIk0GwYR/YITqwU4HJINiwFWn0xMEPHY5k4APAaBBs2MWrHc/BcLBFYBIINuyCbbwufJ4wCQQbOpGqBg586HLIcAOYAoIN20BY/EDVDYwGwYZtICx+4EYIo0GwoQXNnrxS2SJ08INRINjQBeVnfmH3AqNAsKELBMUvZww2gDEg2PAMERJ8Vv/wGcNgEGzYBDskDOxiYDAINmyCkIQBWwQGg2DDJmzVw0G1CAwCwYafyOlGor5w0FsEBoFgQxMEJCzMe4RBINjQhIRjeLCgoDcINjzB6cZosKuB3iDYUEOkFwdsEegNgg01lPPF46LUNw7DQLChPt2Ifx0PdjfQCwQbHIIRnSMpqQTYCYINjtmNJiD5CHtBsMERYZuA3wHsBcEuHJkxyOnG+FS2CHkE2AmCDdghdsAWgZ0g2MBW3A78LmAnCHbBSGUChzbscCgWFUAnCHbZ4JnagwNMsBUEu2zwTO3BYAPYCoJdKDR7MgszNWErCHa5YIfYBVsEOvlH14NQBIiCX1bOuaVz7tE593fjzzWrh8uD5eYrkETwSWWLPFwerPL5OEADBLtcKkvko3PuvwM+gX83qkqI0H+xlK/v1feHy4NF62/0RER8KdUi91HeDZgFwS4QEYPTqRGcJMeO5evf8r0EIa+i5kqUv1TfiYQhFAh2oWiIjPwbC/n6Sb2tl1OUuSTQKpH+XEW9XVaGB1ZVYvjh8uAx+DsFsyDYoE69rRfLpY7oX4uIp3RQp7oh3VZCHUikf1LZKvK5IdjwEwS7MCT6DS0+97Uf2xBvy02nFiLSt61nwkI9NjzjNz6OspjN1+cGhKj2v89kPJaVevBKqK+mJA01kZvrClsEaqjDLg8TCbLK/65uHA+XBy+rBOimDx6YKvr/z8PlwakVsXa/rCUON8FPsEQKQk43movWRCQX8vo+OOfOW3/JD6Yi6i1gi8BPiLDL4jh08mwI1db/4fLgnXPupeeIu7ppvbEWUW9hwbxHqEGwwRzVTaUSU7FKtHcEV9UNQRKh5hH/GsGGJ7BECiHFDnAS/f5nNl+/F6tkynuodhbvLO8wdsDBHHiCCLscTlKJKjd5uDz4ONEmqXzql4mKtZOj6kTZgGBDGoi/XVkk7wZEnI9yBP/P1jMJgS0CNQg2JIXUkPeJtu/Fq7aeVOwLtggg2CUwm69PItc5q9KItq+2/LuVBfIms6ZMC+Y9AoJdBkc5dpQTq+O0EX2upFwvaQukCzoCgkOwiyHbi10sj5fyHk9TTawC9AHBzpwYzZ4icCg2SO7vE1ukcBDs/Cmhp/JxCW1IsUWAgzP5U0IvilUdfVq0RGSXU0/nqX8fL7b8blYyasw15kA+m//IvMdyQbAzRk43bo08GyO+ao43ROTZ4FiLJXJ1Q6tKwGbzdev5SK+nnrZzPLJ+umV7yHt7lK9DGawAhYFg583T6UaJ8I5l2ssr+T548ktDEBeNaeCLyEJ+3IyqY0Sf4ivX49B8TtSpf28rBLtMGGCQMbP5+iZwq9J6KG2w5N+mDRLKFpFI+iKASG/jX9gi5UGEnTehxNqJDfA0MX02X1fR9ycZWLvVkplKjIZWcgjpg4Hp8GdE2eVBlUimRC7/qiLOa+fcj9l8fSci54POhlY+hLx6D7P5+qtz7qsBsXYyFxMKA8HOFysXdHXj+Dqbr79V8yRbzyojAq4mqAaFuuZMbBkoCAQ7XyyJi5Ok500lfh4j7prJEXYVpUsOwJpQN+EQTWEg2BkiVSFWo68TibjvpkSIexpaLSf+25UQ/gicAxjDW+OvD5RBsPMkhcireo3fZJrMGLY2tBo7bbwRVd8lcuDoGFukLBDsPEklIVWJ4rXYJEOFp1OsN/7t3siu5FsCUfUm2CIFgWBnhghfatNJTiTa7iWWPRta9bZF5Od+NWwj7eJix3OQGQh2fqQacR1KUvKm9UybvQ2t+tois/m66p19k3DPlSPmPZYDgp0frxJ/R+dSArhLQHc91/vvyc3hQ+uJ9CD5WAgIdkaIyOXgaR5LJUkrctzX0GqDRde/4cIf2/cNPnYhINh5YbVeeAzbRPukb7OprmnjUgmSYnJxF9gihYBg50Vux5UPt4j2EDarSe4STMr2AVukABDsvMhxazxVtJf1/ys2SE67kCY57RhgC7RXzQQ5+fc147e4kg6AH7cdmNmGlO29KkDU3nQ1w4J8IMLOh9y7t1WR9osJPaBLiEDp4Jc5CHY+lFAp8FfrkX6UEnVSLZI5CHYGyIm+EnpKjBJeicpLEO3DyH3QwTMIdh6UcJEuJ06v+dJ6JE+wRTIGwc6DEkq6pgpuKbbI+Z5TopAwCHbiyMVZwqGJSYJbkC3i8LLzBcFOnxIuzkelSeyfW4/kCbZIpiDY6VPCxdnrKPo+pEZ5bFlgSpxhi+QJgp0+uZ7ca6KZMMQWgWRBsBNGSrhyj6RWyqf3SqkWobdIhiDYaYMdMpCCbJET5j3mB4KdNtgh48AWgSRBsBNFOtBxunEcn0K8cANgi2QGgp0upZxuVLcvpERwyqnJVDjGFskLBDtdSvCvfdZNY4tAciDYCSJRUwmnG1UTjhuUcojmovUIJAuCnSYlJBu1Tjd2UpAtwrzHjECw06QEOySEZUHyEZICwU4MOXJcgi8Z4oALPjYkBYKdHiXYIdXpRp/+9RPSX9ub7WIIbJFMQLDTAztEF5KPkAwIdnowu1EXbBFIBgQ7IWRbW0LbzGAiKraId/vFAMx7zAAEOy1KyPbf+zjduAcGG0ASINhpgR3iB2wRSAIEOxHkdCPNnjxQ0LxHbJHEQbDToZRmT7FOHzLYAMyDYKcDwwr8UowtwrzHdEGwE0AusBIOzERL/oktctt6Ik+wRRIFwU6DEi4wr82eelKKLUK1SKIg2GmAHRKAguY9YoskCoKdBsxuDAclfmAWBNs4UoaVfTQk0a0FSrFF6C2SIAi2fV4V8B7NRLUF2SLMe0wQBNs+9L4OD9UiYBIE2zDS7InTjeEppbcIh2gSA8G2TSmnG01ZEAXNe8QWSQwE2zYllPNZjWZLqRY5bz0CZkGwjSKRTwljnaz2osYWAXMg2HYpofbawunGTgqyRZj3mBAItl2Y3RifT8ZfnxZE2YmAYNuFYQXx4dQjmALBNkghTeZXhk43diK9uU1aNspgiyQCgm0T7BA7lJJ85Kh6AiDYNsEOsQO2CJgBwTaGbE1LaH2ZhBCKLWK19FAT5j0mAIJtjxIy9gtrpxv3UIotwmAD4yDY9qD3tT2wRcAECLYhCjrdmJQAym6gBNHGFjEOgm2LUpo9pXiCsJTBBhyiMQyCbQtmN9qFeY8QHQTbCHKRlOBfJ5nAK8gWcXjZdkGw7VDK6caUTw6WYotQLWIUBNsOzG40TkHzHrFFjIJg24HZjWnAYAOIBoJtACmlyj6isd7sqSdUi0A0EGwbYIckgtx0mPcIUUCwbYAdkhZUi0AUEOzISLOnEiKZnBooMe8RooBgx6eE2utUTzd2UtC8R2wRYyDY8SkhiskxUVeKLcJgA0Mg2BGRWleaPaVJKbYIPrYhEOy4lHAxPCZ+urETeU/Me4SgINhxYXZj2pQSZZeQZ0kCBDsuzG5Mm1J87BLOCSQBgh2J2XxdQtSyyuR0YydS+VKCLYIlYgQEOx4lCHYJw2tLsEUo7TMCgh2PFwW8xxL6bhRhi5B4tAGCHY8SopbsxUxskSLmPbYegeAg2PHIPWJZyJSWEiilgx9EBsEGX5QkYqVUi0BkEGzwRTEiVti8R4gIgg0+eMyp2VNPsEXAOwg2+KDEaDP3eY+l3YBNgmCDD0o5sv2T3G2RAndMJvlH6R9ARB4zLe1b5djsqSdfch1eO5uvvw447LXaOAFatyd4lK9lQRVEqvyW0XtJioEXQErcPlwevCv49/p/1Cz3ZiEC/l1EvISTsZMgwo7HMlPBLj35dp9rlO2BZ+t/Nl87uS4WEpWXVMvfCyLsCchx3XoIQfX9nxsHYkoZUNDkXyVfZNLU62vrCRhLLeBfiMAR7F7IXLtj+Xol3jMNcdrcP1wevGk9Whiz+foH68MLdWL3S85dIHeBJdKBREknIs7HeJK9Kd0OqanE5H3rUZjKodhN57P5uhbvTyUluYmwf0XQZyLQzLAbT9F2SI2spx+tJ8AXVeLykyS8s15/xQq2+M9vJZKmdeR0sEMazObrG5KPUbjNOeouSrAbkfQFHqM6pySFfkGUHZ1qLV7ltiaLEOzZfH3eiKZBn6r86pTP9Tmz+foaLzs6WQl3toI9m68P5WK5IGnoHaLrDmQNfmM3Z4IshDs7wZat6Af8w2DgXe+AumxzVIL9R6oedzaCjVBHocrIv6Qx0G5m8/WfsjbBDrci3ElVlSQv2Ah1VN6UeoBhKFSNmGQlNsnHVF5wsoIt/uA1F0E0Pj5cHvxR6HsfBaJtlmRskiQFW7aYJBPjUXRHvikg2qapou0/Lb/ApARbEjg3ZN2jspSqkOJPNA6F9ZsES7H6TOZlkhBs7A9TVAv5HWV8w0isJvux8fV3x0CCzpmdje6VNfW5hxcbXS2tsxKL5Nba6zQv2LP5+kyiEuwPWySZZQ+NJMXvDLc/WMpXkCECEnzVnS9fiKhb3XGYW+NmBVt+sTc0YzIN0fYOxAK5MxZsmBsQ0Ghf/NqggC9ljZtISJoUbNla3SXk9W1uIZ1cFH1p9td+Jd9TOkZPxcgGs/n6vdh4FriX1reLLivDGnL9n0g7CQs7k5WIdvQSVnOCbWyhd1FHJ0vx8rzdeSXyOJLF+0IWr9WbmOlkTUiMVIIspeXofcq2lbGGbe9i+9pmBNuwBXLf2D5G3xbJAq6HK1jbPq5EtIu0SGQNf40YFa4a7UWzu3GKxfQ28s0wakmrCcGWLdCNke3PYy3SKZzia0QgVraPThI1yZwe0yCyWD9KDbG5qgYfGGjsFi0ZGV2wjVSB1OOGPqccHRoT72IO10jA8TXCGl5INF1sewBpnfwhwk4zynmEqIItH/ZN64lwLESks4tMREQuRMBj3QyzP2QTSayXEuFRnSNEEu7g6zuaYEc+SJD1GKEmsn08ixSFuJyTkRHEuijrYyiRrJKgoh1FsCNl0VeNQZ1FVjJE3D6uZFFnc4MMLNb12v3IQaX9ROjgGUy0gwt2JLG+YrH/QvIG14GFOxvRDizWCyknK75cciiBe7cEEe2ggh1BrG9lC8li7yBCxJ28aMu2+0cAsTbbzyI1Ag6Q8C7awQQ7sFgnPQYoJA3fL9RElGRFO2Dp3kJ8f3aESgQ8Pe21OiqIYAcU6+QmSFhBfL+bQEfikxTt2Xz9LYBYF1fDHoqAXT+9ibZ3wQ4o1vfi9RGVTEBskutAW/5k5kEGWMePElWzK/RMoDXu5Ri7V8EOVLpnpjFLLgSMtpOo0w7Q3wYLJDCBLJJT7Vp5b4Id6FAMDYc8EqgRl2nRlkqDr60n9GDcWiQC5CTUd5FeBDvAIne09AxDoEjEpGjJTuObx60zfrUBPNtdqgHJ761HJtK4wH1Rd4RDrAMgnurLgf29h3IupVfW8Dl84B1ibQMJFnyVTx5r7lJVI+wAWwwSMxEJkHh7YyUX4TH/Qs7FKJ5tXJUkpHaE7bNF6lL8IMQ6EhKJ+LQubmSHFhWx9HyJ9SlibRMRVF/r+1ostkmoCbYkqHwNH7jPvetbKnhe1Ici2tFa7TYGaWiTXT+VHPG4vlXWlYpgS1Tkq5qgSkhR8mQIWdSnIkLaHAc8ddmFr94TZga5wm48ivaJBLajmexhS0TyzdMip+TJMJ6bIAX3s6Uplo+EefRZgDAcTzmbSaV+GhG2r+ZBiLVxJGL0FWkHtUYax5a1QawTxVP1yCRrZJJgS0TiIzmDWCdCQ7S18eUlb8NH4HGLWKeN6JC2lXUiFSmDGS3YHpMz94h1Woho+/idnUlQ4BWxdrQDjwXrOBtOpaRYk+sxO8gpEfYHD96lrwsfPOMxURPCGtG2Qp7OC7QehSSRgoc3ytbf4Zjk+ijB9lSn+kjpXtqIaGuf3vPlLT8hEbx2kyuqmjJDdpHap6vfD63NHhtha19AKxZ5HkjLAO3qjnMJEnygvZYZnJEpEpBo5yQGrb/Bgi11hNqn0VjkefHOh+fXemQikvjRTDQu6A+SPX8or+2zIcHIIMEWL1H7UMNHMul54cnzOx6bWe/CQxnfCt86f2Rta+dqemvq0Aj7vXKicUnXvTyRHdOV8psblVnfgvZaZtpRIchQAs2d1EnfKLu3YIs5rhldE5FkjtgDmn72oUayW0T/ovXEeBY0dCqOK2VrpJe2Domwta2QKybFFME7ZWvkQiHKPlOMrn1skcE4HqyRXlF2L8GW6FrzTD3JmULwsLA1omzN4OMTgUeZiDWiubPau+vrG2FrWyFEJAUhdoHqwh4bZStXhjw+XB5YnJQD4dDMwZ3tq8veK9geomuskDLRtEamRNlvW4+MRzupCokhWqa5DnZG2X0i7J3/wECWWCFlItaI6sIeGmVLzxCtAzgLylFB+KgYjJzvWtc7BVv+R83omhK+gpGbtdYBqcMRE440gw+ia3hCgpFPSp/GznW9U7CVs+n3YtJD2WjetHvnViT42HohDGTBWoYNNKPsrYHFPsHWTDYSXUOdWdcSu6MBx3o1gw+ia3iGcpR9vC35uFWw5ULo/J9GcEuiERpoCl7fJOLr1iPjWBJdwxa8R9lbBZtsOvhCOcremaRxvyqdtOwQrSgKMkOibK1EdOd67RRs5WQj0TV0oXkT37dWOxf/CB6pDIE9aN3Qj6Sq6Rmdgq24wB3RNXShHGXv2w1q2SGfW48ANJDgVOuQWGtdbxNsrQV+T3QNO9C6mW9N0shuUav2muga+qB1Y28Fzi3BVi5/wu+DrUiUrXVD70zSKK5lgg/ohbRi0Eg+Hm0GIi3BVvb7yKbDPrRu6tvW7avWI+P4wm8SBuAl+dgl2Fp2CNE19EFrYbeiEWGbkA+FftcwBC1b5FnA8Uywle0Q/D7Yi89SKMmy7yz568k902RgCDJxScNC2xlhayVnWOAwBC27YXN3qLWesUNgDCq7suZp3k3B1rJDWODQG8UkzcnGIRot/xo7BMbwl9KntlWw1SLs1iMAu9FaMydb/nssC3aLMAbFQORn4PFTsCVh05W0GQp2CIxBa1f2tLhlPWv411pREpSJRqXczxOPzQgbvw+ioWmLbHyfCqWpMAWNG/5hXQHVFOwXrb82DhY4jEUzGlHpNMlZApiI1vp5WtfaEfaS02AwAZXdmWTVNRKOiDVMQsr7NGgJdqsz1AhY4DAFzWhEYz3jX4MGGuv6yQF5EuwBUzv2wQKH0cjuTGOH9kIp4agVHUHZaKyjZx621mQZImyYisbi1urljr0HGnxX+DeeWSIaCcdHyvlAATO7NEX/EcpG5cZfVYrUgq3h97G4QQMr64jdIqigWGl0pGmJaIT9UDiGyujYLYImGlG2qmATYYMWFrxjAhDQREewt/QQHgMJGtCCtQS5obJj+13xRBgRNmhhYS3hYYMmGju2F1qCTUQEmvyXTxOgxSGCDRYhuoXcUNHIrpmOYyCjDllB0ydQRk2w/9l6dDhk1EETdmwAHfyudGgGQA06PgJ0cqJliQAAgGe0BJuICADAMwg2AEAiYIkAACQCgg0AkAYLBBsAIBEQbIAOFMfmATitnk1agq0xPw8AIFdMCTaHbwAA/LLCEgHoBksENNGYm/v9d2qowRqKQzUArKBiG1eC/Xfr0eFo3D0AaiwI9qvWIwDj0bCNH0k6AnTDmgZNNNbTo5YlwuIGTSz4xyTSQQXFElE1wWZxQ3bM5mvWNWigNTf3SbBVpsWQKAJFrPjHrGnQQCPH9zSY+nfFaedBF/dsvsaGyRcrQkniETRQSTi6xsEZjSg7iO9YCfVsvv7mnDtrPQm5YEWwsURAAw1tfBrDWAu2RpT979YjykhU/VUuJLarGaKYoLlvPTIcDs/AJBTzIP+zRJp/mIjXaGRDrCFftH6/n1uPjIAmUDARrfXzTLA1Ds8ce/aVbzYuZg7r5IlWgkYrN4NgwxQ08iCrejC1ZoTtfC3u2Xx93uFZk3TME4019CgLXCM387r1CEB/NHJti/o/ngT74fJg0for4/CVVf/QegRrJDukNFQjN/Fdvmusa987R8iU2XytVRhRr+dn7VU1omz1CFui666LmIsoP7TWTy3Uf7WeGQcVSTAGrQD2eYQtqCQePUQjF61HBBJC2aGywBs7Rq2dI7YIjEHlRt90QJqCbS4aEfHfZX10Rd6QLhpr52fgIYfCNHzsM2wRGIKU82no07Py1KZgW/Sx90XQCHYmyALXEMXNdaxRj+2wRWAgW52BgTwLpH8KtmTVNRpBaS7sXdG14+hwVrxVejObO0WtnaPW64My0NLBrRG264hOxnComB3dd3oSDzsftNaMrwj7hAZn0AcplFDpf13XX9dsCrZWNKKVpNl7gdACM30U/b7lw+XBM89a/qwl2uetRwDaaO3GWut2U7Bbf2Ek5wGTNHiL6aPl9207jv6l9cg4tF4nZIrswrR2/q31/EywJRrROvUYSkgpuUoYubH7skNqtAKRQ9nuAmyj65DfGB67Wl93zXRsqfpINKKRPknQY7zFpDlT9PtaC9zp2yJE2dCJcvDRqcNdgq21sI8VDrb0bUqFLZIuWgK4b91q2SIa6xry5L3iCezb1iNdgi1Zyc5IZQRTzfe+ZYZEPQkiwheknerD5cGt1jg8xW0vZIJE11o6tNisDqlpCbawc/EP4HyiXdH3xnFE1JMkWtn0rXbIBpolfqw3aKIZXW/V322C3RmOj2R0NDLwaDFRT0LIjVwrgbd1gW9w1XpkPKw3eEI5ul7JbrCTTsHWrl2dWOLX93UQ9aSFpuBtXeBNZJu5rZJkKCdUjIDwwbd3XdMp2IKWLeImXpxDkkU3rUfAHMrR9f02v28LVta1KtXpYm4g4ZG1/F7xB39qPdJgq2A/XB7cK/UWqXg/1suW19HXFqm87D9bj4I1NIVukADLdlNrXVtab9V5hGtO/gZHM0i83Rd8bBVswUo0snObsPlzsEbsIoKiFQk+yg19KJpe9oWRcwB1t8OviHYYpGeSptbsjK5dD8H+qFgKdT5hIe19IxvcsWjNcq34wkYFFMolfodGrLh6vdeiTf9uj8jnq7mWF30qnXYKtnLy0Y19g7JNGBJlH4pos2gNoRyRrCSgGMvQIGAXJ4odKjVAtP3zQbkff69d307BHvIP9WRKZv1qYFRUfZg/iLRt4CEiud3szDcQzd1jxY2xFgnHiLYfxHLVTDQu+g5C3yvYI6LbfVyPWUTyOoZGRXWkwdH1+GhHJJMiZBH7P1pPjMeKNdIE0VZGPss75X+29zrsE2E75Sh79MJ+uDz4c8Sx+doeGXWjgOl4iEj2ZtP7oFwx4mQHqfk+NahFmwZpOtwo1lw7Wcu9Na2XYHuIss8mRL1vRm5lqwvpG9F2WOQmqR15agYQmlG2i1hat2tLfSxrH3twAnIz1taPQWu5b4Q9+B/uwc0Ea+Rd64l+HEm0jU0SDm0r5KNGdF0jZYG7xG4MMWyIfVEa9uAE5GanmYOpuBq6lnsLtocoe7QXJBfZWNF2UqlQCXeVlHyPVeIHEQdNi2DlIXBwHqLsJ3FsPeqXPuP9ftqDrWdgK6IP2r/PxzFVTr+1HtmBvPAfyh7OlXjTg5GKE63t9r0cg9/a2hD6I57pNytrZR8iYtr+c+VPTgksBlEFIAN2M1VE/oa1vpuGWGvbSW/GHPoaYonUmXXN+lU35WSiJI20LogzEf8fEnlXlk3I2ZS5cacs1qMikgFcKScgnRwWC5mEHHJtHstaD3K0vrqBJ9o24saDWC9GntAdJtjuV6WG9sK+m9Br5HZCInIbdXOiV1uehx1UNzsPi/yPiXXXO/FQ5ldzHaop08PlwccR1+YHCVC8vEZpSnUnO/Ok5q/KOtb2/FdTgsxBlkiNRMTank61RTsde1GK4N8onqT7Qy4AGPZ7eO8hOVNFJKetRz0g4uIjMfduV59jLSRvMLZO+FGO+08qm5TX8EqCnuYuq0oY+7gpquPJInNTdWWUYDt/C3vyhSmRwpTKhIVcXHh7A1HOKdRUN/CXoX4fYoF9U65sqQkl2jcKDbaWktOpvi+3ff4SKB1JoPRqT8D0ckjNcSw8rWOnoW9TBNtHAtJpJWrkQ3+7Z5NIcCQAAAY8SURBVAE1qTylT32PiELr8z6WXZf2evCWaNyGpx1kjXfR9pgocyLghyNuaMF2SVPwKNZV4PGfqbbeaMF207dfu1DLrsvirYe9vmgISvXBfZcFuPDpj+aOR7GuIruXrUcD4HFL7DIQ7TGMqooIieffucr7nyTYzq/nF7QkCsbhUaxXktOItoWezdffPApeSaJtPrpWspG2oebdD64S6eCdcoVGzbl8iGAUj2LtxAqJ7XdqVx81ufFd5ia7xlMPJzmH4Kv6RoXqpuZZrJeaidbJEbbz7/kRaRvEs1hXcxrftB6NgOe17eT0sNeSRed/u7+LIInWMQTYgaj41k00ImwniTofR4YdkbY9PIv1lF4x6sja9hkhnofoPSJR3qmHMxS7sCzWx1I04dMuGl2mvA2VCLumaqqkPOOsSZBIBHbjMYteY7L0y/O22Uk09iZElZJYMReebriutkEMi7XvNex83ay0BdtXqV/NpMM1MA250DUnnm9iNiJz/gOSmiBljHKtvpfSV82a84WItcWbbt3q13fHQm8HhFQF2/nfLjsL1QOl0Rjv5TPCNJ+rCFh1EbQxk5Tn1mcWxl63C7nZmDzHILmIG08Hopp4Xcfqgu0S33LAc+QG7KM3SJNo9dZDCSjaKxHAoO0RRNjqU4tHOwRuKX74X5IkNnkyWH5fHwIlXL2XL3oRbBdm++zkdOI7LBI/yI332uNuyaVocwXYRTYxazFYJ2BU7UKtY2+C7cIkalxdVcCRcj0Cen3J2luBRdtJa9krgpP9SH+T6wDrtyZY0OFVsF040XYsaB0CRiXJ5yIiiLbp6ovYNBKpPitgNgm6Qwwh2CGPxxJtjyRgVO1yShxHEG0n6/wK4f4fkYTaxbDzvAu2i9PT4F4iEVqk9kB6WH8IuNhPc7qpBkrMdlG0cEcUahcr9xJEsF0c0a7HmX3EJukmcFKmJsvqnsiNlh5lrd+WsNbFoz6PJNQuZglqMMF28RY1vt8GItQfAhwCaZJ9/XxgW6mLVaOve3afc6NePNbn62KfFwgq2C7uon6Ufif3pUbckYTalXbYKWCifRdLGfdltka6D2I31SIdcifYRfTdYXDBrom4qIuzSiQyuYgg1K7Uk6mBDo/1JSnxNibSLmSfl31EE2wXt+VjTXW3/JxjVUnD59PuFTGEoEesrRGpgmQfj2Kb/GVl0pKs1fp05Zmxz8vUGo4q2M5OJKIyLdoC8nm+juzzOTmh96b0hK9YgHeRdjd9eJTf1d/yfenzd7YxtPfFxP4lvjHXITS6YLtf3uqdkV9cvX1cJDLh+VDE2VJ04q1bWaoEatWgyaIx99TJdfFMuOqdqazBzUKCZh+SV/Ld6k1rk5X41eZmUJoQbPfrznvX8YuPSR19fNk16j80Gw16LF0EVOTsQCySOyO+LHSzELE2udM2I9guXBvPKdQCXk9b97p9dL8u8iO5kVkT6CZLWeg0KdpB4O5x0J8o3RGHYkqwa6Sq4cawt9Vk1Wg1+XfjzzVbRV3EuH6PzW3lq40/W4dpQAOJdGgJujEdVTcxKdjul0Vyk5DvVSJmvb5UCDCuC7aTnIVnVrBrEkzWlEIyUYl1IrQDhUS7e5oXbEe0bQ0Si56IeBK1JJIONJIQ7JoIXeXgOXjVAZBa+g/426qYnjnZl6QE26VRSZIjSxFq+owHBOFWIQuhrklOsGukwuKa7aNXaJRvABHui4SqhiyQlVDXJCvYNfh+XqCXuEFkrV+QnNxK3V72KtdkePKCXYNwq4BQJ4CRxl6WWMq6zb51cjaCXYNwj6JufoVQJ4YcMnttsMudb+qug59LOl2bnWDXiMd9QXJyJ0uZToJHnQEFiPfP1rClHtbKVrBrpKqkTtqwfcx8jBT8DxHvuvdMysnKhfTuruyO4tdr9oLdpBF1l7Z9dLLwP5c8Iq1UGgMCXiQg4LVAL60MWLBEUYLdpBDvL4u5fqCP5HqORcSPIs35XMrXd2mSVnwEvY9iBbuJLN7XGWwfV43+3UTSMIjGIILNzpE1Rz1txeawg+YQhKeaaA5gjQfB3kAW7Uki/t+qsYVMYkIOAIwHwe6Bge2jkwz5Y8PfMzMBBwDCgGCPpDFMtP76ZyMaHzp8oDn0gC0kALRxzv0/EDnNn9UahJYAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  )
}
