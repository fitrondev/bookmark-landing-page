import HeroImg from "@/assets/illustration-hero.svg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative">
      <div className="container min-h-[calc(100vh-64px)] flex items-center justify-between">
        <div className="w-full lg:h-[500px] flex flex-col lg:flex-row gap-10 sm:gap-20">
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-8">
            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-normal gap-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-center lg:text-start">
                A Simple Bookmark Manager
              </h1>

              <p className="sm:max-w-[500px] sm:text-lg text-muted-foreground text-center lg:text-start">
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
            </div>

            <div className="space-x-4">
              <Button>Get it on Chrome</Button>

              <Button>Get it on Firefox</Button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <img src={HeroImg} alt="Hero" />
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute top-1/2 right-0 h-52 w-[500px] bg-primary rounded-tl-full rounded-bl-full -z-10" />
    </section>
  );
};

export default Hero;
