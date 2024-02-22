import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CategoryCard = ({ category }) => {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (event) => {
      if (hovered) {
        const { clientX, clientY } = event;
        const xOffset = (clientX / window.innerWidth - 0.5) * 2;
        const yOffset = (clientY / window.innerHeight - 0.5) * 2;

        controls.start({
          rotateX: 10 * yOffset,
          rotateY: 10 * xOffset,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [hovered, controls]);

  return (
    <motion.div
      className="w-[23rem] mx-10 overflow-hidden bg-bgimage shadow-md shadow-slate-600 rounded-lg"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.img
        className="w-full h-72 object-cover object-center"
        src={category.image}
        alt={category.name}
      />

      <motion.div className="px-6 py-4" animate={controls}>
        <motion.div className="mb-2 text-2xl text-center font-bold">
          {category.name}
        </motion.div>
        <motion.p className="font-semibold text-2xl text-orange-500 text-center">
          Min. {Math.floor(Math.random() * 8) + 1}0% Off
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default CategoryCard;
