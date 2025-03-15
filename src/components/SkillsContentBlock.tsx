import { skillContentsMap, skillIconsMap } from "@/lib/consts";
import { SkillCategoryType, SkillItemType } from "@/types/skills";
import { cn } from "@/utils";
import { GradientCard } from "./GradientCard";

type Props = {
  category: SkillCategoryType;
  items: SkillItemType[];
};

const allowedColSpans = [
  "col-span-1",
  "col-span-2",
  "col-span-3",
  "col-span-4",
];

const SkillsContentBlock = ({ category, items }: Props) => {
  return (
    <section className="mb-16">
      <div className="mb-4">
        <h3 className="text-3xl font-medium">
          {skillContentsMap[category].title}
        </h3>
        <p className="text-muted-foreground">
          {skillContentsMap[category].description}
        </p>
      </div>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-xl:grid-cols-2 gap-4">
        {items.map((item) => {
          const className = allowedColSpans.includes(
            `col-span-${item.cols || 1}`
          )
            ? `col-span-${item.cols || 1}`
            : "col-span-1";
          return (
            <GradientCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon && skillIconsMap[item.icon]}
              containerClassName={cn(className, "max-xl:col-span-1")}
              descriptionClassName="max-md:hidden"
              colors={item.colors}
              exp={item.exp}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SkillsContentBlock;
