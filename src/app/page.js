import Image from "next/image";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">Featured Products</h2>
        <p className="text-gray-500">Discover our best-selling items</p>
      </div>
      {/* <ProductGrid products={featuredProducts} /> */}
    </section>
  );
}
