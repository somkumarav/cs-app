"use client";

import { useState, useEffect, useRef } from "react";
import { api } from "../../trpc/react";

type TProps = {
  refreshScramble: () => void;
  cube: string;
  // addSolve: (puzzle: string,) => void;
  // addSolve: (puzzle: string, scramble: string[], time: number) => Promise<void>;
  scramble: string[];
};

export const useTimer = ({ refreshScramble, cube, scramble }: TProps) =>
  // refreshScramble: () => void,
  // addSolve: (solve: Solve) => void,
  // cube: string,
  // scramble: string[],
  {
    const { mutate: createSolve } = api.solve.create.useMutation({});
    const [timer, setTimer] = useState<number>(0);
    const [myState, setMyState] = useState<number>(0);
    const [isFired, setIsFired] = useState<boolean>(false); // This state denotes is the timer running or not
    const [prevId, setPrevId] = useState<number>(0);
    const increment = useRef<NodeJS.Timeout | null>(null);

    // const addSolve = async (
    //   puzzle: string,
    //   scrambel: string[],
    //   time: number,
    // ) => {
    //   await createSolve({ puzzle, scramble, time });
    // };

    // const { mutate: addSolve } = api.solve.create;

    const startTimer = () => {
      const first = Date.now() - 10;
      let later;

      increment.current = setInterval(() => {
        later = Date.now();
        setTimer(later - first);
      }, 1);
    };
    const resetTimer = () => {
      if (increment.current) {
        clearInterval(increment.current);
      }
      setTimer(0);
      setMyState(0);
    };

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (isFired) {
          if (e.code === "Space" && myState === 1) {
            // STOP
            e.preventDefault();
            if (increment.current) {
              clearInterval(increment.current);
            }
            setMyState(2);
            refreshScramble();
            const id = new Date();
            setPrevId(id.getTime());
            // const newSolve = {
            //   id: id.getTime(),
            //   time: timer,
            //   scramble: scramble,
            //   cube: cube,
            //   date: `${id.getUTCDate()}-${id.getMonth()}-${id.getFullYear()}`,
            //   comment: "",
            // };
            createSolve({ puzzle: cube, scramble, time: timer });
            // addSolve(cube, scramble, timer).catch().then();
          }
          if (e.code === "Space" && myState === 2) {
            // RESET
            e.preventDefault();
            setIsFired(false);
            resetTimer();
          }
        }
      };
      const handleKeyUp = (e: KeyboardEvent) => {
        if (!isFired) {
          if (e.code === "Space" && myState === 0) {
            // START
            e.stopPropagation();
            setIsFired(true);
            setMyState(1);
            startTimer();
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }, [
      isFired,
      myState,
      // addSolve,
      createSolve,
      cube,
      refreshScramble,
      scramble,
      timer,
    ]);

    const format = () => {
      const diff = timer;
      const seconds = Number(((diff % 100000) % 60000) / 1000)
        .toFixed(2)
        .padStart(5, "0");
      const minutes = Math.floor(diff / 60000) % 60;
      const hours = Math.floor(diff / 3600000) % 60;
      // // 123410

      if (hours) {
        return `${hours}.${minutes}.${seconds}`;
      } else if (minutes) {
        return `${minutes}.${seconds}`;
      } else {
        return `${seconds}`;
      }
    };

    return { prevId, format };
  };
