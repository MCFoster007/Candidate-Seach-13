import { useEffect, useState } from "react";

import type { Candidate } from "../interfaces/Candidate.interface";

const SavedList = () => {
  const [candidatesToSave, setCandidatesToSave] = useState<Candidate[]>([]);


  const removeFromStorage = (
    e: React.MouseEvent<HTMLButtonElement>,
    currentlyOnSaveList: boolean,
    currentlyOnSavedList: boolean,
    name: string
  ) => {
    e.preventDefault();
    if (currentlyOnSaveList) {
      let parsedCandidateToSave: Candidate[] = [];
      const storedCandidateToSave = localStorage.getItem("CandidatesToSave");
      if (typeof storedCandidateToSave === "string") {
        parsedCandidateToSave = JSON.parse(storedCandidateToSave);
      }
      const updatedCandidates = parsedCandidateToSave.filter(
        (candidate) => candidate.name !== name
      );
      setCandidatesToSave(updatedCandidates);
      localStorage.setItem(
        "CandidatesToSave",
        JSON.stringify(updatedCandidates)
      );
    } else if (currentlyOnSavedList) {
      let parsedAlreadySavedCandidates: Candidate[] = [];
      const storedAlreadySavedCandidates = localStorage.getItem(
        "alreadySavedCandidates"
      );
      if (typeof storedAlreadySavedCandidates === "string") {
        parsedAlreadySavedCandidates = JSON.parse(storedAlreadySavedCandidates);
      }
      const updatedSavedCandidates = parsedAlreadySavedCandidates.filter(
        (candidate) => candidate.name !== name
      );
      localStorage.setItem(
        "alreadySavedCandidates",
        JSON.stringify(updatedSavedCandidates)
      );
    }
  };

  useEffect(() => {
    const storedCandidates = localStorage.getItem("CandidatesToSave");
    if (storedCandidates) {
      const parsedCandidatesToSave = JSON.parse(storedCandidates);
      setCandidatesToSave(parsedCandidatesToSave);
    }
  }, []);

  return (
    <>
      <h1 className="pageHeader">Potential Candidates</h1>

      {!candidatesToSave || candidatesToSave.length === 0 ? (
        <h1 style={{ margin: "16px 0" }}>Add candidates to your watchlist.</h1>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Company</th>
                <th>Bio</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidatesToSave.map((candidate) => (
                <tr key={candidate.id}>
                  <td>
                    <img
                      src={candidate.avatar}
                      alt={`${candidate.name}'s avatar`}
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </td>
                  <td>{candidate.name}</td>
                  <td>{candidate.location}</td>
                  <td>{candidate.email || "N/A"}</td>
                  <td>{candidate.company || "N/A"}</td>
                  <td>{candidate.bio || "N/A"}</td>
                  <td>
                    <a
                      href={candidate.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </td>
                  <td>
                    <button
                      onClick={(e) =>
                        removeFromStorage(
                          e,
                          true,
                          false,
                          candidate.name
                        )
                      }
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default SavedList;
