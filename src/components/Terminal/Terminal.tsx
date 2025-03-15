"use client";
import { splitTextIntoBlocks } from "@/lib/utils";
import { useTerminalStore } from "@/store/terminal.store";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useCountUp } from "use-count-up";
import { AnimatedCircularProgressBar } from "../ui/animated-circular-progress-bar";

const helloOutput = [
  " ",
  "███╗   ███╗██╗  ██╗███████╗██████╗ ███████╗",
  "████╗ ████║╚██╗██╔╝██╔════╝██╔══██╗██╔════╝",
  "██╔████╔██║ ╚███╔╝ █████╗  ██████╔╝█████╗  ",
  "██║╚██╔╝██║ ██╔██╗ ██╔══╝  ██╔══██╗██╔══╝  ",
  "██║ ╚═╝ ██║██╔╝ ██╗███████╗██║  ██║██║     ",
  "╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ",
  " ",
  "Welcome to my Terminal!",
  'Type "help" to see available commands.',
  'Type "start" to start application...',
];

export const Terminal = () => {
  const [input, setInput] = useState("");
  const windowRef = useRef<HTMLInputElement>(null);
  const [prevOutputLength, setPrevOutputLength] = useState(0);
  const [output, setOutput] = useState<ReactNode[]>([]);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setOutput([...helloOutput]);
      setInputDisabled(false);
    }, 7500);
    return () => clearTimeout(timer);
  }, []);

  const { value } = useCountUp({
    isCounting: true,
    start: 0,
    end: 100,
    duration: 6.5,
    easing: "easeOutCubic",
  });

  useEffect(() => {
    setPrevOutputLength(output.length);
  }, [output]);

  const { commands, commandHistory, addCommandToHistory } = useTerminalStore();

  const handleCommand = (command: string) => {
    setInputDisabled(() => true);
    setOutput((prev) => [...prev, `~% ${command}`]);
    addCommandToHistory(command);
    switch (command) {
      case "help": // show available commands
        setOutput((prev) => [
          ...prev,
          "Available commands: start, help, joke, contact, clear, hello",
        ]);
        break;
      case "clear": // clear output
        setOutput([]);
        break;
      case "start": // start animation to main page
        setInputDisabled(() => true);
        setOutput((prev) => [...prev, "Starting..."]);
        setTimeout(() => {
          setOutput((prev) => [...prev, "Setting up environment..."]);
        }, 1000);
        setTimeout(() => {
          setOutput((prev) => [...prev, "Loading..."]);
        }, 2000);
        setTimeout(() => {
          setOutput((prev) => [...prev, "Ready!"]);
        }, 3000);
        setTimeout(() => {
          router.push("/app");
        }, 4000);
        break;
      case "hello": // clear output and show hello message
        setOutput((prev) => [...prev, ...helloOutput]);
        break;
      case "joke": // show random joke
        fetch("https://v2.jokeapi.dev/joke/Any?type=single")
          .then((response) => response.json())
          .then((data) => {
            const jokeBlocks = splitTextIntoBlocks(data.joke);
            setOutput((prev) => [...prev, ...jokeBlocks]);
          });
        break;
      case "contact":
        setOutput((prev) => [
          ...prev,
          "Email: me@mxerf.dev",
          "GitHub: https://github.com/mxerf",
          "Telegram: @mxerf_dev",
        ]);
        break;
      default:
        setOutput((prev) => [...prev, `Command not found: ${command}`]);
    }
    setInputDisabled(() => false);
  };

  const handleAutocomplete = () => {
    const matchingCommands = commands.filter((cmd) => cmd.startsWith(input));
    if (matchingCommands.length === 1) {
      setInput(matchingCommands[0]);
    }
  };

  useEffect(() => {
    Promise.resolve().then(() => {
      windowRef.current?.scrollTo(0, windowRef.current.scrollHeight * 2);
    });
  }, [output]);

  return (
    <div className="flex flex-col items-center justify-center bg-background text-primary p-4 rounded-xl w-full max-w-4xl mx-auto font-mono">
      {isLoading ? (
        <AnimatedCircularProgressBar
          value={Number(value)}
          gaugePrimaryColor="hsl(var(--foreground))"
          gaugeSecondaryColor="hsl(var(--background))"
          min={0}
          max={100}
        />
      ) : (
        <div className="flex flex-col items-center justify-center w-full animate-fade-in">
          <div
            ref={windowRef}
            className="w-full h-[480px] overflow-y-auto bg-primary-foreground font-semibold p-4 rounded-xl border-2 border-primary whitespace-pre"
          >
            {output.map((line, index) => (
              <motion.span
                key={index}
                className="block"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: (index - (prevOutputLength - 1)) * 0.1,
                }}
              >
                {line}
              </motion.span>
            ))}
          </div>
          <input
            disabled={inputDisabled}
            autoFocus
            type="text"
            className="mt-4 w-full bg-transparent text-primary font-semibold outline-none p-2"
            placeholder="Type a command..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && input) {
                handleCommand(input);
                setInput("");
              } else if (e.key === "Tab") {
                e.preventDefault();
                handleAutocomplete();
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                const command = commandHistory[commandHistory.length - 1];
                setInput(command);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};
