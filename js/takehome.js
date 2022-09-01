const url = 'https://swapi.dev/api/people/'
fetch(url).then(strwrs => strwrs.json()).then(strwrsData => {
     console.log(strwrsData.results)
    let character = strwrsData.results[Math.floor(Math.random() *strwrsData.results.length)];
     alert([character.name])
})

// const url = 'https://cat-fact.herokuapp.com/facts/random'

// function getCatFact() {
//     fetch(url).then(catFact => catFact.json()).then(catData => {
//          //console.log(catData.text)
//         alert(catData.text)


//     })
// };

document.createElement("div");
// let btn = document.createElement("button");
// btn.innerHTML = "Cat-Fact";
// //btn.type = "submit";
// btn.name = "formBtn";
// btn.style.backgroundColor = "red";
// btn.setAttribute("id", "catBtn")
// document.body.appendChild(btn);
// const btnCat = document.getElementById("catBtn")
// btnCat.addEventListener("click", getCatFact)