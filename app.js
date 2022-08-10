function signup() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    axios.post('https://data-collection-heroku.herokuapp.com/user', {

        "username": username,
        "email": email,
        "password": password

    })
        .then(function (response) {
            console.log(response.data);
            document.querySelector("#message").innerHTML = response.data;
        })
        .catch(function (error) {
            console.log(error.message);
        });



}


function getAllUsers() {
    let allUserList = document.getElementById("allUserList");

    axios.get("https://data-collection-heroku.herokuapp.com/user")
        .then(function (response) {
            console.log(response.data);
            document.querySelector("#allUserList").innerHTML = "";
            response.data.map(eachUser => {
                // document.querySelector("#allUserList").innerHTML = "";
                document.querySelector("#allUserList").innerHTML +=

                    `<br><span> ${eachUser.username}</span> ||
                    <span>${eachUser.email} </span>   || <span>  ${eachUser.password}</span> <br>`;
                     allUserList.style = "border: 1px solid #adb6bb4f;"


            })


        })
}