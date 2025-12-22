import Image from "next/image";

import HKOLogo from "@/public/assets/pictures/Hong_Kong_Observatory_Logo.svg";
import PSLogo from "@/public/assets/pictures/Primal-solutions.png";
import GEOLogo from "@/public/assets/pictures/polyugeo_logo.jpg";
import BMCLogo from "@/public/assets/pictures/engl_new.png";
import MonopolyLogo from "@/public/assets/pictures/monopoly.png";
import TMSLogo from "@/public/assets/pictures/task.png";
import OSSLogo from "@/public/assets/pictures/online-shopping.png";
import ETFLogo from "@/public/assets/pictures/etf.png";
import MSALogo from "@/public/assets/pictures/MSA.jpg";
import APSSLogo from "@/public/assets/pictures/APSS.jpg";

const EventBox = ({ image, name, description, role }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group">
    <div className="h-48 bg-gray-50 flex items-center justify-center p-6 relative">
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      {role && (
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
          {role}
        </span>
      )}
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function Portfolio() {
  const experiences = [
    {
      name: "Hong Kong Observatory",
      img: HKOLogo,
      role: "Summer Intern",
      desc: "Developed a Python program to automate the conversion of inconsistent excel rainfall records into a standardized format.",
    },
    {
      name: "Primal Solution",
      img: PSLogo,
      role: "Part-time Programmer",
      desc: "Developed a web portal for warehouse management using React and C# .NET Core, implementing role-based access control.",
    },
    {
      name: "PolyU Dept of LSGI",
      img: GEOLogo,
      role: "Part-time Student Helper",
      desc: "Enhanced the Smart Tree Management System using React, creating admin and user interfaces for tree data management.",
    },
  ];

  const projects = [
    {
      name: "Task Management System",
      img: TMSLogo,
      desc: "A MERN stack application allowing users to manage tasks with drag-and-drop functionality.",
    },
    {
      name: "Online Shopping System",
      img: OSSLogo,
      desc: "E-commerce platform with cart and checkout features built with Java Servlets and JSP.",
    },
    {
      name: "Monopoly Game",
      img: MonopolyLogo,
      desc: "A text-based multiplayer Monopoly game developed in C++ emphasizing OOP principles.",
    },
    {
      name: "MSA Analysis",
      img: MSALogo,
      desc: "Analyzed MSA sequences to identify conserved regions using Python and Biopython libraries.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
          Work Experience
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((e, i) => (
            <EventBox
              key={i}
              image={e.img}
              name={e.name}
              role={e.role}
              description={e.desc}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <span className="w-2 h-8 bg-green-600 rounded-full"></span>
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <EventBox key={i} image={p.img} name={p.name} description={p.desc} />
          ))}
        </div>
      </section>
    </div>
  );
}
