import ProductCard from "./ProductCard";

export default function Page({ title, data }) {
  const repeatedData = Array(3)
    .fill(data)
    .flat();

  return (
    <div className="p-6 bg-sky-900 min-h-screen">
      <h2 className="text-center text-3xl font-bold mb-8 text-white">
        {title}
      </h2>
      <div className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4">
        {repeatedData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
