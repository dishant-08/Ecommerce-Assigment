import { useCart } from "../../context/ProductContext";

const ProductCard = ({ product }) => {
  const { addToCart, cart, itemAmount } = useCart();
  console.log(itemAmount);
  console.log(cart);
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      <img
        className="w-full h-64 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{product.title}</h2>
        <p className="text-gray-700 text-base mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">{product.category}</span>
          <span className="text-green-600 font-bold">${product.price}</span>
        </div>
        <div className="mt-4 flex items-center">
          <span className="text-gray-500">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </span>

          <button
            onClick={() => addToCart(product, product.id)}
            className=" bg-zinc-300 "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
