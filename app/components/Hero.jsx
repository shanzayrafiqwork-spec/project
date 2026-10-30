import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center px-8 md:px-24 py-12 gap-12">
      {/* Left Text Content */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Hi, I am John, <br />
          <span className="text-gray-700">Creative Technologist</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
          sunt nostrud amet.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ff5757] text-white font-medium py-3 px-6 rounded shadow hover:bg-[#e04848] transition-colors"
        >
          Download Resume
        </a>
      </div>

      {/* Right Avatar Image */}
      <div className="relative w-48 h-48 md:w-60 md:h-60 flex-shrink-0">
        <Image
          src="/images/hero-avatar.png"
          alt="Shanzay Rafiq"
          fill
          className="rounded-full object-cover shadow-lg"
          priority
        />
      </div>
    </section>
  );
}