const allStars = document.querySelectorAll('.star')
let currentRating = document.querySelector('.currentRating')

Array.from(allStars).forEach((star, i) => {
    star.onclick = function(){
        /*lets you know which star you are on right now and makes every star clickable*/
        let current_star_level = i + 1;
        console.log(current_star_level)
        currentRating.innerText = `${current_star_level} out of 5`
        /**This means that its going to loop through everystar again but this part of the code is going to let you be able to click from 4 stars down to 1, without this you can only log the star level */
        allStars.forEach((star, j) => {
            if(current_star_level >= j + 1){
                star.innerHTML = '&#9733';
            }else{
                star.innerHTML = '&#9734'
            }
        })
    }
});
console.log(allStars);