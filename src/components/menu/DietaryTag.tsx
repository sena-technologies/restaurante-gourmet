interface DietaryTagProps {
  type: 'vegetariano' | 'vegano' | 'semGluten' | 'semLactose';
}

const tagConfig = {
  vegetariano: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    label: 'Vegetariano',
  },
  vegano: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-800',
    label: 'Vegano',
  },
  semGluten: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    label: 'Sem Glúten',
  },
  semLactose: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    label: 'Sem Lactose',
  },
};

export const DietaryTag = ({ type }: DietaryTagProps) => {
  const config = tagConfig[type];
  
  return (
    <span 
      className={`${config.bg} ${config.text} text-xs px-2 py-1 rounded-full font-medium`}
    >
      {config.label}
    </span>
  );
};
