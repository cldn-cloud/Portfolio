import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const skills = ["SQL", "Visio", "JIRA", "Agile", "UML", "BPMN"];

const stats = [
  { num: "3+", label: "Years Exp." },
  { num: "20+", label: "Projects" },
  { num: "8+", label: "Tools" },
  { num: "3+", label: "Industries" },
];

export default function Hero() {
  return (
    <section className="w-full h-full flex items-center px-6 py-20 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12 items-center">
        {/* Left — Copy */}
        <div>
          <Badge className="uppercase font-bold" variant="outline">
            Systems Analyst <span className="mx-1">•</span> Manila, Philippines
          </Badge>

          <h1 className="font-serif text-5xl md:text-6xl font-bold text-neutral-950 leading-[1.08] mb-4">
            Claudine
            <br />
            <em className="font-serif font-normal text-neutral-500">Juan</em>
          </h1>

          <p className="text-neutral-500 text-base leading-[1.8] max-w-md mb-8">
            Bridging business needs and technical solutions through clear
            analysis, structured thinking, and a deep understanding of how
            systems — and the people within them — actually work.
          </p>

          <div className="flex gap-2.5 flex-wrap">
            <Button className="bg-neutral-900 hover:bg-neutral-700 text-white rounded-md px-5 py-2.5 text-sm font-medium">
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border-neutral-300 text-neutral-900 hover:bg-neutral-50 rounded-md px-5 py-2.5 text-sm"
            >
              Download CV
            </Button>
          </div>
        </div>

        {/* Right — Card stack */}
        <div className="hidden md:flex flex-col gap-3">
          {/* Avatar card */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="w-[72px] h-[72px] rounded-full bg-neutral-900 flex items-center justify-center text-white text-2xl font-serif font-bold mb-3">
              CJ
            </div>
            <p className="text-neutral-900 font-semibold text-[0.95rem] mb-0.5">
              Claudine Juan
            </p>
            <p className="text-neutral-400 text-xs mb-4">Systems Analyst</p>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {skills.map((s) => (
                <Badge
                  key={s}
                  variant="outline"
                  className="text-[11px] text-neutral-500 border-neutral-200 rounded-full px-2.5 py-0.5 font-normal"
                >
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stat grid */}
          <div className="grid grid-cols-2 gap-2">
            {stats.map(({ num, label }) => (
              <div
                key={label}
                className="bg-neutral-50 border border-neutral-200 rounded-xl p-4"
              >
                <p className="text-[1.4rem] font-semibold text-neutral-900 leading-none mb-1">
                  {num}
                </p>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
