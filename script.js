console.log("script running...")
document.querySelector('.cross').style.display='none';
document.querySelector('.togglee').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');

})