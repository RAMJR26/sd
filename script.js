const hearts=document.querySelector(".hearts");

for(let i=0;i<70;i++){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=
    10+Math.random()*30+"px";

    heart.style.animationDuration=
    5+Math.random()*10+"s";

    heart.style.animationDelay=
    Math.random()*10+"s";

    hearts.appendChild(heart);

}
// Animación de aparición del árbol

const tree = document.querySelector(".trunk");

tree.animate(
[
    {
        transform:"translateX(-50%) scaleY(0)"
    },
    {
        transform:"translateX(-50%) scaleY(1)"
    }
],
{
    duration:1200,
    easing:"ease-out",
    fill:"forwards"
});
/* ===========================
      COPA REALISTA
=========================== */

const flowers = document.getElementById("flowers");

const centerX = 450;
const centerY = 180;

const scale = 12;

const emojis = [
    "🌼",
    "🌸",
    "✿",
    "❀",
    "🌺"
];

const leaves = [
    "🍃",
    "🌿"
];

for(let i=0;i<1500;i++){

    const t=Math.random()*Math.PI*2;
    const r=Math.sqrt(Math.random());

    let x=16*Math.pow(Math.sin(t),3);

    let y=
        13*Math.cos(t)
        -5*Math.cos(2*t)
        -2*Math.cos(3*t)
        -Math.cos(4*t);

    x*=r;
    y*=r;

    const flower=document.createElement("div");

    flower.className="flower";

    if(Math.random()<0.18){

        flower.innerHTML=
            leaves[Math.floor(Math.random()*leaves.length)];

    }else{

        flower.innerHTML=
            emojis[Math.floor(Math.random()*emojis.length)];

    }

    const size=10+Math.random()*10;

    flower.style.fontSize=size+"px";

    flower.style.left=
        centerX+x*scale+(Math.random()*8-4)+"px";

    flower.style.top=
        centerY-y*scale+(Math.random()*8-4)+"px";

    flower.style.animationDelay=
        Math.random()*2+"s";

    flower.style.rotate=
        Math.random()*360+"deg";

    flowers.appendChild(flower);

}
/*==========================
      RAMAS INTERNAS
==========================*/

const tree=document.getElementById("tree");

for(let i=0;i<24;i++){

    const b=document.createElement("div");

    b.className="miniBranch";

    b.style.left=(430+Math.random()*40)+"px";

    b.style.bottom=(210+Math.random()*150)+"px";

    b.style.height=(70+Math.random()*90)+"px";

    b.style.rotate=(Math.random()*140-70)+"deg";

    tree.appendChild(b);

}
/*=================================
          PÉTALOS
=================================*/

const petalIcons=[
    "🌸",
    "❀",
    "✿"
];

function createPetal(){

    const p=document.createElement("div");

    p.className="petal";

    p.innerHTML=
        petalIcons[
            Math.floor(Math.random()*petalIcons.length)
        ];

    p.style.left=
        (320+Math.random()*260)+"px";

    p.style.top=
        (120+Math.random()*120)+"px";

    p.style.animationDuration=
        (4+Math.random()*4)+"s";

    p.style.fontSize=
        (12+Math.random()*10)+"px";

    document.getElementById("tree").appendChild(p);

    setTimeout(()=>{

        p.remove();

    },8000);

}

setInterval(createPetal,220);