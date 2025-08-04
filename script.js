// document.write("Hello Word")

// alert("Hello Word")
// alert("สวัสดีค่ะ")

// console.log("ทดสอบระบบสำเร็จ")

// var Fullname = "Nittaya"

// const number = 20;

// document.write(Fullname);
// document.write(number);

// let result = "123abc";
// let total = parseInt(result);

// document.write(total);

// let Num = 123;
// let result = Num.toString()
// document.write(result);

// let total = typeof(result);
// document.write(total); 


// let num = 12312121;
// let Text = typeof(num);

// document.write(Text);

// document.write(typeof(num));

// ตัดเกรดคะแนน 
// โดยถ้าคะแนนมากกว่า 100 ให้ขึ้นคำว่า สอบผ่าน
//แต่ถ้าน้อยกว่า ให้ขึ้นคำว่า สอบตก ไปสอบใหม่นะ
// let Score = 102;

// if(Score >= 100){
//     document.write("สอบผ่าน");
// } else{
//     document.write("สอบตก ไปสอบใหม่นะ");
// }

// var temperature = 9;
// if( temperature >= 30){
//    document.writeln("ร้อนมาก");
// }else if ( temperature >= 10){
//     document.write("เริ่มหนาวแล้ว");
// }else{
//     document.write("น้ำร้อน เย็นหมดแล้ว");
// }

// var mouth = 1;

// switch (muoth){
//     case 1 : 
//     document.write ("มกราคม");
//     break;

//     case 2 : 
//     document.write ("กุมภาพันธ์");
//     break;

// }

//แปลงจากเลขเป็นวัน

// var day = 9;
// switch (day){
//     case 1 :
//     document.write("วันจันทร์");
//     break;

//     case 2 :
//     document.write("วันอังคาร");
//     break;

//     case 3 :
//     document.write("วันพุธ");
//     break;

//     case 4 :
//     document.write("วันพฤหัสบดี");
//     break;

//     case 5 :
//     document.write("วันศุกร์");
//     break;

//     case 6 :
//     document.write("วันเสาร์");
//     break;

//     case 7 :
//     document.write("วันอาทิตย์");
//     break;

//     default: 
//      document.write("ไม่ตรงกับเงื่อนไขใดๆ");
//      break;

// }


// for(i = 1 ; i < 5 ; i = i + 1 ){
//     document.write(" สวัสดี ");
//      document.write( i );
// }

// for(i = 1 ; i < 14 ; i = i + 1) {
//     document.write(" อยากกลับบ้าน ");
//     document.write( i );
// }
 
//ฟังก์ชันแบบไม่มีการรับค่า
// function showmessage(){
//     alert("ยินดีต้อนรับ")
// }
// showmessage();//การเรียกใช้งานฟังก์ชัน

//ฟังก์ชันแบบมีการรับค่า
// function cal(number){
//     return document.write(number * 2);
// }
// cal(20);//เรียกใช้งานฟังก์ชัน

// function showname(realname,surname){
//     return document.write(realname + " " + surname)
// }
// showname("นิตยา","ศาลาแดง");

let name = document.getElementById("Test-1");
name.style.color = "red";

function changecolor(){
 let name = document.getElementById("Test-1");
name.style.color = "red";  
name.style.backgroundColor = "yellow";
}

function test(){
    let result = document.querySelector(".Test-2");
    result.setAttribute("class","light");
}

let mode = document.querySelector(".mode");
function drakmode(){
    mode.setAttribute("class","drak");
}

function lightmode(){
    mode.setAttribute("class","light");
}


function changetext(){
    let text = document.getElementById("change-text").value;
    let result = document.getElementById("showtext");

    result.innerHTML = text;
}