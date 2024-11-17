import type {Candidate} from '../interfaces/Candidate.interface';

interface CandidateCardProps {
  candidate: Candidate;
  onSave: () => void;
  onSkip: () => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onSave, onSkip }) => {
  return (
    <div className="candidate-card">
      <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} />
      <h2>{candidate.login}</h2>
      <p>Login: {candidate.login}</p>
      <p>HTML: {candidate.html_url || 'N/A'}</p>
      <p>Id: {candidate.id || 'N/A'}</p>
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


