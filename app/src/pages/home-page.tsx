import { CaloriesOverviewCard } from '@/components/home/calories-overview-card';
import { HomeHeader } from '@/components/home/home-header';
import { homeMockData } from '@/components/home/home-mock-data';
import { MacroBreakdownCard } from '@/components/home/macro-breakdown-card';
import { TodaysEntriesCard } from '@/components/home/todays-entries-card';
import { WeeklyCaloriesCard } from '@/components/home/weekly-calories-card';

export default function HomePage() {
  return (
    <div className="min-h-svh">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-5 p-4 sm:p-6">
        <HomeHeader today={new Date()} />

        <section className="grid gap-6 lg:grid-cols-2" aria-label="Daily summary">
          <CaloriesOverviewCard consumed={homeMockData.dailyCaloriesConsumed} goal={homeMockData.dailyCaloriesGoal} />
          <MacroBreakdownCard macros={homeMockData.macros} />
        </section>

        <section aria-label="Weekly calories chart">
          <WeeklyCaloriesCard data={homeMockData.weeklyCalories} />
        </section>

        <section aria-label="Today food entries">
          <TodaysEntriesCard entries={homeMockData.todaysEntries} />
        </section>
      </main>
    </div>
  );
}
