// import React, { useEffect, useCallback } from "react";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// interface ImageCarouselProps {
//   images: Array<{
//     src: string;
//     alt: string;
//   }>;
//   currentIndex: number;
//   onClose: () => void;
//   onNavigate: (index: number) => void;
// }

// const ImageCarousel: React.FC<ImageCarouselProps> = ({
//   images,
//   currentIndex,
//   onClose,
//   onNavigate,
// }) => {
//   const goToPrevious = useCallback(() => {
//     const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
//     onNavigate(newIndex);
//   }, [currentIndex, images.length, onNavigate]);

//   const goToNext = useCallback(() => {
//     const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
//     onNavigate(newIndex);
//   }, [currentIndex, images.length, onNavigate]);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         onClose();
//       } else if (e.key === "ArrowLeft") {
//         goToPrevious();
//       } else if (e.key === "ArrowRight") {
//         goToNext();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     document.body.style.overflow = "hidden";

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = "unset";
//     };
//   }, [onClose, goToPrevious, goToNext]);

//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         zIndex: 9999,
//         backgroundColor: "rgba(0, 0, 0, 0.95)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//       onClick={handleBackdropClick}
//     >
//       <button
//         onClick={onClose}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           zIndex: 10000,
//           background: "rgba(0, 0, 0, 0.5)",
//           border: "none",
//           borderRadius: "50%",
//           width: "50px",
//           height: "50px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           cursor: "pointer",
//           color: "white",
//           transition: "background 0.3s ease",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
//         }}
//         aria-label="Close carousel"
//       >
//         <X size={24} />
//       </button>

//       <button
//         onClick={goToPrevious}
//         style={{
//           position: "absolute",
//           left: "20px",
//           top: "50%",
//           transform: "translateY(-50%)",
//           zIndex: 10000,
//           background: "rgba(0, 0, 0, 0.5)",
//           border: "none",
//           borderRadius: "50%",
//           width: "60px",
//           height: "60px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           cursor: "pointer",
//           color: "white",
//           transition: "background 0.3s ease",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
//         }}
//         aria-label="Previous image"
//       >
//         <ChevronLeft size={32} />
//       </button>

//       <button
//         onClick={goToNext}
//         style={{
//           position: "absolute",
//           right: "20px",
//           top: "50%",
//           transform: "translateY(-50%)",
//           zIndex: 10000,
//           background: "rgba(0, 0, 0, 0.5)",
//           border: "none",
//           borderRadius: "50%",
//           width: "60px",
//           height: "60px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           cursor: "pointer",
//           color: "white",
//           transition: "background 0.3s ease",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
//         }}
//         aria-label="Next image"
//       >
//         <ChevronRight size={32} />
//       </button>

//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "80px 100px",
//         }}
//       >
//         <img
//           src={images[currentIndex].src}
//           alt={images[currentIndex].alt}
//           style={{
//             maxWidth: "100%",
//             maxHeight: "100%",
//             objectFit: "contain",
//             userSelect: "none",
//           }}
//           draggable="false"
//         />
//       </div>

//       <div
//         style={{
//           position: "absolute",
//           bottom: "30px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           color: "white",
//           fontSize: "18px",
//           fontWeight: "500",
//           background: "rgba(0, 0, 0, 0.5)",
//           padding: "10px 20px",
//           borderRadius: "20px",
//         }}
//       >
//         {currentIndex + 1} / {images.length}
//       </div>

//       <style>
//         {`
//           @media (max-width: 768px) {
//             .carousel-button {
//               width: 45px !important;
//               height: 45px !important;
//             }
//             .carousel-container {
//               padding: 60px 20px !important;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ImageCarousel;



import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    onNavigate(newIndex);
  }, [currentIndex, images.length, onNavigate]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIndex);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, goToPrevious, goToNext]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleBackdropClick}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 10001,
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          border: "none",
          background: "none",
          // borderRadius: "50%",
          // width: "50px",
          // height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          // color: "#ffffff",
          // transition: "background 0.3s ease",
          pointerEvents: "auto",
          color: "#fff",
        }}
        // onMouseEnter={(e) => {
        //   e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
        // }}
        // onMouseLeave={(e) => {
        //   e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
        // }}
        aria-label="Close carousel"
      >
        <X
        // stroke="#fff"
        // size={24}
        // color="#fff"
        // strokeWidth={2.5}
        // style={{ color: "#fff", fill: "#fff", zIndex: '10000' }}
        // className="text-white"
        />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10001,
          background: "none",
          border: "none",
          borderRadius: "50%",
          // width: "60px",
          // height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#ffffff",
          transition: "background 0.3s ease",
          pointerEvents: "auto",
        }}
        // onMouseEnter={(e) => {
        //   e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
        // }}
        // onMouseLeave={(e) => {
        //   e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
        // }}
        aria-label="Previous image"
      >
        <ChevronLeft
          stroke="#fff"
          size={32}
          color="#ffffff"
          strokeWidth={2.5}
        />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10001,
          background: "none",
          border: "none",
          borderRadius: "50%",
          // width: "60px",
          // height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#ffffff",
          transition: "background 0.3s ease",
          pointerEvents: "auto",
        }}
        // onMouseEnter={(e) => {
        //   e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
        // }}
        // onMouseLeave={(e) => {
        //   e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
        // }}
        aria-label="Next image"
      >
        <ChevronRight
          stroke="#fff"
          size={32}
          color="#ffffff"
          strokeWidth={2.5}
        />
      </button>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 100px",
          pointerEvents: "none",
        }}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            userSelect: "none",
            pointerEvents: "none",
          }}
          draggable="false"
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: "500",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "10px 20px",
          borderRadius: "20px",
          zIndex: 10001,
          pointerEvents: "none",
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .carousel-button {
              width: 45px !important;
              height: 45px !important;
            }
            .carousel-container {
              padding: 60px 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ImageCarousel;
