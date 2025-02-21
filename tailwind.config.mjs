/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/**/*.{ts,tsx}",
	],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		colors: {
		  space: {
			dark: "#0A0B0D",
			purple: "#6E3A9C",
			pink: "#FF61D8",
			teal: "#4BFFEF",
		  },
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))'
		  },
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
		  float: {
			"0%, 100%": { transform: "translateY(0)" },
			"50%": { transform: "translateY(-20px)" },
		  },
		  "fade-up": {
			"0%": { opacity: "0", transform: "translateY(20px)" },
			"100%": { opacity: "1", transform: "translateY(0)" },
		  },
		  "fade-in": {
			"0%": { opacity: "0" },
			"100%": { opacity: "1" },
		  },
		  parallax: {
			"0%": { transform: "translateZ(0)" },
			"100%": { transform: "translateZ(100px)" },
		  },
		  meteor: {
			"0%": {
			  transform: "rotate(var(--angle)) translateX(0)",
			  opacity: "1",
			},
			"70%": {
			  opacity: "1",
			},
			"100%": {
			  transform: "rotate(var(--angle)) translateX(-500px)",
			  opacity: "0",
			},
		  },
		  marquee: {
			from: {
			  transform: "translateX(0)",
			},
			to: {
			  transform: "translateX(calc(-100% - var(--gap)))",
			},
		  },
		  "marquee-vertical": {
			from: {
			  transform: "translateY(0)",
			},
			to: {
			  transform: "translateY(calc(-100% - var(--gap)))",
			},
		  },
		  orbit: {
			"0%": {
			  transform:
				"rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
			},
			"100%": {
			  transform:
				"rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
			},
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		  float: "float 6s ease-in-out infinite",
		  "fade-up": "fade-up 0.5s ease-out",
		  "fade-in": "fade-in 0.3s ease-out",
		  parallax: "parallax 1s ease-out forwards",
		  meteor: "meteor 5s linear infinite",
		  marquee: "marquee var(--duration) infinite linear",
		  "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
		  orbit: "orbit calc(var(--duration)*1s) linear infinite",
		},
		backdropBlur: {
		  xs: "2px",
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  