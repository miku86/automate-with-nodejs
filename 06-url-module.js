const url = require('url');

const myUrl = process.argv[2];

if (myUrl) {
  const { href, host, path, protocol } = url.parse(myUrl);

  console.log(`The HREF is: ${href}`);
  console.log(`The Host is: ${host}`);
  console.log(`The Path is: ${path}`);
  console.log(`The Protocol is: ${protocol}`);
}
