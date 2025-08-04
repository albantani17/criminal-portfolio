import {
  Phone,
  Mail,
  MessageSquare,
  Github,
  Linkedin,
  Globe,
  Send,
  MapPin,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const TipLineSection = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: <Mail className='text-red-500' />,
      titleKey: "tipLine.contactMethods.email.title",
      contact: "albanhaerul17@gmail.com",
      descriptionKey: "tipLine.contactMethods.email.description",
      action:
        "https://mail.google.com/mail/?view=cm&fs=1&to=albanhaerul17%40gmail.com",
    },
    {
      icon: <Phone className='text-red-500' />,
      titleKey: "tipLine.contactMethods.phone.title",
      contact: "+62 882-1450-9840",
      descriptionKey: "tipLine.contactMethods.phone.description",
      action: "https://wa.me/6288214509840",
    },
    {
      icon: <MessageSquare className='text-red-500' />,
      titleKey: "tipLine.contactMethods.instagram.title",
      contactKey: "tipLine.contactMethods.instagram.contact",
      descriptionKey: "tipLine.contactMethods.instagram.description",
      action: "https://www.instagram.com/anginnzzzz/",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className='text-red-500' />,
      platformKey: "tipLine.socialLinks.github.platform",
      handleKey: "tipLine.socialLinks.github.handle",
      descriptionKey: "tipLine.socialLinks.github.description",
      url: "https://github.com/albantani17",
    },
    {
      icon: <Linkedin className='text-red-500' />,
      platformKey: "tipLine.socialLinks.linkedin.platform",
      handleKey: "tipLine.socialLinks.linkedin.handle",
      descriptionKey: "tipLine.socialLinks.linkedin.description",
      url: "https://www.linkedin.com/in/haerul-ramadana-albantani-a86220356/",
    },
    {
      icon: <Globe className='text-red-500' />,
      platformKey: "tipLine.socialLinks.portfolio.platform",
      handleKey: "tipLine.socialLinks.portfolio.handle",
      descriptionKey: "tipLine.socialLinks.portfolio.description",
      url: "#",
    },
  ];

  const reportTypes = [
    {
      titleKey: "tipLine.reportTypes.bugReports.title",
      descriptionKey: "tipLine.reportTypes.bugReports.description",
      icon: "🐛",
    },
    {
      titleKey: "tipLine.reportTypes.featureRequests.title",
      descriptionKey: "tipLine.reportTypes.featureRequests.description",
      icon: "💡",
    },
    {
      titleKey: "tipLine.reportTypes.collaboration.title",
      descriptionKey: "tipLine.reportTypes.collaboration.description",
      icon: "🤝",
    },
    {
      titleKey: "tipLine.reportTypes.mentorship.title",
      descriptionKey: "tipLine.reportTypes.mentorship.description",
      icon: "🎓",
    },
  ];

  return (
    <div className='w-full min-h-screen bg-neutral-800 px-5 lg:px-20 py-20 flex flex-col gap-10'>
      <div className='text-center mb-10'>
        <h1 className='text-4xl lg:text-5xl font-special text-red-600 mb-4'>
          {t("tipLine.title")}
        </h1>
        <p className='text-neutral-300 font-mono text-lg max-w-3xl mx-auto'>
          {t("tipLine.subtitle")}
        </p>
      </div>

      {/* Contact Methods */}
      <div className='mb-12'>
        <h2 className='text-3xl font-special text-red-600 mb-8 text-center'>
          {t("tipLine.contactMethods.title")}
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {contactMethods.map((method, index) => (
            <Card
              className='bg-neutral-900 border-neutral-700 hover:border-red-500 transition-all duration-300 hover:scale-105'
              key={index}
            >
              <CardHeader className='text-center pb-4'>
                <div className='flex justify-center mb-4'>{method.icon}</div>
                <h3 className='text-2xl text-white font-semibold'>
                  {t(method.titleKey)}
                </h3>
              </CardHeader>
              <CardContent className='text-center'>
                <p className='text-red-400 font-mono text-lg mb-3'>
                  {method.contactKey ? t(method.contactKey) : method.contact}
                </p>
                <p className='text-neutral-300 text-sm mb-4'>
                  {t(method.descriptionKey)}
                </p>
                <a
                  href={method.action}
                  target='_blank'
                  className='inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300'
                >
                  <Send size={16} />
                  {t("tipLine.contactButton")}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className='mb-12'>
        <h2 className='text-3xl font-special text-red-600 mb-8 text-center'>
          {t("tipLine.socialLinks.title")}
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {socialLinks.map((social, index) => (
            <Card
              className='bg-neutral-900 border-neutral-700 hover:border-red-500 transition-all duration-300'
              key={index}
            >
              <CardHeader>
                <div className='flex items-center gap-4'>
                  {social.icon}
                  <div>
                    <h3 className='text-xl text-white font-semibold'>
                      {t(social.platformKey)}
                    </h3>
                    <p className='text-red-400 font-mono'>
                      {t(social.handleKey)}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-neutral-300 text-sm mb-4'>
                  {t(social.descriptionKey)}
                </p>
                <a
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-red-400 hover:text-red-300 transition-colors duration-300 font-mono text-sm'
                >
                  {t("tipLine.visitProfile")}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Report Types */}
      <div className='mb-12'>
        <h2 className='text-3xl font-special text-red-600 mb-8 text-center'>
          {t("tipLine.reportTypes.title")}
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {reportTypes.map((report, index) => (
            <div
              key={index}
              className='bg-neutral-900 border border-neutral-700 rounded-lg p-6 hover:border-red-500 transition-colors duration-300'
            >
              <div className='flex items-start gap-4'>
                <span className='text-3xl'>{report.icon}</span>
                <div>
                  <h3 className='text-xl text-white font-semibold mb-2'>
                    {t(report.titleKey)}
                  </h3>
                  <p className='text-neutral-300 text-sm'>
                    {t(report.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location & Availability */}
      <div className='bg-neutral-900 rounded-lg p-8 border border-neutral-700'>
        <h2 className='text-3xl font-special text-red-600 mb-6 text-center flex items-center justify-center gap-3'>
          <MapPin className='text-red-500' />
          {t("tipLine.currentStatus.title")}
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='text-center'>
            <h3 className='text-xl text-white font-semibold mb-4'>
              {t("tipLine.currentStatus.location")}
            </h3>
            <p className='text-neutral-300 font-mono'>
              {t("tipLine.currentStatus.locationValue")}
            </p>
            <p className='text-neutral-400 text-sm mt-2'>
              {t("tipLine.currentStatus.locationNote")}
            </p>
          </div>
          <div className='text-center'>
            <h3 className='text-xl text-white font-semibold mb-4'>
              {t("tipLine.currentStatus.availability")}
            </h3>
            <p className='text-green-400 font-mono'>
              {t("tipLine.currentStatus.availabilityValue")}
            </p>
            <p className='text-neutral-400 text-sm mt-2'>
              {t("tipLine.currentStatus.availabilityNote")}
            </p>
          </div>
        </div>
      </div>

      <div className='text-center mt-10'>
        <p className='font-montserrat text-neutral-400 text-base italic'>
          {t("tipLine.finalQuote")}
        </p>
      </div>
    </div>
  );
};

export default TipLineSection;
