export function Validation() {
  this.kiemTraEmail = function (value, idError, name) {
    var regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(value)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name}  không hợp lệ`;
  };
  this.kiemTraRong = function (value, idError, name) {
    if (value.trim() === "") {
      document.getElementById(
        idError
      ).innerHTML = `${name} không được bỏ trống `;
      return false;
    }
    document.getElementById(idError).innerHTML = "";
    return true;
  };
  this.kiemTraPass = function (value, idError, name) {
    var regexPass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
    if (regexPass.test(value)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(
      idError
    ).innerHTML = `${name} Không hợp lệ, mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)`;
    return false;
  };
  this.kiemtraSo = function (value, idError, name) {
    var regexnumbers = /^[0-9]+$/;
    if (regexnumbers.test(value)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name}  phải là ký số`;
  };
  this.kiemTraKyTu = function (value, idError, name) {
    var regexLetter =
      /^[A-Z a-z  ă â e ê đ ý ỳ ỷ ỹ ỵ ú ù ủ ũ ụ ư ứ ừ ử ữ ự ó ò ỏ õ ọ ô ố ồ ổ ỗ ộ ơ ớ ờ ở ỡ ợ ó ò ỏ õ ọ ô ố ồ ổ ỗ ộ ơ ớ ờ ở ỡ ợ i í ì ỉ ĩ ị é è ẻ ẽ ẹ ê ế ề ể ễ ệ á à ả ạ ã ă ắ ằ ẳ ẵ ặ â ấ ầ ẩ ẫ ậ Ă Â E Ê Đ Ý Ỳ Ỷ Ỹ Ỵ Ú Ù Ủ Ũ Ụ Ư Ứ Ừ Ử Ữ Ự Ó Ò Ỏ Õ Ọ Ô Ố Ồ Ổ Ỗ Ộ Ơ Ớ Ờ Ở Ỡ Ợ Ó Ò Ỏ Õ Ọ Ô Ố Ồ Ổ Ỗ Ộ Ơ Ớ Ờ Ở Ỡ Ợ I Í Ì Ỉ Ĩ Ị É È Ẻ Ẽ Ẹ Ê Ế Ề Ể Ễ Ệ Á À Ả Ạ Ã Ă Ắ Ằ Ẳ Ẵ Ặ Â Ấ Ầ Ẩ Ẫ Ậ]+$/;
    if (regexLetter.test(value)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} tất cả phải là ký tự`;
    return false;
  };
}
