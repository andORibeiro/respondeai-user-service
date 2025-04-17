const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RespondeAI User Service",
      version: "1.0.0",
      description: "API de gerenciamento de usuários, XP e ranking"
    },
    servers: [
      {
        url: "http://localhost:3002",
        description: "Servidor local"
      }
    ]
  },
  apis: ["./src/swaggerDocs/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
