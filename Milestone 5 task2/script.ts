//listing element
document.getElementById('Resume-form')?.addEventListener('submit',function(event){
    event.preventDefault();

//type assertion;


const nameElement=document.getElementById('name') as HTMLInputElement;
const emailElement=document.getElementById('email') as HTMLInputElement;
const phoneElement=document.getElementById('phone') as HTMLInputElement;
const educationElement=document.getElementById('education') as HTMLInputElement;
const experienceElement=document.getElementById('experience') as HTMLInputElement;
const skillsElement=document.getElementById('skills') as HTMLInputElement;


const usernameElement=document.getElementById("username") as HTMLInputElement


if(nameElement 
     
&& emailElement && 
phoneElement && 
experienceElement && 
skillsElement )



    

    {

    const name=nameElement.value;
    const email=emailElement.value;
    const phone=phoneElement.value;
    const education=educationElement.value;
    const experience=experienceElement.value;
    const skills=skillsElement.value;
   

















    //create resume output:

    const resumeoutput=`
    
    <h2>Resume<h2>

    
    <p><strong>Name:</strong><span id="edit-name" class="editable"> ${name}</span> </p>
    <p><strong>Email:</strong><span id="edit-edit" class="editable"> ${email}</span> </p>
    <p><strong>Phone:</strong><span id="edit-phone" class="editable"> ${phone}</span> </p>
    <h3>Education<h3>
    <p id="edit-education" class="editable"> ${education} </p>

<h3>Experience<h3>
    <p id="edit-experience" class="editable"> ${experience} </p>

    <h3>skills<h3>

    <p id="edit-skills" class="editable"> ${skills} </p>`;

    const resumeoutputElement=document.getElementById("resumeoutput");
    if(resumeoutputElement){
        resumeoutputElement.innerHTML=resumeoutput
        resumeoutputElement.classList.remove("hidden")
        //create container for button
        const buttoncontainer=document.createElement("div");
        buttoncontainer.id="buttoncontainer";
        resumeoutputElement.appendChild(buttoncontainer);

        //add download pdf button

        const downloadButton=document.createElement("button");
        downloadButton.textContent="Download PDF";
        downloadButton.addEventListener("click",()=>{
            window.print()
        });
        buttoncontainer.appendChild(downloadButton);
        //shareable link button
        const shareableButton=document.createElement("button");
        shareableButton.textContent="copy shareable link";
        shareableButton.addEventListener("click",async()=>{
            try{
                const shareablelink=`https://yourdomain.com/resumes/${name.replace(/\s+/g,'_')}_cv.html`;
                //use clipboard api
                await navigator.clipboard.writeText(shareablelink);
                alert("shareable link copied to clipboard!");
            }catch(error){
                console.error("failed to copy link:",error);
                alert("failed to copy link to clipboard, please tyr again")
            }

        });
        buttoncontainer.appendChild(shareableButton);
    }else{
        console.error("Resume output container not found")
        
    }
}else{
    console.error("form element are missing")
    
}
        
    
    }
    
//resume output






    
        
    
    


            
           


               



    
)

