function highlightNotices(){
    let paragraph = document.getElementsByTagName("p")
    for (let i = 0; i < paragraph.length; i++){
        paragraph[i].innerHTML = "Important" + " " + paragraph[i].innerHTML
        paragraph[i].classList.add("highlight") 
    } 
}

function highlightRules() {

    let section = document.getElementById("studentRules");

    let paragraphs = section.getElementsByTagName("p2");

    for (let i = 0; i < paragraphs.length; i++) {

        paragraphs[i].innerHTML = "⭐ " + paragraphs[i].innerHTML;

        paragraphs[i].classList.add("highlight");
    }
}


function highlightCourse() {

    let section = document.getElementById("courseInfo");

    let paragraphs = section.getElementsByTagName("p1");

    for (let i = 0; i < paragraphs.length; i++) {

        paragraphs[i].innerHTML = "📚 " + paragraphs[i].innerHTML;

        paragraphs[i].classList.add("highlight");
    }
}