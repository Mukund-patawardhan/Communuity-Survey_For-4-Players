var State=0,playerCount=0,database,survey,smile,question,canvas,answer,a;
var gIMG,rIMG,yIMG;
var ans = [];
var details = [];
var name = [];
var email = [];
var phone = [];

var P1A1=[];
var P1A2=[];
var P1A3=[];
var P1A4=[];
var P1A5=[];

var P2A1=[];
var P2A2=[];
var P2A3=[];
var P2A4=[];
var P2A5=[];

var P3A1=[];
var P3A2=[];
var P3A3=[];
var P3A4=[];
var P3A5=[];

var P4A1=[];
var P4A2=[];
var P4A3=[];
var P4A4=[];
var P4A5=[];

var P1N=[];
var P2N=[];
var P3N=[];
var P4N=[];

function preload(){
}

function setup() {
    canvas=createCanvas(1360,2500);
    database=firebase.database();
    question=new Question();
    question.display();
    answer.getCount();
    console.log(playerCount);
}
function draw() {

    background("red");

    if(playerCount>3){
        State=1;
        playerCount=0;
        answer.updateState(State);
    }
    
    if(State===1){
        textSize(20);

        text("ANSWER 1",400,30);
        text("ANSWER 2",550,30);
        text("ANSWER 3",700,30);
        text("ANSWER 4",850,30);
        text("ANSWER 5",1100,30);

        text("Person 1",10,100);
        text("Person 2",10,200);
        text("Person 3",10,300);
        text("Person 4",10,400);

        answer.getPerson1Name();
        text("Name : "+P1N,150,100);
        answer.getPerson2Name();
        text("Name : "+P2N,150,200);
        answer.getPerson3Name();
        text("Name : "+P3N,150,300);
        answer.getPerson4Name();
        text("Name : "+P4N,150,400);

        textSize(30);
        
        answer.getPerson1Answers1();
        text(P1A1,400,100);
        answer.getPerson1Answers2();
        text(P1A2,550,100);
        answer.getPerson1Answers3();
        text(P1A3,700,100);
        answer.getPerson1Answers4();
        text(P1A4,850,100);
        answer.getPerson1Answers5();
        text(P1A5,1100,100);

        answer.getPerson2Answers1();
        text(P2A1,400,200);
        answer.getPerson2Answers2();
        text(P2A2,550,200);
        answer.getPerson2Answers3();
        text(P2A3,700,200);
        answer.getPerson2Answers4();
        text(P2A4,850,200);
        answer.getPerson2Answers5();
        text(P2A5,1100,200);

        answer.getPerson3Answers1();
        text(P3A1,400,300);
        answer.getPerson3Answers2();
        text(P3A2,550,300);
        answer.getPerson3Answers3();
        text(P3A3,700,300);
        answer.getPerson3Answers4();
        text(P3A4,850,300);
        answer.getPerson3Answers5();
        text(P3A5,1100,300);

        answer.getPerson4Answers1();
        text(P4A1,400,400);
        answer.getPerson4Answers2();
        text(P4A2,550,400);
        answer.getPerson4Answers3();
        text(P4A3,700,400);
        answer.getPerson4Answers4();
        text(P4A4,850,400);
        answer.getPerson4Answers5();
        text(P4A5,1100,400);
  
        textSize(60);
        text("RESULTS",500,600);
        
    }

}