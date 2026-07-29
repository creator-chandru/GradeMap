export function CgpaEstimator(props){
    return (
        <div id = "cgpa-block" className="mt-8 rounded-3xl border border-amber-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-center shadow-xl shadow-slate-950/40">
            <p className="text-base font-bold uppercase tracking-[0.25em] text-amber-300 md:text-lg">
                Final CGPA
            </p>

            <p className="mt-4 bg-gradient-to-r from-amber-300 via-yellow-100 to-blue-400 bg-clip-text text-6xl font-black tracking-tight text-transparent drop-shadow-lg md:text-8xl">
                {props.estimatedCGPA}
            </p>
        </div>
    );
}
