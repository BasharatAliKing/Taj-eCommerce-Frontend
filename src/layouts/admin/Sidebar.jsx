import {
  ChevronDown,
  ChevronUp,
  Menu,
  Grid, Utensils, Image, ShoppingCart
} from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
const SIDEBAR_ITEMS = [
  {
    name: "Food Categories",
    icon: Grid,
    color: "#6366f1",
    href: "/admin/categories",
  },
  {
    name: "Food Items",
    icon: Utensils,
    color: "#6366f1",
    href: "/admin/foodItems",
  },
  {
    name: "Gallery",
    icon: Image,
    color: "#6366f1",
    href: "/admin/gallery",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    color: "#6366f1",
    href: "/admin/orders",
  },

];
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>
        <nav className="mt-5 flex-grow">
          {SIDEBAR_ITEMS.map((item, index) => (
            <div key={index}>
              {item.children ? (
                <div>
                  <div
                    onClick={() => toggleDropdown(index)}
                    className="flex justify-between items-center  transition-colors cursor-pointer hover:bg-gray-700 p-2 rounded"
                  >
                    <span className="flex gap-2 items-center p-2 text-sm font-medium rounded-lg ">
                      <item.icon
                        size={20}
                        style={{ color: item.color, minWidth: "20px" }}
                      />
                      {item.name}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-4 flex flex-col gap-2 space-y-1 overflow-hidden"
                      >
                        {item.children.map((subItem, subIndex) => (
                        <div className="flex gap-2 items-center hover:bg-gray-700 p-2 rounded">
                          <item.icon
                        size={20}
                        style={{ color: item.color, minWidth: "20px" }}
                      /> 
                      <Link
                         to={subItem.href}
                            key={subIndex}
                            className="cursor-pointer whitespace-nowrap  text-sm"
                          >
                            {subItem.name}
                          </Link>
                        </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={item.href} to={item.href}>
                  <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                    <item.icon
                      size={20}
                      style={{ color: item.color, minWidth: "20px" }}
                    />
                    <AnimatePresence>
                      {isSidebarOpen && (
                        <motion.span
                          className="ml-4 whitespace-nowrap"
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2, delay: 0.3 }}
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};
export default Sidebar;
