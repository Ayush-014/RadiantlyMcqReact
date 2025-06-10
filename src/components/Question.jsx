const Question = ({ question, onAnswer }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">{question.question}</h2>
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full p-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg transition-colors duration-200"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;