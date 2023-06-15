document.addEventListener("DOMContentLoaded",() => {

    let i = 0
    document.getElementById('burger').addEventListener("click", () =>{
        if(i % 2 === 0){
            document.querySelector("header").style.display= "flex";
        }
        else{
            document.querySelector("header").style.display= "none";
            document.querySelector("p4").style.animation = "2s backgroundcolor reverse;";
            document.querySelector("p3").style.animation = "3s backgroundcolor reverse;";
            document.querySelector("p2").style.animation = "4s backgroundcolor reverse;";
            document.querySelector("p1").style.animation = "5s backgroundcolor reverse;";
        }
        i = i + 1;
        return i
    });

    document.getElementById("About").addEventListener("mouseover", () =>{
        document.querySelector("#About--text").style.display ="flex"
    })

    document.getElementById("About").addEventListener("mouseout", () =>{
        document.querySelector("#About--text").style.display ="none"
    })

    document.getElementById("About--text").addEventListener("mouseover", () =>{
        document.querySelector("#About--text").style.display ="flex"
    })

    document.getElementById("About--text").addEventListener("mouseout", () =>{
        document.querySelector("#About--text").style.display ="none"
    })
})