"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type SeriesConfig = {
  key: string;
  label: string;
  color: string;
};

type ChartBlockProps = {
  title: string;
  subtitle?: string;
  data: Array<Record<string, number | string>>;
  type: "bar" | "line";
  series: SeriesConfig[];
  unit?: string;
};

const ChartBlock = ({ title, subtitle, data, type, series, unit }: ChartBlockProps) => {
  return (
    <div className="glass-panel glow-border rounded-3xl p-6">
      <header className="mb-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {subtitle && <p className="text-sm text-white/70">{subtitle}</p>}
      </header>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={data} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="name" stroke="#cbd5f5" />
              <YAxis stroke="#cbd5f5" unit={unit} />
              <Tooltip
                contentStyle={{
                  background: "#0a0a16",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                }}
                formatter={(value: number) => `${value}${unit ?? ""}`}
              />
              <Legend />
              <ReferenceLine y={0} stroke="#fff" />
              {series.map((serie) => (
                <Bar key={serie.key} dataKey={serie.key} name={serie.label} fill={serie.color} radius={6} />
              ))}
            </BarChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="name" stroke="#cbd5f5" />
              <YAxis stroke="#cbd5f5" unit={unit} />
              <Tooltip
                contentStyle={{
                  background: "#0a0a16",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                }}
                formatter={(value: number) => `${value}${unit ?? ""}`}
              />
              <Legend />
              {series.map((serie) => (
                <Line
                  key={serie.key}
                  type="monotone"
                  dataKey={serie.key}
                  name={serie.label}
                  stroke={serie.color}
                  strokeWidth={3}
                  dot={{ stroke: serie.color, strokeWidth: 2 }}
                />
              ))}
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartBlock;

