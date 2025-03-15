import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import avatar from "../../public/avatar.jpg";

const ProfileGitHub = () => {
  return (
    <div className="flex flex-col items-center gap-2 px-4">
      <Image
        src={avatar}
        alt="avatar"
        className="size-[180px] max-md:size-28 max-lg:size-32 object-cover rounded-full"
      />
      <span className="text-muted-foreground font-medium">@mxerf</span>
      <a
        href="https://github.com/mxerf"
        target="_blank"
        className=" py-1 px-3 rounded-xl bg-chart-2/5 border border-chart-2/20 flex items-center justify-center gap-2 hover:bg-chart-2/15 transition-colors"
      >
        Visit <BsGithub />
      </a>
    </div>
  );
};

export default ProfileGitHub;
