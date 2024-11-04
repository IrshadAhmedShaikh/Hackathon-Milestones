var _a;
//listing element
(_a = document.getElementById('Resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion;
    var profilepictureinput = document.getElementById('profilepicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById("username");
    if (profilepictureinput && nameElement && emailElement && phoneElement && experienceElement && skillsElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resume/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        var profilepicturefile = (_a = profilepictureinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : '';
        //create resume output:
        var resumeoutput = "\n    \n    <h2>Resume<h2>\n\n    ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"profile picture\" class=\"profilepicture\">") : '', "\n    <p><strong>Name:</strong><span id=\"edit-name\" class=\"editable\"> ").concat(name_1, "</span> </p>\n    <p><strong>Email:</strong><span id=\"edit-edit\" class=\"editable\"> ").concat(email, "</span> </p>\n    <p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span> </p>\n    <h3>Education<h3>\n    <p id=\"edit-education\" class=\"editable\"> ").concat(education, " </p>\n\n<h3>Experience<h3>\n    <p id=\"edit-experience\" class=\"editable\"> ").concat(experience, " </p>\n\n    <h3>skills<h3>\n\n    <p id=\"edit-skills\" class=\"editable\"> ").concat(skills, " </p>");
        var downloadLink = document.createElement('a');
        downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeoutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download your 2024 Resume";
        //resume output
        var resumeoutputElement = document.getElementById('resumeoutput');
        if (resumeoutputElement) {
            resumeoutputElement.innerHTML = resumeoutput;
            resumeoutputElement.appendChild(downloadLink);
            makeEditable();
        }
        else {
            console.error('the resume output element missing');
        }
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentvalue = currentElement.textContent || '';
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input = document.createElement('input');
                input.type = 'Text';
                input.value = currentvalue;
                input.classList.add('editing-input');
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
