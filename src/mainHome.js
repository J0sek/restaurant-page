import creator from "./elementCreator.js";

function mainHome() {
  const main = creator("div", "main", "home");

  const nameContainer = creator("div", "nameContainer");

  const nameCursive = creator("div", "nameCursive");
  nameCursive.textContent = "Bienvenidos";

  const nameNormal = creator("div", "nameNormal");
  nameNormal.textContent = "LA PANADERIA";

  nameContainer.append(nameCursive, nameNormal);

  const nameDesc = creator("div", "nameDesc");
  nameDesc.textContent = "El placer de comer con las manos. Bien tierruo!";

  const menuButton = creator("button", "menuButton");
  menuButton.textContent = "VER EL MENU";

  main.append(nameContainer, nameDesc, menuButton);

  return main;
}
