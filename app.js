'strict coding';

//deklarerar variabler..

const input = document.querySelector("input");
const button = document.querySelector("#addNewButton");
const list = document.querySelector("ul");
let taskDone = 0;//counter för avklarade uppgifter
let dlButton;
let idCounter = 0; //counter för att id rader i list.

//function som startar vid klick på lägg-till:

button.addEventListener("click", function () {

    //hämta text från input, deklarerar variablen i functionen = värdet förändras varje gång functionen körs. (text) 
    const text = input.value;


    //lägg till text i (ul), skapar element. Felkontroll- lägger ej in tomma li:
    if (text != "") {
        let item = document.createElement("LI");
        item.id = idCounter;
        list.appendChild(item); //ny tom punkt(skapar li-element)


        const itemLabel = document.createElement("span");//lägger till tag span, lägger till text i vårt span
        itemLabel.innerText = text;
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
        let button = ev.target;

        let lis = list.getElementsByTagName("LI");
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].id == button.id) {
                lis[i].remove();
                break;
            }
        }


    });



    //alert om inmatningen är tom. 
    if (text == "") {
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

        document.querySelector("#allDone").innerHTML = taskDone + " " + "completed";

    }

}, false);










