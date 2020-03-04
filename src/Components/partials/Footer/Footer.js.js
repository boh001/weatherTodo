export const showLists = e => {
  e.preventDefault();
  const sideBar = document.querySelector("#sideBar");
  if (sideBar.style.visibility === "hidden") {
    sideBar.style.visibility = "visible";
    sideBar.style.opacity = "1";
    sideBar.style.width = "200px";
  } else {
    sideBar.style.visibility = "hidden";
    sideBar.style.opacity = "0";
    sideBar.style.width = "0px";
  }
};
