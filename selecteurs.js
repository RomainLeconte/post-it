/**
 * Selecteurs
 */

//cible le contenu HTML le l'élement cible par ID
document.getElementById('').innerHTML;
//cible le contenu text de tous les éléments ciblés par la className
document.getElementsByClassName('').textContent;
//cible tous les liens contenu par les tagName
document.getElementsByTagName('').links;
//cible le premier éléments possédant la class article
document.querySelector('.article');
//cible tous les éléments 'article'
document.querySelectorAll('article');

var paragraphe = document.querySelector('.article');
//cible l'élements parent du premier éléments possédant la classe 'article'
var parentParagraphe = paragraphe.parentNode;
//cible le 4ème enfant de l'élément possédant la classe 'article'
var enfantParagraphe = paragraphe.childNodes[3];
//cible le texte du 4ème enfant de l'élément possédant la classe 'article'
var enfantParagraphe = paragraphe.childNodes[3].nodeValue;
//cible le premier enfant de l'élément possédant la classe 'article'
var enfantParagraphe = paragraphe.firstChild;
//cible le dernier enfant de l'élément possédant la classe 'article'
var enfantParagraphe = paragraphe.lastChild;