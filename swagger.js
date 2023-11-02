const swaggerAutogen = require("swagger-autogen");

const doc = {
    info: {
        title: "my student api",
        description: "an api that shows students data.",
    },
    host: "destiny-node-project.onrender.com/",
    schemes: ["https"],

};

const outputfile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputfile, endpointFiles, doc);

swaggerAutogen(outputfile, endpointFiles, doc).then(async () => {
    await import("./server.js")
});