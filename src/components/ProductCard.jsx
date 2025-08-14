export default function ProductCard({ product }) {
  const discountedPrice = (product.price * 0.75).toFixed(2);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-full max-w-xs mx-auto">
      <div className="overflow-hidden rounded-md mb-4 bg-teal-300 flex items-center justify-center w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md 
                     transition-transform duration-300 
                     hover:scale-110 
                     active:scale-105"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center break-words">
        {product.name}
      </h3>
      <div className="flex justify-center items-center gap-2 w-full flex-wrap">
        <span className="text-gray-500 line-through text-sm break-words">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-green-500 font-bold text-sm break-words">
          ${discountedPrice}
        </span>
      </div>
    </div>
  );
}
