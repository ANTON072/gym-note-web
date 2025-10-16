import { BODY_PART_OPTIONS } from "@/constants/bodyParts";

interface BodyPartOptionsProps {
  includeAllOption?: boolean;
  allOptionLabel?: string;
  placeholder?: string;
}

export const renderBodyPartOptions = ({
  includeAllOption = false,
  allOptionLabel = "すべて",
  placeholder = "選択してください",
}: BodyPartOptionsProps = {}) => {
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
