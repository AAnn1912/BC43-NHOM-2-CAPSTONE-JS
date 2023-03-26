import { checkVaild } from "../controllers/method.js";
import { User } from "../models/UserRegister.js";

document.querySelector(".submit").onclick = function () {
  let user = new User({
    selectorEmail: "#email",
    selectorPassword: "#pass",
    selectorName: "#name",
    selectorGender: 'input[name="radio"]:checked',
    selectorPhone: "#phone",
  });
  let pass_Confirm = document.getElementById("pass_confirm").value;
  //Validation
  if (!(pass_Confirm === user.password)) {
    document.getElementById("error-pass_confirm").innerHTML =
      "PassWord không khớp";
  }
  if (checkVaild(user)) {
    postRegister(user);
  }
  function postRegister(user) {
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      method: "POST",
      responseType: "Json",
      data: user,
    });

    promise.then(function (res) {
      console.log(res);
    });

    promise.catch(function (err) {
      console.log(err);
    });
  }
};
