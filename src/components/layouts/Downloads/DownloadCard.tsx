import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type DownloadCardProps = {
  name: string;
  logo: string;
  version: string;
};

const DownloadCard = ({ name, logo, version }: DownloadCardProps) => {
  return (
    <Card>
      <CardHeader className="items-center justify-center">
        <img src={logo} alt={name} className="size-20" />
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="text-lg font-semibold">Add to {name}</h3>
        <p className="text-sm text-muted-foreground">
          Minimum version {version}
        </p>
      </CardContent>
      <div className="border-b-4 border-dotted mb-5" />
      <CardFooter>
        <Button>Add & Install Extension</Button>
      </CardFooter>
    </Card>
  );
};

export default DownloadCard;
