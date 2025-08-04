import { Shield, Award, Code2, Users, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const CriminalRecordSection = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: <Code2 className='text-red-500' />,
      titleKey: "criminalRecord.achievements.codeCrimes.title",
      descriptionKey: "criminalRecord.achievements.codeCrimes.description",
      detailsKey: "criminalRecord.achievements.codeCrimes.details",
    },
    {
      icon: <Shield className='text-red-500' />,
      titleKey: "criminalRecord.achievements.security.title",
      descriptionKey: "criminalRecord.achievements.security.description",
      detailsKey: "criminalRecord.achievements.security.details",
    },
    {
      icon: <Users className='text-red-500' />,
      titleKey: "criminalRecord.achievements.teamwork.title",
      descriptionKey: "criminalRecord.achievements.teamwork.description",
      detailsKey: "criminalRecord.achievements.teamwork.details",
    },
    {
      icon: <Award className='text-red-500' />,
      titleKey: "criminalRecord.achievements.achievement.title",
      descriptionKey: "criminalRecord.achievements.achievement.description",
      detailsKey: "criminalRecord.achievements.achievement.details",
    },
  ];

  const certifications = [
    {
      nameKey: "criminalRecord.certifications.reactBootcamp",
      statusKey: "criminalRecord.certifications.certified",
      year: "2024",
    },
  ];

  return (
    <div className='w-full min-h-screen bg-neutral-950 px-5 lg:px-20 py-20 flex flex-col gap-10'>
      <div className='text-center mb-10'>
        <h1 className='text-4xl lg:text-5xl font-special text-red-600 mb-4'>
          {t("criminalRecord.title")}
        </h1>
        <p className='text-neutral-300 font-mono text-lg max-w-3xl mx-auto'>
          {t("criminalRecord.subtitle")}
        </p>
      </div>
      {/* Achievements Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
        {achievements.map((achievement, index) => (
          <Card
            className='bg-neutral-900 border-neutral-700 hover:border-red-500 transition-colors duration-300'
            key={index}
          >
            <CardHeader className='pb-4'>
              <div className='flex items-center gap-4'>
                {achievement.icon}
                <h3 className='text-2xl text-white font-semibold'>
                  {t(achievement.titleKey)}
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-red-400 font-mono text-lg mb-3'>
                {t(achievement.descriptionKey)}
              </p>
              <p className='text-neutral-300 text-base'>
                {t(achievement.detailsKey)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Certifications & Skills */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {/* Certifications */}
        <div className='bg-neutral-900 rounded-lg p-8 border border-neutral-700'>
          <h2 className='text-3xl font-special text-red-600 mb-6 flex items-center gap-3'>
            <Award className='text-red-500' />
            {t("criminalRecord.certifications.title")}
          </h2>
          <div className='space-y-4'>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className='flex justify-between items-center p-4 bg-neutral-800 rounded-lg'
              >
                <div>
                  <h4 className='text-white font-semibold'>
                    {t(cert.nameKey)}
                  </h4>
                  <p className='text-neutral-400 text-sm'>{cert.year}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-mono ${
                    cert.statusKey === "criminalRecord.certifications.certified"
                      ? "bg-green-900 text-green-300"
                      : "bg-yellow-900 text-yellow-300"
                  }`}
                >
                  {t(cert.statusKey)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Info */}
        <div className='bg-neutral-900 rounded-lg p-8 border border-neutral-700'>
          <h2 className='text-3xl font-special text-red-600 mb-6 flex items-center gap-3'>
            <MapPin className='text-red-500' />
            {t("criminalRecord.subjectDetails.title")}
          </h2>
          <div className='space-y-4'>
            <div className='flex items-center gap-3 p-4 bg-neutral-800 rounded-lg'>
              <Calendar className='text-red-500' />
              <div>
                <h4 className='text-white font-semibold'>
                  {t("criminalRecord.subjectDetails.activeSince")}
                </h4>
                <p className='text-neutral-300'>
                  {t("criminalRecord.subjectDetails.activePeriod")}
                </p>
              </div>
            </div>
            <div className='flex items-center gap-3 p-4 bg-neutral-800 rounded-lg'>
              <Code2 className='text-red-500' />
              <div>
                <h4 className='text-white font-semibold'>
                  {t("criminalRecord.subjectDetails.primaryLanguages")}
                </h4>
                <p className='text-neutral-300'>
                  {t("criminalRecord.subjectDetails.languages")}
                </p>
              </div>
            </div>
            <div className='flex items-center gap-3 p-4 bg-neutral-800 rounded-lg'>
              <Shield className='text-red-500' />
              <div>
                <h4 className='text-white font-semibold'>
                  {t("criminalRecord.subjectDetails.specialization")}
                </h4>
                <p className='text-neutral-300'>
                  {t("criminalRecord.subjectDetails.specializationValue")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-10'>
        <p className='font-montserrat text-neutral-400 text-base italic'>
          {t("criminalRecord.quote")}
        </p>
      </div>
    </div>
  );
};

export default CriminalRecordSection;
