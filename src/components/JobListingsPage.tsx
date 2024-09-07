import { useState, useEffect } from "react";

const url = "http://localhost:8000/api/jobs/job-posting/";

// Define the JobTypeEnum
enum JobTypeEnum {
  FullTime = 1,
  PartTime = 2,
  Contract = 3,
  Temporary = 5,
}

// Define the JobPosting interface
interface JobPosting {
  id: number;
  title: string;
  description: string;
  location: string;
  website: string;
  job_family: string;
  job_type: JobTypeEnum; // Use the JobTypeEnum here
  created_at: string;
  updated_at: string;
  company: number;
}
const JobListingsPage = () => {
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setJobPostings(data);
      });
  }, []);
  console.log(jobPostings);
  return (
    <div className="flex h-screen w-screen justify-center ">
      {jobPostings.map((job) => (
        <p key={job.id}>{job.title}</p>
      ))}
    </div>
  );
};

export default JobListingsPage;

//Next step, fix the joblist to give joblistcard
//authenticate via isauthenticated
