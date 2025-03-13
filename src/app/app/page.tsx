import ContactsView from "@/views/ContactsView";
import ExperienceView from "@/views/ExperienceView";
import Hero from "@/views/Hero";
import SkillsView from "@/views/SkillsView";

const Home = () => {
  return (
    <main className="bg-gradient-to-br from-foreground/10 to-background font-geologica pb-16">
      <Hero />
      <div
        id="experience"
        className="border border-chart-2/20 bg-gradient-to-bl from-foreground/5 to-chart-2/5 rounded-[72px] mb-8"
      >
        <ExperienceView />
      </div>
      <div className="max-w-[1440px] px-16 mx-auto mb-32">
        <SkillsView />
      </div>
      <div className="border border-chart-1/20 bg-gradient-to-bl from-chart-1/5 to-chart-3/5 rounded-[72px]">
        <ContactsView />
      </div>
    </main>
  );
};

export default Home;
