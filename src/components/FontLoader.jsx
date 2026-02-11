import { useEffect } from "react";

/**
 * FontLoader Component
 * Lazy load non-critical fonts setelah page load
 * untuk mengurangi blocking pada critical rendering path
 */
export const FontLoader = () => {
  useEffect(() => {
    // Fungsi untuk preload font non-critical
    const loadNonCriticalFonts = () => {
      // Font yang tidak critical (Space Mono & Instrument Serif)
      const nonCriticalFonts = [
        "/src/assets/fonts/space-mono/SpaceMono-Regular.ttf",
        "/src/assets/fonts/space-mono/SpaceMono-Bold.ttf",
        "/src/assets/fonts/instrument-serif/InstrumentSerif-Regular.ttf",
        "/src/assets/fonts/instrument-serif/InstrumentSerif-Italic.ttf",
        // Inter Medium & SemiBold juga bisa di-lazy load jika tidak critical
        "/src/assets/fonts/inter/Inter_18pt-Medium.ttf",
        "/src/assets/fonts/inter/Inter_18pt-SemiBold.ttf",
      ];

      // Preload fonts setelah page load
      nonCriticalFonts.forEach((fontUrl) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "font";
        link.type = "font/ttf";
        link.crossOrigin = "anonymous";
        link.href = fontUrl;
        document.head.appendChild(link);
      });
    };

    // Tunggu sampai page fully loaded
    if (document.readyState === "complete") {
      // Jika sudah loaded, langsung jalankan
      loadNonCriticalFonts();
    } else {
      // Jika belum, tunggu event 'load'
      window.addEventListener("load", loadNonCriticalFonts);

      // Cleanup
      return () => {
        window.removeEventListener("load", loadNonCriticalFonts);
      };
    }
  }, []);

  // Component ini tidak render apa-apa
  return null;
};

export default FontLoader;
