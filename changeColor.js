const checkbox = document.getElementById("checkbox");
const label = document.getElementById("label");
const anchor = document.getElementsByClassName("anchor");
const parraphs = document.getElementsByClassName("p-change");
const bold = document.getElementsByClassName("bold");
const titleH3 = document.getElementsByClassName("h3-center");
const logoSurf = document.getElementById("logo");
checkbox.addEventListener("change", () => {
  document.body.style.backgroundColor = checkbox.checked ? "#222" : "white";
  changeColor();
  changeColorParraphs();
  changeColorBold();
  changeColorH3();
  changeLogo(logoSurf);
});
changeLogo = (logo) => {
  let logoSave = logo;
  if (checkbox.checked) {
    logo.style.transition = "all 0.5s";
    logo.src = "./assets/logo_white_1080x1080 1.png";
    logo.style.width = "173px";
    logo.style.transition = "all 0.5s";
  } else {
    logo.style.transition = "all 0.5s";
    logo.src = "./assets/logo-icon.png";
    logo.style.width = "100px";
  }
};

function changeColor() {
  if (checkbox.checked) {
    console.log("checked");
    for (let i = 0; i < anchor.length; i++) {
      anchor[i].style.color = "white";
      console.log("pasa[i]");
    }
  } else {
    console.log("unchecked");
    for (let i = 0; i < anchor.length; i++) {
      anchor[i].style.color = "#222";
    }
    console.log("pasa[i]");
  }
}

function changeColorParraphs() {
  if (checkbox.checked) {
    console.log("checked");
    for (let i = 0; i < parraphs.length; i++) {
      parraphs[i].style.color = "#fff";
      console.log("pasa[i]");
    }
  } else {
    console.log("unchecked");
    for (let i = 0; i < parraphs.length; i++) {
      parraphs[i].style.color = "#222";
    }
    console.log("pasa[i]");
  }
}

function changeColorBold() {
  if (checkbox.checked) {
    console.log("checked");
    for (let i = 0; i < bold.length; i++) {
      bold[i].style.color = "#fff";
      console.log("pasa[i]");
    }
  } else {
    console.log("unchecked");
    for (let i = 0; i < bold.length; i++) {
      bold[i].style.color = "#222";
    }
    console.log("pasa[i]");
  }
}

function changeColorH3() {
  if (checkbox.checked) {
    console.log("checked");
    for (let i = 0; i < titleH3.length; i++) {
      titleH3[i].style.color = "#fff";
      console.log("pasa[i]");
    }
  } else {
    console.log("unchecked");
    for (let i = 0; i < titleH3.length; i++) {
      titleH3[i].style.color = "#222";
    }
    console.log("pasa[i]");
  }
}

// falta hacer funcion para los spans y los h3
// cambiar logo de bizmone a solo las 2 tablas de surf
// hacer d una vez el entregable 1 de products
