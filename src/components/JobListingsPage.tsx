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
  const [currentJob, setCurrentJob] = useState(0);
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
    <>
      <div className="w-full h-24 border-2 flex justify-center items-center gap-6">
        <div className="w-1/3 ">
          <input
            className="border-2 w-1/2 p-2 "
            type="text"
            placeholder="Search"
          ></input>
          <input
            className="border-2 w-1/2 p-2"
            type="text"
            placeholder="Location"
          ></input>
        </div>
        <button
          className=" border-3 p-3 bg-blue-950 text-white  text-center"
          type="submit"
        >
          Search
        </button>
      </div>
      <div className="flex m-auto w-full h-content items-center justify-center">
        <ul className="w-1/3  ">
          {jobPostings.map((job) => (
            <li
              key={job.id}
              className="w-full h-1/2 border-2  p-8 border-r-10 list-none "
            >
              <a className="text-2xl font-bold hover:underline ">
                {job.title} (m/w/d)
              </a>

              <p className="">Company {job.company}</p>
              <p>{job.description}</p>
              <p>{job.location}</p>
              <p className="bg-slate-300 w-20 h-5 opacity-50 ">
                {JobTypeEnum[job.job_type]}
              </p>
            </li>
          ))}
        </ul>
        <div className="w-1/3 h-1/2 border-2 m-5">
          <h1>Job Title</h1>
          <p>Job Description</p>
        </div>
      </div>
    </>
  );
};

export default JobListingsPage;

//Next step, fix the joblist to give joblistcard
//authenticate via isauthenticated
