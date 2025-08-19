document.getElementById("registrationForm").addEventListener("submit",function(e){
    e.preventDefault();
    
    //Simulating successful registration
    const successMessage=document.getElementById("successMessage");
    successMessage.classList.remove("hidden");
    
    //Reseting the form 
    this.reset();
});