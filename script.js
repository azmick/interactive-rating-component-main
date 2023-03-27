const form = document.querySelector("[data-js-form]");
const template = document.querySelector("[data-js-template]");
const wrapper = document.querySelector("[data-js-wrapper]");


function handleSubmit(event){
    event.preventDefault();

    const rating = new FormData(event.target).get("rating");
    console.log(rating);

    if(rating){
        wrapper.addEventListener("animationend", () => {
            wrapper.innerHTML = template.innerHTML.replace(/{{ rating }}/, rating);
            wrapper.classList.replace("animate-out","animate-in");
        },
        {
            once:true,
        }
        );

        playSound();
        wrapper.classList.add("animate-out");
        wrapper.style.height =wrapper.offsetHeight + "px";
    }
}

function playSound(){
    const audio = new Audio("./sounds/bell_small_002.mp3");
    audio.play();
}

form.addEventListener("submit", handleSubmit);


