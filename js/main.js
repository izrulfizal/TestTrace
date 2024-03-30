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

    if (testData.focusOff > 1){
        document.getElementById("card-body").innerHTML = `<p class="card-text">
        Answer: ` + testData.answer + `<br>Student went off screen ` + testData.focusOff +  
        ` times</p>`
    }
    else if (testData.focusOff < 2){
        document.getElementById("card-body").innerHTML = `<p class="card-text">
        Answer: ` + testData.answer + `<br>Student went off screen ` + testData.focusOff +  
        ` time</p>`
    }
    else{
        document.getElementById("card-body").innerHTML = `<p class="card-text">
        Answer: ` + testData.answer + `<br>Student did not go off screen` + 
        `</p>`
    }


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