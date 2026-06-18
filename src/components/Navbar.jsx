export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md px-10 py-4 flex justify-between items-center z-50">

      {/* Left - Name */}
      <h1 className="font-bold text-xl text-white">
        Neha K
      </h1>

      {/* Right - Navigation Links */}
      <div className="flex gap-8 text-gray-300">

        <a
          href="#about"
          className="hover:text-blue-400 transition duration-300"
        >
          About
        </a>

        <a
          href="#skills"
          className="hover:text-blue-400 transition duration-300"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="hover:text-blue-400 transition duration-300"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="hover:text-blue-400 transition duration-300"
        >
          Contact
        </a>

      </div>
    </nav>
  );
}