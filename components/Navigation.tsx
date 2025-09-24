
import React from 'react';

interface NavigationProps {
  currentModuleIndex: number;
  totalModules: number;
  onNext: () => void;
  onPrevious: () => void;
  isNextDisabled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  currentModuleIndex,
  totalModules,
  onNext,
  onPrevious,
  isNextDisabled,
}) => {
  const isFirstModule = currentModuleIndex === 0;
  const isLastModule = currentModuleIndex === totalModules - 1;

  const baseButtonClasses = "px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  const enabledClasses = "bg-sky-600 hover:bg-sky-700 focus:ring-sky-500";
  const disabledClasses = "bg-slate-400 cursor-not-allowed";
  
  return (
    <div className="flex justify-between items-center">
      <button
        onClick={onPrevious}
        disabled={isFirstModule}
        className={`${baseButtonClasses} ${isFirstModule ? disabledClasses : enabledClasses}`}
      >
        &larr; Anterior
      </button>

      {!isLastModule && (
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className={`${baseButtonClasses} ${isNextDisabled ? disabledClasses : enabledClasses}`}
          title={isNextDisabled ? "Completa el test para continuar" : "Siguiente módulo"}
        >
          Siguiente &rarr;
        </button>
      )}
      
      {isLastModule && (
         <div className="text-center px-6 py-3 rounded-lg bg-green-100 text-green-800 font-semibold">
          ¡Curso completado!
        </div>
      )}

    </div>
  );
};

export default Navigation;
