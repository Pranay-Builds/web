import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#121212] text-[#ededed] overflow-hidden font-sans antialiased selection:bg-zinc-800 selection:text-white">
      {/* Subtle radial ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent" />

      {/* HERO */}
      <div className="relative z-10 max-w-3xl mx-auto pt-24 sm:pt-32 pb-16 px-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <Image
            src="/pranayyy.png"
            alt="Pranay Srivastava"
            width={72}
            height={72}
            priority
            className="rounded-full border border-zinc-700/60 shadow-inner self-start sm:self-auto object-cover"
            draggable={false}
          />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none text-zinc-100">
            Pranay Srivastava
          </h1>
        </div>

        <p className="text-zinc-400 mt-5 text-lg font-normal">
          Building internet things, one at a time.
        </p>

        <p className="text-zinc-500 mt-3 max-w-xl text-base leading-relaxed">
          I build simple websites and apps that solve real problems.
          No overthinking. Just shipping things that work.
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 mt-8 text-sm">
          <a
            href="mailto:srivastavapranay04@gmail.com"
            className="bg-zinc-100 text-zinc-900 px-5 py-2 rounded-full font-medium hover:bg-white transition-colors duration-200 shadow-sm"
            rel="me noopener noreferrer"
            aria-label="Email Pranay Srivastava"
          >
            Contact
          </a>

          <a
            href="https://github.com/Pranay-Builds"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="Visit Pranay Srivastava's GitHub profile"
            className="text-zinc-400 hover:text-zinc-100 font-medium transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://instagram.com/pranaysrivastava_07"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="Visit Pranay Srivastava's Instagram profile"
            className="text-zinc-400 hover:text-zinc-100 font-medium transition-colors"
          >
            Instagram
          </a>

          <a
            href="https://x.com/prnysrivastava"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="Visit Pranay Srivastava's Twitter profile"
            className="text-zinc-400 hover:text-zinc-100 font-medium transition-colors"
          >
            Twitter
          </a>

          <a
            href="/posts"
            rel="me noopener noreferrer"
            aria-label="View Pranay Srivastava's posts"
            className="text-zinc-400 hover:text-zinc-100 font-medium transition-colors"
          >
            Posts
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <section
        aria-labelledby="about-heading"
        className="relative z-10 max-w-3xl mx-auto px-6 pb-12"
      >
        <div className="p-6 bg-[#1e1e20] border border-zinc-800/80 rounded-2xl shadow-sm">
          <h2 id="about-heading" className="text-xs font-semibold text-zinc-500 mb-4 tracking-widest uppercase">
            ABOUT
          </h2>

          <p className="text-zinc-300 leading-relaxed text-base">
            I'm a young builder from India
            <br />
            I care about building things that feel simple and useful.
            <br /><br />
            Most of my time goes into building websites and apps that solve real problems, and learning product design along the way.
            <br /><br />
            The goal is straightforward,{" "}
            <span className="text-zinc-100 font-medium underline underline-offset-4 decoration-zinc-700">
              ship useful products and improve them in public
            </span>.
          </p>
        </div>
      </section>

      {/* CURRENTLY */}
      <section
        aria-labelledby="currently-heading"
        className="relative z-10 max-w-3xl mx-auto px-6 pb-16"
      >
        <div className="p-6 bg-[#1e1e20] border border-zinc-800/80 rounded-2xl shadow-sm">
          <h2 className="text-xs font-semibold text-zinc-500 mb-4 tracking-widest uppercase">
            CURRENTLY
          </h2>

          <ul className="space-y-3 text-zinc-300 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              Building Curio
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
              Reading books on entrepreneurship, and learning to write better
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
              Trying to grow For Real
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
              Learning how to build better products
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
              Shipping products every 1–2 weeks
            </li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section aria-labelledby="projects-heading" className="relative z-10 max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
          Projects
        </h2>

        <div className="mt-6 space-y-4">
          {/* Active Project Card */}
          <a
            href="https://getfr.link"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 p-5 bg-[#1e1e20] border border-zinc-800/80 rounded-xl hover:border-zinc-700/80 hover:bg-[#232326] transition-all duration-200"
          >
            <div className="shrink-0">
              <Image
                src="/fr_logo.jpg"
                width={44}
                height={44}
                alt="For Real"
                className="rounded-lg border border-zinc-800 object-cover"
                draggable={false}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors">
                  For Real - anonymous q&a
                </h3>
              </div>

              <p className="text-zinc-500 text-xs font-medium mt-0.5">Co Founder & Chief Technical Officer</p>

              <p className="text-sm text-zinc-400 mt-2 leading-relaxed max-w-xl">
                A social platform that helps people get honest & unfiltered answers from their friends through a simple shareable link.
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500">
                <span>Anonymous social</span>
                <span>•</span>
                <span>Early stage</span>
              </div>
            </div>
          </a>

          {/* COMING SOON */}
          <div className="pt-6">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
              Coming Soon
            </h3>

            <div className="p-5 bg-[#1e1e20] border border-zinc-800/80 rounded-xl">
              <h3 className="text-base font-medium text-zinc-200">
                Curio
              </h3>

              <p className="text-zinc-500 text-xs font-medium mt-0.5">Co Founder & Chief Executive Officer</p>

              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                A learning platform designed to make studying feel less like work through personalization and conversation experiences.
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500">
                <span>Education</span>
                <span>•</span>
                <span className="text-amber-500/80 font-medium">In Development (Launching Very Soon)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <div className="relative z-10 text-center py-8 px-6 text-sm">
        <a 
          href="mailto:srivastavapranay04@gmail.com" 
          className="text-zinc-300 hover:text-white underline underline-offset-4 transition-colors font-medium"
        >
          srivastavapranay04@gmail.com
        </a>
        <p className="mt-2 text-zinc-500">
          Open to collaboration, interesting ideas, or simply saying hello.
        </p>
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 text-center py-8 text-xs text-zinc-600">
        © {new Date().getFullYear()} Pranay Srivastava
      </footer>
    </main>
  );
}