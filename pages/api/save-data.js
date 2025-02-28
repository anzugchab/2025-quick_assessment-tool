import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("quickAssessmentDB"); // Datenbankname
      const collection = db.collection("assessments"); // Collection (Tabelle)

      const newAssessment = {
        topic: req.body.topic,
        questionCount: req.body.questionCount,
        createdAt: new Date(),
      };

      const result = await collection.insertOne(newAssessment);
      res.status(200).json({ message: "Assessment gespeichert", data: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}