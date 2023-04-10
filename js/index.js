var list_picture_slide = ["slider_1.jpg","slider_2.jpg","slider_3.jpg","slider_4.jpg","slider_5.jpg"];
var maxsize = list_picture_slide.length;
var danhmuc = function(madm,tendm,hinh,soluong){
    this.madm = madm,
    this.tendm = tendm,
    this.hinh = hinh,
    this.soluong = soluong
}
var sanpham = function(masp,tensp,hinh,soluong,gia,giamgia,madm){
    this.masp = masp,
    this.tensp = tensp,
    this.hinh = hinh,
    this.soluong = soluong,
    this.gia = gia,
    this.giamgia = giamgia,
    this.madm = madm
}
var danhmuc1 = new danhmuc("dm001","Giày Nam","img/dm001.jpg",434);
var danhmuc2 = new danhmuc("dm002","Giày Nữ","img/dm002.jpg",233);
var danhmuc3 = new danhmuc("dm003","Phụ Kiện - Quần Áo","img/dm003.jpg",813);
var danhmuc4 = new danhmuc("dm004","REEBOK","img/dm004.jpg",71);
var danhmuc5 = new danhmuc("dm005","NIKE","img/dm005.jpg",89);
var danhmuc6 = new danhmuc("dm006","Flash Sale","img/dm006.jpg",0);
var list_danhmuc = [danhmuc1,danhmuc2,danhmuc3,danhmuc4,danhmuc5,danhmuc6];

var sanpham1 = new sanpham( "sp001",
                            "Giày Bóng Rổ Adidas Nam Chính Hãng - MCDONALD'S X T-MAX 1 | JapanSport FX2075",
                            "img/prod11.png",50,3600000,50,danhmuc1);
var sanpham2 = new sanpham( "sp002",
                            "Giày Adidas Chính hãng - Edge Lux 4 Nữ - Đen | JapanSport Q47196",
                            "img/prod2.png",50,2200000,50,danhmuc2);
var sanpham3 = new sanpham( "sp003",
                            'Giày Bóng Rổ Adidas Nam Chính Hãng - HARDEN VOL.5 "CHINESE NEW YEAR" | JapanSport G55811',
                            "img/prod3.png",50,3100000,30,danhmuc1);
var sanpham4 = new sanpham( "sp004",
                            "Giày Adidas Nữ Chính Hãng - Terrex Free Hyperblue Mid 'Wonder White' - Trắng | JapanSport S29059",
                            "img/prod4.png",50,6000000,80,danhmuc2);
var sanpham5 = new sanpham( "sp005",
                            "Giày Adidas Nữ Chính Hãng - UltraBoost 20 - Trắng | JapanSport FV8336",
                            "img/prod5.png",50,5100000,50,danhmuc2);
var sanpham6 = new sanpham( "sp006",
                            "Giày Nike Nữ Chính Hãng - Court Vision Low Next Nature - Hồng/Trắng | JapanSport DH3158-600",
                            "img/prod6.png",50,2400000,50,danhmuc2);
var sanpham7 = new sanpham( "sp007",
                            "Áo Phông Adidas Nam Chính Hãng - AEROREADY Designed to Move Sport Stretch Tee - Navy | JapanSport GM2133",
                            "img/prod7.png",50,850000,60,danhmuc2);
var sanpham8 = new sanpham( "sp008",
                            "Áo Khoác Adidas Nữ Chính Hãng - Adicolor Split Trefoil Track Top - Đỏ | JapanSport HC7053",
                            "img/prod8.png",50,2300000,80,danhmuc2);
var sanpham9 = new sanpham( "sp009",
                            "Bộ Reebok Chính hãng - Te Piping Tracksuit - Đen | JapanSport GS9309",
                            "img/prod9.png",50,2200000,45,danhmuc1);
var sanpham10 = new sanpham( "sp010",
                            "Áo Reebok Nữ Chính Hãng - Long Sleeved Classics Crop - White | JapanSport - CF3148",
                            "img/prod10.png",50,980000,70,danhmuc1);
var sanpham11 = new sanpham( "sp011",
                            "Giày Nike Nam Chính Hãng - NIKE RENEW RIDE 3 - Đen | JapanSport DC8185-402",
                            "img/download.png",50,178000,0,danhmuc1);
var list_sanpham = [sanpham1,sanpham2,sanpham3,sanpham4,sanpham5,sanpham6,sanpham7,sanpham8,sanpham9,sanpham10,sanpham11];

function loadpage(){
    slide();
    loaddanhmuc();
    load_bestSell();
    load_namNangDong();
    load_nuThanhLich();
    loadlogin();
    show_count();
}
function loadpageProduct(){
    loadlogin();
    show_count();
    load_all_product();
}
function slide(){
        
    var img = document.getElementById("img");
    let index = Math.floor(Math.random() * maxsize);
    img.src = 'img/'+list_picture_slide[index];
    let kq = ""; 
    for (let i=0;i< maxsize;i++){
        kq += '<img src="img/'+list_picture_slide[i]+'" onclick="thumb('+i+')">';
    } 
    document.getElementById("thumb").innerHTML = kq;  
    document.getElementById("vitri").value = index;
    setInterval(next,5000);
}
function prev(){
    let vitri = parseInt(document.getElementById("vitri").value);
    if (vitri == 0){
        vitri = maxsize;
    }
    let j=vitri-1;
    document.getElementById("vitri").value = j;
    document.getElementById("img").src = 'img/'+list_picture_slide[j];
}
function next(){
    let vitri = parseInt(document.getElementById("vitri").value);
    if (vitri == (maxsize-1)){
        vitri = -1;
    }
    let j=vitri+1;
    document.getElementById("vitri").value = j;
    document.getElementById("img").src = 'img/'+list_picture_slide[j];
}
function thumb(y){
    document.getElementById("vitri").value = y;
    document.getElementById("img").src = 'img/'+list_picture_slide[y];
}

function loaddanhmuc(){
    let kq = ``;
    for (let i = 0; i < list_danhmuc.length; i++){
        kq+=
        `<div>
            <img src="` + list_danhmuc[i]["hinh"] + `">
            <h2>` + list_danhmuc[i]["tendm"] + `</h2>
            <span>` + list_danhmuc[i]["soluong"] + `</span><p>Sản phẩm</p>
        </div>`
    }
    document.getElementById("dm").innerHTML = kq;
}
function load_all_product(){
    let kq = ``;
    for (let i = 0; i < 60; i++){
        let index = Math.floor(Math.random()*list_sanpham.length);
        kq += 
                `<div class="prod">
                    <img src="`+ list_sanpham[index]["hinh"] +`" onclick="add_To_Cart()">
                    <div class="prod__name">
                    <a href="chitietsanpham.html"><p>`+ list_sanpham[index]["tensp"] +`<p></a>
                    </div>
                    <div class="prod__price">
                        <span>`+ list_sanpham[index]["gia"] +`</span><p>đ</p>
                    </div>
                    <button onclick="add_To_Cart(this)">Buy</button>
                </div>`
    }
    document.getElementById("allProd").innerHTML = kq;
}
function load_bestSell(){
    
    let kq = ``;
    for (let i = 0; i < soLuongInRa; i++){
        let index = Math.floor(Math.random()*list_sanpham.length);
        kq += 
                `<div class="prod">
                    <img src="`+ list_sanpham[index]["hinh"] +`" onclick="add_To_Cart()">
                    <div class="prod__name">
                        <p>`+ list_sanpham[index]["tensp"] +`<p>
                    </div>
                    <div class="prod__price">
                        <span>`+ list_sanpham[index]["gia"] +`</span><p>đ</p>
                    </div>
                    <button onclick="add_To_Cart(this)">Buy</button>
                </div>`
    }
    document.getElementById("bestSell").innerHTML = kq;
}
var spNam = [];
function load_namNangDong(){
    spNam = [];
    for (let i = 0; i < list_sanpham.length; i++){
        if (list_sanpham[i]["madm"] === danhmuc1){
            spNam.push(list_sanpham[i]);
        }
    }
    document.getElementById("namshow").innerHTML = insanpham(spNam);
}
var spNu = [];
function load_nuThanhLich(){
    spNu = [];
    for (let i = 0; i < list_sanpham.length; i++){
        if (list_sanpham[i]["madm"] === danhmuc2){
            spNu.push(list_sanpham[i]);
        }
    }
    document.getElementById("nushow").innerHTML = insanpham(spNu);
}
var soLuongInRa = 5;
function myFunction(x) {
    
    if (x.matches) { // If media query matches
        soLuongInRa = 6;
        loadpage();
    } else {
        soLuongInRa = 5;
        loadpage();
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
function insanpham(x){
    
    // || window.matchMedia("(min-width: 46.25em) and (max-width: 63.9375em)")
    // if(window.matchMedia("(max-width: 46.1875em)")){
    //     soLuongInRa = 6;
    // }
    let kq = ``;
    for (let i = 0; i < soLuongInRa; i++){
        kq +=
            `<div class="prod">
                <img src="`+ x[i]["hinh"] +`">
                <div class="prod__name">
                    <p>`+ x[i]["tensp"] +`<p>
                </div>
                <div class="prod__price">
                    <span>`+ x[i]["gia"] +`</span><p>đ</p>
                </div>
                <button onclick="add_To_Cart(this)">Buy</button>
            </div>`
    }  
    return kq;
}
var list_sanpham_mua = [];
function add_To_Cart(x){
    document.getElementById("icon_cart_plus").style.display = "block";
    setTimeout(function(){ document.getElementById("icon_cart_plus").style.display = "none"; }, 1000);
    if (sessionStorage.getItem("list_sanpham_mua")){
        list_sanpham_mua = JSON.parse(sessionStorage.getItem("list_sanpham_mua"));
    }
    let root = x.parentElement;
    let hinh = root.children[0].src;
    
    if (!check_Sp_exits(hinh)){
        let ten = root.children[1].children[0].innerText;
        let gia = root.children[2].children[0].innerText;
        let soluong = 1;
        let sanpham_mua = {hinh,ten,gia,soluong};
        list_sanpham_mua.push(sanpham_mua);
        sessionStorage.setItem("list_sanpham_mua",JSON.stringify(list_sanpham_mua));
    }
    show_count();
}
function check_Sp_exits(x){
    
    let list_sanpham_mua = [];
    if (sessionStorage.getItem("list_sanpham_mua")){
        list_sanpham_mua = JSON.parse(sessionStorage.getItem("list_sanpham_mua"));
    }
    
    for (let i=0;i<list_sanpham_mua.length;i++){
        if (list_sanpham_mua[i]["hinh"]==x){
            list_sanpham_mua[i]["soluong"]+=1;
            sessionStorage.setItem("list_sanpham_mua",JSON.stringify(list_sanpham_mua));
            return true;
        }
    }
    return false;
}
function show_count(){
    let list_sanpham_mua = [];
    if (sessionStorage.getItem("list_sanpham_mua")){
        list_sanpham_mua = JSON.parse(sessionStorage.getItem("list_sanpham_mua"));
        let kq = 0;
        for (let i = 0; i < list_sanpham_mua.length ; i++){
            kq += list_sanpham_mua[i]["soluong"];
        }
        document.getElementById("count").innerText = kq;
    }
    
}
function show_cart(){
    let kq = ``;
    let list_sanpham_mua = [];
    if (sessionStorage.getItem("list_sanpham_mua")){
        list_sanpham_mua = JSON.parse(sessionStorage.getItem("list_sanpham_mua"));
    }
    if (list_sanpham_mua.length==0){
        document.getElementById("show_giohang").innerText = "Bạn chưa có sản phẩm nào trong giỏ hàng!";
    }else{
        
    }
}
function selectSize(x){
    x.style.border = "0.5px solid red";
    x.nextSibling.style.border = "0.5px solid blue";
}