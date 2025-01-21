# Resume GPT Chat

A beautiful, customizable React component for creating AI-powered resume chat interfaces. This package provides a complete solution for building resume chatbots with OpenAI integration, beautiful animations, and a modern UI.

## Features

- 🤖 OpenAI-powered chat interface
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

4. Set up your environment variables (create a .env file):

```env
OPENAI_API_KEY=your_api_key_here
```

## Usage

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

// Optional theme customization
const theme = {
  colors: {
    primary: {
      default: "#0f172a",
      light: "#1e293b",
      dark: "#020617",
    },
    accent: {
      default: "#38bdf8",
      light: "#7dd3fc",
      dark: "#0284c7",
    },
  },
  animation: {
    duration: 0.5,
    stiffness: 260,
    damping: 20,
  },
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ResumeGPT
        resumeData={resumeData}
        theme={theme} // Optional
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

### Theme Customization

The `theme` prop allows you to customize:

```js
{
  colors: {
    primary: {
      default: string,
      light: string,
      dark: string,
    },
    accent: {
      default: string,
      light: string,
      dark: string,
    }
  },
  animation: {
    duration: number,
    stiffness: number,
    damping: number,
  }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Your Name]
