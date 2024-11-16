import { useEffect, useState } from 'react';

import type {Candidate} from '../interfaces/Candidate.interface';


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
      let parsedFilmsToWatch: Candidate[] = [];
      const storedFilmsToWatch = localStorage.getItem('CandidatesToSave');
      if (typeof storedFilmsToWatch === 'string') {
        parsedFilmsToWatch = JSON.parse(storedFilmsToWatch);
      }
      const updatedCandidates = parsedFilmsToWatch.filter(
        (candidate) => candidate.name !== name
      );
      setCandidatesToSave(updatedCandidates);
      localStorage.setItem('CandidatesToSave', JSON.stringify(updatedCandidates));
    } else if (currentlyOnSavedList) {
      let parsedAlreadySavedCandidates: Candidate[] = [];
      const storedAlreadySavedCandidates = localStorage.getItem('alreadySavedCandidates');
      if (typeof storedAlreadySavedCandidates === 'string') {
        parsedAlreadySavedCandidates = JSON.parse(storedAlreadySavedCandidates);
      }
      const updatedSavedCandidates = parsedAlreadySavedCandidates.filter(
        (candidate) => candidate.name !== name
      );
      localStorage.setItem(
        'alreadySavedCandidates',
        JSON.stringify(updatedSavedCandidates)
      );
    }
  };

  useEffect(() => {
    const storedCandidates = localStorage.getItem('CandidatesToSave');
    if (storedCandidates) {
      const parsedCandidatesToSave = JSON.parse(storedCandidates);
      setCandidatesToSave(parsedCandidatesToSave);
    }
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Potential Candidates</h1>
      {(!candidatesToSave.length || candidatesToSave.length === 0) ? (
        <h1 style={{ margin: '16px 0' }}>Add candidates to your watchlist.</h1>
      ) : (
        <CandidateSearch
          candidatesToSave={candidatesToSave}
          removeFromStorage={removeFromStorage}

          
        />
      )}
    </>
  );
};

export default SavedList;




