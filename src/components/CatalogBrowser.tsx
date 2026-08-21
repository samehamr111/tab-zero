"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import type { Category, Product } from "@/lib/products";

export function CatalogBrowser({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const [active, setActive] = useState("all");

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of products) {
      map.set(p.category, (map.get(p.category) ?? 0) + 1);
    }
    return map;
  }, [products]);

  const visible = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div id="directory">
      <div className="filter-bar">
        <div className="wrap">
          <div className="filter-pills" role="tablist" aria-label="Filter by category">
            <button
              className={`filter-pill${active === "all" ? " active" : ""}`}
              onClick={() => setActive("all")}
              type="button"
            >
              All tools <span className="filter-count">{products.length}</span>
            </button>
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`filter-pill${active === cat.key ? " active" : ""}`}
                onClick={() => setActive(cat.key)}
                type="button"
              >
                {cat.label} <span className="filter-count">{counts.get(cat.key) ?? 0}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="catalog-grid-section">
        <div className="wrap">
          <div className="product-grid">
            {visible.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
