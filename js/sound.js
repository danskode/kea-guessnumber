const out = (str) => { console.log(str) };
//if you have another AudioContext class use that one, as some browsers have a limit
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
console.log(audioCtx);

//duration of the tone in milliseconds. Default is 500
//frequency of the tone in hertz. default is 440
//volume of the tone. Default is 1, off is 0.
//type of tone. Possible values are sine, square, sawtooth, triangle, and custom. Default is sine.
//callback to use on end of tone
function beep(duration, frequency, volume, type, callback) {
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (volume){gainNode.gain.value = volume;}
    if (frequency){oscillator.frequency.value = frequency;}
    if (type){oscillator.type = type;}
    if (callback){oscillator.onended = callback;}

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + ((duration || 500) / 1000));
};

const pbBeep = document.querySelector(".pbBeep");
out(pbBeep);
const inpFreq = document.querySelector(".inpFreq")

function doBeep() {
    freq = inpFreq.value;
    beep(1500, freq, 1, 'sine',  )
}

function playTune(freq) {
    out("Playing beep freq=" + freq)
    beep(1500, freq, 1, 'sine',  )
}

const beepArr = [100, 200, 300, 10000, 400]

function playJingle() {
    beepArr.forEach(playTune)
}

// pbBeep.addEventListener('click', doBeep)
const pbJingle = document.querySelector(".pbJingle");
out(pbJingle);
//pbJingle.addEventListener('click', playJingle)

// Export the functions
export { beep, doBeep, playTune, playJingle };