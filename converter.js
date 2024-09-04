
function convertFeetToMeters() {
    let feet = document.getElementById("feet").value;
    let meters = feet * 0.3048; 
    document.getElementById("metersResult").innerText = feet + " feet is approximately equal to " + meters.toFixed(2) + " meters.";
}
 3