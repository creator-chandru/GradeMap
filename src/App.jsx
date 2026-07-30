import {useState} from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
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
import { ExtraSubjectList } from './components/extraSubjectsList';

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
  const savedSubjects = localStorage.getItem('grademap-subjects');
  const savedExtraSubjects = localStorage.getItem('grademap-extra-subjects');
  
  useEffect(() => {
    if(savedSubjects){
      setSubjectsList(JSON.parse(savedSubjects));
    }
  },[]);

  useEffect(() => {
    if(savedExtraSubjects){
      setExtraSubjectsList(JSON.parse(savedExtraSubjects));
    }
  },[]);

  useEffect(() =>{
      localStorage.setItem('grademap-subjects',JSON.stringify(subjectsList));
  },[subjectsList]);
    
  useEffect(() => {
    localStorage.setItem('grademap-extra-subjects',JSON.stringify(extraSubjectsList));
  },[extraSubjectsList]);

  useEffect(() => {
    if (table){
        document.getElementById("subject-table")?.scrollIntoView({
            behavior: "smooth",
        });
    }
  }, [table]);

  const buttonRef = useRef(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const originalOffset = buttonRef.current?.offsetTop;

    function handleScroll() {
      if (window.scrollY > originalOffset && !table) {
        setIsStuck(true);
      } else {
        setIsStuck(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [table]);

  return (
    <>
      <Header />
      <main className = "flex flex-col md:flex-row md:items-stretch gap-6 md:gap-10 max-w-6xl mx-auto p-4 md:p-8">

          <div className = "w-full md:w-auto md:flex-shrink-0 flex flex-col">
              <SubjectForm subjectsList = {subjectsList} setSubjectsList = {setSubjectsList}/>
              <button ref = {buttonRef} type="button" disabled={subjectsList.length === 0} onClick = {() => {setTable(true); setEstimateSgpa(true)}} className = {`transition-all duration-300 ease-in-out ${isStuck ? "fixed bottom-4 inset-x-4 md:inset-x-auto md:w-full" : "w-full mt-4"} z-20 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-3 transition-colors shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}>
                Check Required Marks
              </button>
          </div>

          {
              subjectsList.length > 0 && <SubjectList subjectsList = {subjectsList} setSubjectsList = {setSubjectsList}/>
          }

      </main>
      
      {(table && subjectsList.length >0) && <SubjectTable subjects = {subjectsList} selectedSubject = {selectedSubject || subjectsList[0]} setSelectedSubject = {setSelectedSubject} setSubjectsList = {setSubjectsList}/>}

      {table && (selectedSubject || subjectsList[0]) && <MarksEstimator selectedSubject = {selectedSubject || subjectsList[0]}/>}

      <div className="mt-5 flex items-start gap-2.5 w-full md:mt-6 md:gap-4">

            {estimateSgpa && <div id = "extra-subject-form" className = "flex-1 flex flex-col">

                <button className = "flex-1 rounded-xl border border-amber-400/40 bg-gradient-to-br from-amber-700 via-amber-600 to-yellow-700 px-4 py-3 text-sm font-semibold text-amber-50 shadow-lg shadow-amber-900/40 transition-all duration-300 hover:from-amber-600 hover:via-amber-500 hover:to-yellow-600 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/25 active:scale-[0.98] md:px-7 md:py-5 md:text-lg md:rounded-2xl cursor-pointer" 
                onClick = {() => {setAddExtraSubjects(true); setTimeout(() => { document.getElementById("extra-subject-form").scrollIntoView({behavior: "smooth"});},0);}}>
                   + Add Extra Subjects
                </button> 

                <p className = "mt-1.5 text-center text-[11px] leading-relaxed font-medium text-red-400 md:text-lg md:mt-2">"Don't forget lab-only or non-graded courses for an accurate SGPA"</p>  

            </div>}

            {estimateSgpa && <button type = "button" className = "flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 shadow-lg shadow-blue-900/30 hover:from-blue-500 hover:to-blue-400 hover:shadow-blue-500/30 active:scale-[0.98] md:px-8 md:py-5 md:text-lg md:rounded-2xl cursor-pointer" 
                onClick = {() => {setEstimatedSGPA(generateSgpa(subjectsList , extraSubjectsList)); setTimeout(()=>{document.getElementById('sgpa-block').scrollIntoView({ behavior: 'smooth' });},0)}}>
                  Estimate SGPA
            </button>}

      </div>

      {addExtraSubjects && <ExtraSubjectsForm extraSubjectsList = {extraSubjectsList} setExtraSubjectsList = {setExtraSubjectsList}/> }

      {(extraSubjectsList.length > 0 && addExtraSubjects) && <ExtraSubjectList extraSubjectsList = {extraSubjectsList} setExtraSubjectsList = {setExtraSubjectsList}/>}

      {(estimateSgpa && estimatedSGPA) && <SgpaEstimator estimatedSGPA = {estimatedSGPA} />}

      {estimatedSGPA && <button type="button" onClick = {() => {setEstimateCgpa(true); setTimeout(()=>{document.querySelector('#cgpa-form').scrollIntoView({behavior : "smooth" });},0);}} className = "mt-6 block mx-auto md:mt-7 rounded-xl border-amber-400/40 bg-gradient-to-br from-amber-700 via-amber-600 to-yellow-700 px-8 py-3 text-sm md:text-base font-bold text-amber-50 shadow-lg shadow-amber-900/40 transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:via-amber-500 hover:to-yellow-600 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/25 active:scale-95">
        Calculate CGPA
      </button>}

      {estimateCgpa && <CgpaForm setEstimatedCGPA = {setEstimatedCGPA} estimatedSGPA = {estimatedSGPA} />}

      {(estimateCgpa && estimatedCGPA) && <CgpaEstimator estimatedCGPA = {estimatedCGPA}/>}
    </>
  );
}
