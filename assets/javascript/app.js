//Question and answer bank:
var questions = [{
    question: "What player has the nickname of Ice Man?",
    answers: ["Kevin Willis", "David Robinson", "George Gervin", "Tony Parker"],
    correctAnswer: "George Gervin"}, {
    question: "Who did the Spurs draft #1 overall in the 1997 NBA Draft?",
    answers: ["Tony Parker", "Kawhi Leonard", "Manu Ginobili", "Tim Duncan"],
    correctAnswer: "Tim Duncan"}, {
    question: "Who did the Spurs trade to the Pacers in the 2011 NBA Draft?",
    answers: ["George Hill", "Boban Marjanovic", "Devin Brown", "Rasual Butler"],
    correctAnswer: "George Hill"}, {
    question: "Which of the following Spurs players held the NBA scoring title (points per game) more times?",
    answers: ["George Gervin", "David Robinson", "Kawhi Leonard", "Tracy McGrady"],
    correctAnswer: "George Gervin"}, {
    question: "Who has his own restaurant in San Antonio, and went to the same high school as Wilt Chamberlain?",
    answers: ["James Silas", "Sean Elliott", "Malik Rose", "Dominique Wilkins"],
    correctAnswer: "Malik Rose"}, {
    question: "Who was the first Spur to ever score over 70 points in a game?",
    answers: ["Tracy McGrady", "David Robinson", "George Gervin", "Kawhi Leonard"],
    correctAnswer: "David Robinson"}, {
    question: "What was the original mascot name of the franchise that played in San Antonio in the 1970s?", 
    answers: ["Coyote", "Legends", "Cactus", "Chaparrals"],
    correctAnswer: "Chaparrals"}, {
    question: "What nickname did the newsmedia give the last second three pointer that Sean Elliot hit to win Game 2 of the 1999 Western Conference Finals?", 
    answers: ["Three for Free", "Memorial Day Miracle", "Dagger from Deep", "Elliott's Revenge"],
    correctAnswer: "Memorial Day Miracle"}, {
    question: "What was the nickname given to the 1999 Spurs' starting point guard, Avery Johnson?",
    answers: ["The Little Fundamental", "Payday AJ", "The Admiral", "The Little General"],
    correctAnswer: "The Little General"}, {
    question: "What was the nickname given to the 1997-2017 Spurs' starting power forward, Tim Duncan?",
    answers: ["The Big Fundamental", "Red Mamba", "The Twin Tower", "The Sky Hook"],
    correctAnswer: "The Big Fundamental"}, {
    question: "What is the name of the fan section of spirited season ticket holders at the AT&T Center?", 
    answers: ["Tim's Tots", "The Baseline Bums", "The Upper Section", "The Silver & Black"],
    correctAnswer: "The Baseline Bums"},
]

var card = $("#questionCard");

var timer;
 var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
   countdown: function() {
    game.counter--;
    $("#shotClock").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
   start: function() {
    timer = setInterval(game.countdown, 1000);
     $("#start").remove();
     for (var i = 0; i < questions.length; i++) {
      card.append("<h5>" + questions[i].question + "</h5>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + "  " + questions[i].answers[j] + "  " + "<p>");
      }
    }
     card.append("<button id='done'>Done</button>");
  },
   done: function() {
     $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
     $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
     $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
     $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
     $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
     $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
     $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
     $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
     this.result();
   },
   result: function() {
     clearInterval(timer);

     card.html("<h3>That's the buzzer!</h3>");
        card.append("<h5>You scored: " + this.correct + "</h5>");
        card.append("<h5>You missed: " + this.incorrect + "</h5>");
        card.append("<h5>No attempts: " + (questions.length - (this.incorrect + this.correct)) + "</h5>");
  }
};

function footerAlign() {
    $('footer').css('display', 'block');
    $('footer').css('height', 'auto');
    var footerHeight = $('footer').outerHeight();
    $('body').css('padding-bottom', footerHeight);
    $('footer').css('height', footerHeight);
  }
  
  
  $(document).ready(function(){
    footerAlign();
  });
  
  $(window).resize(function() {
    footerAlign();
  });
 

$(document).on("click", "#start", function() {
    game.start();
  });
 $(document).on("click", "#done", function() {
  game.done();
});