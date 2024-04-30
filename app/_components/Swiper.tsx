import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/navigation"
import { EffectCards, Autoplay, Navigation } from "swiper/modules"
import { Fragment, ReactNode } from "react"

export default function GetSwiper({ slides }: { slides: ReactNode[] }) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop
        modules={[Autoplay, EffectCards]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
      >
        {slides.map((slide, idx) => (
          <Fragment key={idx}>
            <SwiperSlide key={idx} className="overflow-hidden rounded-full">
              {slide}
            </SwiperSlide>
         </Fragment>
        ))}
      </Swiper>
    </>
  )
}
