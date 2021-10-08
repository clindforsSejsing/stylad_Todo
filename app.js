'strict coding';

//deklarerar variabler

const input = document.querySelector("input");
const button = document.querySelector("#addNewButton");
const list = document.querySelector("ul");
const arrayListOfItems = []; //deklarerar ny array. 
let taskDone = 0;//counter för avklarade uppgifter
let dlButton;
let idCounter = 0; //counter för att id rader i list.

//function som startar vid klick på lägg-till:

button.addEventListener("click", function () {

    //hämta text från input, deklarerar variablen i functionen = värdet förändras varje gång functionen körs. (texta) 
    const texta = input.value;


    //lägg till text i (ul), skapar element. Felkontroll- lägger ej in tomma li:
    if (texta != "") {
        let item = document.createElement("LI");
        item.id = idCounter;
        list.appendChild(item); //ny tom punkt(skapar li-element)


        const itemLabel = document.createElement("span");//lägger till tag span, lägger till text i vårt span
        itemLabel.innerText = texta;
        item.appendChild(itemLabel);


        //delete-knapp, styling plus ger id för varje rad som skrivs. 

        dlButton = document.createElement("button");
        dlButton.className = "fa fa-trash";
        dlButton.style.padding = "10px";
        dlButton.id = idCounter;

        item.appendChild(dlButton);

        idCounter++;

    }

    // Vid klick på papperskorgen, inhämtas id för raden och den raderas. Bara en åt gången.
    dlButton.addEventListener("click", function delbtnClicked(ev) {
        let knapp = ev.target;

        let lis = list.getElementsByTagName("LI");
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].id == knapp.id) {
                lis[i].remove();
                break;
            }
        }


    });

    //fyller på input till arrayen. Utskift i log. 
    arrayListOfItems.push(texta);
    console.log(arrayListOfItems);


    //alert om inmatningen är tom. 
    if (texta == "") {
        alert("Fyll i fältet");
    }

    //function som tömmer fältet efter inmatning.
    clearThis();
    function clearThis() {
        if (input.value !== "") {
            input.value = "";
        }

    }
}
)


//vid klick checkar av listan, plussar på avklarade uppgifter. Drar av vid avcheckade. 
list.addEventListener('click', function (ev) {
    let listItem = ev.target;
    if (listItem.tagName === 'LI') {
        let allDoneList = listItem.classList.toggle('checked');

        if (allDoneList) {
            taskDone++;
        } else {
            taskDone--;
        }

        document.querySelector("#allDone").innerHTML = 'Antal avklarade uppgifter: ' + taskDone;

    }

}, false);










