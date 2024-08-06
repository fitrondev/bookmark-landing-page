import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent className="flex items-center justify-center">
        <SheetHeader className="hidden">
          {/* For fix the error */}
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <nav className="w-full">
          <ul className="text-lg uppercase tracking-wider flex flex-col items-center gap-8">
            <li className="hover:text-primary transition-colors duration-500 ease-in-out cursor-pointer">
              Feature
            </li>

            <Separator />

            <li className="hover:text-primary transition-colors duration-500 ease-in-out cursor-pointer">
              Pricing
            </li>

            <Separator />

            <li className="hover:text-primary transition-colors duration-500 ease-in-out cursor-pointer">
              Contact
            </li>

            <Separator />

            <li className="hover:text-primary transition-colors duration-500 ease-in-out cursor-pointer">
              Login
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
