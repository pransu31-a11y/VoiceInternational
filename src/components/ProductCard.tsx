import { Link } from "react-router-dom";
import { MessageCircle, Eye, Send } from "lucide-react";
import { Product, getWhatsAppLink } from "@/data/products";

interface ProductCardProps {
  product: Product;
  showPrice?: boolean;
}

const ProductCard = ({ product, showPrice = true }: ProductCardProps) => {
  return (
    <div className="product-card group flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square" style={{ background: "hsl(var(--muted))" }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3"
          style={{ background: "hsl(220 20% 4% / 0.7)" }}
        >
          <Link
            to={`/products/${product.id}`}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "hsl(var(--primary))", color: "white" }}
            title="View Details"
          >
            <Eye size={16} />
          </Link>
          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "#25D366", color: "white" }}
            title="WhatsApp Enquiry"
          >
            <MessageCircle size={16} />
          </a>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 badge-accent text-xs font-bold">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-1">
          <span className="text-xs font-medium" style={{ color: "hsl(var(--primary))" }}>
            {product.category}
          </span>
        </div>

        <h3
          className="font-rajdhani font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {product.name}
        </h3>

        <p
          className="text-sm leading-relaxed mb-4 flex-1 line-clamp-2"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {product.shortDesc}
        </p>

        {/* Price */}
        {showPrice && product.price && (
          <div className="mb-4 flex items-center gap-2">
            <span
              className="font-rajdhani font-bold text-2xl"
              style={{ color: "hsl(var(--accent))" }}
            >
              {product.price}
            </span>
            <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>onwards</span>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-auto">
          <div className="flex gap-2">
            <a
              href={getWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-1 !text-xs !py-2.5"
            >
              <MessageCircle size={13} /> WhatsApp
            </a>
            <Link
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              className="btn-outline flex-1 !text-xs !py-2.5 text-center"
            >
              <Send size={13} /> Enquire
            </Link>
          </div>
          <Link
            to={`/products/${product.id}`}
            className="btn-primary w-full !text-xs !py-2.5 text-center"
          >
            <Eye size={13} /> View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
