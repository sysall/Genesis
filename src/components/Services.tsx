import React, { useState } from 'react';
import { Music, Video, Package, Star, Check } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('audio');

  const audioServices = [
    { name: 'Enregistrement', price: '€25–80/h ou €200–500/jour', desc: 'Enregistrement studio professionnel avec équipement premium' },
    { name: 'Mixage', tiers: [
      { level: 'Basique', price: '€50–150', features: ['EQ & Compression de base', 'Mix Stéréo'] },
      { level: 'Standard', price: '€150–300', features: ['Traitement Avancé', 'Livraison Stems', 'Révisions Incluses'] },
      { level: 'Premium', price: '€300–500+', features: ['Mix Professionnel Complet', 'Formats Multiples', 'Révisions Illimitées'] }
    ]},
    { name: 'Mastering', tiers: [
      { level: 'Single', price: '€30–100', features: ['Master Piste Unique'] },
      { level: 'EP', price: '€150–350', features: ['EP 4-6 Pistes'] },
      { level: 'Album', price: '€300–800', features: ['Master Album Complet', 'Formats Multiples'] }
    ]},
    { name: 'Création Beats', tiers: [
      { level: 'Licence', price: '€20–100', features: ['Droits Non-exclusifs'] },
      { level: 'Exclusif', price: '€200–1000+', features: ['Droits Exclusifs Complets'] },
      { level: 'Sur Mesure', price: '€150–500+', features: ['Création Personnalisée'] }
    ]},
    { name: 'Voice-over', price: '€50–100/h | Avec montage €150–300', desc: 'Enregistrement et montage voix professionnels' },
    { name: 'Podcast', tiers: [
      { level: 'Basique', price: '€100–500', features: ['Enregistrement & Montage'] },
      { level: 'Standard', price: '€500–2000', features: ['Montage Avancé', 'Mix & Master'] },
      { level: 'Premium', price: '€2000–10,000+', features: ['Production Complète', 'Formats Multiples'] }
    ]}
  ];

  const videoServices = [
    { name: 'Clip Musical', tiers: [
      { level: 'Basique', price: '€500–1000', features: ['Lieu Unique', 'Montage Simple', 'Tournage 1 Jour'] },
      { level: 'Standard', price: '€1000–3000', features: ['Lieux Multiples', 'Montage Avancé', 'Étalonnage'] },
      { level: 'Premium', price: '€3000–10,000+', features: ['Production Complète', 'VFX', 'Équipe Professionnelle'] }
    ]},
    { name: 'Montage', tiers: [
      { level: 'Basique', price: '€200–600', features: ['Montage Simple', 'Correction Couleur'] },
      { level: 'Complet', price: '€600–2000', features: ['Montage Avancé', 'VFX', 'Motion Graphics'] }
    ]},
    { name: 'Effets Spéciaux', tiers: [
      { level: 'Simple', price: '€100–500', features: ['Effets de Base'] },
      { level: 'Avancé', price: '€500–5000+', features: ['VFX Complexes', 'Éléments CGI'] }
    ]},
    { name: 'Animation 3D', tiers: [
      { level: 'Logo', price: '€150–500', features: ['Animation Logo 3D'] },
      { level: 'Scène Complète', price: '€1000–10,000+', features: ['Scènes 3D Complètes'] }
    ]},
    { name: 'Publicité', tiers: [
      { level: 'Basique', price: '€100–500', features: ['Publicité Simple'] },
      { level: 'Avancé', price: '€500–5000+', features: ['Publicité Avancée'] }
    ]}
  ];

  const packages = [
    {
      name: 'Pack Débutant',
      price: '€600',
      features: ['3h Studio', 'Licence Beat', 'Mix & Master (1 piste)', 'Artwork Pochette'],
      popular: false
    },
    {
      name: 'Promo Clip Musical',
      price: '€1,200',
      features: ['Tournage 1 Jour', 'Montage Basique', 'VFX Simples', 'Formats Réseaux Sociaux'],
      popular: true
    },
    {
      name: 'Sortie Complète',
      price: '€2,500+',
      features: ['Beat Exclusif', 'Session Enregistrement', 'Mix & Master', 'Clip Musical', 'Support Distribution'],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nos <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Services audio et vidéo professionnels avec tarification transparente
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-full p-2">
            {[
              { id: 'audio', label: 'Audio', icon: Music },
              { id: 'video', label: 'Vidéo', icon: Video },
              { id: 'packages', label: 'Packs', icon: Package }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 mr-2 last:mr-0 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5 inline-block mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Audio Services */}
        {activeTab === 'audio' && (
          <div className="grid md:grid-cols-2 gap-8">
            {audioServices.map((service, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                {service.tiers ? (
                  <div className="space-y-4">
                    {service.tiers.map((tier, tierIndex) => (
                      <div key={tierIndex} className="bg-gray-800/50 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-purple-400">{tier.level}</span>
                          <span className="text-cyan-400 font-bold">{tier.price}</span>
                        </div>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {tier.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <Check className="w-4 h-4 text-green-400 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</p>
                    <p className="text-gray-300">{service.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Video Services */}
        {activeTab === 'video' && (
          <div className="grid md:grid-cols-2 gap-8">
            {videoServices.map((service, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <div className="space-y-4">
                  {service.tiers.map((tier, tierIndex) => (
                    <div key={tierIndex} className="bg-gray-800/50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-purple-400">{tier.level}</span>
                        <span className="text-cyan-400 font-bold">{tier.price}</span>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="w-4 h-4 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Package Services */}
        {activeTab === 'packages' && (
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/25' : 'border-gray-700/50 hover:border-purple-500/50'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold text-cyan-400 mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-2xl hover:shadow-purple-500/25'
                    : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  Commencer
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}