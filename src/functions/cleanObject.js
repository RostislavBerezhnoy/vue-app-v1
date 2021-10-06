export function cleanObject(object) {
  for (let key in object) {
    if (object[key] === null || object[key] === undefined || object[key].length === 0) {
      delete object[key];
    }
  }
  return object
}
