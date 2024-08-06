type TitleProps = {
  title: string;
  desc?: string;
};

const Title = ({ title, desc }: TitleProps) => {
  return (
    <div className="lg:max-w-[490px] lg:mx-auto text-center space-y-5">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
};

export default Title;
