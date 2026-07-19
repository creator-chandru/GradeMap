import {useState} from 'react';
import { calculateRequiredMark } from "./logic/grades";
import { SubjectForm } from "./components/subjectForm";
import { SubjectList } from "./components/subjectList";
import { SubjectTable } from './components/subjectsTable';
import { MarksEstimator } from './components/marksEstimator';
export function App() {
  const [subjectsList, setSubjectsList] = useState([]);
  const [table, setTable] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');
  return (
    <>
      <main className = "flex flex-row gap-3 my-12">
        <SubjectForm subjectsList = {subjectsList} setSubjectsList = {setSubjectsList}/>
        {
          subjectsList.length > 0 && <SubjectList subjects = {subjectsList}/>
        }
      </main>
      <button type="button" onClick = {() => setTable(true)} className = " bg-blue-600 p-4 border-none rounded-xl text-xl font-bold mt-2 block m-auto">Check Required Marks</button>
      {(table && subjectsList.length >0) && <SubjectTable subjects = {subjectsList} selectedSubject = {selectedSubject} setSelectedSubject = {setSelectedSubject}/>}
      {table && (selectedSubject || subjectsList[0]) && <MarksEstimator selectedSubject = {selectedSubject || subjectsList[0]}/>}
    </>
  );
}
