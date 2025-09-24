
import React from 'react';
import { LearningModuleData } from '../types';

interface LearningModuleProps {
  module: LearningModuleData;
}

const LearningModule: React.FC<LearningModuleProps> = ({ module }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-sky-200 pb-2 mb-4">
        {module.title}
      </h3>
      <div className="space-y-4 text-slate-700 leading-relaxed">
        {module.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default LearningModule;
