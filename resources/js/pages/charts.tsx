import { Head } from '@inertiajs/react';
import MonthlyLineChart from '../components/charts/MonthlyLineChart';
import ProgramBarChart from '../components/charts/ProgramBarChart';
import ProgramPieChart from '../components/charts/ProgramPieChart';

export default function Charts() {
    const widgets = [
        { title: 'Monthly Registrations', chart: <MonthlyLineChart /> },
        { title: 'Students by Program', chart: <ProgramBarChart /> },
        { title: 'Program Distribution', chart: <ProgramPieChart /> },
    ];

    return (
        <main className="min-h-screen bg-slate-50 p-6">
            <Head title="Student Analytics" />
            <h1 className="text-3xl font-bold">Student Analytics</h1>
            <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
                {widgets.map(({ title, chart }) => (
                    <section key={title} className="min-w-0 rounded-xl bg-white p-6 shadow">
                        <h2 className="mb-4 font-semibold">{title}</h2>
                        {chart}
                    </section>
                ))}
            </div>
        </main>
    );
}