
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
    {
      id: "7",
      name: "Porte Feuille Louis Vuitton",
      description: "Porte Feuille Louis Vuitton .",
      price: 320,
      image: "/7.jpeg",
      category: "Accesoires",
      available: true
    },
    {
      id: "8",
      name: "Sac bandoulière Louis Vuitton",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/8.jpeg",
      category: "Sacs",
      available: true
    },
    {
      id: "9",
      name: "Porte Feuille Louis Vuitton",
      description: "Porte Feuille Louis Vuitton .",
      price: 320,
      image: "/9.jpeg",
      category: "Accesoires",
      available: true
    },  
    {
      id: "10",
      name: "Sacs a main ",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/10 (2).jpeg",
      category: "Accesoires",
      available: true
    },
    {
      id: "11",
      name: "Sandales ",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/11.jpeg",
      category: "chaussures",
      available: true
    },  
    {
      id: "12",
      name: "Portefeuilles Louis Vuitton",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/12.jpeg",
      category: "accesoires",
      available: true
    },  
    {
      id: "13",
      name: "Portefeuilles Louis Vuitton",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/13.jpeg",
      category: "accesoires",
      available: true
    },  
    {
      id: "14",
      name: "Portefeuilles Louis Vuitton",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/14.jpeg",
      category: "accesoires",
      available: true
    }, 
    {
      id: "15",
      name: "T-shirt Louis Vuitton",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/15.jpeg",
      category: "T-SHIRT",
      available: true
    }, 
    {
      id: "16",
      name: "T-shirt Casablanca",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/16.jpeg",
      category: "T-SHIRT",
      available: true
    }, 
    {
      id: "17",
      name: "T-shirt Casablanca",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/17.jpeg",
      category: "T-SHIRT",
      available: true
    }, 
    {
      id: "18",
      name: "T-shirt ",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/18.jpeg",
      category: "T-SHIRT",
      available: true
    }, 
    {
      id: "19",
      name: "T-shirt ",
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/19.jpeg",
      category: "T-SHIRT",
      available: true
    }, 
    {
      id: "20",
      name: "T-shirt Casablanca", 
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/20.jpeg",
      category: "T-SHIRT",
      available: true
    }, 
    {
      id: "21",
      name: "T-shirt Casablanca", 
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/21.jpeg",
      category: "T-SHIRT",
      available: true
    }, 
    {
      id: "22",
      name: "T-shirt Louis Vuitton", 
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/22.jpeg",
      category: "T-SHIRT",
      available: true
    },
    {
      id: "23",
      name: "Ceinture Louis Vuitton", 
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/23.jpeg",
      category: "acessoires",
      available: true
    },
    {
      id: "24",
      name: "Portefeuille Louis Vuitton", 
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/24.jpeg",
      category: "acessoires",
      available: true
    },
    {
      id: "25",
      name: "New Balance 2002R", 
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/25.jpeg",
      category: "acessoires",
      available: true
    },
    {
      id: "26",
      name: "New Balance 2002R", 
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/26.jpeg",
      category: "acessoires",
      available: true
    },
    {
      id: "27",
      name: "New Balance 2002R", 
      description: "Un sac bandoulière vintage en cuir patiné, avec des finitions en laiton. Une pièce unique avec beaucoup d'histoire.",
      price: 320,
      image: "/27.jpeg",
      category: "acessoires",
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
