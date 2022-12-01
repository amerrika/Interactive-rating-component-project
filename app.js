const messageBox = document.querySelector(".message-box");
const ratingBox = document.querySelector(".rating-box");
const btnSubmit = document.querySelector(".button");
const ratingGrades = document.getElementsByClassName("rating-grade");

// As first we will add display-none class to message-box to hide it;
messageBox.classList.add("display-none");

// We will query all elements with class "rating-grade", loop thourgh and add click event
let i = 0;
while (i < ratingGrades.length) {
    // attach click event
    ratingGrades[i].addEventListener("click", function(){
        // current grade
        let cg = Number(this.getAttribute("data-grade"));
        // update paragraph text in the message-box
        document.querySelector(".selected-rating").textContent = `You selected ${cg.toString()} out of ${ratingGrades.length}`;
    
        // Add active class to preceeding grades
        let prev = cg;
        while (1 <= prev) {
            // check if classlist contains active class, if not, add the class
            if(!document.querySelector(".rating-grade-" + prev).classList.contains("is-active")){
                document.querySelector(".rating-grade-" + prev).classList.add("is-active")
            };
            // decreasing current index
            --prev;
        }

         // Remove active class from succeeding grades
        let succ = cg + 1;
        while (succ <= ratingGrades.length){
            // check if classlist contains active class, if yes, remove the class
            if(document.querySelector(".rating-grade-" + succ).classList.contains("is-active")){
                document.querySelector(".rating-grade-" + succ).classList.remove("is-active")
            };
            succ++;
        }

        // submit button shows message-box
        btnSubmit.addEventListener("click", function(){
            // display-none added to rating box
            ratingBox.classList.add("display-none");
            //display-none removed from message box
            messageBox.classList.remove("display-none");
        })

    }) // end of click event
    // increment current index
    i++;
} // end of while loop



