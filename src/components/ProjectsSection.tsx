import { useEffect, useRef, useState } from "react";
import { ExternalLink, Eye, Github, FileText, Database, Target, Lightbulb } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Project = {
  title: string;
  description: string;
  fullDescription: string;
  problemStatement?: string;
  dataset?: string;
  keyInsights?: string[];
  tools: string[];
  thumbnail: string;
  images: string[];
  github: string;
  demo?: string;
  presentation?: string;
};

const projects: Project[] = [
  {
    title: "Titanic Survival Analysis Dashboard",
    description:
      "Exploratory Data Analysis on the Titanic dataset to identify factors that influenced passenger survival.",
    fullDescription:
      "This project analyzes the Titanic dataset to understand the key factors that influenced passenger survival. The dataset was first cleaned and prepared to ensure accurate analysis. After preprocessing the data, an interactive Power BI dashboard was created to visualize survival patterns based on gender, passenger class, and age. The dashboard provides clear insights into how different variables affected survival rates and helps present the data in a simple and interactive way.",
    tools: ["Power BI", "Dashboard Design", "Data Cleaning", "Data Preparation"],
    thumbnail: "/titanic-4.png",
    images: ["/titanic-1.png", "/titanic-2.png", "/titanic-3.png", "/titanic-4.png", "/titanic-5.png"],
    github: "https://github.com/Mohamed-ELazab22/titanic-Dataset-with-power-Bi.git"
  },
  {
    title: "Automotive Performance & Efficiency Analytics",
    description:
      "A comprehensive Power BI Dashboard analyzing automotive market trends, focusing on engine performance and fuel efficiency.",
    fullDescription:
      "This project transforms raw technical specifications into actionable business insights, analyzing the automotive market trends between 1970 and 1982. It explores the trade-off between engine performance and fuel efficiency (MPG), discovering that weight reduction was the primary driver for high MPG. The dashboard features a Dark Neon UI and utilizes advanced Power BI techniques like DAX and AI Decomposition Trees to analyze drivers of fuel efficiency.",
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    thumbnail: "/Screenshot (350).png",
    images: ["/Screenshot (350).png", "/Screenshot (351).png", "/Screenshot (352).png"],
    github: "https://github.com/Mohamed-ELazab22/Car-Analysis/tree/main",
    demo: "https://app.powerbi.com/reportEmbed?reportId=272f6c71-e880-4e89-bfe1-b2d2201e3271&autoAuth=true&ctid=20469899-81d5-4769-9e25-47c0529b5747",
    presentation: "/Automotive_Market_Analysis.pptx"
  },
  {
    title: "MTA Daily Ridership Analytics",
    description:
      "A multi-modal public transit analytics dashboard examining NYC MTA ridership recovery, weekday vs. weekend patterns, and mode dynamics (2019-2024).",
    problemStatement:
      "Assessing post-pandemic transit recovery trends and mode-specific demand across New York City's complex transit network (Subways, Buses, Commuter Rail, Bridges & Tunnels, Access-A-Ride).",
    dataset:
      "NYC Metropolitan Transportation Authority (MTA) Daily Ridership dataset (2019–2024), tracking multi-year volume across 7 transportation modes.",
    fullDescription:
      "This project cleans, models, and visualizes multi-year public transportation ridership data for New York City's MTA system using Power BI, Power Query, and Excel. It evaluates post-pandemic recovery metrics against target baselines, analyzes mode share distributions, compares weekday versus weekend commuting dynamics, and identifies high-resilience transit sectors.",
    keyInsights: [
      "Achieved 10.79 Billion total transit ridership with an overall mobility recovery rate of 72.8% and +1.8% YoY growth.",
      "Subways lead NYC transit with 5.955 Billion riders (55.19% share), followed by Buses with 2.382 Billion (22.08% share).",
      "Bridges & Tunnels outperformed pre-pandemic goals with 1.79 Billion riders (+1.66% above recovery target).",
      "Access-A-Ride paratransit mobility experienced strong growth, reaching 46.65 Million riders (+20.74% recovery rate).",
      "Commuter Rail (LIRR & Metro-North) demonstrates strong weekday commuter reliance compared to weekend travel."
    ],
    tools: ["Power BI", "Power Query", "DAX", "Excel", "Data Modeling", "Time Series Analysis"],
    thumbnail: "/mta-1.png",
    images: ["/mta-1.png", "/mta-2.png", "/mta-3.png", "/mta-4.png", "/mta-5.png"],
    github: "https://github.com/amr-elgharip2006/Group1_DEPI",
    presentation: "/MTA_Daily_Ridership_Analytics_Dashboard.pptx"
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              data-index={i}
              className={`glass rounded-xl overflow-hidden card-hover group flex flex-col transition-all duration-700 ease-out ${
                visibleCards.has(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Project thumbnail */}
              <div className="aspect-video bg-muted/30 flex items-center justify-center border-b border-border/30 overflow-hidden relative group-hover:opacity-90 transition-opacity">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs rounded-md bg-primary/10 text-primary font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    <Eye size={16} /> View Details
                  </button>
                  <a
                    href={project.github}
                    target={project.github !== "#" ? "_blank" : "_self"}
                    rel={project.github !== "#" ? "noopener noreferrer" : ""}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    <Github size={16} /> GitHub <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project details modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className={`glass border-border/50 w-[95vw] ${selectedProject?.demo ? 'max-w-5xl' : 'max-w-4xl'} flex flex-col max-h-[90vh]`}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground flex items-center justify-between gap-4">
              <span>{selectedProject?.title}</span>
            </DialogTitle>
            <DialogDescription className="sr-only">Project details</DialogDescription>
          </DialogHeader>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {/* Live Interactive Demo if available */}
            {selectedProject?.demo && (
              <div className="w-full h-[60vh] rounded-lg overflow-hidden border border-border/30 bg-muted/10">
                <iframe 
                  title={selectedProject.title}
                  src={selectedProject.demo}
                  className="w-full h-full border-none"
                  allowFullScreen={true}
                />
              </div>
            )}

            {/* Modal images gallery */}
            {selectedProject?.images && selectedProject.images.length > 0 && !selectedProject?.demo && (
              <div>
                <h4 className="text-sm font-mono text-primary mb-3">Dashboard Gallery ({selectedProject.images.length} views)</h4>
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
                  {selectedProject.images.map((img, idx) => (
                    <div key={idx} className="shrink-0 w-full md:w-[85%] aspect-video rounded-lg flex items-center justify-center border border-border/40 bg-black/40 overflow-hidden snap-center group relative">
                      <img src={img} alt={`${selectedProject.title} view ${idx + 1}`} className="w-full h-full object-contain" />
                      <span className="absolute bottom-2 right-2 bg-background/80 text-foreground font-mono text-xs px-2 py-1 rounded border border-border/40">
                        View {idx + 1} of {selectedProject.images.length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Structured Details: Problem Statement & Dataset */}
            {selectedProject?.problemStatement && (
              <div className="glass rounded-lg p-4 border border-border/30">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                  <Target size={16} className="text-primary" /> Problem Statement
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {selectedProject.problemStatement}
                </p>
              </div>
            )}

            {selectedProject?.dataset && (
              <div className="glass rounded-lg p-4 border border-border/30">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                  <Database size={16} className="text-primary" /> Dataset & Scope
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {selectedProject.dataset}
                </p>
              </div>
            )}

            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                <FileText size={16} className="text-primary" /> Overview & Approach
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {selectedProject?.fullDescription}
              </p>
            </div>

            {/* Key Insights */}
            {selectedProject?.keyInsights && selectedProject.keyInsights.length > 0 && (
              <div className="glass rounded-lg p-5 border border-border/30">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
                  <Lightbulb size={16} className="text-primary" /> Key Findings & Business Insights
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.keyInsights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom Actions & Tools */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/40">
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs rounded-md bg-primary/10 text-primary font-mono border border-primary/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {selectedProject?.github && selectedProject.github !== "#" && (
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm font-medium border border-border/50 transition-colors"
                  >
                    <Github size={16} /> Repository <ExternalLink size={14} />
                  </a>
                )}

                {selectedProject?.presentation && (
                  <a 
                    href={selectedProject.presentation} 
                    download="MTA_Daily_Ridership_Analytics_Dashboard.pptx" 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Download Presentation
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
