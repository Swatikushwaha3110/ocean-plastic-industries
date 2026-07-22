import categories from "./categoriesData";

const Categories = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#0B4F9C]">
            SHOP BY CATEGORIES
          </h2>

          <div className="w-16 h-1 bg-[#73B62C] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-1">

          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col items-center justify-center h-[140px]"
              >
                <Icon
                  className={`text-3xl mb-3 ${item.color}`}
                />

                <h3 className="text-[15px] font-bold text-center text-black leading-5 px-2">
                {item.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {item.products}
                </p>
              </div>
            );
          })}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">

          <button className="bg-[#0B4F9C] hover:bg-[#083170] text-white px-8 py-3 rounded font-semibold transition">
            VIEW ALL CATEGORIES
          </button>

        </div>

      </div>
    </section>
  );
};

export default Categories;