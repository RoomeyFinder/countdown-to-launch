import { ReactNode } from "react"

export default function FeatureCard({
  iconChild,
  heading,
  body,
}: {
  iconChild: ReactNode
  heading: string
  body: string
}) {
  return (
    <li className="bg-white rounded-[24px] overflow-hidden">
      <div className="relative bg-[#3A86FF1A] flex flex-col w-[95dvw] max-w-[47.3rem] w-full items-center gap-8 px-8 py-12 md:px-8 py-16 rounded-lg">
        <span>{iconChild}</span>
        <article className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-lg md:text-2xl font-bold text-black">{heading}</h2>
          <p className="text-[14px] md:text-lg text-gray-600">{body}</p>
        </article>
      </div>
    </li>
  )
}
