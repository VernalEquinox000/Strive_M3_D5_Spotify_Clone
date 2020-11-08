let registerUserModal = document.querySelector(".registerUser");
let singUpButton = document.querySelector(".spotify-signIn-btn-primary");

let userEmail = document.querySelector("#userEmail");
let userName = document.querySelector("#userName");
let userPassword = document.querySelector("#userPassword");
let sumbitUser = document.querySelector(
  ".registerUserContent .spotify-btn-green"
);

let loginBtn = document.querySelector(".login .spotify-btn-green");
let loginUser = document.querySelector("#loginUser");
let loginPassword = document.querySelector("#loginPassword");

singUpButton.onclick = function () {
  registerUserModal.style.display = "block";
};

let userObject = [
  {
    Email: "ermal@strive.com",
    Username: "ermalA",
    Password: "ermal@123",
  },
  {
    Email: "lidia@strive.com",
    Username: "lidiaK",
    Password: "lidia@123",
  },
  {
    Email: "yazid@strive.com",
    Username: "yazidA",
    Password: "yazid@123",
  },
];

sumbitUser.onclick = function () {
  let userInfo = {
    Email: "",
    Username: "",
    Password: "",
  };
  userInfo.Email = userEmail.value;
  userInfo.Username = userName.value;
  userInfo.Password = userPassword.value;

  userObject.push(userInfo);

  userEmail.value = "";
  userName.value = "";
  userPassword.value = "";

  registerUserModal.style.display = "none";
};

loginBtn.onclick = function () {
  for (let i = 0; i < userObject.length; i++) {
    if (
      (loginUser.value === userObject[i].Email ||
        loginUser.value === userObject[i].Username) &&
      loginPassword.value === userObject[i].Password
    ) {
      window.location.href = "index.html";
    }
  }
  if (
    loginUser.value !== userObject.Email &&
    loginUser.value !== userObject.Username &&
    loginPassword.value !== userObject.Password
  ) {
    let errorUser = document.querySelectorAll(".login p")[0];

    errorUser.innerHTML = "Username or password is not correct";
    errorUser.style.color = "red";
    errorUser.style.fontSize = "14px";
    errorUser.classList.add("text-center");
  }
};

window.onclick = function (event) {
  if (event.target == registerUserModal) {
    registerUserModal.style.display = "none";
  }
};
