


let cekHeader = document.querySelector("#header-details")
let cekHeader2 = document.getElementById("header-details")
let cekHeader3 = document.getElementsByClassName("details")



// let name = document.getElementById("name-user").value
// console.log(cekHeader3);



function handleSubmit(event) {
    // console.log(event, "==> ini event");
    
    event.preventDefault()    // untuk matiiin kebiasaan dari submit
    // console.log("aku terpanggil");
    const valueNameUser = document.getElementById("name-user").value
    console.log(valueNameUser);

    const valuroleuser = document.getElementById("role-user-input").value
    console.log(valuroleuser);

    const valuavail = document.getElementById("avail-input").value
    console.log(valuavail);
    
    const valuage = document.getElementById("age-input").value
    console.log(valuage);
    
    const vallocation = document.getElementById("location-input").value
    console.log(vallocation);

    const valexperience = document.getElementById("experience-input").value
    console.log(valexperience);
    
    
    
    


    const fullNameUser = document.getElementById("fullname-user").innerHTML = valueNameUser
    // const roleUser = document.getElementById("role-user").innerHTML
    console.log(fullNameUser);

    const fullrole = document.getElementById("role-user").innerHTML = valuroleuser
    console.log(fullrole);

    const getdataavail = document.getElementById("avail").innerHTML = valuavail
    console.log(getdataavail);
    

    const ageori = document.getElementById("age").innerHTML = valuage
    console.log(ageori);

    const locationori = document.getElementById("location").innerHTML = vallocation
    console.log(locationori);

    const experienceori = document.getElementById("experience").innerHTML = valexperience
    console.log(experienceori);


    const email_ori =document.getElementById("email").innerHTML = document.getElementById("email-input").value
   console.log(email_ori);




}