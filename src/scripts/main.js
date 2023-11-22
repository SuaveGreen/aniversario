AOS.init();

const dataDoEvento = new Date("apr 11, 2024 00:00:00");
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

        // Converte a diferença para dias
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // Calculo para pegar apenas os dias restantes
        const remainingDays = Math.floor(daysDifference % 30.44);


        // Verifica se a diferença é inferior a 3 meses
        if (monthsDifference < 3 && daysDifference >= 2) {
            spanMessage.textContent = `Restam ${daysDifference} dias. A data é menor que 3 meses!`;
        } else if (daysDifference < 1) {
            spanMessage.textContent = `É necessário que a data tenha mais que 3 meses!`;
        } else {
            spanMessage.textContent = `Restam ${monthsDifference} meses e ${remainingDays} dias até o aniversário. É possível contratar o serviço!`;
        }
    });
}, 1000);
