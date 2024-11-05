import bcryptjs from 'bcryptjs';


interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: 'men' | 'women' | 'kid';
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'admin'|'user'
}



type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shorts' | 'buzos' | 'polera' | 'deportivos';

interface SeedData {
  users: SeedUser[];
  categories: string[];
  products: SeedProduct[];
}




export const initialData: SeedData = {

  users: [
    {
      email: 'admin@admin.com',
      name: 'Ricardo Cuenca',
      password: bcryptjs.hashSync('admin123'),
      role: 'admin'
    },
    {
      email: 'pepe@gmail.com',
      name: 'Pepito Perez',
      password: bcryptjs.hashSync('pepe123'),
      role: 'user'
    },


  ],


  categories: [
    'shorts', 'buzos', 'polera', 'deportivos'
  ],
  products: [
    {
      description: "This Puma blue t-shirt from 2023 offers comfort and style for any occasion. Made from high-quality materials ensuring durability and comfort.",
      images: ['camiseta-azul-puma-2023-sin.jpg'],
      inStock: 13,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: "puma_blue_tshirt_2023",
      type: 'polera',
      tags: ['tshirt'],
      title: "Puma Blue T-shirt 2023",
      gender: 'men'
    },
    {
      description: "Puma 2024 sky blue t-shirt, perfect for training or casual wear. Offers comfort and style with a modern design.",
      images: ['camiseta-celeste-puma-2024-2.jpg'],
      inStock: 10,
      price: 40,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: "puma_sky_blue_tshirt_2024",
      type: 'polera',
      tags: ['tshirt'],
      title: "Puma Sky Blue T-shirt 2024",
      gender: 'men'
    },
    {
      description: "Puma alternate t-shirt 2024, featuring a unique design perfect for any occasion. Made from soft and durable materials.",
      images: ['camiseta-alterno-puma-2024.jpg'],
      inStock: 12,
      price: 42,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: "puma_alternate_tshirt_2024",
      type: 'polera',
      tags: ['tshirt'],
      title: "Puma Alternate T-shirt 2024",
      gender: 'men'
    },
    {
      description: "Puma black hoodie with AKD shield, perfect for cooler days. Offers warmth and style with a comfortable fit.",
      images: ['canguro-wscudo-akd-negro.jpg'],
      inStock: 16,
      price: 45,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: "puma_black_hoodie_akd",
      type: 'buzos',
      tags: ['hoodie'],
      title: "Puma Black Hoodie AKD",
      gender: 'men'
    },
    {
      description: "Puma Est. 1925 navy blue vest, perfect for chilly days. Provides comfort and warmth.",
      images: ['chaleco-est1925-azul-marino.jpg'],
      inStock: 12,
      price: 50,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: "puma_navy_vest_1925",
      type: 'buzos',
      tags: ['vest'],
      title: "Puma Navy Vest Est. 1925",
      gender: 'men'
    },
    {
      description: "Puma training t-shirt in orange, perfect for exercise sessions. Made from breathable materials.",
      images: ['poler-entrenamiento-naranja.jpg'],
      inStock: 22,
      price: 28,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: "puma_orange_training_tshirt",
      type: 'polera',
      tags: ['tshirt'],
      title: "Puma Orange Training T-shirt",
      gender: 'men'
    },
    {
      description: "Puma Pique Polo in blue, ideal for casual or sporting events. Made with high-quality fabric for added comfort.",
      images: ['polo-puma-pique-azul.jpg'],
      inStock: 15,
      price: 30,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: "puma_blue_pique_polo",
      type: 'polera',
      tags: ['polo'],
      title: "Puma Blue Pique Polo",
      gender: 'men'
    },
    {
      description: "Puma modern polo with silver details. Perfect for casual and sporting events.",
      images: ['polo-glasign-esc-bolivar-plateado-blanco.jpg'],
      inStock: 18,
      price: 32,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: "puma_modern_silver_polo",
      type: 'polera',
      tags: ['polo'],
      title: "Puma Modern Silver Polo",
      gender: 'men'
    },
    {
      description: "Puma navy blue windbreaker, ideal for windy days. Offers protection and style with lightweight and durable materials.",
      images: ['rompe-vientos-azul-marino-puma.jpg'],
      inStock: 7,
      price: 55,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: "puma_navy_windbreaker",
      type: 'buzos',
      tags: ['windbreaker'],
      title: "Puma Navy Windbreaker",
      gender: 'men'
    },
    {
      description: "Puma shorts designed for intense workouts. Comfort and durability ensured with high-quality materials.",
      images: ['short-puma.jpg'],
      inStock: 20,
      price: 25,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: "puma_workout_shorts",
      type: 'shorts',
      tags: ['shorts'],
      title: "Puma Workout Shorts",
      gender: 'men'
    },
    {
      description: "Navy blue sweatshirt for women with ring details, perfect for a stylish look.",
      images: ['-sudadera-dama-con-argollas-azul-marino.jpg'],
      inStock: 14,
      price: 48,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      slug: "womens_navy_ring_sweatshirt",
      type: 'buzos',
      tags: ['sweatshirt'],
      title: "Women's Navy Ring Sweatshirt",
      gender: 'women'
    },
    {
      description: "Women's black sportswear model, ideal for fitness enthusiasts. Made with flexible and breathable fabric.",
      images: ['modelos-de-deportivo-dama-negro.jpg'],
      inStock: 17,
      price: 50,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      slug: "womens_black_sportswear",
      type: 'deportivos',
      tags: ['sportswear'],
      title: "Women's Black Sportswear",
      gender: 'women'
    },
    {
      description: "Women's t-shirt in a trendy design, perfect for casual outings or gym sessions.",
      images: ['polera-dama.jpg'],
      inStock: 20,
      price: 28,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      slug: "womens_trendy_tshirt",
      type: 'polera',
      tags: ['tshirt'],
      title: "Women's Trendy T-shirt",
      gender: 'women'
    },
    {
      description: "Women's crossover hoodie, perfect for a chic and comfortable look.",
      images: ['-canguro-dama-cruzado.jpg'],
      inStock: 15,
      price: 45,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      slug: "womens_crossover_hoodie",
      type: 'buzos',
      tags: ['hoodie'],
      title: "Women's Crossover Hoodie",
      gender: 'women'
    },
    {
      description: "Men's Bermuda shorts from the LVE line, offering comfort and style for casual wear.",
      images: ['linea-lve-bermuda.jpg'],
      inStock: 18,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: "mens_lve_bermuda_shorts",
      type: 'shorts',
      tags: ['bermuda'],
      title: "Men's LVE Bermuda Shorts",
      gender: 'men'
    },
    {
      description: "Navy blue t-shirt for boys, featuring a fun and stylish design.",
      images: ['-polera-nino-azul-marino.jpg'],
      inStock: 12,
      price: 20,
      sizes: ['XS', 'S', 'M', 'L'],
      slug: "boys_navy_tshirt",
      type: 'polera',
      tags: ['tshirt'],
      title: "Boys' Navy T-shirt",
      gender: 'kid'
    },
    {
      description: "White t-shirt for boys with Bolivar logo, perfect for casual wear.",
      images: ['polera-nino-blanca-bolivar.jpg'],
      inStock: 15,
      price: 18,
      sizes: ['XS', 'S', 'M', 'L'],
      slug: "boys_white_bolivar_tshirt",
      type: 'polera',
      tags: ['tshirt'],
      title: "Boys' White Bolivar T-shirt",
      gender: 'kid'
    },
    {
      description: "Sky blue t-shirt for boys, perfect for a sporty look.",
      images: ['camiseta-celeste-puma-2024-nino.jpg'],
      inStock: 13,
      price: 22,
      sizes: ['XS', 'S', 'M', 'L'],
      slug: "boys_sky_blue_tshirt",
      type: 'polera',
      tags: ['tshirt'],
      title: "Boys' Sky Blue T-shirt",
      gender: 'kid'
    },
    {
      description: "Black hoodie for boys with Bolivar logo, perfect for cooler days.",
      images: ['canguro-escudo-bolivar-para-ninos.jpg'],
      inStock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M', 'L'],
      slug: "boys_black_bolivar_hoodie",
      type: 'buzos',
      tags: ['hoodie'],
      title: "Boys' Black Bolivar Hoodie",
      gender: 'kid'
    },
    {
      description: "Simon's navy t-shirt for kids, offering a fun and stylish design for everyday wear.",
      images: ['polera-ninos-simon-.jpg'],
      inStock: 11,
      price: 20,
      sizes: ['XS', 'S', 'M', 'L'],
      slug: "kids_simon_navy_tshirt",
      type: 'polera',
      tags: ['tshirt'],
      title: "Kids' Simon Navy T-shirt",
      gender: 'kid'
    },
  ]
};