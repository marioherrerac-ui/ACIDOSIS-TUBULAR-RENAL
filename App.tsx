
import React, { useState, useMemo, useCallback } from 'react';
import { COURSE_DATA } from './constants';
import { UserAnswers } from './types';
import ProgressBar from './components/ProgressBar';
import LearningModule from './components/LearningModule';
import Quiz from './components/Quiz';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});

  const currentModule = COURSE_DATA[currentModuleIndex];
  const totalModules = COURSE_DATA.length;

  const handleAnswerSelect = useCallback((moduleId: number, questionIndex: number, answerIndex: number) => {
    setUserAnswers(prev => ({
      ...prev,
      [moduleId]: {
        ...(prev[moduleId] || {}),
        [questionIndex]: answerIndex,
      },
    }));
  }, []);

  const isCurrentModuleQuizComplete = useMemo(() => {
    const moduleAnswers = userAnswers[currentModule.id] || {};
    return currentModule.quiz.length === Object.keys(moduleAnswers).length;
  }, [userAnswers, currentModule]);

  const goToNextModule = () => {
    if (currentModuleIndex < totalModules - 1) {
      setCurrentModuleIndex(prev => prev + 1);
    }
  };

  const goToPreviousModule = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-sky-800">Curso: Acidosis Tubular Renal Neonatal</h1>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">Una guía sencilla para entender esta condición.</p>
        </header>
        
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-6">
          <ProgressBar currentStep={currentModuleIndex + 1} totalSteps={totalModules} />
          <div className="mt-8">
            <LearningModule module={currentModule} />
            <Quiz
              moduleId={currentModule.id}
              questions={currentModule.quiz}
              userAnswers={userAnswers[currentModule.id] || {}}
              onAnswerSelect={handleAnswerSelect}
            />
          </div>
        </div>

        <Navigation
          currentModuleIndex={currentModuleIndex}
          totalModules={totalModules}
          onNext={goToNextModule}
          onPrevious={goToPreviousModule}
          isNextDisabled={!isCurrentModuleQuizComplete}
        />

        <footer className="text-center mt-8 text-sm text-slate-500">
            <p>Contenido educativo adaptado para fines de demostración.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
