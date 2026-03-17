"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const imageVariants = {
  enter: { opacity: 0, scale: 1.04, zIndex: 1 },
  center: {
    opacity: 1, scale: 1, zIndex: 1,
    transition: { duration: 0.42, ease: [0.4, 0, 0.2, 1] as number[] },
  },
  exit: {
    opacity: 0, scale: 1.01, zIndex: 0,
    transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] as number[] },
  },
};

const lightboxVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
      scale: { type: "spring", stiffness: 300, damping: 30 },
    },
  },
  exit: (dir: number) => ({
    zIndex: 0,
    x: dir > 0 ? -1000 : 1000,
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  }),
};

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const thumbnailStripRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    const thumb = thumbRefs.current[currentIndex];
    if (thumb && thumbnailStripRef.current) {
      thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [currentIndex]);

  // Preload adjacent images (N-1 and N+1)
  useEffect(() => {
    const toPreload = [currentIndex - 1, currentIndex + 1]
      .map((i) => {
        if (i < 0) return images.length - 1;
        if (i >= images.length) return 0;
        return i;
      })
      .filter((i) => i !== currentIndex);

    toPreload.forEach((i) => {
      const img = new Image();
      img.src = images[i];
    });
  }, [currentIndex, images]);

  const navigate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        const next = prev + newDirection;
        if (next < 0) return images.length - 1;
        if (next >= images.length) return 0;
        return next;
      });
    },
    [images.length]
  );

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (info.offset.x < -50 || info.velocity.x < -500) navigate(1);
      else if (info.offset.x > 50 || info.velocity.x > 500) navigate(-1);
    },
    [navigate]
  );

  const goToIndex = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Lightbox keyboard: capture phase so ESC closes lightbox, not the parent modal
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.stopPropagation(); setIsLightboxOpen(false); }
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handleKey, { capture: true });
    return () => window.removeEventListener("keydown", handleKey, { capture: true });
  }, [isLightboxOpen, navigate]);

  const hasMultipleImages = images.length > 1;
  const progress = ((currentIndex + 1) / images.length) * 100;

  // ── Lightbox portal ────────────────────────────────────────────────────
  const lightbox = typeof document !== "undefined"
    ? createPortal(
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              key="lightbox"
              className="fixed inset-0 z-[200] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setIsLightboxOpen(false)}
            >
              {/* Background blur */}
              <div className="absolute inset-0 bg-black/92 backdrop-blur-2xl" />

              {/* Close */}
              <motion.button
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm group/lbclose"
                onClick={() => setIsLightboxOpen(false)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
              >
                <X className="w-4 h-4 transition-transform duration-200 group-hover/lbclose:rotate-90" />
              </motion.button>

              {/* Counter */}
              {hasMultipleImages && (
                <motion.div
                  className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-0.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-white font-mono text-xs font-semibold tabular-nums">
                      {String(currentIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/35 font-mono text-[10px]">/</span>
                    <span className="text-white/50 font-mono text-[10px] tabular-nums">
                      {String(images.length).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Image */}
              <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`${title} - Image ${currentIndex + 1}`}
                  className="absolute inset-0 m-auto z-[1] max-w-[88vw] max-h-[84vh] object-contain rounded-xl shadow-2xl"
                  custom={direction}
                  variants={lightboxVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  onClick={(e) => e.stopPropagation()}
                  drag={hasMultipleImages ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragDirectionLock
                  onDragEnd={handleDragEnd}
                  dragElastic={0.1}
                  style={{ cursor: hasMultipleImages ? "grab" : "default" }}
                />
              </AnimatePresence>

              {/* Prev / Next */}
              {hasMultipleImages && (
                <>
                  <motion.button
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
                    onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
                    onClick={(e) => { e.stopPropagation(); navigate(1); }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </>
              )}

              {/* Bottom dot strip — active dot pulses */}
              {hasMultipleImages && images.length <= 12 && (
                <motion.div
                  className="absolute bottom-6 inset-x-0 z-10 flex justify-center gap-2"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {images.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => goToIndex(i)}
                      animate={{
                        width: i === currentIndex ? 20 : 6,
                        backgroundColor: i === currentIndex
                          ? "hsl(var(--primary))"
                          : "rgba(255,255,255,0.3)",
                        opacity: i === currentIndex ? [1, 0.7, 1] : 1,
                      }}
                      transition={{
                        duration: 0.28,
                        opacity: i === currentIndex
                          ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                          : { duration: 0.28 },
                      }}
                      className="h-1.5 rounded-full"
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )
    : null;

  // ── Gallery ──────────────────────────────────────────────────────────────
  return (
    <>
      <div className="flex flex-col gap-2.5">

        {/* Main image */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary group select-none cursor-zoom-in">

          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag={hasMultipleImages ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragDirectionLock
              onDragEnd={handleDragEnd}
              onTap={() => setIsLightboxOpen(true)}
              dragElastic={0.12}
              style={{ userSelect: "none", cursor: hasMultipleImages ? "grab" : "zoom-in" }}
            />
          </AnimatePresence>

          {/* Bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />

          {/* Radial vignette overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.25) 100%)" }}
          />

          {/* Zoom-in hint — subtle pulse */}
          <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <motion.div
              className="bg-black/40 backdrop-blur-sm rounded-full p-2 border border-white/15"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ZoomIn className="w-3.5 h-3.5 text-white" />
            </motion.div>
          </div>

          {/* Navigation arrows — spring scale entrance */}
          {hasMultipleImages && (
            <>
              <motion.button
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-9 md:h-9 rounded-full bg-black/30 backdrop-blur-md border border-white/12 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50"
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-9 md:h-9 rounded-full bg-black/30 backdrop-blur-md border border-white/12 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50"
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Image suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </>
          )}

          {/* Counter */}
          {hasMultipleImages && (
            <div className="absolute bottom-2.5 left-2.5 z-20 flex items-baseline gap-1 pointer-events-none">
              <span className="text-white font-mono text-xs font-semibold tabular-nums tracking-wide">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-white/35 font-mono text-[10px]">/</span>
              <span className="text-white/48 font-mono text-[10px] tabular-nums">
                {String(images.length).padStart(2, "0")}
              </span>
            </div>
          )}

          {/* Progress bar */}
          {hasMultipleImages && (
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-white/8 z-20">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.38, ease: "easeOut" }}
              />
            </div>
          )}
        </div>

        {/* Filmstrip thumbnails */}
        {hasMultipleImages && (
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-card/80 to-transparent z-10 pointer-events-none rounded-l-md" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-card/80 to-transparent z-10 pointer-events-none rounded-r-md" />
            <div
              ref={thumbnailStripRef}
              className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-hide scroll-smooth"
            >
              {images.map((img, index) => {
                const isActive = index === currentIndex;
                return (
                  <motion.button
                    key={index}
                    ref={(el) => { thumbRefs.current[index] = el; }}
                    onClick={() => goToIndex(index)}
                    className={`flex-shrink-0 relative rounded-md overflow-hidden outline-none transition-shadow duration-300 ${
                      isActive
                        ? "ring-2 ring-primary ring-offset-1 ring-offset-background shadow-[0_0_12px_rgba(0,128,255,0.35)]"
                        : "hover:ring-1 hover:ring-white/22"
                    }`}
                    style={{ width: 64, height: 40 }}
                    animate={{
                      scale: isActive ? 1.04 : 1,
                      opacity: isActive ? 1 : 0.55,
                    }}
                    whileHover={{ scale: isActive ? 1.04 : 1.08, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    aria-label={`Image ${index + 1}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <img
                      src={img}
                      alt={`${title} - Miniature ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{
                        filter: isActive ? "none" : "grayscale(30%) brightness(0.85)",
                        transition: "filter 0.28s ease",
                      }}
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox — rendered in <body> via portal */}
      {lightbox}
    </>
  );
}
