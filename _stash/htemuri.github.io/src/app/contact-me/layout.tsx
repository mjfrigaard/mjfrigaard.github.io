import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me - Harris Temuri",
  description: "Contact page of Harris Temuri's portfolio website",
};

export default function ContactMeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
