/*Array containing question list along with choices, correct choice position, and corresponding picture*/
const questionList = [{
        partName: "skull",
        question: "What part of the skeletal system is this?",
        choices: ["Skull", "Ribs", "Scapula"],
        correctChoice: 0,
        pic: "Bones/skullb.png"
      },
      {
        partName: "clavicle",
        question: "What part of the skeletal system is this?",
        choices: ["Ulna", "Ribs", "Clavicle"],
        correctChoice: 2,
        pic: "Bones/clavicleb.png"
      },
      {
        partName: "scapula",
        question: "What part of the skeletal system is this?",
        choices: ["Radius", "Patella", "Scapula"],
        correctChoice: 2,
        pic: "Bones/scapulab.png"
      },
      {
        partName: "sternum",
        question: "What part of the skeletal system is this?",
        choices: ["Patella", "Sternum", "Tibia"],
        correctChoice: 1,
        pic: "Bones/sternumb.png"
      },
      {
        partName: "ribs",
        question: "What part of the skeletal system is this?",
        choices: ["Ribs", "Radius", "Humerus"],
        correctChoice: 0,
        pic: "Bones/ribsb.png"
      },
      {
        partName: "humerus",
        question: "Which bone provides structure and support to the upper arm?",
        choices: ["Humerus", "Radius", "Coxal Bone"],
        correctChoice: 0,
        pic: "Bones/humerusb.png"
      },
      {
        partName: "coxal bone",
        question: "What part of the skeletal system is this?",
        choices: ["Coxal Bone", "Ribs", "Scapula"],
        correctChoice: 0,
        pic: "Bones/coxalboneb.png"
      },
      {
        partName: "ulna",
        question: "Which bone, along with the radius, assists with the rotation of the wrist?",
        choices: ["Tibia", "Ulna", "Fingers"],
        correctChoice: 1,
        pic: "Bones/ulnab.png"
      },
      {
        partName: "radius",
        question: "Which bone articulates with the ulna and humerus at the elbow to provide movements of the wrist?",
        choices: ["Clavicle", "Radius", "Sternum"],
        correctChoice: 1,
        pic: "Bones/ulnab.png"
      },
      {
        partName: "fingers",
        question: "Which bone is responsible for the hand's dexerity?",
        choices: ["Carpals", "Metacarpals", "Phalanges"],
        correctChoice: 2,
        pic: "Bones/fingersb.png"
      },
      {
        partName: "femur",
        question: "Which bone bears body weight and provides leverage for the leg?",
        choices: ["Fibula", "Femur", "Toes"],
        correctChoice: 1,
        pic: "Bones/femurb.png"
      },
      {
        partName: "patella",
        question: "What part of the skeletal system is this?",
        choices: ["Clavicle", "Sternum", "Patella"],
        correctChoice: 2,
        pic: "Bones/patellab.png"
      },
      {
        partName: "tibia",
        question: "Which bone accepts and distributes weight across the knee and to the ankle?",
        choices: ["Humerus", "Sternum", "Tibia"],
        correctChoice: 2,
        pic: "Bones/tibiab.png"
      },
      {
        partName: "fibula",
        question: "Which bone combines with the tibia to provide stability to the ankle joint?",
        choices: ["Toes", "Sternum", "Fibula"],
        correctChoice: 2,
        pic: "Bones/tibiab.png"
      },
      {
        partName: "toes",
        question: "Which part provides movement for the foot?",
        choices: ["Tarsals", "Metatarsals", "Phalanges"],
        correctChoice: 1,
        pic: "Bones/toesb.png"
      }
    ];
    
    /*Array containing instances of user's correct and incorrect answers*/
    const answers = [];

    /*Records current question number of user*/
    var ansNum = 0;

    /*Records position value of user's selected answer*/
    var num = 0;

    /*Function called by body of quiz page to manage quiz content*/
    function generateQuiz(){

      /*Changes question picture based on question number*/
      getPic = questionList[ansNum].pic;
      document.getElementById("quizpic").src = getPic;

      /*Changes question content*/
      var ques = document.getElementById("quizQuestion");
      ques.innerHTML = questionList[ansNum].question;

      /*Changes content of question choices*/
      var firstChoice = document.getElementById("choice1");
      firstChoice.innerHTML = questionList[ansNum].choices[0];

      var secondChoice = document.getElementById("choice2");
      secondChoice.innerHTML = questionList[ansNum].choices[1];

      var thirdChoice = document.getElementById("choice3");
      thirdChoice.innerHTML = questionList[ansNum].choices[2];


    }



    /*function called when user selects a choice*/
    function proceed(userChoice){

      /*gets the position value of user's selected answer*/
      if (userChoice == 'choice1'){
        num = 0;
      }
      if (userChoice == 'choice2'){
        num = 1;
      }
      if (userChoice == 'choice3'){
        num = 2;
      }

      /*alerts user of correct or incorrect choice*/
      if (num == questionList[ansNum].correctChoice){
        answers.push("Correct");
        alert("Your answer is correct!");
      }
      else{
        right = questionList[ansNum].correctChoice;
        displayRight = questionList[ansNum].choices[right];
        alert("Sorry, the correct answer is " + displayRight + ".");
        answers.push("Incorrect");
      }
      
      /*adds 1 to value of current question number*/
      ansNum++;

      /*calls function to move to next question*/
      if (ansNum != questionList.length){
        nextQues();
      }
      
      /*hides question contents when all questions are done, also shows user's final score*/
      else {
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";
        document.getElementById("quizQuestion").style.display = "none";
        document.getElementById("quizpic").style.display = "none";

        document.getElementById("quiztitle").innerHTML = "Congratulations! Your final score is: " + countScore(answers) + " out of 15!";

      }

    }

    /*moves to next question and changes quiz content*/
    function nextQues(){

      document.getElementById("quizpic").src = questionList[ansNum].pic;

      var ques = document.getElementById("quizQuestion");
      ques.innerHTML = questionList[ansNum].question;
      
      var firstChoice = document.getElementById("choice1");
      firstChoice.innerHTML = questionList[ansNum].choices[0];

      var secondChoice = document.getElementById("choice2");
      secondChoice.innerHTML = questionList[ansNum].choices[1];

      var thirdChoice = document.getElementById("choice3");
      thirdChoice.innerHTML = questionList[ansNum].choices[2];
      
    }

    /*function that records user's score based on correct answers*/
    function countScore(array){
        let rightAns = 0;
        for (let z=0; z < array.length; z++){
            if (array[z] == "Correct"){
              rightAns++;
            }     
        }
        return rightAns;
    }