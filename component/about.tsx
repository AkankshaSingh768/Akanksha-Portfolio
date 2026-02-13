import Image from "next/image";

export default function About() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center">
      <div className="mx-auto max-w-7xl flex gap-20">
        <p className="text-3xl"> I am a passionate Web Developer who loves building clean, responsive, and user-friendly websites. I believe in writing well-structured code and creating designs that not only look good but also work smoothly across all devices.</p>
        <Image
        src="/Akanksha.jpg"
        alt="profile image"
        width={300}
        height={300}
        

        />

            <p className="text-3xl">I am detail-oriented, problem-focused, and always eager to learn new technologies to improve my skills. My goal is to help businesses and individuals establish a strong online presence through modern and reliable web solutions.</p>
       


      </div>
      
    </div>
  );
}
