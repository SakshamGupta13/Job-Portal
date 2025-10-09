import { useState } from "react"
import Header from "./components/Header"
import JobCard from "./components/JobCard"
import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"
import JobData from "./JobDummyData"

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async() => {
    
  }

  return (
    <>
      <div>
        <NavBar/>
        <Header/>
        <SearchBar/>
        {JobData.map((job) => (
          <JobCard key={job.id} {...job}/>
        ))}
      </div>
    </>
  )
}

export default App
