export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
}

class ProductService {
  // Produits mis à jour
  private products: Product[] = [
    {
      id: "1",
      name: "Sac à main Dior",
      description: "Sac à main Dior en cuir véritable, finition soignée. Élégant et pratique pour toutes vos sorties.",
      price: 80,
      image: "/1.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "2",
      name: "Chaussures DIOR",
      description: "Chaussures en cuir souple DIOR, confortables et stylées pour un look sophistiqué.",
      price: 100,
      image: "/2.jpeg",
      category: "chaussures",
      available: true
    },
    {
      id: "3",
      name: "Sac bandoulière Louis Vuitton",
      description: "Sac bandoulière Louis Vuitton en cuir grainé, compact et tendance.",
      price: 120,
      image: "/3.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "4",
      name: "Sac bandoulière Louis Vuitton",
      description: "Modèle emblématique Louis Vuitton, idéal pour le quotidien.",
      price: 80,
      image: "/4.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "5",
      name: "Sac bandoulière Louis Vuitton",
      description: "Design chic avec finition haut de gamme. Parfait pour un usage urbain.",
      price: 80,
      image: "/5.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "6",
      name: "Sac bandoulière Louis Vuitton",
      description: "Sac bandoulière classique, idéal pour compléter vos tenues élégantes.",
      price: 80,
      image: "/6.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "7",
      name: "Porte-feuille Louis Vuitton",
      description: "Portefeuille raffiné en cuir signé Louis Vuitton avec emplacements pour cartes.",
      price: 70,
      image: "/7.jpeg",
      category: "accesoires",
      available: true
    },
    {
      id: "8",
      name: "Sac bandoulière Gucci",
      description: "Modèle intemporel en cuir avec logo Gucci, idéal pour le quotidien.",
      price: 80,
      image: "/8.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "9",
      name: "Pochette Voyage Souple Louis Vuitton",
      description: "Compact et pratique, avec un design élégant et moderne.",
      price: 80,
      image: "/9.jpeg",
      category: "accesoires",
      available: true
    },
    {
      id: "10",
      name: "Sac à main Balmain",
      description: "Sac en cuir véritable Balmain, à la fois luxueux et fonctionnel.",
      price: 150,
      image: "/10 (2).jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "11",
      name: "Sandales Hermès",
      description: "Sandales élégantes et confortables signées Hermès. Idéales pour l'été.",
      price: 80,
      image: "/11.jpeg",
      category: "chaussures",
      available: true
    },
    {
      id: "12",
      name: "Portefeuille Louis Vuitton",
      description: "Portefeuille classique avec fermeture zippée et finitions de luxe.",
      price: 60,
      image: "/12.jpeg",
      category: "accesoires",
      available: true
    },
    {
      id: "13",
      name: "Portefeuille Louis Vuitton",
      description: "Design épuré, cuir souple et nombreuses poches intérieures.",
      price: 60,
      image: "/13.jpeg",
      category: "accesoires",
      available: true
    },
    {
      id: "14",
      name: "Pochette Louis Vuitton",
      description: "Portefeuille pratique et résistant, parfait pour un usage quotidien.",
      price: 60,
      image: "/14.jpeg",
      category: "accesoires",
      available: true
    },
    {
      id: "15",
      name: "T-shirt Louis Vuitton",
      description: "T-shirt de luxe 100% coton, coupe moderne avec logo brodé.",
      price: 70,
      image: "/15.jpeg",
      category: "T-SHIRT",
      available: true
    },
    {
      id: "16",
      name: "T-shirt Louis Vuitton",
      description: "T-shirt classique, tissu doux et respirant pour un confort optimal.",
      price: 70,
      image: "/16.jpeg",
      category: "T-SHIRT",
      available: true
    },
    {
      id: "17",
      name: "T-shirt Casablanca",
      description: "Modèle audacieux de Casablanca, imprimé unique et qualité supérieure.",
      price: 70,
      image: "/17.jpeg",
      category: "T-SHIRT",
      available: true
    },
    {
      id: "18",
      name: "T-shirt Louis Vuitton",
      description: "Un basique haut de gamme avec une touche élégante signée Louis Vuitton.",
      price: 70,
      image: "/18.jpeg",
      category: "T-SHIRT",
      available: true
    },
    {
      id: "19",
      name: "T-shirt Louis Vuitton",
      description: "T-shirt en coton biologique avec col rond et finitions premium.",
      price: 70,
      image: "/19.jpeg",
      category: "T-SHIRT",
      available: true
    },
    {
      id: "20",
      name: "T-shirt Casablanca",
      description: "Design artistique de Casablanca, parfait pour les amateurs de streetwear chic.",
      price: 70,
      image: "/20.jpeg",
      category: "T-SHIRT",
      available: true
    },
    {
      id: "21",
      name: "T-shirt Louis Vuitton",
      description: "T-shirt minimaliste signé LV, pour un style casual mais raffiné.",
      price: 70,
      image: "/21.jpeg",
      category: "T-SHIRT",
      available: true
    },
    {
      id: "22",
      name: "T-shirt Louis Vuitton",
      description: "T-shirt classique avec logo discret, idéal pour un look épuré.",
      price: 70,
      image: "/22.jpeg",
      category: "T-SHIRT",
      available: true
    },
    {
      id: "23",
      name: "Ceinture Louis Vuitton",
      description: "Ceinture en cuir avec boucle signature LV. Élégante et solide.",
      price: 60,
      image: "/23.jpeg",
      category: "accesoires",
      available: true
    },
    {
      id: "24",
      name: "Portefeuille Louis Vuitton",
      description: "Petit portefeuille avec finition grainée, logo LV en relief.",
      price: 60,
      image: "/24.jpeg",
      category: "accesoires",
      available: true
    },
    {
      id: "25",
      name: "New Balance 2002R",
      description: "Baskets modernes et confortables avec semelle amortissante.",
      price: 90,
      image: "/25.jpeg",
      category: "chaussures",
      available: true
    },
    {
      id: "26",
      name: "New Balance 2002R",
      description: "Design sportif, parfait pour un usage quotidien ou sportif.",
      price: 90,
      image: "/26.jpeg",
      category: "chaussures",
      available: true
    },
    {
      id: "27",
      name: "New Balance 2002R",
      description: "Version lifestyle avec finitions soignées et maintien optimal.",
      price: 90,
      image: "/27.jpeg",
      category: "chaussures",
      available: true
    },
    {
      id: "28",
      name: "New Balance",
      description: "Baskets polyvalentes, design classique revisité.",
      price: 90,
      image: "/28.jpeg",
      category: "chaussures",
      available: true
    },
    {
      id: "29",
      name: "Nike",
      description: "Modèle Nike emblématique, confort et style au rendez-vous.",
      price: 90,
      image: "/29.jpeg",
      category: "chaussures",
      available: true
    },
    {
      id: "30",
      name: "Nike",
      description: "Baskets Nike tendance avec technologie de semelle réactive.",
      price: 90,
      image: "/30.jpeg",
      category: "chaussures",
      available: true
    },
    {
      id: "31",
      name: "Asics",
      description: "Chaussures Asics conçues pour le running, légères et stables.",
      price: 90,
      image: "/31.jpeg",
      category: "chaussures",
      available: true
    },
    {
      id: "32",
      name: "Nike",
      description: "Chaussures de sport polyvalentes avec bon maintien.",
      price: 90,
      image: "/32.jpeg",
      category: "chaussures",
      available: true
    },
    {
      id: "33",
      name: "New Balance",
      description: "Modèle confortable et passe-partout pour un usage quotidien.",
      price: 90,
      image: "/33.jpeg",
      category: "chaussures",
      available: true
    },
    {
      id: "34",
      name: "Sacoche Christian Dior",
      description: "Sacoche élégante en cuir avec logo Dior, parfaite pour les sorties.",
      price: 80,
      image: "/34.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "35",
      name: "Sac Keepall Louis Vuitton",
      description: "Sacoche élégante en cuir avec logo LV, parfaite pour les sorties.",
      price: 150,
      image: "/35.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "36",
      name: "New Balance",
      description: "Modèle confortable et passe-partout pour un usage quotidien.",
      price: 90,
      image: "/36.jpeg",
      category: "chaussures",
      available: true
    },
    {
      id: "37",
      name: "Sacoche Christian Dior",
      description: "Sacoche élégante en cuir avec logo Dior, parfaite pour les sorties.",
      price: 80,
      image: "/37.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "38",
      name: "Sac Keepall Louis Vuitton",
      description: "Sacoche élégante en cuir avec logo LV, parfaite pour les sorties.",
      price: 150,
      image: "/38.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "39",
      name: "Sacoche Christian Dior",
      description: "Sacoche élégante en cuir avec logo Dior, parfaite pour les sorties.",
      price: 80,
      image: "/39.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "40",
      name: "Sacoche Louis Vuitton",
      description: "Sacoche élégante en cuir avec logo LV, parfaite pour les sorties.",
      price: 80,
      image: "/40 (2).jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "41",
      name: "Sacoche bandoulière Louis Vuitton",
      description: "Sacoche élégante en cuir avec logo LV, parfaite pour les sorties.",
      price: 130,
      image: "/41 (2).jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "42",
      name: "Pochette Louis Vuitton",
      description: "Sacoche élégante en cuir avec logo LV, parfaite pour les sorties.",
      price: 90,
      image: "/42 (2).jpeg",
      category: "accesoires",
      available: true
    },   
    {
      id: "43",
      name: "Pochette Louis Vuitton",
      description: "Sacoche élégante en cuir avec logo LV, parfaite pour les sorties.",
      price: 90,
      image: "/43 (2).jpeg",
      category: "accesoires",
      available: true
    },                           


  ];
  
  async getProducts(): Promise<Product[]> {
    // Simply return the hardcoded products
    return [...this.products];
  }
  
  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.find(p => p.id === id);
  }
}

export const productService = new ProductService();
