import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // Keeping Tajawal for RTL support, typical social apps use system fonts.
        sans: ['Tajawal', 'sans-serif'],
      },
      colors: {
        // --- Facebook Style Theme Colors ---
        
        // Base colors (Facebook background and text)
        background: "#F0F2F5", // Light Gray Page Background
        foreground: "#050505", // Dark Text
        
        // Input and Border (Light gray subtle borders)
        border: "#CED0D4", 
        input: "#CED0D4", 
        ring: "#1877F2", // Focus blue
        
        // Primary (Facebook Blue)
        primary: {
          DEFAULT: "#1877F2", 
          foreground: "#FFFFFF",
        },
        
        // Secondary (Light gray for hover/subtle elements)
        secondary: {
          DEFAULT: "#E4E6EB", 
          foreground: "#050505",
        },
        
        // Status Colors
        destructive: {
          DEFAULT: "#FA383E", // Standard Facebook Red/Error
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#36A420", // Standard Facebook Green/Success
          foreground: "#FFFFFF",
        },
        
        // Muted (Gray text/icons)
        muted: {
          DEFAULT: "#E4E6EB", 
          foreground: "#606770", 
        },
        
        // Accent (Usually same as secondary hover for Facebook style)
        accent: {
          DEFAULT: "#E4E6EB",
          foreground: "#050505",
        },
        
        // Popover and Card (White surfaces)
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#050505",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#050505",
        },
        // --- End Facebook Style Theme Colors ---
      },
      borderRadius: {
        // Fixed radii approximating Facebook's slight rounding
        lg: "0.5rem", // 8px
        md: "0.375rem", // 6px
        sm: "0.25rem", // 4px (Common for buttons/inputs)
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in-right": {
          from: { transform: "translateX(-100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;