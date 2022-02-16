export{}
let First:string;
let Second:string;

function Anagram(First, Second){
    var First_Sorted = First.split('').sort().join('').toLowerCase();
    var Second_Sorted = Second.split('').sort().join('').toLowerCase();
    return(console.log(First_Sorted == Second_Sorted))
}
Anagram("rail safety","fairy tales")
Anagram("Beef", "Chicken")