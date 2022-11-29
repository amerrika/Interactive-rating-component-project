const ratingBoxEl = document.querySelector(".rating-box");
const messageBoxEl = document.querySelector(".message-box");
const btnSubmit = document.querySelector(".button");
const paragraph = document.querySelector(".selected-rating");
const ratingValues = document.getElementsByClassName("rating-grade");

// At the start the "display-none" class is added to the message box;
messageBoxEl.classList.add("display-none");


for(let i = 0; i < ratingValues.length; i++){
    const ratingValue = ratingValues[i];
    
    ratingValue.addEventListener("click", function(){
        paragraph.textContent = `You selected ${ratingValue.innerText} out of ${ratingValues.length}`
        // add orange background color when a rating number is clicked
        ratingValue.classList.add("orange")
    });

    btnSubmit.addEventListener("click", function(){
        // display-none added to rating box
        ratingBoxEl.classList.add("display-none");
        //display-none removed from message box
        messageBoxEl.classList.remove("display-none");
    })
}



