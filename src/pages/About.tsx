import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Leaf } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Artisanale",
      description: "Chaque pièce est créée avec un souci du détail exceptionnel et un savoir-faire transmis de génération en génération."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Écoute Client",
      description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre et réaliser leurs visions les plus exigeantes."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion du Bois",
      description: "Notre amour pour le travail du bois se ressent dans chaque création, de la sélection des matériaux à la finition."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Respect de l'Environnement",
      description: "Nous privilégions les bois issus de forêts gérées durablement et adoptons des pratiques éco-responsables."
    }
  ];

  const team = [
    {
      name: "Mohamed Boukadida",
      role: "Fondateur & Maître Artisan",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "30 ans d'expérience dans la menuiserie fine"
    },
    {
      name: "Amira Boukadida",
      role: "Directrice Créative",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Experte en design d'intérieur et aménagement"
    },
    {
      name: "Karim Boukadida",
      role: "Responsable Production",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Spécialiste des techniques modernes de fabrication"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-100 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
                Notre Histoire, Notre Passion
              </h1>
              <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                Depuis 1995, Menuiserie Boukadida perpétue la tradition artisanale tunisienne 
                en alliant savoir-faire ancestral et techniques modernes pour créer des pièces 
                d'exception qui traversent les générations.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Notre atelier familial s'est bâti une réputation d'excellence grâce à notre 
                engagement constant envers la qualité, l'innovation et la satisfaction de nos clients.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/5974062/pexels-photo-5974062.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Atelier menuiserie"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-amber-600">25+</div>
                <div className="text-stone-600">Années d'expertise</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Notre Évolution
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Un parcours jalonné d'innovations et de réalisations exceptionnelles
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200"></div>
              
              {[
                { year: "1995", title: "Création de l'entreprise", description: "Mohamed Boukadida fonde l'atelier avec une vision : créer des meubles d'exception" },
                { year: "2005", title: "Expansion de l'atelier", description: "Agrandissement des locaux et acquisition d'équipements de pointe" },
                { year: "2015", title: "Nouvelle génération", description: "Amira et Karim rejoignent l'entreprise, apportant innovation et créativité" },
                { year: "2025", title: "Vision future", description: "Développement durable et technologies avancées au service de l'artisanat" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-stone-50 p-6 rounded-xl shadow-md">
                      <div className="text-2xl font-bold text-amber-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">{item.title}</h3>
                      <p className="text-stone-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et créations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="text-amber-600 mb-4 group-hover:text-amber-700 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Une famille d'artisans passionnés unis par l'amour du beau travail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-1">{member.name}</h3>
                <div className="text-amber-600 font-medium mb-3">{member.role}</div>
                <p className="text-stone-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;