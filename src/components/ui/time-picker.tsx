import { forwardRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TimePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>(
  ({ value = "", onChange, disabled }, ref) => {
    // "HH:MM"形式から時と分を抽出
    const [hour, minute] = value.split(":").map((v) => v || "");

    // 時の選択肢（0-23）
    const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));

    // 分の選択肢（15分刻み）
    const minutes = ["00", "15", "30", "45"];

    const handleHourChange = (newHour: string) => {
      const newMinute = minute || "00";
      onChange?.(`${newHour}:${newMinute}`);
    };

    const handleMinuteChange = (newMinute: string) => {
      const newHour = hour || "00";
      onChange?.(`${newHour}:${newMinute}`);
    };

    return (
      <div ref={ref} className="flex items-center gap-1">
        <Select value={hour} onValueChange={handleHourChange} disabled={disabled}>
          <SelectTrigger size="sm" className="w-[70px]">
            <SelectValue placeholder="時" />
          </SelectTrigger>
          <SelectContent>
            {hours.map((h) => (
              <SelectItem key={h} value={h}>
                {h}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-sm">時</span>
        <Select value={minute} onValueChange={handleMinuteChange} disabled={disabled}>
          <SelectTrigger size="sm" className="w-[70px]">
            <SelectValue placeholder="分" />
          </SelectTrigger>
          <SelectContent>
            {minutes.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-sm">分</span>
      </div>
    );
  },
);

TimePicker.displayName = "TimePicker";
