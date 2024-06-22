// Image Slider
const slides = document.querySelectorAll(".slide");
var lenOfSlides = slides.length
var counter = 0;
slides.forEach(
    (slide, idx) => {
        slide.style.left = `${idx * 100}%`;
    }
)
// go to the next image
const goNext = () => {
    if(counter >= lenOfSlides - 1){
        counter = 0;
    }
    else{
        counter++;
    }
    slideImage();
}
// go to the previous image
const goPrev = () => {
    if(counter <= 0){
        counter = lenOfSlides - 1;
    }
    else{
        counter--;
    }
    slideImage();
}
// logic to slide image
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`;
        }
    )
}
// logic to search game from search bar
const games = [
    {
        id: 1,
        ref: './Tic-Tac-Toe/tic-tac-toe.html',
        image: './Tic-Tac-Toe/img/tic-tac-toe-logo.png',
        title: 'Tic Tac Toe',
    },
    {
        id: 2,
        ref: 'Rock-Paper-Scissor/rock-paper-scissor.html',
        image: './Rock-Paper-Scissor/img/rock-paper-scissor-logo.jpg',
        title: 'Rock Paper Scissor',
    },
    {
        id: 3,
        ref: './Guess-The-Number/guess-the-number.html',
        image: './Guess-The-Number/img/guess-the-number-logo.png',
        title: 'Guess The Number',
    },
    {
        id: 4,
        ref: './Quiz-Game/quiz-game.html',
        image: './Quiz-Game/img/quiz-game-logo.jpg',
        title: 'Quiz Game',
    },
    {
        id: 5,
        ref: './Flappy-Bird/flappy-bird.html',
        image: './Flappy-Bird/img/flappy-bird-logo.jpg',
        title: 'Flappy Bird',
    },
    {
        id: 6,
        ref: './Snake-Game/snake-game.html',
        image: './Snake-Game/img/snake-game-logo.jpg',
        title: 'Snake Game',
    },
    {
        id: 7,
        ref: './Tetris/tetris.html',
        image: './Tetris/img/tetris-logo.png',
        title: 'Tetris',
    },
    {
        id: 8,
        ref: './Slide-Puzzle/slide-puzzle.html',
        image: './Slide-Puzzle/img/slide-puzzle-logo.jpeg',
        title: 'Slide Puzzle',
    },
];
const categories = [...new Set(games.map((item)=>{return item}))];
document.getElementById('search-bar').addEventListener('keyup', (e)=>{
    if((e.target.value)!='') {
        const searchData = e.target.value.toLowerCase();
        const filterData = categories.filter((item)=>{
            return (
                item.title.toLocaleLowerCase().includes(searchData)
            );
        })
        displayItem(filterData); 
    }
});
const displayItem = (items)=>{
    document.getElementByClassName('main-container').innerHTML = items.map((item)=>{
        var {ref, image, title} = item;
        return (
            `<div class='box'>
                <a href='${ref}' target='_blank'>
                    <div class='img-box'>
                        <img class='images' src='${image}'/>
                    </div>
                    <div class='bottom'>
                        <p>${title}</p>
                    </div>
                </a>
            </div>`
        )
    }).join('');
};
displayItem(categories);