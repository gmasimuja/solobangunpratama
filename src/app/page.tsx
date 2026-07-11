'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Building2, HardHat, CheckCircle2, Clock, MapPin, Phone, Mail, ArrowRight, ChevronRight, MessageSquare, ShieldCheck, Ruler, Briefcase, Calendar, Award, Factory } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Palet Warna Corporate Premium:
  // Primary: #0A2540 (Deep Corporate Navy)
  // Secondary: #E31837 (Vibrant Red)
  // Accent: #C5A059 (Premium Gold)
  // Backgrounds: #FFFFFF, #F8FAFC (Slate 50), #051322 (Darker Navy for Footer)

  const waNumber = "6287777300583";
  const waMessage = "Halo Tim PT. Solo Bangun Pratama, saya ingin berkonsultasi mengenai rencana proyek konstruksi...";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 selection:bg-[#E31837] selection:text-white">
      
      {}
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-4' : 'bg-white/10 backdrop-blur-sm border-white/10 py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Section (Perfectly Centered Vertically) */}
            <div className="flex-shrink-0 flex items-center cursor-pointer group gap-4">
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center overflow-hidden border-2 transition-colors duration-300 ${scrolled ? 'bg-white border-slate-100 shadow-md' : 'bg-white/90 border-transparent shadow-lg'}`}>
                <img 
                  src="/logo.png" 
                  alt="Logo PT Solo Bangun Pratama" 
                  className="w-full h-full object-contain rounded-full p-1 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className={`text-xl md:text-2xl font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? 'text-[#0A2540]' : 'text-white'}`}>
                  SOLO BANGUN <span className="text-[#E31837]">PRATAMA</span>
                </span>
                <span className={`text-[10px] md:text-xs font-semibold tracking-[0.25em] mt-0.5 transition-colors duration-300 ${scrolled ? 'text-slate-500' : 'text-slate-200'}`}>
                  GENERAL CONTRACTOR & SUPPLIER
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 items-center">
              {['Beranda', 'Tentang Kami', 'Layanan', 'Portofolio'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:text-[#E31837] ${scrolled ? 'text-[#0A2540]' : 'text-white'}`}
                >
                  {item}
                </a>
              ))}
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-2.5 bg-[#E31837] hover:bg-[#c2142e] text-white font-bold text-sm uppercase tracking-wider rounded-sm transition-all shadow-lg shadow-red-900/20"
              >
                <MessageSquare size={16} className="mr-2" />
                Hubungi Kami
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`focus:outline-none transition-colors ${scrolled ? 'text-[#0A2540]' : 'text-white'}`}
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden absolute w-full bg-white transition-all duration-300 origin-top shadow-2xl border-t border-slate-100 ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
          <div className="px-6 py-8 space-y-4">
            {['Beranda', 'Tentang Kami', 'Layanan', 'Portofolio'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-bold text-[#0A2540] hover:text-[#E31837] border-b border-slate-100 pb-4"
              >
                {item}
              </a>
            ))}
            <a 
              href={waLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-center items-center w-full px-6 py-4 mt-6 bg-[#25D366] text-white font-bold rounded-md shadow-md"
            >
              <MessageSquare className="mr-2" /> Chat WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {}
      <section id="beranda" className="relative min-h-screen flex items-center justify-center pt-36 pb-20 md:pt-40 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 z-0 bg-[#0A2540]">
          <img 
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Modern Construction Site" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-105 transform animate-[kenburns_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-transparent to-[#0A2540]"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center min-h-[60vh]">
          <div className="inline-flex items-center justify-center space-x-3 mb-6 md:mb-8">
            <span className="w-10 md:w-12 h-0.5 bg-[#E31837]"></span>
            <span className="text-[#C5A059] text-xs md:text-base font-bold tracking-[0.2em] uppercase">PT Solo Bangun Pratama</span>
            <span className="w-10 md:w-12 h-0.5 bg-[#E31837]"></span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 md:mb-8">
            Keunggulan dalam <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#C5A059]">Rekayasa Infrastruktur.</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-300 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-2 sm:px-0">
            Menghadirkan manajemen konstruksi terpadu dan pengadaan material berkualitas tinggi. Berdedikasi untuk merealisasikan visi arsitektural dan struktural bagi sektor pemerintah, komersial, maupun residensial.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-2 mb-8">
            <a href="#portofolio" className="w-full sm:w-auto px-8 py-4 bg-[#E31837] text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-[#c2142e] transition-colors shadow-[0_10px_20px_-10px_rgba(227,24,55,0.6)]">
              Lihat Portofolio
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-white hover:text-[#0A2540] transition-colors">
              Konsultasi Proyek
            </a>
          </div>
        </div>
      </section>

      {}
      <section id="tentang-kami" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#E31837] font-bold tracking-widest uppercase text-sm mb-3">Nilai Inti Perusahaan</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-6">Fondasi Kami Membangun Kepercayaan</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Setiap proyek yang kami tangani dikelola dengan standar operasional prosedur (SOP) yang ketat, berorientasi pada keselamatan, ketepatan mutu, dan kepuasan klien berkelanjutan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] p-10 text-center rounded-sm border border-slate-100 hover:border-[#C5A059] transition-colors group">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} className="text-[#0A2540]" />
              </div>
              <h4 className="text-xl font-bold text-[#0A2540] mb-3">Standar K3 & Mutu</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Penerapan Kesehatan dan Keselamatan Kerja (K3) tanpa kompromi dipadukan dengan Quality Control material yang presisi.</p>
            </div>
            
            <div className="bg-[#F8FAFC] p-10 text-center rounded-sm border border-slate-100 hover:border-[#E31837] transition-colors group">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Award size={32} className="text-[#E31837]" />
              </div>
              <h4 className="text-xl font-bold text-[#0A2540] mb-3">Manajemen Anggaran</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Penyusunan RAB yang transparan dan terukur, menjamin efisiensi pelaksanaan tanpa mengurangi kualitas struktural sedikitpun.</p>
            </div>

            <div className="bg-[#F8FAFC] p-10 text-center rounded-sm border border-slate-100 hover:border-[#C5A059] transition-colors group">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <Clock size={32} className="text-[#0A2540]" />
              </div>
              <h4 className="text-xl font-bold text-[#0A2540] mb-3">Tepat Waktu (On-Time)</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Optimalisasi kurva-S dan penjadwalan master yang disiplin untuk memastikan serah terima (handover) tepat pada waktunya.</p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="layanan" className="py-24 bg-[#0A2540] border-t-4 border-[#E31837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-[#C5A059] font-bold tracking-widest uppercase text-sm mb-3">Spesialisasi Kami</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Solusi Konstruksi <br/>Lintas Sektor.
              </h3>
            </div>
            <p className="text-slate-300 mt-6 md:mt-0 max-w-md text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#E31837] pl-4 md:pl-0 md:pr-4">
              Sebagai General Contractor & Supplier, cakupan layanan kami didesain untuk menjawab spesifikasi unik dari berbagai target pasar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Target 1 */}
            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
              <Building2 size={40} className="text-[#C5A059] mb-6" />
              <h4 className="text-xl font-bold text-white mb-3">Fasilitas Publik & Pemerintah</h4>
              <p className="text-slate-400 text-sm">Pembangunan dan rehabilitasi sarana prasarana negara, sekolah, hingga fasilitas ibadah sesuai regulasi tender resmi.</p>
            </div>
            
            {/* Target 2 */}
            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
              <Briefcase size={40} className="text-[#E31837] mb-6" />
              <h4 className="text-xl font-bold text-white mb-3">Area Komersial & Ruko</h4>
              <p className="text-slate-400 text-sm">Optimalisasi ruang bisnis dan perkantoran dengan desain fungsional dan durabilitas tinggi untuk investasi jangka panjang.</p>
            </div>

            {/* Target 3 */}
            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
              <HardHat size={40} className="text-[#C5A059] mb-6" />
              <h4 className="text-xl font-bold text-white mb-3">Residensial & Perumahan</h4>
              <p className="text-slate-400 text-sm">Pembangunan kawasan hunian atau rumah tapak kustom dengan detail arsitektur yang aman, nyaman, dan estetis.</p>
            </div>

            {/* Target 4 */}
            <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
              <Factory size={40} className="text-[#E31837] mb-6" />
              <h4 className="text-xl font-bold text-white mb-3">Supplier Material</h4>
              <p className="text-slate-400 text-sm">Pengadaan dan pendistribusian rantai pasok material konstruksi berkualitas tinggi untuk mendukung kelancaran berbagai proyek.</p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="portofolio" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-[#E31837] font-bold tracking-widest uppercase text-sm mb-3">Rekam Jejak Portofolio</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#0A2540]">Dedikasi Dalam Tiap Bangunan</h3>
          </div>

          {/* Selesai (2-Column Balanced Grid) */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10">
              <span className="w-16 h-px bg-slate-300 mr-4"></span>
              <h4 className="text-lg font-bold text-[#0A2540] tracking-wide uppercase">Proyek Terselesaikan</h4>
              <span className="w-16 h-px bg-slate-300 ml-4"></span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="bg-white group cursor-pointer shadow-sm border border-slate-100">
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Masjid Agung Magelang" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-[#C5A059] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-md">Selesai</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-slate-500 text-sm mb-3 font-semibold">
                    <MapPin size={16} className="mr-2 text-[#E31837]" /> Kab. Magelang
                  </div>
                  <h5 className="text-xl font-bold text-[#0A2540] mb-3 leading-snug">Pembangunan Sarpras Masjid Agung Jawa Tengah</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">Penyelesaian infrastruktur fasilitas ibadah skala besar dengan menaati standar arsitektur struktural pemerintah daerah.</p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white group cursor-pointer shadow-sm border border-slate-100">
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Fasilitas Air Loka Janti" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-[#C5A059] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-md">Selesai</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-slate-500 text-sm mb-3 font-semibold">
                    <MapPin size={16} className="mr-2 text-[#E31837]" /> Loka Janti (DAK)
                  </div>
                  <h5 className="text-xl font-bold text-[#0A2540] mb-3 leading-snug">Rehabilitasi Kolam & Fasilitas Budidaya (DAK)</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">Pekerjaan sipil khusus rehabilitasi Bak Pemijahan, Induk, Pakan Alami, dan Tandon untuk fasilitas perikanan.</p>
                </div>
              </div>
            </div>
          </div>

          {/* On-going (3-Column Symmetrical Cards) */}
          <div>
            <div className="flex items-center justify-center mb-10">
              <span className="w-16 h-px bg-slate-300 mr-4"></span>
              <h4 className="text-lg font-bold text-[#0A2540] tracking-wide uppercase">Dalam Pengerjaan (On-Going)</h4>
              <span className="w-16 h-px bg-slate-300 ml-4"></span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Rehabilitasi Sedang/Berat Ruang Kelas SMPN 18', loc: 'Semarang', tag: 'Pendidikan' },
                { title: 'Rehabilitasi Sedang/Berat Ruang Kelas SMP Negeri 22', loc: 'Semarang', tag: 'Pendidikan' },
                { title: 'Rehabilitasi Sedang/Berat Ruang Kelas SDN Muktiharjo Kidul 01', loc: 'Semarang', tag: 'Pendidikan' }
              ].map((proj, idx) => (
                <div key={idx} className="bg-white p-8 border border-slate-200 border-t-4 border-t-[#0A2540] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold text-white bg-[#0A2540] px-2 py-1 uppercase tracking-wider">{proj.tag}</span>
                    <div className="flex items-center space-x-1 text-[#E31837]">
                      <span className="w-2 h-2 rounded-full bg-[#E31837] animate-pulse"></span>
                      <span className="text-xs font-bold uppercase">Progres</span>
                    </div>
                  </div>
                  <h5 className="text-lg font-bold text-[#0A2540] mb-4">{proj.title}</h5>
                  <div className="flex items-center text-slate-500 text-sm">
                    <MapPin size={14} className="mr-1" /> Kota {proj.loc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {}
      <section id="kontak" className="border-t border-slate-200 bg-white">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          
          {/* Info Section (Left) */}
          <div className="py-20 px-8 sm:px-16 lg:px-24 flex flex-col justify-center bg-white">
            <h2 className="text-[#E31837] font-bold tracking-widest uppercase text-sm mb-2">Hubungi Kami</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-[#0A2540] mb-6 leading-tight">
              Kemitraan Konstruksi<br/>Dimulai dari Sini.
            </h3>
            <p className="text-slate-600 mb-10 text-base leading-relaxed">
              Tim profesional PT. Solo Bangun Pratama siap melayani konsultasi dan pengerjaan tender proyek Anda. Hubungi kami secara langsung melalui WhatsApp untuk respons cepat.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <MapPin className="text-[#C5A059] mr-4 mt-1 w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0A2540] text-sm uppercase tracking-wider mb-1">Kantor Pusat</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Jl. Teratai I No.4 RT.002 RW.013,<br/>Mangkubumen, Banjarsari,<br/>Surakarta, Jawa Tengah</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-[#C5A059] mr-4 mt-1 w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0A2540] text-sm uppercase tracking-wider mb-1">Telepon & WhatsApp</h4>
                  <p className="text-slate-600 text-sm">0877 - 7730 - 0583</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-[#C5A059] mr-4 mt-1 w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0A2540] text-sm uppercase tracking-wider mb-1">Email Resmi</h4>
                  <p className="text-slate-600 text-sm">ptsolobangunpratama@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Calendar className="text-[#C5A059] mr-4 mt-1 w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-bold text-[#0A2540] text-sm uppercase tracking-wider mb-1">Jam Operasional</h4>
                  <p className="text-slate-600 text-sm">Senin - Jumat: 08.00 - 17.00<br/>Sabtu: 08.00 - 13.00</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <a 
              href={waLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-bold text-sm uppercase tracking-wider rounded-sm shadow-[0_10px_20px_-10px_rgba(37,211,102,0.6)] hover:bg-[#128C7E] transition-all w-full sm:w-fit"
            >
              <MessageSquare className="mr-3 w-5 h-5" />
              Chat via WhatsApp
            </a>
          </div>

          {/* Map Section (Right - Absolute fill inside grid) */}
          <div className="relative h-[400px] lg:h-full w-full bg-slate-200">
            <iframe 
              src="https://maps.google.com/maps?q=-7.5583348,110.8143924&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor PT Solo Bangun Pratama"
            ></iframe>
          </div>

        </div>
      </section>

      {}
      <footer className="bg-[#051322] pt-20 pb-10 border-t-4 border-[#E31837]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-8 border-b border-white/10 pb-16">
            
            <div className="md:col-span-5">
              <div className="flex flex-col mb-6">
                <span className="text-2xl font-extrabold text-white tracking-tight">
                  SOLO BANGUN <span className="text-[#E31837]">PRATAMA</span>
                </span>
                <span className="text-xs font-semibold tracking-[0.25em] mt-1 text-[#C5A059]">
                  PT. SOLO BANGUN PRATAMA
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                General Contractor & Supplier terpercaya di Jawa Tengah. Mendukung pembangunan infrastruktur esensial dengan komitmen pada keselamatan kerja, mutu, dan ketepatan waktu.
              </p>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Tautan Cepat</h4>
              <ul className="space-y-4">
                {['Beranda', 'Tentang Kami', 'Layanan', 'Portofolio'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center group">
                      <ChevronRight size={14} className="mr-2 text-[#E31837] group-hover:translate-x-1 transition-transform" /> 
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Fokus Klien</h4>
              <div className="flex flex-wrap gap-2">
                {['Pemerintah Daerah', 'Instansi Swasta', 'Pengembang Perumahan', 'Fasilitas Publik', 'Area Komersial', 'Pendidikan'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} PT. Solo Bangun Pratama. Seluruh Hak Cipta Dilindungi.</p>
            <p className="mt-4 md:mt-0 font-bold text-slate-400">Excellence in Construction</p>
          </div>
        </div>
      </footer>
      
      {}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes kenburns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.05) translate(-1%, -1%); }
        }
      `}} />
    </div>
  );
}