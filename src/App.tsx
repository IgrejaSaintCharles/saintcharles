import React, { useState, useEffect, useRef } from 'react';
import { Heart, Shield, Truck, Phone, Mail, MapPin, Star, Cross, ChevronDown } from 'lucide-react';
import VideoCarousel from './VideoCarousel.tsx'; // Importe o componente criado

const testimonials = [
  {
    name: "Maria Santos",
    location: "São Paulo, SP",
    text: "Com certeza revigorou a energia da minha casa, recebi uma carta feita a mão do padre junto á imagem, só tenho a agradecer pelas bênçãos.",
    rating: 5
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    text: "Trouxe uma paz inexplicável para nossa família, a carta personalizada do padre foi um toque especial. Recomendo de coração!",
    rating: 5
  },
  {
    name: "João Silva",
    location: "Rio de Janeiro, RJ",
    text: "Transformou completamente o ambiente do meu lar, veio acompanhada de uma linda oração manuscrita. Gratidão imensa!",
    rating: 5
  }
];

const churchHistory = [
  {
    title: "Mãos Que Alimentam",
    description: "Fazemos do seu gesto de fé uma oportunidade de levar alimento e dignidade a crianças e famílias em situação de vulnerabilidade.",
    image: "/image.png"
  },
  {
    title: "Sorrisos que Transformam",
    description: "Graças ao apoio dos nossos devotos, levamos alegria, presentes e esperança para centenas de crianças em datas especiais.",
    image: "/ChatGPT Image 2 de jul. de 2025, 17_39_42.jpg"
  },
  {
    title: "Nossa Devoção",
    description: "Há mais de 95 anos dedicados à devoção de Nossa Senhora Aparecida, oferecendo imagens sagradas com amor e respeito.",
    image: "/oracao.png"
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % churchHistory.length);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [isDragging]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
    const diff = e.touches[0].clientX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const diff = currentX - startX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe right - previous slide
        setCurrentSlide((prev) => (prev - 1 + churchHistory.length) % churchHistory.length);
      } else {
        // Swipe left - next slide
        setCurrentSlide((prev) => (prev + 1) % churchHistory.length);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setStartX(0);
    setCurrentX(0);
  };

  const handleMouseStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
    const diff = e.clientX - startX;
    setDragOffset(diff);
  };

  const handleMouseEnd = () => {
    if (!isDragging) return;
    
    const diff = currentX - startX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Drag right - previous slide
        setCurrentSlide((prev) => (prev - 1 + churchHistory.length) % churchHistory.length);
      } else {
        // Drag left - next slide
        setCurrentSlide((prev) => (prev + 1) % churchHistory.length);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setStartX(0);
    setCurrentX(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 h-32 md:h-40">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <img 
            src="/Sem Título-1 copy.png" 
            alt="Logo" 
            className="h-28 md:h-36 w-auto max-w-full object-contain"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white py-16 md:py-24" style={{background: 'linear-gradient(135deg, #56231b 0%, #7d3426 50%, #56231b 100%)'}}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Resgate agora sua Imagem de
              <span className="block text-amber-300 mt-2">Nossa Senhora Aparecida</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Uma oportunidade única de ter em sua casa a proteção e bênção da Padroeira do Brasil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg flex items-center gap-2" style={{backgroundColor: '#d97706', color: '#56231b'}}>
                <Cross className="w-5 h-5" />
                IMAGEM GRATUITA
              </div>
              <div className="text-amber-300 font-medium">
                 Veja o que nossos devotos acharam
              </div>
            </div>
            
            {/* Seta para baixo */}
            <div className="mt-8 flex justify-center">
              <ChevronDown className="w-8 h-8 text-amber-300 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Carousel - Devotos que Receberam Bênçãos */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#56231b' }}>
            Devotos que Receberam Bênçãos
          </h2>
          <VideoCarousel />
        </div>
      </section>

      {/* Church History Slider */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{color: '#56231b'}}>
            Conheça o nosso projeto
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div 
              ref={sliderRef}
              className="overflow-hidden rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseStart}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseEnd}
              onMouseLeave={handleMouseEnd}
            >
              <div 
                className="relative h-64 md:h-80 transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(${dragOffset}px)`,
                }}
              >
                <img 
                  src={churchHistory[currentSlide].image}
                  alt={churchHistory[currentSlide].title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {churchHistory[currentSlide].title}
                  </h3>
                  <p className="text-lg opacity-90">
                    {churchHistory[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {churchHistory.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-amber-700' : 'bg-gray-300'
                  }`}
                  style={index === currentSlide ? {backgroundColor: '#56231b'} : {}}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: '#56231b'}}>
                  Imagem Abençoada de Nossa Senhora Aparecida
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-red-500" />
                    <span className="text-lg">Feita com amor e devoção</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6" style={{color: '#56231b'}} />
                    <span className="text-lg">Material de alta qualidade</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Cross className="w-6 h-6 text-amber-600" />
                    <span className="text-lg">Abençoada pelo Padre José Magana</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="w-6 h-6 text-amber-600" />
                    <span className="text-lg">Frete R$ 14,90 para todo o Brasil</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="w-6 h-6 text-amber-600" />
                    <span className="text-lg">Entrega rápida e segura</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg shadow-md">
                  <h3 className="font-bold text-lg text-amber-800 mb-3 flex items-center gap-2">
                    <Cross className="w-5 h-5" />
                    Bênção Especial
                  </h3>
                  <p className="text-amber-700 mb-2">
                    <strong>Cada imagem é abençoada pelo Padre José Magana</strong>, reverendo da nossa igreja, garantindo que você receba não apenas uma imagem, mas uma verdadeira fonte de proteção espiritual para sua família.
                  </p>
                  <p className="text-amber-600 text-sm italic">
                    "Que Nossa Senhora Aparecida abençoe e proteja todos os lares que receberem esta imagem sagrada" - Pe. José Magana
                  </p>
                </div>

                <div className="text-center">
                  <a href="https://go.paradisepagbr.com/iocwrzpdqk" target="_blank" rel="noopener noreferrer">
                  <button 
                    className="text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #56231b 0%, #7d3426 100%)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #7d3426 0%, #56231b 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #56231b 0%, #7d3426 100%)';
                    }}
                  >
                    QUERO MINHA IMAGEM GRÁTIS
                  </button>
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    Clique e preencha seus dados para receber
                  </p>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl p-2 shadow-2xl">
                    <img 
                      src="/nossa senhora png.png"
                      alt="Nossa Senhora Aparecida"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full px-4 py-2 font-bold text-sm shadow-lg">
                    GRÁTIS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{color: '#56231b'}}>
            O que nossos devotos dizem
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <p className="font-bold" style={{color: '#56231b'}}>
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-amber-700' : 'bg-gray-300'
                  }`}
                  style={index === currentTestimonial ? {backgroundColor: '#56231b'} : {}}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white" style={{background: 'linear-gradient(135deg, #56231b 0%, #7d3426 100%)'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não Perca Esta Oportunidade Única
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Milhares de famílias já receberam suas imagens sagradas
          </p>
          <a href="https://go.paradisepagbr.com/iocwrzpdqk" target="_blank" rel="noopener noreferrer">
          <button className="bg-amber-500 hover:bg-amber-600 font-bold py-4 px-12 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200" style={{color: '#56231b'}}>
            SOLICITAR MINHA IMAGEM AGORA
          </button>
          </a>
          <p className="text-sm mt-4 opacity-75">
            Oferta por tempo limitado
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#56231b'}}>
            Entre em Contato
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" style={{color: '#56231b'}} />
              </div>
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <p className="text-gray-600">(11) 99122-8549</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" style={{color: '#56231b'}} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-600">contato@stcharlesborromeu.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-8" style={{backgroundColor: '#56231b'}}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-200 mb-4">
            Espalhando a devoção de Nossa Senhora Aparecida com amor e fé
          </p>
          <p className="text-sm text-amber-300">
            © Saint Charles Borromeu 2025 - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;