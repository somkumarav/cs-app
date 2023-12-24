import { useState, useEffect } from "react";
import { scrambles2x2, scrambles3x3, scrambles4x4 } from "../../utils/cubes";

type GenerateNewScramble = ({ cube }: { cube: string }) => string[];
type CreateScramble = ({}: { limit: number; scrambles: string[] }) => string[];

const createScramble: CreateScramble = ({ limit, scrambles }) => {
  // Problems with scrambel
  // L L'
  const newScramble = [];

  // Generate a sufficiently large initial scramble to ensure variety
  const initialScramble = scrambles.slice(0, limit * 2);
  initialScramble.sort(() => 0.5 - Math.random()); // Shuffle randomly

  // Use a sliding window to create the final scramble efficiently
  for (let i = 0; i < limit; i++) {
    newScramble.push(initialScramble[i]);
  }

  return newScramble as string[];
};

const generateNewScramble: GenerateNewScramble = ({ cube }) => {
  if (cube === "2x2") {
    return createScramble({ limit: 9, scrambles: scrambles2x2 });
  }
  if (cube === "3x3" || cube === "3x3 blind" || cube === "3x3 oneHand") {
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
