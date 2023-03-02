
    let incorrectansers = []
    let allcategory =[]
    let s = 0
function start() {
    let category0 = document.createElement("button")
    document.body.append(category0)
    category0.classList.add("category")
    category0.innerHTML="General Knowledge"
    category0.addEventListener("click",() => {s=9})
    category0.addEventListener("click",Fetch)
    let category1 = document.createElement("button")
    document.body.append(category1)
    category1.classList.add("category")
    category1.innerHTML=" Mythology"
    category1.addEventListener("click",() => {s=20})
    category1.addEventListener("click",Fetch)
    let category2 = document.createElement("button")
    document.body.append(category2)
    category2.classList.add("category")
    category2.innerHTML="History"
    category2.addEventListener("click",() => {s=23})
    category2.addEventListener("click",Fetch)
    let category3 = document.createElement("button")
    document.body.append(category3)
    category3.classList.add("category")
    category3.innerHTML="Art"
    category3.addEventListener("click",() => {s=25})
    category3.addEventListener("click",Fetch)
}

function Fetch(params) {
    let cont =0
    let Data = []
    let url = `https://opentdb.com/api.php?amount=15&category=${s}`
    fetch(url)
    .then(response => response.json())
    .then(data =>{ Data=data.results
        question()
        // console.log(Data);
    })
    
    function question(e) {
        document.body.innerHTML=""
        for (let ques of Data) {
            let div = document.createElement("div")
            document.body.append(div)
            div.classList.add("parent")
            let question = document.createElement("p")
            div.append(question)
            question.innerHTML= ques.question
            let anss =[...ques.incorrect_answers]
            anss.splice(Math.floor( Math.random()*anss.length), 0, ques.correct_answer)
            // console.log(ques.correct_answer);
            // console.log(anss );
            for (const ans of anss) {
                let anser = document.createElement("button")
                div.append(anser)
                anser.innerHTML = ans
                if (ques.correct_answer== ans) {
                    // console.log(ans);
                    anser.classList.add("correct")
                }
                anser.addEventListener("click",cheose)
            }
        }
        let button = document.createElement("button")
        document.body.append(button)
        button.innerHTML= "Result"
        button.classList.add("result")
        button.style.backgroundColor="rgba(0, 0, 255, 0.587)"
        button.style.color="white"
        button.addEventListener("click",result)
    }
     

}

function cheose(e) {
    if (
        ![...e.target.parentElement.querySelectorAll('button')].some( button => button.classList.contains("cheose") )
    ) 
    {
        if (!e.target.classList.contains("cheose")) {
            e.target.classList.add("cheose")
        }
        else{
            
            e.target.classList.remove("cheose")
        }
    }
    else{
        e.target.classList.remove("cheose")

    }
}
function result() {
    
        let c = 0
        let i = 0
        document.querySelectorAll(".cheose").forEach((item) =>{
          if (item.classList.contains("correct")) {
        item.style.backgroundColor=" rgba(0, 0, 255, 0.22)"
        i =i+1
    }
    c = c+1
   
})
        document.querySelectorAll(".correct").forEach((item) =>{
        item.style.backgroundColor=" rgba(0, 128, 0, 0.428)"
   
})

        document.querySelector(".result").innerHTML = "play Again"
        document.querySelector(".result").addEventListener("click",playAgain)

        let h2 = document.createElement("h2")
        document.body.append(h2)
        h2.innerHTML= `you scored ${(i /c)*100} % correct answers`
        h2.style.backgroundColor="rgba(0, 0, 255, 0.587)"
        h2.style.color="white"

}
function playAgain() {
    document.body.innerHTML=""
    start()
}
start()