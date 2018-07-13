# Compile all CSS files into single file
cd src
find . -name '*.css'
cat `find . -name '*.css' -print` > ../dist/frizzy.css # Reference: https://stackoverflow.com/questions/864316/how-to-pipe-list-of-files-returned-by-find-command-to-cat-to-view-all-the-files
echo "...frizzy CSS compiled."
cd ..
node minify-styles.js
