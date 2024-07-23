import { Terminal } from "@xterm/xterm";
// import { WebLinksAddon } from '@xterm/addon-web-links';

// import "@xterm/xterm/css/xterm.css";

const terminal = new Terminal({
  theme: {
    background: "#1E1E1E",
    foreground: "#CCCCCC",
  },
});
//terminal.loadAddon(new WebLinksAddon());
terminal.open(document.getElementById("terminal"));
terminal.write("Welcome to the browser terminal!\r\n");

// Custom commands
const commands = {
  showImage: (url) => {
    const img = new Image();
    img.src = url;
    img.onload = () =>
      terminal.write(`\r\n<img src="${url}" alt="Image" />\r\n`);
  },
  renderMarkdown: (md) => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(md);
    terminal.write(`\r\n${html}\r\n`);
  },
};

terminal.onKey((e) => {
  const input = e.key.trim();
  if (input.startsWith("showImage ")) {
    const url = input.replace("showImage ", "");
    commands.showImage(url);
  } else if (input.startsWith("renderMarkdown ")) {
    const md = input.replace("renderMarkdown ", "");
    commands.renderMarkdown(md);
  } else {
    terminal.write(e.key);
  }
});
