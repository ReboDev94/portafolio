#!/usr/bin/env sh

# abort on errors
set -e

rm -r dist
# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'https://rafael-de-jesus.com' > CNAME

cd -
