
// let filmes = ["Anabelle", "IT", "Exorcismo", "Devil's Death", "Conjuring" , "The Witch"];

// for (let i=0; i<=filmes.length-1; i++){
//     console.log(filmes[i]);
// }

// //FOR OF ou FAROFA *conteúdo
// for(let i of filmes){ //vai fazer a mesma coisa que o priemiro laço, 
//     console.log(i);  //let i vai percorrer todo o array e retornar os conteúdos
// }

// //FOR IN ou FARINHA *indices
// for(let i in filmes){  //vai percorrer e retornar os indices
//     console.log(i);
// }

// function calculadora(a,b){
//     return a+b;
// }
// function media (prova1,prova2,prova3){ //forma antiga de fazer função
//     return (prova1+prova2+prova3)/3;
// }
// console.log(media(8,9,3));

// meedia (a,b,c) => { //nova forma de escrever uma função
//     return (a+b)/c;
// }



let filmes = [ //lista de objetos
    {titulo:"Star Wars", classificação: 14}, //indice 0 da lista têm um objeto e dentro tem uma lista
    {titulo:"Shrek", classificação: 0}, 
    {titulo:"Ninja Assassino", classificação: 18}
];

//Pegar a idade
let idade = prompt("Qual a sua idade?");
for(indice in filmes){ //passa de indice em indice
    if (filmes[indice].classificação <= idade){ // se a classificação for menor que a idade pode dar a mensagem com o titulo do filme do indice atual
        alert("Voce pode ver: " +filmes[indice].titulo);
    }
}