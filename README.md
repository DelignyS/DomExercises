***Partie 1:***

**Question 1:**

Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.

```js 
    let pElements = document.querySelectorAll('p');
    console.log(pElements.length);
```

**Question 2 :**
Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.

```js 
    let element = document.getElementById('coucou');
    console.log(element.textContent);
```
**Question 3 :**
Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
```js
    let aElements = document.querySelectorAll('a');
    console.log(aElements[2].href);
```
**Question 4 :** 
Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
```js
    let elements = document.querySelectorAll('.compte-moi'); //Le point . avant compte-moi indique qu'il s'agit d'une classe. C'est la même       syntaxe que celle utilisée dans les feuilles de style CSS pour sélectionner des éléments par classe.
    console.log(elements.length);
```
**Question 5 :**
Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
```js
    let liElements = document.querySelectorAll('li.compte-moi');
    console.log(liElements.length);
```
**Question 6 :**
Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
```js
    let liolElements = document.querySelectorAll('ol > li.compte-moi');
    console.log(liolElements.length);
```
**Question 7 :**
Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…

La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.
```js
    let hiddenElement = document.querySelector('div ul:nth-of-type(2) li:first-child');
    console.log(hiddenElement.textContent);
```
**En résumé**
querySelector et getElementById sont deux méthodes utilisées pour sélectionner des éléments dans le DOM.

querySelector permet de sélectionner le premier élément qui correspond à un ou plusieurs sélecteurs CSS. Par exemple, document.querySelector('.maClasse') sélectionnera le premier élément avec la classe 'maClasse'.

getElementById permet de sélectionner un élément par son attribut ID. Par exemple, document.getElementById('monId') sélectionnera l'élément avec l'ID 'monId'.

***Partie 2***

**Modification n°1**

Écris une fonction changeTitles() qui va :

1.Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à THP"
2.Pointer vers le sous-titre ("Something short and leading about…") et le changer en "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
Pour cette fonction comme toutes les suivantes : exécute la fonction dans ton code JS en l'appelant en bas avec un changeTitles();. Dès que tu fais une modification sur la fonction, rafraîchis la page HTML dans ton navigateur pour voir si la modification apportée est OK.

```js
      function changeTitles() {
    // Sélectionner le titre en haut de page et le changer
    let mainTitle = document.querySelector('h1');
    mainTitle.textContent = "Ce que j'ai appris à THP";

    // Sélectionner le sous-titre et le changer
      let subTitle = document.querySelector('.lead');
      subTitle.textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux      langages et outils du web n'auront plus de secret pour vous !";
    }

    // Appeler la fonction
    changeTitles();
```

**Modification 2**
Ecris une fonction changeCallToActions() qui va:

1.Changer le texte du bouton "Main call to action" en "OK je veux tester !"
2.Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : "http://www.thehackingproject.org"
3.Changer le texte du bouton "Secondary action" en "Non Merci"
4.Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"

```js
function changeCallToActions() {
  // Sélectionner le bouton "Main call to action" et changer son texte et son URL
  let mainBtn = document.querySelectorAll('.btn')[0]; // On utilise querySelectorAll car il y a plusieurs boutons et [0] pour sélectionner le premier
  mainBtn.textContent = "OK je veux tester !";
  mainBtn.href = "http://www.thehackingproject.org";

  // Sélectionner le bouton "Secondary action" et changer son texte et son URL
  let secondaryBtn = document.querySelectorAll('.btn')[1]; // On utilise querySelectorAll car il y a plusieurs boutons et [1] pour sélectionner le deuxième
  secondaryBtn.textContent = "Non Merci";
  secondaryBtn.href = "https://www.pole-emploi.fr/accueil/";
}

// Appeler la fonction
changeCallToActions();

```
**Modification n°3**

Écris une fonction changeLogoName() qui va modifier le titre "Album" de la navbar (en haut à gauche) de la façon suivante :

1.Change "Album" par "The THP Experience" ;
2.Change la taille du texte pour le passer en 2em.

```js
function changeLogoName() {
    // Sélectionner le titre "Album" de la navbar
    let logoName = document.querySelector('.navbar-brand');
    // Changer le texte
    logoName.textContent = "The THP Experience";
    // Changer la taille du texte
    logoName.style.fontSize = "2em";
}

// Appeler la fonction
changeLogoName();
```
**Modification n°4**
Écris une fonction populateImages() qui va ajouter, dans chacune des 9 cards, une image dont l'URL est contenue dans l'array suivant :

let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
Une petite boucle des familles va être utile ici.

```js
function populateImages() {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/1/formation-ruby-on-rails", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  
  // Sélectionner toutes les cartes
  let cards = document.querySelectorAll('.card');
  
  // Parcourir chaque carte
  for(let i = 0; i < cards.length; i++) {
      // Créer une nouvelle image
      let img = document.createElement('img');
      // Définir l'URL de l'image
      img.src = imagesArray[i];
      // Ajouter l'image à la carte
      cards[i].appendChild(img);
  }
}

// Appeler la fonction
populateImages();

```
**Modification n°5**

Écris une fonction deleteLastCards() qui va supprimer les 3 dernières cards via une boucle. Je donne ci-dessous 2 coups de main sur cette modification : les plus à l'aise peuvent essayer de ne pas les lire.

Coups de main sur cette modif

Attention si ta boucle supprime des éléments d'une liste : cela peut modifier les indices des éléments. Illustration : si tu supprimes le 7ème élément d'une liste de 9, l'élément numéro 8 passe alors au numéro 7 et le numéro 9 passe au numéro 8. Ça peut faire foirer ta boucle 🤭
https://developer.mozilla.org/fr/docs/Web/API/ChildNode/remove 😘 

```js
  function deleteLastCards() {
  // Sélectionner toutes les cartes
  let cards = document.querySelectorAll('.card');
  
  // Supprimer les trois dernières cartes
  for(let i = cards.length - 1; i >= cards.length - 3; i--) {
      cards[i].remove();
  }
}

// Appeler la fonction
deleteLastCards();

```

**Modification n°6**

Écris une fonction changeCardsText() qui va modifier le texte des 3 premières cards et le remplacer avec cela :

->Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
->Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
->Carte JS : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."

Essaye de mettre ça dans une boucle.

```js
function changeCardsText() {
    // Définir les nouveaux textes pour les cartes
    let newTexts = [
        "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
        "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
        "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
    ];
    
    // Sélectionner toutes les cartes
    let cards = document.querySelectorAll('.card');
    
    // Modifier le texte des trois premières cartes
    for(let i = 0; i < 3; i++) {
        let cardText = cards[i].querySelector('.card-text');
        cardText.textContent = newTexts[i];
    }
}

// Appeler la fonction
changeCardsText();
```

**Modification n°7**