import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Harris Temuri",
  description: "Projects page of Harris Temuri's portfolio website",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
