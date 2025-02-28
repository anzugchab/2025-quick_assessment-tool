export default function handler(req, res) {
    if (req.method === "POST") {
      const { topic, questionCount } = req.body;
  
      // Generiere ein Platzhalter-Assessment: Eine Liste von Fragen
      const assessment = Array.from({ length: questionCount }, (_, i) => ({
        question: `Frage ${i + 1} zu ${topic}`,
        // Optionen 1 bis 5 als Beispiel für die Bewertungsskala
        options: ["1", "2", "3", "4", "5"],
      }));
  
      res.status(200).json({ assessment });
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }  