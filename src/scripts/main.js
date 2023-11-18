AOS.init();

const dataDoEvento = new Date("apr 10, 2024 23:59:59");
const timeStampDoEvento = dataDoEvento.getTime();
// const diaAniversario = new Date (document.getElementById("data_aniversario").value);

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;
    // const distanciaAteAniversario = diaAniversario - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diasEmMs) / horasEmMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horasEmMs) / minutosEmMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;
    // document.getElementById('data_aniversario').innerHTML = `${diasAteEvento}d ${horasAteEvento}h`;

    if (distanciaAteEvento < 0) {
        clearInterval (contaHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }

    // if (distanciaAteAniversario >= 90) {
    //     Element.innerHTML = `${diasRestantes}d ${horasRestantes}h`;
    // } else {
    //     Element.innerHTML = "O tempo restante é menor que 3 meses";
    // }
}, 1000);
