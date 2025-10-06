import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      content: "+216 24 012 822",
      action: "tel:+21624012822"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "idrissmenuiserie@gmail.com",
      subContent: "idrissmenuiserie@gmail.com",
      action: "mailto:idrissmenuiserie@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      content: "Rue de saraiech",
      subContent: "M'saken, Sousse, Tunisie",
      action: "https://www.google.com/maps/place/Sariech/@35.7421609,10.5758635,183m/data=!3m1!1e3!4m6!3m5!1s0x12fdf5d69e8c2ff7:0x4782203bfaa145a2!8m2!3d35.747925!4d10.569471!16s%2Fg%2F11sdwps521?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      content: "Lun - Ven: 8h - 18h",
      subContent: "Samedi et Dimanche: 8h - 16h"
    }
  ];

  const socialMedia = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      link: "https://wa.me/21624012822",
      color: "bg-green-500 hover:bg-green-600"
    }
  ];

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
              Contactez-Nous
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
              et vous accompagner dans la réalisation de vos projets les plus ambitieux.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-stone-800 mb-8">
                Informations de Contact
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-stone-50 transition-colors"
                  >
                    <div className="text-amber-600 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">{item.title}</h3>
                      <p className="text-stone-600">{item.content}</p>
                      {item.subContent && (
                        <p className="text-stone-500 text-sm">{item.subContent}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media & Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-stone-800 mb-4">
                  Contact Rapide
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                  <motion.a
                    href="tel:+21624012822"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Appeler maintenant</span>
                  </motion.a>
                </div>
              </div>

              {/* Additional Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-200"
              >
                <h3 className="font-semibold text-stone-800 mb-3">🏠 Visite de notre showroom</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Venez découvrir nos créations dans notre showroom. Rendez-vous sur rendez-vous pour
                  une visite personnalisée et des conseils d'experts.
                </p>
                <p className="text-stone-700 font-medium">
                  📞 Appelez-nous pour prendre rendez-vous
                </p>
              </motion.div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-stone-800 mb-8">
                Notre Localisation
              </h2>

              {/* Map Container */}
              <div className="relative h-96 bg-stone-200 rounded-xl overflow-hidden shadow-lg">
                {/* Placeholder pour Google Maps */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-stone-600 mx-auto mb-4" />
                    <p className="text-stone-700 font-semibold">Carte Google Maps</p>
                    <p className="text-stone-600 text-sm">
                      PHX9+5Q, M'saken, Tunisie
                    </p>
                  </div>
                </div>

                {/* You can replace this with actual Google Maps embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.496355763344!2d10.18145531525452!3d36.79915927996477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb7454a5e8a3%3A0x2f8b5b0d8e0a5d1!2sAvenue%20Habib%20Bourguiba%2C%20Tunis%2C%20Tunisia!5e0!3m2!1sen!2s!4v1635789456789"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Menuiserie Boukadida"
                ></iframe>
              </div>

              {/* Directions Button */}
              <motion.a
                href="https://maps.google.com/directions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Navigation className="w-5 h-5" />
                <span>Obtenir l'itinéraire</span>
              </motion.a>

              {/* Transport Information */}
              <div className="bg-stone-50 p-6 rounded-xl">
                <h3 className="font-semibold text-stone-800 mb-3">
                  🚗 Comment nous rejoindre
                </h3>
                <ul className="text-stone-600 text-sm space-y-2">
                  <li>• Parking gratuit disponible devant l'atelier</li>
                  <li>• Station de métro la plus proche : République (PHHX+GW M'saken, Tunisie)</li>
                  <li>• Arrêt de bus : Centre ville M'saken (800m)</li>
                  <li>• Accès facile depuis l'autoroute A1</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Questions Fréquentes
            </h2>
            <p className="text-xl text-stone-600">
              Trouvez rapidement les réponses à vos questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Quels sont vos délais de réalisation ?",
                a: "Les délais varient selon la complexité du projet, généralement entre 2 à 8 semaines. Nous vous donnons une estimation précise lors du devis."
              },
              {
                q: "Proposez-vous un service de livraison et d'installation ?",
                a: "Oui, nous gérons la livraison et l'installation de tous nos meubles sur mesure. Ce service est inclus dans le devis."
              },
              {
                q: "Quels types de bois utilisez-vous ?",
                a: "Nous travaillons avec des bois nobles (chêne, noyer, hêtre) et des bois exotiques de qualité, tous issus de forêts gérées durablement."
              },
              {
                q: "Puis-je visiter votre atelier ?",
                a: "Absolument ! Nous organisons des visites de notre atelier sur rendez-vous pour vous montrer notre savoir-faire et nos réalisations."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-stone-800 mb-3">{faq.q}</h3>
                <p className="text-stone-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;