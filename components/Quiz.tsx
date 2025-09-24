
import React from 'react';
import { Question } from '../types';

interface QuizProps {
  moduleId: number;
  questions: Question[];
  userAnswers: { [questionIndex: number]: number | null };
  onAnswerSelect: (moduleId: number, questionIndex: number, answerIndex: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ moduleId, questions, userAnswers, onAnswerSelect }) => {
  
  const getOptionClasses = (questionIndex: number, optionIndex: number, correctAnswerIndex: number) => {
    const selectedAnswer = userAnswers[questionIndex];
    const isSelected = selectedAnswer === optionIndex;
    const isAnswered = selectedAnswer !== undefined && selectedAnswer !== null;

    let baseClasses = "w-full text-left p-4 my-2 border rounded-lg transition-all duration-200 cursor-pointer text-slate-800";
    
    if (!isAnswered) {
      return `${baseClasses} bg-white border-slate-300 hover:bg-sky-50 hover:border-sky-400`;
    }
    
    if (optionIndex === correctAnswerIndex) {
      return `${baseClasses} bg-green-100 border-green-500 text-green-800 font-semibold cursor-not-allowed`;
    }
    
    if (isSelected && optionIndex !== correctAnswerIndex) {
      return `${baseClasses} bg-red-100 border-red-500 text-red-800 cursor-not-allowed`;
    }

    return `${baseClasses} bg-slate-50 border-slate-200 text-slate-500 cursor-not-allowed`;
  };

  return (
    <div className="mt-10 pt-6 border-t border-slate-200">
      <h4 className="text-xl font-bold text-slate-800 mb-4">Test de Autoevaluación</h4>
      <div className="space-y-8">
        {questions.map((q, qIndex) => (
          <div key={qIndex}>
            <p className="font-semibold text-slate-700 mb-2">{`${qIndex + 1}. ${q.text}`}</p>
            <div>
              {q.options.map((option, oIndex) => (
                <button
                  key={oIndex}
                  onClick={() => onAnswerSelect(moduleId, qIndex, oIndex)}
                  className={getOptionClasses(qIndex, oIndex, q.correctAnswerIndex)}
                  disabled={userAnswers[qIndex] !== undefined && userAnswers[qIndex] !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            {userAnswers[qIndex] !== undefined && userAnswers[qIndex] !== null && (
               <div className="mt-3 p-3 bg-sky-50 border-l-4 border-sky-400 text-sky-800 rounded-r-lg">
                <p className="text-sm">{q.feedback}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
