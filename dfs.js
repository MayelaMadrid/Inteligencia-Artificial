const getEstados = (estado_actual) => {
    let [x, y] = estado_actual;
    let estado = [[4, y], [x, 3], [0, y], [x, 0]];
    if (x + y >= 4) {
        estado = estado.concat([[4, y - (4 - x)]]);
    }
    else {
        estado = estado.concat([[x + y, 0]]);
    }
    if (x + y >= 3) {
        estado = estado.concat([[x - (3 - y), 3]]);
    }
    else {
        estado = estado.concat([[0, x + y]]);
    }
    return estado;
};
const busquedaProfunda = (estado_inicial, estado_final) => {
    let caminoPosible = [[estado_inicial]];
    while (caminoPosible != []) {
        let arrayVisitados = caminoPosible[0];
        caminoPosible = caminoPosible.slice(1);
        if (arrayVisitados[arrayVisitados.length - 1].toString() === estado_final.toString()) {
            return arrayVisitados;
        }
        let estados = getEstados(arrayVisitados[arrayVisitados.length - 1]);

        for (const e in estados) {

            if (!arrayVisitados.some(item => { return item.toString() === estados[e].toString(); })) {
                arrayVisitados = arrayVisitados.concat([estados[e]]);
            }
            if (e == estados.length - 1) {
                caminoPosible = [caminoPosible.concat(arrayVisitados)];
            }
        }

    } return caminoPosible;
};
console.log(busquedaProfunda([0, 0], [0, 2]));


