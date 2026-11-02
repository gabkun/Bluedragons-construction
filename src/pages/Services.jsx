
import Container from "../components/Container";

/* =========================================
   SERVICES DATA
========================================= */

const services = [
  {
    number: "01",
    title: "Design & Build",
    description:
      "Integrated design and construction under one contract, providing streamlined project delivery, a single point of accountability, and maximum value for every client.",
    tag: "Complete Project Solutions",
  },
  {
    number: "02",
    title: "Buy Now, Pay Later",
    description:
      "Flexible financing options that allow clients to begin construction immediately while spreading payments over an agreed schedule.",
    tag: "Flexible Financing",
  },
  {
    number: "03",
    title: "Upgrades",
    description:
      "Targeted structural and aesthetic upgrades designed to improve the performance, appearance, functionality, and overall value of existing buildings.",
    tag: "Building Improvements",
  },
  {
    number: "04",
    title: "Remodeling",
    description:
      "Full interior and exterior remodeling services that reimagine existing spaces while preserving the integrity and character of the original structure.",
    tag: "Space Transformation",
  },
  {
    number: "05",
    title: "Waterproofing",
    description:
      "Professional waterproofing solutions for roofs, basements, terraces, and wet areas using proven materials and reliable application methods.",
    tag: "Protection & Durability",
  },
  {
    number: "06",
    title: "MEP Services",
    description:
      "Comprehensive mechanical, electrical, and plumbing engineering design and installation solutions for residential, commercial, and other building types.",
    tag: "Technical Solutions",
  },
  {
    number: "07",
    title: "Interior Fit-Outs",
    description:
      "Precision interior fit-out services covering flooring, ceilings, partitions, joinery, and specialist finishes tailored to each client's design concept.",
    tag: "Interior Excellence",
  },
  {
    number: "08",
    title: "Demolition",
    description:
      "Safe, efficient, and compliant demolition services, including full or partial structural removal, site clearing, and responsible debris disposal.",
    tag: "Safe Site Preparation",
  },
  {
    number: "09",
    title: "Cleaning & Sanitation",
    description:
      "Professional post-construction and ongoing cleaning and sanitation services for residential and commercial properties.",
    tag: "Property Care",
  },
  {
    number: "10",
    title: "Building Sustainability",
    description:
      "Green building practices focused on energy-efficient design, sustainable materials, and compliance with environmental standards.",
    tag: "Sustainable Solutions",
  },
  {
    number: "11",
    title: "Pre-Construction Design & Estimating",
    description:
      "Detailed cost planning, quantity surveying, and design development services that prepare projects for success before construction begins.",
    tag: "Planning & Estimation",
  },
  {
    number: "12",
    title: "Office Build-Outs, Renovation & Expansion",
    description:
      "Specialized commercial office fit-outs and renovations, from open-plan workspaces to executive suites and collaborative zones.",
    tag: "Commercial Spaces",
  },
  {
    number: "13",
    title: "Construction Management",
    description:
      "End-to-end project management covering scheduling, cost control, quality assurance, and contractor coordination from project commencement to handover.",
    tag: "Project Oversight",
  },
  {
    number: "14",
    title: "Energy Management Systems & Audits",
    description:
      "Assessment and optimization of building energy performance through audits, retrofits, and smart system integration.",
    tag: "Energy Efficiency",
  },
  {
    number: "15",
    title: "Maintenance & Facility Management Systems",
    description:
      "Structured preventive and corrective maintenance programs designed to keep buildings operating efficiently long after project completion.",
    tag: "Long-Term Maintenance",
  },
  {
    number: "16",
    title: "Pest Control & Inspection Services",
    description:
      "Professional pest control and pre-occupancy inspection services designed to support safe, compliant, and healthy building environments.",
    tag: "Building Safety",
  },
];


/* =========================================
   REUSABLE SERVICE CARD
========================================= */

function ServiceCard({ service }) {
  return (
    <article className="group relative flex min-h-[310px] flex-col bg-white p-7 transition-all duration-500 hover:bg-[#08284B] sm:min-h-[340px] sm:p-8 lg:p-7 xl:p-8">

      {/* Number and Icon */}
      <div className="flex items-center justify-between">

        <span className="text-4xl font-extrabold tracking-tighter text-[#E9EDF1] transition-colors duration-500 group-hover:text-white/10 sm:text-5xl">
          {service.number}
        </span>

        <span className="flex h-9 w-9 items-center justify-center border border-slate-200 text-lg text-amber-500 transition-all duration-500 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-[#031326]">
          ↗
        </span>

      </div>

      {/* Service Details */}
      <div className="mt-10">

        <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-amber-600 transition-colors duration-500 group-hover:text-amber-500">
          {service.tag}
        </p>

        <h3 className="text-xl font-extrabold leading-tight text-[#17263B] transition-colors duration-500 group-hover:text-white sm:text-2xl">
          {service.title}
        </h3>

        <p className="mt-4 text-xs leading-6 text-slate-500 transition-colors duration-500 group-hover:text-white/70 sm:text-sm sm:leading-7">
          {service.description}
        </p>

      </div>

      {/* Bottom Hover Accent */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />

    </article>
  );
}


/* =========================================
   SERVICES PAGE
========================================= */

export default function Services() {
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* =========================================
          HERO SECTION
      ========================================== */}

      <section className="relative flex min-h-[520px] overflow-hidden bg-slate-950 sm:min-h-[600px] lg:min-h-[calc(85vh-110px)] lg:items-center">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Image.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031326]/95 via-[#031326]/80 to-[#031326]/35" />

        <div className="absolute inset-0 bg-slate-950/20" />

        <Container>
          <div className="relative z-10 flex min-h-[520px] items-center py-24 sm:min-h-[600px] lg:min-h-[calc(85vh-110px)] lg:py-32">

            <div className="max-w-3xl">

              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-amber-500 sm:text-xs">
                WHAT WE OFFER
              </p>

              <h1 className="text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Our
                <br />
                <span className="text-amber-500">
                  Services.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                We provide a comprehensive suite of design,
                construction, and facility services tailored
                to meet the full life cycle needs of every
                client and project.
              </p>

              <a
                href="#our-services"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-4 bg-amber-500 px-6 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-950 transition-colors duration-300 hover:bg-amber-400"
              >
                Explore Our Services
                <span className="text-base">↓</span>
              </a>

            </div>

          </div>
        </Container>

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      </section>


      {/* =========================================
          SERVICES INTRODUCTION
      ========================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <Container>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-20">

            {/* Section Heading */}
            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 sm:text-xs">
                WHAT WE DO
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-[#17263B] sm:text-5xl lg:text-6xl">
                Complete Solutions.
                <br />
                <span className="text-amber-500">
                  Built Around You.
                </span>
              </h2>

            </div>

            {/* Introduction */}
            <div className="max-w-xl lg:pb-2">

              <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                At Blue Dragon Design & Construction, we bring
                together expertise, creativity, and technical
                precision to deliver reliable construction
                solutions. From initial planning and design to
                construction, renovation, and finishing, our
                services are designed to support every stage
                of your project.
              </p>

            </div>

          </div>

        </Container>

      </section>


      {/* =========================================
          SERVICES GRID - PART 1
          SERVICES 01-08
      ========================================== */}

      <section
        id="our-services"
        className="scroll-mt-20 bg-[#F5F6F8] py-20 sm:py-24 lg:py-28"
      >

        <Container>

          {/* Section Header */}
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-slate-200 pb-8 sm:mb-16 sm:flex-row sm:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 sm:text-xs">
                OUR EXPERTISE
              </p>

              <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight text-[#17263B] sm:text-4xl lg:text-5xl">
                What We Do
                <span className="text-amber-500">.</span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-500">
              Explore our range of professional services,
              thoughtfully designed to bring your vision
              to life.
            </p>

          </div>

          {/* First Eight Services */}
          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">

            {services.slice(0, 8).map((service) => (
              <ServiceCard
                key={service.number}
                service={service}
              />
            ))}

          </div>

        </Container>

      </section>


      {/* =========================================
          SERVICES GRID - PART 2
          SERVICES 09-16
      ========================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <Container>

          {/* Continued Section Header */}
          <div className="mb-12 grid gap-8 border-b border-slate-200 pb-10 sm:mb-16 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-amber-600 sm:text-xs">
                CONTINUED
              </p>

              <h2 className="mt-4 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-[#17263B] sm:text-5xl lg:text-6xl">
                Our
                <br />
                <span className="text-amber-500">
                  Services.
                </span>
              </h2>

            </div>

            <div className="max-w-xl lg:pb-2">

              <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                From sustainability consulting to pest control,
                our expanded service range means Blue Dragon can
                be your single partner across every phase of a
                building's life cycle.
              </p>

            </div>

          </div>

          {/* Additional Eight Services */}
          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">

            {services.slice(8, 16).map((service) => (
              <ServiceCard
                key={service.number}
                service={service}
              />
            ))}

          </div>

        </Container>

      </section>


      {/* =========================================
          WHY CHOOSE US
      ========================================== */}

      <section className="relative overflow-hidden bg-[#04182D] py-20 sm:py-24 lg:py-28">

        {/* Decorative Background */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/5" />

        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/5" />

        <Container>

          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

            {/* Left Content */}
            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500 sm:text-xs">
                THE BLUE DRAGON DIFFERENCE
              </p>

              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                More Than
                <br />
                Construction.
                <br />
                <span className="text-amber-500">
                  A Commitment.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                Every project deserves thoughtful planning,
                quality workmanship, and dependable execution.
                We take pride in delivering solutions that
                balance functionality, durability, and design
                excellence.
              </p>

              <a
                href="/about"
                className="mt-8 inline-flex min-h-[48px] items-center gap-4 border border-amber-500 px-6 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-500 transition-all duration-300 hover:bg-amber-500 hover:text-[#031326]"
              >
                Learn About Us
                <span className="text-base">→</span>
              </a>

            </div>


            {/* Right Content - Principles */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">

              {[
                {
                  number: "01",
                  title: "Quality",
                  description:
                    "Excellence in every detail and every build.",
                },
                {
                  number: "02",
                  title: "Integrity",
                  description:
                    "Honest communication and transparent service.",
                },
                {
                  number: "03",
                  title: "Innovation",
                  description:
                    "Modern solutions for evolving project needs.",
                },
                {
                  number: "04",
                  title: "Reliability",
                  description:
                    "Dependable workmanship from start to finish.",
                },
              ].map((item) => (

                <div
                  key={item.number}
                  className="border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-amber-500/50 hover:bg-white/[0.07] sm:p-7"
                >

                  <span className="text-xs font-bold tracking-widest text-amber-500">
                    {item.number}
                  </span>

                  <h3 className="mt-7 text-lg font-bold text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/55 sm:text-sm">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </Container>

      </section>


      {/* =========================================
          CALL TO ACTION
      ========================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <Container>

          <div className="relative overflow-hidden bg-[#F5F6F8] px-7 py-14 text-center sm:px-12 sm:py-20 lg:px-20">

            {/* Decorative Accent */}
            <div className="absolute left-0 top-0 h-full w-1.5 bg-amber-500" />

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 sm:text-xs">
              LET'S BUILD SOMETHING GREAT
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-bold leading-tight tracking-tight text-[#17263B] sm:text-4xl lg:text-5xl">
              Have a Project in Mind?
              <br />
              <span className="text-amber-500">
                Let's Make It Happen.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Whether you're planning a new build, improving
              an existing property, or transforming an interior
              space, Blue Dragon is ready to help bring your
              vision to life.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex min-h-[50px] items-center justify-center gap-5 bg-[#08284B] px-8 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-amber-500 hover:text-[#031326]"
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
