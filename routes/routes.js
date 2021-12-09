const router = (server) => {
 
  //Prince test for income planner
  server.post("/", (request, response) => {
    let html = request.body.data;

    console.log(html);

    var fs = require("fs");
    fs.writeFile("test.html", html, (err) => {
      if (err) throw err;
      console.log("Saved!");
    });

    const Prince = require("prince");
    const util = require("util");

    Prince()
      .inputs("test.html")
      .output("test.pdf")
      .execute()
      .then(
        () => {
          console.log("OK: done");
          //response.set(responseHeaders)
          response.download("test.pdf");
        },
        (error) => {
          console.log("ERROR: ", util.inspect(error));
        }
      );
  });

  //prince for pac life
  //Prince test
  server.post("/pac", (request, response) => {
    let html = request.body.data;

    console.log(html);

    var fs = require("fs");
    fs.writeFile("test.html", html, (err) => {
      if (err) throw err;
      console.log("Saved!");
    });

    const Prince = require("prince");
    const util = require("util");

    Prince()
      .inputs("test.html")
      .output("test.pdf")
      .execute()
      .then(
        () => {
          console.log("OK: done");
          //response.set(responseHeaders)
          response.download("test.pdf");
        },
        (error) => {
          console.log("ERROR: ", util.inspect(error));
        }
      );
  });
};

module.exports = router;
