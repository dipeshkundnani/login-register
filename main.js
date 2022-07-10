// login start
function login() {
  let uname = document.querySelector("#uname");
  let lpass = document.querySelector("#lpass");

  document.querySelector("#alertbox").style.visibility = "visible";

  if (uname.value == 0 && lpass.value == 0) {
    document.querySelector("#errormsg").innerHTML =
      "❌ Invalid Username and Password";
  } else if (uname.value == 0) {
    document.querySelector("#errormsg").innerHTML = "❌ Invalid Username";
  } else if (lpass.value == 0) {
    document.querySelector("#errormsg").innerHTML = "❌ Invalid Password";
  } else {
    SaveLoginDataToLS.call();
    createAc.call();
  }

  resetalert = () => {
    document.querySelector("#alertbox").style.visibility = "hidden";
  };
  setTimeout(resetalert, 5000);
}

// switch to create account
createAc = () => {
  document.querySelector(".login").style.display = "none";
  document.querySelector(".signup").style.display = "flex";
  document.querySelector("#alertbox").style.visibility = "hidden";
  document.querySelector("#head-title").style.margin = "30px 0px 20px 0px";
};

// login end

// signup start

function createAccount() {
  let fname = document.querySelector("#fname");
  let sname = document.querySelector("#sname");
  let username = document.querySelector("#username");
  let email = document.querySelector("#email");
  let pass = document.querySelector("#pass");
  let cpass = document.querySelector("#cpass");
  document.querySelector("#alertbox").style.visibility = "visible";

  if (fname.value == 0) {
    document.querySelector("#errormsg").innerHTML = "Enter your name";
  } else if (sname.value == 0) {
    document.querySelector("#errormsg").innerHTML = "Enter your surname";
  } else if (username.value == 0) {
    document.querySelector("#errormsg").innerHTML = "Enter your username";
  } else if (email.value == 0) {
    document.querySelector("#errormsg").innerHTML = "Enter your email address";
  } else if (pass.value == 0) {
    document.querySelector("#errormsg").innerHTML = "Enter your password";
  } else if (cpass.value == 0) {
    document.querySelector("#errormsg").innerHTML = "Confirm password";
  }
  else {
    document.querySelector("#alertbox").style.visibility = "hidden";
    loginAccount.call();
  }
  SaveUserDataToLS.call();

  resetalert = () => {
    document.querySelector("#alertbox").style.visibility = "hidden";
  };
  setTimeout(resetalert, 5000);
}

// switch to login account
loginAccount = () => {
  document.querySelector(".login").style.display = "flex";
  document.querySelector(".signup").style.display = "none";
  document.querySelector("#alertbox").style.visibility = "hidden";
  document.querySelector("#head-title").style.margin = "60px 0px 40px 0px";
};

// user data store in localStorage
// localStorage start

// storing data
function SaveLoginDataToLS() {
  let lusername = document.querySelector("#uname").value;
  let lpass = document.querySelector("#lpass").value;

  let login_user = new Array();
  login_user = JSON.parse(localStorage.getItem("loginuser"))?JSON.parse(localStorage.getItem("loginuser")):[];

  
  // register user data
   login_user.push({
     "lusername": lusername,
     "lpass": lpass
   });

   localStorage.setItem("loginuser", JSON.stringify(login_user));
   document.querySelector("#alertbox").style.visibility = "hidden";
}

// %%%%%%%%%%%%%%%%%%%%
// errors

// multiple user Data not saving // solved
// duplicate data repeat error // solved by alert // not solved by errormsg 

// to do's

// git is initialized of Login SignUp JS to upload these files to github //
// trying to upload/host this project on netlify

// %%%%%%%%%%%%%%%%%%%%

function SaveUserDataToLS() {
  let name = document.querySelector("#fname").value;
  let surname = document.querySelector("#sname").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.querySelector("#pass").value;

  document.querySelector("#alertbox").style.visibility = "visible";

  // store new user data
  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

  // stop duplicate data
  if (user_records.some((v) => {return v.username==username})) 
  {
  document.querySelector("#errormsg").innerHTML = "Username Already Exist. Try Again";
  // alert("duplicate data!!");
  }
  else 
  {
  // register user data
  user_records.push({
    "name": name,
    "surname": surname,
    "username": username,
    "email": email,
    "password": password,
    "crfmpwd": password
  })
    localStorage.setItem("users", JSON.stringify(user_records));
  };

};

