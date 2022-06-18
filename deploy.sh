# abort on errors
set -e

# build
yarn build
git add dist -f
git commit -m "Adding dist folder" 
git subtree push --prefix dist origin gh-pages
