import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseFilesSection = () => {
  const { t } = useLanguage();

  const project = [
    {
      titleKey: "caseFiles.projects.simole.title",
      descriptionKey: "caseFiles.projects.simole.description",
      image: "/simole.png",
      link: "#",
      techStack: ["Python", "Flask", "MongoDB", "EasySNMP"],
    },
    {
      titleKey: "caseFiles.projects.koperasi.title",
      descriptionKey: "caseFiles.projects.koperasi.description",
      image: "/kopkar.png",
      link: "https://www.google.com",
      techStack: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "HeroUI",
        "Nest.js",
        "PostgreSQL",
        "TypeORM",
      ],
    },
    {
      titleKey: "caseFiles.projects.portfolio.title",
      descriptionKey: "caseFiles.projects.portfolio.description",
      image: "/portfolio.png",
      link: "https://www.google.com",
      techStack: [
        "React",
        "Vite",
        "Tailwind CSS",
        "TypeScript",
        "Shadcn UI",
      ],
    },
  ];

  return (
    <div className='w-full min-h-screen bg-neutral-900 px-5 lg:px-20 py-20 flex flex-col gap-10 justify-center'>
      <h1 className='text-4xl font-special text-red-600'>
        {t("caseFiles.title")}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {project.map((item, index) => (
          <Card
            className='h-full col-span-1 bg-neutral-550 border-neutral-600'
            key={item.image + index}
          >
            <CardHeader>
              <img
                src={item.image}
                alt={t(item.titleKey)}
                className='w-full object-cover rounded-lg'
              />
              <CardDescription className='w-full flex flex-wrap gap-1'>
                {item.techStack.map((tech, index) => (
                  <span
                    key={tech + index}
                    className='bg-neutral-700 text-neutral-100 rounded-lg px-2 py-1 mr-2'
                  >
                    {tech}
                  </span>
                ))}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h2 className='text-2xl text-white font-semibold'>
                {t(item.titleKey)}
              </h2>
              <p className='text-neutral-300 font-mono text-lg text-justify'>
                {t(item.descriptionKey)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseFilesSection;
