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
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-8 border border-border/30 hover:border-primary/30 transition-all card-hover relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2 border-b border-border/50 pb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Briefcase size={22} />
                    </div>
                    {exp.title}
                  </h3>
                  <h4 className="text-base md:text-lg text-primary font-medium mt-1">
                    {exp.organization}
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm shrink-0">
                  <Calendar size={16} className="text-primary" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
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
