import { Button } from "../../components/ui/button";
// import dashboardImage from "@/assets/dashboard-screenshot.png";
import { Users, BarChart3, Send, QrCode } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Users,
        title: "Gestión de invitados",
        description: "Agrega, edita y organiza a todos tus invitados",
    },
    {
        icon: BarChart3,
        title: "Estadísticas en vivo",
        description: "Confirmados, pendientes y declinados al instante",
    },
    {
        icon: Send,
        title: "Envío masivo",
        description: "Todas las invitaciones por WhatsApp en un clic",
    },
    {
        icon: QrCode,
        title: "Códigos QR",
        description: "Generación automática para Apple/Google Wallet",
    },
];

const DashboardShowcase = () => {
    return (
        <section id="hero" className="py-20 lg:py-28 bg-carbonblack text-card relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-sand rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-coolsteel rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-sand font-script text-4xl">
                        Tu Centro de Comando
                    </span>
                    <h2 className="text-white font-serif-heading text-3xl md:text-4xl lg:text-5xl mt-2 mb-4">
                        El Dashboard que lo Controla Todo
                    </h2>
                    <p className="text- max-w-2xl mx-auto text-lg font-sans-body text-ashgrey/70">
                        Olvídate de hojas de cálculo y mensajes interminables. Toda la información
                        de tus invitados en un solo lugar, actualizada en tiempo real.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Dashboard Image */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-linear-to-r from-sand/20 to-coolsteel/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative bg-card/5 backdrop-blur-sm rounded-2xl p-4 border border-card/10">
                            <div className="">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative"
                                >
                                    {/* Abstract UI representation */}
                                    <div className="bg-[#1a1a1a] rounded-lg border border-white/10 shadow-2xl p-4 md:p-6 aspect-[4/3] relative overflow-hidden group">
                                        {/* Fake UI Header */}
                                        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                                            <div className="h-4 w-32 bg-white/10 rounded-full" />
                                            <div className="flex gap-3">
                                                <div className="h-8 w-8 rounded-full bg-primary/20" />
                                                <div className="h-8 w-8 rounded-full bg-white/5" />
                                            </div>
                                        </div>

                                        {/* Fake UI Content */}
                                        <div className="grid grid-cols-3 gap-4 mb-8">
                                            <div className="bg-primary/5 p-4 rounded border border-primary/10">
                                                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Confirmados</div>
                                                <div className="text-2xl text-white font-serif">142</div>
                                            </div>
                                            <div className="bg-white/5 p-4 rounded border border-white/5">
                                                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Pendientes</div>
                                                <div className="text-2xl text-white font-serif">28</div>
                                            </div>
                                            <div className="bg-white/5 p-4 rounded border border-white/5">
                                                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Rechazados</div>
                                                <div className="text-2xl text-white font-serif">12</div>
                                            </div>
                                        </div>

                                        {/* Fake List */}
                                        <div className="space-y-3">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded hover:bg-white/10 transition-colors cursor-default">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-linear-to-tr from-gray-700 to-gray-600" />
                                                        <div className="h-3 w-24 bg-white/20 rounded" />
                                                    </div>
                                                    <div className="h-2 w-16 bg-primary/30 rounded" />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Floating Action Badge */}
                                        <div className="absolute bottom-6 right-6 bg-primary text-background px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                                            <QrCode className="w-4 h-4" />
                                            <span className="text-xs uppercase tracking-wide">Scan QR</span>
                                        </div>
                                    </div>

                                    {/* Decorative blurry glow */}
                                    <div className="absolute -inset-10 bg-primary/20 blur-[100px] z-[-1] opacity-30" />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={feature.title}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-card/5 backdrop-blur-sm border border-card/10 hover:bg-card/10 transition-colors"
                                >
                                    <div className="w-12 h-12 bg-sand/20 rounded-xl flex items-center justify-center shrink-0">
                                        <Icon className="w-6 h-6 text-sand" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif-heading text-white text-lg font-bold mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-ashgrey/70 text-sm font-sans-body">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        <a href="#contacto" className="w-full sm:w-auto bg-sand text-carbonblack hover:bg-sand/90 px-8 py-6 rounded text-sm uppercase tracking-widest font-bold mt-8">
                            Solicita tu Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardShowcase;
