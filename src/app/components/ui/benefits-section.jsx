import Link from 'next/link';
import { CheckCircle2, LayoutDashboard, Users, Mail, HeartHandshake, ArrowUpRight } from 'lucide-react';

const ButtonPrimary = ({ children, className, ...props }) => (
  <button
    className={`bg-carbonblack text-white px-8 py-3 rounded-lg font-sans-body font-medium transition-all hover:bg-sand hover:shadow-lg hover:-translate-y-1 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const ButtonOutline = ({ children, className, ...props }) => (
  <button
    className={`border border-charcoal text-carbonblack px-8 py-3 rounded-lg font-sans-body font-medium transition-all hover:bg-ashgrey/20 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const FeatureCard = ({ icon: Icon, title, description, imageSrc, url }) => (

  <div className="group relative overflow-hidden rounded-2xl bg-white border border-ashgrey/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
    <div className="p-8 flex flex-col h-full z-10">
      <div className="w-12 h-12 bg-sand/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sand/20 transition-colors">
        <Icon className="w-6 h-6 text-sand" />
      </div>
      <h3 className="font-serif-heading text-2xl text-carbonblack mb-3">{title}</h3>
      <p className="font-sans-body text-charcoal/80 text-sm leading-relaxed grow">
        {description}
      </p>
      <Link href={`${url}#paquetes`}>
      
        <div className="mt-6 flex items-center text-sand font-medium text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
          Conocer más <ArrowUpRight className="w-4 h-4 ml-2" />
        </div>
      </Link>
    </div>

    {/* Decoración de fondo sutil */}
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-dustgrey/10 rounded-full blur-2xl group-hover:bg-sand/10 transition-colors"></div>
  </div>
);


export default function BenefitsSection() {
    const palazzoUrl = "https://palazzoinvites.com";
    return (
        <section id="beneficios" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif-heading text-4xl text-carbonblack mb-4">Todo lo que necesitas para decir "Sí"</h2>
                    <p className="font-sans-body text-charcoal max-w-2xl mx-auto">
                        Herramientas poderosas diseñadas con la simplicidad en mente.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <FeatureCard
                        icon={Mail}
                        title="Invitaciones Inteligentes"
                        description="Diseños web que cautivan. Genera enlaces únicos por familia, controla pases y evita invitados no deseados automáticamente."
                    />

                    <FeatureCard
                        icon={Users}
                        title="Lista de Invitados en Tiempo Real"
                        description="Olvídate de Excel. Visualiza quién ha confirmado, quién falta y gestiona mesas desde un panel intuitivo y elegante."
                    />

                    <FeatureCard
                        icon={LayoutDashboard}
                        title="Dashboard Ejecutivo"
                        description="Métricas claras de tu evento. Porcentajes de asistencia, restricciones alimentarias y logística en un solo vistazo."
                    />

                    <div className="md:col-span-2 lg:col-span-2 bg-carbonblack rounded-2xl p-8 md:p-12 relative overflow-hidden group shadow-xl">
                        <div className="relative z-10 max-w-lg">
                            <h3 className="font-serif-heading text-3xl text-white mb-4">La distinción está en los detalles</h3>
                            <p className="font-sans-body text-ashgrey mb-8 leading-relaxed">
                                Nuestras plantillas no son simples correos. Son experiencias inmersivas diseñadas por artistas,
                                con tipografías como <span className="text-sand font-script text-xl">Great Vibes</span> y <span className="text-sand font-serif-heading">Playfair Display</span>.
                            </p>
                            <Link href={`${palazzoUrl}#ejemplos`} target="_blank" rel="noopener noreferrer">
                                <ButtonOutline className="border-sand text-sand hover:bg-sand hover:text-carbonblack inline-flex items-center justify-center">
                                    Ver Galería de Diseños <ArrowUpRight className="w-4 h-4 ml-2" />
                                </ButtonOutline>
                            </Link>
                        </div>
                        {/* Decorative Gradient Background */}
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-sand/20 to-transparent"></div>
                    </div>

                    {/* Card 5: Collaboration */}
                    <FeatureCard
                        icon={HeartHandshake}
                        title="Colaboración Novios & Planner"
                        description="Un espacio compartido donde las decisiones se toman en conjunto y la información fluye sin caos."
                    />

                </div>
            </div>
        </section>
    );
}