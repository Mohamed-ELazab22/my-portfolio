import { GraduationCap, Award, BookOpen, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Education</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden group border border-border/30 hover:border-primary/30 transition-all">
            {/* Background design elements */}
            <div className="absolute -top-10 -right-10 text-primary/5 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
              <GraduationCap size={250} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:justify-between mb-8 gap-4 border-b border-border/50 pb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Bachelor of Computer Science in CS and AI
                  </h3>
                  <h4 className="text-lg md:text-xl text-primary font-medium">
                    Faculty of Computers & Artificial Intelligence, Beni Suef University
                  </h4>
                </div>
                <div className="space-y-3 shrink-0 lg:text-right text-muted-foreground font-mono text-sm mt-2 lg:mt-0">
                  <div className="flex items-center lg:justify-end gap-2">
                    <Calendar size={16} className="text-primary hidden lg:block" />
                    <span className="inline-flex items-center gap-2 lg:hidden"><Calendar size={16} className="text-primary" /> timeline:</span>
                    <span>Oct 2023 — Expected 2027</span>
                  </div>
                  <div className="flex items-center lg:justify-end gap-2">
                    <MapPin size={16} className="text-primary hidden lg:block" />
                    <span className="inline-flex items-center gap-2 lg:hidden"><MapPin size={16} className="text-primary" /> location:</span>
                    <span>Beni Suef, Egypt</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h5 className="flex items-center gap-3 text-lg font-semibold text-foreground">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <BookOpen size={20} className="text-primary" />
                    </div>
                    Relevant Coursework
                  </h5>
                  <ul className="space-y-3 text-muted-foreground text-sm pl-2">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" /> Data Analysis
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" /> Data Structures
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" /> Software Engineering
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" /> Artificial Intelligence
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h5 className="flex items-center gap-3 text-lg font-semibold text-foreground">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award size={20} className="text-primary" />
                    </div>
                    Achievements
                  </h5>
                  <ul className="space-y-3 text-muted-foreground text-sm pl-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                      <span><strong>CGPA:</strong> 3.4</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                      <span>Consistently high GPA in analytical and programming courses.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                      <span>Actively participating in coding and data analytics challenges.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
