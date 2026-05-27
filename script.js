function generatePortfolio(){

    let name =
        document.getElementById("name").value;

    let about =
        document.getElementById("about").value;

    let skills =
        document.getElementById("skills").value;

    let project =
        document.getElementById("project").value;

    let github =
        document.getElementById("github").value;

    document.getElementById("previewName").innerText =
        name || "Your Name";

    document.getElementById("previewAbout").innerText =
        about || "About section here.";

    document.getElementById("previewProject").innerText =
        project || "Project Name";

    let skillContainer =
        document.getElementById("previewSkills");

    skillContainer.innerHTML = "";

    let skillArray = skills.split(",");

    skillArray.forEach(skill => {

        let span =
            document.createElement("span");

        span.innerText = skill.trim();

        skillContainer.appendChild(span);

    });

    let githubButton =
        document.getElementById("previewGithub");

    githubButton.href = github || "#";
}

document.getElementById("imageUpload")
.addEventListener("change", function(event){

    let reader = new FileReader();

    reader.onload = function(){

        document.getElementById("previewImage").src =
            reader.result;
    }

    reader.readAsDataURL(
        event.target.files[0]
    );

});

const text =
    "Build. Create. Inspire.";

let index = 0;

function typeEffect(){

    if(index < text.length){

        document.querySelector(".typing-text")
        .innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,100);
    }

}

typeEffect();

function toggleTheme(){

    document.body.classList.toggle("light-mode");
}

function downloadPortfolio(){

    html2canvas(
        document.querySelector(".portfolio-card")
    ).then(canvas => {

        let link =
            document.createElement("a");

        link.download = "portfolio.png";

        link.href = canvas.toDataURL();

        link.click();

    });

}