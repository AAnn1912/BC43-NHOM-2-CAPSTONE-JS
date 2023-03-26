// chứ fomat theo yêu cầu BE
export function User(object) {
  this.email = document.querySelector(object.selectorEmail).value;
  this.password = document.querySelector(object.selectorPassword).value;
  this.name = document.querySelector(object.selectorName).value;
  this.gender = document.querySelector(object.selectorGender).value;
  this.phone = document.querySelector(object.selectorPhone).value;
}
