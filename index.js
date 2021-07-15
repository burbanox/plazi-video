const cuadro = document.getElementsByClassName("overscroll__box");

for (let i = 0; i < cuadro.length; i++) {
  cuadro[i].addEventListener("mouseenter", verdadero);
}

for (let i = 0; i < cuadro.length; i++) {
  cuadro[i].addEventListener("mouseleave", falso);
}

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
    if (sibling.nodeType === 1) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

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

  this.classList.add("container-hover-movil", "margenes");
  console.log(this.classList.contains("margenes"))

  for (let i = 0; i < siblings.length; i++) {
    if (siblings[i] != this) {
      siblings[i].classList.add("container-movil", "margenes");
      console.log(siblings[i].classList.contains("margenes"))
    }
  }
}

function falso() {
  for (let i = 0; i < cuadro.length; i++) {
    cuadro[i].classList.remove(

      "container-hover-movil",
      "container-movil",
      "margenes-computador",
      "margenes"
    );
  }
}

function getParentId(hijo) {
  return hijo.parentElement.getAttribute("id");
}
