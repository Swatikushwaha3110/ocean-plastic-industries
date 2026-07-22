import img1 from "../../assets/images/img1.jpg";

const Hero = () => {
  return (
    <section className="bg-[#eef7ff]">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-4">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            <p className="text-[#73B62C] font-semibold uppercase tracking-wider mb-3 text-sm sm:text-base">
              Premium Quality
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0B4F9C] leading-tight mb-5">
              Plastic Products
              <br />
              For{" "}
              <span className="text-[#73B62C]">
                Every Need
              </span>
            </h1>

            <p className="text-gray-600 leading-7 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 mb-8">
              Wide range of durable, reliable and eco-friendly plastic
              products for home, industry and commercial use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="bg-[#0B4F9C] hover:bg-blue-800 transition text-white px-7 py-3 rounded-md font-medium">
                Shop Now
              </button>

              <button className="border border-[#73B62C] text-[#73B62C] hover:bg-[#73B62C] hover:text-white transition px-7 py-3 rounded-md font-medium">
                Explore Categories
              </button>

            </div>

          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">

            <img
              src={img1}
              alt="Plastic Products"
              className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[520px] h-auto object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;