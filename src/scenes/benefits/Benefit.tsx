import LearnMoreButton from "@/shared/LearnMoreButton";
import { type BenefitType } from "@/shared/types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type BenefitProp = {
  benefit: BenefitType;
};

function Benefit({ benefit }: BenefitProp) {
  const { icon, title, description } = benefit;

  return (
    <motion.div
      variants={childVariant}
      whileHover={{
        translateY: -1,
        scale: 1.02,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      }}
      className="mt-7 shadow-md rounded-md border-2 border-gray-100 px-5 py-16 text-center transition-translate duration-100"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <LearnMoreButton />
    </motion.div>
  );
}
export default Benefit;
