import { Code2, BarChart2, Cpu, Wrench, Languages } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C++", "Python", "SQL"],
  },
  {
    title: "Data Analysis & Visualization",
    icon: BarChart2,
    skills: ["Excel", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Pandas"],
  },
  {
    title: "Machine Learning & Modeling",
    icon: Cpu,
    skills: ["Scikit-Learn", "Data Preprocessing", "Feature Engineering", "Model Evaluation", "EDA"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code"],
  },
  {
    title: "Spoken Languages",
    icon: Languages,
    skills: ["Arabic (Native)", "English (Good)"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="glass rounded-xl p-6 border border-border/30 hover:border-primary/40 transition-all card-hover flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-3 font-mono">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="px-3.5 py-1.5 rounded-lg bg-secondary/80 text-secondary-foreground text-xs font-medium border border-border/50 hover:border-primary/40 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
