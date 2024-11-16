interface CandidateCardProps {
  candidate: Candidate;
  onSave: () => void;
  onSkip: () => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onSave, onSkip }) => {
  return (
    <div className="candidate-card">
      <img src={candidate.avatar} alt={`${candidate.name}'s avatar`} />
      <h2>{candidate.name}</h2>
      <p>Username: {candidate.username}</p>
      <p>Location: {candidate.location || 'N/A'}</p>
      <p>Company: {candidate.company || 'N/A'}</p>
      <p>Email: {candidate.email || 'N/A'}</p>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
        GitHub Profile
      </a>
      <div>
        <button onClick={onSave}>+</button>
        <button onClick={onSkip}>-</button>
      </div>
    </div>
  );
};

export default CandidateCard;


