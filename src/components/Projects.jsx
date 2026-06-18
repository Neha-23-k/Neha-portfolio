const projects = [
  {
    title: "Automotive ECU Logic Simulator",
    tech: "C • TinkerCAD • Embedded Systems",
    desc: "Simulated ECU state-machine logic for automotive subsystems such as engine, braking, and lighting systems using firmware logic and embedded programming.",
    github: "https://github.com/Neha-23-k/Automotive-ECU-simulation",   
  },

  {
    title: "Real-Time Stress Monitoring System",
    tech: "Raspberry Pi • Sensors • Python",
    desc: "Built a physiological monitoring system using GSR and pulse sensors with real-time signal processing and threshold-based health alerts.",
    github: "#",
  },

  {
    title: "Air Pollution Monitoring System",
    tech: "Arduino • MQ Sensors • Supabase",
    desc: "Designed an IoT-based air quality monitoring system with live sensor data collection, cloud logging, and threshold-based notifications.",
    github: "#",
  },

  {
    title: "Customer Sentiment Alert System",
    tech: "Machine Learning • MySQL • Supabase",
    desc: "Developed a sentiment classification system to analyze customer feedback and trigger alerts whenever negative sentiment is detected.",
    github: "https://github.com/Neha-23-k/Customer-Sentiment-Alert-System-using-Real-Time-Feedback-Analysis",
  },

  {
    title: "LRU Cache Simulator",
    tech: "C++ • Data Structures",
    desc: "Implemented an optimized Least Recently Used cache using hash maps and doubly linked lists with O(1) insertion and retrieval operations.",
    github: "https://github.com/Neha-23-k/LRU",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-10 md:px-20">

      <h2 className="text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-gray-900 p-7 rounded-xl border border-gray-800 
                       hover:border-blue-500 hover:scale-105 
                       transition duration-300 shadow-lg"
          >

            {/* Project Title */}
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>

            {/* Tech Stack */}
            <p className="text-blue-400 mt-3 text-sm">
              {project.tech}
            </p>

            {/* Description */}
            <p className="text-gray-400 mt-4 leading-7">
              {project.desc}
            </p>

            {/* Button */}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 text-blue-400 hover:text-blue-300 transition"
            >
              View Project →
            </a>

          </div>

        ))}

      </div>
    </section>
  );
}