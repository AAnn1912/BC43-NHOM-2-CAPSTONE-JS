import { Validation } from "../util/Validation.js";
export function checkVaild(user) {
  const checked = new Validation();
  let validEmail = [checked.kiemTraRong, checked.kiemTraEmail];
  let vaildName = [checked.kiemTraRong, checked.kiemTraKyTu];
  let validPass = [checked.kiemTraRong, checked.kiemTraPass];
  let vaildPhone = [checked.kiemTraRong, checked.kiemtraSo];
  let email = true;
  let name = true;
  let pass = true;
  let phone = true;
  for (let i = 0; i < validEmail.length; i++) {
    if (!validEmail[i](user.email, "error-email", "Email")) {
      email = false;
      break;
    }
  }
  for (let i = 0; i < vaildName.length; i++) {
    if (!vaildName[i](user.name, "error-name", "Name")) break;
  }
  for (let i = 0; i < validPass.length; i++) {
    if (!validPass[i](user.password, "error-pass", "PassWord")) break;
  }
  for (let i = 0; i < vaildPhone.length; i++) {
    if (!vaildPhone[i](user.phone, "error-phone", "Phone")) break;
  }
  if (!(email && name && pass && phone)) {
    return false;
  } else {
    return true;
  }
}

//call API
