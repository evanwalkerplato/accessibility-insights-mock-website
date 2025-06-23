document.getElementById('moogana').addEventListener('click', clickDiv);
document.getElementById('submit').addEventListener('click', buildCow);

let cow_name = document.getElementById('name');

function clickDiv() {
    document.getElementById('moogana').innerHTML = "Mooooooooooooooooo"; // Changes text inside div one time only when clicked
}

function buildCow() {
    if (cow_name.value == null || cow_name.value == "") {
        cow_name.style.borderStyle = 'solid';
        cow_name.style.borderColor = 'red';
    } else {
        document.getElementById('result').innerHTML = 'Congratulations on your new cow ' + cow_name.value; 
    }
}