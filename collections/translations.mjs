import constants from "../helpers/constants.mjs";

const Actions = constants.ACTIONS;
const Collection = constants.MONGO_COLLECTIONS.TRANSLATIONS;

const createTranslation = (db, item) => {
  try {
    const c = db.collection(Collection);

    const result = c.insertOne(item);

    return result;
  } catch (e) {
    console.log(e);
  }
};

export default async function (db, query, body) {
  switch (query.action) {
    case Actions.CREATE:
      return await createTranslation(db, body);

    // case Actions.READ:
    //   return await readTranslation()

    // case Actions.READ_ALL:
    //   return await scanTranslations();

    // case Actions.UPDATE:
    //   return await getTranslationText(body.en);

    // case Actions.DELETE:
    //   return await searchTranslationText(body.keyword);

    default:
      return constants.ACTION_NOT_FOUND;
  }
}
