
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center px-10 md:px-20 gap-10">

      {/* Left */}
      <div>
        <p className="text-blue-400 text-lg mb-3">
          Hello, I’m
        </p>

        <h1 className="text-5xl md:text-7xl font-bold">
          Neha K
        </h1>

        <TypeAnimation
  sequence={[
    "Engineer",
    1500,
    "Developer",
    1500,
    "IoT Enthusiast",
    1500,
    "Embedded Systems Learner",
    1500,
  ]}
  wrapper="h2"
  speed={40}
  repeat={Infinity}
  className="text-2xl md:text-3xl text-gray-300 mt-4 font-medium"
/>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          I enjoy building software applications, embedded systems,
          and real-world engineering solutions through technology.
        </p>

        <div className="mt-10 flex gap-5">
 <a
  href="/nehak.pdf"
  target="_blank"
  rel="noreferrer"
  className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-lg shadow-lg"
>
  View Resume
</a>

          <a
  href="https://github.com/Neha-23-k"
  target="_blank"
  className="border border-gray-500 hover:border-white transition px-6 py-3 rounded-lg"
>
  GitHub
</a>
        </div>
      </div>

      {/* Right */}
      <img
  src="/nehakk.jpeg"
  alt="Neha"
 className="w-72 h-72 rounded-full object-cover object-top border-4 border-blue-500 shadow-2xl hover:scale-105 transition duration-500"
/>
    </section>
  );
}