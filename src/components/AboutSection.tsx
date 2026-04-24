import { BarChart3, Database, LineChart, Target } from "lucide-react";

const highlights = [
  { icon: Database, label: "Data Cleaning" },
  { icon: BarChart3, label: "Data Analysis" },
  { icon: LineChart, label: "Visualization" },
  { icon: Target, label: "Decision Support" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-muted-foreground leading-relaxed text-lg text-center md:text-left">
            I'm a Data Analyst with a passion for transforming raw data into meaningful insights that drive strategic business decisions. 
            I specialize in data cleaning, exploratory analysis, and building compelling visualizations. With expertise across Python, SQL, 
            and Power BI, I help organizations uncover hidden patterns in their data and present findings in clear, actionable formats. 
            My goal is to bridge the gap between complex datasets and informed decision-making.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="glass rounded-xl p-6 text-center card-hover group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon size={24} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
