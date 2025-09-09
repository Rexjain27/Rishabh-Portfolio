"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 animate-fade-out">
      <div className="text-center">
        <pre className="text-emerald-400 font-mono text-lg mb-8 leading-tight animate-scale-in">
          {`     ___
    /   \\
   | o o |
    \\___/
     | |
  ___| |___
 |_________|`}
        </pre>

        <div className="mb-6 animate-slide-up">
          <h2 className="text-4xl font-bold text-slate-400 mb-2">
            Rishabh<span className="text-emerald-400">.</span>
          </h2>
          <p className="text-slate-500 text-sm">Loading Portfolio...</p>
        </div>

        <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden mx-auto animate-fade-in-delayed">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-emerald-400 text-sm mt-4 font-mono animate-fade-in-delayed">{Math.round(progress)}%</p>

        <div className="flex justify-center space-x-1 mt-4 animate-fade-in-delayed">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1.5s",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeOut {
          to { opacity: 0; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInDelayed {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-out {
          animation: fadeOut 0.5s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out 0.3s both;
        }
        .animate-fade-in-delayed {
          animation: fadeInDelayed 0.3s ease-out 0.5s both;
        }
      `}</style>
    </div>
  )
}
