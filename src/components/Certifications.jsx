const certificates = [
  "CCNA - Cisco Certified Network Associate",
  "Cisco Python Essentials 1 & 2",
  "HTML5 Fundamentals",
  "Nutanix Certified Associate 6",
];

export default function Certifications() {
  return (
    <section className="py-24 px-10 md:px-20">

      <h2 className="text-4xl font-bold mb-12">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {certificates.map((cert, index) => (

          <div
            key={index}
            className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-blue-500 transition duration-300"
          >
            {cert}
          </div>

        ))}

      </div>

    </section>
  );
}