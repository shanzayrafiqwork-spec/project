export default function RecentPosts() {
  return (
    <section className="bg-[#edf7fa] py-12 px-8 md:px-24 my-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-normal text-gray-800">Recent posts</h2>
        <a href="#" className="text-[#00a8cc] text-sm hover:underline">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Post 1 */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Making a design system from scratch
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            12 Feb 2020 &nbsp;|&nbsp; Design, Pattern
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
            sunt nostrud amet.
          </p>
        </div>

        {/* Post 2 */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Creating pixel perfect icons in Figma
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            12 Feb 2020 &nbsp;|&nbsp; Figma, Icon Design
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
            sunt nostrud amet.
          </p>
        </div>
      </div>
    </section>
  );
}