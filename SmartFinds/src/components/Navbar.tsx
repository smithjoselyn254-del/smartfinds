export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/20 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 text-lg shadow-lg">
            ⭐
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">SmartFinds</h1>
            <p className="text-xs text-emerald-300">Discover • Compare • Shop</p>
          </div>
        </div>

        <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Marketplace</a>
          <a href="#">AI Search</a>
          <a href="#">About</a>
        </nav>

        <button className="rounded-full bg-emerald-500 px-5 py-2 font-semibold text-black transition hover:bg-emerald-400">
          Sign In
        </button>
      </div>
    </header>
  );
}
