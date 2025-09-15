import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

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
                        Prêt à Concrétiser Votre Projet ?
                    </h2>
                    <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
                        Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons transformer votre espace
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/quote"
                            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-colors group"
                        >
                            <span>Obtenir un devis gratuit</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-transparent border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors"
                        >
                            Nous contacter
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default CTASection;