import { ChevronRightIcon, LinkedinIcon, MountainSnowIcon } from "lucide-react";
import { CodeBlock } from "./animate-ui/primitives/animate/code-block";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Link from "next/link";
import GithubIcon from "@/components/github-icon";
import { cn } from "@/lib/utils";

export default function NavBar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "hover:border-orange-300 border-gray-500 flex border items-center px-1 md:px-4 bg-[#0d1017]",
        className,
      )}
      {...props}
    >
      <div className="flex gap-1 items-center overflow-hidden">
        <ChevronRightIcon width={20} className="shrink-0" />
        <CodeBlock
          code={"[1;32mHarris Temuri[0m - Platform Engineer\0"}
          lang="ansi"
          className="mt-0.5"
          writing={false}
        />
      </div>
      <div className="grow" />
      <div className="flex gap-6 pr-3 items-center">
        <HoverCard openDelay={10} closeDelay={100}>
          <HoverCardTrigger asChild>
            <button>
              <Link
                href={"https://htemuri.github.io/0xBADC0DE/"}
                target="_blank"
              >
                <MountainSnowIcon width={20} />
              </Link>
            </button>
          </HoverCardTrigger>
          <HoverCardContent className="flex w-96 flex-col gap-0.5">
            {/* <Link href={"https://htemuri.github.io/0xBADC0DE/"} target="_blank" className="font-semibold text-cyan-600 dark:text-cyan-300"><code>0xBADC0DE</code></Link> */}
            <div>Blog where I document the things I've learned.</div>
            <div className="text-muted-foreground mt-2 text-xs">
              {/* <iframe src="https://htemuri.github.io/0xBADC0DE/"  width="350px" height="400px" ></iframe> */}
            </div>
          </HoverCardContent>
        </HoverCard>
        <Link href={"https://linkedin.com/in/harris-temuri"} target="_blank">
          <LinkedinIcon width={20} className="" />
        </Link>
        <Link href={"https://github.com/htemuri"} target="_blank">
          <GithubIcon className="p-0 m-0 w-5" />
        </Link>
      </div>
    </div>
  );
}
