import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white relative overflow-hidden">

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* HERO */}
      <div className="relative z-10 max-w-4xl mx-auto pt-28 sm:pt-40 pb-20 sm:pb-24 px-6">

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Image
            src="/pranay1.png"
            alt="Pranay"
            width={64}
            height={64}
            className="rounded-full border border-white/20 self-start sm:self-auto"
            draggable={false}
          />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Pranay Srivastava
          </h1>
        </div>

        <p className="text-gray-400 mt-4 text-lg">
          Making products people actually use
        </p>

        <p className="text-gray-500 mt-4 max-w-xl leading-relaxed">
          I build simple websites and apps that solve real problems.
          No overthinking. Just shipping things that work.
        </p>

        {/* links */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 text-sm">
          <a
            href="mailto:srivastavapranay04@gmail.com"
            className="bg-white text-black px-5 py-2 rounded-full font-medium hover:opacity-80 transition"
          >
            Contact
          </a>

          <a
            href="https://github.com/Pranay-Builds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://instagram.com/prnysrivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="https://x.com/prnysrivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            Twitter
          </a>

          <a
            href="/posts"
            className="text-gray-400 hover:text-white transition"
          >
            Writing
          </a>
        </div>
      </div>


      {/* ABOUT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-24">

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur">

          <p className="text-sm text-gray-400 mb-3 tracking-wide">
            ABOUT
          </p>

          <p className="text-gray-300 leading-relaxed">
            I'm a young entrepreneur from India
            <br></br>
            I care about building things that feel simple and useful.
            <br /><br />
            Most of my time goes into building websites and apps that solve real problems, and learning product design along the way.
            <br /><br />
            The goal is straightforward, <span className="text-white font-medium">
              ship useful products and improve them in public
            </span>.
          </p>

        </div>

      </div>

      {/* CURRENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-24">

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur">

          <p className="text-sm text-gray-400 mb-3 tracking-wide">
            CURRENTLY
          </p>

          <div className="space-y-3 text-gray-300">

            <div className="flex items-center gap-3">
              
              Building Curio
            </div>

            <div className="flex items-center gap-3">
            
              Growing For Real
            </div>

            <div className="flex items-center gap-3">
          
              Learning how to build better products
            </div>

            <div className="flex items-center gap-3">
             
              Shipping products every 1–2 weeks
            </div>

          </div>

        </div>

      </div>


      {/* PROJECTS */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-24">

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Projects
        </h2>

        <div className="mt-8 space-y-4">

          {/* Project Card */}
          <a
            href="https://getfr.link"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
          >

            {/* logo */}
            <div className="shrink-0">
              <Image
                src="/fr_logo.jpg"
                width={44}
                height={44}
                alt="For Real"
                className="rounded-lg border border-white/10"
                draggable={false}
              />
            </div>

            {/* content */}
            <div className="flex flex-col">

              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-medium group-hover:text-white transition">
                  For Real - anonymous q&a (Launched 4 June 2026)
                </h3>
              </div>

              <p className="text-gray-500 text-sm">Co Founder & Chief Technical Officer</p>

              <p className="text-sm text-gray-400 mt-1 leading-relaxed max-w-xl">
                A social platform that helps people get honest & unfiltered answers from their friends through a simple shareable link.
              </p>

              <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                <span>Anonymous social</span>
                <span>•</span>
                <span>Early stage</span>
              </div>

            </div>

          </a>


          {/* COMING SOON */}
          <div className="mt-10">

            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              Coming Soon
            </h3>

            <div className="space-y-4">

              <div className="p-5 bg-white/5 border border-white/10 rounded-xl">

                <h3 className="text-lg font-medium">
                  Curio
                </h3>

                <p className="text-gray-500 text-sm">Co Founder & Chief Executive Officer</p>

                <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                  A learning platform designed to make studying feel less like work through personalization and conversation experiences.
                </p>

                <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                  <span>Education</span>
                  <span>•</span>
                  <span>In Development (Launching Very Soon)</span>
                </div>

              </div>


            </div>

          </div>
        </div>
      </div>


      <div className="relative z-10 text-center py-8 text-sm text-gray-400">
        <a href="mailto:srivastavapranay04@gmail.com" className="underline">srivastavapranay04@gmail.com</a>
        <p className="mt-2 text-gray-500">
          Open to collaboration, interesting ideas, or simply saying hello.
        </p>
      </div>



      {/* FOOTER */}
      <div className="relative z-10 text-center py-8 text-sm text-gray-600">
        © {new Date().getFullYear()} Pranay Srivastava
      </div>

    </div>
  );
}