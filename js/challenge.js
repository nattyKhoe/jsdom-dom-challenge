window.onload = function() {
    // As a user, I should see the timer increment every second once the page has loaded.
    let counterDisplay = document.querySelector('#counter');

    function incrementCount (){
       let count = counterDisplay.innerText;
       counterDisplay.innerText = ++count;
    };

    function decrementCount() {
        let count = counterDisplay.innerText;
        counterDisplay.innerText = --count;
    };

    let timer = setInterval(incrementCount,1000);

    // As a user, I can manually increment and decrement the counter using the plus and minus buttons.
    let minusBtn = document.querySelector('#minus');
    let plusBtn = document.querySelector('#plus');

    plusBtn.addEventListener ('click', incrementCount);

    minusBtn.addEventListener ('click', decrementCount);
    

    // As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
    let heartBtn = document.querySelector('#heart');
    let likeList = {}; //storing the number and likes
    let likes = document.querySelector('.likes');

    function like (){
        if (likeList[counterDisplay.innerText]){
            likeList[counterDisplay.innerText] += 1;
            const li = document.querySelector(`[data-no-prop="${counterDisplay.innerText}"]`);
            li.innerText = `Number ${counterDisplay.innerText} has been liked ${likeList[counterDisplay.innerText]} times.`

        } else {
            likeList[counterDisplay.innerText] = 1;
            const li = document.createElement('li');
            li.dataset.noProp = counterDisplay.innerText;
            li.innerText = `Number ${counterDisplay.innerText} has been liked 1 time.`;
            likes.appendChild(li);
        }
    }
    heartBtn.addEventListener('click',like);


    // As a user, I can pause the counter, which should
    // pause the counter
    // disable all buttons except the pause button
    // the pause button should then show the text "resume."
    
    let pauseBtn = document.querySelector('#pause');
    let pauseStat = false;

    pauseBtn.addEventListener('click', function(){
        if (pauseStat) {
            plusBtn.disabled = false;
            minusBtn.disabled = false;
            heartBtn.disabled = false;
            submitBtn.disabled = false;
            
            timer = setInterval(incrementCount,1000);
            pauseBtn.innerText = 'pause';
            pauseStat = false;
        } else {
            plusBtn.disabled = true;
            minusBtn.disabled = true;
            heartBtn.disabled = true;
            submitBtn.disabled = true;

            clearInterval(timer);
            pauseBtn.innerText = 'resume';
            pauseStat = true;
        }
    });

    //Submit Form
    let form = document.querySelector('#comment-form');
    let input = document.querySelector('#comment-input');
    let list = document.querySelector('#list');
    let submitBtn = document.querySelector('#submit');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const comment = document.createElement ('h3');
        comment.innerText = input.value;

        list.appendChild(comment);
        form.reset(); //reset the form

    })
}