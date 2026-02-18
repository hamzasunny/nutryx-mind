const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'] as const;

export type MealType = (typeof mealTypes)[number];

type MealTypeInputProps = {
  value: MealType;
  onChange: (mealType: MealType) => void;
};

export function MealTypeInput({ value, onChange }: MealTypeInputProps) {
  return (
    <div className="bg-primary/10 w-full rounded-md p-1">
      <div className="grid grid-cols-4 gap-1">
        {mealTypes.map((mealType) => {
          const isActive = value === mealType;
          return (
            <button
              key={mealType}
              type="button"
              onClick={() => onChange(mealType)}
              className={`text-primary sm:text-md rounded-md p-2 text-center text-sm font-semibold ${isActive ? 'bg-background' : 'hover:bg-background/50 hover:cursor-pointer'}`}
              aria-pressed={isActive}
            >
              {mealType}
            </button>
          );
        })}
      </div>
    </div>
  );
}
