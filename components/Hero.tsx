import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

const skills = [
  "Requirements Gathering",
  "BPMN / UML",
  "Agile / Scrum",
  "SQL",
  "JIRA",
  "Stakeholder Mgmt",
];

export default function Hero() {
  return (
    <section className="w-full h-full px-6 py-20">
      <div className="w-full max-w-5xl mx-auto space-y-20">
        {/* Top — avatar + name */}
        <div className="flex items-center gap-4">
          <Avatar className="size-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CJ</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-base font-semibold text-neutral-900">
              Claudine Juan
            </h1>
            <p className="text-neutral-400 text-sm">Systems Analyst</p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-2.5 rounded-full bg-green-500"></span>
              </span>
              <span className="text-sm text-neutral-400">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Body — headline + description */}
        <div className="space-y-3">
          <h1 className="font-medium font-serif text-5xl text-neutral-900">
            Hi, I&#39;m Claudine
          </h1>
          <h3 className="font-medium font-serif text-2xl text-neutral-900">
            Systems Analyst
          </h3>

          <hr className="border-neutral-100" />

          <p className="text-neutral-500 text-base leading-[1.85] max-w-xl">
            A Systems Analyst specializing in bridging business needs and
            technical solutions through clear analysis, structured thinking, and
            a deep understanding of how systems — and the people within them —
            actually work. Based in Manila, open to local and remote
            opportunities.
          </p>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="p-3">
                {skill}
              </Badge>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4 pt-2">
            <Button asChild>
              <Link href="#projects">View my work</Link>
            </Button>

            <Button variant="link" className="gap-2">
              Download CV
              <ArrowDown size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
