"use strict";

function autoIncrement(objectArray) {
  let newId = 0;
  objectArray.forEach(object => {
    if (object.id > newId) {
      newId = object.id;
    }
  });
  return newId + 1;
}
