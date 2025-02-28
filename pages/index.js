import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [questionCount, setQuestionCount] = useState(5);
  const [assessment, setAssessment] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/generate-assessment", {
      topic,
      questionCount,
    });
    setAssessment(response.data.assessment);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Quick Assessment Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Thema des Assessments:
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Anzahl der Fragen:
          <input
            type="number"
            value={questionCount}
            onChange={(e) => setQuestionCount(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Assessment generieren</button>
      </form>

      {assessment && (
        <div>
          <h2>Generiertes Assessment:</h2>
          <ul>
            {assessment.map((q, index) => (
              <li key={index}>{q.question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
