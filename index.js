const cuadro = document.getElementsByClassName("overscroll__box");

for (let i = 0; i < cuadro.length; i++) {
  cuadro[i].addEventListener("mouseenter", verdadero);
}

for (let i = 0; i < cuadro.length; i++) {
  cuadro[i].addEventListener("mouseleave", falso);
}

function verdadero() {
  let fatherId = getParentId(this);
  let hijoClass = "";

  if (fatherId === "cont-1") {
    hijoClass = "container-1";
  } else if (fatherId === "cont-2") {
    hijoClass = "container-2";
  } else {
    hijoClass = "container-3";
  }

  let siblings = getSiblings(document.querySelector(`.${hijoClass}`));

  if (screen.width < 800) {
    this.classList.add("container-hover-movil");
  } else {
    this.classList.add("container-hover-movil");
  }

  for(let i=0;i<siblings.length;i++){
    if (screen.width < 800) {
      siblings[i].classList.add("container-movil");
    } else {
      siblings[i].classList.add("container-movil");
    }
  }
}

// function falso() {
//   for (let i = 0; i < cuadro.length; i++) {
//     cuadro[i].classList.remove(
//       "container-hover-movil",
//       "container-hover-computador",
//     );
//   }
// }

let getSiblings = function (e) {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!e.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = e.parentNode.firstChild;

  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

function getParentId(hijo) {
  return hijo.parentElement.getAttribute("id");
}
