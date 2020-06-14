class Answer{
    constructor(){
        this.name=null;
        this.email=null;
        this.phone=null;
    }
    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount=data.val();
            console.log(data.val());
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    getState(){
        var StateRef=database.ref('State');
        StateRef.on("value",function(data){
            State=data.val();
        })
      }
    updateState(state){
        database.ref('/').update({
          State:state
        })
      }
    update(){
        var personIndex="People/Person"+playerCount;
        database.ref(personIndex).set({
            Name:this.name,
            Email:this.email,
            Phone:this.phone,
            Answers:ans
        })
    }

    getPerson1Answers1(){
        database.ref('People/Person1/Answers/0').on("value",(data)=>{
            P1A1=data.val();
        })
    }
    getPerson1Answers2(){
        database.ref('People/Person1/Answers/1').on("value",(data)=>{
            P1A2=data.val();
        })
    }
    getPerson1Answers3(){
        database.ref('People/Person1/Answers/2').on("value",(data)=>{
            P1A3=data.val();
        })
    }
    getPerson1Answers4(){
        database.ref('People/Person1/Answers/3').on("value",(data)=>{
            P1A4=data.val();
        })
    }
    getPerson1Answers5(){
        database.ref('People/Person1/Answers/4').on("value",(data)=>{
            P1A5=data.val();
        })
    }




    getPerson2Answers1(){
        database.ref('People/Person2/Answers/0').on("value",(data)=>{
            P2A1=data.val();
        })
    }
    getPerson2Answers2(){
        database.ref('People/Person2/Answers/1').on("value",(data)=>{
            P2A2=data.val();
        })
    }
    getPerson2Answers3(){
        database.ref('People/Person2/Answers/2').on("value",(data)=>{
            P2A3=data.val();
        })
    }
    getPerson2Answers4(){
        database.ref('People/Person2/Answers/3').on("value",(data)=>{
            P2A4=data.val();
        })
    }
    getPerson2Answers5(){
        database.ref('People/Person2/Answers/4').on("value",(data)=>{
            P2A5=data.val();
        })
    }




    getPerson3Answers1(){
        database.ref('People/Person3/Answers/0').on("value",(data)=>{
            P3A1=data.val();
        })
    }
    getPerson3Answers2(){
        database.ref('People/Person3/Answers/1').on("value",(data)=>{
            P3A2=data.val();
        })
    }
    getPerson3Answers3(){
        database.ref('People/Person3/Answers/2').on("value",(data)=>{
            P3A3=data.val();
        })
    }
    getPerson3Answers4(){
        database.ref('People/Person3/Answers/3').on("value",(data)=>{
            P3A4=data.val();
        })
    }
    getPerson3Answers5(){
        database.ref('People/Person3/Answers/4').on("value",(data)=>{
            P3A5=data.val();
        })
    }



    
    getPerson4Answers1(){
        database.ref('People/Person4/Answers/0').on("value",(data)=>{
            P4A1=data.val();
        })
    }
    getPerson4Answers2(){
        database.ref('People/Person4/Answers/1').on("value",(data)=>{
            P4A2=data.val();
        })
    }
    getPerson4Answers3(){
        database.ref('People/Person4/Answers/2').on("value",(data)=>{
            P4A3=data.val();
        })
    }
    getPerson4Answers4(){
        database.ref('People/Person4/Answers/3').on("value",(data)=>{
            P4A4=data.val();
        })
    }
    getPerson4Answers5(){
        database.ref('People/Person4/Answers/4').on("value",(data)=>{
            P4A5=data.val();
        })
    }



    getPerson1Name(){
        database.ref('People/Person1/Name').on("value",(data)=>{
            P1N=data.val();
        })
    }
    getPerson2Name(){
        database.ref('People/Person2/Name').on("value",(data)=>{
            P2N=data.val();
        })
    }
    getPerson3Name(){
        database.ref('People/Person3/Name').on("value",(data)=>{
            P3N=data.val();
        })
    }
    getPerson4Name(){
        database.ref('People/Person4/Name').on("value",(data)=>{
            P4N=data.val();
        })
    }
}