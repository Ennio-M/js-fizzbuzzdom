// Creazione lista
const ul = document.createElement("ul");

// Ciclo for per stampare numeri e stringhe
for (let i = 1; i <= 100; i++) {
    const li = document.createElement("li");
    if((i % 3) == 0) {
        if((i % 5) == 0) {
            li.append("fizzbuzz");
        } else {
            li.append("fizz");
        }
    } else if((i % 5) == 0) {
        li.append("buzz");
    } else {
        li.append(i);
    }
    ul.append(li);
}

// Stampa lista in pagina
document.getElementById("app").append(ul);