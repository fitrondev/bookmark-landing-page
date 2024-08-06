import Title from "@/components/Title";
import FeatureTabs from "./FeatureTabs";

const Features = () => {
  return (
    <section className="relative my-10">
      <div className="container flex flex-col items-center justify-center">
        <Title
          title="Features"
          desc="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
        />

        <FeatureTabs />
      </div>

      <div className="hidden lg:block absolute bottom-0 left-0 h-52 w-[500px] bg-primary rounded-tr-full rounded-br-full -z-10" />
    </section>
  );
};

export default Features;
