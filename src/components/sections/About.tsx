import Image from 'next/image';

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna de texto */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-gray-900">
                Nossa História
              </h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            
            <p className="text-lg text-gray-700">
              Fundado em 2020, o Restaurante Gourmet nasceu da paixão pela gastronomia refinada 
              e do desejo de proporcionar experiências únicas aos nossos clientes.
            </p>
            
            <p className="text-lg text-gray-700">
              Nossa cozinha combina técnicas tradicionais com apresentações contemporâneas, 
              utilizando apenas ingredientes frescos e de alta qualidade, cuidadosamente 
              selecionados para criar pratos excepcionais.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">15+</h3>
                <p className="text-gray-600">Chefs Especializados</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">50+</h3>
                <p className="text-gray-600">Pratos Exclusivos</p>
              </div>
            </div>
          </div>

          {/* Coluna de imagens */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative h-[300px] col-span-2">
              <Image
                src="/images/restaurant-interior.jpg"
                alt="Interior do restaurante"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/images/chef-cooking.jpg"
                alt="Chef preparando prato"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/images/signature-dish.jpg"
                alt="Prato signature do restaurante"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
