
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { programData } from '../../data/chart-data';

export default function ProgramBarChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={programData}>
          <XAxis dataKey="program" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="students" radius={[6, 6, 0, 0]}>
            {programData.map((entry) => (
              <Cell key={entry.program} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
