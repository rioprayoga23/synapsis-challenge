import CardUser from "@/components/shared/CardUser";
import Hero from "@/components/shared/Hero";

import DrawerMobile from "@/components/shared/Drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import FormUsers from "@/components/shared/FormUsers";

const UsersPage = () => {
  return (
    <>
      <Hero
        title="Synapsis Enthusiast"
        subtitle="Come on, become our member."
      />

      <div className="container py-10">
        <div className="wrap-users">
          <div className="list-users">
            {/* header title */}
            <div className="flex justify-between">
              <h2 className="header-title">Users List</h2>

              <DrawerMobile>
                <Button size="sm" className="btn-add">
                  <PlusIcon />
                  Add
                </Button>
              </DrawerMobile>
            </div>

            {/* search input */}
            <Input
              type="search"
              placeholder="Search here..."
              className="mb-10 mt-3"
            />

            {/* list users */}
            <div className="flex flex-col gap-5">
              {Array.from({ length: 5 }).map((item, index) => (
                <CardUser key={index} />
              ))}
            </div>
          </div>

          <aside className="form-users">
            <h2 className="header-title mb-3">Add User</h2>
            <FormUsers />
          </aside>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
