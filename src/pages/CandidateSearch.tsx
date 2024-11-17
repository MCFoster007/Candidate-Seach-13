import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API'; 

import CandidateCard from '../components/CandidateCard';
import type {Candidate} from '../interfaces/Candidate.interface';


const CandidateSearch: React.FC = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [candidatesQueue, setCandidatesQueue] = useState<Candidate[]>([]);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  const fetchCandidates = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchGithub();
     
      if (data.length > 0) {
        setCandidatesQueue(data); 
        setCurrentCandidate(data[0]); 
      } else {
        setError("No candidates found.");
      }
    } catch (err) {
      setError("Failed to fetch candidates.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
    
  },[] );

  const handleSaveCandidate = () => {
    if (currentCandidate) {
      const updatedSavedCandidates = [...savedCandidates, currentCandidate];
      setSavedCandidates(updatedSavedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates));
      showNextCandidate(); 
    }
  };

  const showNextCandidate = () => {
    const remainingQueue = candidatesQueue.slice(1);
    setCandidatesQueue(remainingQueue);
    setCurrentCandidate(remainingQueue[0] || null);
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {loading && <p>Loading candidates...</p>}
      {error && <p>{error}</p>}
      {currentCandidate ? (
        <CandidateCard
          candidate={currentCandidate}
          onSave={handleSaveCandidate}
          onSkip={showNextCandidate}
        />
      ) : (
        <p>No more candidates available to review.</p>
      )}
    </div>
  );
};


export default CandidateSearch;
