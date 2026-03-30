import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-on-primary">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-900/70 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <div className="font-headline font-black text-2xl tracking-tighter text-white uppercase">
          Frasier Transport
        </div>
        <div className="hidden md:flex items-center space-x-8 font-headline text-base tracking-tight">
          <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">
            Home
          </a>
          <a className="text-neutral-300 hover:text-white transition-colors" href="#">
            History
          </a>
          <a className="text-neutral-300 hover:text-white transition-colors" href="#">
            Equipment
          </a>
          <a className="text-neutral-300 hover:text-white transition-colors" href="#">
            Careers
          </a>
          <a className="text-neutral-300 hover:text-white transition-colors" href="#">
            Contact Us
          </a>
        </div>
        <button className="bg-industrial-gradient text-on-primary-container px-6 py-2 rounded-default font-label font-bold uppercase tracking-wider scale-95 active:scale-90 transition-transform cursor-pointer">
          Apply to Drive
        </button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-end overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero_new.png"
              alt="Classic Red Peterbilt Truck"
              fill
              className="object-cover grayscale-[0.1] brightness-90 contrast-110"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface/60 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <div className="inline-block py-1 px-3 bg-primary-container text-on-primary-container font-label text-sm font-bold uppercase tracking-widest mb-6">
                Est. 1995
              </div>
              <h1 className="text-white font-headline font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-6">
                Three Decades of <br />
                <span className="text-primary italic">Reliability</span>.
              </h1>
              <p className="font-label text-xl md:text-2xl text-on-surface-variant uppercase tracking-widest leading-relaxed max-w-2xl mb-8">
                Your Trusted Logistics Partner Since 1995.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-default font-label font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors cursor-pointer">
                  Request a Freight Quote
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-default font-label font-bold uppercase tracking-widest hover:bg-primary/10 transition-colors cursor-pointer backdrop-blur-sm">
                  Apply to Drive
                </button>
              </div>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <div className="bg-surface-variant/70 backdrop-blur-xl p-8 rounded-default border-l-4 border-primary">
                <span className="font-label text-xs text-primary font-bold uppercase tracking-tighter block mb-2">
                  Technical Status
                </span>
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                  <span className="text-white font-headline font-bold">Logistics Active</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Serving the backbone of America with precision-engineered routing and fleet management for three decades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="bg-surface py-32 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline font-black text-4xl md:text-5xl text-white uppercase tracking-tighter mb-8 leading-tight">
                Our Legacy is <br />
                Measured in Miles.
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg max-w-xl">
                <p>
                  Rooted in Nampa, Idaho since 1995, Frasier Transport was founded on the belief that a driver&apos;s handshake should be as reliable as their
                  engine. With over <span className="text-white font-bold">30 years of operational experience</span>, we have evolved into a premier regional logistics powerhouse.
                </p>
                <p>
                  As a proud <span className="text-white font-bold uppercase tracking-widest text-sm">Family-Owned</span> business
                  with deep Mid-Western roots, we ensure personal dedication to every load, balancing massive commercial capacity with the personalized touch only an experienced firm can provide.
                </p>
                <div className="pt-8">
                  <a
                    className="inline-flex items-center gap-2 font-label text-primary font-bold uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all pb-2"
                    href="#"
                  >
                    Read Our Full Story
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="bg-surface-container-low p-4 h-[500px] relative">
                <Image
                  src="/images/legacy.jpg"
                  alt="Vintage Peterbilt Truck"
                  fill
                  className="object-cover filter grayscale"
                />
                <div className="absolute -bottom-8 -left-8 bg-surface-container-highest p-8 hidden lg:block">
                  <p className="font-headline font-black text-6xl text-primary leading-none">30</p>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-2">
                    Years of Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Frasier Difference */}
        <section className="bg-surface pb-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="font-label text-primary font-bold uppercase tracking-widest text-sm block mb-4">
                Core Principles
              </span>
              <h2 className="font-headline font-black text-4xl md:text-5xl text-white uppercase tracking-tighter">
                The Frasier Difference
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container border-t-2 border-primary/30 p-10 hover:border-primary transition-all group">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">
                  health_and_safety
                </span>
                <h3 className="font-headline font-bold text-white text-xl uppercase mb-4">Uncompromising Safety</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Safety isn&apos;t just a metric; it&apos;s our foundational promise. We exceed industry standards with rigorous maintenance schedules and continuous driver training for over three decades.
                </p>
              </div>
              <div className="bg-surface-container border-t-2 border-primary/30 p-10 hover:border-primary transition-all group">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">
                  family_home
                </span>
                <h3 className="font-headline font-bold text-white text-xl uppercase mb-4">Family Values</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  As a deeply-rooted family-owned company, we treat our clients and drivers with unwavering respect and integrity. A handshake still means something round here.
                </p>
              </div>
              <div className="bg-surface-container border-t-2 border-primary/30 p-10 hover:border-primary transition-all group">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">
                  precision_manufacturing
                </span>
                <h3 className="font-headline font-bold text-white text-xl uppercase mb-4">Precision Logistics</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  From critical commercial routes to highly-secure state operations, we leverage deep operational experience to ensure your freight arrives precisely when needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Spectrum */}
        <section className="bg-neutral-900 py-32 px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-label text-primary font-bold uppercase tracking-widest text-sm block mb-4">
                Our Capabilities
              </span>
              <h2 className="font-headline font-black text-4xl md:text-6xl text-white uppercase tracking-tighter">
                Service Spectrum
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface p-12 border-l-4 border-primary shadow-xl">
                <h3 className="font-headline font-black text-3xl text-white uppercase mb-4">Commercial Logistics</h3>
                <p className="text-on-surface-variant text-base leading-relaxed mb-6">
                  Driving American industry forward. We handle complex freight demands with our fleet of versatile trailers. Whether it&apos;s oversized infrastructure, agriculture, or general freight, we deliver with mid-western reliability.
                </p>
                <ul className="space-y-3 text-sm font-label uppercase tracking-widest text-primary/80 mb-8">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check_circle</span> Oversized &amp; Heavy Haul</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check_circle</span> General Commercial Freight</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check_circle</span> Multi-State Coordination</li>
                </ul>
              </div>
              <div className="bg-surface p-12 border-l-4 border-blue-500 shadow-xl">
                <h3 className="font-headline font-black text-3xl text-white uppercase mb-4">Government Solutions</h3>
                <p className="text-on-surface-variant text-base leading-relaxed mb-6">
                  Trusted by the public sector. As an authorized carrier for specialized government contracts, we bring an unmatched commitment to compliance, security, and discreet operation for high-stakes transport.
                </p>
                <ul className="space-y-3 text-sm font-label uppercase tracking-widest text-blue-400/80 mb-8">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-blue-500">verified</span> Cleared Transport Protocols</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-blue-500">verified</span> Strict Compliance Monitoring</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-blue-500">verified</span> Secure Routing Strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Fleet (Bento Style) */}
        <section className="bg-surface-container-low py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="font-label text-primary font-bold uppercase tracking-widest text-sm block mb-4">
                  Precision Engineering
                </span>
                <h2 className="font-headline font-black text-4xl md:text-6xl text-white uppercase tracking-tighter">
                  The Fleet
                </h2>
              </div>
              <p className="text-on-surface-variant max-w-sm font-body">
                Our inventory includes meticulously maintained modern Peterbilts and Kenworths. We deploy <span className="text-white">Flatbeds, Lowboys, Step Decks, and Conestogas</span> ready for any mission.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Large Feature */}
              <div className="md:col-span-8 bg-surface overflow-hidden group cursor-pointer h-[400px] relative">
                <Image
                  src="/images/fleet_large.jpg"
                  alt="Modern Kenworth Fleet"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="font-label text-primary text-xs font-bold uppercase mb-2">Heavy Haul</p>
                  <h3 className="text-white font-headline text-3xl font-black uppercase">Modern Kenworth W900L</h3>
                </div>
              </div>
              {/* Small Sidebar */}
              <div className="md:col-span-4 bg-primary-container p-8 flex flex-col justify-between h-[400px]">
                <span className="material-symbols-outlined text-on-primary-container text-5xl">settings_suggest</span>
                <div>
                  <h3 className="font-headline font-black text-2xl text-on-primary-container uppercase leading-tight mb-4">
                    Meticulously Maintained
                  </h3>
                  <p className="text-on-primary-container/80 text-sm">
                    Operating a versatile fleet of 24+ tractors and 34+ trailers. Every rig undergoes a 120-point inspection
                    every 15,000 miles to ensure zero downtime.
                  </p>
                </div>
              </div>
              {/* Bottom Row */}
              <div className="md:col-span-4 bg-surface-container-highest p-8 h-[300px] flex flex-col justify-center">
                <h4 className="font-label text-primary font-bold text-4xl mb-2">99.8%</h4>
                <p className="font-label text-white uppercase tracking-widest text-sm">On-Time Delivery Rate</p>
              </div>
              <div className="md:col-span-8 bg-surface overflow-hidden group cursor-pointer h-[300px] relative">
                <Image
                  src="/images/fleet_interior.jpg"
                  alt="Peterbilt Interior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white font-headline text-2xl font-black uppercase">Driver-First Comfort</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Team (CTA) */}
        <section className="bg-surface py-32 px-8">
          <div className="max-w-7xl mx-auto bg-surface-container-high relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
              <Image
                src="/images/join_team.jpg"
                alt="Professional Truck Driver"
                fill
                className="object-cover brightness-50 grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="relative z-10 lg:w-3/5 p-12 md:p-24">
              <span className="font-label text-primary font-bold uppercase tracking-widest text-sm block mb-6">
                Career Opportunities
              </span>
              <h2 className="font-headline font-black text-4xl md:text-6xl text-white uppercase tracking-tighter mb-8 leading-none">
                Family First. <br />
                Highway Strong.
              </h2>
              <div className="text-on-surface-variant space-y-4 mb-12 max-w-md">
                <p className="text-lg leading-relaxed">
                  We know our drivers by name, not by truck number. Experience competitive stability, genuine respect, and a true family culture you deserve as a professional CDL driver.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-widest text-primary/80">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">check_circle</span> Industry-Leading Pay
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">check_circle</span> 2024 Peterbilt Rigs
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">check_circle</span> Full Benefits
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">check_circle</span> OTR Stability
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-6">
                <button className="bg-industrial-gradient text-on-primary-container px-10 py-4 rounded-default font-label font-bold uppercase tracking-widest transition-transform active:scale-95 shadow-xl cursor-pointer">
                  Join The Frasier Team
                </button>
                <button className="border border-outline-variant text-white px-10 py-4 rounded-default font-label font-bold uppercase tracking-widest hover:bg-white/5 transition-colors cursor-pointer">
                  View Benefits
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Location Info */}
        <section className="bg-surface pb-32 px-8" id="contact">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-outline-variant/10">
              <div className="bg-surface p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="font-label text-primary text-xs font-bold uppercase">Headquarters</span>
                </div>
                <h3 className="font-headline font-bold text-white uppercase tracking-tight mb-4">Nampa Corporate Hub</h3>
                <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest leading-relaxed">
                  Frasier Transport, Inc.
                  <br />
                  8171 E Executive Dr.
                  <br />
                  Nampa, ID 83687
                </p>
              </div>
              <div className="bg-surface p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-primary">contact_phone</span>
                  <span className="font-label text-primary text-xs font-bold uppercase">Contact Points</span>
                </div>
                <h3 className="font-headline font-bold text-white uppercase tracking-tight mb-4">Direct Lines</h3>
                <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest leading-relaxed">
                  Call: 208.442.0740
                  <br />
                  <br />
                  Email: dispatch@frasiertransport.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 w-full py-12 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 w-full">
          <div className="md:col-span-1">
            <div className="font-headline font-black text-xl text-white mb-6 uppercase">Frasier Transport, Inc.</div>
            <p className="text-neutral-500 font-label text-xs leading-relaxed uppercase tracking-widest">
              Engineering precision in logistical movement since 1995. Built on reliability, family values, and industrial
              excellence out of Nampa, Idaho.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-on-surface-variant font-label font-bold text-xs uppercase tracking-widest mb-2">Company</h4>
              <a className="text-neutral-500 hover:text-primary transition-colors font-label text-sm uppercase tracking-widest" href="#">
                Home
              </a>
              <a className="text-neutral-500 hover:text-primary transition-colors font-label text-sm uppercase tracking-widest" href="#">
                About Us
              </a>
              <a className="text-neutral-500 hover:text-primary transition-colors font-label text-sm uppercase tracking-widest" href="#">
                Fleet
              </a>
              <a className="text-neutral-500 hover:text-primary transition-colors font-label text-sm uppercase tracking-widest" href="#">
                Careers
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-on-surface-variant font-label font-bold text-xs uppercase tracking-widest mb-2">
                Legal & Safety
              </h4>
              <a className="text-neutral-500 hover:text-primary transition-colors font-label text-sm uppercase tracking-widest" href="#">
                Privacy Policy
              </a>
              <a className="text-neutral-500 hover:text-primary transition-colors font-label text-sm uppercase tracking-widest" href="#">
                Terms of Service
              </a>
              <a className="text-neutral-500 hover:text-primary transition-colors font-label text-sm uppercase tracking-widest" href="#">
                Safety Standards
              </a>
              <a className="text-neutral-500 hover:text-primary transition-colors font-label text-sm uppercase tracking-widest" href="#">
                Driver Portal
              </a>
            </div>
          </div>
          <div className="md:col-span-1 flex flex-col justify-between">
            <div>
              <h4 className="text-on-surface-variant font-label font-bold text-xs uppercase tracking-widest mb-4">Connect</h4>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-neutral-500 cursor-pointer hover:text-primary transition-colors">
                  public
                </span>
                <span className="material-symbols-outlined text-neutral-500 cursor-pointer hover:text-primary transition-colors">
                  share
                </span>
                <span className="material-symbols-outlined text-neutral-500 cursor-pointer hover:text-primary transition-colors">
                  link
                </span>
              </div>
            </div>
            <p className="text-neutral-500 font-label text-[10px] uppercase tracking-widest leading-tight mt-8">
              © 2024 Frasier Transport, Inc. All Rights Reserved. Engineered for Precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

