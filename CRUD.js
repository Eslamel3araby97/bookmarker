var siteName = document.getElementById("name")
var siteLink = document.getElementById("link")




if(localStorage.getItem("sites") != null){
    sitesList= JSON.parse(localStorage.getItem("sites"))
    displaysites(sitesList)
}else{
    sitesList=[]
}


function addSite(){
    site= {
        name: siteName.value,
        link: siteLink.value
    }

    if( linkvalidation() == true &&nameValidation() == true){
        sitesList.push(site);
        displaysites(sitesList);
        clearform()
        localStorage.setItem("sites",JSON.stringify(sitesList))
        
        
    }else{
        document.getElementById("errorpage").classList.replace("d-none","d-flex")
        
    }
   

    
}

function closeerror(){
    document.getElementById("errorpage").classList.replace("d-flex","d-none")
}


function displaysites(list){
    cartona = ""
    for (var i = 0; i < list.length; i++) {
        cartona += 
         ` 
         <tr>
         <td>${i}</td>
         <td>${list[i].name}</td>
         <td> <button class="btn btn-success" onclick="visitsite(${i})"><i class="fa-solid fa-eye text-white"></i> Visit</button> </td>
         <td>  <button class="btn btn-danger" onclick="deletesite(${i})"><i class="fa-solid fa-trash-can text-white"></i> Delete</button></td>
     </tr>
    
    `

   
    }

    document.getElementById("data").innerHTML=cartona

}

function deletesite(index){
    sitesList.splice(index, 1)
    displaysites(sitesList);
    localStorage.setItem("sites",JSON.stringify(sitesList))
}


function clearform(){
    siteName.value=''
    siteLink.value=''

}


function linkvalidation(){

    var regex =/^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

    if(regex.test(siteLink.value) == true){
        return true
        
    }else{
        return false
    }


    
}




function oninputvalidation(){

var regex =/^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;


if(regex.test(siteLink.value) == true){
    siteLink.classList.replace("is-invalid","is-valid")
    // document.getElementById("addsite").classList.replace("disabled","enabled")
    document.getElementById("linkerroe").classList.replace("d-block","d-none")

}else{
    siteLink.classList.add("is-invalid")
    // document.getElementById("addsite").classList.add("disabled")
    document.getElementById("linkerroe").classList.replace("d-none","d-block")
    

}

}

function nameValidation(){
    var regex = /\w{3,}/
     return regex.test(siteName.value)

}

function oninputvalidationName(){
    var regex = /\w{3,}/

    if(regex.test(siteName.value) == true){
    siteName.classList.replace("is-invalid","is-valid")
    document.getElementById("nameError").classList.replace("d-block","d-none")

}else{
    siteName.classList.add("is-invalid")
    document.getElementById("nameError").classList.replace("d-none","d-block")

}

}



function visitsite(h){
    console.log(h);
    window.open(sitesList[h].link,"-blank")
}















// another method
// function linkvalidation(){

// var regex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z0-9]+(\/[a-zA-Z0-9#]+\/?)*\.(com|net).{0,}$/


// if(regex.test(siteLink.value) == true){;
//     siteLink.classList.replace("is-invalid","is-valid")
//     document.getElementById("addsite").classList.replace("disabled","enabled")
//     document.getElementById("linkerroe").classList.replace("d-block","d-none")

// }else{
//     siteLink.classList.add("is-invalid")
//     document.getElementById("addsite").classList.add("disabled")
//     document.getElementById("linkerroe").errorpage.replace("d-none","d-block")
//     )

// }

// }
