import { questions } from '../data/questions';

const Results = ({ score, total, answers, onRestart }) => {
  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Quiz Results</h2>
        <p className="text-lg mt-2">
          You scored <span className="font-bold">{score}</span> out of <span className="font-bold">{total}</span>
        </p>
        <p className="text-xl mt-1 font-semibold">
          ({Math.round((score / total) * 100)}%)
        </p>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-700 mb-3">Review your answers:</h3>
        <ul className="space-y-2">
          {answers.map((item, index) => {
            const question = questions.find(q => q.id === item.questionId);
            return (
              <li 
                key={index} 
                className={`p-2 rounded ${item.isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
              >
                <p className="font-medium">Q{index + 1}: {question.question}</p>
                <p>Your answer: {item.answer}</p>
                {!item.isCorrect && (
                  <p className="text-sm">Correct answer: {question.answer}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      
      <button 
        onClick={onRestart}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Results;