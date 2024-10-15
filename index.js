


function getComputerChoice (){
    const choises = ["rock","paper","scissors"];
    const randomindex = Math.floor(Math.random()*3)
    return choises[randomindex]

    
}


function getHumanCoice (){
    let choice =prompt("Please enter your choice")
    choice= choice.toLowerCase

    if (choice=="rock" || choice=="paper" || choice == "scissors"){
        return choice
    } else {
        console.log("Ivalied choice")
        return getHumanCoice();
    }
        
}


console.log(getHumanCoice())