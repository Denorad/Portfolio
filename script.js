let storedLang = localStorage.getItem("lang");
let frenchFlag = storedLang === null ? true : storedLang === "true";

const en = {
    "Présentation": "About me",
    "Compétences": "Skills",
    "Projets": "Projects",
    "Menu principal": "Home",
    "Bonjour, c'est moi": "Hello, it's me",
    "Outils": "Tools",
    "Programmation": "Programming",
    "Niveau": "Level",
    "Durée": "Duration",
    "Français": "French",
    "Espagnol": "Spanish",
    "Anglais": "English",
    "Langues vivantes": "Spoken languages",
    "Langue": "Language",
    "2 ans": "2 years",
    "3 ans": "3 years",
    "1 ans": "1 year",
    "6 mois": "Six months",
    "1 mois": "1 month",
    "Débutant": "Beginner",
    "Intermédiaire": "Intermediate",
    "Débutant/Intermédiaire": "Beginner/Intermediate",
    "Programmeur depuis deux ans, je suis spécialisé dans la création de site web et de bot discord. Prêt à vous aider n'hésiter pas à me contacter par email.": "Programmer since two years, I am specialized in the making of websites and discord bots. Ready to help you, do not hesitate to contact me.",
    "Niveau:": "Level:",
    "Langues que je connais": "Languages that I know",
    "C2/Natif": "C2/Native",
    "Je suis passioné par la programmation et la création de site web. Toujours motivé pour travailler, au point de prendre sur mon temps personnel afin de terminer un projet.": "I am passionate about programming and web development. Always motivated to work, even to the point of using my personal time to complete a project.",
    "Pourquoi me choisir ?": "Why choose me?",
    "Je m'appelle Alexandre, j'habite en France à Paris. J'aime l'art, la programmation, et le tennis. Je suis un développeur de jeux vidéos, donc j'ai de l'experience dans cette industrie. De plus, depuis 2 ans je fais de la programmation, surtout en Javascript, ainsi si vous avez besoin que je vous crée un site web je suis disponible. J'ai de l'experience avec de nombreux outils, par exemple avec Docker et Node.js.": "My name is Alexandre, I live in France, in Paris. I love art, programming, and tennis. I am a video game developer, so I have experience in this industry. Furthermore, for two years I have been programming, especially in JavaScript, so if you need me to create a website I am available. I have experience with many tools, for example Docker and Node.js.",
    "Curieux": "Curious",
    "Créatif": "Creative",
    "Ambitieux": "Ambitious",
    "Travailleur": "Industrious",
    "Ouvrir le projet": "Open the project",
    "Projet de communication par TCP": "Project on TCP-based communication",
    "Ce projet m'a permis de développer mes compétences en Python, mais surtout d'en apprendre plus sur le multithreading, les sockets et les requêtes TCP. De plus, j'ai pu apprendre à utiliser PyQt, une bibliothèque pour faire des interfaces graphiques.": "This project allowed me to develop my skills in Python, and above all to learn more about multithreading, sockets, and TCP requests. Furthermore, I was able to learn how to use PyQt, a library for building graphical interfaces.",
    "Commentaire": "Comment",
    "Langage de programmation permettant de faire du backend et du frontend, utile pour créer des sites web, des bots...": "Programming language that allows you to do both backend and frontend, useful for creating websites, bots...",
    "Langage de balisage permettant de créer la partie visuel d'un site web.": "Markup language used to create the visual part of a website.",
    "Langage de programmation utilisé pour créer des jeux vidéo, très similaire au Python.": "Programming language used to create video games, very similar to Python.",
    "Langage de programmation très populaire, notamment utilisé pour le machine learning.": "Very popular programming language, notably used for machine learning.",
    "Langage très populaire qui permet de créer des logiciels rapides.": "Very popular language that enables you to create fast software.",
    "Pratique pour faire du pentesting, vérifier qu'un système est bien sécurisé.": "Useful for pentesting, checking that a system is well secured.",
    "Utilisé pour créer des espaces isolés, utile pour les serveurs.": "Used to create isolated environments, useful for servers.",
    "Utilisé pour créer des jeux utilisant Godot.": "Used to create games using Godot.",
    "Utilisé pour mettre des projets en ligne et afin de travailler en équipe.": "Used to put projects online and to work as a team.",
    "Utilisé pour créer des modèles 3D pour des projets.": "Used to create 3D models for projects.",
    "Utile pour tester des fichiers dans un environnement virtuel, afin d'éviter les virus.": "Useful for testing files in a virtual environment to avoid viruses.",
    "Éditeur de code principal que j'ai utilisé lors des dernières années.": "Main code editor I have used in recent years."
};


const fr = {
    "Languages that I know": "Langues que je connais",
    "About me": "Présentation",
    "Skills": "Compétences",
    "Projects": "Projets",
    "Home": "Menu principal",
    "Hello, it's me": "Bonjour, c'est moi",
    "Tools": "Outils",
    "Programming": "Programmation",
    "Level": "Niveau",
    "Duration": "Durée",
    "French": "Français",
    "Spanish": "Espagnol",
    "English": "Anglais",
    "Spoken languages": "Langues vivantes",
    "Language": "Langue",
    "2 years": "2 ans",
    "3 years": "3 ans",
    "1 year": "1 ans",
    "6 months": "6 mois",
    "1 month": "1 mois",
    "Beginner": "Débutant",
    "Intermediate": "Intermédiaire",
    "Beginner/Intermediate": "Débutant/Intermédiaire",
    "Programmer since two years, I am specialized in the making of websites and discord bots. Ready to help you, do not hesitate to contact me.": "Programmeur depuis deux ans, je suis spécialisé dans la création de site web et de bot discord. Prêt à vous aider n'hésiter pas à me contacter par email.",
    "Level:": "Niveau:",
    "C2/Native": "C2/Natif",
    "Languages that I mastered": "Langues que je maîtrise",
    "I am passionate about programming and web development. Always motivated to work, even to the point of using my personal time to complete a project.": "Je suis passioné par la programmation et la création de site web. Toujours motivé pour travailler, au point de prendre sur mon temps personnel afin de terminer un projet.",
    "Why choose me?": "Pourquoi me choisir ?",
    "My name is Alexandre, I live in France, in Paris. I love art, programming, and tennis. I am a video game developer, so I have experience in this industry. Furthermore, for two years I have been programming, especially in JavaScript, so if you need me to create a website I am available. I have experience with many tools, for example Docker and Node.js.": "Je m'appelle Alexandre, j'habite en France à Paris. J'aime l'art, la programmation, et le tennis. Je suis un développeur de jeux vidéos, donc j'ai de l'experience dans cette industrie. De plus, depuis 2 ans je fais de la programmation, surtout en Javascript, ainsi si vous avez besoin que je vous crée un site web je suis disponible. J'ai de l'experience avec de nombreux outils, par exemple avec Docker et Node.js.",
    "Curious": "Curieux",
    "Creative": "Créatif",
    "Ambitious": "Ambitieux",
    "Industrious": "Travailleur",
    "Open the project": "Ouvrir le projet",
    "Project on TCP-based communication": "Projet de communication par TCP",
    "This project allowed me to develop my skills in Python, and above all to learn more about multithreading, sockets, and TCP requests. Furthermore, I was able to learn how to use PyQt, a library for building graphical interfaces.": "Ce projet m'a permis de développer mes compétences en Python, mais surtout d'en apprendre plus sur le multithreading, les sockets et les requêtes TCP. De plus, j'ai pu apprendre à utiliser PyQt, une bibliothèque pour faire des interfaces graphiques.",
    "Comment": "Commentaire",
    "Programming language that allows you to do both backend and frontend, useful for creating websites, bots...": "Langage de programmation permettant de faire du backend et du frontend, utile pour créer des1 sites web, des bots...",
    "Markup language used to create the visual part of a website.": "Langage de balisage permettant de créer la partie visuel d'un site web.",
    "Programming language used to create video games, very similar to Python.": "Langage de programmation utilisé pour créer des jeux vidéo, très similaire au Python.",
    "Very popular programming language, notably used for machine learning.": "Langage de programmation très populaire, notamment utilisé pour le machine learning.",
    "Very popular language that enables you to create fast software.": "Langage très populaire qui permet de créer des logiciels rapides.",
    "Useful for pentesting, checking that a system is well secured.": "Pratique pour faire du pentesting, vérifier qu'un système est bien sécurisé.",
    "Used to create isolated environments, useful for servers.": "Utilisé pour créer des espaces isolés, utile pour les serveurs.",
    "Used to create games using Godot.": "Utilisé pour créer des jeux utilisant Godot.",
    "Used to put projects online and to work as a team.": "Utilisé pour mettre des projets en ligne et afin de travailler en équipe.",
    "Used to create 3D models for projects.": "Utilisé pour créer des modèles 3D pour des projets.",
    "Useful for testing files in a virtual environment to avoid viruses.": "Utile pour tester des fichiers dans un environnement virtuel, afin d'éviter les virus.",
    "Main code editor I have used in recent years.": "Éditeur de code principal que j'ai utilisé lors des dernières années."
};

setLanguage(frenchFlag);

async function loadJson() {
    try {
        const response = await fetch('./config.json');
        const json = await response.json();
        return json;
    }
    catch (e) {
        console.log(e)
    }
}

loadJson().then(configuration => {
    if (!configuration) {
        return;
    }
    if (window.location.pathname.endsWith('/index.html')) {
        let txt = "";
        if (frenchFlag) {
            txt = "français"
        }
        else {
            txt = "anglais"
        }

        if (configuration.imageHome) {
            document.getElementById("homeImg").src = configuration["imageHome"];
        }
            if (configuration.name) {
            document.getElementById("username").textContent = configuration["name"];
        }
        if (configuration.email) {
            document.querySelectorAll("a[email]").href = "mailto:" + configuration["email"];
            console.log("Ready to send an email to: ", configuration["email"]);
            document.getElementById("emailWrittenAdress").textContent = configuration.email
        }
        if (configuration.twitter) {
            document.getElementById("twitter").href = configuration["twitter"];
        }
        if (configuration.github) {
            document.getElementById("github").href = configuration["github"];
        }

        document.getElementById("petitePrésentation").textContent = configuration["presentationPagePrincipale"][txt]
        en[configuration["presentationPagePrincipale"]["français"]] = configuration["presentationPagePrincipale"]["anglais"];
        fr[configuration["presentationPagePrincipale"]["anglais"]] = configuration["presentationPagePrincipale"]["français"];
    }
    if (window.location.pathname.endsWith('/about.html')) {
        if (configuration.picture) {
        document.getElementById("picture").src = configuration["picture"];
        console.log("charging the picture")
        }
    }

    if (window.location.pathname.endsWith('skills.html')) {
        if (configuration.competences) {
            skills = configuration["competences"]
            let body = document.getElementById("corpsDesSkills")
            console.log(body)
            Object.entries(skills).forEach(([skillName, skillInfo]) => {
                const tableRow = document.createElement("tr");

                const tableHeader = document.createElement("th");
                tableHeader.textContent = skillName;

                const tableLevel = document.createElement("td");

                tableLevel.textContent = "";
                tableLevel.className = "level"
                
                for (let index = 0; index < parseInt(skillInfo.niveau); index++) {
                    tableLevel.innerHTML  += "&#9733"
                };

                const tableDescription = document.createElement("td")
                tableDescription.textContent = skillInfo.description;

                tableRow.append(tableHeader, tableLevel, tableDescription);
                body.appendChild(tableRow);
                
                fr[skillInfo.traduction] = skillInfo.description;
                en[skillInfo.description] = skillInfo.traduction;
                //console.log(`${configuration.name} has these skills ${skillName} de niveau ${skillInfo.niveau}`)
            })
        }
        if (configuration.competences) {
            outils = configuration["outils"]
            let body = document.getElementById("corpsDesOutils")
            Object.entries(outils).forEach(([outilName, outilInfo]) => {
                const tableRow = document.createElement("tr");

                const tableHeader = document.createElement("th");
                tableHeader.textContent = outilName;

                const tableLevel = document.createElement("td");

                tableLevel.textContent = "";
                tableLevel.className = "level"
                
                for (let index = 0; index < parseInt(outilInfo.niveau); index++) {
                    tableLevel.innerHTML  += "&#9733"
                };

                const tableDescription = document.createElement("td")
                tableDescription.textContent = outilInfo.description;

                tableRow.append(tableHeader, tableLevel, tableDescription);
                body.appendChild(tableRow);
                
                fr[outilInfo.traduction] = outilInfo.description;
                en[outilInfo.description] = outilInfo.traduction;
                //console.log(`${configuration.name} has these skills ${skillName} de niveau ${skillInfo.niveau}`)
            })
        }
    }
    if (window.location.pathname.endsWith('projects.html')) {
        const body = document.getElementById("projectMainPage");
        projets = configuration["projets"];
        Object.entries(projets).forEach(([nomProjet, projetInfo], index) => {
            const project  = document.createElement("div");
            project.className = "elementProjet";

            if (index == 0) {
                project.style.paddingTop = "13vh";
            }

            const container1 = document.createElement("div");
            container1.className = "under-container1";
            const element1 = document.createElement("div");
            element1.className = "element1";
            const projectImg = document.createElement("img")
            projectImg.src = projetInfo.image;

            const container2 = document.createElement("div");
            container2.className = "upper-container1";

            const underContainer2 = document.createElement("div");
            underContainer2.className = "under-container2";
            const element21 = document.createElement("div");
            element21.className = "element2-1";
            const bold = document.createElement("b");
            const underline = document.createElement("u");
            underline.textContent = projetInfo.titre;

            const element22 = document.createElement("div");
            element22.className = "element2-2"
            const desc = document.createElement("p");
            desc.textContent = projetInfo.description;

            const underContainer3 = document.createElement("div");
            underContainer3.className = "under-container3";
            const link = document.createElement("a");
            link.className = "projectBtn";
            link.href = projetInfo.lienOuverture;
            link.text = "Ouvrir le projet"

            body.appendChild(project);
            project.append(container1, container2);
            container1.appendChild(element1);
            element1.appendChild(projectImg);
            container2.append(underContainer2, underContainer3);
            underContainer2.append(element21);
            underContainer2.append(element22);
            element21.appendChild(bold);
            bold.appendChild(underline);
            element22.appendChild(desc)
            underContainer3.append(link)

            fr[projetInfo.traduction] = projetInfo.description;
            en[projetInfo.description] = projetInfo.traduction;

        })
    }
    if (window.location.pathname.endsWith('about.html')) {
        let txt = "";
        if (frenchFlag) {
            txt = "français"
        }
        else {
            txt = "anglais"
        }

        document.getElementById("presentation").textContent = configuration["presentation"][txt];
        en[configuration["presentation"]["français"]] = configuration["presentation"]["anglais"];
        fr[configuration["presentation"]["anglais"]] = configuration["presentation"]["français"];

        document.getElementById("choix").textContent = configuration["raison"][txt];
        en[configuration["raison"]["français"]] = configuration["raison"]["anglais"];
        fr[configuration["raison"]["anglais"]] = configuration["raison"]["français"];

        const qualities = document.getElementsByClassName("quality")
        console.log(qualities)
        Array.from(qualities).forEach( (quality, index) => {
            quality.textContent = configuration["qualités"]["n" + String(index + 1)][txt];
            en[configuration["qualités"]["n" + String(index + 1)]["français"]] = configuration["qualités"]["n" + String(index + 1)]["anglais"];
            fr[configuration["qualités"]["n" + String(index + 1)]["anglais"]] = configuration["qualités"]["n" + String(index + 1)]["français"];
        })


        langues = configuration["langues"];
        let body = document.getElementById("tableauDeLangue");

        Object.entries(langues).forEach(([skillName, skillInfo]) => {
                const tableRow = document.createElement("tr");

                const langName = document.createElement("td");
                langName.textContent = skillName;

                const tableLevel = document.createElement("td");
                tableLevel.textContent = skillInfo.niveau;

                tableRow.append(langName, tableLevel);
                body.appendChild(tableRow);


                fr[skillInfo.traductionTitre] = skillName;
                en[skillName] = skillInfo.traductionTitre;
        })
    }
})


function setLanguage(french) {
    frenchFlag = french
    localStorage.setItem("lang", frenchFlag);
    if (frenchFlag) {
        document.querySelector("img").src = "images/drapeauFrançais.png";
        const elements = document.querySelectorAll("body *")
        console.log(elements)
        elements.forEach( element => {
            if (element.children.length === 0 && element.textContent.trim() !== "") {
                const text = element.textContent.trim()
                element.textContent = fr[text] || text
            }
        })
    }
    else {
        document.querySelector("img").src = "images/drapeauAnglais.png";
        const elements = document.querySelectorAll("body *")
        elements.forEach( element => {
            if (element.children.length === 0 && element.textContent.trim() !== "") {
                const text = element.textContent
                element.textContent = en[text] || text
            }
        })
    }
}

function changeLanguage() {
    setLanguage(!frenchFlag)
}

let isFrench = localStorage.getItem("lang");
if (isFrench !== null) {
    setLanguage(isFrench === "true");
}

