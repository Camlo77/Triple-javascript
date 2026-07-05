let nirvana = document.querySelector("#nirvanaimg")
nirvana.addEventListener('click', function(){
    if(nirvana.style.border == "2px solid rgb(236, 173, 0)"){
        nirvana.style.border = "none"
    }else{
        nirvana.style.border = "2px solid rgb(236, 173, 0)"
    }
})