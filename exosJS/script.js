console.log("Hello script JS dans fichier script.js");

var nomVarTest = "Ce que je souhaite stocker dans ma variable Test";
console.log(nomVarTest);

var x = 12;
var y = 65.4;

console.log (x)
console.log(y)

var z = 13;
console.log(z.toString())

var name = "John";
var nameLength = name.length;

console.log(nameLength); // affichera la longeur de la chaine de caractère soit 4

var myString ="hello John";
var position = myString.indexOf("John"); 
// je recherche la position du mot John dans l'index de la chaine de caractère, qui est un string
console.log(position);// John est en position 6

var myString = "hello John";
var myNewString = myString.replace("John","Tim"); 
// je remplace John par Tim 
console.log(myNewString);

var string1 ="Additioner";
var string2 ="une chaine de caractère STRING";

var newString = string1 + " " + string2;
console.log (newString);

var a = 12;
var b= 5;
var result = a+b;
console.log(result);

var c = 12;
var d = 5 ;
var result2 =c%d ;
console.log(result2);

// attention à l'ordre de déclaration des variables:
var x= 12;
var y=5;
var resultat =x++;
console.log(resultat);
// ici affichera 12 car resultat contient 12 

// si je veux afficher 13 soit x+1
var x=12;
var Y=5;
var resultat=x++;
console.log(x);

// si je veux que récupérer dans ma var resultat 13

var x=12;
var y=5;
var resultat = ++x; // ici on inverse les opérateurs
console.log(resultat);

//raccourcir les opérations 
var x =12;
var y=5;
x-=y;
console.log(x);// affiche 7

var y =12;
var x=5;
x+=y;
console.log(x);// affiche 17

//boolean et comparaison : égale 
var x=5;
var myBoolean=(x===5);

console.log(myBoolean);
//affiche true

// boolean et comparaison : différent 
var x=5;
var myBoolean=(x!==5);

console.log(myBoolean);
// affiche false
 
// strictement égale === vérifira aussi le type de la variable
var x=5;
var myBoolean=(x==="5");// 5 ici en format string ; je demande donc si c'est une chaine de caractere?

console.log(myBoolean);
// affiche false

// vérifier une expression complète avec && (il faut que la totalité de l'expression soit vrai)

var x= 5;
var y= 12;
var myBoolean = (x>3 && y<15);
console.log (myBoolean);// affiche true


// vérifier une expression complète avec ou  :
// attention affiche true meme si la deuxième partie de l'expression est fausse !!!
var x= 5;
var y= 12;
var myBoolean = (x>3 || y==4);
console.log (myBoolean);// affiche true

// vérifier l'inverse :
var x= 5;
var y=12;

console.log (!true);

var x= 5;
var y=12;

console.log (!false);

// STRUCTURE d'une condition 
/*
if (condition)// condition est une boolean :retourne true ou false
{// si condition est vrai alors exécute ce code
    console.log ("éxécute ce code")
}
else // si condition est false 
{
console.log ("alors éxécute ce code là")
}

// si if est pas vrai dans la première condition et que je veux vérifier encore une autre condition en plus :

if (condition1)// condition est une boolean : true ou false
{// si condition est vrai alors exécute ce code
    console.log ("éxécute ce code")
}
else if (condition2)
{
 console.log ("la condition1 n'est pas vrai mais la condition2 l'est");
}
else // si aucunes des conditions est vrai alors faire ce code là
{
console.log ("alors éxécute ce code là");
}

*/
// CONDITION DANS UNE CONDITION :

var speed = 60;

if (speed<=80)
{// condition est une boolean : true ou false
    
    if (speed<80)
    {// vérifie encore si ce code est vrai
        console.log ("tu peux accélérer jusqu'à 80");
    }

   else
    {// si condition est vrai alors exécute ce code
    console.log ("tu roules à la bonne vitesse");
    }
}

else if (speed >80)
{
 console.log ("tu dois ralentir");
}

else // si aucunes des conditions est vrai alors faire ce code là
{
console.log ("tu peux accelerer jusqu'à 80 KM/H");
}

// CONDITION SWITCH CASE :
var favoriteColor = "black";
switch(favoriteColor)
{
    case "red":
    console.log ("Ma couleur préféree est le rouge");
    break;

    case "blue":
    console.log ("Ma couleur préféree est le bleue");
    break;

    default :
    console.log(favoriteColor);
}

// CONDITION SWITCH CASE à la suite:
var favoriteColor = "yellow";
switch(favoriteColor)
{
    case "yellow":// teste deux conditions à la suite
    case "red":
    console.log ("Les couleurs bleu et jaune c'est trop beau!");
    break;

    case "blue":
    console.log ("Le bleu c'est trop beau");
    break;

    default :
    console.log("Je ne connais pas votre couleur");
}

// CONDITION WHILE :

var number =0;
while (number<3)//tant que le nombre est inf à 3 éxécute le code qui suit
{
console.log(number);
number++;
// pour éviter une boucle infinie
}
// affichera le nombre correspondant à chaque tour de boucle tant que la condtion est vrai 
// affiche : 0, 1, 2 puis s'arrete

// BOUCLE FOR 
for (var number =0;number <5; number++)//étape 1: initialisation de ma variable; étape 2:je vérifie ma condition ;étape 3 incrémenattion qui va augmenter de un tant que la condition sera remplie
{
    // code à exécuter
    console.log (number);
    //affiche le nombre si la condition est vrai puis incrémente de un tant que la condition est vrai
}
// FONCTION 
/*
function multiplier(number1, number2)
{
    return number1*number2;

}
var a =  ;
var b = ;

var result = multiplier (a,b);
*/

//1- je déclare ma function
function multiply(number1,number2)
{
    //code à éxécuter 
    return number1*number2;
}
//2- j'éxécute ma function
//Je déclare mes variables a et b et result qui récupère le résultat de ma function
var a = 5;
var b=6;
var result = multiply(a,b);

// je console.log le résultat
console.log(result);

//SCOPE sur les variables globales et locales

//variables locales
function multiply(number1,number2,number3)
{
    var resultMultiply= number1*number2*number3;
    return resultMultiply;
}
//variables globales

var a = 5;
var b=6;
var result = multiply(a,b,a);

// je console.log le résultat en utilsant var result car c'est une variable globale qui peut être utilsée dans tte la page 
// ATTENTION je ne peux pas utilser la variable locale sesultMultiply car c'est une varaible locale
console.log(result);
// affiche 150

// comment transformer une variable locale en variable globale immédiatement dans le corps de ma déclaration ?
// que je peux utilser dans tte ma page 

function multiply(number1,number2,number3)
{
    resultMultiply= number1*number2*number3;// je supprime var et je crée une variable globale
    return resultMultiply;
}

var a = 5;
var b=6;
var result = multiply(a,b,a);

console.log(resultMultiply);
// je peux afficher ma variable globale 

//ARRAYS
//tableau est une variable qui contient des valeurs

var fruits=["banane","fraise","kiwi"];
console.log (fruits.length);
// affiche la taille du tableau soit 3

var fruits=["banane","fraise","kiwi"];
console.log (fruits[0]);
//affiche banane qui correspond à l'index 0

//En javascript le tableau commence à O
var fruits=["banane","fraise","kiwi"];// je déclare ma variable tableau
for (var i=0;i<fruits.length;i++)//i=0,tant que i est inférieur à la longeur de du tableau,i est augmenté de 1
{
    console.log (fruits[i]);
}

// fonction push :ajoute une valeur au tableau
var fruits=["banane","fraise","kiwi"];
fruits.push("orange");//fonction push
console.log(fruits);

// fonction pop :supprime une valeur au tableau
var fruits=["banane","fraise","kiwi"];
fruits.pop();//fonction pop
console.log(fruits);

//fonction slice : prend en argument un index et le dernier index du tableau non inclus
// ICI ce devrait être le 4 (kiwi)non inclus donc ici le 3 (citron)
var fruits = ["pomme","banane","orange","citron","kiwi"];

var agrumes = fruits.slice(2,4);

console.log(agrumes)
// ARRAY dans un ARRAY

var myArray = [ [0,1],[5,7,8],[2,1] ];
console.log (myArray[0][1]);

// OBJET syntaxe de base
/*
var objet = {
    propertyName1:propertyValue1,
    propertyName2:propertyValue2,

    method1 :function()
    {
        // déclaration de la fonction

    }
            };
*/
// déclaration de l'objet 
var dog = {
name: "Betsy",
color : "white",
age: 4

};
//fin de la déclaration
// affiche l'objet
console.log(dog);
//si je souhaite accèder juste à une propriété
console.log(dog.age);

// boucle sur les propriétés de l'objet
var dog = {
    name: "Betsy",
    color : "white",
    age: 4
};

for (var property in dog)
{
    console.log(dog[property]);
    
}
/* je mets entre crochet pour obtenir la liste des propriétés de l'objet 
avec la boucle for qui va boucler autant de fois qu'il y a de propriété*/

// autre façon de créer un objet en utilisant le constructeur de la classe objet 
var dog = new Object();

dog.name= "Betsy";
dog.color ="white";
dog.age= 6;

for (var property in dog)
{
console.log(dog[property]);

}

// méthode d'un objet

var dog = new Object();

dog.name= "Betsy";
dog.color ="white";
dog.age= 6;
dog.aboie = function(){console.log("whouaf whaouf")};// déclaration de la fonction aboie
//maintenant je dois l'éxécuter 
dog.aboie();

//FONCTION CONSTRUCTEUR

var dog = new Object();

dog.name= "choupette";
dog.color ="white";
dog.age= 4;
dog.aboie = function(number)//je definie un nombre 

{
    while(number<0)

    {
        console.log(number.toString()+ " wouaf ");
        number--;// pour éviter que la boucle ne soit infinie
    }
};   
//maintenant je dois l'éxécuter 
dog.aboie(4);

// Création de dog2
var dog2 = new Object();

dog2.name= "chouchou";
dog2.color ="black";
dog2.age= 12;
dog2.aboie = function(number)//je definie un nombre 

{
    while(number<0)

    {
        console.log(number.toString()+ " wouaf ");
        number--;// pour éviter que la boucle ne soit infinie
    }
};   
//maintenant je dois l'éxécuter 
dog.aboie(6);

// FONCTION CONSTRUCTEUR 

function Dog(name, color, age)//fonction constructeur
{
    this.name=name;
    this.color=color;
    this.age=age;

}// j'ai déclaré "mon usine" constructeur de chien
//maintenant je dois créer mon chien (instance de mon constructeur)
var petitCaniche= new Dog("chouchou","black and white",14);
// mon instance recoit 3 arguments en param : name, color et age
console.log(petitCaniche);
//affiche mon objet
//je peux céer plein d'autres instances 
var groPitbull=new Dog("rex","black",2);
console.log(groPitbull);
