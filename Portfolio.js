//SelectingElements In The DOM
const toggleButt = document.querySelector("header input");
const body = document.querySelector("body");
const toggleLabel = document.getElementById("toggleId");
const buttonContainer = document.getElementById("buttonContainer");
const h1 = document.querySelector("h1");
const main = document.querySelector("main");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const logo = document.getElementById("logo");
const hamburgerIcon = document.getElementById("humburgerIcon");
const path = document.querySelector(".humburgerIcon path"); 
const menuSlide = document.getElementById("menuSlide");
const nightIcon = document.getElementById("nightIcon");
const nightLightOverlay = document.getElementById("nightLightOverlay");
const nightSlider = document.getElementById("nightSlider");
const likeButton = document.getElementById("like");
const likeContainer = document.getElementById("likeContainer");
const home = document.getElementById("home");
const closeSearch = document.getElementById("closeSearch");
const searchOverlay = document.getElementById("searchOverlay");
const searchAndIcon = document.getElementById("searchAndIcon");
const about = document.getElementById("about");
const aboutWeb = document.getElementById("aboutWeb");
const header = document.querySelector("header");
const projectsSection = document.getElementById("projectsSection");
const skillSection = document.getElementById("skillSection");
const learnSection = document.getElementById("learnSection");
const designerInfoSection = document.getElementById("designerInfoSection");
const footer = document.querySelector("footer");
const closeAbout = document.getElementById("closeAbout");
const projectIcon = document.getElementById("projectIcon");
const skillIcon = document.getElementById("skillIcon");
const learnIcon = document.getElementById("learnIcon");
const toTop = document.getElementById("toTop");
const list = document.querySelectorAll("li");
const intensityIcon = document.getElementById("intensityIcon");
const nightLightIntensity = document.getElementById("nightLightIntensity");
const youtubeBtn = document.getElementById("youtubeBtn");
const calcBtn = document.getElementById("calcBtn");
const letsShopBtn = document.getElementById("letsShopBtn");
const cantonsWatchBtn = document.getElementById("cantonsWatchBtn");
const cantonsPlayBtn = document.getElementById("cantonsPlayBtn");
const electronicsBtn = document.getElementById("electronicsBtn");
const logInBtn = document.getElementById("logInBtn");
const designerImage = document.getElementById("designerImage");
const myPicture = document.querySelector(".designerImage img");
const info = document.querySelector(".designerInfo");
const myInfo = document.querySelector(".myInfo")
const projectsContainer = document.querySelectorAll(".projectsContainer div");
const skillContainer = document.querySelectorAll(".skillContainer div");
const leanrContainer = document.querySelectorAll(".learnContainer div");
const likeInfoModal = document.getElementById("likeInfoModal")
const likeInfo = document.getElementById("likeInfo")
const frontend = document.getElementById("frontend")
const animatingToBottom = document.querySelector(".animatingToBottom")
const darkOverlay = document.querySelector(".darkOverlay")
const projectsTagIcon = document.querySelector(".projectsSection .tagContainer svg")
const skillTagIcon = document.querySelector(".skillSection .tagContainer svg")
const learnTagIcon = document.querySelector(".learnSection .tagContainer svg")
const allLearnDivs = document.querySelectorAll(".learnWithMe div")
const allProjectsContainerDivs = document.querySelectorAll(".projectsContainer div")
const allSkillDivs = document.querySelectorAll(".skillContainer div")
//END

//toggle between dark and Light mode
toggleButt.addEventListener("click", () => {
    if(body.style.backgroundColor === "rgb(29, 28, 28)"){
        body.style.backgroundColor = "rgb(230, 230, 230)";
        myPicture.classList.remove("designerBoxShadowJS")
        info.style.color = "black"
        myInfo.style.color = "grey"
        frontend.style.color = "rgba(40, 29, 85, 0.8)"
        animatingToBottom.style.fill = "rgba(40, 29, 85, 0.8)"
        darkOverlay.classList.remove("showDarkModeOverlayJS")
        projectsTagIcon.style.fill = "black"
        skillTagIcon.style.fill = "black"
        learnTagIcon.style.fill = "black"
        allLearnDivs.forEach(div => {
            div.style.color = "black"
        })
        allProjectsContainerDivs.forEach(div => {
            div.classList.remove("changeProjsJS")
            div.classList.remove("designerBoxShadowJS")
        })
        allSkillDivs.forEach(div => {
            div.classList.remove("designerBoxShadowJS")
            div.classList.remove("changeSkillsJS")
        })
    } else {
        darkOverlay.classList.add("showDarkModeOverlayJS")
        setTimeout(() => {
            body.style.backgroundColor = "rgb(29, 28, 28)";
            myPicture.classList.add("designerBoxShadowJS")
            info.style.color = "white"
            myInfo.style.color = "white"
            frontend.style.color = "white"
            animatingToBottom.style.fill = "white"
            projectsTagIcon.style.fill = "white"
            skillTagIcon.style.fill = "white"
            learnTagIcon.style.fill = "white"
            allLearnDivs.forEach(div => {
                div.style.color = "white"
            })
            allProjectsContainerDivs.forEach(div => {
                div.classList.add("changeProjsJS")
                div.classList.add("designerBoxShadowJS")
            })
            allSkillDivs.forEach(div => {
                div.classList.add("changeSkillsJS")
                div.classList.add("designerBoxShadowJS")
            })
        }, 500);

    }
});

//END

//transit Text and Picture as soon as the website loads!
window.addEventListener("load", () => {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    })
    h1.classList.add("transittext");
    main.classList.add("mainPictureTransit");
    logo.setAttribute("style", "transform: scale(0.8); transition: all 1.8s;");
    nightLightOverlay.style.opacity = intensityIcon.value;
    main.style.scale = 1;
});
setTimeout(() => {
    h2.classList.add("h2Transit");
}, 1000);
setTimeout(() => {
    h3.classList.add("h3Transit");
}, 1400);
setTimeout(() => {
    buttonContainer.classList.add("buttonTransit");
}, 1800);
//END

//click events for the hamburger Icon
hamburgerIcon.addEventListener("click", () => {
    if(hamburgerIcon.getAttribute("viewBox") === "0 0 448 512"){
        menuSlide.style.right = "0";
        hamburgerIcon.setAttribute("viewBox", "0 0 320 512");
        path.setAttribute("d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z");
    } else {
        if(window.matchMedia("((min-width: 320px) and ( max-width: 575px))")){
            menuSlide.style.right = "-100%"
        }
        else {
            menuSlide.style.right = "-250px"
        }
        hamburgerIcon.setAttribute("viewBox", "0 0 448 512");
        path.setAttribute("d", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
    }
});
//below code is imcomplete I'll update later with other sections of the DOM not only the main section....
main.addEventListener("click", () => {
    // menuSlide.style.right = "-250px";
    if(window.matchMedia("((min-width: 320px) and ( max-width: 575px))")){
        menuSlide.style.right = "-100%"
    }
    else {
        menuSlide.style.right = "-250px"
    }
    hamburgerIcon.setAttribute("viewBox", "0 0 448 512");
    path.setAttribute("d", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
});
//END

//nightLight Logic
nightIcon.addEventListener("click", () => {
    nightIcon.classList.toggle("nighLightChange");
    nightLightOverlay.classList.toggle("nightLightOverlayToggle");
});
//END

// Like and Unlike logic
let liked = 0
likeContainer.addEventListener("click", () => {    
    liked++
    likeButton.classList.toggle("likeButtonRed");
    if (liked % 2 === 1) {
        likeInfo.innerText = "Liked"
        likeInfoModal.style.backgroundColor = "red"
        likeInfoModal.style.color = "white"
    } else {
        likeInfo.innerText = "Unliked"
        likeInfoModal.style.backgroundColor = "white"
        likeInfoModal.style.color = "black"
    }
    
    likeInfoModal.style.top = "12%"
    setTimeout(() => {
       likeInfoModal.style.top = "-8%"
    }, 2000);

    if(window.matchMedia("((min-width: 320px) and ( max-width: 575px))")){
        menuSlide.style.right = "-100%"
    }
    else {
        menuSlide.style.right = "-250px"
    }
    hamburgerIcon.setAttribute("viewBox", "0 0 448 512");
    path.setAttribute("d", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");    
    
});
//END

//SCROLLING INTO SECTIONS
//*//projectsection
projectIcon.addEventListener("click", () => {
    projectsSection.scrollIntoView({
        behavior: "smooth"
    });
    // menuSlide.style.right = "-250px";
    if(window.matchMedia("((min-width: 320px) and ( max-width: 575px))")){
        menuSlide.style.right = "-100%"
    }
    else {
        menuSlide.style.right = "-250px"
    }
    hamburgerIcon.setAttribute("viewBox", "0 0 448 512");
    path.setAttribute("d", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
});
//end

//skillsection
skillIcon.addEventListener("click", () => {
    skillSection.scrollIntoView({
        behavior: "smooth"
    });
    // menuSlide.style.right = "-250px";
    if(window.matchMedia("((min-width: 320px) and ( max-width: 575px))")){
        menuSlide.style.right = "-100%"
    }
    else {
        menuSlide.style.right = "-250px"
    }
    hamburgerIcon.setAttribute("viewBox", "0 0 448 512");
    path.setAttribute("d", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
});
//end

//learnsection
learnIcon.addEventListener("click", () => {
    learnSection.scrollIntoView({
        behavior: "smooth"
    });
    // menuSlide.style.right = "-250px";
    if(window.matchMedia("((min-width: 320px) and ( max-width: 575px))")){
        menuSlide.style.right = "-100%"
    }
    else {
        menuSlide.style.right = "-250px"
    }
    hamburgerIcon.setAttribute("viewBox", "0 0 448 512");
    path.setAttribute("d", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");    
});
//end

// Move to top
window.addEventListener("scroll", () => {
    toTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    if(window.pageYOffset > 0){
        toTop.classList.add("toTopShow");
    } else {
        toTop.classList.remove("toTopShow");
    }
})
//end

//home services scrolling to the footer
list.forEach((element) => {
    element.addEventListener("click", () => {
        footer.scrollIntoView({
            behavior: "smooth"
        });
    });
});
//end

//END

//click event for the Home button on the menuSlide
home.addEventListener("click", () => {
    window.location.href = "Portfolio.html";
});
//END

//click events for the about button on the menuSlide
about.addEventListener("click", () => {
    aboutWeb.classList.add("aboutWebDisplay");
    aboutWeb.classList.remove("aboutWebClose");
    // menuSlide.style.right = "-250px";
    if(window.matchMedia("((min-width: 320px) and ( max-width: 575px))")){
        menuSlide.style.right = "-100%"
    }
    else {
        menuSlide.style.right = "-250px"
    }
    header.classList.add("blurThem");
    main.classList.add("blurThem");
    designerInfoSection.classList.add("blurThem");
    projectsSection.classList.add("blurThem");
    skillSection.classList.add("blurThem");
    learnSection.classList.add("blurThem");
    footer.classList.add("blurThem");
});
closeAbout.addEventListener("click", () =>  {
    aboutWeb.classList.add("aboutWebClose");
    header.classList.remove("blurThem");
    main.classList.remove("blurThem");
    designerInfoSection.classList.remove("blurThem");
    projectsSection.classList.remove("blurThem");
    skillSection.classList.remove("blurThem");
    learnSection.classList.remove("blurThem");
    footer.classList.remove("blurThem");
    // menuSlide.style.right = "-250px";
    if(window.matchMedia("((min-width: 320px) and ( max-width: 575px))")){
        menuSlide.style.right = "-100%"
    }
    else {
        menuSlide.style.right = "-250px"
    }
    hamburgerIcon.setAttribute("viewBox", "0 0 448 512");
    path.setAttribute("d", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z");
});

//intensity for nightLight
nightSlider.addEventListener("click", () => {
    nightLightIntensity.classList.toggle("nightLightIntensityActive");
});
intensityIcon.addEventListener("input", () => {
    nightLightOverlay.style.opacity = intensityIcon.value;
});
//end
logo.addEventListener("click", () => {
    window.location = "Portfolio.html";
});
youtubeBtn.addEventListener("click", () => {
    window.location = "YoutubeClone---Grid/Younew.html";
});
cantonsPlayBtn.addEventListener("click", () => {
    window.location = "MajProjs/CantonsPlay/CantonsPlay.html"
})
cantonsWatchBtn.addEventListener("click", () => {
    window.location = "MajProjs/CantonsWatch/CantonsWatch.html"
})
electronicsBtn.addEventListener("click", () => {
    window.location = "MajProjs/Electronics/Electronics/Electronics.html"
})
calcBtn.addEventListener("click", () => {
    window.location = "Calculator/calc.html"
})
letsShopBtn.addEventListener("click", () => {
    window.location = "MajProjs/LetsShop/LetsShop.html"
})
logInBtn.addEventListener("click", () => {
    window.location = "loginForm/login.html"
})


//ANIMATING ALL ELEMENTS TO THE RIGHT FROM THE LEFT ON SCROLL
function RevealElementsFromLeft (element) {
    const elementRect = element.getBoundingClientRect(); 
    if(elementRect.top <= window.innerHeight){
        element.style.opacity = 1;
        element.style.transform = "translateX(0)";
    } else {
        element.style.opacity = 0;
        element.style.transform = "translateX(-50px)";
    }
}
//end
//ANIMATING ALL ELEMENTS TO THE TOP FROM THE BOTTOM ON SCROLL
function RevealElementsFromBottom (element1) {
    const elementRect1 = element1.getBoundingClientRect();
    if(elementRect1.top <= window.innerHeight){
        element1.style.opacity = 1;
        element1.style.transform = "translateY(0)";
    } else {
        element1.style.opacity = 0;
        element1.style.transform = "translateY(30px)";
    }
}
//end
//INVOKING FUNCTIONS ON SCROLL
window.addEventListener("scroll", () =>{
    RevealElementsFromLeft(designerImage);
    RevealElementsFromLeft(info);
    projectsContainer.forEach((projects) => {
        RevealElementsFromBottom(projects);
    });
    skillContainer.forEach((skills) => {
        RevealElementsFromBottom(skills);
    })
})


























//SLIDE SHOW OF PICTURES

// const imageSources = ["images/Designer'sPicture.PNG", "images/hope.JPG", "images/skull.JPG", "images/burninghead.JPG"];
// let index = 0;
// let time = 1000;
// const imageElement = document.getElementById("fore-back");
// function showImages () {
//     imageElement.src = imageSources[index];
//     index = index + 1 % imageSources.length;
//     if (index < imageSources.length){
//         imageElement.classList.add("opacityChange");
//     } else {
//         index = 0;
//     }
//     welcomeMessage.classList.add("opacityChange");
// };
// setInterval(() => {
//     showImages();
// }, time);