function changeTitles() {
  // Sélectionner le titre en haut de page et le changer
  let mainTitle = document.querySelector('h1');
  mainTitle.textContent = "Ce que j'ai appris à THP";

  // Sélectionner le sous-titre et le changer
  let subTitle = document.querySelector('.lead');
  subTitle.textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

// Appeler la fonction
changeTitles();

//__________________________________________________________________________________________________________________//

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

//__________________________________________________________________________________________________________________//

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

//__________________________________________________________________________________________________________________//

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

//__________________________________________________________________________________________________________________//

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

//__________________________________________________________________________________________________________________//

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

//__________________________________________________________________________________________________________________//