let solved = [false, false, false];

function solveQuestion(questionNo) {

    if (!solved[questionNo - 1]) {
        solved[questionNo - 1] = true;
    }

    document.getElementById("p" + questionNo).classList.add("active");

    let completed = solved.filter(x => x).length;

    document.getElementById("count").innerHTML =
        completed + "/3 Completed";

    if (completed === 3) {
        alert("🎉 Next Level Unlocked!!!");
    }
}