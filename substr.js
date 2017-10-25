function confirmEnding(str, target) {  
    return str.substr(-target.length)===target;
}

confirmEnding("Bastian", "n");

//substr
//str.substr(début[, longueur])
/*début
L'indice à partir duquel extraire les caractères. Si la valeur fournie est négative, elle sera traitée comme str.length + début avec str.length la longueur de la chaîne (par exemple, si début vaut -3, il sera traité comme str.length - 3.)

longueur
Le nombre de caractères à extraire. Si ce paramètre vaut undefined, tous les caractères situés après début et allant jusqu'à la fin de la chaîne sont extraits.*/