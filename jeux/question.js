$.getJSON("question.json", function (data) {

    const sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time))
    } 
    
    let content = document.getElementById("content");
    let good = document.getElementById("good");
    let bad = document.getElementById("bad");

    var page = 0;
    var notbad = 0;

    function verif() {
        let radios = document.getElementsByName("q" + page);
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                if (i == data.questions[page].correct) {
                    notbad++;
                    good.style.display = "block";
                    sleep(2000).then(() => {
                        good.style.display = "none";
                    })
                    
                } else {
                    bad.style.display = "block";
                    sleep(2000)
                    .then(() => {
                        bad.style.display = "none";
                    })   
                }
            }
        }
        page++;
        console.log(notbad);
        console.log(page);
        if (page < data.questions.length) {
            display();
        } else {
            content.innerHTML = "<h1>Score: " + notbad + "/" + data.questions.length + "</h1>";
        }
    }

})