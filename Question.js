class Question{
    constructor(){
        this.title=createElement('h1','FOUR-PLAYER   COMMUNITY   SURVEY');
        this.name=createInput("Name");
        this.email=createInput("E-mail");
        this.phone=createInput("Phone Number");
        this.question1=createElement('h2','How often do you meet with others in the society?');
        this.input1=createRadio('h1');
        this.input1.option('Often');
        this.input1.option('Rarely');
        this.input1.option('Never');
        this.question2=createElement('h2','Would you be willing to contribute a small amount every month for providing facilities for the poor?');
        this.input2=createRadio('h1');
        this.input2.option('Yes');
        this.input2.option('Probably');
        this.input2.option('No');
        this.question3=createElement('h2','How often do you use the amenities in this society?');
        this.input3=createRadio('h1');
        this.input3.option('Often');
        this.input3.option('Rarely');
        this.input3.option('Never');
        this.question4=createElement('h2','How well are the streets & parks in this society maintained ?');
        this.input4=createRadio('h1');
        this.input4.option('Excellent');
        this.input4.option('Good');
        this.input4.option('Horrible');
        this.question5=createElement('h2','Comments on the Society.');
        this.input5=createInput('Comments');
        this.submit=createButton("SUBMIT");
        this.warning=createElement('h1');
        this.reset=createButton('RESET');
    }

    display(){
        answer=new Answer();
        this.title.position(500,50);
        this.question1.position(500,300);
        this.input1.position(700,400);
        this.question2.position(500,500);
        this.input2.position(700,600);
        this.question3.position(500,700);
        this.input3.position(700,800);
        this.question4.position(500,900);
        this.input4.position(700,1000);
        this.question5.position(500,1100);
        this.input5.position(700,1200);
        this.submit.position(650,1400);
        this.name.position(500,200);
        this.email.position(700,200);
        this.phone.position(900,200);
        this.reset.position(100,300);
        
        this.submit.mousePressed(()=>{
            
            answer.getCount();
            playerCount=playerCount+1;
            console.log(playerCount);
            answer.updateCount(playerCount);
            answer.name=this.name.value();
            answer.email=this.email.value();
            answer.phone=this.phone.value();
            ans.push(this.input1.value());
            ans.push(this.input2.value());
            ans.push(this.input3.value());
            ans.push(this.input4.value());
            ans.push(this.input5.value());
            answer.update();
            this.warning.html('THANK  YOU. RESULTS  WILL  APPERAR  BELOW  !!');
            this.warning.position(400,1420);
        })

        this.reset.mousePressed(()=>{
            answer.updateCount(0);
            answer.updateState(0);
        })
}
}