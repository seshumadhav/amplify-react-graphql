import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import custom CSS for font styling
import CircleProgressBar from './CircleProgressBar';

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
    aqModelScore: 25, // New score
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
      aqModelScore: 0,
      overlappingAttributes: [],
    });
  };

  return (
    <div className="container mt-4 app-container">
      {/* Input Section */}
      <div className="mb-4">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label" style={{ marginBottom: '5px' }}>
              Job ID:
            </label>
            <input type="text" className="form-control" value={jobId} onChange={handleJobIdChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label" style={{ marginBottom: '5px' }}>
              Job Seeker Account ID:
            </label>
            <input
              type="text"
              className="form-control"
              value={jobseekerIds}
              onChange={handleJobseekerIdsChange}
            />
          </div>
        </div>
        <hr className="my-4" /> {/* Horizontal line to separate Input and Output sections */}
        <button className="btn btn-primary me-2" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
      </div>

      {/* Output Section */}
      <div className="row">
        {/* Panel 1: Job Information */}
        <div className="col-md-6 mb-4">
          <div className="border p-4" style={{ height: '100%' }}>
            <h2 className="text-muted mb-4">Job Information</h2>
            <p>
              <strong>Requirements:</strong> {jobInfo.requirements}
            </p>
            <p>
              <strong>Salary:</strong> {jobInfo.salary}
            </p>
            <p>
              <strong>Location:</strong> {jobInfo.location}
            </p>
            <p>
              <strong>Perks:</strong> {jobInfo.perks}
            </p>
          </div>
        </div>

        {/* Panel 2: Job Seeker Information */}
        <div className="col-md-6 mb-4">
          <div className="border p-4" style={{ height: '100%' }}>
            <h2 className="text-muted mb-4">Job Seeker Information</h2>
            <p>
              <strong>Qualifications:</strong> {jobSeekerInfo.qualifications}
            </p>
            <p>
              <strong>Preferences:</strong> {jobSeekerInfo.preferences}
            </p>
            <p>
              <strong>Occupations:</strong> {jobSeekerInfo.occupations}
            </p>
          </div>
        </div>

        {/* Panel 3: Match Comparison (MOM Score, DAD Score, AQ Model Score, and Overlap Information) */}
        <div className="col-md-12 mb-4">
          <div className="border p-4">
            <h2 className="text-muted mb-4">Match Comparison</h2>
            <div className="row">
              <div className="col-md-3 mb-4">
                <p className="mb-2">
                  <strong>MOM Score:</strong>
                </p>
                <CircleProgressBar score={scoresAndAttributes.momScore} maxScore={100} />
              </div>
              <div className="col-md-3 mb-4">
                <p className="mb-2">
                  <strong>DAD Score:</strong>
                </p>
                <CircleProgressBar score={scoresAndAttributes.dadScore} maxScore={100} />
              </div>
              <div className="col-md-3 mb-4">
                <p className="mb-2">
                  <strong>AQ Model Score:</strong>
                </p>
                <CircleProgressBar score={scoresAndAttributes.aqModelScore} maxScore={100} />
              </div>
              <div className="col-md-3 mb-4">
                <p className="mb-2">
                  <strong>Overlapping Attributes:</strong>
                </p>
                <ul>
                  {scoresAndAttributes.overlappingAttributes.map((attribute, index) => (
                    <li key={index}>{attribute}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
