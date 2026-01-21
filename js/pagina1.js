const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const book = document.querySelector("#book");

const papers = [
    document.querySelector("#l1"),
    document.querySelector("#l2"),
    document.querySelector("#l3")
];

let currentState = 1;
let numOfPapers = 3;
let maxState = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
}

function goNextPage() {
    if(currentState < maxState) {
        switch(currentState) {
            case 1:
                openBook();
                papers[0].classList.add("flipped");
                papers[0].style.zIndex = 1;
                break;
            case 2:
                papers[1].classList.add("flipped");
                papers[1].style.zIndex = 2;
                break;
            case 3:
                papers[2].classList.add("flipped");
                papers[2].style.zIndex = 3;
                closeBook(false);
                break;
        }
        currentState++;
    }
}

function goPrevPage() {
    if(currentState > 1) {
        switch(currentState) {
            case 2:
                closeBook(true);
                papers[0].classList.remove("flipped");
                papers[0].style.zIndex = 3;
                break;
            case 3:
                papers[1].classList.remove("flipped");
                papers[1].style.zIndex = 2;
                break;
            case 4:
                openBook();
                papers[2].classList.remove("flipped");
                papers[2].style.zIndex = 1;
                break;
        }
        currentState--;
    }
}

nextBtn.addEventListener("click", goNextPage);
prevBtn.addEventListener("click", goPrevPage);