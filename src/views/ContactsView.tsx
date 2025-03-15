import { GradientCard } from "@/components/GradientCard";
import { BiPhone } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactsView = () => {
  return (
    <div className="max-w-[1440px] p-16 max-md:py-8 max-md:px-4 mx-auto">
      <section className="section-heading mt-0 text-center">
        <h2 className="section-title">Get in touch</h2>
        <p className="section-description">
          Please, feel free to contact me via any of the following methods.
        </p>
      </section>
      <section className="w-full flex flex-col items-center gap-4 font-kanit font-medium">
        <GradientCard
          as={"a"}
          href={"https://t.me/mxerf_dev"}
          target="_blank"
          title={"telegram"}
          description="@mxerf_dev"
          icon={<BsTelegram size={24} />}
          colors={["#FFFFFF", "#01A2FF", "#FFFFFF", "#01A2FF"]}
          containerClassName="bg-chart-2/15 w-full"
        />
        <GradientCard
          as={"a"}
          href={"mailto:maksrfx@vk.com"}
          title={"email"}
          description="maksrfx@vk.com"
          icon={<MdEmail size={24} />}
          colors={["#FFFFFF", "#FFAD0D", "#FFFFFF", "#FFAD0D"]}
          containerClassName="bg-chart-4/15 w-full"
        />
        <GradientCard
          as={"a"}
          href={"tel:+79841709374"}
          title={"phone"}
          description="+7 (984) 170-93-74"
          icon={<BiPhone size={24} />}
          colors={["#FFFFFF", "#db3636", "#FFFFFF", "#db3636"]}
          containerClassName="bg-chart-3/15 w-full"
        />
      </section>
    </div>
  );
};

export default ContactsView;
