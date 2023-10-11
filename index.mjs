import { MongoClient } from "mongodb";
import "dotenv/config";

import translations from "./collections/translations.mjs";
import posts from "./collections/posts.mjs";
import constants from "./helpers/constants.mjs";

const mongo_username = process.env.MONGODB_SERVERLESS_USERNAME;
const mongo_password = process.env.MONGODB_SERVERLESS_PASSWORD;
const mongo_uri = `mongodb+srv://${mongo_username}:${mongo_password}@fastaildb.ovw9dpb.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(mongo_uri);

const Collections = constants.MONGO_COLLECTIONS;

const returnResponse = (result, statusCode = 200) => {
  return {
    statusCode,
    body: result,
  };
};

const functionMapper = {
  [Collections.TRANSLATIONS]: translations,
  [Collections.POSTS]: posts,
};

export const handler = async (event, context) => {
  const db = await client.db(process.env.MONGO_DB_NAME);

  const query = event?.params?.querystring;
  const body = event && event["body-json"];

  try {
    const res = await functionMapper[query.collection](db, query, body);

    if (!res) res = "Unknown Resource";

    return returnResponse(res);
  } catch (e) {
    return returnResponse(e?.message);
  }
};

// handler();
