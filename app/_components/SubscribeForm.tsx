"use client"
import { useSearchParams } from "next/navigation"
import {
  useState,
  FormEventHandler,
  useCallback,
  useEffect,
  useRef,
} from "react"
import toast from "react-hot-toast"

export default function SubscribeForm() {
  const formRef = useRef<HTMLDivElement | null>(null)
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [inviteCode, setInviteCode] = useState(searchParams.get("code") || "")
  const [loading, setLoading] = useState(false)
  const handleFormSubmission: FormEventHandler = useCallback(
    async (e) => {
      e.preventDefault()
      setLoading(true)
      const baseUrl = "https://www.api.roomeyfinder.com/api/v1"
      try {
        const res = await fetch(`${baseUrl}/subscriptions/launch`, {
          body: JSON.stringify({ email, inviteCode }),
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
    [email, inviteCode]
  )
  useEffect(() => {
    if (searchParams.get("code")) formRef.current?.scrollIntoView()
  }, [searchParams])

  return (
    <div
      ref={formRef}
      id="subscribe"
      className="flex justify-center items-center border-b min-h-[50dvh]"
    >
      <form
        name="email-form"
        onSubmit={handleFormSubmission}
        aria-label="Email Form"
        className="mx-auto w-[90%] max-w-[450px] "
      >
        <label
          htmlFor="name"
          className="text-[24px] font-[400] text-gray-800 text-start leading-9 mb-4"
        >
          Get notified when we launch
        </label>
        <div className="flex flex-col gap-2">
          <input
            className="bg-white w-2/3 grow focus:outline-0 focus:border-l-[#3a86ff] focus:border-y-[#3a86ff] border border-gray-300 w-full px-4 py-3 text-base leading-4 rounded-lg disabled:opacity-[0.4] disabled:cursor-not-allowed"
            maxLength={256}
            name="Email"
            data-name="Email"
            placeholder="Email"
            type="email"
            id="Email"
            required
            disabled={loading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Invite code (optional)"
            className="bg-white w-2/3 grow focus:outline-0 focus:border-l-[#3a86ff] focus:border-y-[#3a86ff] border border-gray-300 w-full px-4 py-3 text-base leading-4 rounded-lg uppercase placeholder:capitalize disabled:opacity-[0.4] disabled:cursor-not-allowed"
            type=""
            maxLength={11}
            value={inviteCode}
            disabled={loading}
            onChange={(e) => setInviteCode(e.target.value)}
          />
          <input
            type="submit"
            className={`${
              loading ? "!bg-gray-500/50 !text-black/40" : ""
            } bg-[#3a86ff] w-1/2 max-w-[150px] py-2 mt-3 mr-auto grow text-base leading-7 w-1/3 text-white text-[14px] px-2 cursor-pointer border-0 hover:brightness-[105%] rounded-lg`}
            value={loading ? "Please wait..." : "Subscribe"}
          />
        </div>
      </form>
    </div>
  )
}
