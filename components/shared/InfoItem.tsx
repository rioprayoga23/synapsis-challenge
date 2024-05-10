import { InfoIcon } from "@/constants";

const InfoItem = ({ type, title }: InfoItemProps) => {
  return (
    <div className="info-item">
      <div className="hidden sm:block">{InfoIcon({ type })}</div>

      <span className="text-sm">{title}</span>
    </div>
  );
};

export default InfoItem;
