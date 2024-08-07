import Logo from "@/assets/logo-bookmark.svg";
import Facebook from "@/assets/icon-facebook.svg";
import Twitter from "@/assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-blue-950 py-10">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="max-w-max bg-white p-2 rounded-full">
            <img src={Logo} alt="" />
          </div>

          <div className="text-center lg:text-start">
            <span className="text-white font-medium tracking-wider">
              &copy; 2024 Bookmark Frontend Mentor. All rights reserved
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-5">
          <img src={Facebook} alt="" className="size-8" />
          <img src={Twitter} alt="" className="size-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
