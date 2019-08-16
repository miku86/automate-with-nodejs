process.stdout.write("What's your name?\n");

process.stdin.on('readable', () => {
  const userInput = process.stdin.read();
  if (userInput) {
    process.stdout.write(`Your Input was: ${userInput}`);
  }
});
