import { useState, useEffect } from "react";

const url = "http://localhost:8000/api/jobs/job-posting/";

// Define the JobTypeEnum
enum JobTypeEnum {
  "Full-time" = 1,
  "Part-time" = 2,
  "Contract" = 3,
  "Temporary" = 5,
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
  const [activeJob, setActiveJob] = useState(jobPostings[0]);

  function handleActiveJob(job: any) {
    setActiveJob(job);
  }

  async function fetchJobPostings() {
    const response = await fetch(url);
    const data = await response.json();
    setJobPostings(data);
  }

  useEffect(() => {
    fetchJobPostings();
  }, []);

  return (
    <div className="w-full h-full">
      {/* Searchbar */}
      <div className="w-full h-24 flex justify-center items-center gap-6">
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

      {/* Job Listings */}
      <div className="flex mx-auto w-full justify-center">
        <ul className="w-1/3 h-[700px] overflow-auto no-scrollbar">
          {jobPostings.map((job) => (
            <li
              key={job.id}
              className="border-2 p-4 border-r-10 list-none rounded-2xl m-2 "
            >
              <a
                onClick={() => handleActiveJob(job)}
                className="text-2xl font-bold hover:underline "
              >
                {job.title} (m/w/d)
              </a>

              <p className="">Company {job.company}</p>
              <p>
                {job.description.length > 150
                  ? job.description.substring(0, 150) + "..."
                  : job.description}
              </p>
              <p>{job.location}</p>
              <div className="bg-slate-200 text-black text-sm w-20 p-2 text-center rounded-lg shadow-sm opacity-80">
                {JobTypeEnum[job.job_type]}
              </div>
            </li>
          ))}
        </ul>

        {/* Job Details */}
        {activeJob && (
          <div className="w-2/5 p-2 pr-10 h-[700px] overflow-x-clip overflow-y-auto">
            <div className="w-full border-2 border-navy-blue mx-5 sticky">
              <img
                className="w-full h-52 object-cover"
                src="assets/images/PLACEHOLDER_Auth.jpg"
                alt=""
              />
              <div className="bg-white -mt-8 absolute z-10 w-16 h-16 ml-4 justify-center rounded shadow-lg p-2">
                <img
                  className="w-full h-full object-contain"
                  src="assets\icons\Datev_logo.svg"
                  alt=""
                />
              </div>
              <div className="p-4 pt-10 bg-slate-200">
                <h1 className="text-3xl font-bold my-4">{activeJob.title}</h1>
                <p>Company {activeJob.company}</p>
                <p className="my-5">{activeJob.description}</p>

                <button className="bg-blue-500 text-white px-6 py-2 my-4 rounded shadow-md">
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListingsPage;

//Next step, fix the joblist to give joblistcard
//authenticate via isauthenticated
