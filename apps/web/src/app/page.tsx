export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">Attesta</span>
          <nav className="flex gap-4 text-sm text-zinc-600">
            <a href="#features" className="hover:text-zinc-900">
              Features
            </a>
            <a href="/docs" className="hover:text-zinc-900">
              Docs
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-8 px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Stellar · Soroban
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Academic certificates that anyone can verify on-chain
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
          Attesta issues immutable credentials as Soroban smart-contract records,
          stores metadata on IPFS, and lets employers verify authenticity in
          seconds.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/Skull-Labs/ATTESTA"
            className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
          >
            View monorepo
          </a>
          <a
            href="#features"
            className="rounded-md border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
          >
            How it works
          </a>
        </div>

        <section id="features" className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Issue",
              body: "Directors mint certificates tied to a student Stellar address.",
            },
            {
              title: "Store",
              body: "Images and metadata live on IPFS; hashes are anchored on-chain.",
            },
            {
              title: "Verify",
              body: "Anyone can check authenticity via contract state or public URL.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-zinc-200 bg-white p-5"
            >
              <h2 className="font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.body}
              </p>
            </article>
          ))}
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500">
        Attesta — decentralized credentials on Stellar
      </footer>
    </div>
  );
}
