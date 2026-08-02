import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur md:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
                SmartFinds
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Find smarter, move faster.
              </h1>
              <p className="mt-4 text-lg text-slate-300 sm:text-xl">
                SmartFinds helps teams discover inventory opportunities, monitor marketplace performance, and act on insights in real time.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-emerald-400"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  View demo
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/70 p-5 text-sm text-slate-300">
              <p className="text-emerald-300">Live snapshot</p>
              <p className="mt-2 text-2xl font-semibold text-white">+24% margin lift</p>
              <p className="mt-2">Across top-performing SKUs and marketplace campaigns.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <h2 className="font-semibold text-white">Inventory intelligence</h2>
              <p className="mt-2 text-sm text-slate-300">Spot gaps, surges, and underperforming products before they impact revenue.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <h2 className="font-semibold text-white">Marketplace analytics</h2>
              <p className="mt-2 text-sm text-slate-300">Track pricing, demand shifts, and performance trends in one place.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <h2 className="font-semibold text-white">Orders & shipping</h2>
              <p className="mt-2 text-sm text-slate-300">Stay on top of fulfillment health and delivery outcomes without switching tools.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
