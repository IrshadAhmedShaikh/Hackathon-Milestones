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


if( nameElement && emailElement && phoneElement && experienceElement && skillsElement &&



    usernameElement
)
    {

    const name=nameElement.value;
    const email=emailElement.value;
    const phone=phoneElement.value;
    const education=educationElement.value;
    const experience=experienceElement.value;
    const skills=skillsElement.value;
    const username=usernameElement.value;
    const uniquePath=`resume/${username.replace(/\s+/g, '_')}_cv.html`


















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

    const downloadLink=document.createElement('a')
    downloadLink.href=`data:text/html;charset=utf-8,` + encodeURIComponent(resumeoutput)
    downloadLink.download=uniquePath;
    downloadLink.textContent=`Download your 2024 Resume`

    
//resume output






    const resumeoutputElement=document.getElementById('resumeoutput')
    if (resumeoutputElement){
        
        resumeoutputElement.innerHTML=resumeoutput;


    resumeoutputElement.appendChild(downloadLink)
        makeEditable();
        
        
    }
    
else{
        console.error('the resume output element missing')}
    

}

});

function makeEditable(){
    const editableElements=document.querySelectorAll('editable');
    editableElements.forEach(element =>{
        element.addEventListener('click',function(){
            const currentElement=element as HTMLElement;
            const currentvalue=currentElement.textContent ||'';
            
            if(currentElement.tagName==="p" || currentElement.tagName==='SPAN'){
                const input=document.createElement('input')
                input.type='Text'
                input.value=currentvalue
                input.classList.add('editing-input')


               



                currentElement.style.display= 'none'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()
            }


    
        })
    })
}

