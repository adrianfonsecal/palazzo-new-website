'use client';
import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        package: "General",
        message: "",
        honeypot: ""
    });

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        const formatted = formatPhoneNumber(e.target.value);
        setInputValue(formatted);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const formatPhoneNumber = (value) => {
        if (!value) return value;

        const phoneNumber = value.replace(/[^\d]/g, '');

        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 4) {
            return phoneNumber;
        }

        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }

        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Validación Honeypot (Anti-Spam básico en cliente)
        if (formData.honeypot) {
            console.log('Bot detectado');
            return;
        }

        const reasonMap = {
            General: 'INFORMACION_GENERAL',
            Esencial: 'PREMIUM',
            Palazzo: 'PALAZZO',
            Imperial: 'IMPERIAL'
        };

        // Preparar datos para el backend
        const payload = {
            full_name: formData.name,
            email: formData.email,
            phone_number: inputValue,
            reason: reasonMap[formData.package],
            message: formData.message
        };

        setLoading(true);
        setResponse(null);

        try {
            const res = await fetch('http://localhost:8000/api/public/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (res.ok) {
                setResponse({ type: 'success', message: "¡Gracias! Hemos recibido tu mensaje." });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    package: "General",
                    message: "",
                    honeypot: ""
                });
            } else {
                let errorMsg = "Hubo un error al enviar.";
                if (data.email) errorMsg = data.email[0];
                else if (data.phone_number) errorMsg = data.phone_number[0];

                setResponse({ type: 'error', message: errorMsg });
            }
        } catch (error) {
            console.error('Error:', error);
            setResponse({ type: 'error', message: "Error de conexión. Intenta de nuevo." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contacto" className="py-20 bg-charcoal text-white bg-linear-to-r from-carbonblack to-charcoal">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 fade-in-section">
                    <h2 className="font-serif-heading text-3xl md:text-4xl text-sand mb-4">Comienza tu Diseño</h2>
                    <p className="text-gray-300">Cuéntanos sobre tu evento y nos pondremos en contacto contigo.</p>
                </div>

                <div className=" p-8 rounded-lg bg-card/5 backdrop-blur-sm border border-card/10 transition-colors">
                    <form id="contactForm" className="space-y-6" onSubmit={handleSubmit}>
                        <div style={{ display: 'none' }}>
                            <label htmlFor="honeypot">No llenar esto</label>
                            <input
                                type="text"
                                id="honeypot"
                                name="honeypot"
                                value={formData.honeypot}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-sand mb-2">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/10 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:border-coolsteel transition-colors"
                                    placeholder="Tu nombre"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-sand mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/10 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:border-coolsteel transition-colors"
                                    placeholder="tu@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-sand mb-2">Número de teléfono</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="(555) 555-5555"
                                    value={inputValue}
                                    onChange={handleInput}
                                    className="w-full bg-white/10 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:border-coolsteel transition-colors"
                                    maxLength={14}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="package" className="block text-xs uppercase tracking-widest text-sand mb-2">Interés</label>
                            <select
                                id="package"
                                value={formData.package}
                                onChange={handleChange}
                                className="w-full bg-white/10 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:border-coolsteel transition-colors"
                            >
                                <option value="General" className="text-carbonblack">Información General</option>
                                <option value="Esencial" className="text-carbonblack">Paquete Premium</option>
                                <option value="Palazzo" className="text-carbonblack">Paquete Palazzo</option>
                                <option value="Imperial" className="text-carbonblack">Paquete Imperial</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-sand mb-2">Mensaje</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white/10 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:border-coolsteel transition-colors"
                                placeholder="Fecha del evento, lugar, dudas..."
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-primary px-10 py-3 rounded uppercase text-sm font-bold tracking-widest w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Enviando..." : "Enviar Mensaje"}
                            </button>
                        </div>

                        {response && (
                            <div className={`text-center text-sm font-bold mt-4 ${response.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                {response.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}