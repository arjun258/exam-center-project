let centers = ['Delhi', 'Mumbai','Gujarat','SpaceX']
let database = []

function provide(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let emailValid = document.getElementById('email')
    let random = Math.floor(Math.random()*4)
    if(!email=="" && !name == ""){
        if(!emailValid.checkValidity()){
            
            errorCheck("Please enter a valid email")
        }
        else{
            let isEmailExist = database.filter((user)=>{
                return user.email == email
                
            })
 
            if(isEmailExist == ""){
                let tempdata = {
                    name:name,
                    email:email,
                    center : centers[random]
                };

                database.push(tempdata)
                
                showData()
            }
            else{
                
                errorCheck("User already Exists")
            }
            
        }
    }
    else{
        errorCheck("Please Enter All Values")
    }
}

showData = ()=>{
    let outputContainer = document.getElementById("output-container")
    
    outputContainer.innerHTML = ""
    let heading = document.createElement("h2")
    heading.innerText = "Output"
    outputContainer.appendChild(heading)


    database.map((user)=>{
        let outputField = document.createElement("div")
        
        outputField.classList.add("output-field")

        let nameElement = document.createElement("p")
        nameElement.innerText = user.name

        let emailElement = document.createElement("p")
        emailElement.innerText = user.email

        let centerElement = document.createElement("p")
        centerElement.innerText = user.center

        outputContainer.appendChild(outputField)

        outputField.appendChild(nameElement)
        outputField.appendChild(emailElement)
        outputField.appendChild(centerElement)

        
    })
    
}

errorCheck = (x)=>{
    let headerh1 = document.getElementById("headerh1")
    headerh1.classList.add("animationUp")
    let header = document.getElementById("header")
    let alert = document.createElement("div")
    alert.classList.add("alert")
    let h2 = document.createElement("h2")
    h2.innerText = x
    alert.appendChild(h2)
    header.appendChild(alert)

    setTimeout(() => {
        header.removeChild(alert)
        headerh1.classList.remove("animationUp")
        
    }, 4000);

}
