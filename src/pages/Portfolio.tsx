import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ZoomIn } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Tous nos projets' },
    { id: 'villas', label: 'Villas de luxe' },
    { id: 'apartments', label: 'Appartements' },
    { id: 'furniture', label: 'Mobilier sur mesure' },
    { id: 'accessories', label: 'Accessoires décoratifs' }
  ];

  const projects = [
    {
      id: 1,
      title: "Villa Sidi Bou Said",
      category: "villas",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Aménagement complet d'une villa avec mobilier en bois massif"
    },
    {
      id: 2,
      title: "Bibliothèque sur mesure",
      category: "furniture",
      image: "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Bibliothèque murale en chêne avec éclairage intégré"
    },
    {
      id: 3,
      title: "Cuisine moderne",
      category: "apartments",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Cuisine contemporaine avec îlot central en noyer"
    },
    {
      id: 4,
      title: "Dressing de luxe",
      category: "furniture",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Dressing sur mesure avec finitions haut de gamme"
    },
    {
      id: 5,
      title: "Résidence El Manar",
      category: "villas",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Rénovation complète avec habillages muraux en bois"
    },
    {
      id: 6,
      title: "Objets décoratifs",
      category: "accessories",
      image: "https://images.pexels.com/photos/1580114/pexels-photo-1580114.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Collection d'accessoires artisanaux en bois sculpté"
    },
    {
      id: 7,
      title: "Salon moderne",
      category: "apartments",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Mobilier de salon contemporain en ébène"
    },
    {
      id: 8,
      title: "Bureau exécutif",
      category: "furniture",
      image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Bureau présidentiel avec rangements intégrés"
    },
    {
      id: 9,
      title: "Cadres artistiques",
      category: "accessories",
      image: "https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Cadres et miroirs sculptés à la main"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
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

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4" />
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatePresence>
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => setSelectedImage(project.image)}
                          className="bg-white text-stone-800 p-3 rounded-full hover:bg-amber-100 transition-colors"
                        >
                          <ZoomIn className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Agrandir l'image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
    </div>
  );
};

export default Portfolio;