module.exports = {
  plugins: {
    // Use the PostCSS adapter package for Tailwind (recommended for Parcel)
    "@tailwindcss/postcss": {},
    // Parcel already provides vendor prefixing; avoid autoprefixer here to improve performance
  },
};
