import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Import des images produit
import img1 from "@/assets/img1-2.jpg";
import img2 from "@/assets/img2-2.jpg";
import img3 from "@/assets/img3-2.jpg";
import img4 from "@/assets/img4-2.jpg";
import img5 from "@/assets/product-closeup.png";
import img6 from "@/assets/product-kit.jpg";

const productImages = [
  { src: img1, alt: "Purificateur objekté - Citron dans le verre" },
  { src: img2, alt: "Purificateur objekté - Main tenant le filtre" },
  { src: img3, alt: "Purificateur objekté - Ambiance tropicale" },
  { src: img4, alt: "Purificateur objekté - Arc-en-ciel de gouttes" },
  { src: img5, alt: "Purificateur objekté - Gros plan filtre" },
  { src: img6, alt: "Purificateur objekté - Kit complet avec cartouches" },
];

const ProductCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0"
            >
              <div className="aspect-square md:aspect-[4/3] relative overflow-hidden rounded-lg bg-secondary/20">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-secondary text-foreground/70 hover:text-foreground hover:bg-background transition-all disabled:opacity-30"
        aria-label="Image précédente"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-secondary text-foreground/70 hover:text-foreground hover:bg-background transition-all disabled:opacity-30"
        aria-label="Image suivante"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Thumbnails Navigation */}
      <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
        {productImages.map((image, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "flex-shrink-0 w-15 h-15 rounded-lg overflow-hidden transition-all duration-300",
              selectedIndex === index
                ? "ring-2 ring-primary ring-offset-2 opacity-100"
                : "ring-1 ring-secondary opacity-70 hover:opacity-100"
            )}
            aria-label={`Voir image ${index + 1}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
