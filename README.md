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
Il installe les dépendances puis il lance plusieurs vérifications du code à la suite, test le code et finalement, le build.
Si tout est vérifié, il renvoie 'la pipeline a réussi'.
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
Le 'on' sert de marqueur pour lancer la pipeline a différents endroits du code.
Leur différence se trouve au niveau du lancement : 'on push' se lance lors d'un push alors que 'on pull request' se lance lorsqu'on lance une request.
On conseillerait l'utilisation d'un 'on push' pour faire des vérifications plus frequemment qu'avec un 'on request'. Cela permettra de vérifier le code sur des sections "plus petites" et faciliter la détection d'erreurs.
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
////////////////////
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash

```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
<votre réponse ici>
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
<votre réponse ici>
```