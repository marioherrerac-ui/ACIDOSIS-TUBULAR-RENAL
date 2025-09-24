
export interface Question {
  text: string;
  options: string[];
  correctAnswerIndex: number;
  feedback: string;
}

export interface LearningModuleData {
  id: number;
  title: string;
  content: string[];
  quiz: Question[];
}

export interface UserAnswers {
  [moduleId: number]: {
    [questionIndex: number]: number | null;
  };
}
