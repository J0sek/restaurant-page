function creator(elem, ...classes) {
  let newElem = document.createElement(elem);

  if (classes.length > 0) {
    classes.forEach((x) => {
      newElem.classList.add(x);
    });
  }

  return newElem;
}

export { creator };
