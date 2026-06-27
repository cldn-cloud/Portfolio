const projects = [
  {
    id: "01",
    featured: true,
    title: "Core Banking System Migration",
    description:
      "Led end-to-end business analysis for a legacy-to-modern banking platform migration. Produced the full requirements baseline, traceability matrix, and coordinated cross-functional UAT across 8 departments and 4M+ accounts.",
    tags: ["BRD", "FRS", "UAT", "Traceability Matrix", "Core Banking"],
    highlight: { value: "4M+", label: "accounts migrated" },
  },
  {
    id: "02",
    title: "CRM Integration & Process Redesign",
    description:
      "Mapped 40+ business processes and authored system integration specs for a CRM overhaul at a major telco, reducing duplicate data entry by 35%.",
    tags: ["BPMN", "CRM", "Integration", "Visio"],
  },
  {
    id: "03",
    title: "ERP Implementation — Logistics",
    description:
      "Gathered and documented user requirements for SAP ERP rollout. Wrote use cases and training materials for 500+ end users across 3 warehouses.",
    tags: ["SAP", "Use Cases", "UML", "Training Docs"],
  },
  {
    id: "04",
    title: "Gov't Portal — Citizen Services",
    description:
      "Analyzed as-is processes and designed to-be workflows for a citizen-facing e-services portal, cutting average transaction time from 3 days to 4 hours.",
    tags: ["e-Gov", "Process Design", "UX Research"],
  },
];

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-24 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-[0.18em] uppercase text-neutral-400 font-medium mb-3">
          Selected Work
        </p>
        <div className="w-8 h-0.5 bg-neutral-900 mb-5" />
        <h2 className="font-serif text-3xl font-bold text-neutral-950 mb-2">
          Projects
        </h2>
        <p className="text-sm text-neutral-400 max-w-md mb-10 leading-relaxed">
          A selection of analysis and documentation work across different
          industries and system types.
        </p>

        <div className="flex flex-col gap-3">
          {/* Featured */}
          {featured && (
            <div className="border border-neutral-200 rounded-xl p-6 flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <p className="text-[10px] text-neutral-300 font-medium tracking-wider uppercase mb-3">
                  {featured.id} — Featured
                </p>
                <p className="text-base font-semibold text-neutral-900 mb-2">
                  {featured.title}
                </p>
                <p className="text-sm text-neutral-500 leading-[1.75] mb-4">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] text-neutral-500 bg-neutral-100 border border-neutral-200 px-2.5 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {featured.highlight && (
                <div className="bg-neutral-900 text-white rounded-xl px-6 py-5 text-center min-w-[130px] flex-shrink-0">
                  <p className="font-serif text-3xl font-bold leading-none mb-1">
                    {featured.highlight.value}
                  </p>
                  <p className="text-xs text-neutral-400 leading-snug">
                    {featured.highlight.label}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {rest.map((p) => (
              <div
                key={p.id}
                className="border border-neutral-200 rounded-xl p-5"
              >
                <p className="text-[10px] text-neutral-300 font-medium tracking-wider uppercase mb-3">
                  {p.id}
                </p>
                <p className="text-sm font-semibold text-neutral-900 mb-2">
                  {p.title}
                </p>
                <p className="text-xs text-neutral-500 leading-[1.75] mb-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] text-neutral-500 bg-neutral-100 border border-neutral-200 px-2.5 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
