"use client";

import { MainLayout } from "./_components/layout/MainLayout";
import { Text } from "./_components/ui/Text";
import { useScramble } from "./hooks/useScramble";
import { useTimer } from "./hooks/useTimer";

export default function Home() {
  const { format } = useTimer();
  const { scramble, refreshScramble } = useScramble({
    cube: "3x3",
  });

  console.log(scramble);

  return (
    <MainLayout>
      <div className="flex h-[20vh] justify-center pt-5">
        <Text
          textSize="scramble"
          className="tracking-wider"
          varient="secondary"
        >
          {scramble}
        </Text>
      </div>
      <div className="flex h-[60vh] items-center justify-center ">
        <Text textSize="timer" varient="secondary">
          {format()}
        </Text>
      </div>
      <div className="h-[10vh"></div>
    </MainLayout>
  );
}
