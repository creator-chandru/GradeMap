import {useState} from 'react';
import { useEffect } from 'react';
import { calculateRequiredMark } from "./logic/grades";
import { SubjectForm } from "./components/subjectForm";
import { SubjectList } from "./components/subjectList";
import { SubjectTable } from './components/subjectsTable';
import { MarksEstimator } from './components/marksEstimator';
import { ExtraSubjectsForm } from './components/extraForm';
import { generateSgpa } from './logic/semester_gpa'
import { SgpaEstimator } from './components/sgpaEstimator';
import { CgpaForm } from './components/CgpaForm';
import { CgpaEstimator } from './components/cgpaEstimator';
import { Header } from './components/Header';

export function App() {
  const [subjectsList, setSubjectsList] = useState([]);
  const [table, setTable] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [estimateSgpa , setEstimateSgpa] = useState(false);
  const [addExtraSubjects , setAddExtraSubjects] = useState(false);
  const [extraSubjectsList , setExtraSubjectsList] = useState([]);
  const [estimatedSGPA , setEstimatedSGPA] = useState('');
  const [estimateCgpa, setEstimateCgpa] = useState(false);
  const [estimatedCGPA, setEstimatedCGPA] = useState('');
  const saved = localStorage.getItem('grademap-subjects');
  useEffect(() => {
    if(saved){
      setSubjectsList(JSON.parse(saved));
    }
  },[]);

  useEffect(() =>{
      localStorage.setItem('grademap-subjects',JSON.stringify(subjectsList));
  },[subjectsList]);
    
  return (
    <>
      <Header />
      <main className = "flex flex-col md:flex-row gap-6 md:gap-10 max-w-6xl mx-auto p-4 md:p-8">
        <div>
          <SubjectForm subjectsList = {subjectsList} setSubjectsList = {setSubjectsList}/>
          <button type="button" onClick = {() => {setTable(true); setEstimateSgpa(true)}} className = "sticky bottom-4 z-10 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-3 mt-4 transition-colors shadow-lg">Check Required Marks</button>
        </div>
        {
          subjectsList.length > 0 && <SubjectList subjects = {subjectsList}/>
        }
      </main>
      
      {(table && subjectsList.length >0) && <SubjectTable subjects = {subjectsList} selectedSubject = {selectedSubject || subjectsList[0]} setSelectedSubject = {setSelectedSubject} setSubjectsList = {setSubjectsList}/>}
      {table && (selectedSubject || subjectsList[0]) && <MarksEstimator selectedSubject = {selectedSubject || subjectsList[0]}/>}

      {estimateSgpa && 
      <div>
        <button className = "bg-red-900 p-4 cursor-pointer" onClick = {() => {setAddExtraSubjects(true)}}> + Add Extra Subjects</button> 
        <p>"Don't forget lab-only or non-graded courses for an accurate SGPA"</p>  
      </div>}
      {addExtraSubjects && <ExtraSubjectsForm extraSubjectsList = {extraSubjectsList} setExtraSubjectsList = {setExtraSubjectsList}/> }
      {estimateSgpa && <button type = "button" className = "bg-red-400 p-4 cursor-pointer" onClick = {() => {setEstimatedSGPA(generateSgpa(subjectsList , extraSubjectsList))}}>Estimate SGPA</button>}
      {(estimateSgpa && estimatedSGPA) && <SgpaEstimator estimatedSGPA = {estimatedSGPA} />}
      {estimatedSGPA && <button type="button" onClick = {() => setEstimateCgpa(true)}>Calculate CGPA</button>}
      {estimateCgpa && <CgpaForm setEstimatedCGPA = {setEstimatedCGPA} estimatedSGPA = {estimatedSGPA} />}
      {(estimateCgpa && estimatedCGPA) && <CgpaEstimator estimatedCGPA = {estimatedCGPA}/>}
    </>
  );
}
