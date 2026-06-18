const skills = {
  Programming: ["C++", "Python", "JavaScript", "SQL"],
  Web: ["HTML", "CSS", "React", "Supabase"],
  Embedded: ["Embedded C", "Arduino", "Raspberry Pi", "Sensors"],
  Electronics: ["Analog Electronics", "Digital Electronics", "Circuit Theory"],
  Tools: ["Git", "VS Code", "MySQL", "TinkerCAD"]
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-10 md:px-20"
    >
      <h2 className="text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {Object.entries(skills).map(([category, items], index) => (

          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition duration-300"
          >

            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">

              {items.map((skill, i) => (

                <span
                  key={i}
                  className="bg-black px-4 py-2 rounded-lg text-gray-300"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}