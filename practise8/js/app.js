const Firstname = document.getElementById("name");
const Imag = document.getElementById("photo");
const Email = document.getElementById("mail");
let num = 0;
let numb = 0;
let start = {
    Firstname: Firstname.innerText,
    Imag: Imag.src,
    Email: Email.innerText
};
Firstname.onclick = function()
    {
    if (numb++ % 5 === 0) {
        Firstname.innerText = start.Firstname;
        Imag.src = start.Imag;
        Email.innerText = start.Email;
    }
    else 
    {
        if (num >= 12) num = 1;
        else num++;
        $ajaxUtils.sendGetRequest("https://webdesognfor.herokuapp.com/users/" + num, function(response) {
            const json = (JSON.parse(response.responseText))[0];
            Firstname.innerText = json.first_name + " " + json.last_name;
            Email.innerText = json.email;
            Imag.src = json.avatar;
        });
    }
};