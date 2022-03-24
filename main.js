
canvas = document.getElementById("my_Canvas"); 
ctx = canvas.getContext("2d"); 


background_image="download.jpg" 
car_width = 150; 
car_height = 90;  
car_x = 10; 
car_y = 40; 
car_image = "car1.png"; 


car2_width = 150; 
car2_height = 90;  
car2_x = 10; 
car2_y = 10; 
car2_image = "CAR2.png"; 


function Add() 
{
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground ; 
    background_imgTag.src = background_image; 

    car_imgTag = new Image(); 
    car_imgTag.onload = uploadcar();
    car_imgTag.src = car_image; 

    car2_imgTag = new Image(); 
    car2_imgTag.onload = uploadcar2();
    car2_imgTag.src = car2_image; 
    
} 

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height); 
} 
function uploadcar() 
{
    ctx.drawImage(car_imgTag, car_x,car_y, car_width, car_height); 

} 
function uploadcar2() 
{
    ctx.drawImage(car2_imgTag, car2_x,car2_y, car2_width, car2_height); 

} 
window.addEventListener("keydown", my_keydown); 

function my_keydown(e)
{
    keyPressed = e.keyCode; 
    console.log(keyPressed); 

    if(keyPressed == '38') { 
    up(); 
    console.log("up");  
}
if (keyPressed == '40') {
    down(); 
    console.log("down"); 
} 
if (keyPressed == '37') {
    left(); 
    console.log("left"); 
}  
if (keyPressed == '39') {
    right(); 
    console.log("right"); 
}  
if(keyPressed == '87') { 
    w(); 
    console.log("w");  
}
if (keyPressed == '83') {
    s(); 
    console.log("s"); 
} 
if (keyPressed == '65') {
    a(); 
    console.log("a"); 
}  
if (keyPressed == '68') {
    d(); 
    console.log("d"); 
}  


} 
function up() 
{
    if (car_y >= 0 ) {
        car_y = car_y-10; 
        console.log("when up arrow is pressed, x=" + car_x + "y="+ car_y ); 
        uploadBackground(); 
        uploadcar(); 
    }
}  
function down() 
{
    if (car_y <= 500 ) {
        car_y = car_y+10; 
        console.log("when down arrow is pressed, x=" + car_x + "y="+ car_y ); 
        uploadBackground(); 
        uploadcar(); 
    }
}  
function left() 
{
    if (car_x >= 0 ) {
        car_x = car_x-10; 
        console.log("when left arrow is pressed, x=" + car_x + "y="+ car_y ); 
        uploadBackground(); 
        uploadcar(); 
    }
}  
function right() 
{
    if (car_x <= 700 ) {
        car_x = car_x+10; 
        console.log("when right arrow is pressed, x=" + car_x + "y="+ car_y ); 
        uploadBackground(); 
        uploadcar(); 
    }
} 





function w() 
{
    if (car2_y >= 0 ) {
        car2_y = car2_y-10; 
        console.log("when w key is pressed, x=" + car2_x + "y="+ car2_y ); 
        uploadBackground(); 
        uploadcar2(); 
    }
}  
function s() 
{
    if (car2_y <= 500 ) {
        car2_y = car2_y+10; 
        console.log("when s key is pressed, x=" + car2_x + "y="+ car2_y ); 
        uploadBackground(); 
        uploadcar2(); 
    }
}  
function a() 
{
    if (car2_x >= 0 ) {
        car2_x = car2_x-10; 
        console.log("when a key is pressed, x=" + car2_x + "y="+ car2_y ); 
        uploadBackground(); 
        uploadcar2();
    } 
}
function d() 
{
    if (car2_x <= 700 ) {
        car2_x = car2_x+10; 
        console.log("when a key is pressed, x=" + car2_x + "y="+ car2_y ); 
        uploadBackground(); 
        uploadcar2(); 
    }
} 