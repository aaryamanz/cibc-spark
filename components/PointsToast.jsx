"use client";
import { useState, useEffect, createContext, useContext, useCallback } from "react";

const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "points") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`animate-toast-in rounded-2xl px-5 py-3 shadow-xl text-sm font-semibold flex items-center gap-2 ${
              toast.type === "points"
                ? "bg-cibc-dark text-white"
                : toast.type === "success"
                ? "bg-green-600 text-white"
                : toast.type === "nudge"
                ? "bg-blue-600 text-white"
                : "bg-cibc-dark text-white"
            }`}
          >
            {toast.type === "points" && <span>⭐</span>}
            {toast.type === "success" && <span>✅</span>}
            {toast.type === "nudge" && <span>📢</span>}
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
