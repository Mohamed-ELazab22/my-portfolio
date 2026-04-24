import { useEffect, useRef, useState } from "react";
import { ExternalLink, Eye, Github } from "lucide-react";
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
    title: "Power BI Sales Dashboard",
    description:
      "An interactive dashboard showing key business metrics, sales performance, and trends.",
    fullDescription:
      "An interactive Power BI dashboard designed to present key business metrics at a glance. The dashboard includes visualizations for sales performance over time, regional breakdowns, product category analysis, and KPI tracking. It was built with a focus on clean design and user-friendly interactivity, allowing stakeholders to filter and drill down into the data effortlessly.",
    tools: ["Power BI", "Excel"],
    thumbnail: "/project-3.jpg",
    images: ["/project-3.jpg"],
    github: "#"
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
              {/* Project image placeholder */}
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
        <DialogContent className={`glass border-border/50 w-[95vw] ${selectedProject?.demo ? 'max-w-5xl' : 'max-w-3xl'} flex flex-col max-h-[90vh]`}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground">
              {selectedProject?.title}
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

            {/* Modal images - Only large if no demo */}
            {selectedProject?.images && selectedProject.images.length > 0 && !selectedProject?.demo && (
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                {selectedProject.images.map((img, idx) => (
                  <div key={idx} className="shrink-0 w-full aspect-video rounded-lg flex items-center justify-center border border-border/30 bg-muted/30 overflow-hidden snap-center">
                    <img src={img} alt={`${selectedProject.title} screenshot ${idx + 1}`} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            )}

            {/* If there's a demo, show images smaller as thumbnails */}
            {selectedProject?.demo && selectedProject?.images && selectedProject.images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {selectedProject.images.map((img, idx) => (
                  <div key={idx} className="aspect-video rounded-lg flex items-center justify-center border border-border/30 bg-muted/30 overflow-hidden">
                    <img src={img} alt={`${selectedProject.title} screenshot ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            )}

            <p className="text-muted-foreground leading-relaxed text-sm">
              {selectedProject?.fullDescription}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs rounded-md bg-primary/10 text-primary font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {selectedProject?.presentation && (
                <a 
                  href={selectedProject.presentation} 
                  download 
                  className="inline-flex shrink-0 items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Download Presentation
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
