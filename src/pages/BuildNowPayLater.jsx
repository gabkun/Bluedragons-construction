
import { useMemo, useState } from "react";
import Container from "../components/Container";

const finishes = [
  {
    id: "rough",
    image: "/images/rough-finish.jpg",
    title: "Rough Finish",
    minRate: 20000,
    maxRate: 25000,
    description: "A practical starting point for your construction project.",
    features: [
      "Concrete wall & floor finish",
      "No ceiling / windows",
      "No doors",
      "No cabinetry & fixtures",
    ],
  },
  {
    id: "standard",
    image: "/images/standard-finish.jpg",
    title: "Standard Finish",
    minRate: 30000,
    maxRate: 35000,
    description: "A comfortable home with essential finishes and fixtures.",
    features: [
      "Quality roof & wooden doors",
      "Basic paint & ceramic tiles",
      "Jalousie windows",
      "Basic kitchen cabinetry",
    ],
  },
  {
    id: "elegant",
    image: "/images/elegant-finish.jpg",
    title: "Elegant Finish",
    minRate: 40000,
    maxRate: 45000,
    description: "Enhanced materials and refined interior finishes.",
    features: [
      "Quality roof & wooden doors",
      "Quality paint & ceramic tiles",
      "Stained-glass windows",
      "Quality cabinetry & fixtures",
    ],
  },
  {
    id: "luxury",
    image: "/images/luxury-finish.jpg",
    title: "Luxury Finish",
    minRate: 60000,
    maxRate: null,
    description: "Premium materials and customized architectural details.",
    features: [
      "Textured / premium walls",
      "Porcelain or solid wood flooring",
      "Customized windows & doors",
      "Premium cabinetry & fixtures",
    ],
  },
];

// ============================================
// FINANCING CONFIGURATION
// Update these values based on your actual
// approved Build Now, Pay Later arrangement.
// ============================================

const FINANCING = {
  annualInterestRate: 0, // Example: 0.08 = 8% annual interest
  defaultDownPayment: 20,
  availableTerms: [12, 18, 24, 36, 48, 60],
};

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(amount);

const calculateMonthlyPayment = (principal, annualRate, months) => {
  if (principal <= 0 || months <= 0) return 0;

  const monthlyRate = annualRate / 12;

  if (monthlyRate === 0) {
    return principal / months;
  }

  return (
    (principal * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -months))
  );
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black uppercase leading-tight text-[#04182D] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default function BuildNowPayLater() {
  const [selectedFinish, setSelectedFinish] = useState("standard");
  const [squareMeters, setSquareMeters] = useState(100);
  const [downPaymentPercent, setDownPaymentPercent] = useState(
    FINANCING.defaultDownPayment
  );
  const [term, setTerm] = useState(36);

  const selected = finishes.find(
    (finish) => finish.id === selectedFinish
  );

  const estimate = useMemo(() => {
    const minimumCost = selected.minRate * squareMeters;
    const maximumCost = selected.maxRate
      ? selected.maxRate * squareMeters
      : null;

    const minimumDownPayment =
      minimumCost * (downPaymentPercent / 100);

    const maximumDownPayment = maximumCost
      ? maximumCost * (downPaymentPercent / 100)
      : null;

    const minimumBalance = minimumCost - minimumDownPayment;

    const maximumBalance = maximumCost
      ? maximumCost - maximumDownPayment
      : null;

    const minimumMonthly = calculateMonthlyPayment(
      minimumBalance,
      FINANCING.annualInterestRate,
      term
    );

    const maximumMonthly = maximumBalance
      ? calculateMonthlyPayment(
          maximumBalance,
          FINANCING.annualInterestRate,
          term
        )
      : null;

    return {
      minimumCost,
      maximumCost,
      minimumDownPayment,
      maximumDownPayment,
      minimumBalance,
      maximumBalance,
      minimumMonthly,
      maximumMonthly,
    };
  }, [selected, squareMeters, downPaymentPercent, term]);

  const handleSquareMeterChange = (value) => {
    const number = Number(value);

    if (Number.isNaN(number)) return;

    setSquareMeters(Math.min(1000, Math.max(20, number)));
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* HERO */}
      <section className="relative flex min-h-[470px] items-center overflow-hidden bg-[#04182D]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Image.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031326]/95 via-[#04182D]/85 to-[#04182D]/55" />

        <Container>
          <div className="relative z-10 max-w-3xl py-24 text-white">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
              Build Your Future
            </p>

            <h1 className="text-4xl font-black uppercase leading-[1.1] sm:text-5xl lg:text-6xl">
              Build Now.
              <span className="block text-amber-400">
                Pay Later.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
              Plan your dream home with a construction cost estimate
              based on your preferred finish and floor area. Explore
              possible payment arrangements before starting your project.
            </p>

            <a
              href="#cost-calculator"
              className="mt-9 inline-flex items-center justify-center bg-amber-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#04182D] transition hover:bg-amber-400"
            >
              Calculate My Project
            </a>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-[#F5F6F8] py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Plan With Confidence"
            title="Your Project, Your Budget"
            description="Choose your preferred construction finish, set your desired floor area, and see an estimated project cost with a sample payment breakdown."
          />

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose Your Finish",
                text: "Select the construction finish that matches your vision and budget.",
              },
              {
                number: "02",
                title: "Set Your Floor Area",
                text: "Adjust the dedicated floor area in square meters.",
              },
              {
                number: "03",
                title: "View Your Estimate",
                text: "See your estimated project cost and possible installment breakdown.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border border-gray-200 bg-white p-7"
              >
                <span className="text-3xl font-black text-amber-500">
                  {item.number}
                </span>
                <h3 className="mt-5 text-lg font-extrabold uppercase text-[#04182D]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CALCULATOR */}
      <section
        id="cost-calculator"
        className="scroll-mt-24 bg-white py-16 sm:py-24"
      >
        <Container>
          <SectionHeading
            eyebrow="Construction Cost Calculator"
            title="Estimate Your Construction"
            description="Customize your project details below to calculate an estimated construction budget and payment schedule."
          />

          <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            {/* LEFT: INPUTS */}
            <div className="space-y-9">
              {/* FINISH SELECTION */}
              <div>
                <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
                      Step 01
                    </p>
                    <h3 className="mt-2 text-xl font-black uppercase text-[#04182D]">
                      Select Your Finish
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    Choose one finish
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {finishes.map((finish) => {
                    const isSelected =
                      selectedFinish === finish.id;

                    return (
                      <button
                        type="button"
                        key={finish.id}
                        onClick={() => setSelectedFinish(finish.id)}
                        aria-pressed={isSelected}
                        className={`group overflow-hidden border text-left transition ${
                          isSelected
                            ? "border-amber-500 ring-2 ring-amber-500"
                            : "border-gray-200 hover:border-amber-400"
                        }`}
                      >
                        <div className="relative h-40 overflow-hidden bg-gray-200">
                          <img
                            src={finish.image}
                            alt={finish.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          {isSelected && (
                            <span className="absolute right-3 top-3 bg-amber-500 px-3 py-1 text-xs font-bold uppercase text-[#04182D]">
                              Selected
                            </span>
                          )}
                        </div>

                        <div className="p-5">
                          <h4 className="font-black uppercase text-[#04182D]">
                            {finish.title}
                          </h4>

                          <p className="mt-2 text-sm font-bold text-amber-600">
                            {finish.maxRate
                              ? `${formatCurrency(finish.minRate)} – ${formatCurrency(finish.maxRate)} / SQM`
                              : `${formatCurrency(finish.minRate)}+ / SQM`}
                          </p>

                          <p className="mt-3 text-xs leading-6 text-gray-500">
                            {finish.description}
                          </p>

                          <ul className="mt-4 space-y-2">
                            {finish.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex gap-2 text-xs text-gray-600"
                              >
                                <span className="font-bold text-amber-500">
                                  ✓
                                </span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SQUARE METER SLIDER */}
              <div className="border border-gray-200 bg-[#F8F9FA] p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
                      Step 02
                    </p>
                    <h3 className="mt-2 text-xl font-black uppercase text-[#04182D]">
                      Dedicated Floor Area
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Adjust your desired floor area.
                    </p>
                  </div>

                  <div className="flex items-center border border-gray-300 bg-white">
                    <input
                      type="number"
                      min="20"
                      max="1000"
                      step="1"
                      value={squareMeters}
                      onChange={(e) =>
                        handleSquareMeterChange(e.target.value)
                      }
                      className="w-24 bg-transparent px-3 py-3 text-right text-xl font-black text-[#04182D] outline-none"
                      aria-label="Floor area in square meters"
                    />
                    <span className="pr-3 text-sm font-bold text-gray-500">
                      SQM
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <input
                    type="range"
                    min="20"
                    max="1000"
                    step="5"
                    value={squareMeters}
                    onChange={(e) =>
                      setSquareMeters(Number(e.target.value))
                    }
                    className="h-2 w-full cursor-pointer accent-amber-500"
                    aria-label="Adjust floor area"
                  />

                  <div className="mt-3 flex justify-between text-xs font-semibold text-gray-500">
                    <span>20 SQM</span>
                    <span>500 SQM</span>
                    <span>1,000 SQM</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-5">
                  <span className="text-sm text-gray-600">
                    Selected floor area
                  </span>
                  <span className="text-2xl font-black text-[#04182D]">
                    {squareMeters.toLocaleString("en-PH")}{" "}
                    <span className="text-sm font-bold text-amber-500">
                      SQM
                    </span>
                  </span>
                </div>
              </div>

              {/* FINANCING SETTINGS */}
              <div className="border border-gray-200 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
                  Step 03
                </p>
                <h3 className="mt-2 text-xl font-black uppercase text-[#04182D]">
                  Payment Arrangement
                </h3>

                {/* DOWN PAYMENT */}
                <div className="mt-7">
                  <div className="flex items-center justify-between gap-3">
                    <label
                      htmlFor="downPayment"
                      className="text-sm font-bold text-[#04182D]"
                    >
                      Down Payment
                    </label>
                    <span className="text-xl font-black text-amber-600">
                      {downPaymentPercent}%
                    </span>
                  </div>

                  <input
                    id="downPayment"
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={downPaymentPercent}
                    onChange={(e) =>
                      setDownPaymentPercent(Number(e.target.value))
                    }
                    className="mt-4 h-2 w-full cursor-pointer accent-amber-500"
                  />

                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>10%</span>
                    <span>30%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* PAYMENT TERM */}
                <div className="mt-8">
                  <label className="text-sm font-bold text-[#04182D]">
                    Payment Term
                  </label>

                  <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {FINANCING.availableTerms.map((months) => (
                      <button
                        key={months}
                        type="button"
                        onClick={() => setTerm(months)}
                        aria-pressed={term === months}
                        className={`border px-2 py-3 text-sm font-bold transition ${
                          term === months
                            ? "border-amber-500 bg-amber-500 text-[#04182D]"
                            : "border-gray-200 text-gray-600 hover:border-amber-400"
                        }`}
                      >
                        {months}
                        <span className="block text-[10px] font-medium">
                          MONTHS
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: ESTIMATE SUMMARY */}
            <aside className="lg:sticky lg:top-28">
              <div className="overflow-hidden bg-[#04182D] text-white shadow-xl">
                <div className="border-b border-white/10 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                    Your Project Estimate
                  </p>
                  <h3 className="mt-2 text-2xl font-black uppercase">
                    {selected.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    {squareMeters} square meters
                  </p>
                </div>

                <div className="space-y-6 p-6 sm:p-8">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Estimated Construction Cost
                    </p>

                    <p className="mt-2 text-3xl font-black leading-tight text-amber-400 sm:text-4xl">
                      {formatCurrency(estimate.minimumCost)}
                    </p>

                    {estimate.maximumCost ? (
                      <p className="mt-1 text-sm text-gray-300">
                        Up to {formatCurrency(estimate.maximumCost)}
                      </p>
                    ) : (
                      <p className="mt-1 text-sm text-gray-300">
                        Starting estimate; final cost may be higher.
                      </p>
                    )}
                  </div>

                  <div className="border-t border-white/15 pt-5">
                    <p className="mb-4 text-xs font-bold uppercase tracking-wider text-amber-400">
                      Payment Breakdown
                    </p>

                    <div className="space-y-4">
                      <div className="flex justify-between gap-4">
                        <span className="text-sm text-gray-300">
                          Down Payment ({downPaymentPercent}%)
                        </span>
                        <span className="text-right text-sm font-bold">
                          {formatCurrency(
                            estimate.minimumDownPayment
                          )}
                          {estimate.maximumDownPayment && (
                            <span className="block text-xs font-normal text-gray-400">
                              to{" "}
                              {formatCurrency(
                                estimate.maximumDownPayment
                              )}
                            </span>
                          )}
                        </span>
                      </div>

                      <div className="flex justify-between gap-4">
                        <span className="text-sm text-gray-300">
                          Remaining Balance
                        </span>
                        <span className="text-right text-sm font-bold">
                          {formatCurrency(estimate.minimumBalance)}
                          {estimate.maximumBalance && (
                            <span className="block text-xs font-normal text-gray-400">
                              to{" "}
                              {formatCurrency(
                                estimate.maximumBalance
                              )}
                            </span>
                          )}
                        </span>
                      </div>

                      <div className="flex justify-between gap-4">
                        <span className="text-sm text-gray-300">
                          Financing Term
                        </span>
                        <span className="text-sm font-bold">
                          {term} Months
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/15 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Estimated Monthly Payment
                    </p>

                    <p className="mt-2 text-3xl font-black text-amber-400 sm:text-4xl">
                      {formatCurrency(estimate.minimumMonthly)}
                    </p>

                    {estimate.maximumMonthly ? (
                      <p className="mt-1 text-sm text-gray-300">
                        to{" "}
                        {formatCurrency(estimate.maximumMonthly)} / month
                      </p>
                    ) : (
                      <p className="mt-1 text-sm text-gray-300">
                        per month, starting estimate
                      </p>
                    )}
                  </div>

                  <a
                    href={`mailto:YOUR_EMAIL@example.com?subject=${encodeURIComponent(
                      "Build Now Pay Later Inquiry"
                    )}&body=${encodeURIComponent(
                      `Hello Blue Dragon Design & Construction,

I would like to request a quotation.

Finish: ${selected.title}
Floor Area: ${squareMeters} SQM
Estimated Construction Cost: ${formatCurrency(
                        estimate.minimumCost
                      )}${
                        estimate.maximumCost
                          ? ` - ${formatCurrency(estimate.maximumCost)}`
                          : " starting estimate"
                      }
Down Payment: ${downPaymentPercent}%
Payment Term: ${term} months
Estimated Monthly Payment: ${formatCurrency(
                        estimate.minimumMonthly
                      )}${
                        estimate.maximumMonthly
                          ? ` - ${formatCurrency(estimate.maximumMonthly)}`
                          : ""
                      }

Please contact me regarding the project and actual financing terms.`
                    )}`}
                    className="mt-2 flex w-full items-center justify-center bg-amber-500 px-6 py-4 text-center text-sm font-black uppercase tracking-wider text-[#04182D] transition hover:bg-amber-400"
                  >
                    Request Official Quotation
                  </a>

                  <p className="text-center text-[11px] leading-5 text-gray-400">
                    This calculator provides an initial estimate only.
                    Final construction costs and financing terms are
                    subject to site inspection, detailed plans, material
                    specifications, and company approval.
                  </p>
                </div>
              </div>

              <div className="mt-4 border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-bold text-[#04182D]">
                  Important Pricing Note
                </p>
                <p className="mt-2 text-xs leading-6 text-gray-600">
                  Luxury Finish is calculated using a minimum rate of
                  ₱60,000 per sqm. Its final rate is determined by the
                  selected materials, specifications, and project scope.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* DISCLAIMER / CTA */}
      <section className="bg-[#F5F6F8] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-500">
              Let's Build Together
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase text-[#04182D] sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Let our team review your requirements and prepare a
              detailed construction proposal based on your preferred
              design, materials, and budget.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex bg-[#04182D] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-amber-500 hover:text-[#04182D]"
            >
              Talk to Our Team
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
