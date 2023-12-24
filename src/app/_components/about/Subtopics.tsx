import { Text } from "../ui/Text";

type Tprops = {
  heading: string;
  children: React.ReactNode;
};

export const SubTopics = (props: Tprops) => {
  return (
    <div className="my-4">
      <Text className="mb-2">{props.heading}</Text>
      <Text varient="secondary">{props.children}</Text>
    </div>
  );
};
