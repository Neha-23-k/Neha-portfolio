import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="fixed left-6 bottom-10 flex flex-col gap-5 text-gray-400 text-2xl">

      <a
        href="https://github.com/Neha-23-k"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-400 transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/neha-kumar-35a97a2b9"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-400 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:nehak.1si23ee036@gmail.com"
        className="hover:text-blue-400 transition"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}