function filter_list(l) {
  filterArr = [];
  l.map(el => {
    if(typeof el === 'number') {
      filterArr.push(el);
    }
  });
  return filterArr;
}
