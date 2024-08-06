import Feature1 from "@/assets/illustration-features-tab-1.svg";
import Feature2 from "@/assets/illustration-features-tab-2.svg";
import Feature3 from "@/assets/illustration-features-tab-3.svg";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeatureTabs = () => {
  return (
    <Tabs defaultValue="simple" className="w-full flex flex-col mt-5">
      <TabsList className="lg:space-x-10">
        <TabsTrigger value="simple">Simple Bookmark</TabsTrigger>
        <TabsTrigger value="speedy">Speedy Searching</TabsTrigger>
        <TabsTrigger value="easy">Easy Sharing</TabsTrigger>
      </TabsList>

      <TabsContent value="simple">
        <div className="w-full lg:h-[450px] flex flex-col lg:flex-row gap-5 lg:gap-20 my-4 lg:my-10">
          <div className="flex-1 flex items-center justify-center">
            <img
              src={Feature1}
              alt=""
              loading="lazy"
              className="w-full h-[250px] sm:size-max"
            />
          </div>

          <div className="flex-1 flex justify-center">
            <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-5">
              <div className="flex flex-col items-center lg:items-start justify-center lg:justify-normal gap-5">
                <h4 className="lg:text-3xl font-medium text-center lg:text-start">
                  Bookmark in one click
                </h4>

                <p className="sm:max-w-[500px] text-sm sm:text-lg text-muted-foreground text-center lg:text-start">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
              </div>

              <div>
                <Button>More Info</Button>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="speedy">
        <div className="w-full lg:h-[450px] flex flex-col lg:flex-row gap-5 lg:gap-20 my-4 lg:my-10">
          <div className="flex-1 flex items-center justify-center">
            <img
              src={Feature2}
              alt=""
              loading="lazy"
              className="w-full h-[250px] sm:size-max"
            />
          </div>

          <div className="flex-1 flex justify-center">
            <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-5">
              <div className="flex flex-col items-center lg:items-start justify-center lg:justify-normal gap-5">
                <h4 className="lg:text-3xl font-medium text-center lg:text-start">
                  Search your bookmarks
                </h4>

                <p className="sm:max-w-[500px] text-sm sm:text-lg text-muted-foreground text-center lg:text-start">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
              </div>

              <div>
                <Button>More Info</Button>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="easy">
        <div className="w-full lg:h-[450px] flex flex-col lg:flex-row gap-5 lg:gap-20 my-4 lg:my-10">
          <div className="flex-1 flex items-center justify-center">
            <img
              src={Feature3}
              alt=""
              loading="lazy"
              className="w-[full h-[250px] sm:size-max"
            />
          </div>

          <div className="flex-1 flex justify-center">
            <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-5">
              <div className="flex flex-col items-center lg:items-start justify-center lg:justify-normal gap-5">
                <h4 className="lg:text-3xl font-medium text-center lg:text-start">
                  Share your bookmarks
                </h4>

                <p className="sm:max-w-[500px] text-sm sm:text-lg text-muted-foreground text-center lg:text-start">
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button.
                </p>
              </div>

              <div>
                <Button>More Info</Button>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default FeatureTabs;
