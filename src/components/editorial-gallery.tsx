import React from 'react';

export const EditorialGallery: React.FC = () => {
  return (
    <section className="bg-zinc-950 text-zinc-50 py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Gallery Header mimicking an art exhibition catalog */}
        <div className="border-b border-zinc-800 pb-8 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-2">Selected Shadows</p>
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl font-serif">
              Dark Artistry
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-xs font-light leading-relaxed">
            A curated look at form, shadow, and subversion. Exploring human features through a dark, romantic lens.
          </p>
        </div>

        {/* Asymmetrical CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[320px]">
          {MAKEUP_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden bg-zinc-900 border border-zinc-900/50 grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-700 ease-out ${photo.gridClass}`}
            >
              {/* Image Container with smooth scale on hover */}
              <div className="w-full h-full overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className={`w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-[1200ms] ease-out ${photo.imgClass || ''}`}
                  loading="lazy"
                />
              </div>

              {/* Minimal Dark Overlay gradient appearing from the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Text Meta Content layout */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {photo.category}
                </span>
                <h3 className="text-lg font-light tracking-wide text-white font-serif">
                  {photo.title}
                </h3>
              </div>
              
              {/* Subtle accent border line on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-zinc-800 pointer-events-none transition-colors duration-500" />
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default EditorialGallery;

interface PhotoItem {
  id: string;
  url: string;
  alt: string;
  title: string;
  category: string;
  gridClass: string; // Dynamic Tailwind grid spanning
  imgClass?: string; // Optional additional image classes
}

// Example curation mixing macro details, wide portraits, and standard framing
const MAKEUP_PHOTOS: PhotoItem[] = [
  {
    id: '1',
    url: '/images/2021-02-11.jpg',
    alt: 'Makeup with tiara and bold eyeliner',
    title: 'Autumn Queen',
    category: 'Profile Close-Up',
    gridClass: 'md:col-span-2 md:row-span-2' // Large anchor image
  },
  {
    id: '2',
    url: '/images/2021-09-15.jpg',
    alt: 'Makeup with brown, red, and piercings',
    title: 'Sepia Pierce',
    category: 'Three-Quarter Glance',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: '3',
    url: '/images/2021-05-02.jpg',
    alt: 'Makeup with tiara and tattoos',
    title: 'Pink Ink & Irony',
    category: 'Profile Turn',
    gridClass: 'md:col-span-1 md:row-span-2' // Tall portrait focus
  },
  {
    id: '4',
    url: '/images/2021-05-02-2.jpg',
    alt: 'High-drama pose with dark makeup and lace',
    title: 'Midnight Merlot',
    category: 'The Guarded Gaze',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: '5',
    url: '/images/2022-04-29.webp',
    alt: 'Close up of eyes with bold eyeliner and lashes',
    title: 'Shadowed Gaze',
    category: 'Macro Brow & Eyes',
    gridClass: 'md:col-span-2 md:row-span-1', // Wide landscape display
    imgClass: 'object-cover object-top'
  }
];
