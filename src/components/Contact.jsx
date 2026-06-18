import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-10 md:px-20">

      <h2 className="text-4xl font-bold mb-12">
        Get In Touch
      </h2>

      <p className="text-gray-400 mb-10 text-lg max-w-2xl">
        I’m always open to internship opportunities, collaborations,
        and conversations around software development, embedded systems,
        and technology projects.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Email */}
        <a
          href="mailto:nehak.1si23ee036@gmail.com"
          className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition duration-300"
        >
          <FaEnvelope className="text-3xl text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-gray-400 mt-2 break-all">
            nehak.1si23ee036@gmail.com
          </p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Neha-23-k"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition duration-300"
        >
          <FaGithub className="text-3xl text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold">GitHub</h3>
          <p className="text-gray-400 mt-2">
            github.com/Neha-23-k
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/neha-kumar-35a97a2b9"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition duration-300"
        >
          <FaLinkedin className="text-3xl text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold">LinkedIn</h3>
          <p className="text-gray-400 mt-2">
            Connect with me
          </p>
        </a>

      </div>

    </section>
  );
}