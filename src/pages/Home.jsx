import Container from "../components/Container";

export default function Home() {
  return (
    <div>
      {/* =========================================
          HERO SECTION
      ========================================== */}
      <section className="relative overflow-hidden">
        <Container>
          <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center sm:py-24 lg:py-32">
            
            {/* Small Label */}
            <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                Welcome
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Build something{" "}
              <span className="text-gray-500">
                remarkable.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              This is the main introduction of your website. Replace this
              content with your actual company, organization, product, or
              service description.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
              >
                Get Started
              </a>

              <a
                href="/about"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                Learn More
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================
          FEATURE SECTION
      ========================================== */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              A reusable section structure that we can carry across all
              future pages.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Professional"
              description="Clean and professional layouts designed to work across all screen sizes."
            />

            <FeatureCard
              title="Responsive"
              description="The layout automatically adapts from mobile phones to large desktop screens."
            />

            <FeatureCard
              title="Consistent"
              description="Every page uses the same spacing, typography, containers, and design language."
            />
          </div>
        </Container>
      </section>

      {/* =========================================
          CTA SECTION
      ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="rounded-2xl bg-gray-900 px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300">
              This CTA component can be reused on other pages whenever we
              need a strong call-to-action.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}


/* =========================================
   FEATURE CARD
========================================= */

function FeatureCard({ title, description }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
        ✓
      </div>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        {description}
      </p>
    </div>
  );
}