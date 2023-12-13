# Devops-group15

## Description

Placeholder project using material ui as styling library.

### Prerequisites

-   [Node JS / NPM](https://nodejs.org/en/)
-   [Yarn (optional)](https://yarnpkg.com/)
-   [Material](https://material-components.github.io/material-components-web-catalog/#/)

### Installing

Install dependencies

```
npm i
```

or

```
yarn
```

## Getting Started

Run the app

```
npm start
```

or

```
yarn start
```

## Contributors

Contributors names and contact info

Groupe 15:
Bui Tuan Bao,
De Jamblinne Gilles,
Asipuela Karen,

-   Dls

## Questions

- Décrivez brièvement ce que fait votre fichier YML.
```bash
Il installe les dépendances, puis il lance plusieurs vérifications du code à la suite, formate le code pour le rendre conforme aux normes et le plus lisible possible, teste le code, et enfin, effectue le build.
Si tout est vérifié, il renvoie 'la pipeline a réussi'.
```

- En particulier : à quoi sert le “on” dans votre fichier YML ? Quelle est la différence entre “on push” et “on pull request” . Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
Le 'on' sert de marqueur pour lancer la pipeline à différents endroits du code.
Leur différence se trouve au niveau du déclenchement : 'on push' se lance lors d'un push, tandis que 'on pull request' se lance lorsqu'on soumet une demande de fusion.
On conseillerait l'utilisation d'un 'on push' pour effectuer des vérifications plus fréquemment qu'avec un 'on pull request'. Cela permettra de vérifier le code sur des sections "plus petites" et facilitera la détection d'erreurs.
```

- Quelle est la différence entre run et run_on ? Expliquez par rapport à votre pipeline.
```bash
Le 'run' est utilisé pour lancer des scripts et des commandes shell, comme par exemple 'npm i', Alors que le run_on est utilisé pour lancer le pipeline au tout début et définir à quel moment la pipeline se lance.
```

- Quelle est la différence entre “use” et “run”? Expliquez par rapport à votre pipeline.
```bash
La fonction 'use' permet de reprendre une fonction déjà créée par quelqu'un d'autre et reprise dans un de ses repositories. 'Run' exécute une commande shell ou un script directement dans L'intégration continue (workflow). 
Ici, on utilise 'uses' pour récupérer les fichiers du répertoire action/checkout, et 'run' est utilisé pour exécuter nos lignes de code et nos scripts dans le contexte de cette pipeline.
```

- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline.
```bash
Non, car chaque étape est nécessaire pour pouvoir lancer la suivante. Dans le meilleur des scénarios. les dépendances doivent être installées avant de vérifier et formater le code. Le code doit être testé avant d'être buildé. 
Cependant, dans certains cas, certaines étapes peuvent être parallélisées, comme entre eslint et prettier.
```

- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ? Quelles questions devriez-vous vous poser ?
```bash
Tout d'abord, il faut savoir s'il s'agit d'une dépendance ou si le programme est tiré d'un autre projet (GitHub).
Si on le tire d'un autre projet, il faut utiliser 'uses' pour récupérer les informations et ensuite 'run'. 
Si c'est une instance, il faudra le configurer, puis créer un script dans le package.json pour pouvoir l'exécuter avec une commande dans le fichier YAML.
```