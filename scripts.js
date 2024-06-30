document.addEventListener('DOMContentLoaded', () => {
    const messageLine1 = "Untuk kamu yang sedang berulang tahun";
    const messageLine2 = "dari kami yang engkau rangkul untuk mengikuti mu";
    const messageElement1 = document.getElementById('message-line1');
    const messageElement2 = document.getElementById('message-line2');
    const playAudioButton = document.getElementById('play-audio-button');
    const birthdayAudio = document.getElementById('birthday-audio');
    const loadingIndicator = document.getElementById('loading-indicator');
    const surpriseContainer = document.getElementById('surprise-container');
    const surpriseVideo = document.getElementById('surprise-video');
    const surpriseLine1 = document.getElementById('surprise-line1');
    const surpriseLine2 = document.getElementById('surprise-line2');
    const popUpCharacter = document.getElementById('pop-up-character');

    let i = 0;
    function typeWriter1() {
        if (i < messageLine1.length) {
            messageElement1.textContent += messageLine1.charAt(i);
            i++;
            setTimeout(typeWriter1, 100);
        } else {
            messageElement1.classList.add('typing-done');
        }
    }
    typeWriter1();

    let j = 0;
    function typeWriter2() {
        if (j < messageLine2.length) {
            messageElement2.textContent += messageLine2.charAt(j);
            j++;
            setTimeout(typeWriter2, 100);
        } else {
            messageElement2.classList.add('typing-done');
        }
    }
    setTimeout(typeWriter2, 5000);

    playAudioButton.addEventListener('click', () => {
        birthdayAudio.play();
        playAudioButton.style.display = 'none';
        loadingIndicator.style.display = 'block';
        popUpCharacter.style.display = 'block';
    });

    birthdayAudio.addEventListener('ended', () => {
        loadingIndicator.style.display = 'none';
        document.getElementById('message-container').style.display = 'none';
        surpriseContainer.style.display = 'block';
        setTimeout(() => {
            surpriseVideo.classList.add('show');
            typeWriterSurprise1();
        }, 1000);
        popUpCharacter.style.display = 'none';
    });

    let k = 0;
    function typeWriterSurprise1() {
        if (k < "Tidak sempurna sebuah ulang tahun, tanpa adanya hadiah dan perayaan.".length) {
            surpriseLine1.textContent += "Tidak sempurna sebuah ulang tahun, tanpa adanya hadiah dan perayaan.".charAt(k);
            k++;
            setTimeout(typeWriterSurprise1, 100);
        } else {
            surpriseLine1.classList.add('typing-done');
            setTimeout(typeWriterSurprise2, 1000);
        }
    }

    let l = 0;
    function typeWriterSurprise2() {
        if (l < "Maka izinkan kami berikan semua itu untukmu.".length) {
            surpriseLine2.textContent += "Maka izinkan kami berikan semua itu untukmu.".charAt(l);
            l++;
            setTimeout(typeWriterSurprise2, 100);
        } else {
            surpriseLine2.classList.add('typing-done');
        }
    }

    function movePopUpCharacter() {
        const randomX = Math.random() * 90;
        popUpCharacter.style.left = `${randomX}vw`;
    }

    setInterval(movePopUpCharacter, 2000);
});
