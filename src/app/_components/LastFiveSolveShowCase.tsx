import { api } from "../../trpc/react";
import { Text } from "./ui/Text";
import Moment from "moment";

export const LastFiveSolveShowCase = () => {
  const { data: last5Solves, isLoading } = api.solve.getLast5Solves.useQuery();
  return (
    <div className=" flex h-[35px] w-[80%] items-center justify-around rounded-md bg-skin-secondaryBg">
      {last5Solves?.map((solve) => {
        const duration = Moment.duration(solve.time);
        return (
          <Text key={solve.id} textSize="paragraph" varient="default">
            {duration.asMilliseconds() < 1000
              ? duration.asMilliseconds() + " ms"
              : duration.asSeconds() < 60
              ? duration.asSeconds().toFixed(2) + " s"
              : Math.floor(duration.asMinutes()) +
                "." +
                Math.floor(duration.asSeconds() % 60)}
          </Text>
        );
      })}
    </div>
  );
};

// login
// menu
// pay
// card
// debitcard
// show more
// cutomize
// domestic
// online and contactless services
// update

// 2E3B84C9
// 2E3B84C9
