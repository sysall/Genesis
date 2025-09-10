import React from 'react';
import { Music, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mr-3">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  GENESIS MEDIA
                </h3>
                <p className="text-gray-400 text-sm">Là où le Son Rencontre la Vision</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Studio d'enregistrement musical et vidéo professionnel offrant un son premium et des visuels cinématographiques pour créateurs, artistes et marques.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Youtube, Facebook].map((Social, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-cyan-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Social className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Enregistrement', 'Mixage & Mastering', 'Clips Musicaux', 'Création Beats', 'Voice-over', 'Animation 3D'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+33 1 23 45 67 89</li>
              <li>hello@genesismedia.com</li>
              <li>123 Rue de la Musique<br />Quartier Créatif</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Genesis Media. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Conditions d'Utilisation</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Politique des Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}