import Container from "../components/Container";

const stats = [
  { value: "10", label: "Years of Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "500+", label: "Happy Clients" },
  { value: "4", label: "Finish Levels" },
];

const finishes = [
  {
    image: "/images/rough-finish.jpg",
    title: "Rough Finish",
    price: "PHP 20K–25K / SQM",
    features: [
      "Concrete wall & floor finish",
      "No ceiling / windows",
      "No doors",
      "No cabinetry & fixtures",
    ],
  },
  {
    image: "/images/standard-finish.jpg",
    title: "Standard Finish",
    price: "PHP 30K–35K / SQM",
    features: [
      "Quality roof & wooden doors",
      "Basic paint & ceramic tiles",
      "Jalousie windows",
      "Basic kitchen cabinetry",
    ],
  },
  {
    image: "/images/elegant-finish.jpg",
    title: "Elegant Finish",
    price: "PHP 40K–45K / SQM",
    features: [
      "Quality roof & wooden doors",
      "Quality paint & ceramic tiles",
      "Stained-glass windows",
      "Quality cabinetry & fixtures",
    ],
  },
  {
    image: "/images/luxury-finish.jpg",
    title: "Luxury Finish",
    price: "PHP 60K+ / SQM",
    features: [
      "Textured / premium walls",
      "Porcelain or solid wood flooring",
      "Customized windows & doors",
      "Premium cabinetry & fixtures",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* =========================================
          HERO SECTION
      ========================================== */}
      <section className="relative flex min-h-[650px] overflow-hidden bg-slate-950 sm:min-h-[720px] lg:min-h-[calc(100vh-110px)] lg:items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031326]/95 via-[#031326]/70 to-[#031326]/20" />
        <div className="absolute inset-0 bg-slate-950/20" />

        {/* Hero Content */}
        <Container>
          <div className="relative z-10 flex min-h-[650px] items-center py-28 sm:min-h-[720px] sm:py-32 lg:min-h-[calc(100vh-110px)] lg:py-36">
            <div className="max-w-3xl text-left">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-amber-500 sm:text-xs">
                Building a Stronger Tomorrow
              </p>

              <h1 className="max-w-4xl text-4xl font-extrabold uppercase leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px]">
                Building Futures
                <br />
                <span className="text-amber-500">Designing Excellence.</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
              Your trusted partner in design and
              construction, delivering innovative solutions
              precision, integrity, and craftsmanship since
              founding
              </p>

              {/* Hero Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/about"
                  className="inline-flex min-h-[46px] items-center justify-center gap-3 bg-amber-500 px-5 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-950 transition-colors duration-300 hover:bg-amber-400"
                >
                  View Our Projects
                  <span aria-hidden="true" className="text-base">
                    →
                  </span>
                </a>

                <a
                  href="/contact"
                  className="inline-flex min-h-[46px] items-center justify-center gap-3 border border-white/60 bg-white/5 px-5 text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950"
                >
                  Start a Project
                  <span aria-hidden="true" className="text-base">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Container>

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
      </section>

      {/* =========================================
          STATISTICS BAR
      ========================================== */}
      <section className="bg-[#08284B] text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex min-h-[115px] flex-col items-center justify-center px-3 py-6 text-center sm:min-h-[130px] ${
                  index !== 0 ? "border-l border-white/15" : ""
                }`}
              >
                <p className="text-3xl font-extrabold tracking-tight text-amber-500 sm:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.12em] text-white/90 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================
          TYPES OF FINISHES
      ========================================== */}
      <section className="bg-[#F7F3EB] py-16 sm:py-20 lg:py-24">
        <Container>
          {/* Section Heading */}
          <div className="mb-10 grid gap-5 lg:mb-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-600">
                Our Offerings
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[#17263B] sm:text-5xl lg:text-6xl">
                Types of Finishes
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end">
              Choose the finish level that matches your project requirements,
              lifestyle and target budget.
            </p>
          </div>

          {/* Finish Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {finishes.map((finish) => (
              <FinishCard key={finish.title} {...finish} />
            ))}
          </div>
        </Container>
      </section>


      {/* =========================================
          SELECTED WORK / PROJECT PORTFOLIO
      ========================================== */}
      <section className="bg-[#04182D] py-16 text-white sm:py-20 lg:py-24">
        <Container>
          {/* Section Heading */}
          <div className="mb-8 grid gap-5 md:mb-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-500 sm:text-xs">
                Selected Work
              </p>
              <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Built to Higher Standards.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400 md:justify-self-end md:text-base">
              Residential, commercial and industrial projects presented as an
              editorial portfolio.
            </p>
          </div>

          {/* Asymmetrical Project Grid */}
          <div className="grid gap-3 md:grid-cols-2">
            {/* Featured Project */}
            <ProjectCard
              image="/images/projects/featured-residence.jpg"
              title="Modern Residential Residence"
              meta="Cebu · Residential · 2024"
              featured
            />

            {/* Supporting Projects */}
            <div className="grid gap-3 sm:grid-rows-2">
              <ProjectCard
                image="/images/projects/riverdale-commercial.jpg"
                title="Riverdale Commercial Center"
                meta="Cebu · Commercial · 2023"
              />
              <ProjectCard
                image="/images/projects/industrial-facility.jpg"
                title="Industrial Facility Development"
                meta="Central Visayas · Industrial · 2024"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xs leading-6 text-slate-400 sm:text-sm">
              Every project reflects our commitment to thoughtful planning,
              reliable execution and lasting quality.
            </p>
            <a
              href="/projects"
              className="inline-flex min-h-11 items-center gap-3 self-start text-[10px] font-bold uppercase tracking-[0.16em] text-amber-500 transition-colors hover:text-amber-300 sm:text-xs"
            >
              Explore All Projects
              <span aria-hidden="true" className="text-base">→</span>
            </a>
          </div>
        </Container>
      </section>

      {/* =========================================
          INTRODUCTION SECTION
      ========================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">
                About Blue Dragon
              </p>

              <h2 className="mt-4 text-3xl font-bold uppercase leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Designed with Purpose.
                <span className="block text-amber-500">
                  Built to Last.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                We bring thoughtful design and disciplined construction
                together to create spaces that balance functionality, quality,
                and lasting value.
              </p>

              <a
                href="/about"
                className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-900 transition-colors hover:text-amber-600"
              >
                Discover Our Company
                <span className="text-lg">→</span>
              </a>
            </div>

            {/* Secondary Image */}
            <div className="relative">
              <div
                className="aspect-[4/3] w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/about.jpg')",
                }}
                role="img"
                aria-label="Modern architectural construction project"
              />

              <div className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 bg-amber-500 sm:-bottom-5 sm:-left-5 sm:h-32 sm:w-32" />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================
          CALL TO ACTION
      ========================================== */}
      <section className="bg-[#061A30] py-16 sm:py-20">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
                Have a Project in Mind?
              </p>

              <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                Let&apos;s Build Something Remarkable.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Tell us about your vision, and let&apos;s take the first step
                toward bringing it to life.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start bg-amber-500 px-6 text-xs font-bold uppercase tracking-wider text-slate-950 transition hover:bg-amber-400 md:self-center"
            >
              Get a Quote
              <span className="text-base">→</span>
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}

/* =========================================
   FINISH CARD COMPONENT
========================================= */

function FinishCard({ image, title, price, features }) {
  return (
    <article className="group flex h-full flex-col border border-[#DED7CA] bg-white transition-shadow duration-300 hover:shadow-lg">
      {/* Card Image */}
      <div className="aspect-[4/3] overflow-hidden bg-slate-200">
        <img
          src={image}
          alt={`${title} residential construction finish`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-2">
          <h3 className="text-base font-bold leading-6 text-[#17263B]">
            {title}
          </h3>

          <span className="pt-1 text-[9px] font-bold leading-4 text-amber-600">
            {price}
          </span>
        </div>

        <ul className="mt-4 list-disc space-y-1 pl-4 text-[11px] leading-[1.6] text-slate-600 sm:text-xs">
          {features.map((feature) => (
            <li key={feature} className="pl-0.5">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* =========================================
   PROJECT PORTFOLIO CARD COMPONENT
========================================= */

function ProjectCard({ image, title, meta, featured = false }) {
  return (
    <a
      href="/projects"
      className={`group relative block min-h-[260px] overflow-hidden bg-slate-800 ${
        featured
          ? "aspect-[4/5] md:aspect-auto md:min-h-[560px]"
          : "aspect-[16/9] sm:min-h-[260px]"
      }`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#020B14]/95 via-[#020B14]/15 to-transparent transition-opacity duration-300 group-hover:from-[#020B14]/100" />

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3
              className={`font-semibold leading-tight text-white ${
                featured ? "text-xl sm:text-2xl lg:text-3xl" : "text-base sm:text-lg"
              }`}
            >
              {title}
            </h3>
            <p className="mt-2 text-[10px] font-medium text-white/75 sm:text-xs">
              {meta}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-colors group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950"
          >
            ↗
          </span>
        </div>
      </div>
    </a>
  );
}
