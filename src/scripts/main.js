AOS.init();

const dataDoEvento = new Date("apr 10, 2024 23:59:59");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diasEmMs) / horasEmMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horasEmMs) / minutosEmMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaAteEvento < 0) {
        clearInterval (contaHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }
}, 1000);


document.addEventListener("DOMContentLoaded", function () {
    const confirmButton = document.querySelector(".button-calcular");
    const dateInput = document.getElementById("dia");
    const spanMessage = document.querySelector(".data_aniversario");


    confirmButton.addEventListener("click", function (event) {
        // Impede o envio do formulário
        event.preventDefault();


        const selectedDate = new Date(dateInput.value);
        const currentDate = new Date();


        // Calcula a diferença em milissegundos
        const timeDifference = selectedDate - currentDate;


        // Converte a diferença para meses
        const monthsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44));

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // const daysDifference = timeDifference / (1000 * 60 * 60 * 24 / (30.44));


        // Verifica se a diferença é inferior a 3 meses
        if (monthsDifference < 3 & days >= 2 ) {
            spanMessage.textContent = `Restam ${days} dias. A data é menor que 3 meses!`;
        } else if (days < 1) {
            spanMessage.textContent = `É necessário que a data tenha mais que 3 meses!`;
        } else {
            spanMessage.textContent = `${monthsDifference} meses até o aniversário. É possível contratar o serviço!`;
        }
    });
}, 1000);