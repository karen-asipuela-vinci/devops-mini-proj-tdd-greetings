module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
    },
    testEnvironment: 'node', // Pour exécuter les tests dans un environnement Node.js
    testMatch: ['**/__tests__/**/*.test.cjs'], // Les fichiers de test doivent correspondre à ce modèle
    collectCoverage: true,
    collectCoverageFrom: ['./src/**'],
    coverageThreshold: {
        "global": {
            "lines": 80
        }
    }
  };
  