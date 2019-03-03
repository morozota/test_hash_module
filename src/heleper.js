export const filterHash = word => {
  const changedWord = word.replace(/#/g, "").replace(/\s+/g, "");
  if (!changedWord) {
    return false;
  }
  return `#${changedWord}`;
};
