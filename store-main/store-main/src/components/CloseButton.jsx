import React, { useEffect, useState, useRef } from "react";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function CloseButton({
  isActive,
  position,
  onClose,
  productUrl,
}) {
  const { gl } = useThree();
  const [shouldShow, setShouldShow] = useState(false);
  const timerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    canvasRef.current = gl.domElement;
  }, [gl]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (!isActive) {
      timerRef.current = setTimeout(() => setShouldShow(false), 0);
      return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }
    timerRef.current = setTimeout(() => setShouldShow(true), 280);
    return () => { if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; } };
  }, [isActive]);

  if (!isActive) return null;

  const [x, y, z] = position;

  return (
    <Html
      position={[x, y, z]}
      center
      style={{ pointerEvents: "auto", transform: "translate(-50%, -160%)" }}
      occlude
    >
      <div
        onMouseEnter={() => { if (canvasRef.current) canvasRef.current.style.cursor = "pointer"; }}
        onMouseLeave={() => { if (canvasRef.current) canvasRef.current.style.cursor = "grab"; }}
        style={{
          display: "flex",
          gap: "6px",
          opacity: shouldShow ? 1 : 0,
          transform: shouldShow ? "translateY(0) scale(1)" : "translateY(4px) scale(0.95)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        {/* İNCELE button */}
        {productUrl && (
          <a
            href={productUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#1a1a1a",
              color: "#fff",
              border: "none",
              borderRadius: "2px",
              padding: "7px 14px",
              fontSize: "9px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "500",
              letterSpacing: "2px",
              textTransform: "uppercase",
              cursor: "pointer",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              whiteSpace: "nowrap",
              transition: "background 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#c8927a")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#1a1a1a")}
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            İNCELE
          </a>
        )}
        {/* Close/Kapat button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          onMouseEnter={() => { if (canvasRef.current) canvasRef.current.style.cursor = "pointer"; }}
          onMouseLeave={() => { if (canvasRef.current) canvasRef.current.style.cursor = "grab"; }}
          title="Kapat"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(0,0,0,0.15)",
            borderRadius: "2px",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: 0,
            transition: "background 0.2s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#f0f0f0")}
          onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.9)")}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(0,0,0,0.7)"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </Html>
  );
}
