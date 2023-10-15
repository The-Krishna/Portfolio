//import { projects } from "./projects";

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
Currently, My study of Cyber Security and Digital forensics is ongoing from Bascom Bridge educational institute Pvt.Ltd. I have also participated in Virtual Internship program of 'Cyber Secured India' and 'Hacker Bro Technologies' which has been completed. I have participated in WAPT virtual Internship of 'Chaitanya Cybestrix'.
As I don't have professional or high quality experience, but I've basic knowledge of our field and if something is new to me I'll be able to learn that thing and would like to increase and explore my knowledge and ability to do something new and challenging.
<br><br>
Certifications:-<br><br><br>
1.	Name: Introduction to Dark web, anonymity and cryptocurrency<br><br>
    Link: https://codered.eccouncil.org/certificate/529dd537-899b-47a6-89a5-8280c734f42b?logged=true<br><br>
2.	Name: Cybrary: Challenge: Password123<br><br>
    Link: https://app.cybrary.it/courses/api/certificate/CC-a85d0830-05a0-4edf-80ed-18360633c2b0/view<br><br>
3.  Name: Cyber Threat Hunting Training<br><br>
    Link: https://issuer.gutenbergcerts.com/pdf/20230119-ACTI-kb00_df287269-4a36-4586-bb15-560006622874.pdf<br><br>
4.  Name: Github Workshop<br><br>
    Link: https://certificate.givemycertificate.com/c/60b42ac7-8a76-46ad-8a80-c1a15bee0d27<br><br>
5.  Name: CVE Series: Apache Spark (CVE-2022-33891)<br><br>
    Link: https://app.cybrary.it/courses/api/certificate/CC-d1b4c24f-ce79-4d73-b9c1-be07a0355db8/view<br><br>
6.  Name: Cyber Security Engineering Virtual Internship Program<br><br>
    Link: https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SAP%20USA/5L6aBHz9ZYCs4eibk_SAP%20USA_2sWw6feNxh3GkoYoS_1679416303649_completion_certificate.pdf<br><br>
7.  Name: Cyber security virtual experience program<br><br>
    Link: https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_2sWw6feNxh3GkoYoS_1679468519698_completion_certificate.pdf<br><br>
8.  Name: Cyber Security Global Virtual Internship<br><br>
    Link: https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Clifford%20Chance/33CKX5eTKH3dXer7X_Clifford%20Chance_2sWw6feNxh3GkoYoS_1679837167191_completion_certificate.pdf<br><br>
9.  Name: Shields Up: Cyber security Virtual Experience Program<br><br>
    Link: https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AIG/2ZFnEGEDKTQMtEv9C_AIG_2sWw6feNxh3GkoYoS_1679984838744_completion_certificate.pdf<br><br>
10. Name: Hacker Bro Technologies Virtual Internship<br><br>
    Link: https://credsverse.com/credentials/cbd21fc5-0687-4923-88fb-038f5b46dc10


  
  `;
}

function openLink(link: string): string {
  return `
    Redirecting to 
      <a class="terminal-link" href="${link}" target="_blank" rel="noreferrer">
        ${link}</a>...
    `;
}

//function projectsText(): string {
 // return `
  //  ${projects
   //   .map((project) => {
   //     return `
   //     <a 
   //       class="project-${project.category}"
      //    href="${project.link}"
      //    target="_blank"
      //    rel="noreferrer"
     //   >${project.name}</a>`;
    //  })
    //  .join("&nbsp;&nbsp;&nbsp;")}
 // `;
//}

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


