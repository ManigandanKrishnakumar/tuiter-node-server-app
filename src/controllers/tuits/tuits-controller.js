import * as tuitsDao from "./tuits-dao.js";

const currentUser = {
  dp: "/images/nasa.png",
  username: "NASA",
  userHandle: "@nasa",
};

const templateTuit = {
  ...currentUser,
  date: "2h",
  liked: false,
  metrics: {
    comments: 0,
    retweets: 0,
    likes: 0,
  },
};

const createTuit = async (req, res) => {
  const newTuit = { ...templateTuit, ...req.body };
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
};
const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
};
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
};

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);

  res.json(status);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
