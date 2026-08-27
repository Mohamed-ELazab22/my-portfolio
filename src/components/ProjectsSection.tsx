import { useEffect, useRef, useState } from "react";
import {
  ExternalLink, Eye, Github, FileText, Lightbulb, Brain,
  TrendingUp, Users, BarChart2, HelpCircle, LayoutDashboard,
  Monitor, Image as ImageIcon, Target, Cpu, FlaskConical,
  Activity, Award, ArrowDown,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// ─── Types ───────────────────────────────────────────────────────────────────

type MLMetric = { label: string; value: string };

type Project = {
  title: string;
  categoryTag?: string;
  isML?: boolean;
  description: string;
  fullDescription: string;
  problemStatement: string;
  solutionStatement?: string;
  resultValue?: string;
  resultLabel?: string;
  dataset?: string;
  datasetDetails?: string[];
  preprocessingSteps?: string[];
  modelUsed?: string;
  modelingWorkflow?: string[];
  mlMetrics?: MLMetric[];
  keyResult?: string;
  keyInsights?: string[];
  tools: string[];
  thumbnail: string;
  images: string[];
  github: string;
  demo?: string;
  presentation?: string;
};

// ─── Data Analysis Projects ──────────────────────────────────────────────────

const projects: Project[] = [
  {
    title: "Titanic Survival Analysis Dashboard",
    categoryTag: "DATA ANALYTICS · EXPLORATORY ANALYSIS",
    isML: false,
    description:
      "Exploratory Data Analysis on the Titanic dataset to identify key factors influencing passenger survival.",
    problemStatement:
      "Understanding historical survival patterns and key demographic variables that impacted survival rates during the Titanic catastrophe.",
    solutionStatement:
      "Executed data cleaning, feature preparation in Power Query, and constructed an interactive Power BI dashboard visualizing survival distributions by gender, class, and age groups.",
    resultValue: "72.8%",
    resultLabel: "Demographic Correlation Insight",
    keyInsights: [
      "Female passengers experienced significantly higher survival rates across all class categories.",
      "First-class passengers had a higher survival rate compared to second and third-class passengers.",
      "Age distribution analysis revealed prioritized evacuation for children in higher classes.",
    ],
    fullDescription:
      "This project analyzes the Titanic dataset to understand the key factors that influenced passenger survival. The dataset was first cleaned and prepared to ensure accurate analysis. After preprocessing the data, an interactive Power BI dashboard was created to visualize survival patterns based on gender, passenger class, and age.",
    tools: ["Power BI", "Power Query", "Data Cleaning", "Data Preparation", "Data Visualization"],
    thumbnail: "/titanic-4.png",
    images: ["/titanic-1.png", "/titanic-2.png", "/titanic-3.png", "/titanic-4.png", "/titanic-5.png"],
    github: "https://github.com/Mohamed-ELazab22/titanic-Dataset-with-power-Bi.git",
  },
  {
    title: "Automotive Performance & Efficiency Analytics",
    categoryTag: "BUSINESS INTELLIGENCE · DAX MODELING",
    isML: false,
    description:
      "A comprehensive Power BI Dashboard analyzing automotive market trends, engine performance, and fuel efficiency.",
    problemStatement:
      "Analyzing trade-offs between vehicle weight, engine horsepower, and fuel efficiency (MPG) across historical automotive market trends between 1970 and 1982.",
    solutionStatement:
      "Cleaned technical specifications, built DAX metrics, AI Decomposition Trees, and dynamic visual layouts to extract actionable engineering and pricing insights.",
    resultValue: "1970–1982",
    resultLabel: "Market Trend Span Analyzed",
    keyInsights: [
      "Vehicle weight reduction was the primary driver for achieving high fuel efficiency (MPG).",
      "Horsepower and engine displacement showed strong negative correlations with fuel economy.",
      "European and Japanese manufacturers led fuel efficiency benchmarks compared to domestic models.",
    ],
    fullDescription:
      "This project transforms raw technical specifications into actionable business insights, analyzing the automotive market trends between 1970 and 1982. It explores the trade-off between engine performance and fuel efficiency (MPG), discovering that weight reduction was the primary driver for high MPG.",
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling", "AI Decomposition Trees"],
    thumbnail: "/Screenshot (350).png",
    images: ["/Screenshot (350).png", "/Screenshot (351).png", "/Screenshot (352).png"],
    github: "https://github.com/Mohamed-ELazab22/Car-Analysis/tree/main",
    demo: "https://app.powerbi.com/reportEmbed?reportId=272f6c71-e880-4e89-bfe1-b2d2201e3271&autoAuth=true&ctid=20469899-81d5-4769-9e25-47c0529b5747",
    presentation: "/Automotive_Market_Analysis.pptx",
  },
  {
    title: "MTA Daily Ridership Analytics",
    categoryTag: "TIME SERIES ANALYTICS · PUBLIC TRANSIT",
    isML: false,
    description:
      "Multi-modal public transit analytics dashboard examining NYC MTA ridership recovery and commuting patterns.",
    problemStatement:
      "Assessing post-pandemic transit recovery trends and mode-specific demand across New York City's complex transit network (Subways, Buses, Commuter Rail, Bridges & Tunnels, Access-A-Ride).",
    solutionStatement:
      "Modelled multi-year ridership dataset (2019–2024), evaluated post-pandemic recovery against baseline targets, and analyzed weekday vs. weekend mode shares.",
    resultValue: "10.79B",
    resultLabel: "Total Ridership Tracked",
    dataset:
      "NYC Metropolitan Transportation Authority (MTA) Daily Ridership dataset (2019–2024), tracking multi-year volume across 7 transportation modes.",
    fullDescription:
      "This project cleans, models, and visualizes multi-year public transportation ridership data for New York City's MTA system using Power BI, Power Query, and Excel. It evaluates post-pandemic recovery metrics against target baselines, analyzes mode share distributions, compares weekday versus weekend commuting dynamics.",
    keyInsights: [
      "Achieved 10.79 Billion total transit ridership with an overall mobility recovery rate of 72.8% and +1.8% YoY growth.",
      "Subways lead NYC transit with 5.955 Billion riders (55.19% share), followed by Buses with 2.382 Billion (22.08% share).",
      "Bridges & Tunnels outperformed pre-pandemic goals with 1.79 Billion riders (+1.66% above recovery target).",
      "Access-A-Ride paratransit mobility experienced strong growth, reaching 46.65 Million riders (+20.74% recovery rate).",
    ],
    tools: ["Power BI", "Power Query", "DAX", "Excel", "Data Modeling", "Time Series Analysis"],
    thumbnail: "/mta-1.png",
    images: ["/mta-1.png", "/mta-2.png", "/mta-3.png", "/mta-4.png", "/mta-5.png"],
    github: "https://github.com/amr-elgharip2006/Group1_DEPI",
    presentation: "/MTA_Daily_Ridership_Analytics_Dashboard.pptx",
  },
];

// ─── Machine Learning Projects ───────────────────────────────────────────────

const mlProjects: Project[] = [
  {
    title: "Employee Attrition Prediction",
    categoryTag: "SUPERVISED LEARNING · CLASSIFICATION",
    isML: true,
    description: "Predict employee turnover using Machine Learning classification algorithms.",
    problemStatement:
      "Employee turnover can be costly for organizations. Identifying employees who are likely to leave helps HR teams take preventive action, reduce hiring costs, and retain key talent.",
    solutionStatement:
      "Built a classification pipeline to predict employee attrition using Logistic Regression. Features include employee demographics, job role, satisfaction scores, and work environment variables.",
    datasetDetails: [
      "Dataset: IBM HR Analytics Employee Attrition dataset",
      "Records: 1,470 employee entries",
      "Target variable: Attrition (Yes / No)",
      "Features include: Age, Department, JobRole, MonthlyIncome, OverTime, YearsAtCompany, and more",
    ],
    preprocessingSteps: [
      "Removed irrelevant columns (EmployeeNumber, StandardHours)",
      "Encoded categorical variables (Label Encoding & One-Hot Encoding)",
      "Applied StandardScaler for feature normalization",
      "Train/Test split: 80% / 20%",
    ],
    modelUsed: "Logistic Regression",
    modelingWorkflow: ["Data Loading", "Preprocessing", "Feature Engineering", "Model Training", "Evaluation", "Deployment (Streamlit)"],
    mlMetrics: [
      { label: "Test Accuracy", value: "87.5%" },
    ],
    keyResult:
      "The Logistic Regression model achieved 87.5% test accuracy, enabling reliable identification of at-risk employees from HR data for proactive retention strategies.",
    resultValue: "87.5%",
    resultLabel: "Test Accuracy",
    fullDescription:
      "A Machine Learning application that predicts employee attrition using employee and workplace-related features. Built with Python, Scikit-learn, and Streamlit, it provides interactive HR risk analytics and predictive decision support.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Logistic Regression", "Streamlit"],
    thumbnail: "/ml-attrition.jpg",
    images: ["/ml-attrition.jpg"],
    github: "https://github.com/Mohamed-ELazab22/Employee-Attrition-Prediction-",
    demo: "https://retainiq-hr.streamlit.app/",
  },
  {
    title: "Ad Click Prediction",
    categoryTag: "SUPERVISED LEARNING · CLASSIFICATION",
    isML: true,
    description: "Predict whether a user will click on an online advertisement.",
    problemStatement:
      "Online advertising platforms need to understand whether users are likely to interact with an advertisement in order to improve targeting accuracy and campaign ROI.",
    solutionStatement:
      "Built a classification model using K-Nearest Neighbors (KNN) with feature scaling via StandardScaler and hyperparameter optimization via GridSearchCV to predict ad click behavior.",
    datasetDetails: [
      "Dataset: Online Advertising Click dataset",
      "Target variable: Clicked on Ad (1 = Yes / 0 = No)",
      "Features include: Daily Time Spent on Site, Age, Area Income, Daily Internet Usage, Gender",
    ],
    preprocessingSteps: [
      "Handled missing values and removed irrelevant columns",
      "Applied StandardScaler for feature normalization",
      "Train/Test split: 80% / 20%",
      "Hyperparameter tuning via GridSearchCV (optimal K selection)",
    ],
    modelUsed: "K-Nearest Neighbors (KNN)",
    modelingWorkflow: ["Data Loading", "Preprocessing", "Feature Scaling", "Hyperparameter Tuning (GridSearchCV)", "Model Training", "Evaluation", "Deployment (Streamlit)"],
    mlMetrics: [
      { label: "Test Accuracy", value: "93.3%" },
    ],
    keyResult:
      "The optimized KNN model achieved 93.3% test accuracy, demonstrating strong capability in identifying users likely to click on advertisements based on behavioral features.",
    resultValue: "93.3%",
    resultLabel: "Test Accuracy",
    fullDescription:
      "A Machine Learning classification project that predicts whether a user will click on an online advertisement based on user and browsing-related features using KNN, StandardScaler, and hyperparameter tuning with GridSearchCV.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "KNN", "GridSearchCV", "StandardScaler", "Streamlit"],
    thumbnail: "/ml-adclick.jpg",
    images: ["/ml-adclick.jpg"],
    github: "https://github.com/Mohamed-ELazab22/Ad_Click_Prediction.git",
    demo: "https://adclickprediction-mycgiqmefybds7szf6npiw.streamlit.app/",
  },
  {
    title: "Customer Segmentation",
    categoryTag: "UNSUPERVISED LEARNING · CLUSTERING",
    isML: true,
    description: "Segment customers into purchasing groups using K-Means & PCA.",
    problemStatement:
      "Businesses often have customers with very different purchasing behaviors, making it difficult to create targeted groups and tailored marketing campaigns without data-driven segmentation.",
    solutionStatement:
      "Applied Unsupervised Machine Learning using K-Means clustering to segment customers based on purchasing behavior, with PCA for dimensionality reduction and cluster visualization.",
    datasetDetails: [
      "Dataset: Mall Customer Segmentation dataset",
      "Features: CustomerID, Gender, Age, Annual Income (k$), Spending Score (1–100)",
      "Task: Unsupervised clustering — no predefined target variable",
    ],
    preprocessingSteps: [
      "Removed non-informative columns (CustomerID)",
      "Encoded categorical variables (Gender: Label Encoding)",
      "Applied StandardScaler for feature normalization",
      "PCA for dimensionality reduction and 2D visualization",
      "Silhouette Analysis to determine optimal cluster count (K=2)",
    ],
    modelUsed: "K-Means Clustering",
    modelingWorkflow: ["Data Loading", "Preprocessing & Scaling", "PCA Reduction", "Silhouette Analysis", "K-Means Training (K=2)", "Cluster Visualization", "Deployment (Streamlit)"],
    mlMetrics: [
      { label: "Silhouette Score (K=2)", value: "0.3134" },
      { label: "Silhouette Score (K=3)", value: "0.2048" },
    ],
    keyResult:
      "Silhouette Analysis identified K=2 as the optimal cluster configuration (score: 0.3134), revealing two distinct customer segments — high-income/high-spending and budget-conscious shoppers.",
    resultValue: "0.3134",
    resultLabel: "Best Silhouette Score (K=2)",
    fullDescription:
      "An Unsupervised Machine Learning project that segments customers into meaningful groups based on purchasing behavior using K-Means and PCA, deployed as a Streamlit dashboard.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "K-Means", "PCA", "Data Visualization", "Streamlit"],
    thumbnail: "/ml-customer.jpg",
    images: ["/ml-customer.jpg"],
    github: "https://github.com/Mohamed-ELazab22/Customer-Segmentation-Dashboard",
    demo: "https://customer-segmentation-dashboard-tcgjinsqc395963eeqyca4.streamlit.app/",
  },
];

// ─── Shared Utility Components ────────────────────────────────────────────────

/** Reusable tool badge */
const ToolBadge = ({ tool }: { tool: string }) => (
  <span className="px-2.5 py-0.5 text-[11px] rounded bg-[#16211D] text-[#B9DCCB] border border-[#315343] font-mono">
    {tool}
  </span>
);

/** Reusable section header inside modal */
const ModalSection = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 mb-1.5">
    <span className="text-[#78C6A3]">{icon}</span>
    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78C6A3]">{label}</h4>
    <div className="flex-1 h-px bg-[#24332D]" />
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [showLiveEmbed, setShowLiveEmbed] = useState<boolean>(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (selectedProject) {
      setActiveImageIndex(0);
      setShowLiveEmbed(false);
    }
  }, [selectedProject]);

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

  // ── Shared card button row (View Details + GitHub) ──────────────────────────
  const CardButtons = ({ project }: { project: Project }) => (
    <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-[#24332D]">
      <button
        onClick={() => setSelectedProject(project)}
        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#3A9B78] hover:bg-[#78C6A3] text-[#F1F3EF] text-xs font-semibold border border-[#315343] transition-colors"
      >
        <Eye size={14} /> View Details
      </button>
      <a
        href={project.github}
        target={project.github !== "#" ? "_blank" : "_self"}
        rel={project.github !== "#" ? "noopener noreferrer" : ""}
        className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-[#16211D] hover:bg-[#16211D] text-[#F1F3EF] hover:text-[#78C6A3] border border-[#24332D] hover:border-[#315343] text-xs font-medium transition-colors"
      >
        <Github size={14} /> GitHub ↗
      </a>
    </div>
  );

  // ── Shared Problem/Solution/Metric snippet inside card body ─────────────────
  const CardSnippet = ({ project }: { project: Project }) => (
    <div className="bg-[#16211D]/80 rounded-lg p-3 border border-[#24332D] mb-4 space-y-2 text-xs">
      <div>
        <span className="text-[#78C6A3] font-semibold block text-[11px] uppercase tracking-wider">Problem</span>
        <p className="text-[#A4AEA8] line-clamp-2">{project.problemStatement}</p>
      </div>
      {project.solutionStatement && (
        <div>
          <span className="text-[#78C6A3] font-semibold block text-[11px] uppercase tracking-wider">Solution</span>
          <p className="text-[#A4AEA8] line-clamp-2">{project.solutionStatement}</p>
        </div>
      )}
      {project.resultValue && (
        <div className="pt-1.5 border-t border-[#24332D] flex items-center justify-between">
          <span className="text-[#737F78] text-[11px]">Key Metric</span>
          <span className="font-mono text-xs font-bold text-[#F1F3EF]">
            <span className="text-[#D6A85F] text-sm font-extrabold mr-1">{project.resultValue}</span>
            {project.resultLabel}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-[#0B1110]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#F1F3EF]">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-[#3A9B78] mx-auto rounded-full mb-12" />

        {/* ── Machine Learning Projects ── */}
        <div className="mb-20 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-[#16211D] text-[#78C6A3] border border-[#315343]">
                <Brain size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#F1F3EF]">Machine Learning Projects</h3>
            </div>
            <p className="text-[#A4AEA8] text-sm md:text-base">
              End-to-end Machine Learning applications built to solve real-world classification & clustering problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mlProjects.map((project, i) => {
              const IconComponent = i === 0 ? TrendingUp : i === 1 ? Target : Users;
              return (
                <div
                  key={project.title}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  data-index={i}
                  className={`glass rounded-xl overflow-hidden card-hover group flex flex-col transition-all duration-700 ease-out ${
                    visibleCards.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="aspect-video bg-[#0E1513] flex items-center justify-center border-b border-[#24332D] overflow-hidden relative cursor-pointer group-hover:opacity-90 transition-opacity"
                  >
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded bg-[#0B1110]/90 text-[#78C6A3] border border-[#315343] backdrop-blur-sm uppercase tracking-wider">
                        {project.categoryTag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[#16211D] text-[#78C6A3] border border-[#315343] shrink-0">
                        <IconComponent size={18} />
                      </div>
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-lg font-bold text-[#F1F3EF] group-hover:text-[#78C6A3] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-[#A4AEA8] text-xs leading-relaxed mb-4">{project.description}</p>

                    <CardSnippet project={project} />

                    <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                      {project.tools.map((tool) => <ToolBadge key={tool} tool={tool} />)}
                    </div>

                    <CardButtons project={project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Data Analysis Projects ── */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-[#16211D] text-[#78C6A3] border border-[#315343]">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#F1F3EF]">Data Analysis Projects</h3>
            </div>
            <p className="text-[#A4AEA8] text-sm md:text-base">
              Exploratory data analysis, interactive Power BI dashboards, and business intelligence solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => {
              const globalIndex = mlProjects.length + i;
              return (
                <div
                  key={project.title}
                  ref={(el) => { cardRefs.current[globalIndex] = el; }}
                  data-index={globalIndex}
                  className={`glass rounded-xl overflow-hidden card-hover group flex flex-col transition-all duration-700 ease-out ${
                    visibleCards.has(globalIndex) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="aspect-video bg-[#0E1513] flex items-center justify-center border-b border-[#24332D] overflow-hidden relative cursor-pointer group-hover:opacity-90 transition-opacity"
                  >
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded bg-[#0B1110]/90 text-[#78C6A3] border border-[#315343] backdrop-blur-sm uppercase tracking-wider">
                        {project.categoryTag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg font-bold text-[#F1F3EF] mb-2 group-hover:text-[#78C6A3] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-[#A4AEA8] text-xs leading-relaxed mb-4">{project.description}</p>

                    <CardSnippet project={project} />

                    <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                      {project.tools.map((tool) => <ToolBadge key={tool} tool={tool} />)}
                    </div>

                    <CardButtons project={project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ────────────────────── DETAILS MODAL ────────────────────── */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-[#111A17] border border-[#24332D] text-[#F1F3EF] w-[92vw] max-w-6xl max-h-[85vh] p-0 overflow-hidden flex flex-col shadow-2xl rounded-2xl">

          {/* Modal Header (shared) */}
          <DialogHeader className="p-6 pb-4 border-b border-[#24332D] bg-[#0E1513]/90 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#16211D] text-[#78C6A3] border border-[#315343]">
                {selectedProject?.isML ? <Brain size={22} /> : <LayoutDashboard size={22} />}
              </div>
              <div>
                <DialogTitle className="text-xl md:text-2xl font-bold text-[#F1F3EF]">
                  {selectedProject?.title}
                </DialogTitle>
                <span className="inline-block mt-1 px-2.5 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#16211D] text-[#78C6A3] border border-[#315343] uppercase tracking-wider">
                  {selectedProject?.categoryTag}
                </span>
              </div>
            </div>
            <DialogDescription className="sr-only">
              Detailed Case Study for {selectedProject?.title}
            </DialogDescription>
          </DialogHeader>

          {/* ── MODAL BODY ── */}
          <div className="flex-1 overflow-y-auto p-6 modal-scroll">

            {/* ════════════════════════════════════════════════════════
                ML CASE STUDY LAYOUT
                ════════════════════════════════════════════════════════ */}
            {selectedProject?.isML && (
              <div className="space-y-6 max-w-4xl mx-auto">

                {/* 01 — Problem */}
                <div className="bg-[#16211D]/90 rounded-xl p-5 border border-[#24332D]">
                  <ModalSection icon={<HelpCircle size={15} />} label="01 — Problem" />
                  <p className="text-[#A4AEA8] text-sm leading-relaxed mt-2">
                    {selectedProject.problemStatement}
                  </p>
                </div>

                {/* 02 — Dataset */}
                {selectedProject.datasetDetails && (
                  <div className="bg-[#16211D]/90 rounded-xl p-5 border border-[#24332D]">
                    <ModalSection icon={<FileText size={15} />} label="02 — Dataset" />
                    <ul className="mt-2 space-y-1.5">
                      {selectedProject.datasetDetails.map((line, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#A4AEA8]">
                          <span className="text-[#3A9B78] mt-0.5 shrink-0">›</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 03 — Data Preparation */}
                {selectedProject.preprocessingSteps && (
                  <div className="bg-[#16211D]/90 rounded-xl p-5 border border-[#24332D]">
                    <ModalSection icon={<FlaskConical size={15} />} label="03 — Data Preparation" />
                    <ul className="mt-2 space-y-1.5">
                      {selectedProject.preprocessingSteps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#A4AEA8]">
                          <span className="text-[#3A9B78] mt-0.5 shrink-0">›</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 04 — Solution Workflow */}
                {selectedProject.modelingWorkflow && (
                  <div className="bg-[#16211D]/90 rounded-xl p-5 border border-[#24332D]">
                    <ModalSection icon={<Activity size={15} />} label="04 — Solution Workflow" />
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      {selectedProject.modelingWorkflow.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <span className="px-3 py-1 text-xs font-mono rounded-lg bg-[#0E1513] text-[#B9DCCB] border border-[#315343]">
                            {step}
                          </span>
                          {idx < selectedProject.modelingWorkflow!.length - 1 && (
                            <ArrowDown size={13} className="text-[#3A9B78] rotate-[-90deg] shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 05 — Model */}
                {selectedProject.modelUsed && (
                  <div className="bg-[#16211D]/90 rounded-xl p-5 border border-[#24332D]">
                    <ModalSection icon={<Cpu size={15} />} label="05 — Model" />
                    <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0E1513] border border-[#315343]">
                      <Brain size={15} className="text-[#78C6A3]" />
                      <span className="font-mono text-sm font-semibold text-[#F1F3EF]">
                        {selectedProject.modelUsed}
                      </span>
                    </div>
                  </div>
                )}

                {/* 06 — Model Evaluation */}
                {selectedProject.mlMetrics && selectedProject.mlMetrics.length > 0 && (
                  <div className="bg-[#16211D]/90 rounded-xl p-5 border border-[#315343]">
                    <ModalSection icon={<Award size={15} />} label="06 — Model Evaluation" />
                    <div className="mt-3 flex flex-wrap gap-3">
                      {selectedProject.mlMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex flex-col items-center justify-center px-6 py-4 rounded-xl bg-[#0E1513] border border-[#315343] min-w-[140px] text-center"
                        >
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#737F78] mb-1">
                            {metric.label}
                          </span>
                          <span className="text-2xl font-extrabold font-mono text-[#D6A85F]">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 07 — Key Result */}
                {selectedProject.keyResult && (
                  <div className="bg-[#16211D]/90 rounded-xl p-5 border border-[#24332D]">
                    <ModalSection icon={<Lightbulb size={15} />} label="07 — Key Result" />
                    <p className="text-[#F1F3EF] text-sm leading-relaxed font-medium mt-2">
                      {selectedProject.keyResult}
                    </p>
                  </div>
                )}

                {/* 08 — Tools & Technologies */}
                <div>
                  <ModalSection icon={<FileText size={15} />} label="08 — Tools & Technologies" />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-xs rounded-lg bg-[#16211D] text-[#B9DCCB] font-mono border border-[#315343]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="pt-4 border-t border-[#24332D] space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#737F78]">
                    PROJECT LINKS
                  </h4>
                  <div className="flex flex-wrap items-center gap-3">
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#3A9B78] hover:bg-[#78C6A3] text-[#F1F3EF] text-xs font-semibold border border-[#315343] transition-all shadow-sm hover:shadow-[0_0_12px_rgba(58,155,120,0.35)]"
                      >
                        <ExternalLink size={15} /> View Live Project ↗
                      </a>
                    )}
                    {selectedProject.github && selectedProject.github !== "#" && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#3A9B78] hover:bg-[#78C6A3] text-[#F1F3EF] text-xs font-semibold border border-[#315343] transition-all shadow-sm hover:shadow-[0_0_12px_rgba(58,155,120,0.35)]"
                      >
                        <Github size={15} /> GitHub ↗
                      </a>
                    )}
                  </div>
                </div>

              </div>
            )}

            {/* ════════════════════════════════════════════════════════
                DASHBOARD / DATA ANALYTICS CASE STUDY LAYOUT
                ════════════════════════════════════════════════════════ */}
            {!selectedProject?.isML && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* LEFT — Dashboard Preview (63%) */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#78C6A3] flex items-center gap-2">
                      <Monitor size={15} /> Dashboard Preview
                    </h4>
                    {selectedProject?.demo && (
                      <button
                        onClick={() => setShowLiveEmbed(!showLiveEmbed)}
                        className="text-xs font-mono text-[#A4AEA8] hover:text-[#78C6A3] border border-[#24332D] hover:border-[#315343] px-2.5 py-1 rounded bg-[#16211D] transition-colors flex items-center gap-1.5"
                      >
                        {showLiveEmbed ? <ImageIcon size={13} /> : <ExternalLink size={13} />}
                        {showLiveEmbed ? "Show Image Preview" : "Show Live Embed"}
                      </button>
                    )}
                  </div>

                  <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#315343] bg-[#0E1513] shadow-lg relative group">
                    {showLiveEmbed && selectedProject?.demo ? (
                      <iframe
                        title={selectedProject.title}
                        src={selectedProject.demo}
                        className="w-full h-full border-none"
                        allowFullScreen={true}
                      />
                    ) : (
                      <img
                        src={selectedProject?.images && selectedProject.images.length > 0 ? selectedProject.images[activeImageIndex] : selectedProject?.thumbnail}
                        alt={selectedProject?.title}
                        className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                    )}
                  </div>

                  {selectedProject?.images && selectedProject.images.length > 1 && !showLiveEmbed && (
                    <div>
                      <span className="text-[11px] font-mono text-[#737F78] mb-2 block">
                        Views ({activeImageIndex + 1} of {selectedProject.images.length})
                      </span>
                      <div className="flex gap-3 overflow-x-auto pb-2 modal-scroll">
                        {selectedProject.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`shrink-0 w-24 aspect-video rounded-lg overflow-hidden border transition-all ${
                              activeImageIndex === idx
                                ? "border-[#3A9B78] ring-2 ring-[#3A9B78]/30 scale-105"
                                : "border-[#24332D] opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT — Project Information (37%) */}
                <div className="lg:col-span-4 space-y-6">

                  <div className="bg-[#16211D]/90 rounded-xl p-4 border border-[#24332D] space-y-1.5">
                    <ModalSection icon={<HelpCircle size={15} />} label="Business Problem" />
                    <p className="text-[#A4AEA8] text-xs md:text-sm leading-relaxed">
                      {selectedProject?.problemStatement}
                    </p>
                  </div>

                  <div className="bg-[#16211D]/90 rounded-xl p-4 border border-[#24332D] space-y-1.5">
                    <ModalSection icon={<BarChart2 size={15} />} label="Analysis / Solution" />
                    <p className="text-[#A4AEA8] text-xs md:text-sm leading-relaxed">
                      {selectedProject?.solutionStatement || selectedProject?.fullDescription}
                    </p>
                  </div>

                  {(selectedProject?.keyInsights?.length || selectedProject?.resultValue) && (
                    <div className="bg-[#16211D]/90 rounded-xl p-4 border border-[#315343] space-y-1.5">
                      <ModalSection icon={<Lightbulb size={15} />} label="Top Insight" />
                      {selectedProject?.keyInsights && selectedProject.keyInsights.length > 0 ? (
                        <p className="text-[#F1F3EF] text-xs md:text-sm leading-relaxed font-medium">
                          {selectedProject.keyInsights[0]}
                        </p>
                      ) : (
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-xs text-[#A4AEA8]">{selectedProject?.resultLabel}</span>
                          <span className="text-lg font-extrabold font-mono text-[#D6A85F]">
                            {selectedProject?.resultValue}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <ModalSection icon={<FileText size={15} />} label="Tools & Technologies" />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProject?.tools.map((tool) => (
                        <span key={tool} className="px-3 py-1 text-xs rounded-lg bg-[#16211D] text-[#B9DCCB] font-mono border border-[#315343]">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#24332D] space-y-2.5">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#737F78]">
                      PROJECT LINKS
                    </h4>
                    <div className="flex flex-wrap items-center gap-3">
                      {selectedProject?.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#3A9B78] hover:bg-[#78C6A3] text-[#F1F3EF] text-xs font-semibold border border-[#315343] transition-colors shadow-sm"
                        >
                          <ExternalLink size={15} /> View Dashboard ↗
                        </a>
                      )}
                      {selectedProject?.github && selectedProject.github !== "#" && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#3A9B78] hover:bg-[#78C6A3] text-[#F1F3EF] text-xs font-semibold border border-[#315343] transition-all shadow-sm hover:shadow-[0_0_12px_rgba(58,155,120,0.35)]"
                        >
                          <Github size={15} /> GitHub ↗
                        </a>
                      )}
                      {selectedProject?.presentation && (
                        <a
                          href={selectedProject.presentation}
                          download
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#3A9B78] hover:bg-[#78C6A3] text-[#F1F3EF] text-xs font-semibold border border-[#315343] transition-all shadow-sm hover:shadow-[0_0_12px_rgba(58,155,120,0.35)]"
                        >
                          <FileText size={14} /> Download Presentation
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
