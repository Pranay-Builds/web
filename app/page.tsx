import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/banner.jpg"
          alt="banner"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* HERO */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          Pranay Srivastava
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Builder, Building internet products & systems
        </p>

        <p className="text-gray-500 mt-4 max-w-xl leading-relaxed">
          I build things because I want them to exist
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a
            href="mailto:srivastavapranay04@gmail.com"
            className="bg-white text-black px-5 py-2 rounded-full font-medium hover:scale-105 active:scale-95 transition"
          >
            Contact
          </a>

          <a
            href="https://github.com/Pranay-Builds"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-5 py-2 rounded-full hover:border-white transition"
          >
            Github
          </a>

          <a
            href="https://x.com/prnysrivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition text-sm"
          >
            Twitter
          </a>

          <a
            href="https://instagram.com/prnysrivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition text-sm"
          >
            Instagram
          </a>


          <a
            href="/posts"
            className="text-gray-500 hover:text-white transition text-sm underline"
          >
            posts
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6 items-center">

          {/* Text */}
          <div className="md:col-span-2 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur">
            <p className="text-sm text-orange-400 mb-3 tracking-widest">ABOUT</p>

            <p className="text-lg text-gray-200 leading-relaxed">
              Started building at <span className="text-white font-semibold">11</span>,
              not for fun, but because the tools I wanted didn’t exist
              <br /><br />
              Focused on creating products people actually use.
              Still early. Still building. Still working.
            </p>
          </div>

          {/* Age Card */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-center">
            <p className="text-5xl font-bold">11</p>
            <p className="text-xs tracking-widest mt-2 opacity-80">
              AGE I STARTED BUILDING
            </p>
          </div>

        </div>
      </div>

      {/* PROJECTS */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-32">
        <h2 className="text-2xl font-bold mb-6">What I'm working on</h2>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Project 1 */}
          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition duration-300">
            <div className="flex items-center gap-3">
              <Image
                src="/fr_logo.jpg"
                alt="FR Logo"
                width={42}
                height={42}
                className="rounded-full"
              />
              <h3 className="font-semibold text-lg">FR — For Real</h3>
            </div>

            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Rebuilding anonymous platforms with a focus on trust,
              quality interactions, and better user control.
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition duration-300">
            <h3 className="font-semibold text-lg">OfflinePay</h3>

            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              USSD-based fallback system enabling payments without internet —
              designed for real-world reliability.
            </p>
          </div>

        </div>
      </div>


      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-32">
        <p>other info about me: </p>
        <ul className="mt-4 space-y-2 text-gray-400 text-sm">
          <li>• 13</li>
          <li>• Reading self-improvement & psychology</li>
          <li>• Coding, building products, experimenting</li>
          <li>• Games, music, workouts</li>
          <li>• Thinking in principles, not trends</li>
        </ul>

        <p className="text-gray-500 mt-6 text-sm">
          Open to collaborating with builders & early users
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Pranay Srivastava. All rights reserved.
      </div>
    </div>
  );
}