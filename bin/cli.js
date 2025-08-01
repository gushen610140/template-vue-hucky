#! /usr/bin/env node
import download from "download-git-repo";
import { program } from "commander";

program
  .command("create <project-name>")
  .description("创建项目")
  .action((projectName) => {
    download(
      "github:gushen610140/template-vue-hucky",
      projectName,
      { clone: true },
      (err) => {
        if (err) {
          console.log(err);
        }
      },
    );
  });

program.parse(process.argv);
