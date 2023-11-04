"use client";

import { MainLayout } from "./_components/layout/MainLayout";
import { Text } from "./_components/ui/Text";
import { useTimer } from "./hooks/useTimer";

export default function Home() {
  const { format } = useTimer();

  return (
    <MainLayout>
      <div className="flex h-[10vh] items-center justify-center">
        <Text textSize="scramble" varient="secondary">
          {`U2 F2 R' B2 R2 U R2 F2 D F2 L2 D B2 U F' L2 R' B F2 U' L'`}
        </Text>
      </div>
      <div className="flex h-[70vh] items-center justify-center ">
        <Text
          textSize="timer"
          className="font-robotoMono font-semibold tracking-wider"
          varient="secondary"
        >
          {format()}
        </Text>
      </div>
      <div className="h-[10vh"></div>
    </MainLayout>
  );
}
