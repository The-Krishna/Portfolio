import { projects } from "./projects";

const commands: Map<string, string> = new Map<string, string>();

commands.set("motd", motdText());
commands.set("whoami", "root");

commands.set("rm", "Why would you remove anything?");

commands.set("about", aboutText());
commands.set("pwd", "/");
commands.set("date", new Date().toLocaleString());
//commands.set("projects", projectsText());
commands.set("kali", kaliLogo());
//commands.set("ls", projectsText());

commands.set("linkedin", openLink("https://www.linkedin.com/in/mishri-chapaneri-334173250/"));

commands.set("email", openLink("mailto:mishrichapaneri16@gmail.com"));

commands.set("help", helpText());


export const getCommandByName = (name: string): string => {
  name = name.trim().toLowerCase().split(" ")[0];

  // commands that require redirecting
  switch (name) {
    case "linkedin":
      window.open("https://www.linkedin.com/in/mishri-chapaneri-334173250/", "_blank");
      break;
    case "email":
      window.open("mailto:mishrichapaneri16@gmail.com", "_blank");
      break;

  }

  return commands.get(name) || `${name}: command not found`;
};

export const getCommandNames = (): string[] => {
  const commandNames: string[] = ["clear"];
  for (const entry of Array.from(commands.entries())) {
    commandNames.push(entry[0]);
  }

  return commandNames.sort();
};

export function motdText(): string {
  return `
    Welcome to My Portfolio!<br>
 <br>&nbsp;* Type 'help' to see the list of available commands.
   
  `;
}

function helpText(): string {
  const commandNames: string[] = ["clear", "help"];
  for (const entry of Array.from(commands.entries())) {
    commandNames.push(entry[0]);
  }

  return `
    Usage: [command] [options]
    <br>
    <br>

    ${commandNames.sort().join(", ")}
  `;
}

function aboutText(): string {
  return `
    Hello, root!
    <br><br>

My name is Mishri Soni and I am Graduated with Bachelor of Science (Information Technology) from Shree Swaminarayan Gurukul College of Computer Science.
Currently, My study of Cyber Security and Digital forensics is ongoing from Bascom Bridge educational institute Pvt.Ltd. I have also participated in Virtual Internship program of 'Cyber Secured India'  which will be completed this month.
As I don't have professional or high quality experience, but I've basic knowledge of our field and if something is new to me I'll be able to learn that thing and would like to increase and explore my knowledge and ability to do something new and challenging.
  `;
}

function openLink(link: string): string {
  return `
    Redirecting to 
      <a class="terminal-link" href="${link}" target="_blank" rel="noreferrer">
        ${link}</a>...
    `;
}

function projectsText(): string {
  return `
    ${projects
      .map((project) => {
        return `
        <a 
          class="project-${project.category}"
          href="${project.link}"
          target="_blank"
          rel="noreferrer"
        >${project.name}</a>`;
      })
      .join("&nbsp;&nbsp;&nbsp;")}
  `;
}

function kaliLogo() {
  return `
    <span class="text-kali-blue flex flex-col">
      <span>${"..............".replaceAll(" ", "&nbsp;")}</span>
      <span>${"            ..,;:ccc,.".replaceAll(" ", "&nbsp;")}</span>
      <span>${"          ......''';lxO.".replaceAll(" ", "&nbsp;")}</span>
      <span>${".....''''..........,:ld;".replaceAll(" ", "&nbsp;")}</span>
      <span>${"           .';;;:::;,,.x,".replaceAll(" ", "&nbsp;")}</span>
      <span>${"      ..'''.            0Xxoc:,.  ...".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"  ....                ,ONkc;,;cokOdc',.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${" .                   OMo           ':ddo.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>

      <span>${"                    dMc               :OO;".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                    0M.                 .:o.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                    ;Wd".replaceAll(" ", "&nbsp;")}</span>
      <span>${"                     ;XO,".replaceAll(" ", "&nbsp;")}</span>
      <span>${"                       ,d0Odlc;,..".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                            ..',;:cdOOd::,.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                     .:d;.':;.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                        'd,  .'".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                          ;l   ..".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                           .o".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                             c".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                             .'".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                              .".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
    </span>
  `;
}


