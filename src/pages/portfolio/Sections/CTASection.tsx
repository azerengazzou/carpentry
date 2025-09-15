import { motion } from "framer-motion";

const CTASection = () => {
    return (
        <section className="py-20 bg-amber-100">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
                        Votre Projet Sera Notre Prochaine Réalisation
                    </h2>
                    <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
                        Inspiré par nos créations ? Parlons de votre projet et créons ensemble
                        quelque chose d'exceptionnel qui vous ressemble.
                    </p>
                    <motion.a
                        href="/quote"
                        className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Démarrer votre projet
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;