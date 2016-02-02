define({ "api": [
  {
    "type": "post",
    "url": "/api/authentification",
    "title": "User authentification",
    "name": "Authentification",
    "group": "Authentification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "details",
            "description": "<p>Login details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\"      : \"aershov24@gmail.com\",\n  \"password\"  : \"demo\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>User token object or error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucess-Response:",
          "content": "{\n  \"success\": true,\n  \"message\": \"User authentificated\",\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFlcnNob3YyNEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMyIsImNsaWVudCI6Im5vZGUuYmEiLCJpYXQiOjE0NTQzODUwMjcsImV4cCI6MTQ1NDM4NTYyN30.AJI4SlG1UstNGTe_Taa3-PlovgHbIvXOPuD8B_ijPGk\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p>Failed authentification info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"success\": false,\n  \"message\": \"Authentication failed. Wrong password.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/api.js",
    "groupTitle": "Authentification"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/public/main.js",
    "group": "c__src_node_template_node_template_src_public_main_js",
    "groupTitle": "c__src_node_template_node_template_src_public_main_js",
    "name": ""
  }
] });
