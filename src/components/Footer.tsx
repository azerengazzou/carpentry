import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+216 24 012 822 </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>idrissmenuiserie@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-1" />
                <span>Rue de saraiech<br />M'saken, Sousse, Tunisie</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Services</h3>
            <ul className="space-y-2">
              <li>Menuiserie sur mesure</li>
              <li>Mobilier de luxe</li>
              <li>Aménagement intérieur</li>
              <li>Décoration bois</li>
              <li>Restauration mobilier</li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Horaires</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-amber-400" />
                <div>
                  <p>Lun - Ven: 8h - 18h</p>
                  <p>Samedi et Dimanche: 8h - 16h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100063622928513" className="p-2 bg-stone-700 rounded-lg hover:bg-amber-700 transition-colors" target='_blank' rel='noopener noreferrer'>
                <Facebook className="w-5 h-5" />
              </a>
              {/* 
              <a href="#" className="p-2 bg-stone-700 rounded-lg hover:bg-amber-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-stone-700 rounded-lg hover:bg-amber-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              */}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-700 text-center">
          <p>&copy; 2024 Menuiserie Boukadida. Tous droits réservés.</p>
          <p className="text-sm text-stone-400 mt-2">Créé avec passion pour l'artisanat du bois</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;