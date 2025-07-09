import ContactsView from "@/views/ContactsView";
import ExperienceView from "@/views/ExperienceView";
import Hero from "@/views/Hero";
import SkillsView from "@/views/SkillsView";
import VisitGitHubView from "@/views/VisitGitHubView";

const Home = () => {
  return (
    <main className="bg-gradient-to-br from-foreground/10 to-background font-geologica pb-4">
      <Hero />
      <div
        id="experience"
        className="border border-white/20 bg-gradient-to-bl from-background/5 to-background/5 bg-background/5 rounded-[72px] max-md:rounded-[48px] mb-16 max-md:mb-8"
      >
        <ExperienceView />
      </div>
      <div className="max-w-[1440px] px-16 max-md:px-8 mx-auto mb-32">
        <SkillsView />
      </div>
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-4 max-w-[1600px] mx-auto">
        <div className="col-span-2 max-md:col-span-1 border bg-gradient-to-br from-foreground/5 to-background rounded-[72px] max-md:rounded-[48px]">
          <VisitGitHubView />
        </div>
        <div className="max-xl:col-span-2 max-md:col-span-1">
          <ContactsView />
        </div>
      </div>
    </main>
  );
};

export default Home;
