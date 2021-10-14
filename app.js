'strict coding';

//deklarerar variabler
const button = document.querySelector("#addNewButton");
let dlButton;
let idCounter = 0; //counter för att ge id till rader i list.
const input = document.querySelector("input");
const list = document.querySelector("ul");
let taskDone = 0;//counter för avklarade uppgifter



//function som startar vid klick på lägg-till:

button.addEventListener("click", function () {

    //hämta text från input, deklarerar variablen i functionen = värdet förändras varje gång functionen körs. (text) 
    const text = input.value;



    //lägg till text i (ul), skapar element. Felkontroll- lägger ej in tomma li:
    if (text != "") {
        let item = document.createElement("LI");
        item.id = idCounter;
        list.appendChild(item); //ny tom punkt(skapar li-element)

        const itemLabel = document.createElement("SPAN");//lägger till tag span, lägger till text i vårt span
        itemLabel.innerText = text;
        itemLabel.id = idCounter;
        item.appendChild(itemLabel);

        item.addEventListener('click', function (ev) { //function som hittar och stryker över element vid klick 

            let listItem = ev.target;
            if (listItem.tagName === 'LI') {
                let allDoneList = listItem.classList.toggle('checked');

                if (allDoneList) { //plussar på eller drar av i completed-listan.
                    taskDone++;
                } else {
                    taskDone--;
                }

                document.querySelector("#allDone").innerHTML = taskDone + " " + ("completed");
            }
            else if (listItem.tagName === "SPAN") { //om man klickar på span (texten i element li), stryks den/avbockas vid klick
                let itemInList = list.getElementsByTagName("LI");
                let allDoneList;
                for (var i = 0; i < itemInList.length; i++) {
                    if (itemInList[i].id == listItem.id) {
                        allDoneList = itemInList[i].classList.toggle('checked');
                        break;
                    }
                }

                if (allDoneList) { //plussar på eller drar av i completed-listan.
                    taskDone++;
                } else {
                    taskDone--;
                }

                document.querySelector("#allDone").innerHTML = taskDone + " " + ("completed");
            }
        });


        //delete-knapp, styling plus ger id för varje rad som skrivs. 

        dlButton = document.createElement("button");
        dlButton.className = "fa fa-trash";
        dlButton.style.padding = "10px";
        dlButton.style.color = "lightgrey";
        dlButton.style.backgroundColor = "white";
        dlButton.style.border = "none";
        dlButton.style.marginLeft = "10px";
        dlButton.style.fontSize = "20px";
        dlButton.id = idCounter;

        item.appendChild(dlButton);

        // Vid klick på papperskorgen, inhämtas id för raden och den raderas. Bara en åt gången.
        dlButton.addEventListener("click", function (ev) {
            let button = ev.target;

            let itemInList = list.getElementsByTagName("LI");
            for (var i = 0; i < itemInList.length; i++) {
                if (itemInList[i].id == button.id) {
                    itemInList[i].remove();
                    break;
                }
            }


        });

        idCounter++;


    }

    //gör fel-meddelande synligt om fält lämnas tomt. 
    let writeSomething = document.querySelector(".noText");

    if (text == "") {

        writeSomething.style.visibility = "visible";
        writeSomething.style.animation = "noText_blinking 1s 3";

    } else {
        writeSomething.style.visibility = "hidden";

    }


    //function som tömmer fältet efter inmatning.
    clearThis();
    function clearThis() {
        if (input.value !== "") {
            input.value = "";
        }
    }
})
