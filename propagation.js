/**
 * propagation evenements
 */

// par defaut le p puis la div (bouillonement)
/*
<div id="D1">
    <p id='P1'>Phase de bouillonement</p>
</div>
*/
var div = document.getElementById('div');
var p1 = document.querySelector('p');

div.addEventListener('click',MessageDiv);
p1.addEventListener('click',MessageP);

function(){
    console.log('Evenement du div');
}

function(){
    console.log('Evenement du paragraphe');
}


//on modifit l'ordre natif
/*
<body>
    <h1 id='gros_titre'>Les evenements</h1>
    <div id="D1">
        <p id='P1'>Phase de bouillonement</p>
    </div>
    <div id="D2">
        <p id='P2'>Phase de capture</p>
    </div>
</body>
*/
var dv1 = document.getElementById('D1');
var pa1 = document.getElementById('P1');
var dv2 = document.getElementById('D2');
var pa2 = document.getElementById('P2');

//phase de bouillement pour D1 et P1
dv1.addEventListener('click', MessageD1);
p1.addEventListener('click', MessageP1);

function MessageD1(){
    console.log('Evenement du div1');
};
function MessageP1(){
    console.log('Evenement du paragraphe1');
};

//phase de capture pour D2 et P2
dv2.addEventListener('click', MessageD2, true);
p2.addEventListener('click', MessageP2, true);

function MessageD2(){
    console.log('Evenement du div2');
};
function MessageP2(){
    console.log('Evenement du paragraphe2');
};

//on complique la chose :)
/*
    <div id="D1">
        <p id='P1'>Exemple plus<strong>complexe</strong></p>
    </div>
*/

//ordre d'écoute = paragraphe > strong > div > body
var body = document.body;
var dv1 = document.getElementById('D1');
var pa1 = document.getElementById('P1');
var strong = document.querySelector('strong');

pa1.addEventListener('click',capturePara1, true);
strong.addEventListener('click', captureSrong1, true);

function capturePara1(){
    console.log('Evenement du capturePara1');
};
function captureSrong1(){
    console.log('Evenement du captureSrong1');
};

dv1.addEventListener('click', bouillonementDiv1);
body.addEventListener('click', bouillonementBody);

function bouillementDiv1(){
    console.log('Evenement du bouillonementDiv1');
};
function bouillementBody(){
    console.log('Evenement du bouillonementBody');
};
