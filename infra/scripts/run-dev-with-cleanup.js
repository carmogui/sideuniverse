const { spawn } = require("child_process");

spawn("npm", ["run", "dev:run"], { stdio: "inherit" });

function cleanup() {
  console.info("\n\nshutting down services");

  return spawn("npm", ["run", "postdev"], { stdio: "inherit" });
}

process.on("SIGINT", cleanup);
