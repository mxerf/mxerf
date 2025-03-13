import { GradientCard } from "@/components/GradientCard";
import { BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactsView = () => {
  return (
    <div className="max-w-[1440px] p-16 max-md:py-8 max-md:px-4 mx-auto">
      <section className="section-heading mt-0">
        <h2 className="section-title">Get in touch</h2>
        <p className="section-description">
          Please, feel free to contact me via any of the following methods.
        </p>
      </section>
      <section className="flex font-kanit font-medium">
        <div className="w-1/4 max-md:w-full flex flex-col gap-4">
          <GradientCard
            as={"a"}
            href={"https://t.me/mxerf_dev"}
            title={"telegram"}
            description="@mxerf_dev"
            icon={<BsTelegram size={24} />}
            colors={["#FFFFFF", "#01A2FF", "#FFFFFF", "#01A2FF"]}
          />
          <GradientCard
            as={"a"}
            href={"mailto:maksrfx@vk.com"}
            title={"email"}
            description="maksrfx@vk.com"
            icon={<MdEmail size={24} />}
            colors={["#FFFFFF", "#FFAD0D", "#FFFFFF", "#FFAD0D"]}
          />
          <GradientCard
            as={"a"}
            href={"https://t.me/mxerf_dev"}
            title={"telegram"}
            description="@mxerf_dev"
            icon={<BsTelegram size={24} />}
            colors={["#FFFFFF", "#db3636", "#FFFFFF", "#db3636"]}
          />
        </div>
      </section>
    </div>
  );
};

export default ContactsView;
