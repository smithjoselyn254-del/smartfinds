export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-8 text-center text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="max-w-2xl space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          SmartFinds
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Build your next idea with Next.js and Tailwind.
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This app is ready for your next feature. Start editing app/page.tsx to customize it.
        </p>
      </div>
    </main>
  );
}
