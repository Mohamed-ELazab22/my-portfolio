import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Machine Learning for Data Analysis Trainee",
    organization: "Creativa Innovation Hub (NTI)",
    period: "Jul 2026 — Present",
    highlights: [
      "Mastered end-to-end machine learning workflows spanning data preprocessing, feature engineering, and model evaluation.",
      "Built and evaluated predictive classification and regression models using Python and Scikit-learn.",
      "Applied exploratory data analysis (EDA) and performance metrics to extract actionable intelligence from real-world datasets."
    ]
  },
  {
    title: "Microsoft Power BI Specialist",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Nov 2025 — Jul 2026",
    highlights: [
      "Developed high-impact interactive dashboards and visual reports using Power BI, Power Query, and advanced DAX calculations.",
      "Executed data cleaning, ETL transformation, and exploratory data analysis across complex data sources using Excel and Power BI.",
      "Architected robust data models to deliver executive-level decision support and key performance indicator (KPI) tracking."
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-[#0B1110]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#F1F3EF]">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-[#3A9B78] mx-auto rounded-full mb-12" />

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-8 border border-[#24332D] hover:border-[#315343] transition-all card-hover relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2 border-b border-[#24332D] pb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#F1F3EF] flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#16211D] text-[#78C6A3] border border-[#315343]">
                      <Briefcase size={22} />
                    </div>
                    {exp.title}
                  </h3>
                  <h4 className="text-base md:text-lg text-[#78C6A3] font-medium mt-1">
                    {exp.organization}
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-[#A4AEA8] font-mono text-sm shrink-0">
                  <Calendar size={16} className="text-[#78C6A3]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3 text-[#A4AEA8] text-sm leading-relaxed">
                    <CheckCircle2 size={18} className="text-[#3A9B78] mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
