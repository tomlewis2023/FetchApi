let nameid = document.getElementById("name");
let emailid = document.getElementById("email");
let picid = document.getElementById("img");

//fetch data from api

function fetchapi() {
  // const response = await fetch("https://randomuser.me/api/")
  // const data = await response.json()

  fetch("https://randomuser.me/api/")
    .then((response) => response.json())

    // console.log(data.results);
    .then((data) =>
      data.results.forEach((element) => {
        let name = element.name;
        nameid.innerText = `${name.first} ${name.last}`;
        //   console.log(name);
        let email = element.email;
        emailid.innerText = email;
        //   console.log(email);
        let picture = element.picture.large;
        picid.src = picture;

        console.log(picture);
      })
    );
}
