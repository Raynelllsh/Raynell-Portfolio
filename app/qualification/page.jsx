import Image from "next/image";

// --- Asset Imports ---
const PythonLogo = "/assets/pictures/Python-logo.png";
const CppLogo = "/assets/pictures/ISO_C++_Logo.png";
const JavaLogo = "/assets/pictures/java-logo.svg";
const JSLogo = "/assets/pictures/javascript-logo.svg";
const ReactLogo = "/assets/pictures/react.svg";
const TailwindLogo = "/assets/pictures/Tailwind_CSS_Logo.png";
const MySQLLogo = "/assets/pictures/mysql-logo.svg";
const GitLogo = "/assets/pictures/git-icon-logo.svg";
const ViteLogo = "/assets/pictures/vitejs.svg";
const AWSLogo = "/assets/pictures/aws.svg";
const SCLogo = "/assets/pictures/simplified-chinese-character.png";
const EngLogo = "/assets/pictures/letter-a-text-variant.svg";
const TCLogo = "/assets/pictures/Traditional_chinese.svg.png";
const ExpressLogo = "/assets/pictures/express-js-logo-png_seeklogo-339850.png";
const FlaskLogo = "/assets/pictures/Flask.svg";
const MongoLogo = "/assets/pictures/mongodb-logo.svg";
const TypeScriptLogo = "/assets/pictures/typescript-logo.svg";
const NextLogo = "/assets/pictures/next-logo.svg";
const FirebaseLogo = "/assets/pictures/firebase-logo.svg";
const LinuxLogo = "/assets/pictures/linux-logo.svg";
const TerraformLogo = "/assets/pictures/terraform-logo.svg";
const AnsibleLogo = "/assets/pictures/ansible-logo.svg";
const DockerLogo = "/assets/pictures/docker-logo.svg";
const JenkinsLogo = "/assets/pictures/jenkins-logo.svg";

// --- Components ---

// 1. Skill Box
const SkillBox = ({ image, name }) => (
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

// 2. Qualification Box (UPDATED: Clickable Link)
const QualificationBox = ({ title, issuer, date, link }) => (
  <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      relative
      w-72 h-72
      flex flex-col items-center justify-center 
      p-6 
      bg-white 
      rounded-3xl 
      shadow-lg 
      border-2 border-slate-100 
      transition-all duration-300 
      hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] hover:-translate-y-2
      cursor-pointer
    "
  >
    <div className="mb-4 p-4 bg-slate-50 rounded-full shadow-sm group-hover:shadow-md transition-all">
      <Image 
        src={AWSLogo} 
        alt="Credential" 
        width={48} 
        height={48} 
        className="object-contain"
      />
    </div>
    
    <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight text-center px-2">
      {title}
    </h3>
    <p className="text-sm text-slate-500 font-medium mb-4">
      {issuer}
    </p>
    
    <span className="mt-auto text-xs font-semibold text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition-colors">
      {date}
    </span>
  </a>
);

// --- Data Configuration ---

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", image: PythonLogo },
      { name: "C++", image: CppLogo },
      { name: "Java", image: JavaLogo },
      { name: "JavaScript", image: JSLogo },
      { name: "TypeScript", image: TypeScriptLogo },
    ],
  },
  {
    title: "Frontend Frameworks",
    skills: [
      { name: "React.js", image: ReactLogo },
      { name: "Tailwind CSS", image: TailwindLogo },
      { name: "Next.js", image: NextLogo },
    ],
  },
  {
    title: "Backend Frameworks",
    skills: [
      { name: "Express.js", image: ExpressLogo },
      { name: "Flask", image: FlaskLogo },
      { name: "Firebase", image: FirebaseLogo },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", image: MySQLLogo },
      { name: "MongoDB", image: MongoLogo },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", image: GitLogo },
      { name: "AWS", image: AWSLogo },
      { name: "Vite", image: ViteLogo },
      { name: "Linux Commands", image: LinuxLogo },
      { name: "Terraform", image: TerraformLogo },
      { name: "Ansible", image: AnsibleLogo },
      { name: "Docker", image: DockerLogo },
      { name: "Jenkins", image: JenkinsLogo },
    ],
  },
  {
    title: "Spoken Languages",
    skills: [
      { name: "English", image: EngLogo },
      { name: "Cantonese", image: TCLogo },
      { name: "Mandarin", image: SCLogo },
    ],
  },
];

const qualifications = [
  { 
    title: "AWS Certified Cloud Practitioner", 
    issuer: "Amazon Web Services", 
    date: "2024",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/521fbbf7d8f24b68a21ea1da01e0f0d0"
  },
  { 
    title: "AWS Certified Solution Architect Associate", 
    issuer: "Amazon Web Services", 
    date: "2025",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/08ed6296ed8f48b982ee792c14c10354"
  },
];

// --- Main Page Component ---

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-40 pb-20 px-6 bg-black text-white">

      {/* 1. Technologies Section */}
      <section className="max-w-6xl mx-auto mb-24 w-full">
        {/* NEW TITLE STYLE */}
        <div className="flex items-center gap-4 mb-10">
            <h2 className="text-4xl font-bold tracking-tight">
              Technologies & <span className="text-yellow-500">Skills</span>
            </h2>
            <div className="h-1 flex-1 bg-slate-800 rounded-full"></div>
          </div>

        <div className="space-y-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-white mb-10 border-b-4 border-yellow-400 pb-2 px-8">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-8 w-full">
                {category.skills.map((skill, idx) => (
                  <SkillBox key={idx} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Qualifications Section */}
      <section className="max-w-6xl mx-auto pb-20 w-full">
        {/* NEW TITLE STYLE */}
        <div className="flex items-center gap-4 mb-10">
            <h2 className="text-4xl font-bold tracking-tight">
              Qualifications & <span className="text-yellow-500">Certification</span>
            </h2>
            <div className="h-1 flex-1 bg-slate-800 rounded-full"></div>
          </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {qualifications.map((qual, index) => (
            <QualificationBox 
              key={index}
              title={qual.title}
              issuer={qual.issuer}
              date={qual.date}
              link={qual.link}
            />
          ))}
        </div>
      </section>

    </main>
  );
}
