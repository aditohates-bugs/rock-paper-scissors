

let player_s =0;
let comp_s =0;
let p=0;
let c=0;
function fullGame(){

    function getComputerChoice(){
        let ranum = Math.random();

        if(ranum<= 0.3){
            return "rock";
        }
        else if(ranum <=0.6){
            return "paper";
        }
        else{
            return "scissor";
        }
    }
    function humanChoice(){
        let userInput = prompt("rock, paper or scissors");
        if(userInput.toLowerCase()=="rock"||userInput.toLowerCase() =="r"){
            return "rock";
        }
        if(userInput.toLowerCase()=="paper"||userInput.toLowerCase() =="p"){
            return "paper";
        }   
        if(userInput.toLowerCase()=="scissors"||userInput.toLowerCase() =="s"){
            return "scissor";
        }
        
            console.log("Invalid Choice");
            return humanChoice();
        
    }
    
    let user = humanChoice();
    let comp = getComputerChoice();
    function winner(user, comp){
        if (user === comp){
            return `User plays ${user} && Comp plays ${comp} >> It's a tie`;
        }
        if(user=="rock"){
            if(comp=="scissor"){
                player_s+=1;
                p=1;
            }
            else if(comp=="paper")
                comp_s+=1;
                c=1;
        }
        else if(user=="paper"){
            if(comp=="rock"){
                player_s+=1;
                p=1;
            }
            else if(comp=="scissor")
                comp_s+=1;
                c=1;
        }
        else if(user=="scissor"){
            if(comp=="paper"){
                player_s+=1;
                p=1;
            }
            else if(comp=="rock")
                comp_s+=1;
                c=1;
        }
        let message = `User plays ${user} && Comp plays ${comp} `;
        if(p==1){
            p=0;
            return message + '>>User wins this round'
        }
        else if(c==1){
            c=0;
            return message + '>>Computer wins this round'
        }
    }

    console.log(winner(user, comp));

}
for(let i=0; i<5; i++){
    console.log(`Round ${i+1}`);
    fullGame();
}

console.log(`Final score is> ${player_s}::${comp_s}(player:computer)`);
if(player_s>comp_s){
    console.log("PLayer WInssss");
}
else if(player_s<comp_s){
    console.log("COmpuTer WInssss");
}
else{
    console.log("Match is a draw");
}