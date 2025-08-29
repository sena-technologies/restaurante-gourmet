'use client';

import { useState } from 'react';
import { MenuCategory } from '@/types/menu';
import { MenuItemCard } from './MenuItemCard';
import { menuData } from '@/data/menu';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  
  return (
    <section id="cardapio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nosso Cardápio
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção de pratos preparados com ingredientes frescos e técnicas refinadas
          </p>
        </div>

        {/* Navegação das categorias */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors
                ${activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Conteúdo da categoria ativa */}
        {menuData.map((category) => (
          <div
            key={category.id}
            className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
