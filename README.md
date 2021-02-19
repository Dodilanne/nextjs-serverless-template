# Modèle de site Web Next.js

Ce projet a été amorcé à l'aide du modèle d'architecture de site Web [Next.js](https://nextjs.org/) en constante évolution [nextjs-serverless-template](https://github.com/Dodilanne/nextjs-serverless-template.git).

## Pour commencer

Premièrement, installez les dépendances du projet:

```bash
yarn install
```

Ensuite, lancez le projet en mode développement:

```bash
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre fureteur pour voir le résultat.

## Structure du projet

### Assets

Toutes les assets (images, vidéos, etc.) se trouvent dans le dossier `/public/assets`.\
Une asset se trouvant sous `/public/assets/common` est utilisée partout sur le site.\
Une asset utilisée sur une page seulement sera placée sous `/public/assets/{pageName}`.\
Pour fins de clarté, on ajoutera au nom des fichiers d'assets leur type:

> Icône d'une flèche vers le haut -> icon_arrow-up.png\
> Image d'un paysage au format -> img_landscape.png

### Components

Le dossier `/components` contient tous les components React qui représentent un élément isolé de l'interface graphique (ex: un bouton, une carte), peu importe où ils sont utilisés dans le projet.

### Layouts

Le dossier `/layouts` contient tous les components React qui sont des _wrappers_ destinés à enrober d'autres components d'autres tags pour modifier l'interface sans nécessairement ajouter des éléments d'interface.\
Voici un exemple de component dit "_layout_":

```javascript
import React from 'react';

interface Props {
  children: JSX.Element; // In general, children will be passed down to a layout component
}

const LayoutComponent = ({ children }) => {
  return <div className="some-class-that-changes-the-ui">{children}</div>;
};

export default LayoutComponent;
```

### Pages

Les components de pages se trouvent dans le dossier `/pages`.\
Ces dernier ne devraient pas contenir de logique complexe ou longues structures d'HTML.\
Ils sont plutôt des réservoirs dans lesquel on insère des [parties de pages](#parts).\
Voici un exemple de page bien structurée:

```javascript
import React from 'react';
import Page from 'layouts/Page';
import MyPageHeader from 'parts/MyPage/MyPageHeader';
import MyPageBody from 'parts/MyPage/MyPageBody';

const MyPage = () => {
  return (
    <Page name="myPage">
      <MyPageHeader />
      <MyPageBody />
    </Page>
  );
};

export default MyPage;
```

### Parts

Les components de type `part` correspondent chacun à une partie d'une page peuvent eux-mêmes contenir plusieurs components de type [layout](#layouts) ou [component](#components).\
Ils sont répertoriés de la manière suivante: `/parts/{pageName}/{pageName}{partName}.tsx`.

### Styles

Les styles de chacun des components React du site se retrouvent dans le dossier `/styles` et sont répertoriés de telle sorte que l'arborescence du projet est répliquée sous `/styles`.\
Par exemple, les styles du component `/parts/Home/HomeBody.tsx` se trouveront dans le fichier `/styles/parts/Home/_HomeBody.scss`.\
\
Tous les fichiers *scss* créés doivent être explicitement importés dans le fichier `main.scss` qui est automatiquement importé à l'entrée de chacune des pages du site.\
\
Par convention, on wrap chaque component dans un div auquel on ajoute la classe css `{kebab-component-name}-container`.\
Par exemple, dans `MyComponent.tsx`:
```javascript
const MyComponent = () => {
  return (
    <div className="my-component-container">
      {/* Some content */}
    </div>
  );
};
```
Et dans `_MyComponent.scss`:
```scss
.my-component-container {
  // Your sass code
}
```

### Base de l'application

Tous les fichiers formant la fondation sur laquelle est bâtie l'application se trouvent dans le dossier `/foundation`:

- `/api`: Contient toutes les fonctions permettant d'effectuer des requêtes au serveur.
- `/config`: Contient tous les fichiers de configuration nécessaires à l'utilisation de certains modules.
- `/contexts`: Contient les [contextes React](https://reactjs.org/docs/context.html#gatsby-focus-wrapper) développés spécialement pour l'application
- `/hooks`: Contient les [hooks React](https://reactjs.org/docs/hooks-custom.html) développés spécialement pour l'application
- `/types`: Contient les fichiers de définition de tous les types TypeScript utilisés au travers de l'application
- `/utils`: Contient les fichiers qui ne corresponde à aucune des catégories mentionnées plus haut (ex: fonction de formattage de données).

## Ressources

- [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Next.js](https://nextjs.org/docs)
- [React](https://reactjs.org/)

## Auteur

- Vincent Audet - vincaudet@gmail.com

