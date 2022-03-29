// Creazione lista
const ul = document.createElement("ul");
ul.setAttribute("class", "p-0 fizzbuzzlist")
// Creazione titolo
const h1 = document.createElement("h1");
document.getElementById("app").prepend(h1);
h1.innerHTML = "FizzBuzzDOM";
h1.setAttribute("class", "text-white my-4");

// Ciclo for per stampare numeri e stringhe
for (let i = 1; i <= 100; i++) {
    const li = document.createElement("li");
    if((i % 3) == 0) {
        if((i % 5) == 0) {
            li.append("fizzbuzz");
            li.setAttribute("class", "fizzbuzz-class");
        } else {
            li.append("fizz");
            li.setAttribute("class", "fizz-class");
        }
    } else if((i % 5) == 0) {
        li.append("buzz");
        li.setAttribute("class", "buzz-class");
    } else {
        li.append(i);
        li.setAttribute("class", "normal-class");
    }
    ul.append(li);
}

// Stampa lista in pagina
document.getElementById("app").append(ul);