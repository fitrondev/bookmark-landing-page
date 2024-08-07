import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Bookmark?</AccordionTrigger>
        <AccordionContent>
          Bookmark is a digital marketing agency that helps companies grow their
          online presence.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>How can I request a new browser?</AccordionTrigger>
        <AccordionContent>
          You can request a new browser by clicking on the "Request" button and
          filling out the form.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Is there a mobile app available?</AccordionTrigger>
        <AccordionContent>
          Yes. Our mobile app is available on both iOS and Android
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>What about other Chromium browsers?</AccordionTrigger>
        <AccordionContent>
          We are working on bringing more browsers to Bookmark. If you have a
          specific browser you'd like to see, please let us know.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqAccordion;
