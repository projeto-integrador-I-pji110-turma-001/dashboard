import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAppointmentsPieData } from "@/lib/utils";
import { Appointment } from "@/types/appointment";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#F26419", "#F6AE2D", "#33658A"];

export const APPOINTMENT_TYPE_LABELS: Record<string, string> = {
  cancer: "Pessoas com câncer",
  family: "Familiares",
  other: "Outros diagnósticos",
};

export function AppointmentsChart({
  appointments,
}: {
  appointments: Appointment[];
}) {
    const data = getAppointmentsPieData(appointments);

  return (
    <Card className="col-span-12 md:col-span-3">
      <CardHeader>
        <CardTitle>Atendimentos por Tipo</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value} pessoas`, "Quantidade"]}
              labelFormatter={(name) => `Categoria: ${name}`}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="mt-4 flex flex-wrap gap-4">
          {data.map((entry, index) => (
            <div key={entry.name} className="flex items-center space-x-2">
              <div
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-sm">{entry.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
