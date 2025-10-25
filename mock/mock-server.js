import fs from "node:fs";
import express from "express";

const app = express();
app.use(express.json());

// db.jsonを読み込み
const dbPath = "./mock/db.json";
const readDb = () => JSON.parse(fs.readFileSync(dbPath, "utf-8"));
const writeDb = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

// カスタムエンドポイント: POST /v1/notes/today
app.post("/v1/notes/today", (_req, res) => {
  // モックなので常にid: 1を返す
  res.status(200).json({ id: 1 });
});

// GET /v1/exercises
app.get("/v1/exercises", (_req, res) => {
  const db = readDb();
  res.json(db.exercises);
});

// GET /v1/exercises/:id
app.get("/v1/exercises/:id", (req, res) => {
  const db = readDb();
  const exercise = db.exercises.find((e) => e.id === req.params.id);
  if (exercise) {
    res.json(exercise);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// POST /v1/exercises
app.post("/v1/exercises", (req, res) => {
  const db = readDb();
  const newExercise = {
    id: String(Math.max(...db.exercises.map((e) => Number(e.id)), 0) + 1),
    ...req.body,
  };
  db.exercises.push(newExercise);
  writeDb(db);
  res.status(201).json(newExercise);
});

// GET /v1/notes
app.get("/v1/notes", (_req, res) => {
  const db = readDb();
  res.json(db.notes);
});

// GET /v1/notes/:id
app.get("/v1/notes/:id", (req, res) => {
  const db = readDb();
  const note = db.notes.find((n) => n.id === req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// PUT /v1/notes/:id
app.put("/v1/notes/:id", (req, res) => {
  const db = readDb();
  const index = db.notes.findIndex((n) => n.id === req.params.id);
  if (index !== -1) {
    db.notes[index] = { ...db.notes[index], ...req.body };
    writeDb(db);
    res.json(db.notes[index]);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// DELETE /v1/notes/:id
app.delete("/v1/notes/:id", (req, res) => {
  const db = readDb();
  const index = db.notes.findIndex((n) => n.id === req.params.id);
  if (index !== -1) {
    db.notes.splice(index, 1);
    writeDb(db);
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Mock server running on http://localhost:${PORT}`);
  console.log();
  console.log("Endpoints:");
  console.log(`  POST http://localhost:${PORT}/v1/notes/today`);
  console.log(`  GET  http://localhost:${PORT}/v1/exercises`);
  console.log(`  GET  http://localhost:${PORT}/v1/notes`);
});
