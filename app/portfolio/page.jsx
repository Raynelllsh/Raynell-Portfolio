import Image from "next/image";

const basePath = "/Raynell-Portfolio"; // Must match next.config.mjs

const HKOLogo = `${basePath}/assets/pictures/Hong_Kong_Observatory_Logo.svg`;
const PSLogo = `${basePath}/assets/pictures/Primal-solutions.png`;
const GEOLogo = `${basePath}/assets/pictures/polyugeo_logo.jpg`;
const BMCLogo = `${basePath}/assets/pictures/engl_new.png`;
const MonopolyLogo = `${basePath}/assets/pictures/monopoly.png`;
const TMSLogo = `${basePath}/assets/pictures/task.png`;
const OSSLogo = `${basePath}/assets/pictures/online-shopping.png`;
const ETFLogo = `${basePath}/assets/pictures/etf.png`;
const MSALogo = `${basePath}/assets/pictures/MSA.jpg`;
const APSSLogo = `${basePath}/assets/pictures/APSS.jpg`;
const AlphabagLogo = `${basePath}/assets/pictures/alphabag-logo.png`;

const EventBox = ({ image, name }) => (
  <div className="
    group
    relative
    w-64 h-64
    flex flex-col items-center justify-center 
    p-6 
    bg-white 
    rounded-3xl 
    shadow-lg 
    border-2 border-slate-100 
    transition-all duration-300 
    hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] hover:-translate-y-2
  ">
    <div className="relative w-24 h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
      <Image
        src={image}
        alt={name}
        fill
        className="object-contain p-1"
      />
    </div>

    <div className="w-20 h-1.5 bg-slate-200 my-5 rounded-full group-hover:bg-yellow-400 transition-colors duration-300"></div>

    <span className="text-xl font-bold text-slate-800 text-center">
      {name}
    </span>
  </div>
);

const Eventboxes = [
  {
    title: "Work Experience",
    skills: [
      { name: "Alphabag", image: AlphabagLogo },
      { name: "Hong Kong Observatory", image: HKOLogo },
      { name: "Primal Solutions", image: PSLogo },
      { name: "GEO", image: GEOLogo },
      { name: "BMC Facilitator", image: BMCLogo },
    ],
  },
  {
    title: "Projects",
    skills: [
      { name: "Task Management System", image: TMSLogo },
      { name: "Monopoly", image: MonopolyLogo },
      { name: "Online Shopping System", image: OSSLogo },
      { name: "ETF Predicition System", image: ETFLogo },
    ],
  },
  {
    title: "Volunteer Experience",
    skills: [
      { name: "Service Learning", image: APSSLogo },
      { name: "MSA Vice President", image: MSALogo },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-40 pb-20 px-6 bg-black text-white">

      {/* 1. Technologies Section */}
      <section className="max-w-6xl mx-auto mb-24 w-full">
        {/* NEW TITLE STYLE */}
        <div className="flex items-center gap-4 mb-10">
            <h2 className="text-4xl font-bold tracking-tight">
              My <span className="text-yellow-500">Portfolio</span>
            </h2>
            <div className="h-1 flex-1 bg-slate-800 rounded-full"></div>
          </div>

        <div className="space-y-20">
          {Eventboxes.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-white mb-10 border-b-4 border-yellow-400 pb-2 px-8">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-8 w-full">
                {category.skills.map((skill, idx) => (
                  <EventBox key={idx} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}