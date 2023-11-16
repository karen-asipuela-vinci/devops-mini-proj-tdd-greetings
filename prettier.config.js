module.exports = {
  trailingComma: 'es5',
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: ['*.js'], // Appliquez ces configurations aux fichiers avec l'extension js
      options: {
        parser: 'babel' // Utilisez le parser Babel pour les fichiers JavaScript
      }
    }
  ]
};
