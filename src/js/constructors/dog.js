function Dog (options) {
  var options = options || {};
  this.status = "normal" || options.status;
  this.color = options.color;
  // moonshine doens't have a hungry option so we need it to go to the default
  if (options.hungry === undefined) {
    this.hungry = true;
  } else {
    this.hungry = options.hungry;
  }

}

export { Dog };
