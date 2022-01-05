export const asyncForEach = <T>(array: T[], cb: (arg: T) => any) => {
  let promise: Promise<any> = Promise.resolve();

  for (const elem of array) {
    promise = promise.then(() => { cb(elem) });
  }

  return promise;
};

export const getEnumValues = (enumObj: object) => {
  const array = Object.values(enumObj);
  array.splice(0, array.length / 2);
  return array;
};
