import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    let result = [...products];

    // Filter by search
    if (search.trim()) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.shortDesc.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.categorySlug === selectedCategory);
    }

    // Sort
    if (sortBy === "name-asc") result.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === "name-desc") result.sort((a, b) => b.name.localeCompare(a.name));
    else if (sortBy === "best-sellers") result = result.filter((p) => p.isBestSeller).concat(result.filter((p) => !p.isBestSeller));
    else if (sortBy === "featured") result = result.filter((p) => p.isFeatured).concat(result.filter((p) => !p.isFeatured));

    setFiltered(result);
  }, [search, selectedCategory, sortBy]);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    );
    document.querySelectorAll(".animate-fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section
        className="py-16 relative"
        style={{ background: "linear-gradient(135deg, hsl(220 25% 4%), hsl(220 20% 8%))" }}
      >
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="section-tag">Our Collection</span>
          <h1 className="section-title mt-2">All <span>Products</span></h1>
          <p className="mt-4 text-lg" style={{ color: "hsl(var(--muted-foreground))" }}>
            Browse our complete range of premium automobile accessories
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 py-4 border-b" style={{ background: "hsl(var(--background-secondary))", borderColor: "hsl(var(--border))" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "hsl(var(--muted-foreground))" }} />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-dark !pl-9 !py-2.5"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "hsl(var(--muted-foreground))" }}>
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-dark !py-2.5 pr-8 appearance-none cursor-pointer"
                style={{ minWidth: "180px" }}
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "hsl(var(--muted-foreground))" }} />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-dark !py-2.5 pr-8 appearance-none cursor-pointer"
                style={{ minWidth: "160px" }}
              >
                <option value="default">Default Order</option>
                <option value="featured">Featured First</option>
                <option value="best-sellers">Best Sellers First</option>
                <option value="name-asc">Name: A → Z</option>
                <option value="name-desc">Name: Z → A</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "hsl(var(--muted-foreground))" }} />
            </div>

            {/* Result count */}
            <div className="flex items-center gap-2 shrink-0">
              <SlidersHorizontal size={14} style={{ color: "hsl(var(--primary))" }} />
              <span className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                <span style={{ color: "hsl(var(--primary))" }} className="font-bold">{filtered.length}</span> products
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-rajdhani font-bold text-2xl mb-2" style={{ color: "hsl(var(--foreground))" }}>
                No Products Found
              </h3>
              <p className="mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => { setSearch(""); setSelectedCategory("all"); setSortBy("default"); }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <div key={product.id} className="animate-fade-up" style={{ transitionDelay: `${Math.min(i * 50, 400)}ms` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Products;
