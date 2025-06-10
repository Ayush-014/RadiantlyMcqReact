import { useState } from 'react';
import { questions } from './data/questions.js';
import { Question, Results, ProgressBar } from './components/index.js';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const isCorrect = questions[currentQuestion].answer === answer;
    
    setSelectedAnswers([
      ...selectedAnswers,
      {
        questionId: questions[currentQuestion].id,
        answer,
        isCorrect,
        questionText: questions[currentQuestion].question
      }
    ]);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswers([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <h1 className="text-3xl font-bold text-center">Knowledge Challenge</h1>
          {!showResults && (
            <div className="mt-2 text-center text-blue-100">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          )}
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {!showResults ? (
            <>
              <ProgressBar 
                current={currentQuestion + 1} 
                total={questions.length} 
              />
              <Question
                question={questions[currentQuestion]}
                onAnswer={handleAnswer}
              />
            </>
          ) : (
            <Results 
              score={score}
              total={questions.length}
              answers={selectedAnswers}
              onRestart={restartQuiz}
            />
          )}
        </div>
        

        
        {/* Footer */}
        <div className="bg-gray-50 p-4 border-t border-gray-200 text-center text-gray-600">
          Test your knowledge with our interactive quiz
        </div>
      </div>
    </div>
  );
}

export default App;