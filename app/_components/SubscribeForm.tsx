import { useState, FormEventHandler, useCallback } from "react"
import toast from "react-hot-toast"

export default function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const handleFormSubmission: FormEventHandler = useCallback(
    async (e) => {
      e.preventDefault()
      setLoading(true)
      const baseUrl = "https://api.roomeyfinder.com/api/v1"
      try {
        const res = await fetch(`${baseUrl}/subscriptions/launch`, {
          body: JSON.stringify({ email }),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const resJson = await res.json()
        if (resJson.statusCode === 200 || resJson.statusCode === 201)
          toast.success("Thank you for subscribing!")
        else toast.error("Please try again, something went wrong")
      } catch (err: any) {
        toast.error(err?.message || "Something went wrong!")
        console.log(err)
      }
      setLoading(false)
      setEmail("")
    },
    [email]
  )

  return (
    <div className="mx-auto w-[90%] max-w-[450px] flex justify-center items-center">
      <form
        className="w-full"
        name="email-form"
        onSubmit={handleFormSubmission}
        aria-label="Email Form"
      >
        <label htmlFor="name" className="text-[20px] text-gray-800 text-start leading-9 mb">
          Get notified when we launch
        </label>
        <div className="flex overflow-hidden rounded-[100px] w-full">
          <input
            className="bg-white w-2/3 grow focus:outline-0 focus:border-l-[#3a86ff] focus:border-y-[#3a86ff] border border-gray-300 w-full px-4 py-4 text-base leading-4 rounded-l-full"
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
            className={`${
              loading ? "!bg-gray-500/50 !text-black/40" : ""
            } bg-[#3a86ff] w-1/2 max-w-[150px] grow text-base leading-7 w-1/3 text-white text-[14px] px-2 cursor-pointer border-0 rounded-none hover:brightness-[105%]`}
            value={loading ? "Please wait..." : "Subscribe"}
          />
        </div>
      </form>
    </div>
  )
}
