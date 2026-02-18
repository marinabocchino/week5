let counter = 0;

function tickUp() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

function tickDown() {
    counter--;
    document.getElementById("counter").textContent = counter;
}


function runForLoop() {
    let result = "";

    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result.trim();
}


function showOddNumbers() {
    let result = "";
    let i = 1;

    while (i <= counter) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
        i++;
    }

    document.getElementById("oddNumberResult").textContent = result.trim();
}


function addMultiplesToArray() {
    let arr = [];

    if (counter >= 5) {
        for (let i = counter; i >= 5; i--) {
            if (i % 5 === 0) {
                arr.push(i);
            }
        }
    }

    console.log(arr);
}


function printCarObject() {
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };

    console.log(car);
}


function loadCar(num) {
    let car;

    if (num === 1) {
        car = carObject1;
    } else if (num === 2) {
        car = carObject2;
    } else if (num === 3) {
        car = carObject3;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}


function changeColor(num) {
    let paragraph = document.getElementById("styleParagraph");

    if (num === 1) {
        paragraph.style.color = "red";
    } else if (num === 2) {
        paragraph.style.color = "green";
    } else if (num === 3) {
        paragraph.style.color = "blue";
    }
}
