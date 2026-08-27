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
    <section id="education" className="py-24 bg-[#0E1513]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#F1F3EF]">
          Education & <span className="text-gradient">Certifications</span>
        </h2>
        <div className="w-16 h-1 bg-[#3A9B78] mx-auto rounded-full mb-12" />

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education Card */}
          <div className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden group border border-[#24332D] hover:border-[#315343] transition-all">
            {/* Background design elements */}
            <div className="absolute -top-10 -right-10 text-[#3A9B78]/5 group-hover:text-[#3A9B78]/10 transition-colors duration-500 pointer-events-none">
              <GraduationCap size={250} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:justify-between mb-8 gap-4 border-b border-[#24332D] pb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#F1F3EF] mb-2">
                    Bachelor of Computer Science and AI
                  </h3>
                  <h4 className="text-lg md:text-xl text-[#78C6A3] font-medium">
                    Beni-Suef National University
                  </h4>
                </div>
                <div className="space-y-3 shrink-0 lg:text-right text-[#A4AEA8] font-mono text-sm mt-2 lg:mt-0">
                  <div className="flex items-center lg:justify-end gap-2">
                    <Calendar size={16} className="text-[#78C6A3] hidden lg:block" />
                    <span className="inline-flex items-center gap-2 lg:hidden"><Calendar size={16} className="text-[#78C6A3]" /> timeline:</span>
                    <span>Oct 2023 — Jun 2027</span>
                  </div>
                  <div className="flex items-center lg:justify-end gap-2">
                    <MapPin size={16} className="text-[#78C6A3] hidden lg:block" />
                    <span className="inline-flex items-center gap-2 lg:hidden"><MapPin size={16} className="text-[#78C6A3]" /> location:</span>
                    <span>Beni Suef, Egypt</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h5 className="flex items-center gap-3 text-lg font-semibold text-[#F1F3EF]">
                    <div className="p-2 rounded-lg bg-[#16211D] border border-[#315343]">
                      <BookOpen size={20} className="text-[#78C6A3]" />
                    </div>
                    Key Study Areas
                  </h5>
                  <ul className="space-y-3 text-[#A4AEA8] text-sm pl-2">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3A9B78]" /> Data Analysis & Visualization
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3A9B78]" /> Data Structures & Algorithms
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3A9B78]" /> Machine Learning & Feature Engineering
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3A9B78]" /> Database Management & SQL
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h5 className="flex items-center gap-3 text-lg font-semibold text-[#F1F3EF]">
                    <div className="p-2 rounded-lg bg-[#16211D] border border-[#315343]">
                      <Award size={20} className="text-[#78C6A3]" />
                    </div>
                    Academic Highlights
                  </h5>
                  <ul className="space-y-3 text-[#A4AEA8] text-sm pl-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D6A85F] mt-1.5 shrink-0" />
                      <span><strong>GPA:</strong> <span className="text-[#D6A85F] font-semibold">3.4 / 4.0</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3A9B78] mt-1.5 shrink-0" />
                      <span>Consistently strong academic performance in data science and computer science coursework.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3A9B78] mt-1.5 shrink-0" />
                      <span>Active participant in analytical projects, machine learning workshops, and data challenges.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F1F3EF]">
              <BadgeCheck className="text-[#78C6A3]" size={28} /> Professional Certifications
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="glass rounded-xl p-5 border border-[#24332D] hover:border-[#315343] transition-all card-hover flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-[#F1F3EF] text-base mb-1">{cert.title}</h4>
                    <p className="text-xs text-[#78C6A3] font-medium mb-3">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#737F78] font-mono pt-3 border-t border-[#24332D]">
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
