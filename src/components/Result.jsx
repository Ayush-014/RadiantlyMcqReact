const Results = ({ score, total, answers, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  let resultColor = 'text-red-500';
  let resultMessage = 'Keep going!';
  
  if (percentage >= 75) {
    resultColor = 'text-green-500';
    resultMessage = 'Excellent work!';
  } else if (percentage >= 50) {
    resultColor = 'text-yellow-500';
    resultMessage = 'Good effort!';
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Quiz Completed!</h2>
        <div className={`text-5xl font-bold my-4 ${resultColor}`}>
          {percentage}%
        </div>
        <p className="text-xl text-gray-600">
          {resultMessage} You got {score} out of {total} questions right.
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
          Detailed Review
        </h3>
        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
          {answers.map((item, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg border ${item.isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
            >
              <div className="font-medium text-gray-800">
                Q{index + 1}: {item.questionText}
              </div>
              <div className={`mt-2 ${item.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                Your answer: <span className="font-medium">{item.answer}</span>
              </div>
              {!item.isCorrect && (
                <div className="mt-1 text-green-700">
                  Correct answer: <span className="font-medium">{item.correctAnswer}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center">
        <button 
          onClick={onRestart}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Results;