export type MealType = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';

export type HistoryEntry = {
  id: string;
  date: string;
  name: string;
  type: MealType;
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
};

export type EditDraft = {
  name: string;
  type: MealType;
  calories: string;
  protein: string;
  carbs: string;
  fats: string;
};
