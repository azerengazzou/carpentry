import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Users, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
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

  const stats = [
    { number: "25+", label: "Années d'expérience" },
    { number: "500+", label: "Projets réalisés" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "15", label: "Artisans qualifiés" }
  ];

  return (
    <div>
      {/* Hero Section */}
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

      {/* Services Section */}
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

      {/* Stats Section */}
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

      {/* CTA Section */}
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
    </div>
  );
};

export default Home;