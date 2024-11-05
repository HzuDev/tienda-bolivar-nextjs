"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, ReactElement } from "react";

interface SquareData {
  id: number;
  src: string;
}
const HeroHome = () => {
  return (
    <section className="w-full h-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Club Bolívar Tienda Oficial
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Viste los colores de tu equipo
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Explora nuestra amplia gama de ropa oficial del Club Bolívar.
          Encuentra la equipación perfecta para apoyar a tu equipo en cada
          partido. Además, ahora puedes comprar tus entradas para los próximos
          partidos directamente desde nuestra tienda.
        </p>
        <div className="flex gap-2">
          <a
            href="/shop"
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-blue-600 active:scale-95"
          >
            Descubre la tienda
          </a>
          <a
            href="/tickets"
            className="ml-4 bg-blue-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-blue-600 active:scale-95"
          >
            Compra tus entradas
          </a>
        </div>
      </div>

      <ShuffleGrid />
    </section>
  );
};
const squareData: SquareData[] = [
  {
    id: 1,
    src: "https://tienda.clubbolivar.com/930-large_default/camiseta-celeste-puma-2024.jpg",
  },
  {
    id: 2,
    src: "https://tienda.clubbolivar.com/843-large_default/canguro-escudo-bolivar-para-ninos.jpg",
  },
  {
    id: 3,
    src: "https://tienda.clubbolivar.com/806-large_default/canguro-blanco-hombre-bolivar.jpg",
  },
  {
    id: 4,
    src: "https://tienda.clubbolivar.com/774-large_default/canguro-blanco-hombre-bolivar.jpg",
  },
  {
    id: 5,
    src: "https://tienda.clubbolivar.com/1125-large_default/canguro-dale-bo-.jpg",
  },
  {
    id: 6,
    src: "https://tienda.clubbolivar.com/778-home_default/polera-negra-bolivar.jpg",
  },
  {
    id: 7,
    src: "https://tienda.clubbolivar.com/1044-home_default/camiseta-celeste-puma-2024.jpg",
  },
  {
    id: 8,
    src: "https://tienda.clubbolivar.com/861-home_default/camiseta-celeste-puma-2024.jpg",
  },
  {
    id: 9,
    src: "https://tienda.clubbolivar.com/854-home_default/camiseta-celeste-puma-2024.jpg",
  },
  {
    id: 10,
    src: "https://tienda.clubbolivar.com/1037-home_default/polo-azul-puma.jpg",
  },
  {
    id: 11,
    src: "https://tienda.clubbolivar.com/582-home_default/deportivo-azul-con-negro-puma.jpg",
  },
  {
    id: 12,
    src: "https://tienda.clubbolivar.com/660-home_default/deportivo-azul-con-negro-puma.jpg",
  },
  {
    id: 13,
    src: "https://tienda.clubbolivar.com/1037-home_default/polo-azul-puma.jpg",
  },
  {
    id: 14,
    src: "https://tienda.clubbolivar.com/1117-home_default/polo-puma-blanco.jpg",
  },
  {
    id: 15,
    src: "https://tienda.clubbolivar.com/384-home_default/pelota-club-bolivar-est-1925.jpg",
  },
  {
    id: 16,
    src: "https://tienda.clubbolivar.com/1040-home_default/camiseta-celeste-puma-2024.jpg",
  }
];
const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = (): ReactElement[] => {
  return shuffle(squareData).map((sq: SquareData) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = (): ReactElement => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState<ReactElement[]>(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default HeroHome;
