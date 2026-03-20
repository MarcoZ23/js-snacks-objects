/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/


const bike = [
    {nome: "bianchi", peso: 7},
    {nome: "pinarello", peso: 8},
    {nome: "scott", peso: 6.5},
    {nome: "tarmac", peso: 7.5},
    {nome: "trek", peso: 8.5}
];

let ligthBike = bike[0]

for (let i = 1; i < bike.length; i++) 

if (ligthBike.peso > bike[i].peso) 
{   ligthBike = bike[i]
}

console.log(ligthBike);

/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


const team = [
{nome: "lazio", puntiFatti: 0, falliSubiti: 0},
{nome: "roma", puntiFatti: 0, falliSubiti: 0},
{nome: "milan", puntiFatti: 0, falliSubiti: 0},
{nome: "inter", puntiFatti: 0, falliSubiti: 0},
{nome: "napoli", puntiFatti: 0, falliSubiti: 0},
] 

for (let i = 0; i < team.length; i++) {
    team[i].puntiFatti = Math.floor(Math.random() * 100); 
    team[i].falliSubiti = Math.floor(Math.random() * 100)
console.log(team[i].puntiFatti, team[i].falliSubiti);
}



