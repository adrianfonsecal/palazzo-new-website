export default function CategoriesSection() {
    return (
        <section id="paquetes" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 fade-in-section">
                    <span className="text-sand font-bold tracking-widest text-xs uppercase">Nuestros Servicios</span>
                    <h2 className="font-serif-heading text-3xl md:text-4xl text-carbonblack font-bold mt-2">Elige tu Experiencia
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-gray-300 fade-in-section relative">
                        <h3 className="font-serif-heading text-2xl text-carbonblack font-bold">Premium</h3>
                        <p className="text-gray-500 text-sm mb-6">Para bodas íntimas y elegantes.</p>
                        <ul className="space-y-3 mb-8 text-sm text-gray-600">
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Diseño Responsive Premium dinámico</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Itinerario de la boda</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Mapa de ubicación</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Hosting por 9 meses</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Mesa de regalos & Links Bancarios</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Sistema de gestión de invitados en tiempo
                                real</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>RSVP Inteligente</li>
                        </ul>
                        <h4 className="font-serif-heading text-xl font-bold text-sand mb-2 w-full text-center block">$ 5,999 MXN
                        </h4>
                        <a href="#contacto"
                            className="block w-full text-center py-2 btn-alternative text-carbonblack rounded uppercase text-xs font-bold">Más
                            información</a>
                    </div>
            
                    <div className="relative bg-white p-10 rounded-xl shadow-2xl border-2 border-gray-200 transform scale-105 z-10 fade-in-section">
                        <div
                            className="absolute top-0 right-0 text-sand text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                            Más Popular</div>
                        <h3 className="font-serif-heading text-3xl text-carbonblack font-bold">Palazzo</h3>
                        <p className="text-gray-500 text-sm mb-6">La experiencia completa.</p>
                        <ul className="space-y-4 mb-8 text-sm text-gray-600">
                            <li><i className="fa-solid fa-check text-sand mr-2"></i> <strong>Todo lo de Premium</strong></li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Hosting por 12 meses</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Soporte multi-idiomas (español e inglés)
                            </li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Amazon WishList</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Recomendaciones de hospedaje</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Pronóstico clima</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Código de vestimenta</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Wedding Logo & Branding</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i>Menú & Tiempos de Catering </li>
                        </ul>
                        <h4 className="font-serif-heading text-xl font-bold text-sand mb-2 w-full text-center block">$ 7,599 MXN
                        </h4>
                        <a href="#contacto"
                            className="block w-full text-center py-3 btn-primary rounded uppercase text-xs font-bold">Más
                            información</a>
                    </div>                   
                    <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-gray-300 fade-in-section relative">
                        <h3 className="font-serif-heading text-2xl text-carbonblack font-bold">Imperial</h3>
                        <p className="text-gray-500 text-sm mb-6">Lujo digital y personalización total.</p>
                        <ul className="space-y-3 mb-8 text-sm text-gray-600">
                            <li><i className="fa-solid fa-check text-sand mr-2"></i> <strong>Todo lo de Palazzo</strong></li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i> Hosting por 24 meses</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i> Generación de códigos QR por cada invitado
                                confirmado (Apple Wallet & Google Wallet).</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i> Album de fotos (guests POV) el día de
                                la boda.</li>
                            <li><i className="fa-solid fa-check text-sand mr-2"></i> Recordatorios automatizados por WhatsApp
                            </li>
                        </ul>
                        <h4 className="font-serif-heading text-xl font-bold text-sand mb-2 w-full text-center block">$ 9,999 MXN
                        </h4>
                        <a href="#contacto"
                            className="block w-full text-center py-2 btn-alternative text-carbonblack rounded uppercase text-xs font-bold">Más
                            información</a>
                    </div>

                </div>
            </div>
        </section>
    );
}