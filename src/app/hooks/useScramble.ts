import { useState, useEffect } from "react";
import { scrambles2x2, scrambles3x3, scrambles4x4 } from "../../utils/cubes";

type GenerateNewScramble = ({ cube }: { cube: string }) => string[];
type CreateScramble = ({}: { limit: number; scrambles: string[] }) => string[];

const createScramble: CreateScramble = ({ limit, scrambles }) => {
  // Problems with scrambel
  // L L'

  let newScramble: string[] = [];
  let previous;
  for (let i = 0; i < limit; i++) {
    const random = Math.floor(Math.random() * scrambles.length);
    const current = scrambles[random];
    if (previous && previous === current) {
      newScramble.push(scrambles[random + 1] as string);
      previous = scrambles[random + 1];
    } else {
      previous = current;
      newScramble.push(current as string);
    }
  }
  // if (newScramble.length !== 0) return newScramble;
  // return [""];
  return newScramble;
};
const generateNewScramble: GenerateNewScramble = ({ cube }) => {
  if (cube === "2x2") {
    return createScramble({ limit: 9, scrambles: scrambles2x2 });
  }
  if (cube === "3x3" || cube === "3x3 blind" || cube === "3x3 onehand") {
    return createScramble({ limit: 20, scrambles: scrambles3x3 });
  }
  if (cube === "4x4" || cube === "4x4 blind") {
    return createScramble({ limit: 46, scrambles: scrambles4x4 });
  }
  if (cube === "5x5") {
    return createScramble({ limit: 60, scrambles: scrambles4x4 });
  }
  if (cube === "6x6") {
    return createScramble({ limit: 80, scrambles: scrambles4x4 });
  }
  if (cube === "7x7") {
    return createScramble({ limit: 100, scrambles: scrambles4x4 });
  }
  return [""];
};

export const useScramble = ({ cube }: { cube: string }) => {
  const [scramble, setScramble] = useState<string[]>([]);

  useEffect(() => {
    setScramble(generateNewScramble({ cube }));
  }, [cube]);

  const refreshScramble = () => {
    setScramble(generateNewScramble({ cube }));
  };

  return { scramble, refreshScramble };
};
