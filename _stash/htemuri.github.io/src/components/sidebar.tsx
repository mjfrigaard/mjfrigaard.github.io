"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

type SidebarRoute = {
  displayName: string;
  route: string;
};

export default function SideBar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const currentRoute = usePathname();
  const router = useRouter();

  const routes: SidebarRoute[] = [
    { displayName: "Home", route: "/" },
    { displayName: "Career", route: "/career" },
    { displayName: "Projects", route: "/projects" },
    { displayName: "Contact Me", route: "/contact-me" },
  ];
  return (
    <div
      className={cn(
        `flex md:flex-col max-md:justify-center items-center gap-1.5 xs:gap-5 px-4 md:py-4 border hover:border-rose-300 border-gray-500 bg-[#0d1017]`,
        className,
      )}
      {...props}
    >
      {routes.map((route) => {
        return (
          <Button
            key={route.displayName}
            className="text-wrap cursor-pointer md:w-full disabled:text-gray-400"
            variant={"outline"}
            disabled={currentRoute === route.route}
            onClick={() => router.push(route.route)}
          >
            {route.displayName}
          </Button>
        );
      })}
    </div>
  );
}
