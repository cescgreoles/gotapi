const divStart = document.createElement("div");
const divSearch = document.createElement("div");
const got$$ = document.createElement("div");
const imgHeader = document.createElement("img");
const imgHeader1 = document.createElement("img");
const imgHeader2 = document.createElement("img");

divStart.className = "first-container";
divSearch.className = "search";
got$$.className = "got";
imgHeader.src =
    "https://freepngimg.com/save/90816-head-silhouette-house-stark-daenerys-arya-targaryen/924x784";
imgHeader1.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Game_of_Thrones_2011_logo.svg/1200px-Game_of_Thrones_2011_logo.svg.png";
imgHeader2.src =
    "https://popcornerreviews.com/wp-content/uploads/2019/05/Lannister-Logo.png";

imgHeader.className = "imgHeader";
imgHeader1.className = "imgHeader1";
imgHeader2.className = "imgHeader2";

document.body.appendChild(divStart);

divStart.appendChild(imgHeader);
divStart.appendChild(imgHeader1);
divStart.appendChild(imgHeader2);
document.body.appendChild(divSearch);
document.body.appendChild(got$$);

function onSearch(event, characters) {
    event.preventDefault();
    const value = document.getElementById("searchTerm").value;
    console.log(value);
    for (const character of characters) {
        if (
            character.fullName.toLowerCase().includes(value.toLowerCase()) ||
            character.title.toLowerCase().includes(value.toLowerCase())
        ) {
            document.getElementById(character.id).classList.remove("hidden");
            console.log(character.fullName, character.title);
        } else {
            document.getElementById(character.id).classList.add("hidden");
        }
    }
}

function pintar(characters) {
    got$$.innerHTML = "";

    const img1$ = document.createElement("img");
    const form$$ = document.createElement("form");

    form$$.className = "myform";

    const input$$ = document.createElement("input");
    const button$$ = document.createElement("button");

    button$$.textContent = "SEARCH YOUR CHARACTER";
    input$$.id = "searchTerm";

    form$$.onsubmit = (event) => onSearch(event, characters);

    form$$.appendChild(input$$);
    form$$.appendChild(button$$);
    divSearch.appendChild(form$$);

    for (const character of characters) {
        const carta$$ = document.createElement("div");
        const titulo$$ = document.createElement("h3");
        const img$$ = document.createElement("img");
        const p$$ = document.createElement("p");

        carta$$.id = character.id;

        carta$$.className = "cards";
        titulo$$.className = "titulo";
        img$$.className = "img";
        p$$.className = "full-name";

        titulo$$.textContent = character.title;
        img$$.src = character.imageUrl;
        p$$.textContent = character.fullName;

        carta$$.appendChild(img$$);
        carta$$.appendChild(titulo$$);
        carta$$.appendChild(p$$);
        got$$.appendChild(carta$$);
    }
}

fetch("https://thronesapi.com/api/v2/Characters")
    .then((characters) => characters.json())
    .then((characters) => {
        pintar(characters);
    });
