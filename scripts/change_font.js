// scripts/font-override.js

hexo.extend.filter.register('after_render:css', function(cssString, data) {
  // data.path is the destination path of the file, e.g., "css/style.css"
  // Make sure this script only runs on your theme's main stylesheet.
  // Replace 'css/style.css' with the actual path to your theme's CSS file.
  const targetCssFile = '/fonts/Chillax/chillax.css';

  if (!data.path.includes(targetCssFile)) {
    return cssString; // If it's not the file we want, do nothing.
  }

  // --- YOUR FONT REPLACEMENT LOGIC GOES HERE ---
  // This is a simple and safe find-and-replace.
  // Replace "Old Font Name" with the font you want to remove.
  // Replace "Inter" with the font you want to add.
  const oldFont = 'Chillax-Variable';
  const newFont = 'Open Sans';

  console.log(`[Font Override] Processing: ${data.path}`);
  const modifiedCss = cssString.replace(new RegExp(oldFont, 'g'), newFont);
  console.log(`[Font Override] Replaced ${oldFont} with ${newFont}.`);
  // --- END OF LOGIC ---

  // You must return the modified (or original) CSS string.
  return modifiedCss;
});