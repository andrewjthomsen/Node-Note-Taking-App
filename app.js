const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Removing a note.",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: "read",
  describe: "Reading Notes!",
  handler() {
    console.log("A note has been read!", argv);
  }
});

yargs.command({
  command: "list",
  describe: "Lists notes",
  handler() {
    console.log("Listing all notes!", argv);
    console.log("Body: ", argv.body);
  }
});

yargs.parse();
