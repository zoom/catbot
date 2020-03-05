let hbs = require('hbs');

hbs.registerHelper('extend', function(name, context) {
  var block = blocks[name];
  if (!block) {
    block = blocks[name] = [];
  }
  block.push(context.fn(this));
});

hbs.registerHelper('block', function(name) {
  var val = (blocks[name] || []).join('\n');
  // clear the block
  blocks[name] = [];
  return val;
});

hbs.registerHelper('ifEquals', function(pre, next, options) {
  return pre == next ? options.fn(this) : options.inverse(this);
});

hbs.registerHelper('ifObject', function(item, options) {
  if (item && typeof item === 'object') {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
hbs.registerHelper('json', function(context) {
  return JSON.stringify(context);
});

module.exports = hbs;
