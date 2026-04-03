function Question({ question, index, maxQuestionIndex, totalPoints }) {
  return (
    <div className="question w-200 p-4 flex flex-col gap-4">
      <DateList
        index={index}
        maxQuestionIndex={maxQuestionIndex}
        totalPoints={totalPoints}
      />
      <h2 className="text-2xl font-bold">{question.question}</h2>
      <ul className="options flex flex-col gap-4">
        {question.options.map((option, index) => (
          <li 
            key={index} 
            className="option bg-[#1b1c1e] text-xl shadow-xl rounded-4xl pl-5 h-10 hover:bg-[#2a2c2f] hover:ring-2 hover:cursor-pointer"
        >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DateList({ index, maxQuestionIndex, totalPoints }) {
  return (
    <div className="flex justify-between">
      <p>{`${index + 1} / ${maxQuestionIndex}`}</p>
      <p>Points: {totalPoints}</p>
    </div>
  );
}

export default Question;
