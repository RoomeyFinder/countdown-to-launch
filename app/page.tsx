"use client"
import AppLogo from "./_assets/AppLogo"
import FeaturesSection from "./_components/Features"
import Footer from "./_components/Footer"
import CountDown from "./_components/Countdown"
import SubscribeForm from "./_components/SubscribeForm"

export default function Home() {
  return (
    <>
      <section className="flex pb-[30px] min-h-screen Items-stretch justify-center flex-col">
        <div className="sticky top-0 bg-white z-[100] shadow-sm flex items-center justify-center py-6">
          <header className="scale-[1.5]">
            <AppLogo />
          </header>
        </div>
        <main className="mb-[14px]">
          <CountDown />
          <FeaturesSection />
          <SubscribeForm />
        </main>
        <Footer />
      </section>
    </>
  )
}
