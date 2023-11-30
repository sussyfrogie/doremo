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
            "musique": "bad_guy_eilish.mp3"
        },
        {
            "questions": "Quel est le titre et l'auteur de cette chanson ?",
            "reponse": "Michael Jackson, Beat it",
            "musique": "beat_michael_jackson.mp3"
        },
        {
            "questions": "Avec quel artiste Koba a t il chanté sur cette musique?",
            "reponse": "Gazo",
            "musique": "daddy_chocolat_kobalad.mp3"
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
            "musique": "sky_stars_coldplay.mp3"
        },
        {
            "questions": "De quel film provient cet extrait ?",
            "reponse": "Le magicien d'Oz",
            "musique": "somewhere_magicien_oz_1.mp3"
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
            "musique": "hakuna_roi_lion.mp3"
        },
        {
            "questions": "Qui chante Only God Can Judge Me ?",
            "reponse": "2Pac",
            "musique": "fichier audio"
        },
        {
            "questions": "Qui a composé ce morceau de musique  ?",
            "reponse": "Tchaikovski",
            "musique": "casse_noisette_tchaikovski.mp3"
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
    ];
    if (window.location.href.includes("jeux.html")) {

    

        function decompte() {
            const timer = document.getElementById('timer');
            let i = 300; //temps voulu en S
            let countdownInterval;
        
            function updateTimer() {
              timer.textContent = i + " secondes";
            }
        
            function countdown() {
              if (i > 0) {
                updateTimer();
                i--;
              } else {
                clearInterval(countdownInterval);
                var audio = new Audio('defaite.mp3');
                audio.play();
                const looser = document.getElementById("looser");
                looser.style.display = "flex"
                setTimeout(function() {
                    //window.location.href = 'index.html';
                }, 5000);
              }
            }
        
            return {
              start: function() {
                if (!countdownInterval) {
                  countdownInterval = setInterval(countdown, 1000);
                }
              },
              restart: function() {
                clearInterval(countdownInterval);
                i = 300;
                countdownInterval = setInterval(countdown, 1000);
              }
            };
          }
        
          const countdownInstance = decompte();
        
          document.getElementById('startBtn').addEventListener('click', function() {
            countdownInstance.start();
          });
        
          document.getElementById('startBtn').addEventListener('dblclick', function() {
            countdownInstance.restart();
          });
    
    
    
    const card = document.getElementById('card');
    const question = card.querySelector('h1');
    const reponse = card.querySelector('p');
    const bar = document.getElementById('bar');
    const levels = document.querySelectorAll('.level');
    const btn = document.getElementById('btn');
    var conteur = 3;
    
    function displayQuestion() {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];
        question.textContent = randomQuestion.questions;
        reponse.textContent = randomQuestion.reponse;
        bar.style.width = '${conteur}%';
        if (randomQuestion.musique === "fichier audio") { 
            btn.style.display = "none";
        } else {   
            btn.style.display = "block";
            btn.setAttribute("name", randomQuestion.musique);
        }
        if (btn.style.display === "block") {
            console.log("etape 1")
            btn.addEventListener('click', function() {
                console.log(btn.getAttribute("name"));
                var music = new Audio (btn.getAttribute("name")) ;
                console.log(music);
                console.log(Audio);
                music.play(Audio);
                music.volume = 0.5;
            })
        }
    }
    
    displayQuestion();
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'o') {
            displayQuestion();
            levels[conteur].style.backgroundColor = 'rgb(37,101,237)';
            const music = new Audio("oui.mp3");
            music.play(Audio);
            music.volume = 0.5;
            if (conteur > 0) {
                conteur--;
            } else {
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                const music = new Audio("victoire.mp3");
                music.play(Audio);
                music.volume = 0.5;
            }
        } else if (event.key === 'n') {
            displayQuestion();
            levels.forEach(level => {
            level.style.backgroundColor = 'rgb(119, 119, 119)';
            conteur = 3; 
            const music = new Audio("non.mp3");
            music.play(Audio);
            music.volume = 0.5;
        });
        }
      });
    console.log(btn)
    
    
    //popup
    
    document.getElementById('openPopup').addEventListener('click', function () {
        document.getElementById('popupContainer').style.display = 'flex';
        document.getElementById("card").style.display="none";
      });
      
      document.getElementById('closePopup').addEventListener('click', function () {
        document.getElementById('popupContainer').style.display = 'none';
        document.getElementById("card").style.display="flex";
      });
    
    }
    
    if (window.location.href.includes("index.html")) {

        function startgame() {
            var audio = new Audio('intro.mp3');
            audio.play();
            setTimeout(function() {
                window.location.href = 'jeux.html';
            }, 6000);}
    }
    