import { Button } from "@/components/ui/button";
import { ActionType } from "@/constants";

const ButtonAction = ({ action }: ButtonActionProps) => {
  return (
    <Button
      className={`w-full gap-1 rounded-[5px] ${
        action === "delete" && "bg-red-400 hover:bg-red-400/90"
      }`}
      size={"sm"}
    >
      {ActionType({ action })}
    </Button>
  );
};

export default ButtonAction;
