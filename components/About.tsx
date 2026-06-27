const certifications = [
  {
    name: "Certified Business Analysis Professional (CBAP)",
    org: "IIBA · 2022",
  },
  { name: "PMI Agile Certified Practitioner (PMI-ACP)", org: "PMI · 2021" },
  { name: "ITIL 4 Foundation", org: "Axelos · 2020" },
  { name: "SQL for Data Analysis", org: "Coursera / Google · 2019" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-[0.18em] uppercase text-neutral-400 font-medium mb-3">
          Who I Am
        </p>
        <div className="w-8 h-0.5 bg-neutral-900 mb-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl font-bold text-neutral-950 leading-snug mb-6">
              A systems thinker who speaks both languages
            </h2>
            <div className="space-y-4 text-sm text-neutral-500 leading-[1.9]">
              <p>
                I'm Claudine — a Systems Analyst based in Manila with 5+ years
                of experience turning messy, ambiguous business problems into
                structured, actionable technical requirements.
              </p>
              <p>
                I sit at the intersection of business and technology: I talk to
                stakeholders, untangle their real needs from their stated ones,
                and translate them into specifications developers can actually
                build from.
              </p>
              <p>
                Outside of work, I'm a hobbyist process nerd — the kind of
                person who diagrams workflows for fun and genuinely enjoys
                finding the one step in a process that causes six downstream
                problems.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 font-medium mb-3">
              Certifications
            </p>
            <div className="flex flex-col gap-2.5">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="border border-neutral-200 rounded-lg px-4 py-3 bg-neutral-50"
                >
                  <p className="text-sm font-semibold text-neutral-900">
                    {c.name}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">{c.org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
