import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header({ searchTerm, setSearchTerm }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "72px",
          background: isScrolled
            ? "rgba(255,255,255,0.88)"
            : "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%)",
          backdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(200,185,178,0.25)"
            : "1px solid transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            cursor: "pointer",
          }}
        >
          <a
            href="https://minalidya.wedding"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "22px",
              fontWeight: "400",
              letterSpacing: "5px",
              fontFamily: "'ItalianaLocal', 'Cormorant Garamond', Georgia, serif",
              lineHeight: "1.1",
              color: "#1a1a1a",
              textDecoration: "none",
              userSelect: "none",
              cursor: "pointer",
            }}
          >
            MINA LIDYA
          </a>
          <div
            style={{
              fontSize: "8.5px",
              fontWeight: "500",
              letterSpacing: "5px",
              fontFamily: "'Inter', sans-serif",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.45)",
              marginTop: "3px",
              userSelect: "none",
            }}
          >
            HAUTE COUTURE
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "36px",
            }}
          >
            {[
              { label: "Koleksiyonlar", href: "https://minalidya.com" },
              { label: "Randevu Al", href: "https://minalidya.com/randevu-al" },
              { label: "Hakkımızda", href: "https://minalidya.wedding/about-us" },
              { label: "İletişim", href: "https://minalidya.wedding/contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(0,0,0,0.6)",
                    textDecoration: "none",
                    fontSize: "12px",
                    fontFamily: "'Inter', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#c8927a")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(0,0,0,0.6)")}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* SEARCH */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <motion.input
              initial={false}
              animate={{
                width: isSearchOpen ? "200px" : "0px",
                opacity: isSearchOpen ? 1 : 0,
                padding: isSearchOpen ? "0 14px" : "0",
              }}
              placeholder="Ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: "rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "20px",
                height: "36px",
                color: "#1a1a1a",
                outline: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                marginRight: isSearchOpen ? "8px" : "0",
                pointerEvents: isSearchOpen ? "all" : "none",
                transition: "border-color 0.2s",
              }}
            />
            <motion.button
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if (isSearchOpen) setSearchTerm("");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: isSearchOpen ? "#c8927a" : "transparent",
                border: "1px solid rgba(0,0,0,0.15)",
                color: isSearchOpen ? "#fff" : "#1a1a1a",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                transition: "all 0.2s ease",
              }}
              aria-label="Ara"
            >
              {isSearchOpen ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ELEGANT FOOTER */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 48px",
          background: "linear-gradient(0deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
        }}
      >
        {/* LEFT: WhatsApp */}
        <a
          href="https://wa.me/905421131641?text=Merhaba+Mina+Lidya%2C+k%C4%B1yafet+se%C3%A7imim+konusunda+yard%C4%B1mc%C4%B1+olabilir+misiniz%3F"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Üzerinden Ulaşın"
          style={{ pointerEvents: "auto", display: "flex", alignItems: "center" }}
          onMouseOver={(e) => { if (e.currentTarget.firstChild) e.currentTarget.firstChild.style.stroke = "#c8927a"; }}
          onMouseOut={(e) => { if (e.currentTarget.firstChild) e.currentTarget.firstChild.style.stroke = "rgba(0,0,0,0.6)"; }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.2s" }}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>

        {/* CENTER: Locations */}
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <a
            href="https://minalidya.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(0,0,0,0.45)",
              textDecoration: "none",
              fontSize: "10px",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              pointerEvents: "auto",
              transition: "color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#c8927a")}
            onMouseOut={(e) => (e.target.style.color = "rgba(0,0,0,0.45)")}
          >
            İnegöl Mağaza
          </a>
          <span style={{ color: "rgba(0,0,0,0.15)", fontSize: "10px", pointerEvents: "none" }}>◆</span>
          <a
            href="https://minalidya.es"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(0,0,0,0.45)",
              textDecoration: "none",
              fontSize: "10px",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              pointerEvents: "auto",
              transition: "color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#c8927a")}
            onMouseOut={(e) => (e.target.style.color = "rgba(0,0,0,0.45)")}
          >
            Valencia Atelier
          </a>
        </div>

        {/* RIGHT: Instagram */}
        <a
          href="https://instagram.com/minalidyagelinlik"
          target="_blank"
          rel="noopener noreferrer"
          title="@minalidyagelinlik"
          style={{ pointerEvents: "auto", display: "flex", alignItems: "center" }}
          onMouseOver={(e) => { if (e.currentTarget.firstChild) e.currentTarget.firstChild.style.stroke = "#c8927a"; }}
          onMouseOut={(e) => { if (e.currentTarget.firstChild) e.currentTarget.firstChild.style.stroke = "rgba(0,0,0,0.6)"; }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.2s" }}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </div>
      <style>{`
        @font-face {
          font-family: 'ItalianaLocal';
          src: url('/fonts/Italiana-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          header { padding: 0 20px !important; }
        }
      `}</style>
    </>
  );
}
