'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModel=document.querySelector('.close-modal');
const btnOpenModel=document.querySelectorAll('.show-modal');// to select same class element (multiple selection).

//console.log(btnOpenModel);

//function area
const openModel=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModel=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i<btnOpenModel.length; i++) 
{
    //console.log(btnOpenModel[i].textContent);//text content on console
    btnOpenModel[i].addEventListener('click',openModel); 
    // function(){
    //     //console.log("btn clicked");
    //     modal.classList.remove('hidden');// we can add multiple properties with ('property1','property2','property3')
    //     overlay.classList.remove('hidden');

    // });

    btnCloseModel.addEventListener('click',closeModel);
    // {
    //     //closeModel();
    //     // modal.classList.add('hidden');
    //     // overlay.classList.add('hidden');
    // };

    overlay.addEventListener('click',closeModel);
    /* {
         //closeModel();
        // modal.classList.add('hidden');
        // overlay.classList.add('hidden');
    };*/
   
}

document.addEventListener('keydown', function(e) {
    /* keypress method to use if provide parameter
    to property it tell you which key is press by an object*/
    //console.log("key is press");
   // console.log(e); object with key document 
   //console.log(e.key);//key name show 

      if (e.key =='Escape' && !modal.classList.contains('hidden'))// put your key name in ''
      {
         //console.log("escape key is press");
        //  if(!modal.classList.contains('hidden'))
        //  {
        //     // to check modal conatain  class or not
        //     closeModel();
        //  }
        closeModel();
      }
});