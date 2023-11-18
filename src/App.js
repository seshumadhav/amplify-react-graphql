import React, { useState } from 'react';

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
    <div>
      {/* Input Section */}
      <div>
        <label>
          Job ID:
          <input type="text" value={jobId} onChange={handleJobIdChange} />
        </label>
        <label>
          Jobseeker IDs:
          <input type="text" value={jobseekerIds} onChange={handleJobseekerIdsChange} />
        </label>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>

      {/* Output Section */}
      <div>
        {/* Panel 1: Job Information */}
        <div>
          <h2>Job Information</h2>
          <p>Requirements: {jobInfo.requirements}</p>
          <p>Salary: {jobInfo.salary}</p>
          <p>Location: {jobInfo.location}</p>
          <p>Perks: {jobInfo.perks}</p>
        </div>

        {/* Panel 2: Job Seeker Information */}
        <div>
          <h2>Job Seeker Information</h2>
          <p>Qualifications: {jobSeekerInfo.qualifications}</p>
          <p>Preferences: {jobSeekerInfo.preferences}</p>
          <p>Occupations: {jobSeekerInfo.occupations}</p>
        </div>

        {/* Panel 3: Scores and Attributes */}
        <div>
          <h2>Scores and Attributes</h2>
          <p>MOM Score: {scoresAndAttributes.momScore}</p>
          <p>DAD Score: {scoresAndAttributes.dadScore}</p>
          <p>Overlapping Attributes: {scoresAndAttributes.overlappingAttributes.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
