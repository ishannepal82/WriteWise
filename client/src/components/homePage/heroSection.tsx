import { MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center min-h-screen w-full absolute inset-0">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Location Badge */}
          <div className="location flex items-center border-2 rounded-full px-4 py-2 gap-2 border-primary cursor-pointer hover:bg-primary transition-all hover:text-background duration-300 text-primary">
            <MapPin size={20} />
            <span className="font-medium">Currently Available in Nepal</span>
          </div>
          
          {/* Content */}
          <div className="content text-center flex flex-col gap-4">
            <h1 className="text-text text-4xl md:text-5xl lg:text-6xl font-semibold font-heading leading-tight">
              Design the <span className="text-primary">Peak</span> Writing Experience!
            </h1>
            <p className="text-primary/80 text-lg md:text-xl font-medium font-heading max-w-2xl mx-auto leading-relaxed">
              WriteWise is a powerful and user-friendly writing assistant that helps you write better and faster.
            </p>
            
            {/* CTA Button */}
            <div className="action mt-4">
              <button className="bg-gradient-to-b from-primary to-secondary rounded-full px-8 py-3 text-background font-medium hover:opacity-90 transition-all hover:scale-105 duration-300 shadow-lg shadow-primary/30">
                <div className="flex items-center gap-2 text-lg">
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}