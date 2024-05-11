import CardUser from "@/components/shared/CardUser";
import Hero from "@/components/shared/Hero";

import DrawerModal from "@/components/shared/Drawer";
import FormUsers from "@/components/shared/FormUsers";
import SkeletonCardUser from "@/components/shared/SkeletonCardUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAllUsers } from "@/services/users/queries";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Sticky from "react-sticky-el";
import { useDebounce } from "use-debounce";
import { useDispatch } from "react-redux";
import { setModal } from "@/store/modal/action";

const UsersPage = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState<string>("");
  const [value] = useDebounce(searchKey, 1000);

  const usersQuery = useAllUsers({ searchKey: value });

  const [ref, inView] = useInView({
    threshold: 1,
    skip: !usersQuery.hasNextPage,
  });

  useEffect(() => {
    if (inView) {
      usersQuery.fetchNextPage();
    }
  }, [inView]);

  const onInputChangeHandler = (e: any) => {
    const { value } = e?.target;
    setSearchKey(value);
  };

  const handleClickButton = () => {
    dispatch(setModal({ modalAction: "add" }));
  };

  return (
    <>
      <Hero
        title="Synapsis Enthusiast"
        subtitle="Join the Synapsis Enthusiast Community Today!"
      />

      <div className="container py-10">
        <div className="wrap-users">
          <div className="list-users">
            {/* header title */}
            <div className="flex justify-between">
              <h2 className="header-title">Users List</h2>

              <Button size="sm" className="btn-add" onClick={handleClickButton}>
                <PlusIcon />
                Add
              </Button>
            </div>

            {/* search input */}

            <Input
              type="search"
              placeholder="Search here..."
              className="mb-10 mt-3"
              onChange={onInputChangeHandler}
            />

            {/* list users */}
            <div className="flex flex-col gap-5">
              {usersQuery.data?.pages.map((item: any, index) =>
                item.data.map((subItem: Users) => (
                  <CardUser data={subItem} refCard={ref} key={index} />
                ))
              )}

              {/* show skeleton when loading */}

              {(usersQuery.isFetching || usersQuery.isLoading) &&
                !usersQuery.isError &&
                Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonCardUser key={index} />
                ))}
            </div>
          </div>

          <Sticky stickyClassName="mt-[75px]" topOffset={-85}>
            <aside className="form-users">
              <h2 className="header-title mb-3">Add User</h2>
              <FormUsers />
            </aside>
          </Sticky>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
