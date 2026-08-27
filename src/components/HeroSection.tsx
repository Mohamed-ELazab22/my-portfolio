import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown, Send, Download, BarChart2, Cpu } from "lucide-react";

const roles = [
  { label: "Data Analyst", icon: BarChart2 },
  { label: "ML Engineer", icon: Cpu },
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsFlipping(false);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = roles[currentRoleIndex].icon;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1110]">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1110]/60 via-[#0B1110]/85 to-[#0B1110]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-up mb-6 flex justify-center">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-[#24332D] bg-[#111A17]/80 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-xl">
            <img src="/profile.jpg" alt="Mohamed Ahmed Elazab" className="w-full h-full object-cover object-top" />
          </div>
        </div>

        <div className="animate-fade-up h-10 flex items-center justify-center mb-6">
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono font-medium text-[#78C6A3] bg-[#16211D] border border-[#315343] transition-all duration-300 transform ${
              isFlipping
                ? "opacity-0 -translate-y-2 scale-95"
                : "opacity-100 translate-y-0 scale-100"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6A85F] shrink-0" />
            <CurrentIcon size={14} className="text-[#78C6A3]" />
            {roles[currentRoleIndex].label}
          </span>
        </div>

        <h1 className="animate-fade-up animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-[#F1F3EF]">
          Mohamed Ahmed{" "}
          <span className="text-gradient">Elazab</span>
        </h1>

        <p className="animate-fade-up animate-fade-up-delay-2 text-lg md:text-xl text-[#A4AEA8] max-w-2xl mx-auto mb-10 leading-relaxed">
          Transforming complex data into actionable business insights through exploratory analysis, predictive modeling, and interactive dashboards.
        </p>

        <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3A9B78] hover:bg-[#78C6A3] text-[#F1F3EF] font-semibold border border-[#315343] transition-colors shadow-sm"
          >
            View My Projects <ArrowDown size={18} />
          </a>
          <a 
            href="/resume_mohamed_elazab.pdf" 
            download="Mohamed_Elazab_CV.pdf" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111A17] hover:bg-[#16211D] border border-[#315343] text-[#F1F3EF] hover:text-[#78C6A3] font-semibold transition-colors"
          >
            Download CV <Download size={18} />
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111A17] hover:bg-[#16211D] border border-[#315343] text-[#F1F3EF] hover:text-[#78C6A3] font-semibold transition-colors"
          >
            Contact Me <Send size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
