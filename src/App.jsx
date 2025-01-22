import React from "react";
import ResumeGPT from "./components/ResumeGPT";

function App() {
  const resumeData = {
    personalInfo: {
      name: "John Doe",
      title: "Senior Software Engineer",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      summary:
        "Experienced software engineer with 8+ years of expertise in full-stack development, cloud architecture, and team leadership.",
    },
    experience: [
      {
        company: "Tech Solutions Inc.",
        position: "Senior Software Engineer",
        duration: "2020 - Present",
        highlights: [
          "Led development of cloud-native applications using React and Node.js",
          "Managed team of 5 developers and improved sprint velocity by 40%",
          "Implemented CI/CD pipelines reducing deployment time by 60%",
        ],
      },
      {
        company: "Innovation Labs",
        position: "Software Engineer",
        duration: "2017 - 2020",
        highlights: [
          "Developed scalable microservices architecture",
          "Optimized database queries improving performance by 50%",
          "Mentored junior developers and conducted code reviews",
        ],
      },
    ],
    education: [
      {
        institution: "University of California, Berkeley",
        degree: "M.S. Computer Science",
        year: "2017",
      },
      {
        institution: "Stanford University",
        degree: "B.S. Computer Science",
        year: "2015",
      },
    ],
    skills: {
      technical: [
        "JavaScript/TypeScript",
        "React.js",
        "Node.js",
        "Python",
        "AWS",
        "Docker",
        "Kubernetes",
        "GraphQL",
      ],
      soft: [
        "Team Leadership",
        "Project Management",
        "Problem Solving",
        "Communication",
      ],
    },
    projects: [
      {
        name: "E-commerce Platform",
        description:
          "Built a scalable e-commerce platform serving 100k+ monthly users",
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
      },
      {
        name: "AI Chat Assistant",
        description: "Developed an AI-powered customer service chatbot",
        technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
      },
    ],
  };

  const theme = {
    colors: {
      background: {
        main: "#1E293B", // Main app background
        chat: "#2e395f", // Chat container background
        message: "#334155", // Message background
        input: "#475569", // Input field background
        overlay: "#020617", // Overlay/modal background
      },
      ui: {
        title: "#F8FAFC", // Title text
        description: "#94A3B8", // App description text
        scrollbar: "#64748B", // Borders and dividers
        icon: "#94A3B8", // Icons and decorative elements
        hover: "#E2E8F0", // Hover states and interactions
      },
      text: {
        primary: "#F8FAFC", // Main text in messages
        secondary: "#CBD5E1", // Secondary text
        placeholder: "#94A3B8", // Input placeholder text
      },
    },
    animation: {
      duration: 0.5,
      stiffness: 260,
      damping: 20,
      animationColor: "#9aA3B8",
      barColor: "#2e395f",
    },
  };

  const config = {
    name: "Truman's GPT Assistant",
    description: "I know everything about Truman, ask anything about him! ",
    welcomeMessage:
      "Hi! I'm Truman's AI resume assistant. Ask me anything about the Truman!",
    errorMessage: "I'm sorry, I encountered an error. Please try again.",
    inputPlaceholder: "Ask me anything about Truman's resume...",
  };

  return (
    <div className="min-h-screen h-[1800px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 flex items-center justify-center">
      <ResumeGPT
        resumeData={resumeData}
        theme={theme}
        config={config}
        apiKey={import.meta.env.VITE_OPENAI_API_KEY}
        baseURL={import.meta.env.VITE_OPENAI_BASE_URL}
        model={import.meta.env.VITE_OPENAI_MODEL || "gpt-3.5-turbo"}
        temperature={0.7}
        maxTokens={2000}
        height="300px"
        width="300px"
        className="max-w-full"
      />
      //{" "}
    </div>
  );
}

export default App;
