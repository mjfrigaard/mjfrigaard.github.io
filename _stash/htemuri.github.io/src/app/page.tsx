"use client";

import { CodeBlock } from "@/components/animate-ui/primitives/animate/code-block";
import { Slide } from "@/components/animate-ui/primitives/effects/slide";
import { useState } from "react";

export default function Home() {
  const [showWhoami, setShowWhoami] = useState(false);

  const introductionCode = `[1m[1;32m$[0m whoami[0m
`;

  const whoami = `Hey! I'm [1;36mHarris[0m.[0m

I’m a software engineer based in Gainesville, Georgia. I spent the last few years as a "wearer of many hats" in platform engineering - moving between linux sysadmin, Azure administration, and building internal applications/automations. Having hands-on experience with every layer of our stack naturally made me the go-to person for resolving critical breaks or unblocking complex technical hurdles.

Right now, I’m on a sabbatical to get back to the basics. Even though I’ve spent years in the cloud, I’ve always been curious about what’s happening under those layers of abstraction. I'm currently spending my time deep-diving into computer science fundamentals: computer architecture, distributed systems, operating systems, and networking (all mostly through the lens of Go). A few years ago, I took a similar leave of absence (~3 months) to study Linux and networking in depth; it fundamentally changed how I worked when I returned, and I’m spending this stint building that same level of mastery for the next chapter of my career.

When I’m not in a terminal, I’m a bit of a serial hobbyist 😋. I love to lift, but at the moment I also dabble in woodworking, drumming, reading fantasy, sewing, and audiophile stuff (designed and built out my dad's home theater).
  
Thanks for visiting!

[38;5;214m  |\\__/,|[0m   [38;5;214m(\`\\[0m
[38;5;214m_.|[32mo[0m [32mo[0m  [38;5;214m|_[0m   [38;5;214m) )[0m
[38;5;239m---------------------[0m

`;

  return (
    <div className="flex flex-col ml-2 pt-3 gap-1">
      <CodeBlock
        code={introductionCode}
        lang="ansi"
        duration={1000}
        writing={true}
        onDone={() => {
          setTimeout(() => setShowWhoami(true), 200);
        }}
      />
      {showWhoami && (
        <Slide>
          <CodeBlock code={whoami} lang="ansi" />
        </Slide>
      )}
    </div>
  );
}
