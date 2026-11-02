
import Container from "../components/Container";

/* =========================================
   CONTACT INFORMATION
========================================= */

const contactDetails = [
  {
    number: "01",
    label: "OUR LOCATION",
    title: "Visit Our Office",
    value: "Cebu City, Philippines",
    description: "Contact us for office directions and appointments.",
    icon: "⌖",
  },
  {
    number: "02",
    label: "PHONE INQUIRIES",
    title: "Give Us a Call",
    value: "Add Official Phone Number",
    description: "Speak with our team about your project.",
    icon: "☎",
  },
  {
    number: "03",
    label: "EMAIL INQUIRIES",
    title: "Send Us an Email",
    value: "Add Official Email Address",
    description: "Send your questions and project requirements.",
    icon: "✉",
  },
  {
    number: "04",
    label: "BUSINESS HOURS",
    title: "We're Available",
    value: "Monday – Saturday",
    description: "Add your official business operating hours.",
    icon: "◷",
  },
];


/* =========================================
   REUSABLE CONTACT INFORMATION CARD
========================================= */

function ContactCard({ item }) {
  return (
    <div className="group border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-500 hover:shadow-xl sm:p-7">

      <div className="flex items-center justify-between">

        <span className="text-3xl font-extrabold tracking-tighter text-[#E9EDF1] transition-colors duration-500 group-hover:text-amber-500">
          {item.number}
        </span>

        <span className="flex h-11 w-11 items-center justify-center border border-slate-200 text-2xl text-amber-500 transition-all duration-500 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-[#04182D]">
          {item.icon}
        </span>

      </div>

      <div className="mt-8">

        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-600">
          {item.label}
        </p>

        <h3 className="mt-3 text-xl font-extrabold text-[#17263B] sm:text-2xl">
          {item.title}
        </h3>

        <p className="mt-3 break-words text-sm font-semibold leading-6 text-[#08284B]">
          {item.value}
        </p>

        <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
          {item.description}
        </p>

      </div>

      <div className="mt-7 h-[2px] w-10 bg-amber-500 transition-all duration-500 group-hover:w-full" />

    </div>
  );
}


/* =========================================
   CONTACT PAGE
========================================= */

export default function Contact() {
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
                GET IN TOUCH
              </p>

              <h1 className="text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Let's Build
                <br />
                <span className="text-amber-500">
                  Something Together.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                Have a project in mind? Whether you're planning
                a new construction, renovation, or commercial
                development, our team is ready to help turn
                your vision into reality.
              </p>

              <a
                href="#contact-information"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-4 bg-amber-500 px-6 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-950 transition-colors duration-300 hover:bg-amber-400"
              >
                Contact Our Team
                <span className="text-base">↓</span>
              </a>

            </div>

          </div>
        </Container>

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      </section>


      {/* =========================================
          CONTACT INTRODUCTION
      ========================================== */}

      <section
        id="contact-information"
        className="scroll-mt-20 bg-white py-20 sm:py-24 lg:py-28"
      >

        <Container>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-20">

            {/* Heading */}
            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 sm:text-xs">
                WE'D LOVE TO HEAR FROM YOU
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-[#17263B] sm:text-5xl lg:text-6xl">
                Let's Start a
                <br />
                <span className="text-amber-500">
                  Conversation.
                </span>
              </h2>

            </div>

            {/* Description */}
            <div className="max-w-xl lg:pb-2">

              <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Every successful project begins with a
                conversation. Tell us about your ideas,
                requirements, and goals. Our team will be
                happy to discuss how Blue Dragon Design &
                Construction can help bring your project
                to life.
              </p>

            </div>

          </div>


          {/* Contact Information Cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">

            {contactDetails.map((item) => (
              <ContactCard
                key={item.number}
                item={item}
              />
            ))}

          </div>

        </Container>

      </section>


      {/* =========================================
          CONTACT FORM SECTION
      ========================================== */}

      <section
        id="send-inquiry"
        className="bg-[#F5F6F8] py-20 sm:py-24 lg:py-28"
      >

        <Container>

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            {/* Left Information */}
            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 sm:text-xs">
                PROJECT INQUIRIES
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-[#17263B] sm:text-5xl lg:text-6xl">
                Tell Us About
                <br />
                <span className="text-amber-500">
                  Your Project.
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Share a few details about your project and
                what you're looking to achieve. Whether it's
                a new build, renovation, or specialized
                construction service, we'd love to hear
                from you.
              </p>


              {/* Supporting Information */}
              <div className="mt-10 space-y-6">

                <div className="flex gap-4">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#08284B] text-lg text-amber-500">
                    ✓
                  </span>

                  <div>
                    <h3 className="text-sm font-bold text-[#17263B]">
                      Personalized Assistance
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      Discuss your specific requirements
                      with our team.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#08284B] text-lg text-amber-500">
                    ✓
                  </span>

                  <div>
                    <h3 className="text-sm font-bold text-[#17263B]">
                      Comprehensive Solutions
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      Explore services tailored to your
                      construction and development needs.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#08284B] text-lg text-amber-500">
                    ✓
                  </span>

                  <div>
                    <h3 className="text-sm font-bold text-[#17263B]">
                      Client-Focused Approach
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      We value clear communication and
                      thoughtful project planning.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Right Contact Form */}
            <div className="bg-white p-6 shadow-sm sm:p-10 lg:p-12">

              <div className="mb-8 border-b border-slate-200 pb-7">

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-amber-600">
                  SEND US A MESSAGE
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-[#17263B] sm:text-3xl">
                  Project Inquiry
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
                  Fill out the form below and tell us
                  how we can assist you.
                </p>

              </div>


              <form
                action="mailto:YOUR_EMAIL@example.com"
                method="POST"
                encType="text/plain"
                className="space-y-6"
              >

                {/* Name and Email */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#17263B]"
                    >
                      Full Name <span className="text-amber-600">*</span>
                    </label>

                    <input
                      id="fullName"
                      name="Full Name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="min-h-[50px] w-full border border-slate-200 bg-[#F9FAFB] px-4 text-sm text-[#17263B] outline-none transition-all placeholder:text-slate-400 focus:border-amber-500 focus:bg-white"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#17263B]"
                    >
                      Email Address <span className="text-amber-600">*</span>
                    </label>

                    <input
                      id="email"
                      name="Email Address"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="min-h-[50px] w-full border border-slate-200 bg-[#F9FAFB] px-4 text-sm text-[#17263B] outline-none transition-all placeholder:text-slate-400 focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                </div>


                {/* Phone and Subject */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#17263B]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="Phone Number"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="min-h-[50px] w-full border border-slate-200 bg-[#F9FAFB] px-4 text-sm text-[#17263B] outline-none transition-all placeholder:text-slate-400 focus:border-amber-500 focus:bg-white"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#17263B]"
                    >
                      Inquiry Type <span className="text-amber-600">*</span>
                    </label>

                    <select
                      id="subject"
                      name="Inquiry Type"
                      required
                      defaultValue=""
                      className="min-h-[50px] w-full border border-slate-200 bg-[#F9FAFB] px-4 text-sm text-slate-600 outline-none transition-all focus:border-amber-500 focus:bg-white"
                    >
                      <option value="" disabled>
                        Select an inquiry
                      </option>

                      <option value="Design and Build">
                        Design & Build
                      </option>

                      <option value="New Construction">
                        New Construction
                      </option>

                      <option value="Renovation and Remodeling">
                        Renovation & Remodeling
                      </option>

                      <option value="Interior Fit-Out">
                        Interior Fit-Out
                      </option>

                      <option value="Commercial Projects">
                        Commercial Projects
                      </option>

                      <option value="Other Services">
                        Other Services
                      </option>

                    </select>
                  </div>

                </div>


                {/* Project Location */}
                <div>

                  <label
                    htmlFor="location"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#17263B]"
                  >
                    Project Location
                  </label>

                  <input
                    id="location"
                    name="Project Location"
                    type="text"
                    placeholder="City or project address"
                    className="min-h-[50px] w-full border border-slate-200 bg-[#F9FAFB] px-4 text-sm text-[#17263B] outline-none transition-all placeholder:text-slate-400 focus:border-amber-500 focus:bg-white"
                  />

                </div>


                {/* Message */}
                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#17263B]"
                  >
                    Project Details <span className="text-amber-600">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="Project Details"
                    rows="5"
                    required
                    placeholder="Tell us more about your project, requirements, and expectations..."
                    className="w-full resize-y border border-slate-200 bg-[#F9FAFB] px-4 py-4 text-sm text-[#17263B] outline-none transition-all placeholder:text-slate-400 focus:border-amber-500 focus:bg-white"
                  />

                </div>


                {/* Submit Button */}
                <button
                  type="submit"
                  className="group inline-flex min-h-[52px] w-full items-center justify-center gap-4 bg-[#08284B] px-7 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-amber-500 hover:text-[#031326] sm:w-auto"
                >
                  Send Your Inquiry

                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </button>

                <p className="text-[10px] leading-5 text-slate-400">
                  Fields marked with an asterisk (*) are required.
                </p>

              </form>

            </div>

          </div>

        </Container>

      </section>


      {/* =========================================
          OFFICE LOCATION SECTION
      ========================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <Container>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

            {/* Location Content */}
            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 sm:text-xs">
                FIND US
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-[#17263B] sm:text-5xl lg:text-6xl">
                Let's Meet
                <br />
                <span className="text-amber-500">
                  In Person.
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                We welcome opportunities to discuss your
                construction and design requirements.
                Get in touch with our team to arrange
                an appointment and learn more about
                our services.
              </p>

              <div className="mt-9 flex items-start gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#08284B] text-2xl text-amber-500">
                  ⌖
                </div>

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-600">
                    OFFICE LOCATION
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-[#17263B]">
                    Blue Dragon Design & Construction
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Cebu City, Philippines
                  </p>

                </div>

              </div>

            </div>


            {/* Location Visual */}
            <div className="relative pl-4 pb-4 sm:pl-8 sm:pb-8">

              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#04182D]">

                <img
                  src="/images/Image.jpg"
                  alt="Blue Dragon Design and Construction architectural background"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-[#04182D]/60" />

                <div className="relative z-10 px-6 text-center">

                  <span className="text-5xl text-amber-500">
                    ⌖
                  </span>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500">
                    BLUE DRAGON
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold uppercase text-white sm:text-3xl">
                    Design & Construction
                  </h3>

                  <p className="mt-3 text-xs tracking-widest text-white/65">
                    CEBU CITY, PHILIPPINES
                  </p>

                </div>

              </div>

              <div className="absolute -right-2 -top-3 -z-10 h-24 w-24 bg-amber-500 sm:-right-4 sm:-top-5 sm:h-32 sm:w-32" />

            </div>

          </div>

        </Container>

      </section>


      {/* =========================================
          FINAL CALL TO ACTION
      ========================================== */}

      <section className="relative overflow-hidden bg-[#04182D] py-20 sm:py-24 lg:py-28">

        {/* Decorative Elements */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/5" />

        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/5" />

        <Container>

          <div className="relative z-10 mx-auto max-w-3xl text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500 sm:text-xs">
              YOUR VISION, OUR COMMITMENT
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Every Great Project
              <br />
              Starts With a
              <span className="text-amber-500">
                Conversation.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              Let's work together to create spaces that
              inspire, perform, and stand the test of time.
              Blue Dragon Design & Construction is ready
              to help you take the next step.
            </p>

            <a
              href="#send-inquiry"
              className="mt-9 inline-flex min-h-[50px] items-center justify-center gap-5 bg-amber-500 px-8 text-[10px] font-bold uppercase tracking-[0.15em] text-[#031326] transition-all duration-300 hover:bg-amber-400"
            >
              Start a Conversation
              <span className="text-base">→</span>
            </a>

          </div>

        </Container>

      </section>

    </main>
  );
}
