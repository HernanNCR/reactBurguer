import { useEffect, useState } from "react";

const useScrollPosition = () => {  // 👈 Nombre correcto para un hook
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition(); // Inicializar con la posición actual

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;

