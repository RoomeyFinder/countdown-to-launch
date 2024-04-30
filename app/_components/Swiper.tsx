import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/navigation"
import { EffectCards, Autoplay, Navigation } from "swiper/modules"
import { ReactNode } from "react"

export default function GetSwiper({ slides }: { slides: ReactNode[] }) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop
        modules={[Autoplay, EffectCards, Navigation]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="overflow-hidden rounded-[50px]">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}