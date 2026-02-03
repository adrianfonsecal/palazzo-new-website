import Image from "next/image";
import Link from "next/link";

export default function ExamplesSection() {

    return (
        <section id="ejemplos" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 fade-in-section">
                    <span className="text-sand font-bold tracking-widest text-xs uppercase">Nuestros Trabajos</span>
                    <h2 className="font-serif-heading text-3xl md:text-4xl text-carbonblack font-bold mt-2">Inspiración Real
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Explora cómo hemos transformado la visión de otras
                        parejas en experiencias digitales únicas.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


                    <div
                        className="portfolio-card group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white fade-in-section">

                        <div className="h-64 overflow-hidden">
                            <Image src="https://www.bunnypants.co.za/wp-content/uploads/2020/09/images_portfolio_wedding-stationery_online-wedding-design.jpg.webp"
                                alt="Boda Clásica"
                                className="portfolio-img w-full h-full object-cover transition duration-700 ease-in-out" width={200} height={200}/>
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="font-serif-heading text-xl font-bold text-carbonblack">Sofía & Mateo</h3>
                                <span
                                    className="text-xs font-bold text-sand border border-sand px-2 py-1 rounded-full">Clásico</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-4">Hacienda San Gabriel</p>
                            <Link href="https://app.palazzoinvites.com/invitacion/1ee0208b-58aa-4327-b0fd-de019e0340c3"
                                className="text-coolsteel text-sm font-bold uppercase tracking-widest hover:text-midnight transition-colors">
                                Ver Invitación <i className="fa-solid fa-arrow-right ml-1"></i>
                            </Link>
                        </div>
                    </div>


                    <div className="portfolio-card group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white fade-in-section"
                        style={{transitionDelay: "200ms"}}>
                        <div className="h-64 overflow-hidden">
                            <Image src="https://withjoy.com/assets/public/stationery-og-save-the-date-2.png"
                                alt="Boda en Playa"
                                className="portfolio-img w-full h-full object-cover transition duration-700 ease-in-out" width={200} height={200}/>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="font-serif-heading text-xl font-bold text-midnight">Valeria & Luis</h3>
                                <span
                                    className="text-xs font-bold text-sand border border-sand px-2 py-1 rounded-full">Playa</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-4">Tulum, Quintana Roo</p>
                            <Link href="https://app.palazzoinvites.com/invitacion/1ee0208b-58aa-4327-b0fd-de019e0340c3"
                                className="text-coolsteel text-sm font-bold uppercase tracking-widest hover:text-midnight transition-colors">
                                Ver Invitación <i className="fa-solid fa-arrow-right ml-1"></i>
                            </Link>
                        </div>
                    </div>


                    <div className="portfolio-card group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white fade-in-section"
                        style={{transitionDelay: "200ms"}}>
                        <div className="h-64 overflow-hidden">
                            <Image src="https://worldofwedding.com/cdn/shop/files/all-in-one-trifold-wedding-invitation.jpg?v=1762544390&width=2000"
                                alt="Boda de Noche"
                                className="portfolio-img w-full h-full object-cover transition duration-700 ease-in-out" width={200} height={200}/>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="font-serif-heading text-xl font-bold text-midnight">Ana & Carlos</h3>
                                <span
                                    className="text-xs font-bold text-sand border-sand border px-2 py-1 rounded-full">Gala</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-4">Museo de Arte Moderno</p>
                            <Link href="https://app.palazzoinvites.com/invitacion/1ee0208b-58aa-4327-b0fd-de019e0340c3"
                                className="text-coolsteel text-sm font-bold uppercase tracking-widest hover:text-midnight transition-colors">
                                Ver Invitación <i className="fa-solid fa-arrow-right ml-1"></i>
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="text-center mt-12">
                    <Link href="#contacto"
                        className="btn-secondary px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase inline-block">Quiero
                        un diseño así</Link>
                </div>
            </div>
        </section>
    );
}