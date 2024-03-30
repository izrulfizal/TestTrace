var testData = {
    answer: "",
    timeTaken: 0,
    focusOff: 0,
    focusOn: 0,
    keyboardStroke: 0,
    cpdetect: false,
    
}

function displayData(){
    testData.answer = document.getElementById("q1-ans").value
    if (testData.keyboardStroke == document.getElementById("q1-ans").value.length){
        testData.cpdetect = false;
    }
    else{
        testData.cpdetect = true;
    }
    console.log(testData)
    testData.focusOff--

    if (testData.focusOff > 1){
        document.getElementById("card-body").innerHTML = `<p class="card-text">
        Answer: ` + testData.answer + `<br>Student went off-screen <span class="offcounter">` + testData.focusOff +  
        `</span> times</p>`
    }
    else if (testData.focusOff < 2){
        document.getElementById("card-body").innerHTML = `<p class="card-text">
        Answer: ` + testData.answer + `<br>Student went off-screen <span class="offcounter">` + testData.focusOff +  
        `</span> time</p>`
    }
    else{
        document.getElementById("card-body").innerHTML = `<p class="card-text">
        Answer: ` + testData.answer + `<br>Student did not go off-screen` + 
        `</p>`
    }

    if(testData.cpdetect == true){
        document.getElementById("card-body").innerHTML =  document.getElementById("card-body").innerHTML + `<p class="cpdetect">Copy pasting detected!</p>`
    }


}

function startFocus(){
    testData.focusOn++;
}

function stopFocus(){
    testData.focusOff++;
    
}

function startWrite(){
    testData.keyboardStroke++;
}