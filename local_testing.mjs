import { handler } from "./index.mjs";

const main = async () => {
  const event = {
    "body-json": {
      something: "someworld",
      hello: "world",
    },
    params: {
      path: {},
      querystring: {
        collection: "translations",
        action: "create",
      },
      header: {},
    },
  };

  const res = await handler(event);
  console.log(JSON.stringify(res, null, 2));
};

main();
