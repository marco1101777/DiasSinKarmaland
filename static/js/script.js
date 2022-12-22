const $ = sel => document.querySelector(sel)  , $$ =  sel => document.querySelectorAll(sel) , id = ID  => document.getElementById(ID) , len = size => size.length  
const URLIMGSRC = [
    "https://twitter.com/MovistareSports/status/1605652849689563160/photo/1",    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDcz0g-FkrqcijCEd7e2Pu7PkRTE5Dy0vFCQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDnIHG4vKd1IvJD6Pi-yj2VBoeZM_uYazpQ&usqp=CAU",
    "https://pbs.twimg.com/media/Fkh1P4mUYBYsR7c?format=jpg&name=small",
    "https://pbs.twimg.com/media/FkhEt7qXwAImUYf?format=jpg&name=small",
    "https://twitter.com/MovistareSports/status/1605652849689563160/photo/2",
    "https://twitter.com/MovistareSports/status/1605654365917675520/photo/3",
    "https://pbs.twimg.com/media/FkhszUAXEBQ-6QK?format=jpg&name=small",
    "https://pbs.twimg.com/media/Fkhv_GVX0AAB1qD?format=jpg&name=small",

] ;

const  $root = id('root') 
const styleRoot = `
    font-size:50px;
    animation:pulso 2s linear infinite;
    text-shadow:3px 0px  0px white ;
    ` ; 
const $imgFondo = id("fondo")  
const styleFodno = `
    position:absolute;
    height:100%;
    width:100%;
    z-index:-1;
` ; 
const getRandomImg =  () => {
    return   URLIMGSRC[Math.floor(Math.random() * len(URLIMGSRC))] ; 
}



const getDiasSinKarmaland = () => {
    // formato año/mes/dia 
    let hoy = new Date(); 
    let  hoyParse = (`${hoy.getFullYear()}-${hoy.getUTCMonth() + 1}-${hoy.getDate()}`)   
    let fechaInicio = new Date('2022-12-21').getTime();
    let fechaFin    = new Date(hoyParse).getTime();
    let diff = (fechaFin - fechaInicio) / (1000*60*60*24);
    return  diff ; 
}

function  root(content){
        $root.innerHTML = `<div style = "${styleRoot}">${content}<div>` ;  
}


function  main(){
    let cuantos = getDiasSinKarmaland() ;
    root(cuantos)  ;  
    changeBack()
      
}

function changeBack(){
    let imgSRC = getRandomImg()
    $imgFondo.src = imgSRC ; 
    setTimeout(changeBack,1000) ; 
}

main()