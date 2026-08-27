import { BarChart3, Cpu, LineChart, Target } from "lucide-react";

const highlights = [
  { icon: BarChart3, label: "Data Analytics & EDA" },
  { icon: Cpu, label: "Machine Learning & Modeling" },
  { icon: LineChart, label: "Power BI & Visualization" },
  { icon: Target, label: "Predictive Decision Support" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#0E1513]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#F1F3EF]">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-[#3A9B78] mx-auto rounded-full mb-12" />

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#A4AEA8] leading-relaxed text-base md:text-lg text-center md:text-left">
            With a background in <strong className="text-[#F1F3EF] font-semibold">Computer Science & Artificial Intelligence</strong> at Beni-Suef National University, I specialize in combining data analytics with practical machine learning. My focus is on turning raw data into structured insights—applying exploratory analysis, data preparation, supervised classification, and unsupervised clustering. Through continuous learning and hands-on implementation, I build and deploy practical interactive web applications that deliver measurable value.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {highlights.map(({ icon: Icon, label }, idx) => (
            <div key={label} className="glass rounded-xl p-6 text-center card-hover group border border-[#24332D]">
              <div className="w-12 h-12 rounded-lg bg-[#16211D] border border-[#315343] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#3A9B78]/20 transition-colors relative">
                <Icon size={24} className="text-[#78C6A3]" />
                {idx === 1 && (
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#D6A85F]" />
                )}
              </div>
              <span className="text-sm font-medium text-[#F1F3EF]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
