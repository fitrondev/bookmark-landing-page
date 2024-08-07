import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Join = () => {
  return (
    <section className="bg-primary mt-10 text-white">
      <div className="container h-[300px] lg:h-[400px] flex flex-col items-center justify-center gap-5 lg:gap-8">
        <p className="text-sm font-medium uppercase tracking-wider text-center">
          35.000+ Already Joined
        </p>

        <h3 className="lg:max-w-[500px] text-2xl lg:text-4xl font-semibold text-center">
          Stay up-to-date with what we’re doing
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Input placeholder="Enter Your Email Address" className="w-[250px]" />
          <Button variant={"destructive"} className="py-4">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Join;
