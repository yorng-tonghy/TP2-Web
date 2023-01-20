let uploadButton = document.getElementById("upload-button");
let fileName = document.getElementById("file-name");
let chosenImg = document.getElementById("chosenImg");
uploadButton.onchange = ()=>{
    let reader = new FileReader;
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = ()=>{
        chosenImg.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
}
// let wrapper = document.getElementById("wrapper");
// // const height = document.getElementById("chose");
// if(chosenImg.style.height<="30rem"){
//     chosenImg.style.height==wrapper.style.height;
// }else{

// }
