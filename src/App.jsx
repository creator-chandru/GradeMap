import {useState} from 'react';
import { calculateRequiredMark } from "./logic/grades";
import { SubjectForm } from "./components/subjectForm";
import { SubjectList } from "./components/subjectList";
import { RequiredMarks } from './components/requiredMarksTable';

export function App() {
  const [subjectsList, setSubjectsList] = useState([]);
  const [table, setTable] = useState(false);
  return (
    <>
      <SubjectForm subjectsList = {subjectsList} setSubjectsList = {setSubjectsList}/>
      {
        subjectsList.length > 0 && <SubjectList subjects = {subjectsList}/>
      }
      <button type="button" onClick = {() => setTable(true)}>Check Required Marks</button>
      {(table && subjectsList.length >0) && <RequiredMarks subjects = {subjectsList}/>}
    </>
  );
}
