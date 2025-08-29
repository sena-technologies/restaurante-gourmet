import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {/* Placeholder for hero image - você precisará adicionar uma imagem adequada em public/ */}
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay escuro */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Uma Experiência Gastronômica Única
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Descubra sabores extraordinários em um ambiente sofisticado e acolhedor
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#cardapio"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-colors"
          >
            Ver Cardápio
          </Link>
          <Link
            href="/#reserva"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg transition-colors"
          >
            Fazer Reserva
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};
