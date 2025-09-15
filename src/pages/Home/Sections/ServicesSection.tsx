import { motion } from "framer-motion";
import { Hammer, Users, Sparkles, Award } from "lucide-react";

const SevicesSection = () => {
    const services = [
        {
            icon: <Hammer className="w-8 h-8" />,
            title: "Menuiserie Bois",
            description: "Création et fabrication de mobilier sur mesure en bois massif"
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Décoration Intérieure",
            description: "Aménagement complet d'espaces avec notre expertise du bois"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Meubles Haut de Gamme",
            description: "Fabrication artisanale de meubles de luxe et sur mesure"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Accessoires Décoratifs",
            description: "Objets d'art et accessoires en bois pour sublimer votre intérieur"
        }
    ];
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                        Nos Services d'Excellence
                    </h2>
                    <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                        De la conception à la réalisation, nous vous accompagnons dans tous vos projets de menuiserie et d'aménagement intérieur
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-stone-50 p-8 rounded-xl hover:shadow-lg transition-shadow group"
                        >
                            <div className="text-amber-600 mb-4 group-hover:text-amber-700 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-stone-800 mb-3">{service.title}</h3>
                            <p className="text-stone-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SevicesSection;
