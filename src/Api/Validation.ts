/** Checks to see if the user has entered in a valid riot id format */
export const isValidId = (id: string) => {
  const splitId = id.split("#");
  const idRegex = /([A-Za-z\s]+)/;
  const tagRegex = /^([A-Z0-9]{3,5})$/;

  if (splitId.length !== 2) {
    return false;
  }

  if (!splitId[0].match(idRegex) || !splitId[1].match(tagRegex)) {
    return false;
  }

  return true;
};
