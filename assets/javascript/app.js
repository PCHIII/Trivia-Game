$(document).ready(function () {

    var numCount = 60;
    var notAnswered = 0;
    var correctAnswer = 0;
    var wrongAnswer = 0;

    // Hide the Mid Container and End Container

    $("#gameContainer").hide();
    $("#lastContainer").hide();
   
    $("#start").on("click", function () {

        //after on click function need the start container Hide and Mid container Show

        $("#startContainer").hide();
        $("#gameContainer").show();

        //Start CountDown 
        startCountdown();
        // return;
    });

    //CountDown Function

    function countdown() {

        numCount--;
        //countDown need to show on html

        $("#time").html(numCount);

        //before or after when click on done button 

        $("#Done").on("click", function () {

            numCount = 0;
         
        });

        //finish the game after the timer reaches 0

        if (numCount == -1) {

            timeUp();

            $("#gameContainer").hide();
        }

    }

    function startCountdown() {

        setInterval(countdown,1000);
    }

    //Function need to be run when the timer is up

    function timeUp() {

        //checked the value of radio input

        var Q1 = $('input:radio[name="q1"]:checked').val();
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();
        var Q6 = $('input:radio[name="q6"]:checked').val();

        //counting the wrong ,correct and unanswerd

        if (Q1 == " Dirty Dancing ") {

            correctAnswer++;

                } else if (Q1 == undefined) {
                    notAnswered++;
                } else {
                    wrongAnswer++;
                }

                if (Q2 == " Ghost ") {

                    correctAnswer++;

                } else if (Q2 == undefined) {
                    notAnswered++;
                } else {
                    wrongAnswer++;
                }

                if (Q3 == " Point Break ") {

                    correctAnswer++;

                } else if (Q3 == undefined) {
                    notAnswered++;
                } else {
                    wrongAnswer++;
                }

                if (Q4 == " Road House ") {

                    correctAnswer++;

                } else if (Q4 == undefined) {
                    notAnswered++;
                } else {
                    wrongAnswer++;
                }

                if (Q5 == " To Wong Fu ") {

                    correctAnswer++;

                } else if (Q5 == undefined) {
                    notAnswered++;
                } else {
                    wrongAnswer++;
                }


                if (Q6 == " Road House ") {

                    correctAnswer++;

                } else if (Q6 == undefined) {
                    notAnswered++;
                } else {
                    wrongAnswer++;
                }

        //after answer are validated, display the score results

            $("#correctAnswer").html("Correct Answer: " + correctAnswer);
            $("#WrongAnswer").html("Wrong Answer: " + wrongAnswer);
            $("#notAnswered").html("Not Answered: " + notAnswered);
            $("#lastContainer").show();

    }

    $("#Start-over").on("click", function () {

        location.reload();

    });

});