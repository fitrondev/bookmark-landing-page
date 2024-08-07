import Title from "@/components/Title";
import { BROWSERS } from "@/constants";
import DownloadCard from "./DownloadCard";

const Downloads = () => {
  return (
    <section className="my-10">
      <div className="container">
        <Title
          title="Downloads the extension"
          desc="We&#39;ve got more browsers in the pipeline. Please do let us know if you&#39;ve got a favourite you&#39;d like us to prioritize."
        />

        {/* Misalkan ukuran divnya 500px terus div children 1 diatas kiri kedua ditengah ketiga di bawah kanan giaman stylenya? */}
        <div className="max-w-max mx-auto lg:h-[500px] mt-10 flex flex-col lg:flex-row items-center justify-center gap-5">
          {BROWSERS.map((item) => (
            <DownloadCard
              key={item.id}
              name={item.name}
              logo={item.logo}
              version={item.version}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;
