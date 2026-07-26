export function Header(){
    return (
        <header className = "flex flex-col justify-center items-center h-screen ">
            <p className = "font-sans text-md font-medium text-center text-blue-400">Grademap</p>
            <div className = "p-5">
                <p className = "font-sans text-6xl font-bold text-center text-blue-400">Grademap</p>
                <p className = "font-sans text-4xl text-yellow-500 text-center mt-1">See. Assess. Predict.</p>
                <p className = "font-sans text-lg mt-2 text-center">Visualize academic progress and predict future performace</p>
                <button className = "bg-blue-300 px-15 py-2 block m-auto mt-4 text-2xl font-bold rounded-lg hover:bg-sky-700 cursor-pointer" onClick = {()=>{document.getElementById('subject-form').scrollIntoView({ behavior: 'smooth' })}}>Begin</button>
            </div>
        </header>
    );

}