export default (name, styles) => {
  if(typeof name === 'object') {
    styles = name;
    name = '';
  }
  if(typeof styles !== 'object') {
    return console.warn('swiss createStyleSheet: first or second argument must be an object with styles');
  }
  if(typeof name !== 'string') {
    console.warn('swiss createStyleSheet: first argument(name) must be a string');
    name = '';
  }
  if(name) {
    Object.defineProperty(styles, '__swissStyleClassName', {
      value: name,
    })
  }

  for(let key in styles) {
    if(typeof styles[key] === 'object') {
      const className = name ? `${name}_${key}` : key;
      Object.defineProperty(styles[key], '__swissStyleClassName', {
        value: className,
      });
    } 
  }

  return styles;
}