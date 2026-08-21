import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="product-card" data-cat={product.category} href={`/${product.slug}`}>
      <div className="product-card-top">
        <span className="category-tag">{product.categoryTag}</span>
      </div>
      <h3>{product.name}</h3>
      <p>{product.cardDescription}</p>
      <div className="product-card-offer">
        <span className="offer-dot" />
        {product.fitTag}
      </div>
      <div className="product-card-cta">See how it works →</div>
    </Link>
  );
}
