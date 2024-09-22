// displayMessage: prints in STDOUT the string argument

function displayMessage(text) {
  process.std.write(text);
}

module.exports = displayMessage;
