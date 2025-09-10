import React from 'react';
import { Music, Video, Headphones, Camera } from 'lucide-react';

export default function About() {
  const features = [
    { icon: Music, title: 'Excellence Audio', desc: 'Équipement d\'enregistrement de pointe et conception acoustique' },
    { icon: Video, title: 'Visuels Cinématographiques', desc: 'Production vidéo professionnelle avec technologie de pointe' },
    { icon: Headphones, title: 'Équipe Experte', desc: 'Professionnels de l\'industrie avec des années d\'expérience' },
    { icon: Camera, title: 'Vision Créative', desc: 'Approche unique pour donner vie à votre vision artistique' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-cyan-900/5"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            À Propos de <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Genesis Media</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Genesis Media fusionne l'excellence audio et les visuels cinématographiques pour aider les créateurs à donner vie à leur vision. 
            Nos installations de pointe et notre équipe expérimentée offrent l'environnement parfait pour votre parcours créatif.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}