
const input = document.querySelector(".input");
console.log(input);

input.addEventListener("input", filterMovies);

const mainContainer = document.createElement("div");
mainContainer.className = "main-container";

function filterMovies(e) {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://www.omdbapi.com/?i=tt3896198&apikey=c9bcfbed&s=${e.target.value}`, true);


    xhr.onload = function () {
        if (this.status && e.target.value.trim().length > 2) {
            // console.log(this.responseText);
            // console.log(typeof this.responseText);

            const response = JSON.parse(this.responseText);
            // console.log(response);
            // console.log(typeof response); //object
            // setTimeout(function(){
            //     input.value = "";
            // },3000);


            document.querySelector(".container").appendChild(mainContainer)


            if (response.Search.length > 0) {



                myArray = response.Search;

                let mySet = [...myArray];
                // let mySet = [...new Set(myArray)];
                console.log(mySet);
                mainContainer.innerHTML = "";

                for (let i = 0; i <= mySet.length; i++) {
                    const movieList = document.createElement("div");
                    movieList.className = "movie-list";
                    mainContainer.appendChild(movieList);
                    const movieItem = document.createElement("div");
                    movieItem.className = `movie-item ${i}`
                    const a = document.createElement("a");
                    a.className = `movie-item-link ${i}`;
                    const image = document.createElement("img");
                    image.className = `movie-item-image ${i}`;
                    image.id = `${mySet[i].imdbID}`;
                    image.src = mySet[i].Poster;
                    image.onerror = function () {
                        image.src = "./ks.gif";
                        image.title = "Opss! Seems I couldn't find the image, let me tell you about the movie...";
                    }
                    a.appendChild(image);
                    movieItem.appendChild(a);
                    movieList.appendChild(movieItem);


                    image.addEventListener("click", listMovieDetail);


                    function listMovieDetail() {

                        mainContainer.className = "main-container new-main-container";
                        const popUp = document.createElement("div");
                        popUp.id = "popUp";
                        document.body.appendChild(popUp);
                        popUp.className = "popUp";
                        const closeButton = document.createElement("button");
                        closeButton.className = "close-button";
                        closeButton.id = "popUp-closebutton"
                        closeButton.addEventListener("click", function () {
                            popUp.style.display = "none";
                            mainContainer.className = "main-container";
                            input.value = "";
                        })
                        const icon = document.createElement("i");
                        icon.className = "fa-sharp fa-solid fa-xmark";
                        icon.id = "popUp-icon"
                        closeButton.appendChild(icon);
                        popUp.style.background = `url(${mySet[i].Poster})`;
                        console.log(mySet[i].Title);
                        const content = document.createElement("div");
                        content.className = "content";
                        content.id = "popUp-content"
                        const bar = document.createElement("div");
                        bar.className = "bar";
                        bar.id = "popUp-bar";
                        const button2 = document.createElement("button");
                        button2.className = "button-2";
                        button2.id = "popUp-button2"
                        const downArrow = document.createElement("i");
                        downArrow.className = "fa-solid fa-chevron-down";
                        downArrow.id = "popUp-downArrow";
                        button2.appendChild(downArrow);
                        bar.appendChild(button2);
                        content.appendChild(bar);

                        button2.addEventListener("click", function () {
                            button2.style.display = "none";
                            content.className = "content-2";
                            bar.style.display = "none";
                            content.appendChild(closeButton);
                            icon.style.color = "rgb(24,21,21)";
                            icon.style.background = "white";
                            icon.style.fontSize = "20px";
                        })




                        const movieDetail = document.createElement("ul");

                        movieDetail.innerHTML = `
                        <h1>${mySet[i].Title}</h1>
                        <li>Release: ${mySet[i].Year}</li>
                        <li>IMDB ID: ${mySet[i].imdbID}</li>
                        `

                        content.appendChild(movieDetail);
                        popUp.appendChild(content);



                        if(content.style.display != "none"){
window.addEventListener("mouseup",function(e){
if(!e.target.id.includes("popUp")){
    popUp.style.display = "none";
    mainContainer.className = "main-container";
}
})
                        }

                    }


                }

            }

        }


    }


    xhr.send();

}


























    // movieItem.innerHTML = response.Search[i].Title;

            // const rate = response.rates.TRY
            // const amount = Number(document.getElementById("amount").value);
            // document.getElementById("tl").value = (amount*rate).toFixed(2);

// class Request {
//     constructor() {
//         this.xhr = new XMLHttpRequest();
//     }

//     //Get Request
//     get(url) {
//         this.xhr.open("GET", url) //Bağlantı açılır
//         const temp = this;

//         //Fonksiyon başarılı bir şekilde gelirse;
//         this.xhr.onload = function () {
//             console.log(this);
//             if (temp.xhr.status === 200) { //this.xhr.status idi
//                 console.log(temp.xhr.responseText); //this.xhr.responseText idi.

//             }
//         }

//         this.xhr.send();
//     }
// }

// const request = new Request();
// request.get(`https://www.omdbapi.com/?i=tt3896198&apikey=c9bcfbed&s=`);
