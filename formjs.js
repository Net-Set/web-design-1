const userId = document.getElementById("name");
const email = document.getElementById("email");
const num = document.getElementById("number");
const loc = document.getElementById("location");
const sub = document.getElementById("submit");



const database = firebase.database();
sub.addEventListener('click',(e)=>{
    e.preventDefault();
    database.ref('/users/'+ userId.value).set({
        first:userId.value,
        email:email.value,
        num:num.value,
        loc:loc.value


    }).then(function(){
      window.location.reload();
      alert("Successfull Input");});
});
