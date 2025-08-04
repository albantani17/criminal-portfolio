import ProfileSection from "./components/sections/profile-section";
import Navbar from "./components/sections/navbar";
import CaseFilesSection from "./components/sections/case-file-section";
import CriminalRecordSection from "./components/sections/criminal-record-section";
import TipLineSection from "./components/sections/tip-line-section";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className='w-full relative z-10 min-h-screen bg-neutral-800 text-white font-montserrat'>
        <div className='sticky top-0 px-5 lg:px-20 z-50'>
          <Navbar />
        </div>
        <section id='profile' className='w-full min-h-screen bg-neutral-800'>
          <ProfileSection />
        </section>
        <section id='case-files' className='w-full min-h-screen'>
          <CaseFilesSection />
        </section>
        <section id='criminal-record' className='w-full min-h-screen'>
          <CriminalRecordSection />
        </section>
        <section id='tip-line' className='w-full min-h-screen'>
          <TipLineSection />
        </section>
      </div>
    </LanguageProvider>
  );
}

export default App;
