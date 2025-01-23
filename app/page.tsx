"use client";

import { WalletIsland } from "@coinbase/onchainkit/wallet";
import FundCardComponents from "./components/Fund";
import { useState } from "react";

export default function App() {
    const [showFundCard, setShowFundCard] = useState(false);

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#0A0A0F]">
            {/* Dropdown button in top right corner */}
            <div className="fixed top-4 right-4 z-[9999]">
                <button
                    type="button"
                    onClick={() => setShowFundCard(!showFundCard)}
                    className="px-6 py-2 bg-transparent border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300 tracking-wider text-sm rounded-md"
                >
                    Fund
                </button>
                
                {/* Dropdown content */}
                {showFundCard && (
                    <div className="absolute top-full right-0 mt-2 w-[400px] bg-[#0A0A0F] shadow-xl rounded-lg">
                        <FundCardComponents />
                    </div>
                )}
            </div>

            {/* Subtle star background */}
            <div className="absolute inset-0">
                {Array.from({ length: 100 }, (_, i) => ({
                    id: `star-${i}`,
                    top: Math.random() * 100,
                    left: Math.random() * 100,
                    size: Math.random() * 2,
                    delay: Math.random() * 3,
                    opacity: Math.random() * 0.3 + 0.1
                })).map((star) => (
                    <div
                        key={star.id}
                        className="absolute rounded-full animate-twinkle-soft"
                        style={{
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            backgroundColor: 'white',
                            animationDelay: `${star.delay}s`,
                            opacity: star.opacity
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-0 flex flex-col items-center justify-center min-h-screen p-4">
                {/* Main text with elegant typography */}
                <h1 className="text-7xl md:text-9xl font-light text-center mb-12 tracking-tight">
                    <span className="inline-block text-white/90 font-serif">
                        A very very
                    </span>
                    <br />
                    <span className="inline-block text-white/80 font-serif italic">
                       pretty app
                    </span>
                </h1>

                {/* Subtle description */}
                <p className="text-lg md:text-xl text-white/40 max-w-xl text-center mb-16 tracking-wide font-light">
                    Elegance in simplicity. Beauty in design.
                </p>

                {/* Minimal interactive element */}
                <button
                    type="button"
                    className="px-8 py-3 bg-transparent border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors duration-300 tracking-widest uppercase text-sm"
                >
                    Explore
                </button>
            </div>

            {/* Subtle ambient light */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

            {/* Wallet Island - Fixed position with highest z-index */}
            <div className="fixed bottom-0 right-0 z-[9999]">
                <WalletIsland />
            </div>
        </div>
    );
}
