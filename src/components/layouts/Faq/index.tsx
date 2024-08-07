import Title from "@/components/Title";
import FaqAccordion from "./FaqAccordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Faq = () => {
  return (
    <section className="my-10">
      <div className="container">
        <Title
          title="Frequently Asked Questions"
          desc="Here are some of our FAQs. If you have any other questions you&#39;d like answered please feel free to email us."
        />
        <Separator className="mt-10 lg:w-[550px] lg:mx-auto" />
        <div className="lg:w-[550px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
          <FaqAccordion />
        </div>

        <div className="max-w-max mx-auto mt-10">
          <Button>More Info</Button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
