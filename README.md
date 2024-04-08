# EdenAI-Node

A Node.js module for seamless interaction with Eden AI's API, enabling easy GET requests for various functionalities.

## How to install

To install this module, use the npm package manager. Run the following command in the terminal:

```bash
npm install edenai-node
```

## How to use

> Check out our public installable module for typescript / javascript: https://www.npmjs.com/package/edenai-node

> API key is required to get the response from AI.

```javascript
import { EdenAINode } from "edenai-node";

const edenAI = new EdenAINode("api_key");

const getApiResponse = () => {
  edenAI
    .getChatResponse("Can you help me?", "openai")
    .then((response) => console.log(response))
    .catch(console.error);
  return response;
};

console.log(getApiResponse());
```

## Other informations

The module requires the following:

| Parametru | Descriere                                                 |
| --------- | --------------------------------------------------------- |
| apikey    | You can get it from: https://www.edenai.co/               |
| providers | The following providers are available: `openai`, `google` |

# Roadmap

| Task           | Status     |
| -------------- | ---------- |
| Chat AI        | ✔️ Done    |
| Voice AI       | ❌ Pending |
| Speech To Text | ❌ Pending |
| Text To Speech | ❌ Pending |

## Contribution

If you want to contribute to this project, please consult the [contribution guide](https://github.com/adriantandara/edenai-node/pulls).
