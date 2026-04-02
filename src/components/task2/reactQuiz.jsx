function ReactQuiz(){
    return(
        <div className="Quiz bg-[#191a1b] text-white h-dvh flex flex-col items-center p-20 gap-12">
            <span className="text-8xl">🖥️</span>
            <h1 className="text-6xl">Programming Quiz App</h1>
            <p className="text-2xl">Check your knowledge of programming concepts!</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start Quiz ! 
            </button>
        </div>
    );
}

export default ReactQuiz;