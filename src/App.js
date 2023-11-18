import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  const [jobId, setJobId] = useState('');
  const [jobseekerIds, setJobseekerIds] = useState('');
  const [jobInfo, setJobInfo] = useState({
    requirements: 'Experience in React, Node.js',
    salary: '$70,000',
    location: 'Remote',
    perks: 'Healthcare, Flexible Hours',
  });
  const [jobSeekerInfo, setJobSeekerInfo] = useState({
    qualifications: "Bachelor's in Computer Science",
    preferences: 'Remote work, Full-time',
    occupations: 'Frontend Developer',
  });
  const [scoresAndAttributes, setScoresAndAttributes] = useState({
    momScore: 80,
    dadScore: 75,
    overlappingAttributes: ['React', 'Remote'],
  });

  const handleJobIdChange = (e) => setJobId(e.target.value);
  const handleJobseekerIdsChange = (e) => setJobseekerIds(e.target.value);

  const handleSubmit = () => {
    // Placeholder for data retrieval logic
    // Replace this with actual data fetching code
    // For now, let's keep using the dummy data
  };

  const handleCancel = () => {
    // Reset the form
    setJobId('');
    setJobseekerIds('');
    setJobInfo({
      requirements: '',
      salary: '',
      location: '',
      perks: '',
    });
    setJobSeekerInfo({
      qualifications: '',
      preferences: '',
      occupations: '',
    });
    setScoresAndAttributes({
      momScore: 0,
      dadScore: 0,
      overlappingAttributes: [],
    });
  };

  return (
    <div className="container mt-4">
      {/* Input Section */}
      <div className="mb-4">
        <label className="form-label">
          Job ID:
          <input type="text" className="form-control" value={jobId} onChange={handleJobIdChange} />
        </label>
        <label className="form-label">
          Jobseeker IDs:
          <input type="text" className="form-control" value={jobseekerIds} onChange={handleJobseekerIdsChange} />
        </label>
        <button className="btn btn-primary me-2" onClick={handleSubmit}>Submit</button>
        <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
      </div>

      {/* Output Section */}
      <div>
        {/* Panel 1: Job Information */}
        <div className="bg-light p-4 mb-4">
          <h2 className="text-muted">Job Information</h2>
          <p><strong>Requirements:</strong> {jobInfo.requirements}</p>
          <p><strong>Salary:</strong> {jobInfo.salary}</p>
          <p><strong>Location:</strong> {jobInfo.location}</p>
          <p><strong>Perks:</strong> {jobInfo.perks}</p>
        </div>

        {/* Panel 2: Job Seeker Information */}
        <div className="bg-light p-4 mb-4">
          <h2 className="text-muted">Job Seeker Information</h2>
          <p><strong>Qualifications:</strong> {jobSeekerInfo.qualifications}</p>
          <p><strong>Preferences:</strong> {jobSeekerInfo.preferences}</p>
          <p><strong>Occupations:</strong> {jobSeekerInfo.occupations}</p>
        </div>

        {/* Panel 3: Scores and Attributes */}
        <div className="bg-light p-4">
          <h2 className="text-muted">Scores and Attributes</h2>
          <p><strong>MOM Score:</strong> {scoresAndAttributes.momScore}</p>
          <p><strong>DAD Score:</strong> {scoresAndAttributes.dadScore}</p>
          <p><strong>Overlapping Attributes:</strong> {scoresAndAttributes.overlappingAttributes.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
