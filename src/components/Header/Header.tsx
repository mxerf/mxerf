import GitHubIcon from "@/icons/GitHubIcon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 flex justify-between items-center px-4">
      <div className="flex items-center justify-end w-full">
        <GitHubIcon width={36} height={36} fill="white" />
      </div>
    </header>
  );
};

export default Header;
