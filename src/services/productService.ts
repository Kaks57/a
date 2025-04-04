
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
  // Hardcoded products data
  private products: Product[] = [
    {
      id: "1",
      name: "Sac à main Dior",
      description: "Un sac à main élégant en cuir italien véritable, parfait pour toutes les occasions. Pièce unique fabriquée par un artisan de Florence.",
      price: 450,
      image: "/1.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "2",
      name: "Chaussures DIOR",
      description: "Escarpins élégants en daim bleu marine avec un talon de 8 cm. Design exclusif, disponible uniquement chez nous.",
      price: 280,
      image: "/2.jpeg",
      category: "Chaussures",
      available: true
    },
    {
      id: "3",
      name: "Sac bandoulière Louis Vuitton",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/3.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "4",
      name: "Sac bandoulière Louis Vuitton",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/4.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "5",
      name: "Sac bandoulière Louis Vuitton",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/5.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "6",
      name: "Sac bandoulière Louis Vuitton",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/6.jpeg",
      category: "Sacs",
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
