import { useState, useEffect } from "react";
import type { Candidate } from "../interfaces/Candidate.interface";

const PotentialCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState([]);

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
        <ul>
          {/* {savedCandidates.map((candidate, index) => ( */}
          candidates.map((candidate: Candidate) => (
            <li key={index}>
       

              <img
                src={candidate.avatar_url}
                alt={`${candidate.login}'s avatar`}
              />
              <h2>{candidate.login}</h2>
              <p>{candidate.followers_url}</p>
              <p>{candidate.id}</p>
              <p>{candidate.email}</p>
               <a href={candidate.html_url}>Profile</a>
      
                <a key={candidate.html_url} href={candidate.html_url}>Profile</a>
            ));
              {/* <p>{candidate.company}</p> */}
            </li>
          ))
        </ul>
      ) : (
        <p>No candidates have been accepted yet.</p>
      )}
    </div>
  );
};

export default PotentialCandidates;

// const PotentialCandidates = () => {
//     return <h1>Here are your potential candidates!</h1>;
//   };

//   export default PotentialCandidates;
