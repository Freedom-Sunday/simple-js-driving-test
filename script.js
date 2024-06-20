let nam = document.getElementById('name');
let age = document.getElementById('age');
let txt = document.getElementById('txt');
let submit = document.getElementById('submit');

let required_age = 18;

submit.addEventListener('click', function () {
    if (nam.value === '' || age.value === '') {
        alert('Fields cannot be empty');
        txt.innerHTML = 'Please fill all fields correctly';
        txt.style.color = 'red';
        txt.style.fontSize = '20px';

    }else if (age.value >= 5 && age.value <=10) {
        txt.innerHTML = 'Dear ' + nam.value + ' you are not eligible to drive yet';

    }else if (age.value > 10 && age.value <= 15) {
        txt.innerHTML = 'Dear ' + nam.value + ' you are not eligible to drive just yet';

    }else if (age.value > 15 && age.value <= 17) {
        txt.innerHTML = 'Dear ' + nam.value + ' you just need to wait a little while';

    }else if (age.value >= required_age) {
        txt.innerHTML = 'Dear ' + nam.value + ' you can now drive';
        txt.style.color = 'green';

    }else{
        txt.innerHTML = '';
    };
});
