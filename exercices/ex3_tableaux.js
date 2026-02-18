// Tableau des notes
let notes = [12, 8, 15, 10, 7];

// Calcul de la moyenne
let somme = 0;
for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
}
let moyenne = somme / notes.length;

//  Meilleure note
let meilleureNote = notes[0];

for (let i = 1; i < notes.length; i++) {
    if (notes[i] > meilleureNote) {
        meilleureNote = notes[i];
    }
}

console.log("Meilleure note :", meilleureNote);


// Nombre de notes ≥ 10
let nombresup10 = 0;
for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        nombresup10++;
    }
}

// Affichage du résumé
console.log("Résumé des notes :");
console.log("notes:",notes)
console.log("Moyenne :", moyenne);
console.log("Meilleure note :", meilleureNote);
console.log("Nombre de notes ≥ 10 :", nbSup10);