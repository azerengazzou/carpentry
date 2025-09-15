import { motion } from "framer-motion";

const StatsSection = () => {
    const stats = [
        { number: "25+", label: "Années d'expérience" },
        { number: "500+", label: "Projets réalisés" },
        { number: "98%", label: "Clients satisfaits" },
        { number: "15", label: "Artisans qualifiés" }
    ];
    return (
        <section className="py-20 bg-stone-800 text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Notre Expertise en Chiffres
                    </h2>
                    <p className="text-xl text-stone-300">
                        Une expertise reconnue et une passion transmise de génération en génération
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-stone-300 text-lg">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;