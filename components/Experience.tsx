const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Systems Analyst",
    company: "BDO Unibank · Full-time",
    description:
      "Led requirements analysis for a core banking system migration affecting 4M+ accounts. Facilitated 60+ stakeholder workshops, authored a 200-page FRS, and coordinated UAT across 8 business units.",
    tags: ["Core Banking", "UAT", "BRD / FRS", "Stakeholder Mgmt", "SQL"],
  },
  {
    period: "2020 — 2022",
    role: "Systems Analyst",
    company: "Globe Telecom · Full-time",
    description:
      "Analyzed and documented requirements for a CRM integration project. Mapped 40+ business processes using BPMN, reducing duplicate data entry by 35% post-launch.",
    tags: ["BPMN", "CRM", "Visio", "Agile/Scrum", "JIRA"],
  },
  {
    period: "2018 — 2020",
    role: "Junior Business Analyst",
    company: "Accenture Philippines · Full-time",
    description:
      "Supported delivery of an ERP implementation for a logistics client. Gathered user requirements, wrote use cases, and created training documentation for 500+ end users.",
    tags: ["ERP", "Use Cases", "UML", "SAP", "Documentation"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-[0.18em] uppercase text-neutral-400 font-medium mb-3">
          Career
        </p>
        <div className="w-8 h-0.5 bg-neutral-900 mb-5" />
        <h2 className="font-serif text-3xl font-bold text-neutral-950 mb-2">
          Experience
        </h2>
        <p className="text-sm text-neutral-400 max-w-md mb-10 leading-relaxed">
          A track record of delivering system improvements across finance,
          logistics, and the public sector.
        </p>

        <div className="divide-y divide-neutral-100">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="grid grid-cols-[120px_1fr] gap-6 py-7"
            >
              <p className="text-xs text-neutral-400 pt-0.5 leading-relaxed">
                {exp.period}
              </p>
              <div>
                <p className="text-sm font-semibold text-neutral-900 mb-0.5">
                  {exp.role}
                </p>
                <p className="text-xs text-neutral-400 mb-2.5">{exp.company}</p>
                <p className="text-sm text-neutral-500 leading-[1.75]">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] text-neutral-500 bg-neutral-100 border border-neutral-200 px-2.5 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
