var newBG=body.style.backgroundColor="blue";

function palindrome(){
    var mot =document.getElementById("input").value;
    //var divResultat = document.getElementById("resultat");
    
    var indexMin=0;                     // index de la première lettre du mot
    var indexMax= mot.length; //- 1;       // index de la dernière lettre du mot
    var isPalindrome = true;            // le boolean est déclaré ici pour postuler que le mot est un palindrome, qui sera prouvé ou non dans la boucle

//    for (indexMin=0; indexMin < indexMax; indexMin++){
//        var charactereGauche = mot[indexMin];
//        var charactereDroite = mot[indexMax];
//        if (charactereGauche === charactereDroite){
//            indexMax--;
//        }else{
//            isPalindrome = false;
//            break;
//        }
//    }
    
    while(isPalindrome && (indexMin<indexMax)){          // lorsque nous avons un boolean qui peut etre utilise comme condition de sortie, il faut privilegier un boolean
        var charactereGauche = mot[indexMin];
        var charactereDroite = mot[indexMax];
        if (charactereGauche === charactereDroite){
            
            indexMin++;
            indexMax--;
        
        }else{
            isPalindrome = false;
        }
    }
    
    var messageDeRetour = mot + " ";
    
    if (isPalindrome){
        messageDeRetour += "est un palindrome";
    }else{
        messageDeRetour += "n'est pas un palindrome";
    }
    console.log(messageDeRetour);
   // resultat.innerHTML = messageDeRetour;


var div = document.getElementById("resultat");
var resultatDeLExo = messageDeRetour;
var texte = document.createTextNode(resultatDeLExo);
div.appendChild(texte);


}