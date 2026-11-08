    import React, { useState, useEffect, useRef, useMemo , createContext, useContext} from 'react';
    import {
    Building2,
    MapPin,
    BedDouble,
    Bath,
    Maximize2,
    Heart,
    ArrowUpRight,
    Compass,
    ShieldCheck,
    Sparkles,
    PhoneCall,
    Mail,
    Clock,
    CheckCircle2,
    ChevronRight,
    Menu,
    X,
    Sun,
    Moon,
    Layers,
    Eye,
    SlidersHorizontal,
    Award,
    TrendingUp,
    KeyRound,
    Search,
    Calendar,
    UserCheck,
    Star,
    ArrowRight,
    RotateCcw,
    Box
    } from 'lucide-react';

    // ============================================================================
    // MOCK DATA: CURATED LUXURY REAL ESTATE LISTINGS
    // ============================================================================
    const PROPERTIES_DATA = [
    {
        id: 'prop-1',
        title: 'The Solana Cliffside Pavilion',
        location: 'Amalfi Coast Promenade, Positano',
        category: 'Waterfront Villas',
        price: 14800000,
        priceFormatted: '$14,800,000',
        badge: 'Exclusive Mandate',
        beds: 6,
        baths: 8,
        sqft: '9,450',
        yearBuilt: 2025,
        architect: 'Studio Rossi & Partners',
        roiEstimate: '8.4% Annual Yield',
        coordinates: '40.6281° N, 14.4850° E',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
        gallery: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85'
        ],
        description:
        'Cantilevered over limestone cliffs with uninterrupted panoramic views, The Solana Pavilion pairs travertine stone minimalism with a 28-meter heated infinity edge pool, private funicular yacht access, and subterranean wine vault.',
        features: ['Private Yacht Mooring', '28m Infinity Pool', 'Subterranean Wine Cellar', 'Smart Biometric Security', 'Helipad Access']
    },
    {
        id: 'prop-2',
        title: 'Aurelia Sky Crown Penthouse',
        location: 'Billionaires’ Row, Midtown Manhattan',
        category: 'Penthouses',
        price: 22500000,
        priceFormatted: '$22,500,000',
        badge: 'New Listing',
        beds: 5,
        baths: 6.5,
        sqft: '7,820',
        yearBuilt: 2026,
        architect: 'Kengo Architectural Atelier',
        roiEstimate: '7.1% Annual Yield',
        coordinates: '40.7644° N, 73.9772° W',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
        gallery: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85'
        ],
        description:
        'Occupying the entire 84th and 85th floors, this double-height glass sanctuary features 360-degree skyline vistas, private high-speed elevator vestibule, wrap-around heated sky loggia, and bespoke bronze-trimmed interiors.',
        features: ['360° Skyline Loggia', 'Private Elevator Foyer', 'Custom Boffi Kitchen', 'Private Wellness Spa', '24/7 White-Glove Concierge']
    },
    {
        id: 'prop-3',
        title: 'Villa Serenissima Belvedere',
        location: 'Beverly Hills Trousdale Estates, CA',
        category: 'Modern Mansions',
        price: 18900000,
        priceFormatted: '$18,900,000',
        badge: 'Private Offer',
        beds: 7,
        baths: 10,
        sqft: '12,600',
        yearBuilt: 2025,
        architect: 'Vanguard Modernist Group',
        roiEstimate: '9.2% Annual Yield',
        coordinates: '34.0928° N, 118.3965° W',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
        gallery: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85'
        ],
        description:
        'Designed for effortless indoor-outdoor Californian living, Villa Serenissima blends warm limestone, French white oak, and zero-edge motorized glass walls that open onto a reflecting courtyard and sunset pavilion.',
        features: ['Zero-Edge Glass Walls', '8-Car Collector Gallery', 'Dolby Atmos Screening Room', 'Zero-Edge Lap Pool', 'Guest Casita']
    },
    {
        id: 'prop-4',
        title: 'Château de Lumière Dorée',
        location: 'Lake Geneva Riviera, Montreux',
        category: 'Heritage Estates',
        price: 26400000,
        priceFormatted: '$26,400,000',
        badge: 'Trophy Asset',
        beds: 9,
        baths: 11,
        sqft: '15,200',
        yearBuilt: 1912,
        architect: 'Restored by Atelier Genève (2025)',
        roiEstimate: '6.8% Annual Yield',
        coordinates: '46.4312° N, 6.9107° E',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85'
        ],
        description:
        'A Belle Époque masterpiece set within 4.5 acres of manicured lakefront parkland. Meticulously restored with geothermal climate engineering, grand limestone ballrooms, and private boathouse on Lake Geneva.',
        features: ['4.5 Acres Lakefront Park', 'Private Boathouse & Pier', 'Belle Époque Ballroom', 'Equestrian Paddock', 'Staff Quarters']
    },
    {
        id: 'prop-5',
        title: 'Lumina Glass House & Sanctuary',
        location: 'Palm Jumeirah Frond G, Dubai',
        category: 'Waterfront Villas',
        price: 16200000,
        priceFormatted: '$16,200,000',
        badge: 'Architectural Gem',
        beds: 6,
        baths: 7,
        sqft: '10,800',
        yearBuilt: 2026,
        architect: 'Zaha Continuum Studio',
        roiEstimate: '10.4% Annual Yield',
        coordinates: '25.1124° N, 55.1390° E',
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85',
        gallery: [
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85'
        ],
        description:
        'With 45 meters of private white-sand beachfront and bespoke Italian travertine louvers that track the desert sun, Lumina Glass House redefines ultra-prime waterfront living.',
        features: ['45m Private Beachfront', 'Solar-Tracking Louvers', 'Rooftop Sky Majlis', 'Hammam & Cryo Chamber', 'Submerged Fire Lounge']
    },
    {
        id: 'prop-6',
        title: 'The Kensington Orangerie Residence',
        location: 'Kensington Palace Gardens, London',
        category: 'Heritage Estates',
        price: 19750000,
        priceFormatted: '$19,750,000',
        badge: 'Off-Market Access',
        beds: 6,
        baths: 7.5,
        sqft: '8,900',
        yearBuilt: 2024,
        architect: 'Mayfair Heritage Conservation',
        roiEstimate: '7.5% Annual Yield',
        coordinates: '51.5058° N, 0.1897° W',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
        gallery: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'
        ],
        description:
        'Behind a Grade-II listed Portland stone facade lies an extraordinary triple-level subterranean leisure wing with a 20-meter ozone swimming pool, botanical winter garden, and museum-grade art lighting.',
        features: ['Grade-II Portland Facade', '20m Subterranean Pool', 'Botanical Winter Garden', 'Museum-Grade Lighting', 'Chauffeur Turntable Garage']
    }
    ];

    const TESTIMONIALS_DATA = [
    {
        quote:
        'Aurelia Estates orchestrated our acquisition of the Lake Geneva estate with complete discretion. Their interactive 3D architectural telemetry allowed us to inspect structural renovations before boarding our flight.',
        author: 'Lord Henrik Von Berg',
        role: 'Managing Partner, Geneva Family Office',
        property: 'Château de Lumière Dorée ($26.4M)',
        rating: 5
    },
    {
        quote:
        'From cross-border tax structuring to curating off-market penthouses in Manhattan, Aurelia operates less like a brokerage and more like a private architectural investment bank.',
        author: 'Elena Rostova-Vance',
        role: 'Founder, Vance Contemporary Art Foundation',
        property: 'Aurelia Sky Crown Penthouse ($22.5M)',
        rating: 5
    },
    {
        quote:
        'Every detail—from private helicopter transfers to the bespoke architectural dossier—was handled with peerless precision. We closed on our Amalfi sanctuary in 19 days.',
        author: 'Marcus & Sofia Sterling',
        role: 'Venture Capitalists, Zurich & Positano',
        property: 'The Solana Cliffside Pavilion ($14.8M)',
        rating: 5
    }
    ];

    // ============================================================================
    // REUSABLE SCROLL REVEAL WRAPPER (INTERSECTION OBSERVER)
    // ============================================================================
    function ScrollReveal({
    children,
    variant = 'fade-up', // 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up'
    delay = 0,
    className = '',
    threshold = 0.14
    }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            }
        },
        { threshold, rootMargin: '0px 0px -40px 0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
        ref={ref}
        style={{ transitionDelay: `${delay}ms` }}
        className={`reveal-element reveal-${variant} ${isVisible ? 'is-revealed' : ''} ${className}`}
        >
        {children}
        </div>
    );
    }
function SectionTransitionDivider({ label = 'AURELIA ARCHITECTURAL ARCHIVE' }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative py-6 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4">
        <div
          className={`h-[1px] bg-gradient-to-r from-transparent via-[#D4A437] to-[#EDE7DB] transition-all duration-1000 ease-out ${
            active ? 'w-24 sm:w-48 opacity-100' : 'w-0 opacity-0'
          }`}
        />
        <div
          className={`flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#EDE7DB] bg-[#FFFAF0] text-[10px] tracking-[0.25em] uppercase font-medium text-[#192638] transition-all duration-700 ${
            active ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A437] animate-pulse" />
          <span>{label}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A437] animate-pulse" />
        </div>
        <div
          className={`h-[1px] bg-gradient-to-l from-transparent via-[#D4A437] to-[#EDE7DB] transition-all duration-1000 ease-out ${
            active ? 'w-24 sm:w-48 opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>
    </div>
  );
}
    // ============================================================================
    // SECTION TRANSITION ORNAMENT DIVIDER
    // ============================================================================
/* ============================================================================
   InteractiveHero3DModel  —  modern 3-level villa (CSS 3D), drop-in replacement

   Needs these imports in the file that contains it (same ones you already use):
     import React, { useRef, useState, useEffect, createContext, useContext } from 'react';
     import { Box, Sun, Moon, Layers, RotateCcw, Compass, TrendingUp, Eye } from 'lucide-react';

   Props / data it relies on are unchanged:
     onInspectProperty(property)   and   PROPERTIES_DATA[0]
   ========================================================================== */

const VillaSceneContext = createContext({ isNight: false });

const VILLA_DEFAULT_ROTATION = { x: -50, y: -38 };
const VILLA_GLASS = 'rgba(170, 222, 240, 0.38)';

const VILLA_FLOORS = {
  all: { label: 'Full Model', note: 'Move cursor to orbit • click a floor to isolate it' },
  ground: { label: 'L1 • Entrance & Garage', note: 'Foyer, 2-car garage, covered porch and garden' },
  upper: { label: 'L2 • Upper Living Floor', note: 'Glass salon, chef kitchen and master suite with balcony' },
  roof: { label: 'L3 • Rooftop Pool Deck', note: 'Heated infinity pool, sun loungers and 360° vista' },
};

const VILLA_TABS = [
  { id: 'all', label: 'Full Model' },
  { id: 'roof', label: 'L3 Roof Pool' },
  { id: 'upper', label: 'L2 Living Floor' },
  { id: 'ground', label: 'L1 Entrance' },
];

/* ---------------------------------------------------------------------------
   3D PRIMITIVES
   World axes: x → right, y → up, z → toward the viewer. Ground is y = 0.
--------------------------------------------------------------------------- */

// Solid cuboid. (x, z) = centre on the ground plane, y = BOTTOM height.
function VillaBlock({ x = 0, y = 0, z = 0, w, h, d, color = '#f4f4f2', top, glass = false, op = 1, onClick }) {
  const { isNight } = useContext(VillaSceneContext);

  const faces = [
    { k: 'front', fw: w, fh: h, t: `translateZ(${d / 2}px)`, sh: 0 },
    { k: 'back', fw: w, fh: h, t: `rotateY(180deg) translateZ(${d / 2}px)`, sh: 0.16 },
    { k: 'right', fw: d, fh: h, t: `rotateY(90deg) translateZ(${w / 2}px)`, sh: 0.2 },
    { k: 'left', fw: d, fh: h, t: `rotateY(-90deg) translateZ(${w / 2}px)`, sh: 0.1 },
    { k: 'top', fw: w, fh: d, t: `rotateX(90deg) translateZ(${h / 2}px)`, sh: -0.1 },
    { k: 'bottom', fw: w, fh: d, t: `rotateX(-90deg) translateZ(${h / 2}px)`, sh: 0.4 },
  ];

  const paint = (face) => {
    const base = face.k === 'top' && top ? top : color;
    if (glass) return base;
    const layers = [];
    if (isNight) layers.push('linear-gradient(rgba(10,18,42,0.5), rgba(10,18,42,0.5))');
    if (face.sh > 0) layers.push(`linear-gradient(rgba(0,0,0,${face.sh}), rgba(0,0,0,${face.sh}))`);
    if (face.sh < 0) layers.push(`linear-gradient(rgba(255,255,255,${-face.sh}), rgba(255,255,255,${-face.sh}))`);
    return layers.length ? `${layers.join(', ')}, ${base}` : base;
  };

  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        transformStyle: 'preserve-3d',
        transform: `translate3d(${x}px, ${-(y + h / 2)}px, ${z}px)`,
        cursor: onClick ? 'pointer' : undefined,
      }}
    >
      {faces.map((f) => (
        <div
          key={f.k}
          style={{
            position: 'absolute',
            left: -f.fw / 2,
            top: -f.fh / 2,
            width: f.fw,
            height: f.fh,
            transform: f.t,
            background: paint(f),
            opacity: op,
            transition: 'opacity 400ms ease',
            backfaceVisibility: 'hidden',
            boxSizing: 'border-box',
            border: glass ? '1px solid rgba(255,255,255,0.55)' : undefined,
            boxShadow: glass ? undefined : 'inset 0 0 0 0.5px rgba(0,0,0,0.12)',
          }}
        />
      ))}
    </div>
  );
}

// Flat panel stuck to a surface. (x, y, z) = CENTRE of the panel.
// plane: front (+z) | back | right (+x) | left (-x) | top (faces up; h = depth)
function VillaPane({ x = 0, y = 0, z = 0, w, h, plane = 'front', style, op = 1, onClick, nightDim = false, children }) {
  const { isNight } = useContext(VillaSceneContext);
  const rot = {
    front: undefined,
    back: 'rotateY(180deg)',
    right: 'rotateY(90deg)',
    left: 'rotateY(-90deg)',
    top: 'rotateX(90deg)',
  }[plane];

  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        transformStyle: 'preserve-3d',
        transform: `translate3d(${x}px, ${-y}px, ${z}px)`,
        cursor: onClick ? 'pointer' : undefined,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: -w / 2,
          top: -h / 2,
          width: w,
          height: h,
          transform: rot,
          opacity: op,
          transition: 'opacity 400ms ease',
          backfaceVisibility: 'hidden',
          boxSizing: 'border-box',
          filter: nightDim && isNight ? 'brightness(0.55)' : undefined,
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
}

// Window: cool glass by day, warm glowing interior at night.
function VillaWindow({ split = true, ...rest }) {
  const { isNight } = useContext(VillaSceneContext);
  const mullion =
    'linear-gradient(90deg, transparent calc(50% - 1px), rgba(30,40,55,0.85) calc(50% - 1px), rgba(30,40,55,0.85) calc(50% + 1px), transparent calc(50% + 1px))';
  const glass = isNight
    ? 'linear-gradient(135deg, #ffe8a3 0%, #f6c866 60%, #d9a43a 100%)'
    : 'linear-gradient(135deg, rgba(205,236,248,0.95) 0%, rgba(120,178,212,0.95) 55%, rgba(66,118,158,1) 100%)';
  return (
    <VillaPane
      {...rest}
      style={{
        background: split ? `${mullion}, ${glass}` : glass,
        border: '3px solid #2a3441',
        borderRadius: 2,
        boxShadow: isNight ? '0 0 18px rgba(255,205,110,0.65)' : 'none',
      }}
    />
  );
}

// Vertical timber louvers / door
function VillaWood({ stripe = true, ...rest }) {
  return (
    <VillaPane
      {...rest}
      nightDim
      style={{
        background: stripe
          ? 'repeating-linear-gradient(90deg, #8a5a36 0px, #8a5a36 5px, #c08a5a 5px, #c08a5a 7px)'
          : 'linear-gradient(180deg, #a06a43, #7a4c2c)',
        border: stripe ? undefined : '2px solid #5e3a20',
      }}
    />
  );
}

// Billboard tree: always faces the camera, so it stays upright while orbiting.
function VillaTree({ x, y = 0, z, s = 1, op = 1 }) {
  const { isNight } = useContext(VillaSceneContext);
  const cw = 46 * s;
  const trunkH = 24 * s;
  const trunkW = 5 * s;
  return (
    <>
      <VillaPane
        plane="top"
        x={x}
        y={y + 0.9}
        z={z}
        w={34 * s}
        h={34 * s}
        op={op}
        style={{ borderRadius: '50%', background: 'rgba(0,0,0,0.2)' }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          opacity: op,
          transition: 'opacity 400ms ease',
          transform: `translate3d(${x}px, ${-y}px, ${z}px) rotateY(calc(var(--ry) * -1deg)) rotateX(calc(var(--rx) * -1deg))`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: -cw / 2,
            bottom: 0,
            width: cw,
            height: trunkH + cw * 0.92,
            filter: isNight ? 'brightness(0.55)' : undefined,
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '50%',
              marginLeft: -trunkW / 2,
              bottom: 0,
              width: trunkW,
              height: trunkH + 6 * s,
              background: 'linear-gradient(90deg, #7a5532, #5a3d24)',
              borderRadius: 2,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: cw,
              height: cw,
              borderRadius: '50%',
              background:
                'radial-gradient(circle at 32% 28%, #9be46e 0%, rgba(155,228,110,0) 45%), radial-gradient(circle at 72% 72%, #2a7733 0%, rgba(42,119,51,0) 58%), #4aa63f',
              boxShadow: 'inset -4px -6px 10px rgba(20,70,30,0.35)',
            }}
          />
        </div>
      </div>
    </>
  );
}

// A floor group; it lifts up in exploded view.
function VillaLayer({ lift = 0, children }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        transformStyle: 'preserve-3d',
        transform: `translate3d(0px, ${-lift}px, 0px)`,
        transition: 'transform 650ms cubic-bezier(0.22, 0.8, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------------------------- */
function InteractiveHero3DModel({ onInspectProperty }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const targetRef = useRef({ ...VILLA_DEFAULT_ROTATION });
  const currentRef = useRef({ ...VILLA_DEFAULT_ROTATION });

  const [readout, setReadout] = useState({ ...VILLA_DEFAULT_ROTATION });
  const [scale, setScale] = useState(0.8);

  // Interactive controls
  const [timeOfDay, setTimeOfDay] = useState('golden'); // 'golden' | 'evening'
  const [explodedView, setExplodedView] = useState(false);
  const [activeFloor, setActiveFloor] = useState('all'); // 'all' | 'ground' | 'upper' | 'roof'

  const isNight = timeOfDay === 'evening';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // Smooth orbit: lerp toward the cursor target and write CSS variables directly
  useEffect(() => {
    let raf;
    const tick = () => {
      const c = currentRef.current;
      const t = targetRef.current;
      c.x += (t.x - c.x) * 0.1;
      c.y += (t.y - c.y) * 0.1;
      const el = sceneRef.current;
      if (el) {
        el.style.setProperty('--rx', c.x.toFixed(2));
        el.style.setProperty('--ry', c.y.toFixed(2));
      }
      const rx = Math.round(c.x);
      const ry = Math.round(c.y);
      setReadout((prev) => (prev.x === rx && prev.y === ry ? prev : { x: rx, y: ry }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Fit the model to any stage size
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    const update = () => {
      const r = el.getBoundingClientRect();
      setScale(clamp(Math.min(r.width / 500, r.height / 540), 0.35, 1.15));
    };
    update();
    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(update);
      ro.observe(el);
      return () => ro.disconnect();
    }
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const aimAt = (clientX, clientY, spanY, spanX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normX = (clientX - rect.left) / rect.width - 0.5; // -0.5 … 0.5
    const normY = (clientY - rect.top) / rect.height - 0.5;
    targetRef.current = {
      x: clamp(VILLA_DEFAULT_ROTATION.x - normY * spanX, -74, -26),
      y: VILLA_DEFAULT_ROTATION.y + normX * spanY,
    };
  };

  const handleMouseMove = (e) => aimAt(e.clientX, e.clientY, 90, 26);
  const handleTouchMove = (e) => {
    if (!e.touches[0]) return;
    aimAt(e.touches[0].clientX, e.touches[0].clientY, 80, 22);
  };
  const resetOrbit = () => {
    targetRef.current = { ...VILLA_DEFAULT_ROTATION };
  };
  const handleReset = () => {
    resetOrbit();
    setExplodedView(false);
    setActiveFloor('all');
  };

  const selectFloor = (id) => setActiveFloor((prev) => (prev === id ? 'all' : id));
  const pickGround = () => selectFloor('ground');
  const pickUpper = () => selectFloor('upper');
  const pickRoof = () => selectFloor('roof');
  const op = (id) => (activeFloor === 'all' || activeFloor === id ? 1 : 0.14);

  const gOp = op('ground');
  const uOp = op('upper');
  const rOp = op('roof');
  const floorInfo = VILLA_FLOORS[activeFloor];

  const WHITE = '#f5f5f3';
  const HEDGE = '#3f8f3c';
  const HEDGE_TOP = '#5fb04e';

  return (
    <div className="relative w-full">
      {/* Top Interactive Control Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFAF0] border border-[#EDE7DB] text-xs font-medium text-[#192638]">
          <Box className="w-3.5 h-3.5 text-[#D4A437]" />
          <span>Interactive 3D Villa</span>
          <span className="text-[#64748B] hidden sm:inline">• Move cursor to orbit</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setTimeOfDay(isNight ? 'golden' : 'evening')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-[10px] border border-[#EDE7DB] bg-white hover:bg-[#FFFAF0] text-[#192638] transition-all shadow-sm"
            title="Switch Lighting Ambience"
          >
            {isNight ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[#D4A437]" />
                <span>Golden Hour</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#192638]" />
                <span>Soirée Glow</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setExplodedView(!explodedView)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-[10px] border transition-all shadow-sm ${
              explodedView
                ? 'bg-[#D4A437] text-white border-[#D4A437]'
                : 'bg-white text-[#192638] border-[#EDE7DB] hover:bg-[#FFFAF0]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{explodedView ? 'Assemble Floors' : 'Explode 3D Layers'}</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded-[10px] border border-[#EDE7DB] bg-white hover:bg-[#FFFAF0] text-[#64748B] hover:text-[#192638] transition-colors"
            title="Reset 3D Angle"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main 3D Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetOrbit}
        onTouchMove={handleTouchMove}
        className={`relative w-full h-[440px] sm:h-[510px] rounded-[16px] border border-[#EDE7DB] overflow-hidden cursor-grab active:cursor-grabbing select-none transition-colors duration-700 ${
          isNight
            ? 'bg-gradient-to-br from-[#142235] via-[#192638] to-[#0f1926]'
            : 'bg-gradient-to-br from-[#FFFAF0] via-[#FFFFFF] to-[#F5E7C5]/60'
        }`}
        style={{ boxShadow: '0 8px 30px rgba(25, 38, 56, 0.06)' }}
      >
        {/* Sun / Moon glow */}
        <div
          className="absolute pointer-events-none rounded-full blur-3xl"
          style={{
            width: '340px',
            height: '340px',
            top: '12%',
            right: '10%',
            background: isNight
              ? 'radial-gradient(circle, rgba(212, 164, 55, 0.28) 0%, rgba(20, 34, 53, 0) 70%)'
              : 'radial-gradient(circle, rgba(212, 164, 55, 0.35) 0%, rgba(245, 231, 197, 0) 70%)',
          }}
        />

        {/* Blueprint grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: isNight
              ? 'linear-gradient(to right, rgba(212,164,55,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,164,55,0.12) 1px, transparent 1px)'
              : 'linear-gradient(to right, rgba(25,38,56,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(25,38,56,0.06) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Top-left telemetry pill */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-[12px] backdrop-blur-md bg-white/85 border border-[#EDE7DB] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D4A437] animate-ping" />
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-semibold">CAD Structural Twin • 01</p>
            <p className="text-xs font-semibold text-[#192638]" style={{ fontFamily: 'var(--font-heading)' }}>
              The Solana Cliffside Pavilion
            </p>
          </div>
        </div>

        {/* Selected floor info */}
        <div className="absolute top-[76px] left-4 z-20 max-w-[230px] px-3 py-2 rounded-[10px] backdrop-blur-md bg-white/85 border border-[#EDE7DB] shadow-sm">
          <p className="text-[11px] font-semibold text-[#192638]">{floorInfo.label}</p>
          <p className="text-[10px] leading-snug text-[#64748B]">{floorInfo.note}</p>
        </div>

        {/* Top-right compass & rotation readout */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-[10px] backdrop-blur-md bg-white/85 border border-[#EDE7DB] text-[11px] font-mono text-[#192638]">
          <Compass className="w-4 h-4 text-[#D4A437]" style={{ transform: `rotate(${-readout.y}deg)` }} />
          <span>
            X:{Math.abs(readout.x)}° Y:{readout.y}°
          </span>
        </div>

        {/* Valuation + yield badges */}
        <div className="absolute left-4 bottom-[84px] z-20 px-3 py-2 rounded-[12px] bg-[#192638] text-white border border-[#D4A437]/60 shadow-xl pointer-events-none">
          <p className="text-[9px] uppercase tracking-widest text-[#F5E7C5]">Mandate Valuation</p>
          <p className="text-sm font-bold text-[#D4A437]" style={{ fontFamily: 'var(--font-heading)' }}>
            $14,800,000
          </p>
        </div>
        <div className="hidden sm:block absolute right-4 bottom-[84px] z-20 px-3 py-2 rounded-[12px] bg-white text-[#192638] border border-[#EDE7DB] shadow-xl pointer-events-none">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#D4A437]" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">Net Yield</span>
          </div>
          <p className="text-xs font-bold text-[#192638]">+8.4% Annual ROI</p>
        </div>

        {/* ============================================================
            3D SCENE — perspective lives on the DIRECT parent of the scene
        ============================================================ */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: '2400px' }}
        >
          {/* Fit + explode (animated) */}
          <div
            style={{
              position: 'relative',
              width: 0,
              height: 0,
              transformStyle: 'preserve-3d',
              transform: `translateY(${explodedView ? 70 : 24}px) scale(${scale * (explodedView ? 0.84 : 1)})`,
              transition: 'transform 650ms cubic-bezier(0.22, 0.8, 0.3, 1)',
            }}
          >
            {/* Orbit (driven by CSS variables) */}
            <div
              ref={sceneRef}
              style={{
                position: 'relative',
                width: 0,
                height: 0,
                transformStyle: 'preserve-3d',
                '--rx': VILLA_DEFAULT_ROTATION.x,
                '--ry': VILLA_DEFAULT_ROTATION.y,
                transform: 'rotateX(calc(var(--rx) * 1deg)) rotateY(calc(var(--ry) * 1deg))',
              }}
            >
              <VillaSceneContext.Provider value={{ isNight }}>
                {/* ---------------- PLOT, LAWN & BOUNDARY WALL ---------------- */}
                <VillaPane
                  plane="top"
                  x={0}
                  y={-16}
                  z={0}
                  w={440}
                  h={440}
                  style={{
                    borderRadius: '50%',
                    background: isNight
                      ? 'radial-gradient(circle, rgba(0,0,0,0.6) 25%, transparent 72%)'
                      : 'radial-gradient(circle, rgba(25,38,56,0.22) 25%, transparent 72%)',
                  }}
                />
                <VillaBlock x={0} y={-14} z={0} w={300} h={14} d={300} color="#2a2e35" top="#79c155" />

                {/* back, left, right walls */}
                <VillaBlock x={0} y={0} z={-146} w={300} h={24} d={8} color={WHITE} />
                <VillaBlock x={-146} y={0} z={0} w={8} h={24} d={284} color={WHITE} />
                <VillaBlock x={146} y={0} z={0} w={8} h={24} d={284} color={WHITE} />
                {/* front wall with a gate opening */}
                <VillaBlock x={-87.5} y={0} z={146} w={125} h={16} d={8} color={WHITE} />
                <VillaBlock x={92.5} y={0} z={146} w={115} h={16} d={8} color={WHITE} />
                <VillaBlock x={-25} y={0} z={146} w={10} h={28} d={10} color="#e9eaec" />
                <VillaBlock x={35} y={0} z={146} w={10} h={28} d={10} color="#e9eaec" />

                {/* stepping-stone path from gate to porch */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <VillaPane
                    key={`stone-${i}`}
                    plane="top"
                    x={8}
                    y={0.8}
                    z={56 + i * 20}
                    w={34}
                    h={12}
                    nightDim
                    style={{ background: '#c9cdd2', borderRadius: 2 }}
                  />
                ))}

                {/* Garden */}
                <VillaBlock x={-60} y={0} z={22} w={70} h={12} d={12} color={HEDGE} top={HEDGE_TOP} />
                <VillaBlock x={108} y={0} z={124} w={60} h={14} d={12} color={HEDGE} top={HEDGE_TOP} />
                <VillaTree x={-122} z={45} s={1.1} />
                <VillaTree x={122} z={80} s={1.2} />
                <VillaTree x={-70} z={105} s={1.0} />
                <VillaTree x={122} z={-95} s={1.0} />

                {/* ---------------- L1 • GROUND FLOOR ---------------- */}
                <VillaLayer lift={0}>
                  <VillaBlock x={-5} y={0} z={-50} w={200} h={62} d={120} color={WHITE} op={gOp} onClick={pickGround} />

                  {/* porch */}
                  <VillaBlock x={10} y={0} z={24} w={40} h={3} d={22} color="#d7d9dc" op={gOp} onClick={pickGround} />
                  <VillaBlock x={-14} y={0} z={30} w={7} h={62} d={7} color="#ffffff" op={gOp} onClick={pickGround} />
                  <VillaBlock x={34} y={0} z={30} w={7} h={62} d={7} color="#ffffff" op={gOp} onClick={pickGround} />
                  <VillaWood plane="front" stripe={false} x={10} y={24} z={10.8} w={22} h={46} op={gOp} onClick={pickGround} />
                  <VillaBlock
                    x={-6}
                    y={34}
                    z={12}
                    w={4}
                    h={8}
                    d={3}
                    color={isNight ? '#ffd66b' : '#e8e0cc'}
                    op={gOp}
                  />

                  {/* glazing */}
                  <VillaWindow plane="front" x={-65} y={31} z={10.8} w={62} h={38} op={gOp} onClick={pickGround} />
                  <VillaWindow plane="right" x={95.8} y={31} z={-45} w={60} h={36} op={gOp} onClick={pickGround} />
                  <VillaWindow plane="left" x={-105.8} y={31} z={-50} w={60} h={36} op={gOp} onClick={pickGround} />

                  {/* garage */}
                  <VillaPane
                    plane="top"
                    x={77.5}
                    y={0.8}
                    z={46}
                    w={40}
                    h={72}
                    op={gOp}
                    nightDim
                    style={{ background: '#a8adb3' }}
                  />
                  <VillaPane
                    plane="front"
                    x={77.5}
                    y={24}
                    z={10.8}
                    w={34}
                    h={46}
                    op={gOp}
                    onClick={pickGround}
                    nightDim
                    style={{
                      background:
                        'repeating-linear-gradient(180deg, #4b525b 0px, #4b525b 8px, #363c43 8px, #363c43 10px)',
                      border: '2px solid #cfd2d6',
                    }}
                  />

                  {/* lower terrace on the garage roof */}
                  <VillaPane
                    plane="top"
                    x={77.5}
                    y={62.8}
                    z={-50}
                    w={35}
                    h={120}
                    op={gOp}
                    nightDim
                    style={{
                      background:
                        'repeating-linear-gradient(90deg, #d9b88f 0px, #d9b88f 13px, #cfa97c 13px, #cfa97c 14px)',
                    }}
                  />
                  <VillaBlock x={70} y={62} z={-62} w={8} h={8} d={50} color="#e8e2d6" top="#4d9a42" op={gOp} />
                  <VillaBlock x={94.5} y={62} z={-50} w={1.5} h={14} d={120} color={VILLA_GLASS} glass op={gOp} />
                  <VillaBlock x={77.5} y={62} z={9.5} w={35} h={14} d={1.5} color={VILLA_GLASS} glass op={gOp} />
                  <VillaTree x={82} y={62.8} z={-25} s={0.75} op={gOp} />
                </VillaLayer>

                {/* ---------------- L2 • UPPER FLOOR ---------------- */}
                <VillaLayer lift={explodedView ? 72 : 0}>
                  <VillaBlock x={-20} y={62} z={-32.5} w={160} h={58} d={135} color={WHITE} op={uOp} onClick={pickUpper} />

                  {/* front facade */}
                  <VillaWindow plane="front" x={-55} y={88} z={35.8} w={66} h={36} op={uOp} onClick={pickUpper} />
                  <VillaWood plane="front" x={3} y={90} z={35.8} w={24} h={50} op={uOp} onClick={pickUpper} />
                  <VillaWindow plane="front" split={false} x={36} y={88} z={35.8} w={28} h={36} op={uOp} onClick={pickUpper} />

                  {/* side facades */}
                  <VillaWindow plane="right" x={60.8} y={88} z={-45} w={70} h={36} op={uOp} onClick={pickUpper} />
                  <VillaWood plane="right" x={60.8} y={90} z={-90} w={16} h={46} op={uOp} onClick={pickUpper} />
                  <VillaWindow plane="left" x={-100.8} y={88} z={-82} w={30} h={36} op={uOp} onClick={pickUpper} />
                  <VillaWindow plane="left" x={-100.8} y={84} z={-30} w={40} h={40} op={uOp} onClick={pickUpper} />

                  {/* glass balcony */}
                  <VillaBlock x={-118} y={58} z={-30} w={36} h={4} d={50} color="#eeeeec" op={uOp} onClick={pickUpper} />
                  <VillaBlock x={-135.5} y={62} z={-30} w={1.5} h={14} d={50} color={VILLA_GLASS} glass op={uOp} />
                  <VillaBlock x={-118} y={62} z={-5.5} w={36} h={14} d={1.5} color={VILLA_GLASS} glass op={uOp} />
                  <VillaBlock x={-118} y={62} z={-54.5} w={36} h={14} d={1.5} color={VILLA_GLASS} glass op={uOp} />

                  {/* roof slab with overhang */}
                  <VillaBlock x={-20} y={120} z={-32.5} w={176} h={8} d={151} color="#ffffff" op={uOp} onClick={pickUpper} />
                </VillaLayer>

                {/* ---------------- L3 • ROOFTOP POOL DECK ---------------- */}
                <VillaLayer lift={explodedView ? 144 : 0}>
                  {/* timber deck */}
                  <VillaPane
                    plane="top"
                    x={-20}
                    y={128.8}
                    z={-32.5}
                    w={168}
                    h={143}
                    op={rOp}
                    onClick={pickRoof}
                    nightDim
                    style={{
                      background:
                        'repeating-linear-gradient(90deg, #d9b88f 0px, #d9b88f 14px, #cfa97c 14px, #cfa97c 15px)',
                    }}
                  />

                  {/* pool */}
                  <VillaBlock x={-20} y={128} z={-55} w={92} h={3} d={64} color="#fbfbf9" op={rOp} onClick={pickRoof} />
                  <VillaPane
                    plane="top"
                    x={-20}
                    y={131.4}
                    z={-55}
                    w={84}
                    h={56}
                    op={rOp}
                    onClick={pickRoof}
                    style={{
                      borderRadius: 4,
                      background:
                        'radial-gradient(circle at 25% 30%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 40%), linear-gradient(135deg, #5ed0f7 0%, #1ea0dc 60%, #0f7fc0 100%)',
                      boxShadow: isNight
                        ? '0 0 28px rgba(70,200,255,0.8), inset 0 0 16px rgba(255,255,255,0.45)'
                        : 'inset 0 0 10px rgba(255,255,255,0.4)',
                    }}
                  />

                  {/* loungers */}
                  <VillaBlock x={-12} y={128} z={8} w={18} h={5} d={40} color="#faf7f0" top="#e9e2d3" op={rOp} onClick={pickRoof} />
                  <VillaBlock x={14} y={128} z={8} w={18} h={5} d={40} color="#faf7f0" top="#e9e2d3" op={rOp} onClick={pickRoof} />

                  {/* planters */}
                  <VillaBlock x={-70} y={128} z={-96} w={70} h={9} d={9} color={HEDGE} top={HEDGE_TOP} op={rOp} />
                  <VillaBlock x={56} y={128} z={-60} w={9} h={9} d={70} color={HEDGE} top={HEDGE_TOP} op={rOp} />
                  <VillaTree x={-90} y={128.8} z={-50} s={0.75} op={rOp} />
                  <VillaTree x={48} y={128.8} z={22} s={0.65} op={rOp} />

                  {/* glass balustrade */}
                  <VillaBlock x={-20} y={128} z={41.5} w={176} h={16} d={1.5} color={VILLA_GLASS} glass op={rOp} />
                  <VillaBlock x={-20} y={128} z={-106.5} w={176} h={16} d={1.5} color={VILLA_GLASS} glass op={rOp} />
                  <VillaBlock x={-106.5} y={128} z={-32.5} w={1.5} h={16} d={151} color={VILLA_GLASS} glass op={rOp} />
                  <VillaBlock x={66.5} y={128} z={-32.5} w={1.5} h={16} d={151} color={VILLA_GLASS} glass op={rOp} />
                </VillaLayer>
              </VillaSceneContext.Provider>
            </div>
          </div>
        </div>

        {/* Bottom floor selector & inspect bar */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-[12px] backdrop-blur-md bg-white/90 border border-[#EDE7DB]">
          <div className="flex flex-wrap items-center gap-1">
            {VILLA_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFloor(tab.id)}
                className={`px-2.5 py-1 rounded-[8px] text-[11px] font-medium transition-all ${
                  activeFloor === tab.id
                    ? 'bg-[#192638] text-white'
                    : 'text-[#64748B] hover:text-[#192638] hover:bg-[#FFFAF0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onInspectProperty(PROPERTIES_DATA[0])}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-[#D4A437] hover:bg-[#B88922] text-white text-xs font-medium transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect Dossier</span>
          </button>
        </div>
      </div>
    </div>
  );
}

    // ============================================================================
    // MAIN LANDING PAGE COMPONENT
    // ============================================================================
    export default function LandingPage() {
    // Navigation & Scroll State
    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Real Estate Listing Filter & Search State
    const [selectedCategory, setSelectedCategory] = useState('All Properties');
    const [sortBy, setSortBy] = useState('featured');
    const [searchQuery, setSearchQuery] = useState('');
    const [favorites, setFavorites] = useState(['prop-1']);
    const [selectedPropertyModal, setSelectedPropertyModal] = useState(null);
    const [activeModalImage, setActiveModalImage] = useState(0);

    // Interactive Investment / Portfolio Calculator State
    const [investmentValue, setInvestmentValue] = useState(15000000);
    const [holdingYears, setHoldingYears] = useState(5);

    // Contact Form State
    const [contactForm, setContactForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        propertyInterest: 'Waterfront Villas',
        budgetRange: '$10M – $20M',
        preferredDate: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

    // Track Scroll Progress & Active Section Highlight
    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setScrollProgress(progress);
        setIsScrolled(scrollTop > 24);

        const sections = ['home', 'listings', 'advisory', 'process', 'testimonials', 'contact'];
        for (const id of sections) {
            const el = document.getElementById(id);
            if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 180 && rect.bottom >= 180) {
                setActiveSection(id);
                break;
            }
            }
        }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth Scroll Navigation Helper
    const scrollToSection = (sectionId) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Toggle Favorite Property
    const toggleFavorite = (id, e) => {
        if (e) e.stopPropagation();
        setFavorites((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Filtered and Sorted Properties
    const filteredProperties = useMemo(() => {
        return PROPERTIES_DATA.filter((prop) => {
        const matchesCategory =
            selectedCategory === 'All Properties' || prop.category === selectedCategory;
        const matchesSearch =
            prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prop.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
        }).sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return 0;
        });
    }, [selectedCategory, sortBy, searchQuery]);

    // Projected Valuation Calculation
    const projectedReturn = useMemo(() => {
        const annualRate = 0.082; // 8.2% luxury prime appreciation + rental yield
        const finalAmount = investmentValue * Math.pow(1 + annualRate, holdingYears);
        const netGain = finalAmount - investmentValue;
        return {
        finalFormatted: `$${(finalAmount / 1000000).toFixed(2)}M`,
        gainFormatted: `+$${(netGain / 1000000).toFixed(2)}M`
        };
    }, [investmentValue, holdingYears]);

    // Handle Contact Form Submission
    const handleContactSubmit = (e) => {
        e.preventDefault();
        if (!contactForm.fullName || !contactForm.email) return;
        setFormSubmitted(true);
    };

    const categories = [
        'All Properties',
        'Waterfront Villas',
        'Penthouses',
        'Modern Mansions',
        'Heritage Estates'
    ];

    return (
        <div
        className="min-h-screen antialiased selection:bg-[#F5E7C5] selection:text-[#192638]"
        style={{
            backgroundColor: 'var(--background)',
            color: 'var(--text)',
            fontFamily: 'var(--font-body)'
        }}
        >
        {/* ====================================================================
            STRICT CSS THEME VARIABLES, FONTS & SCROLL REVEAL KEYFRAMES
            ==================================================================== */}
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');

            :root {
            --font-heading: "Playfair Display", Georgia, serif;
            --font-body: "Inter", sans-serif;
            --background: #FFFFFF;
            --background-soft: #FFFAF0;
            --background-accent: #F5E7C5;
            --primary: #D4A437;
            --primary-hover: #B88922;
            --heading: #192638;
            --text: #64748B;
            --border: #EDE7DB;
            --footer: #142235;
            --radius-card: 16px;
            --radius-button: 10px;
            --shadow-card: 0 8px 30px rgba(25, 38, 56, 0.06);
            }

            html {
            scroll-behavior: smooth;
            }

            /* Scroll Reveal Animations between sections */
            .reveal-element {
            opacity: 0;
            will-change: transform, opacity;
            transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .reveal-fade-up {
            transform: translateY(42px);
            }

            .reveal-fade-left {
            transform: translateX(-42px);
            }

            .reveal-fade-right {
            transform: translateX(42px);
            }

            .reveal-scale-up {
            transform: scale(0.94) translateY(24px);
            }

            .reveal-element.is-revealed {
            opacity: 1;
            transform: translate(0, 0) scale(1);
            }

            /* Luxury Card Hover Elevation */
            .luxury-card {
            border-radius: var(--radius-card);
            box-shadow: var(--shadow-card);
            border: 1px solid var(--border);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                        box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                        border-color 0.3s ease;
            }

            .luxury-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 45px rgba(25, 38, 56, 0.11);
            border-color: #D4A437;
            }
        `}</style>

        {/* ====================================================================
            TOP GOLD SCROLL PROGRESS BAR
            ==================================================================== */}
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
            <div
            className="h-full transition-all duration-150 ease-out"
            style={{
                width: `${scrollProgress}%`,
                background: 'linear-gradient(90deg, #D4A437 0%, #B88922 100%)'
            }}
            />
        </div>

        {/* ====================================================================
            1. STICKY MULTI-SECTION NAVBAR WITH "CONTACT NOW" BUTTON
            ==================================================================== */}
        <header
            className={`sticky top-0 z-40 transition-all duration-300 ${
            isScrolled
                ? 'bg-white/92 backdrop-blur-md shadow-[0_8px_30px_rgba(25,38,56,0.06)] border-b border-[#EDE7DB] py-3.5'
                : 'bg-white/80 backdrop-blur-sm border-b border-[#EDE7DB]/70 py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Brand Logo */}
            <button
                type="button"
                onClick={() => scrollToSection('home')}
                className="flex items-center gap-3 text-left group focus:outline-none"
            >
                <div className="w-10 h-10 rounded-[10px] bg-[#192638] border border-[#D4A437] flex items-center justify-center shadow-sm group-hover:bg-[#D4A437] transition-colors">
                <Building2 className="w-5 h-5 text-[#F5E7C5] group-hover:text-[#192638] transition-colors" />
                </div>
                <div>
                <span
                    className="block text-lg sm:text-xl font-bold tracking-tight text-[#192638]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    AURELIA <span className="font-normal italic text-[#D4A437]">Estates</span>
                </span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
                    Private Architectural Brokerage
                </span>
                </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
                {[
                { id: 'home', label: 'Home' },
                { id: 'listings', label: 'Featured Estates' },
                { id: 'advisory', label: 'Why Aurelia' },
                { id: 'process', label: 'Acquisition Process' },
                { id: 'testimonials', label: 'Client Voices' }
                ].map((item) => {
                const isActive = activeSection === item.id;
                return (
                    <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-[10px] transition-all ${
                        isActive
                        ? 'text-[#192638] bg-[#FFFAF0]'
                        : 'text-[#64748B] hover:text-[#192638] hover:bg-[#FFFAF0]/60'
                    }`}
                    >
                    {item.label}
                    {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-[#D4A437]" />
                    )}
                    </button>
                );
                })}
            </nav>

            {/* Right CTA: Saved Counter & "Contact Now" Button */}
            <div className="hidden md:flex items-center gap-3">
                <button
                type="button"
                onClick={() => scrollToSection('listings')}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] border border-[#EDE7DB] bg-[#FFFAF0] text-xs font-medium text-[#192638] hover:border-[#D4A437] transition-colors"
                title="Saved Residences"
                >
                <Heart className="w-3.5 h-3.5 text-[#D4A437] fill-[#D4A437]" />
                <span>{favorites.length} Saved</span>
                </button>

                <button
                type="button"
                onClick={() => scrollToSection('contact')}
                style={{ borderRadius: 'var(--radius-button)' }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4A437] hover:bg-[#B88922] text-white text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer"
                >
                <PhoneCall className="w-4 h-4" />
                <span>Contact Now</span>
                </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-[10px] border border-[#EDE7DB] bg-[#FFFAF0] text-[#192638]"
                aria-label="Toggle Menu"
            >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            </div>

            {/* Responsive Mobile Drawer */}
            {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-b border-[#EDE7DB] px-4 pt-3 pb-6 space-y-2 shadow-xl">
                {[
                { id: 'home', label: 'Home' },
                { id: 'listings', label: 'Featured Estates' },
                { id: 'advisory', label: 'Why Aurelia' },
                { id: 'process', label: 'Acquisition Process' },
                { id: 'testimonials', label: 'Client Voices' }
                ].map((item) => (
                <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-[10px] text-sm font-medium flex items-center justify-between ${
                    activeSection === item.id
                        ? 'bg-[#F5E7C5]/60 text-[#192638] font-semibold'
                        : 'text-[#64748B] hover:bg-[#FFFAF0]'
                    }`}
                >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#D4A437]" />
                </button>
                ))}
                <div className="pt-2">
                <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    style={{ borderRadius: 'var(--radius-button)' }}
                    className="w-full py-3 bg-[#D4A437] hover:bg-[#B88922] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
                >
                    <PhoneCall className="w-4 h-4" />
                    <span>Contact Now</span>
                </button>
                </div>
            </div>
            )}
        </header>

        {/* ====================================================================
            2. HERO SECTION: BOLD BUSINESS IDENTITY (LEFT) + 3D MODEL (RIGHT)
            ==================================================================== */}
        <section
            id="home"
            className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden"
            style={{
            background:
                'linear-gradient(180deg, var(--background-soft) 0%, var(--background) 100%)'
            }}
        >
            {/* Decorative Subtle Background Accent Orb */}
            <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-50"
            style={{ background: 'var(--background-accent)' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* LEFT PART: Bold & Elegant Business Name + Value Proposition */}
                <div className="lg:col-span-6 space-y-6">
                <ScrollReveal variant="fade-right">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5E7C5] border border-[#D4A437]/40">
                    <Sparkles className="w-3.5 h-3.5 text-[#B88922]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#192638]">
                        Aurelia International Sovereign Realty
                    </span>
                    </div>
                </ScrollReveal>

                <ScrollReveal variant="fade-right" delay={100}>
                    <div className="space-y-2">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D4A437] font-semibold">
                        Established MCMXCVIII • Geneva • New York • Dubai
                    </p>
                    <h1
                        className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#192638] leading-[1.1] tracking-tight"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        AURELIA ESTATES
                        <span className="block font-normal italic text-[#D4A437] mt-1.5 text-3xl sm:text-4xl xl:text-5xl">
                        Curators of Extraordinary Living.
                        </span>
                    </h1>
                    </div>
                </ScrollReveal>

                <ScrollReveal variant="fade-right" delay={200}>
                    <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl">
                    We represent the world’s most coveted architectural residences, waterfront
                    sanctuaries, and sovereign trophy estates. Experience each property in interactive
                    3D precision before your private helicopter viewing.
                    </p>
                </ScrollReveal>

                {/* Dual Action Buttons */}
                <ScrollReveal variant="fade-right" delay={300}>
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                        type="button"
                        onClick={() => scrollToSection('listings')}
                        style={{ borderRadius: 'var(--radius-button)' }}
                        className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#D4A437] hover:bg-[#B88922] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                        <span>Explore Curated Estates</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollToSection('contact')}
                        style={{ borderRadius: 'var(--radius-button)' }}
                        className="inline-flex items-center gap-2.5 px-6 py-4 bg-white hover:bg-[#FFFAF0] text-[#192638] border border-[#EDE7DB] hover:border-[#D4A437] font-semibold text-sm transition-all cursor-pointer"
                    >
                        <Calendar className="w-4 h-4 text-[#D4A437]" />
                        <span>Schedule Private Viewing</span>
                    </button>
                    </div>
                </ScrollReveal>

                {/* Key Trust Metrics Bar */}
                <ScrollReveal variant="fade-up" delay={400}>
                    <div className="pt-6 border-t border-[#EDE7DB] grid grid-cols-3 gap-4 sm:gap-6">
                    <div>
                        <p
                        className="text-2xl sm:text-3xl font-bold text-[#192638]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                        >
                        $3.8B+
                        </p>
                        <p className="text-xs text-[#64748B] mt-0.5">Closed Mandate Volume</p>
                    </div>
                    <div className="border-l border-[#EDE7DB] pl-4 sm:pl-6">
                        <p
                        className="text-2xl sm:text-3xl font-bold text-[#D4A437]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                        >
                        140+
                        </p>
                        <p className="text-xs text-[#64748B] mt-0.5">Off-Market Trophy Villas</p>
                    </div>
                    <div className="border-l border-[#EDE7DB] pl-4 sm:pl-6">
                        <p
                        className="text-2xl sm:text-3xl font-bold text-[#192638]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                        >
                        99.6%
                        </p>
                        <p className="text-xs text-[#64748B] mt-0.5">Private Family Retention</p>
                    </div>
                    </div>
                </ScrollReveal>
                </div>

                {/* RIGHT PART: Interactive Cursor-Driven 3D Architectural Model */}
                <div className="lg:col-span-6">
                <ScrollReveal variant="scale-up" delay={180}>
                    <InteractiveHero3DModel
                    onInspectProperty={(prop) => {
                        setSelectedPropertyModal(prop);
                        setActiveModalImage(0);
                    }}
                    />
                </ScrollReveal>
                </div>
            </div>
            </div>
        </section>

        {/* Scroll Transition Divider */}
        <SectionTransitionDivider label="PORTFOLIO • CURATED ARCHITECTURAL RESIDENCES" />

        {/* ====================================================================
            3. REAL ESTATE LISTINGS SECTION ("ALL THE REAL ESTATE")
            ==================================================================== */}
        <section id="listings" className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <ScrollReveal variant="fade-up">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFAF0] border border-[#EDE7DB] text-xs font-semibold uppercase tracking-widest text-[#D4A437] mb-3">
                    <span>Exclusive Portfolio</span>
                    </div>
                    <h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#192638]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                    >
                    Curated Luxury <span className="italic font-normal text-[#D4A437]">Residences</span>
                    </h2>
                </div>
                <p className="text-sm sm:text-base text-[#64748B] max-w-md">
                    Each residence in our collection undergoes a 120-point architectural, legal, and
                    structural provenance verification.
                </p>
                </div>
            </ScrollReveal>

            {/* Filter Tabs + Search & Sort Bar */}
            <ScrollReveal variant="fade-up" delay={100}>
                <div className="p-4 rounded-[16px] bg-[#FFFAF0] border border-[#EDE7DB] mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                {/* Category Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
                    {categories.map((category) => {
                    const active = selectedCategory === category;
                    return (
                        <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        style={{ borderRadius: 'var(--radius-button)' }}
                        className={`px-4 py-2 text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                            active
                            ? 'bg-[#D4A437] text-white shadow-sm'
                            : 'bg-white text-[#64748B] hover:text-[#192638] border border-[#EDE7DB]'
                        }`}
                        >
                        {category}
                        </button>
                    );
                    })}
                </div>

                {/* Search & Sort Controls */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <div className="relative flex-1 sm:w-60">
                    <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search location or title..."
                        style={{ borderRadius: 'var(--radius-button)' }}
                        className="w-full pl-9 pr-3 py-2 bg-white border border-[#EDE7DB] text-sm text-[#192638] placeholder-[#64748B] focus:outline-none focus:border-[#D4A437]"
                    />
                    </div>

                    <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-[#D4A437] shrink-0 hidden sm:block" />
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        style={{ borderRadius: 'var(--radius-button)' }}
                        className="px-3.5 py-2 bg-white border border-[#EDE7DB] text-sm text-[#192638] font-medium focus:outline-none focus:border-[#D4A437]"
                    >
                        <option value="featured">Sort: Featured Mandates</option>
                        <option value="price-desc">Price: Highest First</option>
                        <option value="price-asc">Price: Lowest First</option>
                    </select>
                    </div>
                </div>
                </div>
            </ScrollReveal>

            {/* Properties Grid */}
            {filteredProperties.length === 0 ? (
                <div className="text-center py-16 px-4 rounded-[16px] border border-[#EDE7DB] bg-[#FFFAF0]">
                <p
                    className="text-xl font-semibold text-[#192638] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    No Matching Residences Found
                </p>
                <p className="text-sm text-[#64748B] mb-4">
                    Try clearing your search filter or resetting the property category.
                </p>
                <button
                    type="button"
                    onClick={() => {
                    setSelectedCategory('All Properties');
                    setSearchQuery('');
                    }}
                    style={{ borderRadius: 'var(--radius-button)' }}
                    className="px-5 py-2.5 bg-[#D4A437] text-white text-sm font-medium"
                >
                    Reset All Filters
                </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property, index) => {
                    const isFav = favorites.includes(property.id);
                    return (
                    <ScrollReveal
                        key={property.id}
                        variant="fade-up"
                        delay={(index % 3) * 120}
                    >
                        <article
                        onClick={() => {
                            setSelectedPropertyModal(property);
                            setActiveModalImage(0);
                        }}
                        className="luxury-card bg-white overflow-hidden flex flex-col h-full cursor-pointer group"
                        >
                        {/* Property Image Wrapper */}
                        <div className="relative h-64 overflow-hidden bg-[#192638]">
                            <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#192638]/75 via-transparent to-black/20" />

                            {/* Top Status Badge & Favorite Button */}
                            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-[#F5E7C5] text-[#192638] text-xs font-semibold tracking-wide shadow-sm">
                                {property.badge}
                            </span>

                            <button
                                type="button"
                                onClick={(e) => toggleFavorite(property.id, e)}
                                className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#192638] hover:scale-110 transition-transform shadow-sm"
                                aria-label="Save Property"
                            >
                                <Heart
                                className={`w-4 h-4 ${
                                    isFav ? 'text-[#D4A437] fill-[#D4A437]' : 'text-[#192638]'
                                }`}
                                />
                            </button>
                            </div>

                            {/* Bottom Image Overlay: Price & Yield */}
                            <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between text-white">
                            <div>
                                <span className="text-[10px] uppercase tracking-widest text-[#F5E7C5] block">
                                Guide Price
                                </span>
                                <span
                                className="text-2xl font-bold text-white"
                                style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                {property.priceFormatted}
                                </span>
                            </div>
                            <span className="px-2.5 py-1 rounded bg-[#D4A437] text-white text-[11px] font-semibold">
                                {property.roiEstimate}
                            </span>
                            </div>
                        </div>

                        {/* Card Content Body */}
                        <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                            <div>
                            <div className="flex items-center gap-1.5 text-xs font-medium text-[#D4A437] mb-1.5">
                                <MapPin className="w-3.5 h-3.5 shrink-0" />
                                <span className="truncate">{property.location}</span>
                            </div>

                            <h3
                                className="text-xl font-bold text-[#192638] group-hover:text-[#D4A437] transition-colors line-clamp-1"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {property.title}
                            </h3>

                            <p className="text-sm text-[#64748B] mt-2 line-clamp-2 leading-relaxed">
                                {property.description}
                            </p>
                            </div>

                            {/* Architectural Specs Row */}
                            <div className="pt-4 border-t border-[#EDE7DB]">
                            <div className="grid grid-cols-3 gap-2 text-xs text-[#192638] font-medium mb-4">
                                <div className="flex items-center gap-1.5 bg-[#FFFAF0] px-2.5 py-2 rounded-[8px] border border-[#EDE7DB]">
                                <BedDouble className="w-4 h-4 text-[#D4A437]" />
                                <span>{property.beds} Beds</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-[#FFFAF0] px-2.5 py-2 rounded-[8px] border border-[#EDE7DB]">
                                <Bath className="w-4 h-4 text-[#D4A437]" />
                                <span>{property.baths} Baths</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-[#FFFAF0] px-2.5 py-2 rounded-[8px] border border-[#EDE7DB]">
                                <Maximize2 className="w-4 h-4 text-[#D4A437]" />
                                <span>{property.sqft} ft²</span>
                                </div>
                            </div>

                            {/* Inspect Button */}
                            <div className="flex items-center justify-between pt-1">
                                <span className="text-xs text-[#64748B]">
                                Architect: <strong className="text-[#192638]">{property.architect}</strong>
                                </span>
                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4A437] group-hover:translate-x-1 transition-transform">
                                <span>Inspect</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </div>
                            </div>
                        </div>
                        </article>
                    </ScrollReveal>
                    );
                })}
                </div>
            )}
            </div>
        </section>

        {/* Scroll Transition Divider */}
        <SectionTransitionDivider label="BESPOKE ADVISORY • WEALTH & ARCHITECTURE" />

        {/* ====================================================================
            4. WHY AURELIA & INTERACTIVE CAPITAL APPRECIATION ESTIMATOR
            ==================================================================== */}
        <section
            id="advisory"
            className="py-16 sm:py-24 border-y border-[#EDE7DB]"
            style={{ backgroundColor: 'var(--background-soft)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Why Aurelia Pillars */}
                <div className="lg:col-span-7 space-y-8">
                <ScrollReveal variant="fade-right">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5E7C5] text-xs font-semibold uppercase tracking-widest text-[#192638]">
                    <Award className="w-3.5 h-3.5 text-[#B88922]" />
                    <span>Sovereign Advisory Standard</span>
                    </div>
                    <h2
                    className="text-3xl sm:text-4xl font-bold text-[#192638] mt-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                    >
                    Engineered for Generational{' '}
                    <span className="italic font-normal text-[#D4A437]">Capital Preservation</span>
                    </h2>
                    <p className="text-base text-[#64748B] mt-3 max-w-2xl leading-relaxed">
                    Acquiring a trophy residence requires more than brokerage—it demands structural
                    engineering due diligence, cross-border legal orchestration, and private wealth
                    discretion.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                    {
                        icon: ShieldCheck,
                        title: 'Sovereign Legal & Tax Structuring',
                        desc: 'Seamless SPV, trust, and family office acquisition vehicles across 14 premier jurisdictions.'
                    },
                    {
                        icon: Compass,
                        title: '3D Digital Twin Telemetry',
                        desc: 'Complete LiDAR structural scans, solar trajectory modeling, and acoustic grading for every villa.'
                    },
                    {
                        icon: KeyRound,
                        title: 'Off-Market Whisper Network',
                        desc: 'Over 65% of our transactions occur quietly within our private registry without public syndication.'
                    },
                    {
                        icon: UserCheck,
                        title: 'Turnkey Estate Management',
                        desc: 'Post-closing staffing, fine art climate installation, yacht berth registration, and security.'
                    }
                    ].map((pillar, idx) => {
                    const IconComponent = pillar.icon;
                    return (
                        <ScrollReveal key={pillar.title} variant="fade-up" delay={idx * 100}>
                        <div className="p-6 bg-white rounded-[16px] border border-[#EDE7DB] shadow-[0_8px_30px_rgba(25,38,56,0.06)] hover:border-[#D4A437] transition-all h-full">
                            <div className="w-11 h-11 rounded-[10px] bg-[#F5E7C5] flex items-center justify-center mb-4">
                            <IconComponent className="w-5 h-5 text-[#192638]" />
                            </div>
                            <h3
                            className="text-lg font-bold text-[#192638] mb-2"
                            style={{ fontFamily: 'var(--font-heading)' }}
                            >
                            {pillar.title}
                            </h3>
                            <p className="text-sm text-[#64748B] leading-relaxed">{pillar.desc}</p>
                        </div>
                        </ScrollReveal>
                    );
                    })}
                </div>
                </div>

                {/* Right Column: Interactive Luxury Portfolio Yield Estimator */}
                <div className="lg:col-span-5">
                <ScrollReveal variant="scale-up" delay={200}>
                    <div className="p-7 sm:p-8 bg-white rounded-[16px] border border-[#EDE7DB] shadow-[0_8px_30px_rgba(25,38,56,0.06)] space-y-6">
                    <div className="flex items-center justify-between border-b border-[#EDE7DB] pb-4">
                        <div>
                        <span className="text-xs uppercase tracking-widest text-[#D4A437] font-semibold">
                            Interactive Telemetry
                        </span>
                        <h3
                            className="text-2xl font-bold text-[#192638]"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Estate Appreciation Model
                        </h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#FFFAF0] border border-[#EDE7DB] flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-[#D4A437]" />
                        </div>
                    </div>

                    {/* Slider 1: Acquisition Capital */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                        <span className="text-[#64748B] font-medium">Acquisition Allocation</span>
                        <span className="font-bold text-[#192638]">
                            ${(investmentValue / 1000000).toFixed(1)} Million
                        </span>
                        </div>
                        <input
                        type="range"
                        min={5000000}
                        max={50000000}
                        step={500000}
                        value={investmentValue}
                        onChange={(e) => setInvestmentValue(Number(e.target.value))}
                        className="w-full accent-[#D4A437] cursor-pointer h-2 rounded-lg bg-[#EDE7DB]"
                        />
                        <div className="flex justify-between text-[11px] text-[#64748B]">
                        <span>$5M Entry</span>
                        <span>$25M Prime</span>
                        <span>$50M Sovereign</span>
                        </div>
                    </div>

                    {/* Slider 2: Holding Horizon */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                        <span className="text-[#64748B] font-medium">Holding Horizon</span>
                        <span className="font-bold text-[#192638]">{holdingYears} Years</span>
                        </div>
                        <input
                        type="range"
                        min={2}
                        max={15}
                        step={1}
                        value={holdingYears}
                        onChange={(e) => setHoldingYears(Number(e.target.value))}
                        className="w-full accent-[#D4A437] cursor-pointer h-2 rounded-lg bg-[#EDE7DB]"
                        />
                        <div className="flex justify-between text-[11px] text-[#64748B]">
                        <span>2 Years</span>
                        <span>8 Years</span>
                        <span>15 Years</span>
                        </div>
                    </div>

                    {/* Output Card */}
                    <div className="p-5 rounded-[14px] bg-[#192638] text-white space-y-3">
                        <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-widest text-[#F5E7C5]">
                            Projected Estate Value (8.2% Avg. Index)
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#D4A437] text-white text-[10px] font-bold">
                            PRIME INDEX
                        </span>
                        </div>
                        <div className="flex items-baseline justify-between pt-1">
                        <span
                            className="text-3xl sm:text-4xl font-bold text-[#F5E7C5]"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            {projectedReturn.finalFormatted}
                        </span>
                        <span className="text-sm font-semibold text-emerald-400">
                            {projectedReturn.gainFormatted} Est. Gain
                        </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => scrollToSection('contact')}
                        style={{ borderRadius: 'var(--radius-button)' }}
                        className="w-full py-3.5 bg-[#D4A437] hover:bg-[#B88922] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <span>Request Custom Family Office Dossier</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                    </div>
                </ScrollReveal>
                </div>
            </div>
            </div>
        </section>

        {/* ====================================================================
            5. ACQUISITION PROCESS TIMELINE SECTION
            ==================================================================== */}
        <section id="process" className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal variant="fade-up">
                <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A437]">
                    Seamless Execution
                </span>
                <h2
                    className="text-3xl sm:text-4xl font-bold text-[#192638] mt-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    The Four-Stage <span className="italic font-normal text-[#D4A437]">Acquisition Protocol</span>
                </h2>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                {
                    step: '01',
                    title: 'Private Mandate Briefing',
                    desc: 'Confidential consultation with our Senior Managing Partner to define architectural, lifestyle, and yield criteria.'
                },
                {
                    step: '02',
                    title: '3D Digital Twin Shortlist',
                    desc: 'Inspect off-market residences remotely via interactive 3D architectural models and structural dossiers.'
                },
                {
                    step: '03',
                    title: 'Bespoke Aviation Viewing',
                    desc: 'Private helicopter or yacht transfers arranged for on-site inspection alongside our chief architect.'
                },
                {
                    step: '04',
                    title: 'Sovereign Closing & Handover',
                    desc: 'Cross-border legal counsel, escrow execution, and white-glove estate staffing completed in under 21 days.'
                }
                ].map((item, idx) => (
                <ScrollReveal key={item.step} variant="fade-up" delay={idx * 120}>
                    <div className="luxury-card p-6 bg-[#FFFAF0] h-full flex flex-col justify-between relative overflow-hidden">
                    <span
                        className="text-5xl font-bold text-[#F5E7C5] select-none"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        {item.step}
                    </span>
                    <div className="mt-4">
                        <h3
                        className="text-lg font-bold text-[#192638] mb-2"
                        style={{ fontFamily: 'var(--font-heading)' }}
                        >
                        {item.title}
                        </h3>
                        <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="mt-6 h-1 w-12 rounded-full bg-[#D4A437]" />
                    </div>
                </ScrollReveal>
                ))}
            </div>
            </div>
        </section>

        {/* ====================================================================
            6. CLIENT TESTIMONIALS SECTION
            ==================================================================== */}
        <section
            id="testimonials"
            className="py-16 sm:py-24 border-t border-[#EDE7DB]"
            style={{ backgroundColor: 'var(--background-soft)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal variant="fade-up">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A437]">
                    Endorsed by Principals
                    </span>
                    <h2
                    className="text-3xl sm:text-4xl font-bold text-[#192638] mt-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                    >
                    Voices of <span className="italic font-normal text-[#D4A437]">Discerning Collectors</span>
                    </h2>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5E7C5] text-xs font-semibold text-[#192638]">
                    <Star className="w-4 h-4 text-[#D4A437] fill-[#D4A437]" />
                    <span>4.98 / 5.0 Verified Principal Satisfaction</span>
                </div>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS_DATA.map((item, idx) => (
                <ScrollReveal key={item.author} variant="fade-up" delay={idx * 140}>
                    <div className="luxury-card bg-white p-7 h-full flex flex-col justify-between">
                    <div className="space-y-4">
                        <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#D4A437] fill-[#D4A437]" />
                        ))}
                        </div>
                        <p
                        className="text-base italic text-[#192638] leading-relaxed"
                        style={{ fontFamily: 'var(--font-heading)' }}
                        >
                        “{item.quote}”
                        </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#EDE7DB]">
                        <p className="text-sm font-bold text-[#192638]">{item.author}</p>
                        <p className="text-xs text-[#64748B]">{item.role}</p>
                        <span className="inline-block mt-2 px-2.5 py-0.5 rounded bg-[#FFFAF0] border border-[#EDE7DB] text-[11px] font-medium text-[#D4A437]">
                        Acquired: {item.property}
                        </span>
                    </div>
                    </div>
                </ScrollReveal>
                ))}
            </div>
            </div>
        </section>

        {/* Scroll Transition Divider */}
        <SectionTransitionDivider label="PRIVATE CONCIERGE • DIRECT DISCRETION" />

        {/* ====================================================================
            7. CONTACT SECTION (PRIVATE CONSULTATION & DIRECT DESK)
            ==================================================================== */}
        <section id="contact" className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Column: Direct Private Concierge Details */}
                <div className="lg:col-span-5 space-y-8">
                <ScrollReveal variant="fade-right">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5E7C5] text-xs font-semibold uppercase tracking-widest text-[#192638]">
                    <span>Private Client Desk</span>
                    </div>
                    <h2
                    className="text-3xl sm:text-4xl font-bold text-[#192638] mt-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                    >
                    Initiate a Confidential{' '}
                    <span className="italic font-normal text-[#D4A437]">Consultation</span>
                    </h2>
                    <p className="text-base text-[#64748B] mt-3 leading-relaxed">
                    Speak directly with a Senior Managing Partner to schedule a private architectural
                    viewing, request an off-market portfolio, or list a sovereign property.
                    </p>
                </ScrollReveal>

                <ScrollReveal variant="fade-right" delay={120}>
                    <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-[16px] bg-[#FFFAF0] border border-[#EDE7DB]">
                        <div className="w-10 h-10 rounded-[10px] bg-[#F5E7C5] flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[#192638]" />
                        </div>
                        <div>
                        <h4 className="text-sm font-bold text-[#192638]">Global Flagship Gallery</h4>
                        <p className="text-xs text-[#64748B] mt-0.5">
                            725 Fifth Avenue, 24th Floor Penthouse, New York, NY 10022
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-[16px] bg-[#FFFAF0] border border-[#EDE7DB]">
                        <div className="w-10 h-10 rounded-[10px] bg-[#F5E7C5] flex items-center justify-center shrink-0">
                        <PhoneCall className="w-5 h-5 text-[#192638]" />
                        </div>
                        <div>
                        <h4 className="text-sm font-bold text-[#192638]">24/7 Private Aviation & Desk</h4>
                        <p className="text-xs text-[#64748B] mt-0.5">
                            +1 (212) 894-7700 • +41 22 819 00 00 (Geneva)
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-[16px] bg-[#FFFAF0] border border-[#EDE7DB]">
                        <div className="w-10 h-10 rounded-[10px] bg-[#F5E7C5] flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-[#192638]" />
                        </div>
                        <div>
                        <h4 className="text-sm font-bold text-[#192638]">Encrypted Mandate Desk</h4>
                        <p className="text-xs text-[#64748B] mt-0.5">
                            concierge@aureliaestates.com
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-[16px] bg-[#FFFAF0] border border-[#EDE7DB]">
                        <div className="w-10 h-10 rounded-[10px] bg-[#F5E7C5] flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-[#192638]" />
                        </div>
                        <div>
                        <h4 className="text-sm font-bold text-[#192638]">Private Viewing Hours</h4>
                        <p className="text-xs text-[#64748B] mt-0.5">
                            Monday – Sunday • By Private Appointment Only
                        </p>
                        </div>
                    </div>
                    </div>
                </ScrollReveal>
                </div>

                {/* Right Column: Interactive Consultation Form */}
                <div className="lg:col-span-7">
                <ScrollReveal variant="fade-left" delay={150}>
                    <div className="p-7 sm:p-10 rounded-[16px] bg-[#FFFAF0] border border-[#EDE7DB] shadow-[0_8px_30px_rgba(25,38,56,0.06)]">
                    {formSubmitted ? (
                        <div className="py-12 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-[#F5E7C5] border border-[#D4A437] mx-auto flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8 text-[#D4A437]" />
                        </div>
                        <h3
                            className="text-2xl font-bold text-[#192638]"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Private Dossier Request Registered
                        </h3>
                        <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
                            Thank you, <strong className="text-[#192638]">{contactForm.fullName}</strong>.
                            Our Senior Managing Partner for{' '}
                            <strong className="text-[#192638]">{contactForm.propertyInterest}</strong>{' '}
                            will contact you within 2 hours with your encrypted 3D architectural briefing.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                            setFormSubmitted(false);
                            setContactForm({
                                fullName: '',
                                email: '',
                                phone: '',
                                propertyInterest: 'Waterfront Villas',
                                budgetRange: '$10M – $20M',
                                preferredDate: '',
                                message: ''
                            });
                            }}
                            style={{ borderRadius: 'var(--radius-button)' }}
                            className="mt-4 px-6 py-2.5 bg-[#192638] text-white text-xs font-semibold uppercase tracking-wider"
                        >
                            Submit Another Inquiry
                        </button>
                        </div>
                    ) : (
                        <form onSubmit={handleContactSubmit} className="space-y-5">
                        <div className="flex items-center justify-between border-b border-[#EDE7DB] pb-4">
                            <h3
                            className="text-2xl font-bold text-[#192638]"
                            style={{ fontFamily: 'var(--font-heading)' }}
                            >
                            Schedule a Private Viewing
                            </h3>
                            <span className="text-xs font-medium text-[#D4A437] bg-white px-3 py-1 rounded-full border border-[#EDE7DB]">
                            NDA Protected
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#192638] mb-1.5">
                                Principal Full Name *
                            </label>
                            <input
                                type="text"
                                required
                                value={contactForm.fullName}
                                onChange={(e) =>
                                setContactForm({ ...contactForm, fullName: e.target.value })
                                }
                                placeholder="e.g., Lord Alexander Sterling"
                                style={{ borderRadius: 'var(--radius-button)' }}
                                className="w-full px-4 py-3 bg-white border border-[#EDE7DB] text-sm text-[#192638] focus:outline-none focus:border-[#D4A437]"
                            />
                            </div>

                            <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#192638] mb-1.5">
                                Private Email Address *
                            </label>
                            <input
                                type="email"
                                required
                                value={contactForm.email}
                                onChange={(e) =>
                                setContactForm({ ...contactForm, email: e.target.value })
                                }
                                placeholder="principal@familyoffice.ch"
                                style={{ borderRadius: 'var(--radius-button)' }}
                                className="w-full px-4 py-3 bg-white border border-[#EDE7DB] text-sm text-[#192638] focus:outline-none focus:border-[#D4A437]"
                            />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#192638] mb-1.5">
                                Direct Telephone
                            </label>
                            <input
                                type="tel"
                                value={contactForm.phone}
                                onChange={(e) =>
                                setContactForm({ ...contactForm, phone: e.target.value })
                                }
                                placeholder="+41 79 000 00 00"
                                style={{ borderRadius: 'var(--radius-button)' }}
                                className="w-full px-4 py-3 bg-white border border-[#EDE7DB] text-sm text-[#192638] focus:outline-none focus:border-[#D4A437]"
                            />
                            </div>

                            <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#192638] mb-1.5">
                                Asset Category
                            </label>
                            <select
                                value={contactForm.propertyInterest}
                                onChange={(e) =>
                                setContactForm({ ...contactForm, propertyInterest: e.target.value })
                                }
                                style={{ borderRadius: 'var(--radius-button)' }}
                                className="w-full px-4 py-3 bg-white border border-[#EDE7DB] text-sm text-[#192638] focus:outline-none focus:border-[#D4A437]"
                            >
                                <option>Waterfront Villas</option>
                                <option>Penthouses</option>
                                <option>Modern Mansions</option>
                                <option>Heritage Estates</option>
                                <option>Off-Market Portfolio</option>
                            </select>
                            </div>

                            <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#192638] mb-1.5">
                                Capital Allocation
                            </label>
                            <select
                                value={contactForm.budgetRange}
                                onChange={(e) =>
                                setContactForm({ ...contactForm, budgetRange: e.target.value })
                                }
                                style={{ borderRadius: 'var(--radius-button)' }}
                                className="w-full px-4 py-3 bg-white border border-[#EDE7DB] text-sm text-[#192638] focus:outline-none focus:border-[#D4A437]"
                            >
                                <option>$10M – $20M</option>
                                <option>$20M – $35M</option>
                                <option>$35M – $60M</option>
                                <option>$60M+ Trophy Mandate</option>
                            </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#192638] mb-1.5">
                            Bespoke Requirements & Viewing Preferences
                            </label>
                            <textarea
                            rows={4}
                            value={contactForm.message}
                            onChange={(e) =>
                                setContactForm({ ...contactForm, message: e.target.value })
                            }
                            placeholder="Specify preferred dates, helicopter landing requirements, or specific architectural mandates..."
                            style={{ borderRadius: 'var(--radius-button)' }}
                            className="w-full px-4 py-3 bg-white border border-[#EDE7DB] text-sm text-[#192638] focus:outline-none focus:border-[#D4A437]"
                            />
                        </div>

                        <button
                            type="submit"
                            style={{ borderRadius: 'var(--radius-button)' }}
                            className="w-full py-4 bg-[#D4A437] hover:bg-[#B88922] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                            <span>Request Private Concierge Callback</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                        </form>
                    )}
                    </div>
                </ScrollReveal>
                </div>
            </div>
            </div>
        </section>

        {/* ====================================================================
            8. LUXURY FOOTER (--footer: #142235)
            ==================================================================== */}
        <footer
            className="text-white pt-16 pb-12 border-t border-[#D4A437]/30"
            style={{ backgroundColor: 'var(--footer)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
                {/* Brand Column */}
                <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[10px] bg-[#D4A437] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#142235]" />
                    </div>
                    <span
                    className="text-xl font-bold tracking-tight text-white"
                    style={{ fontFamily: 'var(--font-heading)' }}
                    >
                    AURELIA <span className="italic font-normal text-[#D4A437]">Estates</span>
                    </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                    Sovereign real estate representation and interactive 3D architectural curation across
                    New York, Geneva, London, Positano, and Dubai.
                </p>
                <div className="pt-2 text-xs text-[#F5E7C5] uppercase tracking-widest">
                    Member • International Luxury Real Estate Registry
                </div>
                </div>

                {/* Quick Navigation */}
                <div className="lg:col-span-2 space-y-3">
                <h4
                    className="text-sm font-bold uppercase tracking-wider text-[#D4A437]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Navigation
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    {[
                    { id: 'home', label: '3D Showcase' },
                    { id: 'listings', label: 'Curated Estates' },
                    { id: 'advisory', label: 'Wealth Advisory' },
                    { id: 'process', label: 'Acquisition Process' },
                    { id: 'contact', label: 'Private Desk' }
                    ].map((link) => (
                    <li key={link.id}>
                        <button
                        type="button"
                        onClick={() => scrollToSection(link.id)}
                        className="hover:text-[#D4A437] transition-colors"
                        >
                        {link.label}
                        </button>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Global Bureaus */}
                <div className="lg:col-span-3 space-y-3">
                <h4
                    className="text-sm font-bold uppercase tracking-wider text-[#D4A437]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Private Bureaus
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li>Manhattan • 725 Fifth Avenue</li>
                    <li>Geneva • Rue du Rhône 42</li>
                    <li>London • Mayfair Grosvenor Sq</li>
                    <li>Dubai • DIFC Gate Village 08</li>
                    <li>Amalfi • Via Cristoforo Colombo</li>
                </ul>
                </div>

                {/* Private Quarterly Ledger Newsletter */}
                <div className="lg:col-span-3 space-y-3">
                <h4
                    className="text-sm font-bold uppercase tracking-wider text-[#D4A437]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    The Sovereign Ledger
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                    Receive quarterly off-market architectural mandates and family office real estate
                    telemetry.
                </p>
                {newsletterSubscribed ? (
                    <div className="p-3 rounded-[10px] bg-white/10 border border-[#D4A437] text-xs text-[#F5E7C5]">
                    ✓ Subscribed to The Sovereign Quarterly Ledger.
                    </div>
                ) : (
                    <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (newsletterEmail) setNewsletterSubscribed(true);
                    }}
                    className="space-y-2"
                    >
                    <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter private email..."
                        style={{ borderRadius: 'var(--radius-button)' }}
                        className="w-full px-3.5 py-2.5 bg-white/10 border border-white/20 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#D4A437]"
                    />
                    <button
                        type="submit"
                        style={{ borderRadius: 'var(--radius-button)' }}
                        className="w-full py-2.5 bg-[#D4A437] hover:bg-[#B88922] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                        Subscribe to Ledger
                    </button>
                    </form>
                )}
                </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                <p>© {new Date().getFullYear()} Aurelia Estates International Ltd. All Rights Reserved.</p>
                <div className="flex items-center gap-6">
                <span>Sovereign Privacy Protocol</span>
                <span>AML / KYC Compliance</span>
                <span>Architectural Copyright</span>
                </div>
            </div>
            </div>
        </footer>

        {/* ====================================================================
            9. INTERACTIVE PROPERTY DOSSIER MODAL
            ==================================================================== */}
        {selectedPropertyModal && (
            <div
            onClick={() => setSelectedPropertyModal(null)}
            className="fixed inset-0 z-50 bg-[#142235]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[16px] border border-[#EDE7DB] max-w-4xl w-full overflow-hidden shadow-2xl my-8"
            >
                {/* Modal Image Gallery Header */}
                <div className="relative h-72 sm:h-96 bg-[#192638]">
                <img
                    src={selectedPropertyModal.gallery[activeModalImage]}
                    alt={selectedPropertyModal.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#192638]/85 via-transparent to-black/30" />

                <button
                    type="button"
                    onClick={() => setSelectedPropertyModal(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-[#192638] flex items-center justify-center hover:bg-[#D4A437] hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Gallery Thumbnail Switcher */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                    {selectedPropertyModal.gallery.map((imgUrl, idx) => (
                    <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveModalImage(idx)}
                        className={`w-14 h-10 rounded-[8px] overflow-hidden border-2 transition-all ${
                        activeModalImage === idx ? 'border-[#D4A437] scale-105' : 'border-white/60 opacity-75'
                        }`}
                    >
                        <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                    </button>
                    ))}
                </div>

                <div className="absolute bottom-4 left-6 text-white">
                    <span className="px-2.5 py-1 rounded bg-[#D4A437] text-xs font-semibold">
                    {selectedPropertyModal.badge}
                    </span>
                    <h3
                    className="text-2xl sm:text-3xl font-bold mt-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                    >
                    {selectedPropertyModal.title}
                    </h3>
                    <p className="text-xs text-[#F5E7C5] flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4A437]" />
                    <span>
                        {selectedPropertyModal.location} • {selectedPropertyModal.coordinates}
                    </span>
                    </p>
                </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EDE7DB]">
                    <div>
                    <span className="text-xs uppercase tracking-widest text-[#64748B] block">
                        Offering Valuation
                    </span>
                    <span
                        className="text-3xl font-bold text-[#192638]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        {selectedPropertyModal.priceFormatted}
                    </span>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs font-semibold text-[#192638]">
                    <span className="px-3.5 py-2 rounded-[10px] bg-[#FFFAF0] border border-[#EDE7DB]">
                        {selectedPropertyModal.beds} Bedrooms
                    </span>
                    <span className="px-3.5 py-2 rounded-[10px] bg-[#FFFAF0] border border-[#EDE7DB]">
                        {selectedPropertyModal.baths} Bathrooms
                    </span>
                    <span className="px-3.5 py-2 rounded-[10px] bg-[#FFFAF0] border border-[#EDE7DB]">
                        {selectedPropertyModal.sqft} Sq.Ft.
                    </span>
                    <span className="px-3.5 py-2 rounded-[10px] bg-[#F5E7C5] text-[#192638]">
                        {selectedPropertyModal.roiEstimate}
                    </span>
                    </div>
                </div>

                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                    {selectedPropertyModal.description}
                </p>

                <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#192638] mb-3">
                    Signature Architectural Specifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                    {selectedPropertyModal.features.map((feat) => (
                        <span
                        key={feat}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFAF0] border border-[#EDE7DB] text-xs font-medium text-[#192638]"
                        >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A437]" />
                        <span>{feat}</span>
                        </span>
                    ))}
                    </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-[#EDE7DB]">
                    <button
                    type="button"
                    onClick={() => setSelectedPropertyModal(null)}
                    style={{ borderRadius: 'var(--radius-button)' }}
                    className="w-full sm:w-auto px-5 py-3 border border-[#EDE7DB] text-xs font-semibold uppercase tracking-wider text-[#64748B] hover:text-[#192638]"
                    >
                    Close Dossier
                    </button>
                    <button
                    type="button"
                    onClick={() => {
                        const propTitle = selectedPropertyModal.title;
                        setSelectedPropertyModal(null);
                        setContactForm((prev) => ({
                        ...prev,
                        message: `I would like to schedule a private viewing and inspect the 3D CAD dossier for ${propTitle}.`
                        }));
                        scrollToSection('contact');
                    }}
                    style={{ borderRadius: 'var(--radius-button)' }}
                    className="w-full sm:w-auto px-6 py-3 bg-[#D4A437] hover:bg-[#B88922] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                    Schedule Viewing for This Estate
                    </button>
                </div>
                </div>
            </div>
            </div>
        )}
        </div>
    );
    }
