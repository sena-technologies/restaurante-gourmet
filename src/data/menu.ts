import { MenuCategory } from '@/types/menu';

export const menuData: MenuCategory[] = [
  {
    id: 'entradas',
    name: 'Entradas',
    description: 'Comece sua experiência gastronômica com nossas entradas exclusivas',
    items: [
      {
        id: 'carpaccio',
        name: 'Carpaccio de Filé Mignon',
        description: 'Finas fatias de filé mignon com molho de mostarda e alcaparras, rúcula e lascas de parmesão',
        price: 48.90,
        category: 'entradas',
        tags: ['semGluten'],
      },
      {
        id: 'bruschetta',
        name: 'Bruschetta Mediterrânea',
        description: 'Pão italiano grelhado com tomates, manjericão, azeite extra virgem e queijo burrata',
        price: 39.90,
        category: 'entradas',
        tags: ['vegetariano'],
      },
      {
        id: 'camarao',
        name: 'Camarões ao Alho e Ervas',
        description: 'Camarões salteados em manteiga com alho, vinho branco e mix de ervas frescas',
        price: 62.90,
        category: 'entradas',
      },
    ],
  },
  {
    id: 'principais',
    name: 'Pratos Principais',
    description: 'Desfrute de nossas especialidades preparadas com ingredientes selecionados',
    items: [
      {
        id: 'file-mignon',
        name: 'Filé Mignon ao Molho de Vinho Tinto',
        description: 'Medalhão de filé mignon grelhado, molho de vinho tinto, purê de batatas e legumes da estação',
        price: 89.90,
        category: 'principais',
        tags: ['semLactose'],
      },
      {
        id: 'risoto-cogumelos',
        name: 'Risoto de Cogumelos Selvagens',
        description: 'Arroz arbóreo com mix de cogumelos selvagens, vinho branco e parmesão envelhecido',
        price: 72.90,
        category: 'principais',
        tags: ['vegetariano'],
      },
      {
        id: 'salmao-grelhado',
        name: 'Salmão Grelhado ao Molho Cítrico',
        description: 'Filé de salmão grelhado com molho de laranja e maracujá, acompanha risoto de limão siciliano',
        price: 86.90,
        category: 'principais',
      },
    ],
  },
  {
    id: 'sobremesas',
    name: 'Sobremesas',
    description: 'Termine sua refeição com nossas sobremesas artesanais',
    items: [
      {
        id: 'petit-gateau',
        name: 'Petit Gâteau',
        description: 'Bolo quente de chocolate com centro líquido, sorvete de baunilha e calda de frutas vermelhas',
        price: 32.90,
        category: 'sobremesas',
        tags: ['vegetariano'],
      },
      {
        id: 'cheesecake',
        name: 'Cheesecake de Maracujá',
        description: 'Cheesecake cremoso com calda de maracujá fresco e base de biscoito artesanal',
        price: 28.90,
        category: 'sobremesas',
        tags: ['vegetariano'],
      },
    ],
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    description: 'Seleção especial de vinhos e drinks para acompanhar sua refeição',
    items: [
      {
        id: 'vinho-tinto',
        name: 'Vinho Tinto Reserva',
        description: 'Vinho tinto seco com notas de frutas maduras e especiarias',
        price: 189.90,
        category: 'bebidas',
        tags: ['vegano', 'semGluten'],
      },
      {
        id: 'caipirinha',
        name: 'Caipirinha Premium',
        description: 'Cachaça artesanal, limão tahiti e açúcar orgânico',
        price: 32.90,
        category: 'bebidas',
        tags: ['vegano', 'semGluten'],
      },
    ],
  },
];
