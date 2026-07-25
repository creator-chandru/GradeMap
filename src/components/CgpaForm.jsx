import { generateCgpa } from "../logic/semester_gpa";

export function CgpaForm(props){

    function handleCumulativeInputs(formData){
        const currentCGPA = Number(formData.get('Cumulativegpa'));
        const totalCredits = Number(formData.get('totalCredits'));
        
        const newCGPA = generateCgpa(currentCGPA,totalCredits,props.estimatedSGPA);
        props.setEstimatedCGPA(newCGPA);
    }
    return (
        <section>
            <form action = {handleCumulativeInputs}>
                <label>
                    Enter Current CGPA <input type="number" step = "0.01" placeholder = "e.g. 9.77" name = "Cumulativegpa" required />
                </label>
                <label>
                    Enter total Credits: <input type="number" placeholder = "e.g. 69" name = "totalCredits" required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}