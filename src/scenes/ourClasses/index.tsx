import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { useAppContext } from "@/context/AppContext";
import HText from "@/shared/HText";
import { ClassType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Class from "./Class";
import useCustomSlider from "@/hooks/useCustomSlider";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];
console.log(classes);

function OurClasses() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const { setSelectedPage } = useAppContext();
  const { showLeftArrow, showRightArrow, slideLeft, slideRight } =
    useCustomSlider({ sliderRef });

  return (
    <section className="w-full bg-primary-100 py-32" id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        onViewportLeave={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              repellendus non vitae provident qui ipsa asperiores ipsam animi,
              dolorem suscipit, fuga iste voluptatum in delectus eligendi
              ducimus ab labore quos?
            </p>
          </div>
        </motion.div>
        <div className="relative">
          <ChevronLeftIcon
            onClick={slideLeft}
            className={`${showLeftArrow ? "block" : "hidden"} absolute top-[40%] md:left-4 left-2 h-11 md:h-16 bg-primary-100 rounded-full opacity-50 hover:opacity-100 cursor-pointer duration-300 z-30`}
          />
          <ChevronRightIcon
            onClick={slideRight}
            className={`absolute top-[40%] right-2 md:right-4 z-30 h-11 md:h-16  bg-primary-100 rounded-full opacity-50 hover:opacity-100 cursor-pointer duration-300 ${showRightArrow ? "block" : "hidden"}`}
          />
          <div
            ref={sliderRef}
            className="mt-12 h-[353px] w-full overflow-x-auto no-scrollbar overflow-y-hidden"
          >
            <ul className="w-[2800px] scroll-smooth whitespace-nowrap gap-4 flex pl-5 justify-between">
              {classes.map((item: ClassType, index) => (
                <Class item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default OurClasses;
