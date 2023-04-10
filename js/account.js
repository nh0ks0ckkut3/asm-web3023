function account(username,password,firstname,lastname,email,sdt,address1,address2,city){
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.sdt = sdt;
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
}
var admin = new account("admin","admin!23","hoa","doan","hoadtps26626@fpt.edu.vn","0337295209","pham van bach q12","","hcm");
var list_account = [admin];
sessionStorage.setItem("list_account",JSON.stringify(list_account));
function coupon(code,discount,status){
    this.code = code;
    this.discount = discount;
    this.status = status
}

var coupon1 = new coupon("hoadeptrai",1,"on");
var coupon2 = new coupon("sinhnhat",0.5,"on");
var coupon3 = new coupon("vuive",0.1,"on");
var coupon4 = new coupon("javascript",0.2,"on");
var coupon5 = new coupon("chucmungnammoi",0.4,"on");
var list_coupon = [coupon1,coupon2,coupon3,coupon4,coupon5];
var info_input = document.getElementsByTagName("input");
var regexpassw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
var regexemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var regexphoneVN = /(0[3|5|7|8|9])+([0-9]{8})\b/;
function checkform(){
    if(info_input[0].value.length<8 || info_input[0].value.length>16 || checkexits(info_input[0].value)){
        alert("7 < username < 17, hoặc tài khoản đã tồn tại");
        info_input[0].focus();
        return false;
    }if(info_input[1].value.match(regexpassw)==null || info_input[1].value < 8){
        alert("mật khẩu tối thiểu 8 ký tự, chứa ít nhất một chữ cái, một chữ số, một ký tự đặc biệt");
        info_input[1].focus();
        return false;
    }if(info_input[2].value == "" || info_input[3].value == ""){
        alert("không bỏ trống tên");
        info_input[2].focus();
        return false;
    }if(info_input[4].value.match(regexemail)==null){
        alert("vui lòng nhập đúng email");
        info_input[4].focus();
        return false;
    }if(info_input[5].value.match(regexphoneVN)==null){
        alert("nhập đúng sđt VN");
        info_input[5].focus();
        return false;
    }if(info_input[6].value == "" && info_input[7].value == ""){
        alert("nhập ít nhất 1 địa chỉ cụ thể");
        info_input[6].focus();
        return false;
    }if(info_input[8].value == null){
        info_input[8].value = "";
    }
    return true;
}
function add_new_user(){
    if (checkform()){
        let new_account = new account(
            info_input[0].value,
            info_input[1].value,
            info_input[2].value,
            info_input[3].value,
            info_input[4].value,
            info_input[5].value,
            info_input[6].value,
            info_input[8].value
        );
        if (sessionStorage.getItem("list_account")){
            
            list_account = JSON.parse(sessionStorage.getItem("list_account"));
        }
        console.log(list_account);
        list_account.push(new_account);
        console.log(list_account);
        
        
        sessionStorage.setItem("current_account",JSON.stringify(new_account));
        sessionStorage.setItem("list_account",JSON.stringify(list_account));
    }
    
}
function checkexits(username){
    for (let i=0;i<list_account.length;i++){
        if(list_account[i]["username"]==username){
            return true;
        }
    }
    return false;
}
function Login(){
    let list_account = JSON.parse(sessionStorage.getItem("list_account"));
    for (let i=0;i<list_account.length;i++){
        if (info_input[0].value == list_account[i]["username"] && info_input[1].value == list_account[i]["password"]){
            sessionStorage.setItem("current_account",JSON.stringify(list_account[i]));
            
            window.location = "index.html";
            break;
        }
    }
}
function loadlogin(){
    var list_acc1 =  JSON.parse(sessionStorage.getItem("list_account"));
    console.log(list_acc1);
    let current = JSON.parse(sessionStorage.getItem("current_account"));
    if (current == null){
        document.getElementById("user").innerHTML = `<span><i class='bx bxs-user' ></i><a href="dangky.html" id="a1">Đăng ký</a>
        <a href="dangnhap.html" id="a2">Đăng Nhập</a></span>`;
    }else{
        document.getElementById("user").innerHTML = `<span><i class='bx bxs-user' ></i><a href="dangky.html" id="a1">Tài Khoản</a>
        <a href="" id="a2" onclick="logout()">Đăng Xuất</a></span>`;
    }
}
function logout(){
    sessionStorage.removeItem("current_account");
}