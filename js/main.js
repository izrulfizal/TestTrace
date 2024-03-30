var testData = {
    answer: "",
    timeTaken: 0,
    focusOff: 0,
    focusOn: 0,
    
}

function displayData(){
    testData.answer = document.getElementById("q1-ans").value
    console.log(testData)
    testData.focusOff--

    document.getElementById("card-body").innerHTML = `<p class="card-text">
    Answer: ` + testData.answer + `<br>Student went off screen ` + testData.focusOff +  
    ` times</p>`

}

function startFocus(){
    testData.focusOn++;
}

function stopFocus(){
    testData.focusOff++;
    
}

function startWrite(){
    console.log("Start writing")
}