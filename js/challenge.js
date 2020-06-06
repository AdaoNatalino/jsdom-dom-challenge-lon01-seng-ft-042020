document.addEventListener('DOMContentLoaded', () => {

    let counter = document.getElementById('counter');
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let heart = document.getElementById('heart');
    let pause = document.getElementById('pause');
    let likes = document.querySelector('.likes');
    let div = document.querySelector('#list');
    let commentForm = document.getElementById('comment-form');


    const timeUp = window.setInterval(secondsUp, 1000);

    function secondsUp() {counter.innerText ++};

    plus.addEventListener('click', function () {
        let newCounter = parseInt(counter.innerText) + 1;
        counter.innerText = newCounter;
        return counter;
    }) 

    minus.addEventListener('click', function () {
        let newCounter = parseInt(counter.innerText) - 1;
        counter.innerText = newCounter;
        return counter;
    }) 

    heart.addEventListener('click', function () {
        const list = document.createElement('li');
        list.innerText = `${counter.innerText} has been liked 1 time`;
        likes.append(list);
    })

    pause.addEventListener("click", function(e){
        if (pause.innerText === "pause"){
            pause.innerText = "resume"
            clearInterval(timeUp)
            
            plus.disabled = true;
            minus.disabled = true;
            submit.disabled = true;
        }
        else {
            count = setInterval(function () {
                counter.innerText++; 
            }, 1000);
            pause.innerText = "pause"
    
            plus.disabled = false;
            minus.disabled = false;
            submit.disabled = false;
        }
    });

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let comment = e.target[0].value;
        let list = document.createElement('li');
        list.textContent = comment;
        div.append(list);
        document.getElementById('comment-form').reset();
    })

})