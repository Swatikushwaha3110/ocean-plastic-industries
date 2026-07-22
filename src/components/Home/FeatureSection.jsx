import {
  FaAward,
  FaIndustry,
  FaTruck,
  FaLeaf,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaAward />,
    title: "100% Virgin Material",
    subtitle: "Premium Quality",
  },
  {
    id: 2,
    icon: <FaIndustry />,
    title: "Factory Direct",
    subtitle: "Best Price",
  },
  {
    id: 3,
    icon: <FaTruck />,
    title: "Pan India",
    subtitle: "Fast Delivery",
  },
  {
    id: 4,
    icon: <FaLeaf />,
    title: "Recyclable Products",
    subtitle: "Eco Friendly",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {features.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3"
            >
              <div className="text-[#73B62C] text-3xl">
                {item.icon}
              </div>

              <div>
                <h3 className="font-semibold text-[#0B4F9C] text-sm md:text-base">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-xs md:text-sm">
                  {item.subtitle}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeatureSection;