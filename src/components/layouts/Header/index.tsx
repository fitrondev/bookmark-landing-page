import Logo from "@/assets/logo-bookmark.svg";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header>
      <div className="container h-16 flex items-center justify-between">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <nav className="hidden lg:flex items-center justify-center gap-10">
          <ul className="text-lg uppercase tracking-wider flex items-center gap-8">
            <li className="hover:text-primary transition-colors duration-500 ease-in-out cursor-pointer">
              Feature
            </li>
            <li className="hover:text-primary transition-colors duration-500 ease-in-out cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-primary transition-colors duration-500 ease-in-out cursor-pointer">
              Contact
            </li>
          </ul>

          <Button className="uppercase">Login</Button>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
