import { Code, Bug, Handshake, Database } from "lucide-react";
import ProfilePicture from "../ui/profile-picture";
import { useLanguage } from "@/contexts/LanguageContext";

const ProfileSection = () => {
  const { t } = useLanguage();

  return (
    <div className='w-full min-h-screen flex flex-col lg:flex-row gap-10 px-5 lg:px-20 py-20 items-center justify-center'>
      <div className='max-w-[400px]'>
        <ProfilePicture />
      </div>
      <div className='flex flex-col justify-center gap-4 max-w-4xl'>
        <h1 className='text-4xl font-special text-red-600 tracking-wide'>
          {t("profile.title")}
        </h1>
        <p
          className='text-neutral-300 font-mono text-lg text-justify'
          dangerouslySetInnerHTML={{ __html: t("profile.description") }}
        />
        <ul className='mt-4 space-y-3 text-neutral-300 text-base text-justify'>
          <li className='flex items-center gap-3'>
            <Code className='text-red-500' />
            <span
              dangerouslySetInnerHTML={{ __html: t("profile.skills.frontend") }}
            />
          </li>
          <li className='flex items-center gap-3'>
            <Database className='text-red-500' />
            <span
              dangerouslySetInnerHTML={{ __html: t("profile.skills.backend") }}
            />
          </li>
          <li className='flex items-center gap-3'>
            <Bug className='text-red-500' />
            <span
              dangerouslySetInnerHTML={{
                __html: t("profile.skills.debugging"),
              }}
            />
          </li>
          <li className='flex items-center gap-3'>
            <Handshake className='text-red-500' />
            <span
              dangerouslySetInnerHTML={{
                __html: t("profile.skills.collaboration"),
              }}
            />
          </li>
        </ul>
        <p
          className='mt-6 font-montserrat text-neutral-400 text-base text-justify'
          dangerouslySetInnerHTML={{ __html: t("profile.status") }}
        />
      </div>
    </div>
  );
};

export default ProfileSection;
