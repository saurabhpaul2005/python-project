let head =document.getElementById("head")
let input =document.getElementById("input")
let b= document.getElementById("button")
let img= document.getElementById("qrImage")
size_ofqr=document.getElementById("size_ofqr")
// -----css----
head.classList.add("text-3xl","font-bold","text-black","text-center","m-20","bg-red-300", "w-80","rounded-full")
input.classList.add("text-xl","m-2","text-right","bg-blue-300","text-black","h-12","rounded-lg","ml-20","mr-2","placeholder:text-white", "p-2")
size_ofqr.classList.add("text-xl","text-center","w-20","mr-1","bg-blue-300","text-black","h-12","rounded-lg","placeholder:text-white","pl-1")
b.classList.add("text-2xl","m-5","text-black","border-2","ml-20","border-black", "rounded-full","bg-green-300","p-2")
img.classList.add("ml-20")

let icon0='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-scan preview-icon"><path d="M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M16 14a2 2 0 0 0-2 2"/><path d="M16 22a2 2 0 0 1-2-2"/><path d="M20 14a2 2 0 0 1 2 2"/><path d="M20 22a2 2 0 0 0 2-2"/></svg>'
b.innerHTML=icon0
// ----button----
b.addEventListener("click",function(){
    // -----fetch the data------
    fetch("http://127.0.0.1:8000/generate",{
        method: "POST",
        headers:{ "Content-type":"application/json"},
        body: JSON.stringify({
            text: input.value,
            size:size_ofqr.value
        })
})
.then(response=>response.blob())  //recieve image 
.then(blob=>{img.src=URL.createObjectURL(blob);
})
.catch(error => {
        console.log("Error:", error);
    });
})
input.addEventListener("click", function() {
    input.select();
});
