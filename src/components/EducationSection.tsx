import { GraduationCap, Award, BookOpen, Calendar, MapPin, BadgeCheck } from "lucide-react";

const certifications = [
  { title: "Microsoft Power BI Specialist", issuer: "Digital Egypt Pioneers Initiative (DEPI)", date: "Jul 2026" },
  { title: "Introduction to Power BI", issuer: "DataCamp", date: "Mar 2026" },
  { title: "Data Classification", issuer: "IBM SkillsBuild", date: "Oct 2025" },
  { title: "Introduction to Excel", issuer: "DataCamp", date: "Aug 2025" },
  { title: "Data Fundamentals", issuer: "IBM SkillsBuild", date: "Aug 2025" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Education & <span className="text-gradient">Certifications</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education Card */}
          <div className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden group border border-border/30 hover:border-primary/30 transition-all">
            {/* Background design elements */}
            <div className="absolute -top-10 -right-10 text-primary/5 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
              <GraduationCap size={250} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:justify-between mb-8 gap-4 border-b border-border/50 pb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Bachelor of Computer Science and AI
                  </h3>
                  <h4 className="text-lg md:text-xl text-primary font-medium">
                    Beni-Suef National University
                  </h4>
                </div>
                <div className="space-y-3 shrink-0 lg:text-right text-muted-foreground font-mono text-sm mt-2 lg:mt-0">
                  <div className="flex items-center lg:justify-end gap-2">
                    <Calendar size={16} className="text-primary hidden lg:block" />
                    <span className="inline-flex items-center gap-2 lg:hidden"><Calendar size={16} className="text-primary" /> timeline:</span>
                    <span>Oct 2023 — Jun 2027</span>
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
                    Key Study Areas
                  </h5>
                  <ul className="space-y-3 text-muted-foreground text-sm pl-2">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" /> Data Analysis & Visualization
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" /> Data Structures & Algorithms
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" /> Machine Learning & Feature Engineering
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" /> Database Management & SQL
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h5 className="flex items-center gap-3 text-lg font-semibold text-foreground">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award size={20} className="text-primary" />
                    </div>
                    Academic Highlights
                  </h5>
                  <ul className="space-y-3 text-muted-foreground text-sm pl-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                      <span><strong>GPA:</strong> 3.4 / 4.0</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                      <span>Consistently strong academic performance in data science and computer science coursework.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                      <span>Active participant in analytical projects, machine learning workshops, and data challenges.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <BadgeCheck className="text-primary" size={28} /> Professional Certifications
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="glass rounded-xl p-5 border border-border/30 hover:border-primary/40 transition-all card-hover flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground text-base mb-1">{cert.title}</h4>
                    <p className="text-xs text-primary font-medium mb-3">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono pt-3 border-t border-border/30">
                    <span>Issued</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
