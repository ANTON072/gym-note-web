import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BODY_PART_OPTIONS } from "@/constants/bodyParts";

interface BodyPartSelectProps {
  // 選択された値
  value?: string;
  // 値が変更されたときのコールバック
  onValueChange?: (value: string) => void;
  // name属性（フォーム送信時に使用）
  name?: string;
  // 無効化フラグ
  disabled?: boolean;
  // すべての選択肢を含めるかどうか
  showAllOption?: boolean;
  // すべてのオプションのラベル
  allOptionLabel?: string;
  // プレースホルダーテキスト
  placeholder?: string;
  // aria-invalid属性
  "aria-invalid"?: boolean;
  // id属性
  id?: string;
  // サイズ
  size?: "sm" | "default";
  // カスタムクラス名
  className?: string;
}

export function BodyPartSelect({
  value,
  onValueChange,
  name,
  disabled = false,
  showAllOption = false,
  allOptionLabel = "すべて",
  placeholder = "選択してください",
  "aria-invalid": ariaInvalid,
  id,
  size = "default",
  className,
}: BodyPartSelectProps) {
  // 空文字列を"all"に変換し、undefinedの場合も"all"にする
  const selectValue = value || "all";

  const handleValueChange = (newValue: string) => {
    // "all"を空文字列に戻す
    onValueChange?.(newValue === "all" ? "" : newValue);
  };

  return (
    <Select name={name} value={selectValue} onValueChange={handleValueChange} disabled={disabled}>
      <SelectTrigger aria-invalid={ariaInvalid} id={id} size={size} className={className}>
        <SelectValue placeholder={showAllOption ? allOptionLabel : placeholder} />
      </SelectTrigger>
      <SelectContent position="popper">
        {showAllOption && (
          <>
            <SelectItem value="all">{allOptionLabel}</SelectItem>
            <SelectSeparator />
          </>
        )}
        {BODY_PART_OPTIONS.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

/**
 * @deprecated renderBodyPartOptions は非推奨です。代わりに BodyPartSelect コンポーネントを使用してください。
 */
export const renderBodyPartOptions = ({
  includeAllOption = false,
  allOptionLabel = "すべて",
  placeholder = "選択してください",
}: {
  includeAllOption?: boolean;
  allOptionLabel?: string;
  placeholder?: string;
} = {}) => {
  return (
    <>
      {includeAllOption && <option value="">{allOptionLabel}</option>}
      {!includeAllOption && <option value="">{placeholder}</option>}
      {BODY_PART_OPTIONS.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </>
  );
};
