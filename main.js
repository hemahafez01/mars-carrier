let output = document.getElementById("location");
let locationX = document.getElementById("location-x").value || 0;
let locationY = document.getElementById("location-y").value || 0;
let direction = document.getElementById("direction").value || "North";

function input() {
    carrier.X = document.getElementById("location-x").value;
    carrier.Y = document.getElementById("location-y").value;
    carrier.direction = document.getElementById("direction-input").value;
    update();

}
function update() {
    console.log(carrier);
    output.innerText = "Carrier location is" + " ( " + carrier.X + ", " + carrier.Y + " ) and facing " + carrier.direction + " .";
}
let carrier = {
    X: 0,
    Y: 0,
    direction: "North",
    forward: function () {
        switch (carrier.direction) {
            case "East":
                carrier.X = carrier.X + 1;
                break;
            case "West":
                carrier.X = carrier.X - 1;
                break;
            case "North":
                carrier.Y = carrier.Y + 1;
                break;
            case "South":
                carrier.Y = carrier.Y - 1;
                break;
        }
    },
    backward: function () {
        switch (carrier.direction) {
            case "East":
                carrier.X = carrier.X - 1;
                break;
            case "West":
                carrier.X = carrier.X + 1;
                break;
            case "North":
                carrier.Y = carrier.Y - 1;
                break;
            case "South":
                carrier.Y = carrier.Y + 1;
                break;
        }
    },
    turnRight() {
        switch (carrier.direction) {
            case "East":
                carrier.direction = "South";
                break;
            case "West":
                carrier.direction = "North";
                break;
            case "North":
                carrier.direction = "East";
                break;
            case "South":
                carrier.direction = "West";
                break;
        }
    },
    turnLeft() {
        switch (carrier.direction) {
            case "East":
                carrier.direction = "North";
                break;
            case "West":
                carrier.direction = "South";
                break;
            case "North":
                carrier.direction = "West";
                break;
            case "South":
                carrier.direction = "East";
                break;
        }
    },
};
update();


// carrier.X = locationX;
// carrier.Y = locationY;
// carrier.direction = direction;