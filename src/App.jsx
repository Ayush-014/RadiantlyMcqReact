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
        isCorrect
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 p-4">
          <h1 className="text-2xl font-bold text-white text-center">MCQ Quiz App</h1>
        </div>
        
        {!showResults ? (
          <div className="p-6">
            <ProgressBar 
              current={currentQuestion + 1} 
              total={questions.length} 
            />
            <Question
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          </div>
        ) : (
          <Results 
            score={score}
            total={questions.length}
            answers={selectedAnswers}
            onRestart={restartQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default App;