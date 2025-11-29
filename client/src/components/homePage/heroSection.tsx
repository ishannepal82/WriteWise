import { MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
  <section className="flex items-center justify-center h-screen">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col items-center justify-between gap-4">
        <div className="location flex items-center border-2 rounded-full px-4 py-2 gap-2 border-primary cursor-pointer hover:bg-primary transition-all hover:text-background duration-300 text-primary">
          <MapPin size={20} className=""/>
          <span className="font-medium">Currently Available in Nepal</span>
        </div>
        <div className="content text-center">
          <h1 className="text-text text-3xl font-semibold font-heading leading-[3rem]">
            Design the <span className="text-primary">Peak</span> Writing Experience !
          </h1>
          <h1 className="text-primary text-xl font-semibold font-heading leading-[3rem]">
            WriteWise is a powerful and user-friendly writing assistant that helps you write better and faster.
          </h1>
          <div className="action">
            <button className="bg-primary rounded-full px-6 py-2 text-background font-medium hover:bg-primary/90 transition hover:scale-105 duaration-300">
            <div className="span flex items-center gap-2">
              <span>Get Started</span>
              <ArrowRight />
            </div>
          </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
