
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-slate-700">Progreso del Curso</h2>
        <span className="text-sm font-medium text-sky-700">{`Módulo ${currentStep} de ${totalSteps}`}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden shadow-inner">
        <div
          className="bg-sky-500 h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
