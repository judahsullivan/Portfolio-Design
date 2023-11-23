function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      borderColor: {
        theme: {
          base: withOpacity('--theme-base'),
          inverted: withOpacity('--theme-base-inverted'),
          accent: withOpacity('--theme-accent'),
          muted: withOpacity('--theme-base-muted'),
          'accent-muted': withOpacity('--theme-accent-muted')
        }
      },
      textColor: {
        theme: {
          base: withOpacity('--theme-base'),
          accent: withOpacity('--theme-accent'),
          inverted: withOpacity('--theme-base-inverted'),
          muted: withOpacity('--theme-base-muted'),
          'muted-inverted': withOpacity('--theme-base-muted-inverted'),
          'accent-muted': withOpacity('--theme-accent-muted')
        }
      },
      backgroundColor: {
        theme: {
          base: withOpacity('--theme-bg'),
          inverted: withOpacity('--theme-bg-inverted'),
          accent: withOpacity('--theme-accent'),
          muted: withOpacity('--theme-bg-muted'),
          'accent-muted': withOpacity('--theme-accent-muted')
        }
      },
      fontFamily: {
        grotesque: ['Basement-Grotesque'],
        basement: ['Grotesque'],
        aileron: ['aileron', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
