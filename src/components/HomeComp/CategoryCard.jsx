const CategoryCard = ({ category }) => {
  return (
    <div className="max-w-xl mx-10 overflow-hidden bg-white rounded-lg shadow-lg hover:scale-110 ">
      <img
        className="w-full h-64 object-cover object-center"
        src={category.image}
        alt={category.name}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl text-center font-bold">
          {category.name}
        </div>
        {/* <p className="text-gray-700 text-base">
          Created At: {new Date(category.createdAt).toLocaleString()}
        </p> */}
        <p className="font-semibold text-2xl text-orange-500 text-center">
          Min. {Math.floor(Math.random() * 8) + 1}0% Off
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
