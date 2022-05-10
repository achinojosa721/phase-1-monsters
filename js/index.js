document.addEventListener('DOMContentLoaded', () => {
    const createMonster = document.createElementById("create monster");
    monsterSubmitForm()
    const monsterContainer = document.getElementById("monster-container")
    constmonsterForm = document.querySelector("form");

    monsterForm.addEventListener("sumbit", (event) => {

        let monsterObj = {
            name: event.target.name.value,
            age: event.target.age.value,
            description: event.target.description.value
        }

        handleSubmit(monsterObj)
        console.log("monster")
    })

    function getAllMonsters(){
        fetch("http://localhost:3000/monsters")
        .then(response => response.json())
        .then(monsterData => {
            //grab monster container
            //const monsterContainer = document.getElementById("monster-container")
            monsterData.slice(0,50).forEach(monster => {
                //declare new div to hold monster information
                const card = document.createElement("div")
                //set innerHTML to have all info you I want on the page
                card.innerHTML = `
                <div class="card" id="${monster.id}">
                <h2>${monster.name}</h2>
                <h3>${monster.age}</h3>
                <p>${monster.description}</p>
                </div>
                `
                //append info to the DOM
                monsterContainer.appendChild(card)
            });
        })
    }

    function handleSubmit(monsterObj){
        addMonster(monsterObj);
            //console.log(monsterObj, "monsterObj")
    }

    function addMonster(monsterObj){
        //console.log(monsterObj)
            fetch("http://localhost:3000/monsters",{
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body:JSON.strigify({
                    name: monsterObj.name,
                    age: monsterObj.age,
                    description: monsterObj.description
                })
            })
            .then(response => response.json())
            .catch(e => console.log(monster))
        }
        function monsterSubmitForm() {
            const form = document.createElement("form")
            form.innerHTML = createMonster,appendChild("form")
        }
        getAllMonsters();
    })

    