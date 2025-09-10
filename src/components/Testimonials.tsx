import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Marcus Dubois',
      role: 'Artiste Hip-Hop',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      rating: 5,
      text: 'Genesis Media a transformé ma vision en réalité. La qualité de la production audio et vidéo a dépassé mes attentes. Équipe professionnelle, résultats incroyables !'
    },
    {
      id: 2,
      name: 'Sarah Martin',
      role: 'Productrice Musicale',
      avatar: 'https://images.pexels.com/photos/3779790/pexels-photo-3779790.jpeg',
      rating: 5,
      text: 'Travailler avec Genesis Media était incroyable. Ils ont parfaitement compris notre direction créative et ont livré un clip qui capture vraiment notre essence.'
    },
    {
      id: 3,
      name: 'David Moreau',
      role: 'Leader de Groupe',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 5,
      text: 'De l\'enregistrement au mix final, Genesis Media a géré notre album avec un tel professionnalisme. La qualité sonore est parfaite et exactement ce que nous voulions.'
    },
    {
      id: 4,
      name: 'Emma Leroy',
      role: 'Artiste Solo',
      avatar: 'https://images.pexels.com/photos/3772612/pexels-photo-3772612.jpeg',
      rating: 5,
      text: 'Le Pack Débutant était parfait pour mon premier single. Excellent rapport qualité-prix, résultats professionnels, et l\'équipe a rendu tout le processus confortable et agréable.'
    }
  ];

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ce Que Disent Nos <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ne nous croyez pas sur parole - écoutez les artistes et créateurs avec qui nous avons travaillé
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-6 right-6 text-purple-400/20">
                <Quote className="w-12 h-12" />
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-purple-500/30"
                />
                <div>
                  <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-purple-400">{testimonial.role}</p>
                  <div className="flex mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '200+', label: 'Projets Réalisés' },
            { number: '50+', label: 'Clients Satisfaits' },
            { number: '5★', label: 'Note Moyenne' },
            { number: '24/7', label: 'Support Disponible' }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}