import Image from 'next/image';
import { MenuItem } from '@/types/menu';
import { DietaryTag } from './DietaryTag';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { name, description, price, image, tags } = item;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <span className="text-lg font-semibold text-primary">
            R$ {price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <DietaryTag key={tag} type={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
