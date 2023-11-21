"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((catagory, i) => {
        const handeleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };
        const close = () => setActiveIndex(null);
        const isOpen = i === activeIndex;
        return (
          <div key={catagory.label}>
            <NavItem
              catagory={catagory}
              isAnyOpen={isAnyOpen}
              isOpen={isOpen}
              handelOpen={handeleOpen}
              close={close}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
