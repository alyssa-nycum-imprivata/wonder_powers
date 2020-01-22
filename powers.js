// Activates Flight

const flightHandlerFunction = () => {
    const flightId = document.getElementById("flight");
    flightId.classList.remove("disabled");
    flightId.classList.add("enabled");
};

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);


// Activates Mind Reading

const mindreadingHandlerFunction = () => {
    const mindreadingId = document.getElementById("mindreading");
    mindreadingId.classList.remove("disabled");
    mindreadingId.classList.add("enabled");
};

document.querySelector("#activate-mindreading").addEventListener("click", mindreadingHandlerFunction);


// Activates X-ray Vision

const xrayHandlerFunction = () => {
    const xrayId = document.getElementById("xray");
    xrayId.classList.remove("disabled");
    xrayId.classList.add("enabled");
};

document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);


// Enables All Powers

const enableAllHandlerFunction = () => {
    const enableAllId = document.querySelectorAll(".disabled");
    enableAllId.forEach(button => {
        button.classList.remove("disabled");
        button.classList.add("enabled");
    });  
};

document.querySelector("#enable-all").addEventListener("click", enableAllHandlerFunction);


// Disables All Powers

const disableAllHandlerFunction = () => {
    const disableAllId = document.querySelectorAll(".enabled");
    disableAllId.forEach(button => {
        button.classList.remove("enabled");
        button.classList.add("disabled");
    })
};

document.querySelector("#disable-all").addEventListener("click", disableAllHandlerFunction);












