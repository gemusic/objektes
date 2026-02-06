import { Link } from 'react-router-dom';
import img1 from '@/assets/img1.jpg';

interface ProductCardProps {
  onClose?: () => void;
}

const ProductCard = ({ onClose }: ProductCardProps) => {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mx-4 mb-4 animate-scale-fade-in">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={img1}
            alt="Le Purificateur Haute Précision"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <h4 className="font-serif text-sm font-medium text-foreground mb-1 truncate">
            Le Purificateur Haute Précision
          </h4>
          <p className="text-xs text-muted-foreground mb-2">
            1 unité — 3 mois de filtration
          </p>
          <p className="font-serif text-lg text-primary font-semibold">
            5 500 FCFA
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <Link
        to="/paiement"
        className="block w-full mt-4 bg-primary text-primary-foreground py-3 text-center text-sm tracking-wider uppercase transition-all duration-300 hover:opacity-90 rounded-lg"
      >
        Commander maintenant
      </Link>
    </div>
  );
};

export default ProductCard;
