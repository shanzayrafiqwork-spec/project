import Image from 'next/image';

export default function FeaturedWorks() {
  const works = [
    {
      title: "Designing Dashboards",
      year: "2020",
      category: "Dashboard",
      image: "/images/work-1.png", // Yeh 1st dashboard picture hai
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "Vibrant Portraits of 2020",
      year: "2018",
      category: "Illustration",
      image: "/images/work-2.png", // Yeh 2nd portrait picture hai jo aapne abhi specify ki hai
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "36 Days of Malayalam type",
      year: "2018",
      category: "Typography",
      image: "/images/work-3.png", // Yeh 3rd typography picture hai
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ];

  return (
    <section id="works" className="px-8 md:px-24 py-8">
      <h2 className="text-xl font-normal text-gray-800 mb-8">Featured works</h2>

      <div className="space-y-8">
        {works.map((work, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-100 last:border-none">
            {/* Work Image */}
            <div className="relative w-full md:w-[246px] h-[154px] flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Work Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{work.title}</h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#142850] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {work.year}
                </span>
                <span className="text-gray-500 text-sm font-medium">{work.category}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}