import React from "react";

const leaders = [
  { name: "Jimmy P. Famoso", role: "General Manager", initials: "JF", group: "operations" },
  { name: "Indeira I. Famoso", role: "Finance Head", initials: "IF", group: "finance" },
];

const team = [
  { name: "Eric Marzona", role: "Project Manager", initials: "EM", group: "operations" },
  { name: "Jim Benjamin I. Famoso", role: "Operation Manager", initials: "JF", group: "operations" },
  { name: "Emmanuel Mahilum", role: "Design Manager", initials: "EM", group: "operations" },
  { name: "Engr. Joel Vasquez", role: "Marketing Manager", initials: "JV", group: "finance" },
  { name: "Jo Ann M. Digdig", role: "Office Administrator", initials: "JD", group: "finance" },
  { name: "Riza Salimbot", role: "Finance Officer", initials: "RS", group: "finance" },
];

const specialists = [
  { name: "Jayphee Hiponia", role: "Project Supervisor", initials: "JH", group: "operations" },
  { name: "Engr. Louella Torremocha", role: "Project Engineer", initials: "LT", group: "operations" },
  { name: "Architect", role: "", initials: "A", group: "operations", vacant: true },
  { name: "Julie Davaganon", role: "Marketing", initials: "JD", group: "finance" },
  { name: "Richel G. Carbaguil", role: "Administrative Officer", initials: "RC", group: "finance" },
  { name: "Joy Candiasan", role: "Purchaser", initials: "JC", group: "finance" },
];

const staff = [
  { name: "Johnny Famoso", role: "Certified Electrician", initials: "JF", group: "operations" },
  { name: "Amador Roca Llena III", role: "Quantity Surveyor", initials: "AR", group: "operations" },
  { name: "Jonifer Famoso", role: "Drafting Supervisor", initials: "JF", group: "operations" },
  { name: "Michelle S. Estrada", role: "External Marketing", initials: "ME", group: "finance" },
  { name: "Merigien Rodaje", role: "External Marketing", initials: "MR", group: "finance" },
];

function PhotoPlaceholder({ initials, vacant = false }) {
  return (
    <div
      aria-label={vacant ? "Photo placeholder" : `Photo placeholder for ${initials}`}
      className={`mx-auto flex h-[96px] w-[96px] items-center justify-center border border-[#DED7CA] ${
        vacant ? "bg-white" : "bg-[#E8E3D9]"
      }`}
    >
      {!vacant && (
        <span className="text-2xl font-semibold tracking-wide text-[#8A8174]">
          {initials}
        </span>
      )}
    </div>
  );
}

function Person({ person, compact = false }) {
  return (
    <article className="flex min-w-0 flex-col items-center text-center">
      <PhotoPlaceholder initials={person.initials} vacant={person.vacant} />
      <h3 className="mt-2 max-w-full text-[13px] font-extrabold leading-[1.2] tracking-[0.015em] text-[#17263B]">
        {person.name}
      </h3>
      {person.role && (
        <p className="mt-0.5 text-[12px] leading-[1.25] tracking-[0.035em] text-[#77736D]">
          {person.role}
        </p>
      )}
    </article>
  );
}

function Leader({ person }) {
  return (
    <article className="flex flex-col items-center text-center">
      <PhotoPlaceholder initials={person.initials} />
      <h2 className="mt-2 text-[14px] font-extrabold leading-tight tracking-[0.025em] text-[#17263B]">
        {person.name}
      </h2>
      <p className="text-[13px] leading-tight tracking-[0.04em] text-[#77736D]">
        {person.role}
      </p>
    </article>
  );
}

export default function OrganizationChart() {
  return (
    <main className="min-h-screen border-t-[4px] border-[#D99A16] bg-[#F7F3EB] px-4 pb-10 pt-24 font-sans sm:px-6 sm:pt-28 lg:pt-32">
      <div className="mx-auto max-w-[1240px]">
        <header className="mb-9 text-center sm:mb-11">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-600">
            Company Structure
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#17263B] sm:text-4xl">
            Organizational Chart
          </h1>
          <div className="mx-auto mt-3 h-[2px] w-14 bg-amber-500" />
        </header>

        {/* Leadership */}
        <section aria-label="Company leadership" className="grid grid-cols-2 gap-6 sm:gap-10 lg:gap-16">
                      {leaders.map((person) => (
            <Leader key={person.name} person={person} />
          ))}
        </section>

        {/* Team members are arranged in the same left/right groupings as the reference. */}
        <section aria-label="Management team" className="mt-8 grid grid-cols-2 gap-x-5 gap-y-7 sm:mt-10 sm:gap-x-10 lg:grid-cols-6 lg:gap-x-6">
          {team.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </section>

        <section aria-label="Project, design, marketing and administrative roles" className="mt-7 grid grid-cols-2 gap-x-5 gap-y-7 sm:gap-x-10 lg:grid-cols-6 lg:gap-x-6">
          {specialists.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </section>

        <section aria-label="Technical and external staff" className="mt-7 grid grid-cols-2 gap-x-5 gap-y-7 sm:gap-x-10 lg:grid-cols-6 lg:gap-x-6">
          {staff.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </section>

        {/* Consulting engineer */}
        <section aria-label="Consulting engineer" className="mt-8 flex flex-col items-center text-center">
          <PhotoPlaceholder initials="AL" />
          <h2 className="mt-2 text-[13px] font-extrabold leading-tight tracking-[0.025em] text-[#17263B]">
            ENGR. ALAN L. DELFINADO, PME
          </h2>
          <p className="mt-0.5 text-[12px] tracking-[0.035em] text-[#77736D]">
            Senior Consulting Mechanical Engineer
          </p>
          <ul className="mt-3 space-y-0.5 text-left text-[11px] leading-[1.35] text-[#77736D]">
            <li>Mechanical Engineering</li>
            <li>HVAC</li>
            <li>Fire Protection</li>
            <li>Plumbing &amp; Sanitary</li>
            <li>STP</li>
            <li>MEPFS</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
