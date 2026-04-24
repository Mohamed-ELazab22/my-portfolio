const skillCategories = [
  {
    title: "Data Analysis",
    skills: ["Python", "Pandas", "NumPy", "SQL"],
  },
  {
    title: "Data Visualization",
    skills: ["Power BI", "Matplotlib", "Seaborn"],
  },
  {
    title: "Tools",
    skills: ["Excel", "Git", "GitHub", "Jupyter Notebook"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass rounded-xl p-8 card-hover">
              <h3 className="text-lg font-semibold text-primary mb-6 font-mono">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border/50 hover:border-primary/40 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
