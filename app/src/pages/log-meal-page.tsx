import { PageTopHeader } from '@/components/layout/page-top-header';
import { type MealType, MealTypeInput } from '@/components/log_meal/meal-type-input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function LogMealPage() {
  const [selectedMealType, setSelectedMealType] = useState<MealType>('Breakfast');

  return (
    <div className="min-h-svh px-6 pt-6 pb-24">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-5">
        <PageTopHeader title="Log Meal" />
        <MealTypeInput value={selectedMealType} onChange={setSelectedMealType} />

        <Card className="shadow-lg">
          <CardHeader className="gap-2">
            <div className="text-primary bg-primary/10 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
              <Sparkles className="size-3.5" aria-hidden="true" />
              MEAL DETAILS
            </div>
            <CardTitle className="text-xl tracking-tight">What did you eat?</CardTitle>
            <CardDescription>Describe your meal in natural language.</CardDescription>
          </CardHeader>

          <Separator className="bg-border/70" />

          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Textarea id="meal-description" placeholder="e.g. I had a bowl of oatmeal with banana, almonds, and honey." className="bg-background/20 min-h-44 resize-none" />
              <p className="text-muted-foreground text-xs">Tip: Include ingredients, quantities, and cooking style if possible.</p>
            </div>

            <Button className="mx-auto block w-full sm:w-60" size="lg">
              Save Meal
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
