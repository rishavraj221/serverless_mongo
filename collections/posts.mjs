import constants from "../helpers/constants.mjs";

const Actions = constants.ACTIONS;
const Collection = constants.MONGO_COLLECTIONS.TRANSLATIONS;

const createPosts = (db, item) => {
  try {
    // const c = db.collection(Collection);

    console.log("create post");

    // const result = c.insertOne(item);

    return "inside post";
  } catch (e) {
    console.log(e);
  }
};

const readAllPosts = (db, item) => {
  try {
    // const c = db.collection(Collection);

    console.log("read post");

    // const result = c.insertOne(item);

    return "read post";
  } catch (e) {
    console.log(e);
  }
};

export default async function (db, query, body) {
  switch (query.action) {
    case Actions.CREATE:
      return await createPosts(db, body);

    // case Actions.READ:
    //   return await readTranslation()

    case Actions.READ_ALL:
      return await readAllPosts();

    // case Actions.UPDATE:
    //   return await getTranslationText(body.en);

    // case Actions.DELETE:
    //   return await searchTranslationText(body.keyword);

    default:
      return constants.ACTION_NOT_FOUND;
  }
}
