if (!String.prototype.includes) {
  String.prototype.includes = (srch, strt) => {
    const search;
    const start;
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
