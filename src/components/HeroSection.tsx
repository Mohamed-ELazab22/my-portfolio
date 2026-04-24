import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown, Send, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-up mb-6 flex justify-center">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-primary/40 bg-muted/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
            {/* Add profile.jpg to public folder */}
            <img src="/profile.jpg" alt="Mohamed Ahmed Elazab" className="w-full h-full object-cover object-top" />
          </div>
        </div>
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-medium text-primary border border-primary/30 mb-6 glow-border">
            Data Analyst
          </span>
        </div>

        <h1 className="animate-fade-up animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Mohamed Ahmed{" "}
          <span className="text-gradient">Elazab</span>
        </h1>

        <p className="animate-fade-up animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Turning Data into Insights and Business Decisions.
        </p>

        <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            View My Projects <ArrowDown size={18} />
          </a>
          <a href="/resume_mohamed_elazab.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/20 border border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground font-semibold transition-colors">
            Download CV <Download size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 font-semibold transition-colors">
            Contact Me <Send size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
