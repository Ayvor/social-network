export const updateObjectInArray = (items, itemsId, ObjPropName, newObjectProp) => {
  return items.map((u) => {
    if (u[ObjPropName] === itemsId) {
      return { ...u, ...newObjectProp };
    }
    return u;
  });
};
