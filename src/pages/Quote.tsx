import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
    address: ''
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    'Aménagement intérieur complet',
    'Mobilier sur mesure',
    'Cuisine équipée',
    'Dressing et rangements',
    'Bibliothèque et étagères',
    'Accessoires décoratifs',
    'Rénovation mobilier',
    'Autre (préciser en description)'
  ];

  const budgetRanges = [
    'Moins de 5,000 DT',
    '5,000 - 10,000 DT',
    '10,000 - 25,000 DT',
    '25,000 - 50,000 DT',
    '50,000 - 100,000 DT',
    'Plus de 100,000 DT'
  ];

  const timelineOptions = [
    'Moins de 1 mois',
    '1-3 mois',
    '3-6 mois',
    '6-12 mois',
    'Plus de 12 mois',
    'Pas de contrainte de délai'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceID = 'service ID';
      const templateID = 'template ID';
      const userID = 'EmailJS public key';

      const templateParams = {
        to_email: 'secazerengazzou@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        description: formData.description,
        budget: formData.budget,
        timeline: formData.timeline,
        address: formData.address,
        message: `Nouvelle demande de devis:
          Nom: ${formData.name}
          Email: ${formData.email}
          Téléphone: ${formData.phone}
          Type de projet: ${formData.projectType}
          Budget estimatif: ${formData.budget}
          Délai souhaité: ${formData.timeline}
          Adresse: ${formData.address}
          Description du projet:
          ${formData.description}
          ${files ? `Nombre de fichiers joints: ${files.length}` : 'Aucun fichier joint'}`
      };

      await emailjs.send(serviceID, templateID, templateParams, userID);

      console.log('Email envoyé avec succès:', templateParams);

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        description: '',
        budget: '',
        timeline: '',
        address: ''
      });
      setFiles(null);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      alert('Une erreur s\'est produite lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };


  if (isSuccess) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Demande envoyée !</h2>
          <p className="text-lg text-stone-600 mb-8">
            Merci pour votre confiance. Nous vous recontacterons sous 24h pour discuter de votre projet.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Faire une nouvelle demande
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-stone-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
              Demander un Devis
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Parlez-nous de votre projet en détail. Plus nous en saurons sur vos besoins et vos attentes,
              plus nous pourrons vous proposer une solution sur mesure et un devis précis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-stone-50 rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Nom */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Votre nom et prénom"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="+216 XX XXX XXX"
                  />
                </div>

                {/* Type de projet */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-stone-700 mb-2">
                    Type de projet *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-stone-700 mb-2">
                    Budget estimatif
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  >
                    <option value="">Sélectionnez votre budget</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Délai */}
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-stone-700 mb-2">
                    Délai souhaité
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  >
                    <option value="">Sélectionnez un délai</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Adresse */}
              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-semibold text-stone-700 mb-2">
                  Adresse du projet
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Où se déroulera le projet ?"
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-semibold text-stone-700 mb-2">
                  Description détaillée du projet *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Décrivez votre projet en détail : dimensions, styles souhaités, matériaux préférés, contraintes particulières, inspirations, etc."
                />
              </div>

              {/* Upload de fichiers */}
              <div className="mb-8">
                <label htmlFor="files" className="block text-sm font-semibold text-stone-700 mb-2">
                  Photos et documents (optionnel)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="files"
                    name="files"
                    onChange={handleFileChange}
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    className="hidden"
                  />
                  <label
                    htmlFor="files"
                    className="w-full border-2 border-dashed border-stone-300 rounded-lg p-8 text-center cursor-pointer hover:border-amber-500 transition-colors block"
                  >
                    <Upload className="w-8 h-8 text-stone-400 mx-auto mb-4" />
                    <p className="text-stone-600">
                      Cliquez pour ajouter des photos ou documents
                      <br />
                      <span className="text-sm text-stone-500">
                        Formats acceptés: JPG, PNG, PDF, DOC (max 10MB)
                      </span>
                    </p>
                  </label>
                </div>
                {files && (
                  <div className="mt-4">
                    <p className="text-sm text-stone-600 mb-2">Fichiers sélectionnés:</p>
                    <ul className="list-disc list-inside text-sm text-stone-600">
                      {Array.from(files).map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Informations importantes */}
              <div className="mb-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-stone-800 mb-3">💡 Pour un devis précis :</h3>
                <ul className="text-sm text-stone-600 space-y-1 list-disc list-inside">
                  <li>Plus votre description est détaillée, plus notre devis sera précis</li>
                  <li>N'hésitez pas à joindre des photos d'inspiration ou de l'espace</li>
                  <li>Mentionnez vos contraintes techniques ou budgétaires</li>
                  <li>Nous vous recontacterons sous 24h pour affiner votre demande</li>
                </ul>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-stone-400 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-colors"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer ma demande de devis</span>
                  </>
                )}
              </motion.button>

              <p className="text-sm text-stone-500 text-center mt-4">
                En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe concernant votre projet.
              </p>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;