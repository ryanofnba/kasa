export const addAnnouncement = text => {
  return {
    type: 'ADD_ANNOUNCEMENT',
    text
  };
};

export const changeFamily = family => {
  return {
    type: 'CHANGE_FAMILY',
    family
  };
};
