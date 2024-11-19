import { useState, useEffect } from "react";
import type { Candidate } from "../interfaces/Candidate.interface";

const PotentialCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    try {
      const candidates: Candidate[] | any =
        JSON.parse(localStorage.getItem("savedCandidates") || "[]");
      setSavedCandidates(candidates);
    } catch (error) {
      console.error("Failed to parse saved candidates:", error);
    }
  }, []);

  return (
    <div>
      <h1>Here are your potential candidates!</h1>
      {savedCandidates.length > 0 ? (
  // Render this if there are saved candidates
  <div>
    {savedCandidates.map(candidate => (
   
      <div key={candidate.id}>{candidate.login}</div>
    ))}
  </div>
) : (
  // Render this if there are no saved candidates
  <div>No saved candidates found.</div>
)}
    </div>
  );
};

export default PotentialCandidates;

// const PotentialCandidates = () => {
//     return <h1>Here are your potential candidates!</h1>;
//   };

//   export default PotentialCandidates;
