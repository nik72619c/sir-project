window.addEventListener("load",()=>{

doAjax();

});

window.addEventListener("scroll",tellY);

var scroller;
var checker=0;
var maindivs=[];
var k=2;
function tellY(){


    
    scroller=window.pageYOffset;
    console.log(scroller);

    if(scroller>=checker && k<maindivs.length){

        if(k%2!=0){
        maindivs[k].style.opacity="1";

        console.log("k is",k);
        maindivs[k].className+=" anim2";
        }
        else{
            maindivs[k].style.opacity="1";

            console.log("k is",k);
            maindivs[k].className+=" anim3";
        }
       
         k++;
         checker+=maindivs.length*50;

    }


    
    
}
function doAjax(){

var xml=new XMLHttpRequest();
xml.open("GET","posts.json");
xml.onreadystatechange= function(){

    if(xml.readyState==4 && xml.status==200){

        getPost(xml.responseText);
    }
}

xml.send(null);

}

function getPost(json){

    var jsonarr=JSON.parse(json);
     console.log(jsonarr);

     jsonarr.forEach(element => {
         maindivs.push(createPost(element));


     });

     maindivs[0].style.opacity="1";
     maindivs[0].className+=" anim2";

     maindivs[1].style.opacity="1";
     maindivs[1].className+=" anim3";
    

}
var i=0;
function createPost(element){

    var body=document.getElementsByTagName("body");
     div=document.createElement("div");
    div.className="post container";
    div.style.opacity="0";
    body[0].appendChild(div);

    var heading=document.createElement("h2");
heading.innerHTML=element.heading;
heading.className="heading";
div.appendChild(heading);

var subdiv=document.createElement("div");
subdiv.className="subdiv row";
subdiv.id=i;
div.appendChild(subdiv);

var anotherdiv=document.createElement("div");
anotherdiv.className="anotherdiv";

var a=document.createElement("a");
a.href="";
a.className="link";

var img=document.createElement("img");
img.className="image";
img.src=element.image;
a.appendChild(img);
anotherdiv.appendChild(a);
subdiv.appendChild(anotherdiv);

var citediv=document.createElement("div");
citediv.className="citediv";
var cite=document.createElement("cite");
cite.innerHTML="written by abc";
citediv.appendChild(cite);
cite.innerHTML="<i class='fa fa-pencil-square-o' aria-hidden='true'></i> &nbsp; posted by abc &nbsp; &nbsp; <i class='fa fa-comment' aria-hidden='true'></i>0";
subdiv.appendChild(citediv);

var para=document.createElement("p");
para.className="para";
para.innerHTML=element.para;
// para.innerHTML+="<br>";
para.innerHTML+="<a class='reademore' href='#'>READ MORE</a>";
subdiv.appendChild(para);

i++;

return div;

}



