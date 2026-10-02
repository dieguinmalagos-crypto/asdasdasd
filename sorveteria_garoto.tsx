import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Star, 
  Instagram, 
  MessageCircle,
  Map,
  CheckCircle2,
  XCircle,
  ChevronRight
} from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-pink-50 font-sans text-slate-800 selection:bg-pink-300 selection:text-pink-900 overflow-x-hidden">
      
      {/* HEADER / NAVIGATION */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🍦</span>
              <span className="text-2xl font-black bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                Sorveteria Garoto
              </span>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-600">
              <a href="#menu" className="hover:text-pink-500 transition-colors">Destaques</a>
              <a href="#reviews" className="hover:text-pink-500 transition-colors">Avaliações</a>
              <a href="#location" className="hover:text-pink-500 transition-colors">Localização</a>
            </div>
            <a 
              href="#location" 
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition-all shadow-lg shadow-pink-200"
            >
              Visite-nos
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-pink-200/50 blur-3xl"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-200/50 blur-3xl"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-yellow-100/50 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-700 font-bold text-sm mb-6 border border-pink-200 shadow-sm">
            ⭐️️ 4.8/5 (299 Avaliações)
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 drop-shadow-sm">
            O Melhor Sorvete de <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
              Joinville
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-medium mb-10">
            Sabor, tradição e momentos inesquecíveis no coração do Iririú. 
            Venha provar a felicidade em forma de sorvete!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#location"
              className="w-full sm:w-auto px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold text-lg shadow-xl shadow-pink-300/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MapPin size={20} />
              Como Chegar
            </a>
            <a 
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all border border-slate-100"
            >
              Ver Cardápio
            </a>
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section id="menu" className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-800">Destaques do Cardápio</h2>
            <p className="text-lg text-slate-500">Feitos com ingredientes selecionados para adoçar o seu dia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group bg-blue-50 rounded-3xl p-8 hover:bg-blue-100 transition-colors border border-blue-100 hover:shadow-xl hover:shadow-blue-200/50 cursor-pointer">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">🥤</div>
              <h3 className="text-2xl font-black mb-2 text-blue-900">Milk Shake</h3>
              <p className="text-blue-800/80 font-medium leading-relaxed">
                Super cremoso, geladinho e batido na hora com os melhores sabores à sua escolha.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-yellow-50 rounded-3xl p-8 hover:bg-yellow-100 transition-colors border border-yellow-100 hover:shadow-xl hover:shadow-yellow-200/50 cursor-pointer">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">🍌🍨</div>
              <h3 className="text-2xl font-black mb-2 text-yellow-900">Banana Split</h3>
              <p className="text-yellow-800/80 font-medium leading-relaxed">
                A sobremesa clássica! Generosas bolas de sorvete acompanhadas da nossa deliciosa banana e coberturas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-pink-50 rounded-3xl p-8 hover:bg-pink-100 transition-colors border border-pink-100 hover:shadow-xl hover:shadow-pink-200/50 cursor-pointer">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">🍦</div>
              <h3 className="text-2xl font-black mb-2 text-pink-900">Buffet de Sorvete</h3>
              <p className="text-pink-800/80 font-medium leading-relaxed">
                Monte do seu jeito! Dezenas de sabores incríveis e um balcão repleto de opções de coberturas.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-purple-50 rounded-3xl p-8 hover:bg-purple-100 transition-colors border border-purple-100 hover:shadow-xl hover:shadow-purple-200/50 cursor-pointer">
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">💜🥣</div>
              <h3 className="text-2xl font-black mb-2 text-purple-900">Açaí</h3>
              <p className="text-purple-800/80 font-medium leading-relaxed">
                Energia pura e muito sabor. Refrescante e perfeito com leite condensado, frutas e granola.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-24 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-4xl font-black text-slate-800 mb-4">O que dizem nossos clientes</h2>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="text-5xl font-black text-slate-900">4.8</span>
                <div className="flex flex-col items-start">
                  <div className="flex text-yellow-400">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                  </div>
                  <span className="text-sm text-slate-500 font-medium">De 299 avaliações no Google</span>
                </div>
              </div>
              <p className="text-slate-600 mt-4 mb-8">Nossa maior alegria é ver o sorriso no rosto de quem experimenta nossos sorvetes.</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700 transition-colors">
                Ler todas as avaliações <ChevronRight size={18} />
              </a>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Review 1 */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
                </div>
                <p className="text-slate-700 font-medium italic">"Top!"</p>
                <div className="mt-auto">
                  <p className="font-bold text-sm text-slate-900">Daniela Coelho</p>
                  <p className="text-xs text-slate-400">Guia Local</p>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
                </div>
                <p className="text-slate-700 font-medium italic">"Ótimo ambiente. Sorvete muito saboroso e um buffet bem variado."</p>
                <div className="mt-auto">
                  <p className="font-bold text-sm text-slate-900">Edes Pires</p>
                  <p className="text-xs text-slate-400">Guia Local</p>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
                </div>
                <p className="text-slate-700 font-medium italic">"Lugar agradável e o açaí deles é maravilhoso. Recomendo muito a visita com a família!"</p>
                <div className="mt-auto">
                  <p className="font-bold text-sm text-slate-900">Andrei Messias Francisco</p>
                  <p className="text-xs text-slate-400">Guia Local</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & HOURS SECTION */}
      <section id="location" className="py-24 bg-pink-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">Venha nos visitar!</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-600 rounded-2xl">
                    <MapPin size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Endereço</h3>
                    <p className="text-pink-100 text-lg">
                      R. Iririú, 3466 - Iririú<br />
                      Joinville - SC, 89227-021
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-600 rounded-2xl">
                    <Clock size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Horário de Funcionamento</h3>
                    <p className="text-pink-100 text-lg">Aberto todos os dias</p>
                    <p className="text-white font-bold text-lg mt-1">Até as 21h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-600 rounded-2xl">
                    <Phone size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Contato</h3>
                    <p className="text-pink-100 text-lg">(47) 99979-1778</p>
                  </div>
                </div>
              </div>

              {/* Service Badges */}
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-pink-600/50 px-4 py-2 rounded-full font-medium">
                  <CheckCircle2 size={20} className="text-green-300"/> Consumo no local
                </div>
                <div className="flex items-center gap-2 bg-pink-600/50 px-4 py-2 rounded-full font-medium">
                  <CheckCircle2 size={20} className="text-green-300"/> Retirada
                </div>
                <div className="flex items-center gap-2 bg-pink-600/50 px-4 py-2 rounded-full font-medium text-pink-200 opacity-80">
                  <XCircle size={20} className="text-red-300"/> Sem Delivery
                </div>
              </div>
            </div>

            {/* Map Placeholder / Card */}
            <div className="bg-white rounded-[2.5rem] p-4 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="w-full h-80 sm:h-[400px] bg-slate-100 rounded-3xl overflow-hidden relative flex flex-col items-center justify-center text-slate-400">
                <Map size={48} className="mb-4 text-slate-300" />
                <p className="font-semibold text-lg text-slate-500">Mapa de Localização</p>
                <p className="text-sm">R. Iririú, 3466 - Iririú, Joinville - SC</p>
                <a 
                  href="https://maps.google.com/?q=Sorveteria+Garoto+R.+Iririu+3466+Joinville" 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute bottom-6 px-6 py-3 bg-blue-500 text-white rounded-full font-bold shadow-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <MapPin size={18}/> Abrir no Google Maps
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-center sm:text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍦</span>
              <span className="text-xl font-black text-white tracking-wide">
                Sorveteria Garoto
              </span>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Sorveteria Garoto. Todos os direitos reservados.</p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://wa.me/5547999791778" target="_blank" rel="noreferrer" className="p-3 bg-stone-800 rounded-full hover:bg-green-600 hover:text-white transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/5547999791778" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-xl shadow-[#25D366]/40 hover:scale-110 hover:bg-[#1ebd5a] transition-all flex items-center justify-center group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-sm bg-white/20 rounded-full group-hover:ml-3 px-0 group-hover:px-3 py-1 opacity-0 group-hover:opacity-100">
          Fale Conosco
        </span>
      </a>

    </div>
  );
};

export default App;