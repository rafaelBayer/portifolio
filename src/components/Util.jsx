export const isEmpty = (value) => {
  // Verifica se o valor é undefined, null, string vazia ou array vazio
  if (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.trim() === "") ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" && Object.keys(value).length === 0)
  ) {
    return true;
  } else {
    return false;
  }
};
