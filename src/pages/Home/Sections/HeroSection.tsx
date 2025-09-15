import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: "url('/img.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-50 text-center text-gray-50 px-1 max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold mb-5"
                >
                    L’Excellence du Bois sur Mesure
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-1xl lg:text-2xl mb-10 text-stone-200 leading-relaxed max-w-1xl mx-auto text-center"
                >
                    Depuis 1995, notre menuiserie transforme vos projets en œuvres d’art sur mesure.Spécialistes du bois haut de gamme pour villas, résidences de prestige et mobilier unique,
                    nous allions savoir-faire artisanal et design élégant pour créer des espaces et meubles qui inspirent.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        to="/portfolio"
                        className="bg-amber-800 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-colors group"
                    >
                        <span>Découvrir nos réalisations</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/quote"
                        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-stone-800 transition-colors"
                    >
                        Demander un devis
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-3 bg-white rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
