
import Container from "../components/Container";

/* =========================================
   PAGE DATA
========================================= */

const values = [
  {
    number: "01",
    title: "Innovation in Every Build",
    description:
      "We embrace innovative ideas, modern design approaches, and practical construction solutions to bring every vision to life.",
  },
  {
    number: "02",
    title: "Trusted Partnerships",
    description:
      "We build lasting relationships through transparent communication, collaboration, and a commitment to our clients.",
  },
  {
    number: "03",
    title: "Lasting Legacy",
    description:
      "We create meaningful spaces built with quality craftsmanship, integrity, and attention to every detail.",
  },
];

const principles = [
  "Client-First",
  "Quality-Driven",
  "Integrity Always",
  "Built to Last",
];

const historyItems = [
  {
    number: "01",
    label: "THE FOUNDATION",
    title: "J&D Design + Build — Where It All Began",
    description: (
      <>
        The company was initially established as{" "}
        <strong>J&D Design+Build</strong> under the ownership of{" "}
        <strong>Jimmy P. Famoso.</strong> From the very beginning,
        Mr. Famoso laid a solid foundation rooted in hands-on
        construction expertise, disciplined workmanship, and a
        genuine commitment to client satisfaction — values that
        would define the company's character for years to come.
      </>
    ),
    color: "bg-[#04182D] text-amber-500",
  },
  {
    number: "02",
    label: "THE TRANSITION",
    title: "BlueDragon Design & Construction — A New Chapter",
    description: (
      <>
        As part of the company's growth and continued evolution,
        the business was rebranded as{" "}
        <strong>BlueDragon Design & Construction</strong>, with
        ownership transitioning to{" "}
        <strong>Jim Benjamin Abiezer Igot Famoso</strong>, the
        eldest son of Jimmy P. Famoso. The renaming marked not a
        departure from the past, but a confident step forward —
        carrying the same values into a new era.
      </>
    ),
    color: "bg-amber-500 text-[#04182D]",
  },
  {
    number: "03",
    label: "CONTINUITY & LEADERSHIP",
    title: "A Family-Driven Leadership Team",
    description: (
      <>
        While ownership has transitioned,{" "}
        <strong>Jimmy P. Famoso</strong> remains integral to the
        company as <strong>General Manager</strong>, overseeing
        overall management and operations.{" "}
        <strong>Jim Benjamin Abiezer Igot Famoso</strong> serves
        as <strong>Operations Manager</strong>, supporting
        day-to-day operations and guiding the company's continued
        growth. Together, they ensure that BlueDragon's founding
        principles — quality workmanship, innovative solutions,
        and client-focused service — remain at the heart of every
        project.
      </>
    ),
    color: "bg-[#07164A] text-amber-500",
  },
];

/* =========================================
   ABOUT PAGE
========================================= */

export default function About() {
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* =========================================
          HERO SECTION
      ========================================== */}
      <section className="relative flex min-h-[520px] overflow-hidden bg-slate-950 sm:min-h-[600px] lg:min-h-[calc(85vh-110px)] lg:items-center">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Image.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031326]/95 via-[#031326]/75 to-[#031326]/30" />

        <div className="absolute inset-0 bg-slate-950/20" />

        <Container>
          <div className="relative z-10 flex min-h-[520px] items-center py-24 sm:min-h-[600px] lg:min-h-[calc(85vh-110px)] lg:py-32">

            <div className="max-w-3xl">

              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-amber-500 sm:text-xs">
                ABOUT US
              </p>

              <h1 className="text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Building With
                <br />
                <span className="text-amber-500">
                  Purpose & Passion.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                Discover the people, purpose, and principles behind
                Blue Dragon Design and Construction. We turn ideas
                into meaningful spaces built to inspire and endure.
              </p>

              <a
                href="#who-we-are"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-4 bg-amber-500 px-6 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-950 transition-colors duration-300 hover:bg-amber-400"
              >
                Discover Our Story
                <span className="text-base">↓</span>
              </a>

            </div>
          </div>
        </Container>

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
      </section>


      {/* =========================================
          WHO WE ARE
      ========================================== */}
      <section
        id="who-we-are"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

            {/* Company Introduction */}
            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 sm:text-xs">
                WHO WE ARE
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-[#17263B] sm:text-5xl lg:text-6xl">
                Building More
                <br />
                Than Just
                <br />
                <span className="text-amber-500">
                  Structures.
                </span>
              </h2>

              <div className="mt-7 max-w-xl space-y-5 text-sm leading-7 text-slate-600 sm:text-base">

                <p>
                  Blue Dragon Design and Construction is a full-service
                  design and construction firm committed to transforming
                  visions into built realities. Founded with a passion for
                  architectural excellence, we blend creative design with
                  engineering precision to deliver spaces that inspire,
                  function, and endure.
                </p>

                <p>
                  Our multidisciplinary team of architects, engineers,
                  and construction specialists works collaboratively
                  to ensure every project meets the highest standards
                  of quality and client satisfaction.
                </p>

                <p>
                  From residential homes to commercial spaces, we approach
                  each project with the same level of dedication —
                  delivering results that stand as testaments to our craft.
                </p>

              </div>
            </div>

            {/* Image and Experience */}
            <div className="relative pb-8 pl-4 sm:pl-8">

              <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">

                <img
                  src="/images/Fed.png"
                  alt="Blue Dragon architectural and construction work"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#031326]/50 to-transparent" />

              </div>

              {/* Experience Box */}
              <div className="absolute -bottom-1 left-0 flex min-h-[140px] w-[190px] flex-col justify-center bg-[#08284B] p-6 text-white shadow-xl sm:min-h-[165px] sm:w-[230px] sm:p-8">

                <p className="text-5xl font-extrabold tracking-tight text-amber-500 sm:text-6xl">
                  10+
                </p>

                <p className="mt-3 text-[9px] font-bold uppercase leading-5 tracking-[0.2em] text-white/90 sm:text-[10px]">
                  Years of Experience
                </p>

              </div>

              <div className="absolute -right-2 -top-3 -z-10 h-24 w-24 bg-amber-500 sm:-right-4 sm:-top-5 sm:h-32 sm:w-32" />

            </div>
          </div>
        </Container>
      </section>


{/* =========================================
    OUR JOURNEY / COMPANY HISTORY
========================================== */}
<section className="bg-[#F7F3EB] py-20 sm:py-24 lg:py-28">

  <Container>

    {/* SECTION HEADER */}
    <div className="mb-14 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 sm:text-xs">
          OUR JOURNEY
        </p>

        <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#17263B] sm:text-5xl lg:text-6xl">
          A Legacy Built
          <br />
          <span className="text-amber-500">
            Through Generations.
          </span>
        </h2>
      </div>

      <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
        From a father's vision to a family legacy, discover the
        journey behind Blue Dragon Design & Construction and
        the values that continue to shape our future.
      </p>

    </div>

    {/* HISTORY TIMELINE */}
    <div className="relative">

      {/* Desktop Timeline Line */}
      <div className="absolute bottom-10 left-8 top-10 hidden w-px bg-[#D8CCB8] md:block" />

      <div className="space-y-6 sm:space-y-8">

        {historyItems.map((item, index) => (

          <article
            key={item.number}
            className="group relative grid gap-6 border border-[#E5DED1] bg-white p-6 transition-all duration-300 hover:border-amber-500/60 hover:shadow-lg sm:p-8 md:grid-cols-[90px_1fr] md:gap-8 lg:gap-12 lg:p-10"
          >

            {/* NUMBER AND ICON AREA */}
            <div className="relative z-10 flex items-center gap-4 md:flex-col md:items-start">

              <div className={`flex h-14 w-14 shrink-0 items-center justify-center transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-[#04182D] sm:h-16 sm:w-16 ${item.color}`}>
                <span className="font-serif text-2xl font-bold sm:text-3xl">
                  {item.number}
                </span>
              </div>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 md:hidden">
                Chapter {item.number}
              </span>

            </div>

            {/* CONTENT */}
            <div className="min-w-0">

              <div className="flex flex-wrap items-center gap-3">

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-amber-600 sm:text-[10px]">
                  {item.label}
                </span>

                <span className="h-px w-8 bg-amber-500/60" />

                <span className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 md:inline">
                  CHAPTER {item.number}
                </span>

              </div>

              <h3 className="mt-3 font-serif text-2xl font-bold leading-snug text-[#17263B] transition-colors group-hover:text-amber-600 sm:text-3xl">
                {item.title}
              </h3>

              <p className="mt-5 max-w-3xl text-sm leading-7 tracking-wide text-slate-500 sm:text-base sm:leading-8">
                {item.description}
              </p>

            </div>

            {/* DECORATIVE CORNER */}
            <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-transparent transition-colors group-hover:border-amber-500" />

          </article>

        ))}

      </div>

    </div>

    {/* BOTTOM STATEMENT */}
    <div className="mt-12 flex flex-col gap-5 border-t border-[#D8CCB8] pt-8 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-amber-600">
          THE BLUE DRAGON LEGACY
        </p>

        <p className="mt-2 font-serif text-xl text-[#17263B] sm:text-2xl">
          One Vision. Generations of Excellence.
        </p>
      </div>

      <img
        src="/assets/logo.png"
        alt="Blue Dragon Design and Construction"
        className="w-36 object-contain sm:w-44"
        loading="lazy"
      />

    </div>

  </Container>

</section>



      {/* =========================================
          OUR MISSION
      ========================================== */}
      <section className="relative overflow-hidden bg-[#04182D] py-20 text-white sm:py-24 lg:py-28">

        {/* Decorative Background */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/5 sm:h-96 sm:w-96" />

        <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/5 sm:h-72 sm:w-72" />

        <Container>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:items-center lg:gap-20">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500 sm:text-xs">
                OUR PURPOSE
              </p>

              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Our
                <br />
                Mission.
              </h2>

              <div className="mt-6 h-1 w-16 bg-amber-500" />

            </div>

            <div>

              <span className="font-serif text-7xl leading-none text-amber-500 sm:text-8xl">
                “
              </span>

              <p className="-mt-5 max-w-3xl text-xl font-medium leading-relaxed text-white sm:text-2xl lg:text-3xl">
                To deliver innovative, high-quality design and
                construction services that empower clients and
                elevate communities — building not just structures,
                but enduring legacies grounded in trust,
                craftsmanship, and an unwavering commitment
                to excellence.
              </p>

              {/* Company Principles */}
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4 border-t border-white/15 pt-7">

                {principles.map((principle) => (

                  <div
                    key={principle}
                    className="flex items-center gap-2"
                  >

                    <span className="h-1.5 w-1.5 bg-amber-500" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-white/80 sm:text-[10px]">
                      {principle}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>
        </Container>
      </section>


      {/* =========================================
          OUR VISION
      ========================================== */}
      <section className="bg-[#F7F3EB] py-20 sm:py-24 lg:py-28">

        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

            {/* Vision Content */}
            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 sm:text-xs">
                LOOKING FORWARD
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#17263B] sm:text-5xl lg:text-6xl">
                Our
                <br />
                <span className="text-amber-500">
                  Vision.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base font-semibold leading-8 text-[#17263B] sm:text-lg">
                "To be the leading design and construction company
                trusted by families, businesses, and institutions
                across the Philippines — known for transforming
                spaces into meaningful environments through
                innovation, quality, and the enduring values
                that define BlueDragon."
              </p>

              <div className="mt-7 h-px w-full max-w-lg bg-[#D8D0C2]" />

              <p className="mt-7 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                We aspire to grow as a company that honors its roots —
                built by family, strengthened by experience, and driven
                by a genuine desire to make every client's vision a
                lasting reality. We see a future where BlueDragon is
                synonymous with integrity and inspired design.
              </p>

            </div>

            {/* Vision Image */}
            <div className="relative">

              <div className="aspect-[4/3] overflow-hidden bg-slate-300">

                <img
                  src="/images/projects/Enrico.png"
                  alt="Modern architectural design representing our vision"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

              </div>

              <div className="absolute -bottom-5 -left-5 -z-10 h-24 w-24 bg-amber-500 sm:h-32 sm:w-32" />

              <div className="absolute bottom-5 right-5 bg-[#04182D]/90 px-5 py-4 text-white backdrop-blur-sm sm:bottom-7 sm:right-7 sm:px-7 sm:py-5">

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-amber-500">
                  Our Commitment
                </p>

                <p className="mt-2 font-serif text-xl sm:text-2xl">
                  Designed to Inspire.
                </p>

              </div>

            </div>

          </div>
        </Container>
      </section>


      {/* =========================================
          OUR VALUES
      ========================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <Container>

          {/* Heading */}
          <div className="mb-12 grid gap-5 lg:mb-16 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 sm:text-xs">
                WHAT DEFINES US
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#17263B] sm:text-5xl lg:text-6xl">
                The Values
                <br />
                Behind Every Build.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end">
              Our values guide every decision, every partnership,
              and every project we undertake. They define who we are
              and the standards we strive to uphold.
            </p>

          </div>

          {/* Value Cards */}
          <div className="grid gap-5 md:grid-cols-3">

            {values.map((value) => (

              <article
                key={value.number}
                className="group relative flex min-h-[260px] flex-col border border-[#DED7CA] bg-[#F7F3EB] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl sm:min-h-[290px] sm:p-9"
              >

                <div className="flex items-center justify-between">

                  <span className="font-serif text-4xl font-bold text-amber-500">
                    {value.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8D0C2] text-lg text-[#17263B] transition-all duration-300 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-white">
                    ↗
                  </span>

                </div>

                <div className="mt-auto pt-10">

                  <h3 className="font-serif text-2xl font-bold text-[#17263B] sm:text-3xl">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </Container>
      </section>


      {/* =========================================
          CALL TO ACTION
      ========================================== */}
      <section className="relative overflow-hidden bg-[#061A30] py-20 text-white sm:py-24">

        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/5 sm:h-96 sm:w-96" />

        <Container>

          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-2xl">

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500 sm:text-xs">
                LET'S BUILD THE FUTURE
              </p>

              <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Your Vision.
                <span className="block text-amber-500">
                  Our Commitment.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Every great project starts with an idea.
                Let Blue Dragon Design and Construction help
                turn yours into something remarkable.
              </p>

            </div>

            <a
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-4 self-start bg-amber-500 px-7 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-950 transition-colors duration-300 hover:bg-amber-400 md:self-center sm:text-xs"
            >
              Start Your Project
              <span className="text-base">→</span>
            </a>

          </div>

        </Container>
      </section>

    </main>
  );
}
