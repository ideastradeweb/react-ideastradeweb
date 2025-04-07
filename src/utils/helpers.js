

/*==================================================
  Trim property values from object
==================================================*/
export const trimValues = (data) => {
  const trimmedData = Object.keys(data).reduce((acc, key) => {
    acc[key] = data[key].trim();
    return acc;
  }, {});
  return trimmedData;
}