export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: 'entradas' | 'principais' | 'sobremesas' | 'bebidas';
  tags?: ('vegetariano' | 'vegano' | 'semGluten' | 'semLactose')[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}
