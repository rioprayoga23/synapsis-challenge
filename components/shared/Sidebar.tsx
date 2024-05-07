import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navlink } from "@/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link href={"/"}>
        <Image src="/images/logo.png" alt="asd" width={120} height={120} />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 rounded">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <div className="sidebar-item mt-6">
            {navlink.map((item, i) => (
              <Link href={item.route} className="nav-item" key={i}>
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
