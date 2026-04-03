export function NextButton({ dispatch }){
    return(
        <button 
            className="bg-[#1b1c1e] text-xl shadow-xl rounded-4xl w-24 hover:ring-2 hover:ring-blue-500 hover:cursor-pointer"
            onClick={() => dispatch({ type: "nextQuestion" })}
        >
            Next
        </button>
    );
}

export function FinishButton({dispatch}){
    return(
        <button 
            className="bg-[#1b1c1e] text-xl shadow-xl rounded-4xl w-24 hover:ring-2 hover:ring-blue-500 hover:cursor-pointer"
            onClick={() => dispatch({ type: "finish" })}
        >
            Finish
        </button>
    );
}
