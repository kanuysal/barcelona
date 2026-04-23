import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONFIG } from "./grid/gridConfig";
// 1. THE PHYSICS
// High stiffness, moderate damping = "Snappy but smooth" (Apple feel)
const islandTransition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 1,
};

export function UnifiedControlBar({
  setZoomTrigger,
  isZoomedIn,
  hasActiveSelection,
  categoryFilter,
  colorFilter,
  modestyFilter,
  onCategoryChange,
  onColorChange,
  onModestyChange,
}) {
  const categories = [
    "Tümü", "Gelinlik", "Tesettür Gelinlik", "Söz Elbisesi", "Nikah Elbisesi", "Nişan Elbisesi", "Kına Elbisesi", "Kaftan", "Şalvar", "After Party", "Abiye", "Büyük Beden", "OUTLET"
  ];
  const colors = [
    "Tümü", "Beyaz", "Siyah", "Kırmızı", "Fuşya", "Bordo", "Bej", "Lacivert", "Bakır", "Gümüş", "Altın", "Diğer"
  ];
  const modesties = [
    "Tümü", "Evet", "Hayır"
  ];

  return (
    <div
      className="control-bar-container"
      style={{
        position: "fixed",
        bottom: "40px",
        left: "0",
        right: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        zIndex: 100,
        pointerEvents: "none",
        fontFamily: "'Italiana', serif",
      }}
    >
      <motion.div
        className="control-bar-island"
        layout
        transition={islandTransition}
        style={{
          background: "linear-gradient(135deg, rgba(20, 20, 20, 0.45) 0%, rgba(30, 30, 30, 0.35) 50%, rgba(15, 15, 15, 0.45) 100%)",
          backdropFilter: "blur(40px) saturate(150%)",
          WebkitBackdropFilter: "blur(40px) saturate(150%)",
          borderRadius: "32px",
          border: "1px solid rgba(255, 182, 193, 0.2)", // Subtle rose gold border
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 182, 193, 0.1)",
          padding: "6px",
          display: "flex",
          alignItems: "center",
          pointerEvents: "auto",
          height: "56px",
          overflow: "hidden",
          color: "white"
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {hasActiveSelection ? (
            <motion.button
              key="buy-now-mode"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
              transition={{ ...islandTransition, opacity: { duration: 0.2 } }}
              onClick={() => { }}
              style={{
                background: "linear-gradient(135deg, #b76e79 0%, #e0bfb8 100%)", // Rose gold gradient
                color: "#111",
                border: "none",
                borderRadius: "24px",
                padding: "0 24px",
                height: "44px",
                fontSize: "14px",
                fontFamily: "'Garamond', serif",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
              whileTap={{ scale: 0.95 }}
            >
              İncele
            </motion.button>
          ) : isZoomedIn ? (
            <motion.div
              key="compact-mode"
              initial={{ opacity: 0, scale: 0.5, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.5, filter: "blur(4px)" }}
              transition={{ ...islandTransition, opacity: { duration: 0.2 } }}
              style={{ display: "flex" }}
            >
              <ControlButton
                icon="remove"
                onClick={() => setZoomTrigger("OUT")}
                label="Zoom Out"
              />
            </motion.div>
          ) : (
            <motion.div
              key="expanded-mode"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
              transition={{ ...islandTransition, opacity: { duration: 0.2 } }}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <ControlButton
                icon="add"
                onClick={() => setZoomTrigger(CONFIG.zoomIn)}
                label="Zoom In"
              />

              <motion.div
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "24px" }}
                transition={{ delay: 0.1 }}
                style={{
                  width: "1px",
                  background: "rgba(255,182,193,0.3)", // Rose gold divider
                  margin: "0 2px",
                  boxShadow: "0 0 1px rgba(255, 182, 193, 0.1)",
                }}
              />

              <div className="desktop-filters" style={{ display: "flex", gap: "10px", padding: "0 10px" }}>
                <CustomSelect
                  value={categoryFilter}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  options={categories}
                  label="Kategori"
                />
                <CustomSelect
                  value={colorFilter}
                  onChange={(e) => onColorChange(e.target.value)}
                  options={colors}
                  label="Renk"
                />
                <CustomSelect
                  value={modestyFilter}
                  onChange={(e) => onModestyChange(e.target.value)}
                  options={modesties}
                  label="Tesettür Uyumu"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile Filters */}
      <AnimatePresence>
        {!isZoomedIn && !hasActiveSelection && (
          <motion.div
            className="mobile-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={islandTransition}
            style={{
              position: "absolute",
              bottom: "70px",
              left: "10px",
              right: "10px",
              display: "none",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                background: "linear-gradient(135deg, rgba(20, 20, 20, 0.85) 0%, rgba(15, 15, 15, 0.85) 100%)",
                backdropFilter: "blur(40px) saturate(150%)",
                WebkitBackdropFilter: "blur(40px) saturate(150%)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 182, 193, 0.2)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                padding: "8px 12px",
                gap: "8px",
                pointerEvents: "auto",
                width: "100%",
                maxWidth: "400px"
              }}
            >
              <CustomSelect
                value={categoryFilter}
                onChange={(e) => onCategoryChange(e.target.value)}
                options={categories}
                label="Kategori"
                mobile
              />
              <CustomSelect
                value={colorFilter}
                onChange={(e) => onColorChange(e.target.value)}
                options={colors}
                label="Renk"
                mobile
              />
              <CustomSelect
                value={modestyFilter}
                onChange={(e) => onModestyChange(e.target.value)}
                options={modesties}
                label="Tesettür Uyumu"
                mobile
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-filters { display: flex; align-items: center; }
        .mobile-filters { display: none !important; }
        .custom-select-wrapper { position: relative; display: flex; align-items: center; }
        .custom-select {
          appearance: none;
          background: transparent;
          border: 1px solid rgba(255, 182, 193, 0.4);
          color: white;
          padding: 6px 28px 6px 12px;
          border-radius: 16px;
          font-family: 'Garamond', serif;
          font-size: 15px;
          outline: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        .custom-select:hover { border-color: rgba(255, 182, 193, 0.8); background: rgba(255,255,255,0.05); }
        .custom-select option { background: #111; color: white; }
        .custom-select-wrapper::after {
          content: '▼';
          font-size: 10px;
          color: white;
          position: absolute;
          right: 12px;
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .desktop-filters { display: none !important; }
          .mobile-filters { display: flex !important; }
          .custom-select { font-size: 13px; padding: 4px 24px 4px 8px; border-radius: 12px; }
          .custom-select-wrapper::after { right: 8px; font-size: 8px; }
        }
      `}</style>
    </div>
  );
}

function CustomSelect({ value, onChange, options, label, mobile }) {
  return (
    <div className="custom-select-wrapper" style={{ flex: mobile ? "1 1 calc(33% - 8px)" : "initial" }}>
      <select className="custom-select" value={value} onChange={onChange} style={{ width: "100%" }}>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt === "Tümü" && label !== "Tümü" ? `${label}: Tümü` : opt}</option>
        ))}
      </select>
    </div>
  );
}

// --- Sub-components for cleaner code & isolated animations ---

function ControlButton({ onClick, icon, label }) {
  return (
    <motion.button
      layout="position" // Prevents icon distortion during resize
      onClick={onClick}
      className="control-button"
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(0,0,0,0.05)",
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "none",
        background: "transparent",
        color: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        outline: "none",
      }}
      aria-label={label}
    >
      {/* Simple SVG Icons instead of text for a sharper look */}
      {icon === "add" ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      )}
    </motion.button>
  );
}

function TabButton({ children, isActive, onClick }) {
  return (
    <motion.button
      layout
      onClick={onClick}
      className="tab-button"
      style={{
        position: "relative",
        border: "none",
        background: "transparent",
        color: isActive ? "#000" : "#666",
        padding: "8px 16px",
        borderRadius: "20px",
        fontSize: "14px",
        fontWeight: "600",
        cursor: "pointer",
        whiteSpace: "nowrap", // Prevents text wrapping during resize
        zIndex: 1,
        transition: "color 0.2s ease",
      }}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeTabIndicator"
          transition={islandTransition}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255, 255, 255, 0.6)", // Solid background for active state
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
            zIndex: -1,
          }}
        />
      )}
    </motion.button>
  );
}

function FilterChip({ children, isActive, onClick, layoutGroup = "default" }) {
  return (
    <motion.button
      layout
      onClick={onClick}
      className="filter-chip"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={islandTransition}
      style={{
        position: "relative",
        border: "none",
        background: "transparent",
        color: isActive ? "#fff" : "#555",
        padding: "6px 12px",
        borderRadius: "14px",
        fontSize: "12px",
        fontWeight: "500",
        cursor: "pointer",
        whiteSpace: "nowrap",
        zIndex: 1,
      }}
    >
      {/* Animated background pill */}
      {isActive && (
        <motion.div
          layoutId={`activeFilterIndicator-${layoutGroup}`}
          transition={islandTransition}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.85)",
            borderRadius: "14px",
            zIndex: -1,
          }}
        />
      )}
      {!isActive && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.05)",
            borderRadius: "14px",
            zIndex: -1,
          }}
        />
      )}
      {children}
    </motion.button>
  );
}
