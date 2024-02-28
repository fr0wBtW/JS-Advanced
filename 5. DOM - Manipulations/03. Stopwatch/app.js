function stopwatch() {
    let seconds = 0;
    let minutes = 0;
    let intervalId;

    const timeDiv = document.getElementById("time");
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");

    function formatOutput(val) {
        let text = val.toString();
        if (val < 10) { text = '0' + text; }
        return text;
    }

    function setTimeDiv(minutes, seconds) {
        timeDiv.innerText = `${formatOutput(minutes)}:${formatOutput(seconds)}`;
    }
    function startBtnHandler(e) {
        minutes = 0;
        seconds = 0;
        setTimeDiv(minutes, seconds);
        startBtn.setAttribute('disabled', true);
        stopBtn.removeAttribute('disabled'); 

        intervalId = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            //   let minutesText = minutes.toString();
            //    let secondsText = seconds.toString();
            //   if(minutes < 10) { minutesText = '0' + minutesText;}
            //   if(seconds < 10) { secondsText = '0' + secondsText;}
            //  timeDiv.innerText = `${formatOutput(minutes)}:${formatOutput(secondsText)}`;

            setTimeDiv(minutes, seconds);
        }, 1000);
    }

    function stopBtnHandler(e) {
        stopBtn.setAttribute('disabled', true);
        startBtn.removeAttribute('disabled');
        clearInterval(intervalId);
    }

    startBtn.addEventListener('click', startBtnHandler);
    stopBtn.addEventListener('click', stopBtnHandler);
}