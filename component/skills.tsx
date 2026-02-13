import Image from "next/image";

const skillsData = [
  {
    id: 1,
    icon: "/HTML.png",
  },
   {
    id: 2,
    icon: "/CSS.png",
  },
  {
    id: 3,
    icon: "/tailwindcss.png",
  },
  {
    id: 4,
    icon: "/boostrap.png",
  },
  {
    id: 5,
    icon: "/JavaScript.png",
  },
  {
    id: 6,
    icon: "/nextJS.png",
  },
  {
     id: 7,
    icon: "/python.png",
  },
];

export default function Skills() {
  return (
    <section className="py-25">
      {/* Top Content */}
      {/* Top Content */}
      <div className="mx-auto max-w-7xl flex gap-40">
        <h2 className="text-6xl font-semibold">
          My Professional Skills and Accomplishments
        </h2>

        <p className="text-lg text-gray-400 max-w-xl">
          I am a passionate Web Developer with a strong focus on creating clean,
          responsive, and user-friendly websites. I combine design thinking with
          practical development skills to build digital experiences that are
          visually appealing and functionally effective.
        </p>
      </div>

      {/* Skills Icons */}
      <div className="mx-auto max-w-7xl mt-20 grid grid-cols-4 gap-12">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center rounded-full border border-white/20 w-40 h-40 hover:scale-105 transition"
          >
            <Image
              src={skill.icon}
              alt="alt"
              width={150}
              height={150}
            />
          
          </div>
        ))}
      </div>
    </section>
  );
}
