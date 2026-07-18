/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  MessageCircle, 
  Check, 
  Copy, 
  CheckCircle2,
  Lock,
  ChevronLeft,
  AlertTriangle,
  Flame,
  X,
  Play
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const galleryItems = [
  {
    id: 1,
    type: "image",
    title: "Je suce en plein air 👅",
    url: "https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/2e865e42-43b8-4b78-98c9-64c050095d79.jpeg"
  },
  {
    id: 2,
    type: "image",
    title: "Il me met des doigts 😻",
    url: "https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/b08fd204-449a-4ec8-b9e4-e5fbe27b3f24.jpeg"
  },
  {
    id: 3,
    type: "image",
    title: "Je suce à cause de la Défaite de la France 🇫🇷 😣",
    url: "https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/958e1e08-98bc-4dbc-85d5-4768ce4627ba.jpeg"
  },
  {
    id: 4,
    type: "image",
    title: "Un avant goût 🌹",
    url: "https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/b7a22a37-0f87-457b-bdbd-8cf967b78c52.jpeg"
  },
  {
    id: 5,
    type: "image",
    title: "Moment de complicité 🔥",
    url: "https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/4469696f-f050-48c2-8cd5-59dbd0c1817f.jpeg"
  },
  {
    id: 6,
    type: "image",
    title: "Rien que pour toi... 💋",
    url: "https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/35ec6e2a-a7f1-462c-a226-ccd9e0f58e31.jpeg"
  },
  {
    id: 7,
    type: "image",
    title: "Petite tenue du jour 🖤",
    url: "https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/5d113165-113e-478f-b55c-2bb9f2df99a6.jpeg"
  },
  {
    id: 8,
    type: "image",
    title: "Prête pour ce soir ? 💦",
    url: "https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/e261b096-0ce0-400f-a527-46c2fbfb50d3.jpeg"
  },
  {
    id: 9,
    type: "video",
    title: "Ma petite surprise... 🎁",
    url: "https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/cb323039-1a6e-49ee-a753-c825538f2ee8.mp4"
  }
];

export default function App() {
  // App parameters as provided by the user
  const name = "Amira sun";
  const category = "Mannequin et model de contenu";
  const description = "Bienvenu chez moi, ne soit pas timide et cliques sur le bouton ci dessous, pour m'envoyer un message sur WhatsApp. je t'attend mon bb🍆🍑je mouille déjà💦";
  
  // Custom URLs provided by the user
  const profileImg = "https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/39459b08-ed49-4496-b031-16079d0cbc78.png";
  const coverImg = "https://ysbiedwkakdqadxtuwab.supabase.co/storage/v1/object/public/uploads/f9252670-db08-49fd-81b5-aaf11dee5bc0.png";
  const isVerified = true;

  const [showShareToast, setShowShareToast] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [visitorCountry, setVisitorCountry] = useState("ton pays");
  const [activeMedia, setActiveMedia] = useState<typeof galleryItems[0] | null>(null);

  // Fetch visitor country by IP for personalization
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_name) {
          let name = data.country_name;
          if (name.toLowerCase() === "côte d'ivoire" || name.toLowerCase() === "cote d'ivoire") {
            setVisitorCountry("en Côte d'Ivoire");
          } else {
            setVisitorCountry(`au ${name}`);
          }
        }
      })
      .catch(() => {
        // Fallback to second service if first is blocked or fails
        fetch("https://ip-api.com/json")
          .then((res) => res.json())
          .then((data) => {
            if (data && data.country) {
              let name = data.country;
              if (name.toLowerCase() === "côte d'ivoire" || name.toLowerCase() === "cote d'ivoire") {
                setVisitorCountry("en Côte d'Ivoire");
              } else {
                setVisitorCountry(`au ${name}`);
              }
            }
          })
          .catch(() => {
            setVisitorCountry("dans ton pays");
          });
      });
  }, []);

  // Handle Share link copy
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-0 sm:p-6 select-none relative overflow-x-hidden">
      
      {/* Absolute Decorative Ambient Background Blurs */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-rose-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div 
        id="profile-card"
        className="w-full max-w-md min-h-screen sm:min-h-[850px] bg-[#0c0c0c] sm:rounded-3xl shadow-2xl border-0 sm:border border-neutral-900 overflow-hidden flex flex-col justify-between relative"
      >
        <AnimatePresence mode="wait">
          {!showPaywall ? (
            /* --- PRIMARY PROFILE VIEW --- */
            <motion.div 
              key="profile"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="flex-grow flex flex-col justify-between"
            >
              <div>
                {/* Cover Photo */}
                <div className="h-52 sm:h-56 w-full relative overflow-hidden bg-neutral-900">
                  <img 
                    src={coverImg} 
                    alt="Couverture" 
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-black/30" />
                </div>

                {/* Profile Photo Overlapping & Details */}
                <div className="px-6 pb-6 relative">
                  
                  {/* Avatar container */}
                  <div className="absolute -top-16 left-6">
                    <div className="w-28 h-28 rounded-full border-4 border-[#0c0c0c] shadow-xl overflow-hidden bg-neutral-800 relative">
                      <img 
                        src={profileImg} 
                        alt={name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Share button */}
                  <div className="flex justify-end pt-3">
                    <button 
                      onClick={handleShare}
                      className="bg-neutral-900 hover:bg-neutral-850 text-neutral-300 hover:text-white p-2.5 rounded-full transition-all duration-200 border border-neutral-800/80 cursor-pointer"
                      title="Partager"
                      id="btn-share"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Verified Model Name */}
                  <div className="mt-6 flex flex-col items-start">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="text-2xl font-bold text-white tracking-tight leading-tight">
                        {name}
                      </h1>
                      {isVerified && (
                        <span className="inline-flex items-center" title="Profil Vérifié" id="verified-badge">
                          <CheckCircle2 className="w-5.5 h-5.5 text-[#0095F6] fill-[#0095F6] text-white stroke-[2.5]" />
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-400 font-medium mt-1">
                      {category}
                    </p>
                  </div>

                  {/* Description / Bio */}
                  <div className="mt-5">
                    <p className="text-[14.5px] leading-relaxed text-neutral-300 font-light whitespace-pre-line">
                      {description}
                    </p>
                  </div>

                  {/* WhatsApp Action Button (Triggers paywall screen) */}
                  <div className="mt-8">
                    <button
                      onClick={() => setShowPaywall(true)}
                      className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-[15px] tracking-wide uppercase py-4 px-6 rounded-2xl shadow-xl shadow-[#25d366]/10 transition-all duration-300 group cursor-pointer"
                      id="btn-whatsapp-trigger"
                    >
                      <MessageCircle className="w-5 h-5 fill-current text-black" />
                      <span>Ecrire sur whatsapp</span>
                    </button>
                    
                    <p className="text-center text-xs text-neutral-500 mt-3 font-medium flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Disponible actuellement
                    </p>
                  </div>

                  {/* Elegant Modern 3x3 Media Gallery Section */}
                  <div className="mt-10 pt-8 border-t border-neutral-900">
                    <div className="flex items-center justify-between mb-4.5">
                      <h3 className="text-sm font-bold text-neutral-200 tracking-wider uppercase flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        Galerie Privée ({galleryItems.length})
                      </h3>
                      <span className="text-[11px] text-rose-400 font-bold bg-rose-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                        Exclusif
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {galleryItems.map((item) => (
                        <motion.div
                          key={item.id}
                          className="relative aspect-square rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/80 cursor-pointer group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setActiveMedia(item)}
                        >
                          {item.type === "video" ? (
                            <div className="w-full h-full relative">
                              <video
                                src={item.url}
                                className="w-full h-full object-cover"
                                muted
                                loop
                                playsInline
                                autoPlay
                              />
                              <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                                <Play className="w-5 h-5 text-white fill-current opacity-80" />
                              </div>
                            </div>
                          ) : (
                            <img
                              src={item.url}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                          )}
                          {/* Title Overlay on Hover */}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <p className="text-[10px] text-neutral-200 line-clamp-1 text-center leading-normal font-light">
                              {item.title}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Profile View Footer */}
              <div className="pb-8 pt-4 px-6 text-center border-t border-neutral-900/40">
                <p className="text-xs text-neutral-600 font-medium uppercase tracking-widest">
                  © {new Date().getFullYear()} {name} • Espace Officiel
                </p>
              </div>
            </motion.div>
          ) : (
            /* --- INTERMEDIATE HIGH-CONVERTING SCREEN --- */
            <motion.div 
              key="paywall"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25 }}
              className="flex-grow flex flex-col justify-between p-6"
            >
              <div>
                {/* Back button to main profile */}
                <button
                  onClick={() => setShowPaywall(false)}
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white mb-6 bg-neutral-900/60 py-1.5 px-3 rounded-full border border-neutral-800 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Retour</span>
                </button>

                {/* Avatar with lock overlay to drive desire */}
                <div className="flex items-center gap-4 mb-6 bg-neutral-900/40 p-3.5 rounded-2xl border border-neutral-800/60">
                  <div className="relative">
                    <img 
                      src={profileImg} 
                      alt={name} 
                      className="w-12 h-12 rounded-full object-cover filter blur-[0.5px]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center">
                      <Lock className="w-4.5 h-4.5 text-emerald-400 stroke-[2.5]" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white flex items-center gap-1">
                      <span>{name}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#0095F6] fill-[#0095F6] text-white stroke-[2.5]" />
                    </h2>
                    <p className="text-[11px] text-neutral-400 font-medium">Numéro privé & accès privilégié</p>
                  </div>
                </div>

                {/* Error/Notice Container with solid emotion hook */}
                <div className="space-y-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4.5">
                    <div className="flex items-start gap-2.5">
                      <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <p className="text-[13.5px] leading-relaxed text-red-200 font-light">
                        Désolé, je ne partage plus mon numéro car je reçoit trop de message de plaisantins.
                      </p>
                    </div>
                  </div>

                  <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-5 space-y-4">
                    <p className="text-[14px] leading-relaxed text-neutral-200">
                      Désormais pour avoir mon numéro, tu dois payer <span className="text-emerald-400 font-bold text-base">2500 FCFA</span>, et avec ça tu as :
                    </p>

                    <ul className="space-y-3.5 text-[13.5px]">
                      <li className="flex items-start gap-2.5 text-neutral-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                        <span>Mon numéro WhatsApp, pour m'écrire ou appeler, prendre rendez-vous, ou des vidéos nudes de moi 🍆🍑</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-neutral-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                        <span>Numéro WhatsApp de mes amis vendeuse de piment aussi, que tu peux écrire pour mougouli aussi ; j'ai plus de 30 amis disponible <span className="text-emerald-300 font-semibold underline decoration-emerald-500/50">{visitorCountry}</span></span>
                      </li>
                    </ul>
                  </div>

                  {/* Punchy closing call to emotion */}
                  <div className="text-center py-2 px-3 bg-neutral-900/30 rounded-xl border border-neutral-900">
                    <p className="text-[13px] text-neutral-400 italic">
                      2500F c'est rien, si tu n'as pas ça comment tu comptes payer les 5000F pour le mougouli ? humm 😂
                    </p>
                  </div>
                </div>

                {/* Ultimate Conversion Checkout CTA Button */}
                <div className="mt-6">
                  <motion.a
                    href="https://izimomo.vercel.app/pay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-black font-bold text-[15px] tracking-wide uppercase py-4 px-6 rounded-2xl shadow-xl shadow-emerald-500/10 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    id="btn-unlock-numbers"
                  >
                    <Flame className="w-5 h-5 fill-current text-black animate-pulse" />
                    <span>DEBLOQUER LES NUMEROS</span>
                  </motion.a>

                  <div className="flex items-center justify-center gap-5 mt-4 text-[11px] text-neutral-500 font-medium">
                    <span className="flex items-center gap-1">🔒 Paiement Sécurisé</span>
                    <span className="flex items-center gap-1">⚡ Déblocage Immédiat</span>
                  </div>
                </div>

              </div>

              {/* Conversion Footer */}
              <div className="pb-4 pt-8 text-center">
                <p className="text-xs text-neutral-700 font-medium uppercase tracking-widest">
                  Accès Privé Amira Sun • Garantie 100% Réel
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Copy Link Success Toast Overlay */}
        <AnimatePresence>
          {showShareToast && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-50 bg-neutral-800 border border-neutral-700 text-white px-5 py-2.5 rounded-full text-xs font-medium shadow-xl flex items-center gap-2"
            >
              <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
              <span>Lien du profil copié !</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Elegant Minimalist Lightbox Modal */}
        <AnimatePresence>
          {activeMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md"
              onClick={() => setActiveMedia(null)}
            >
              <button
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors border border-neutral-800 cursor-pointer"
                onClick={() => setActiveMedia(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div 
                className="relative max-w-lg w-full bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-900 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-square w-full bg-black flex items-center justify-center">
                  {activeMedia.type === "video" ? (
                    <video
                      src={activeMedia.url}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                  ) : (
                    <img
                      src={activeMedia.url}
                      alt={activeMedia.title}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md py-1 px-3 rounded-full border border-neutral-800/50">
                    <p className="text-xs text-rose-400 font-bold tracking-wider uppercase flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-rose-500 animate-ping" />
                      Aperçu Privé
                    </p>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">{activeMedia.title}</h4>
                    <p className="text-xs text-neutral-400 mt-1">Fichier de la galerie VIP d'Amira Sun</p>
                  </div>

                  <div className="pt-2 border-t border-neutral-900">
                    <button
                      onClick={() => {
                        setActiveMedia(null);
                        setShowPaywall(true);
                      }}
                      className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-[14px] uppercase py-3.5 px-5 rounded-xl transition-all duration-300 shadow-lg shadow-[#25d366]/5 cursor-pointer"
                    >
                      <MessageCircle className="w-4.5 h-4.5 fill-current text-black" />
                      <span>Obtenir son WhatsApp & voir tout</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

