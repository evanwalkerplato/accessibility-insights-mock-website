document.getElementById('first-name-hq').addEventListener('focusout', first_name_error_hq_check);
document.getElementById('last-name-hq').addEventListener('focusout', last_name_error_hq_check);
document.getElementById('phone-hq').addEventListener('focusout', phone_error_hq_check);
document.getElementById('email-hq').addEventListener('focusout', email_error_hq_check);
document.getElementById('subscribe-hq').addEventListener('click', subscribe_hq);
document.getElementById('first-name-mch').addEventListener('focusout', first_name_error_mch_check);
document.getElementById('last-name-mch').addEventListener('focusout', last_name_error_mch_check);
document.getElementById('phone-mch').addEventListener('focusout', phone_error_mch_check);
document.getElementById('email-mch').addEventListener('focusout', email_error_mch_check);
document.getElementById('subscribe-mch').addEventListener('click', subscribe_mch);
document.getElementById('open-popup').addEventListener('click', open_popup);
document.getElementById('close-popup').addEventListener('click', close_popup);

let first_name_hq = document.getElementById('first-name-hq');
let first_name_error_hq = document.getElementById('first-name-error-hq');
let last_name_hq = document.getElementById('last-name-hq');
let last_name_error_hq = document.getElementById('last-name-error-hq');
let phone_hq = document.getElementById('phone-hq');
let phone_error_hq = document.getElementById('phone-error-hq');
let email_hq = document.getElementById('email-hq');
let email_error_hq = document.getElementById('email-error-hq');
let submit_form_hq = document.getElementById('subscribe-hq');
let auth_hq = document.getElementById('auth-hq')
let first_name_mch = document.getElementById('first-name-mch');
let first_name_error_mch = document.getElementById('first-name-error-mch');
let last_name_mch = document.getElementById('last-name-mch');
let last_name_error_mch = document.getElementById('last-name-error-mch');
let phone_mch = document.getElementById('phone-mch');
let phone_error_mch = document.getElementById('phone-error-mch');
let email_mch = document.getElementById('email-mch');
let email_error_mch = document.getElementById('email-error-mch');
let submit_form_mch = document.getElementById('subscribe-mch');
let auth_mch = document.getElementById('auth-mch')
let time_testing_hq = document.getElementById('time-output-hq');
let time_testing_mch = document.getElementById('time-output-mch');
let div_popup = document.getElementById('div-popup')



function first_name_error_hq_check() {
    if (first_name_hq.value == null || first_name_hq.value == "") {
        first_name_error_hq.style.visibility = "visible";
    } else {
        first_name_error_hq.style.visibility = "hidden";
    }
}

function last_name_error_hq_check() {
    if (last_name_hq.value == null || last_name_hq.value == "") {
        last_name_error_hq.style.visibility = "visible";
    } else {
        last_name_error_hq.style.visibility = "hidden";
    }
}

function phone_error_hq_check() {
    if (phone_hq.value == null || phone_hq.value == "") {
        phone_error_hq.style.visibility = "visible";
    } else {
        phone_error_hq.style.visibility = "hidden";
    }
}

function email_error_hq_check() {
    if (email_hq.value == null || email_hq.value == "") {
        email_error_hq.style.visibility = "visible";
    } else {
        email_error_hq.style.visibility = "hidden";
    }
}

function subscribe_hq() {
    if (first_name_hq.value != null && first_name_hq.value != "" && last_name_hq.value != null && last_name_hq.value != "" && phone_hq.value != null && phone_hq.value != "" && email_hq.value != null && email_hq.value != "") {
        auth_hq.showModal();
        timer();
    }
} 


function first_name_error_mch_check() {
    if (first_name_mch.value == null || first_name_mch.value == "") {
        first_name_error_mch.style.visibility = "visible";
    } else {
        first_name_error_mch.style.visibility = "hidden";
    }
}

function last_name_error_mch_check() {
    if (last_name_mch.value == null || last_name_mch.value == "") {
        last_name_error_mch.style.visibility = "visible";
    } else {
        last_name_error_mch.style.visibility = "hidden";
    }
}

function phone_error_mch_check() {
    if (phone_mch.value == null || phone_mch.value == "") {
        phone_error_mch.style.visibility = "visible";
    } else {
        phone_error_mch.style.visibility = "hidden";
    }
}

function email_error_mch_check() {
    if (email_mch.value == null || email_mch.value == "") {
        email_error_mch.style.visibility = "visible";
    } else {
        email_error_mch.style.visibility = "hidden";
    }
}

function subscribe_mch() {
    if (first_name_mch.value != null && first_name_mch.value != "" && last_name_mch.value != null && last_name_mch.value != "" && phone_mch.value != null && phone_mch.value != "" && email_mch.value != null && email_mch.value != "") {
        auth_mch.showModal();
        timer();
    }
} 

function timer() {
    let difference = 10000;
    time_testing_hq.innerHTML = "10";
    time_testing_mch.innerHTML = "10";
    
    let x = setInterval(function() {
        difference -= 1000;
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        time_testing_hq.innerHTML = seconds;
        time_testing_mch.innerHTML = seconds;

        if (difference == 0) {
            clearInterval(x);
            auth_hq.close();
            auth_mch.close();
        }

    }, 1000);
}

function open_popup() {
    div_popup.style.display = "block";
    div_popup.style.position = "fixed";
    div_popup.style.top = "45%";
    div_popup.style.left = "45%";
    div_popup.style.backgroundColor = "green";
}

function close_popup() {
    div_popup.style.display = "none";
}