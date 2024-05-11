import { Button } from "@/components/ui/button";
import { actionType } from "@/constants";

const ButtonAction = ({
  handleAction,
  disabled,
  action,
}: ButtonActionProps) => {
  return (
    <Button
      type="submit"
      className={`w-full gap-1 rounded-[5px] ${
        action === "delete" && "bg-red-400 hover:bg-red-400/90"
      }`}
      size={"sm"}
      onClick={handleAction}
      disabled={disabled}
    >
      {actionType({ action })}
    </Button>
  );
};

export default ButtonAction;
