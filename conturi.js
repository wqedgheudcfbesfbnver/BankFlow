const conturi = [
    {
        id: 1,
        nume: "Cont curent",
        activ: true,
        tip: "curent"
    },
    {
        id: 2,
        nume: "Cont economii",
        activ: true,
        tip: "economii"
    },
    {
        id: 3,
        nume: "Depozit vacanta",
        activ: false,
        tip: "depozit"
    }
];

const TIPURI = ["curent", "economii", "depozit"];

function listeazaNume(lista) {
    return lista.map((cont) => cont.nume);
}

function numaraActive(lista) {
    return lista.filter((cont) => cont.activ === true).length;
}

function cautaDupaNume(lista, text) {
    const textCautat = text.toLowerCase();

    return lista.filter((cont) =>
        cont.nume.toLowerCase().includes(textCautat)
    );
}

function nextId(lista) {
    return lista.reduce(
        (max, cont) => Math.max(max, cont.id),
        0
    ) + 1;
}

function adaugaCont(lista, nume, tip = "curent") {
    const numeCurat = nume.trim();

    if (numeCurat === "") {
        console.log("Eroare: numele contului nu poate fi gol.");
        return lista;
    }

    if (!TIPURI.includes(tip)) {
        console.log("Eroare: tipul contului este invalid.");
        return lista;
    }

    const contNou = {
        id: nextId(lista),
        nume: numeCurat,
        activ: true,
        tip: tip
    };

    return [...lista, contNou];
}

function comutaActiv(lista, id) {
    return lista.map((cont) =>
        cont.id === id
            ? { ...cont, activ: !cont.activ }
            : cont
    );
}

function stergeCont(lista, id) {
    return lista.filter((cont) => cont.id !== id);
}


// --- TESTE ÎN CONSOLĂ ---

console.log("--- Citire ---");

console.log(
    "Numele conturilor:",
    listeazaNume(conturi).join(", ")
);

console.log(
    "Conturi active:",
    numaraActive(conturi)
);

console.log(
    "Căutare 'cont':",
    listeazaNume(cautaDupaNume(conturi, "cont")).join(", ")
);


console.log("--- Adăugare ---");

let lista = adaugaCont(
    conturi,
    "Cont pentru facultate",
    "curent"
);

console.log(
    "Lista nouă:",
    lista.length,
    "conturi"
);

console.log(
    "Originalul a rămas cu:",
    conturi.length,
    "conturi"
);


console.log("--- Modificare și ștergere ---");

lista = comutaActiv(lista, 1);

console.log(
    "După dezactivarea contului cu id 1, active:",
    numaraActive(lista)
);

lista = stergeCont(lista, 3);

console.log(
    "După ștergerea contului cu id 3:",
    listeazaNume(lista).join(", ")
);


console.log("--- Validare ---");

adaugaCont(lista, " ");

adaugaCont(lista, "Cont test", "premium");