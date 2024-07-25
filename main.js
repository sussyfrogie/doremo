const questions = [
    {
        "questions": "Par combien de personnes est composé le groupe des Beatles?",
        "reponse": "4",
        "musique": "fichier audio"
    },
    {
        "questions": "Par qui est interprété La bohème ?",
        "reponse": "Charles Aznavour",
        "musique": "fichier audio"
    },
    {
        "questions": "Quel rappeur a dit 'Et tout ça c'est le destin'?",
        "reponse": "Ninho",
        "musique": "fichier audio"
    },
    {
        "questions": "En quelle année est sorti le single Crazy in Love de Beyonce?",
        "reponse": "2003",
        "musique": "fichier audio"
    },
    {
        "questions": "Chantez la suite des paroles : 'Hello...'",
        "reponse": "It's me",
        "musique": "fichier audio"
    },
    {
        "questions": "Qui a repris 'Envole-moi' de JJ.Goldman en 2012?",
        "reponse": "TAL et M.pokora",
        "musique": "fichier audio"
    },
    {
        "questions": "Quelle chanson démarre par : 'Je n'ai qu'une philosophie'",
        "reponse": "Ma philosophie, Amel Bent",
        "musique": "fichier audio"
    },
    {
        "questions": "Quelle chanson démarre par : 'Je vous parle d'un temps...'",
        "reponse": "La bohème ",
        "musique": "fichier audio"
    },
    {
        "questions": "Qui est le frère de Maitre Gims?",
        "reponse": "Dadju",
        "musique": "fichier audio"
    },
    {
        "questions": "Chantez la suite des paroles : 'Ne la laisse pas tomber...'",
        "reponse": "'Elle est si fragile, etre une femme libérée : tu sais c'est pas si facile'",
        "musique": "fichier audio"
    },
    {
        "questions": "De quel groupe est parti Black M?",
        "reponse": "Sexion d'assaut",
        "musique": "fichier audio"
    },
    {
        "questions": "Qui a gagné l'eurovision 2023?",
        "reponse": "Loreen, Suède",
        "musique": "fichier audio"
    },
    {
        "questions": "De qui est la chanson Mistral Gagnant ?",
        "reponse": "Renaud",
        "musique": "fichier audio"
    },
    {
        "questions": "De quel origine est Bob Marley?",
        "reponse": "Jamaicain",
        "musique": "fichier audio"
    },
    {
        "questions": "Qui a repris la Marseillaise en version reggae ?",
        "reponse": "Serge Gainsbourg",
        "musique": "fichier audio"
    },
    {
        "questions": "Qui a composé la Sonate au Clair de lune ?",
        "reponse": "Beethoven",
        "musique": "fichier audio"
    },
    {
        "questions": "Quel est le titre et l'auteur de cette chanson ?",
        "reponse": "Bad Guy de Billie Eilish",
        "musique": "sons/bad_guy_eilish.mp3"
    },
    {
        "questions": "Quel est le titre et l'auteur de cette chanson ?",
        "reponse": "Michael Jackson, Beat it",
        "musique": "sons/beat_michael_jackson.mp3"
    },
    {
        "questions": "Avec quel artiste Koba a t il chanté sur cette musique?",
        "reponse": "Gazo",
        "musique": "sons/daddy_chocolat_kobalad.mp3"
    },
    {
        "questions": "Qui est le rappeur le plus ecouté de france?",
        "reponse": "Jul",
        "musique": "fichier audio"
    },
    {
        "questions": "Combien de temps - environs - dure la chanson Bohemian Rhapsody de Queen ?",
        "reponse": "six minutes",
        "musique": "fichier audio"
    },
    {
        "questions": "Par qui est interprété La vie en rose ?",
        "reponse": "Edith Piaf",
        "musique": "fichier audio"
    },
    {
        "questions": "A quelle famille d'instruments appartient le piano ?",
        "reponse": "la famille des instruments à cordes",
        "musique": "fichier audio"
    },
    {
        "questions": "Quel est le titre et l'auteur de cette chanson ?",
        "reponse": "a sky full of stars, coldplay",
        "musique": "sons/sky_stars_coldplay.mp3"
    },
    {
        "questions": "De quel film provient cet extrait ?",
        "reponse": "Le magicien d'Oz",
        "musique": "sons/somewhere_magicien_oz_1.mp3"
    },
    {
        "questions": "Quelle chanson démarre par : 'Tu ne vis que pour les caméras'",
        "reponse": "Gisèle, Luidji",
        "musique": "fichier audio"
    },
    {
        "questions": "Quelle chanteuse n'a pas gagné The Voice mais a eu un succès fulgurant après?",
        "reponse": "Louane",
        "musique": "fichier audio"
    },
    {
        "questions": "Dans quel groupe David Gilmour et Roger Watters ont fait partie ?",
        "reponse": "Pink Foyd",
        "musique": "fichier audio"
    },
    {
        "questions": "De quel film provient cet extrait ?",
        "reponse": "Le roi lion",
        "musique": "sons/hakuna_roi_lion.mp3"
    },
    {
        "questions": "Qui chante Only God Can Judge Me ?",
        "reponse": "2Pac",
        "musique": "fichier audio"
    },
    {
        "questions": "Qui a composé ce morceau de musique  ?",
        "reponse": "Tchaikovski",
        "musique": "sons/casse_noisette_tchaikovski.mp3"
    },
    {
        "questions": "En quelle année s'est déroulé la premiere edition du festival de Woodstock ?",
        "reponse": "1969",
        "musique": "fichier audio"
    },
    {
        "questions": "Chantez la suite des paroles : 'Faut pas, non Qu'on s'attache'",
        "reponse": " Et qu'on s'emprisonne ",
        "musique": "fichier audio"
    },
    {
        "questions": " Chantez la suite des paroles : 'J'n'ai pas la science infuse ni'",
        "reponse": "Le savoir faire de Bocuse, Soulman ",
        "musique": "fichier audio"
    },
    {
        "questions": "Quel chanteur français a découvert un cancer récemment ?",
        "reponse": " Florent Pagny ",
        "musique": "fichier audio"
    },
    {
        "questions": "De quel groupe faisait partie Beyonce?",
        "reponse": "Destiny child",
        "musique": "fichier audio"
    },
    {
        "questions": "Quels rappeurs ont tourné un clip en haut de la Tour Eiffel?",
        "reponse": "PNL",
        "musique": "fichier audio"
    },
    {
        "questions": "Qui chante la chanson officielle du film 50 nuances de Grey?",
        "reponse": "The Weeknd",
        "musique": "fichier audio"
    },
    {
        "questions": "Chantez la suite des paroles : 'Je m'appelle Emilie jolie, Je m'appelle Emilie Jolie et'",
        "reponse": "Je voudrais partir avec vous, tout au bout du ciel, sur vos ailes",
        "musique": "fichier audio"
    },
    {
        "questions": "En quelle année est sorti le single Hotline Bling de Drake?",
        "reponse": "2015",
        "musique": "fichier audio"
    },
    {
        "questions": "Quelle chanson démarre par : 'Elle sort de son lit, tellement sur d'elle'",
        "reponse": "'La seine, la seine, la seine'",
        "musique": "fichier audio"
    },
    {
        "questions": "Quel rappeur français a été condamné pour meurtre?",
        "reponse": "MHD",
        "musique": "fichier audio"
    },
    {
        "questions": "Quel effet musical est très tendances sur TikTok ?",
        "reponse": "Le speed up",
        "musique": "fichier audio"
    },
    {
        "questions": "Comment s'appelle l'objet qui permet d'écouter des vinyles?",
        "reponse": "Le tourne disque",
        "musique": "fichier audio"
    },
    {
        "questions": "Quelle princesse Disney est 'Libéré, Délivré'",
        "reponse": "Elsa, La reine des neiges",
        "musique": "fichier audio"
    },
    {
        "questions": "Qui chante All i want for Christmas is you?",
        "reponse": "Mariah Carey",
        "musique": "fichier audio"
    },
    {
        "questions": "Quel chanson commence par : 'j'ai r'gardé dans l'coeur des filles'?",
        "reponse": "Le coeur des filles, A2H",
        "musique": "fichier audio"
    },
    {
        "questions": "Citez une chanson de Lana Del Ray.",
        "reponse": "Summertimes, VideosGames, SayYes, Radio, BornToDie",
        "musique": "fichier audio"
    },
    {
        "questions": "qui a chanté la fille du coupeur de join ?",
        "reponse": "Hubert-Félix Thiéfaine",
        "musique": "fichier audio"
    },
    {
        "questions": "Quelle rappeuse française c'est convertie à l'Islam?",
        "reponse": "Diams",
        "musique": "fichier audio"
    },
    {
        "questions": "chanté le refrain de live is life opus.",
        "reponse": "Live is life nanabada eu life",
        "musique": "fichier audio"
    },
    {
        "questions": "Quel est le titre et l'auteur de cette chanson ?",
        "reponse": "Talking to the Moon, Bruno Mars",
        "musique": "sons/bruno.mp3"
    },
    {
        "questions": "Quel est le titre et l'auteur de cette chanson ?",
        "reponse": "Tourner dans le vide, Indila",
        "musique": "sons/indila.mp3"
    },
    {
        "questions": "Quel est le titre et l'auteur de cette chanson ?",
        "reponse": "We will rock you, Queen",
        "musique": "sons/queen.mp3"
    },
    {
        "questions": "Quel est le titre et l'auteur de cette chanson ?",
        "reponse": "La chanson des restos, les enfoirés",
        "musique": "sons/enfoires.mp3"
    },
    {
        "questions": "Quel est le titre et l'auteur de cette chanson ?",
        "reponse": "Avant la douane, Jul",
        "musique": "sons/jul.mp3"
    },
    {
        "questions": "Quel est le titre de cette chanson ?",
        "reponse": "legend never die",
        "musique": "sons/lol.mp3"
    },

];
if (window.location.href.includes("jeux.html")) {

    

    function decompte() {
        const timer = document.getElementById('timer');
        let i = 300; //temps voulu en S
        let countdownInterval;

        function updateTimer() {
            const minutes = Math.floor(i / 60);
            const remainingSeconds = i % 60;
            timer.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
        }

        function countdown() {
            if (i > 0) {
                updateTimer();
                i--;
            } else {
                clearInterval(countdownInterval);
                var audio = new Audio('sons/defaite.mp3');
                audio.play();
                const looser = document.getElementById("looser");
                looser.style.display = "flex"
                setTimeout(function () {
                    //window.location.href = 'index.html';
                }, 5000);
            }
        }

        return {
            start: function () {
                if (!countdownInterval) {
                    countdownInterval = setInterval(countdown, 1000);
                }
            },
            restart: function () {
                clearInterval(countdownInterval);
                i = 300;
                countdownInterval = setInterval(countdown, 1000);
            }
        };
    }

    const countdownInstance = decompte();
    countdownInstance.start();



    const card = document.getElementById('box-card');
    const question = card.querySelector('h1');
    const reponse = card.querySelector('p');
    const bar = document.getElementById('bar');
    const level = document.querySelector('.level');
    const btnFaux = document.querySelector('.faux');
    const btnVrai = document.querySelector('.vrai');
    const btnRestart = document.querySelector('.restart');
    const btn = document.getElementById('btn');
    var conteur = 0;
    var musicQuestion;

    function displayQuestion() {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];
        question.textContent = randomQuestion.questions;
        reponse.textContent = randomQuestion.reponse;
        bar.style.width = '${conteur}%';
        if (randomQuestion.musique === "fichier audio") {
            btn.style.display = "none";
        } else {
            btn.style.display = "none";
            btn.setAttribute("name", randomQuestion.musique);
            musicQuestion = new Audio(btn.getAttribute("name"));
            musicQuestion.play(Audio);
            musicQuestion.volume = 0.5;
        }
    }

    displayQuestion();

    btnVrai.addEventListener('click', function () {
        if (musicQuestion != null) {
            musicQuestion.pause();
        }
        displayQuestion();
        const music = new Audio("sons/oui.mp3");
        music.play(Audio);
        music.volume = 0.5;
        conteur++;
        countdownInstance.restart();
        if (conteur == 4) {
            const win = document.getElementById("win");
            win.style.display = "flex"
            const music = new Audio("sons/victoire.mp3");
            music.play(Audio);
            music.volume = 0.5;
        } 
         //cobaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        level.style.height = `${conteur * 25}%`;
        if (conteur != 0 && conteur != 4) {
            level.style.borderTop = '1.5px solid #000';
        } else {
            level.style.borderTop = 'none';
        }

    })

    btnFaux.addEventListener('click', function() {
        if (musicQuestion != null) {
            musicQuestion.pause();
        }
        conteur = 0;
        displayQuestion();
        const music = new Audio("sons/non.mp3");
        music.play(Audio);
        music.volume = 0.5;
        level.style.height = `${conteur * 25}%`;
        countdownInstance.restart();
        if (conteur != 0 && conteur != 4) {
            level.style.borderTop = '1.5px solid #000';
        } else {
            level.style.borderTop = 'none';
        }
    })

    btnRestart.addEventListener('click', function(){
        conteur = 0;
        level.style.height = `0%`;
        countdownInstance.restart();
        if (conteur != 0 && conteur != 4) {
            level.style.borderTop = '1.5px solid #000';
        } else {
            level.style.borderTop = 'none';
        }
    });

    //popup

    document.getElementById('openPopup').addEventListener('click', function () {
        let popup = document.getElementById('popupContainer');

        gsap.to(popup, {
            opacity: 1, duration: 1, onStart: () => {
                popup.style.display = 'flex';
                document.getElementById("box-card").style.display = "none";
            }
        });
    });

    document.getElementById('closePopup').addEventListener('click', function () {

        let popup = document.getElementById('popupContainer');

        gsap.to(popup, {
            opacity: 0, duration: 1, onComplete: () => {
                popup.style.display = 'none';
                document.getElementById("box-card").style.display = "flex";
            }
        });

    });

}



    function startgame() {
        var audio = new Audio('sons/intro.mp3');
        audio.play();
        setTimeout(function () {
            window.location.href = 'jeux.html';
        }, 6000);
    }

