import SkillsContentBlock from "@/components/SkillsContentBlock";
import { SkillCategoryType, SkillItemType } from "@/types/skills";

const fetchSkills = async (): Promise<
  Record<SkillCategoryType, SkillItemType[]>
> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL ?? `https://${process.env.VERCEL_URL}`}/api/skills`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Ошибка загрузки данных");
  }

  return res.json();
};

const Skills = async () => {
  const skills = await fetchSkills();

  return (
    <div className="">
      <section className="section-heading">
        <h2 className="section-title">Skills and competencies</h2>
        <p className="section-description">
          Here are some of the technologies I use.
        </p>
      </section>
      <section>
        {Object.entries(skills).map(
          ([category, skills]) =>
            skills.length > 0 && (
              <SkillsContentBlock
                key={category}
                category={category as SkillCategoryType}
                items={skills}
              />
            )
        )}
      </section>
    </div>
  );
};

export default Skills;
