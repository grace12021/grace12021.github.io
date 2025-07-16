// scripts/replace-word.js

hexo.extend.filter.register('after_render:html', function(str, data){
  // We only want to run this on the home page.
  // data.path will be 'index.html' for the home page.
  if (data.path !== 'index.html') {
    return str;
  }
  
  // Replace all occurrences of 'gray' with 'black'.
  // Using a regular expression with the 'g' flag ensures all instances are replaced.
  return str.replace(/gray/g, 'black');
});