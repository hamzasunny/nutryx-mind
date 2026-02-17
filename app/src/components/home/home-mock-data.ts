export type MacroItem = {
  name: 'Protein' | 'Carbs' | 'Fat';
  grams: number;
  goal: number;
  color: string;
};

export type WeeklyCalories = {
  day: string;
  calories: number;
};

export type FoodEntry = {
  id: string;
  name: string;
  type: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
  calories: number;
};

export const homeMockData = {
  userName: 'Hamza',
  dailyCaloriesConsumed: 1450,
  dailyCaloriesGoal: 2000,
  macros: [
    { name: 'Protein', grams: 108, goal: 140, color: 'var(--color-chart-1)' },
    { name: 'Carbs', grams: 162, goal: 220, color: 'var(--color-chart-2)' },
    { name: 'Fat', grams: 52, goal: 70, color: 'var(--color-chart-3)' }
  ] satisfies MacroItem[],
  weeklyCalories: [
    { day: 'Mon', calories: 1720 },
    { day: 'Tue', calories: 1885 },
    { day: 'Wed', calories: 1640 },
    { day: 'Thu', calories: 1930 },
    { day: 'Fri', calories: 1810 },
    { day: 'Sat', calories: 2020 },
    { day: 'Sun', calories: 1450 }
  ] satisfies WeeklyCalories[],
  todaysEntries: [
    { id: 'entry-1', name: 'Greek Yogurt Bowl', type: 'Breakfast', calories: 320 },
    { id: 'entry-2', name: 'Chicken Salad Wrap', type: 'Lunch', calories: 410 },
    { id: 'entry-3', name: 'Protein Shake', type: 'Snack', calories: 230 },
    { id: 'entry-4', name: 'Quinoa & Veggie Bowl', type: 'Dinner', calories: 360 },
    { id: 'entry-5', name: 'Almond Snack Pack', type: 'Snack', calories: 130 }
  ] satisfies FoodEntry[]
};
