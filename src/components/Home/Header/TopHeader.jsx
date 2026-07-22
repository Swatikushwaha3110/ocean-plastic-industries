import { FaPhoneAlt, FaEnvelope, FaTruck } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";

const TopHeader = () => {
  return (
    <div className="bg-[#f5f5f5] border-b border-gray-200 text-[13px] text-gray-600">

      <div className="max-w-7xl mx-auto px-4">

        <div className="hidden lg:flex items-center justify-between h-10">

          {/* Left */}
          <div className="flex items-center gap-6">

            <span>Welcome to Ocean Plastic Industries</span>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <FaPhoneAlt className="text-orange-500 text-xs" />
              +91 98765 43210
            </a>

            <a
              href="mailto:sales@oceanplastic.com"
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <FaEnvelope className="text-orange-500 text-xs" />
              sales@oceanplastic.com
            </a>

          </div>

          {/* Right */}

          <div className="flex items-center gap-6">

            <span className="flex items-center gap-2">
              <FaTruck className="text-orange-500 text-xs" />
              Free Delivery On Orders Above ₹5,000
            </span>

            <span className="flex items-center gap-2">
              <HiDocumentText className="text-orange-500 text-sm" />
              GST Invoice Available
            </span>

          </div>

        </div>

        {/* Mobile + Tablet */}

        <div className="flex lg:hidden justify-center items-center py-2 text-center">
          <span className="flex items-center gap-2">
            <FaTruck className="text-orange-500 text-xs" />
            Free Delivery On Orders Above ₹5,000
          </span>
        </div>

      </div>

    </div>
  );
};

export default TopHeader;