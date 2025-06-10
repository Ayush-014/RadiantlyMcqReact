const Question = ({ question, onAnswer }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        {question.question}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="p-4 bg-white border-2 border-blue-100 hover:border-blue-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full mr-3 font-medium">
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-lg">{option}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;