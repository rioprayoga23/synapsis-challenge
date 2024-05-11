import { Button } from "@/components/ui/button";
import { ActionType } from "@/constants";

const ButtonAction = ({ handleAction, action }: ButtonActionProps) => {
  return (
    <Button
      type="submit"
      className={`w-full gap-1 rounded-[5px] ${
        action === "delete" && "bg-red-400 hover:bg-red-400/90"
      }`}
      size={"sm"}
      onClick={handleAction}
    >
      {ActionType({ action })}
    </Button>
  );
};

export default ButtonAction;
