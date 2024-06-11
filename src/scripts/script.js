AOS.init();

const dataEvento = new Date("Dec 12, 2024 19:00:00");
const timeStamp = dataEvento.getTime();

const contaHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const ateEvento = timeStamp - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(ateEvento / (diaEmMs));
    const horasAteEvento = Math.floor((ateEvento % (diaEmMs)) / (horaEmMs));
    const minutosAteEvento = Math.floor((ateEvento % horaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((ateEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (ateEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Se atrasou irmão(ã)';
    }
}, 1000);