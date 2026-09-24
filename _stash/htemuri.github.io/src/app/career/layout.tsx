import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career - Harris Temuri",
  description: "Career page of Harris Temuri's portfolio website",
};

export default function CareerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
