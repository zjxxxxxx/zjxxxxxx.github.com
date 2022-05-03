// 实验3
//点击p1对象，其字体颜色变成红色//
p1.addEventListener('click',f1)

function f1() {
  p1.style.color = 'red';
}

//点击P2，将h1内容变成当前的日期，格式为yyyy-mm-dd//
const p2 = document.getElementsByClassName('m-item-3').item(1);
p2.addEventListener("click",f2) 

function f2() {
  var date = new Date();
  var seperator = "-";
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var nowdate = date.getDate();
  if(month >= 1 && month <= 9) {
    month = "0" +month;
  }
  if(nowdate >= 0 && nowdate <= 9) {
    nowdate = "0" + nowdate;
  }

  //var currentdate = year+seperator+month+seperator+nowdate;
    document.getElementsByTagName("h1").item(0).innerHTML=year+seperator+month+seperator+nowdate;
}

//点击p3，将其父对象的li元素增加fn-active类//
const p3 = document.getElementsByClassName('m-item-3').item(2);
p3.addEventListener('click',f3) 

function f3() {
  var par = p3.parentNode;
  par.classList.add("fn-active");
}

//点击p4，删除表格的p8元素//
const p4 = document.getElementsByClassName('m-item-3').item(3);
const p8 = document.getElementsByClassName('m-item-3').item(7);
p4.addEventListener('click',f4)

function f4() {
  var parent = p8.parentNode;
  parent.removeChild(p8);
}

//点击p5,打开一个新窗口显示淘宝主页//
const p5 = document.getElementsByClassName('m-item-3').item(4);
p5.addEventListener('click',f5)

function f5() {
  window.open("https://www.taobao.com/")
}

//点击p6，在ul的最后添加一个li元素，内容是p9//
const p6 = document.getElementsByClassName('m-item-3').item(5);
p6.addEventListener('click',f6)

function f6() {
  var u = p6.parentNode;
  var createLi = document.createElement("Li");
  var text = document.createTextNode("p9");
  createLi.appendChild(text);
  u.appendChild(createLi);
}

//点击li对象，弹出alert对话框显示当前点击li的序号//
// const lli = document.getElementsByClassName('m-item-3').getElementsByTagName('Li');
const lli = document.getElementsByClassName('m-item-3');
for(var i=0 ; i < lli.length ; i ++ ){
    lli[i].setAttribute('index',i+1);
    lli[i].onclick = function() {
      alert(this.getAttribute('index'));
    }
}

//点击p7对象,将 m-box 的宽度设置到屏幕宽度;
const p7 = document.getElementsByClassName('m-item-3').item(6);
p7.addEventListener('click',f7)

function f7() {
  document.getElementsByClassName('m-box-3').item(0).style.width = window.screen.width+'px';
}

// 实验8
// 第一个作业（jQ）
$(function(){  
    $(".pic-8").click(function(){  
        var _this = $(this); 
        imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);  
    });  
});  
 
function imgShow(outerdiv, innerdiv, bigimg, _this){  
    var src = _this.attr("src"); 
    $(bigimg).attr("src", src);      

    $("<img/>").attr("src", src).load(function(){   
        var realWidth = this.width; 
        var realHeight = this.height;
        var scale = 0.2;  
        var bigWidth = realWidth*scale;
        var bigHeight = realHeight*scale;

        $(bigimg).css("width",bigWidth);
        $(bigimg).css("height",bigHeight);

        var bwidth = ($("#outerdiv").width());
        var bheight = ($("#outerdiv").height());

        var leftside = (bwidth-bigWidth)/2.2;  
        var topside = (bheight-bigHeight)/4;

        $(innerdiv).css({"top":topside, "left":leftside});
        $(outerdiv).show();
    });  
          
        $(outerdiv).click(function(){//消失
            $(this).hide(); 
        });  
}

//第一个作业（js）
var lis=document.getElementById('jss1').getElementsByTagName('img');
var box=document.getElementById('js1');
    for(var i=0;i<lis.length;i++){
           lis[i].onclick=function fc(e){
            var  newDiv=document.createElement('div');
                 newDiv.className='bg-8';
                 box.appendChild(newDiv);

            var  newImg=document.createElement('img');
                 newImg.className='maxpic-8';
                 newImg.src = e.currentTarget.getAttribute("src");
                 box.appendChild(newImg);

              newDiv.onclick=function(){
                box.removeChild(newDiv);
                box.removeChild(newImg);
              }

           }

    }

// 第二个作业jQ
function hn(){
  $('.menu-8:first-child').trigger("click");
}

$(document).ready(function(){
  window.onload=hn;
})

$('.menu-8').click(function(){
    $(this).parent().next().children().eq(
      $(this).index()).show().siblings().hide();
 })

$('.menu-8').click(function(){
  $('.menu-8').css("background",'#fff');
  $(this).css("background",'#ccc');
 })

// 第二个作业js
var aLi = document.getElementsByClassName('menu2-8');
var adivs = document.getElementsByClassName('content2-8');
var view = document.getElementById('no1');

for(var i=0;i<aLi.length;i++){
  aLi[i].index=i;
  aLi[i].onclick = function(){
    for(var f=0;f<aLi.length;f++){
      if(f==this.index){
        aLi[f].style.background ='#ccc';
        adivs[f].style.display = 'block';
        view.style.display = 'none';

      }else{
        aLi[f].style.background ='#fff';
        adivs[f].style.display = 'none';
        view.style.display = 'none';
      }
    }
  }
}

// 第三个作业js
// 删除行
function del(obj){
  var tr = obj.parentNode.parentNode;
  tr.parentNode.removeChild(tr);
  numCheck();
}

// 添加行
var btn = document.getElementById('addd');

btn.onclick = function(){
  var num = document.getElementById('table').getElementsByTagName('tr').length;
  var tab = document.getElementById('table');
  var trr=document.createElement('tr');
  var xl=document.createElement('td');
  var xm=document.createElement('td');
  var xr=document.createElement('td');
  var nbtn = document.createElement('button');
  nbtn.innerHTML = 'delete';
  nbtn.setAttribute('onclick','del(this)');

  xl.innerHTML=num+1;

  trr.appendChild(xl);
  trr.appendChild(xm); 
  xr.appendChild(nbtn);
  trr.appendChild(xr);
  tab.appendChild(trr);
  trr.className = "xvhao";

}

// 改变序号
function numCheck() {
  var hang = document.getElementById('table').getElementsByTagName('tr');
  var xvhao = [];
  var s=1;
  var hangshu = hang.length;
  for(i=0;i<hangshu;i++){
    xvhao[i]=i+1;
  }
  for(i=0;i<hangshu;i++){  
    document.getElementById('table').rows[i].cells[0].innerHTML=xvhao[i];
  }
}

// 第三个作业jQ
// 改变序号
var index =1;
var newindex;
$(".order-8").each(function(){
  newindex=$(this).html(index++);
})

// 删除行
$(function(){
    $("#tab3-2").on("click",".delbtn-8",function(){
      $(this).parent().parent().remove(); 
            index=1;
            $(".order-8").each(function(){
            $(this).html(index++);
        })
    })  
});

// 增加行
$(function(){  
    $(".addbtn-8").click(function(){
      $("#tab3-2").append("<tr><td><span class=\"order-8\"></span></td><td></td><td><button class=\"delbtn-8\">delete</button></td></tr>")
    var index =1;
    var newindex;
    $(".order-8").each(function(){
    newindex=$(this).html(index++);
     }) 
  })   
});
            
          
