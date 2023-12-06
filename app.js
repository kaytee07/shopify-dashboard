const menu = document.querySelector("div.username-initials");
const phoneMenu = document.querySelector("div.username-initials-phone");
const notification = document.querySelector("div.notification");
const closeFlash = document.querySelector("div.select-close svg");
const closeFlashPhone = document.querySelector("div.close-icon svg");
const info = document.querySelectorAll("div.info-button");
const check = document.querySelectorAll("div.check svg");
const checkParent = document.querySelectorAll("div.check");
const extend = document.querySelector("div.drop_down");
const expand = document.querySelector("div.img img");
const dropDown = document.querySelector("div.drop-down");
const dropDownNotif = document.querySelector("div.dropdown-notif");
const flash = document.querySelector("section#flash");
const flashPhone = document.querySelector("section#flash-phone");
const mainBody = document.querySelector("section.main-body");
const mainMenu = document.querySelector("section#menu");
const menuImg = document.querySelector("div.all-details div.img");
const menuOptions = document.querySelector("ul.menu-options");
const bodyDropdown = document.querySelector("div.drop_down");




    
const dottedCircle = `<svg tabindex="1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"></circle>
</svg>`
const circle = `<svg tabindex="1"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"></circle>
</svg>`
const openedCircle = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="10" fill="#D9D9D9" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const tick1 = `<svg tabindex="1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
      d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
      fill="#fff"
    ></path>
  </svg>`;
const tick2 = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8163 5.64149C14.0604 5.88557 14.0604 6.2813 13.8163 6.52538L8.39966 11.942C8.15559 12.1861 7.75986 12.1861 7.51578 11.942L4.80745 9.23371C4.56337 8.98963 4.56337 8.5939 4.80745 8.34983C5.05153 8.10575 5.44725 8.10575 5.69133 8.34983L7.95772 10.6162L12.9324 5.64149C13.1765 5.39742 13.5723 5.39742 13.8163 5.64149Z" fill="white"/>
  </svg>`

const tick3 = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="#667085" opacity="0.6">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.77574 4.89535C9.01093 4.83993 9.24651 4.98566 9.30193 5.22085L10.5318 10.4402C10.5872 10.6754 10.4415 10.9109 10.2063 10.9663L7.59662 11.5813C7.36143 11.6367 7.12585 11.491 7.07043 11.2558C7.01501 11.0206 7.16074 10.785 7.39593 10.7296L9.57976 10.215L8.45024 5.42154C8.39483 5.18635 8.54056 4.95077 8.77574 4.89535Z" fill="white"/>
</g>
  </svg>
`
const load1 = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const load2 = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const expandUp = "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg"
const expandDown = "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg"

/**add extend to main=body */

notification.addEventListener("click", (e) => {
    console.log("dog")
    console.log(dropDownNotif)
    dropDownNotif.classList.toggle('hidden');
    if(!dropDown.classList.contains("hidden")){
        dropDown.classList.add('hidden');
    }
})

//keyboard
notification.addEventListener('keydown', function(event) {
  console.log(event.key)
  if (event.key === 'Enter' || event.keyCode === 13) {
    dropDownNotif.classList.toggle('hidden');
    // If the other dropdown is open, hide it
    const dropDown = document.querySelector('.drop-down');
    if (!dropDown.classList.contains('hidden')) {
      dropDown.classList.add('hidden');
    }
  }
});

menu.addEventListener("click", (e) => {
    dropDown.classList.toggle('hidden');
    if(!dropDownNotif.classList.contains("hidden")){
        dropDownNotif.classList.add('hidden');
    }
})

phoneMenu.addEventListener("click", (e) => {
    dropDown.classList.toggle('hidden');
    if(!dropDownNotif.classList.contains("hidden")){
        dropDownNotif.classList.add('hidden');
    }
})



//keyboard
menu.addEventListener("keydown", (e) => {
    // Check if the Enter key was pressed
    if (e.keyCode === 13) {
        dropDown.classList.toggle('hidden');
        if (!dropDownNotif.classList.contains("hidden")) {
            dropDownNotif.classList.add('hidden');
        }
    }
});

closeFlash.addEventListener("click", (e) => {
    flash.classList.toggle('hidden')
    
})

closeFlashPhone.addEventListener("click", (e) => {
    flashPhone.classList.toggle('hidden')  
})
//keyboard
closeFlash.addEventListener("keydown", (e) => {
    // Check if the Enter key was pressed
    if (e.keyCode === 13) {
        flash.classList.toggle('hidden');
    }
});

bodyDropdown.addEventListener("click", () => {
const up = `<img src="${expandUp}" alt="">`
const down = `<img src="${expandDown}" alt="">`

if (bodyDropdown.innerHTML === up) {
    bodyDropdown.innerHTML = down
} else {
    bodyDropdown.innerHTML = up
}
    
})

/*check.map(check => {
    console.log(check)
})*/

extend.addEventListener("click", (e) => {
    mainMenu.classList.toggle("extend");
    menuOptions.classList.toggle("hidden")
    //.getPropertyValue('transform');
})

//keyboard
extend.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        mainMenu.classList.toggle("extend");
        menuOptions.classList.toggle("hidden");
    }
});


// info.forEach((elem, index) => {
//     elem.addEventListener("click", () => {
//         list = elem.parentElement.parentElement
//         const innerInfo = elem
//         const moreInfo = innerInfo.childNodes[3]
//         const image = list.childNodes[1].childNodes[5]
//         const imports = list.childNodes[1].childNodes[3].childNodes[5].childNodes[3]

//         info.forEach((elem, loopIndex) => {
            
//         const list = elem.parentElement.parentElement.parentElement
//         const innerInfo = elem;
//         const moreInfo = elem.childNodes[3]
//         const image = elem.parentElement.children[2]
//         const imports = elem.parentElement.children[1].children[2].children[1]
//         console.log(imports)
//         if (index !== loopIndex ) {
//              if (imports) {
//                   imports.classList.add("hidden")
//               }
//             if (list.classList.contains('expand')) {
//                  list.classList.toggle('expand');
//              }
//             moreInfo.style.display = "none"
//             image.style.display = "none"
//         }
        
//         })

//         if (imports && index === 1) {
//         imports.classList.toggle("hidden")
//         }
//         if (image.style.display === "block") {
//             image.style.display = "none"
//             moreInfo.style.display = "none"
//         } else {
//             image.style.display = "block";
//             moreInfo.style.display = "block"
//         }
//         list.classList.toggle('expand');
//     })
// })

function openUnsolvedNext() {
    checkParent
}
checkParent.forEach( (elem, index) => {
    let isContentAdded = false;
    let isClicked = false;
    elem.addEventListener("mouseenter", (e) => {
        if (!isContentAdded) {
            e.target.innerHTML = circle
            isContentAdded = true
        }
        
    })

    elem.addEventListener("mouseleave", (e) => {
        let path = e.target.innerHTML.includes("path")
        if(!path) {
            elem.innerHTML = dottedCircle
            isContentAdded = false
        }
        
    })

    elem.addEventListener("click", (e) => {
        const list = elem.parentElement.parentElement;
        const moreInfo = list.childNodes[1].childNodes[3].childNodes[3]
        const image = list.childNodes[1].childNodes[5]
        const imports =  list.childNodes[1].childNodes[3].childNodes[5].childNodes[3]
    
        
        if (elem.innerHTML.includes("path") === false) {
             checkParent.forEach((elem, loopIndex) => {
            const list = elem.parentElement.parentElement;
            const moreInfo = list.childNodes[1].childNodes[3].childNodes[3]
            const image = list.childNodes[1].childNodes[5]
            const imports =  list.childNodes[1].childNodes[3].childNodes[5].childNodes[3]
        if (index !== loopIndex ) {
             if (imports) {
                  imports.classList.add("hidden")
              }
            if (list.classList.contains('expand')) {
                 list.classList.toggle('expand');
             }
            moreInfo.style.display = "none"
            image.style.display = "none"
        }
        
        })

         if (elem.innerHTML.includes("path") === false) {
            if (imports && index === 1) {
        imports.classList.toggle("hidden")
        }
        if (image.style.display === "block") {
            image.style.display = "none"
            moreInfo.style.display = "none"
        } else {
            image.style.display = "block";
            moreInfo.style.display = "block"
        }
        list.classList.toggle('expand');
        }
            
         }
        
       



        //select
        if (!elem.innerHTML.includes('path')) {
            setTimeout(() => {
            elem.innerHTML = load1
        }, 50)
        setTimeout(() => {
            elem.innerHTML = load2
        }, 100)

        setTimeout (() => {
            elem.innerHTML = tick3
        }, 150)

        setTimeout (() => {
            elem.innerHTML = tick2
        }, 200)
         
        setTimeout (() => {
            elem.innerHTML = tick1
            ticks()
        }, 250)
        }

        if (elem.innerHTML !== circle) {
            elem.innerHTML = dottedCircle;
            ticks()
        }

        
    })


    elem.addEventListener("keydown", (e) => {

        if (e.keyCode === 13 ) {
        const list = elem.parentElement.parentElement;
        const moreInfo = list.childNodes[1].childNodes[3].childNodes[3]
        const image = list.childNodes[1].childNodes[5]
        const imports =  list.childNodes[1].childNodes[3].childNodes[5].childNodes[3]
        
        if (elem.innerHTML.includes("path") === false) {
             checkParent.forEach((elem, loopIndex) => {
            const list = elem.parentElement.parentElement;
            const moreInfo = list.childNodes[1].childNodes[3].childNodes[3]
            const image = list.childNodes[1].childNodes[5]
            const imports =  list.childNodes[1].childNodes[3].childNodes[5].childNodes[3]
        if (index !== loopIndex ) {
             if (imports) {
                  imports.classList.add("hidden")
              }
            if (list.classList.contains('expand')) {
                 list.classList.toggle('expand');
             }
            moreInfo.style.display = "none"
            image.style.display = "none"
        }
        
        })

         if (elem.innerHTML.includes("path") === false) {
            if (imports && index === 1) {
        imports.classList.toggle("hidden")
        }
        if (image.style.display === "block") {
            image.style.display = "none"
            moreInfo.style.display = "none"
        } else {
            image.style.display = "block";
            moreInfo.style.display = "block"
        }
        list.classList.toggle('expand');
        }
            
         }
        
       



        //select
        if (!elem.innerHTML.includes('path')) {
            setTimeout(() => {
            elem.innerHTML = load1
        }, 50)
        setTimeout(() => {
            elem.innerHTML = load2
        }, 100)

        setTimeout (() => {
            elem.innerHTML = tick3
        }, 150)

        setTimeout (() => {
            elem.innerHTML = tick2
        }, 200)
         
        setTimeout (() => {
            elem.innerHTML = tick1
            ticks()
        }, 250)
        }

        if (elem.innerHTML !== circle) {
            elem.innerHTML = dottedCircle;
            ticks()
        }

    }
    })
    
})

function ticks() {
const completed = document.querySelector("div.completed");
const bar = document.querySelector("div.bar");
const fill = document.querySelector("div.fill");
let numberOfTicks = 0; 
let aTick = bar.offsetWidth/5
let load = 0

checkParent.forEach((elem) => {
    if (elem.innerHTML.includes("path")) {
        numberOfTicks++;
        load = aTick * numberOfTicks
    }
    // console.log(elem.innerHTML.includes("circle"))
})
completed.children[0].children[0].innerText = numberOfTicks;
fill.style.width = load
}



// function removeAllDropdown() {
//     const dropDown1 = document.querySelector("ul.s");
//     const dropDown2 = document.querySelector("dropdown-notif");
//     window.addEventListener("click", (event) => {
//         dropDownNotif.classList.add('hidden');
//         dropDown.classList.add('hidden')
        
//     })
// }

// removeAllDropdown()

