import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-stone-100 to-amber-100">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
                        Nos Réalisations
                    </h1>
                    <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                        Découvrez notre portfolio de créations exceptionnelles : villas de prestige,
                        mobilier sur mesure et accessoires décoratifs qui témoignent de notre savoir-faire
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;