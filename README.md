# Resume GPT Chat

A beautiful, customizable React component for creating AI-powered resume chat interfaces. This package provides a complete solution for building resume chatbots with DeepSeek integration, beautiful animations, and a modern UI.

## Features

- 🤖 DeepSeek-powered chat interface
- 🎨 Beautiful UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Customizable themes and configurations
- 🔧 Easy to integrate and use

## Installation

```bash
# Install the package
npm install resume-gpt-chat

# Install peer dependencies
npm install react react-dom @heroicons/react framer-motion openai tailwindcss
```

## Setup

1. Initialize Tailwind CSS if you haven't already:

```bash
# Initialize tailwind
npx tailwindcss init
```

2. Configure your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/resume-gpt-chat/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. Add Tailwind directives to your main CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Set up your environment variables (create a .env file), I used DeepSeek AI, feel free to use ChatGPT, which is also compatible:

```env
OPENAI_API_KEY=your_api_key_here
```

## Usage

**_Please note that if the following code is not found in your project, the default resume data will be used._**

Here's a complete example of how to use the ResumeGPT component:

```jsx
import { ResumeGPT } from "resume-gpt-chat";

// Your resume data in JSON format

const resumeData = {
  basics: {
    name: "John Doe",
    label: "Software Engineer",
    email: "john@example.com",
    phone: "(123) 456-7890",
    summary: "Experienced software engineer with a focus on web development",
    location: {
      city: "San Francisco",
      countryCode: "US",
    },
  },
  work: [
    {
      company: "Tech Corp",
      position: "Senior Developer",
      startDate: "2020-01",
      endDate: "Present",
      highlights: [
        "Led development of key features",
        "Managed team of 5 developers",
      ],
    },
  ],
  education: [
    {
      institution: "University of Technology",
      area: "Computer Science",
      studyType: "Bachelor",
      startDate: "2015",
      endDate: "2019",
    },
  ],
};

//  theme customization
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

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ResumeGPT
        <ResumeGPT
            resumeData={resumeData} // if not found, use default resume data
            theme={theme} // if not found, use default theme
            config={config} // if not found, use default config
            apiKey={process.env.NEXT_PUBLIC_VITE_OPENAI_API_KEY} //use your own api key
            baseURL={process.env.NEXT_PUBLIC_VITE_OPENAI_BASE_URL} //use your own base url
            model="deepseek-chat" //use your own model, if not found, use default model gpt-3.5-turbo
            temperature={1.3} //use your own temperature
            maxTokens={200} //use your own maxTokens
            width="500px" //use your own width, cannot be less than 500px
            height="500px" //use your own height, cannot be less than 500px
          />
    </div>
  );
}

export default App;
```

## Configuration Options

### Resume Data Structure

The `resumeData` prop follows the [JSON Resume Schema](https://jsonresume.org/schema/). Here are the supported sections:

- basics
- work
- education
- skills
- projects
- volunteer
- awards
- publications

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

# 💗 From Truman
