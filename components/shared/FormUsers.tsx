import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import ButtonAction from "@/components/shared/ButtonAction";
import { CustomField } from "@/components/shared/CustomField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Gender, Status } from "@/constants";
import { useCreateUser, useUpdateUser } from "@/services/users/mutation";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import { clearModal } from "@/store/modal/action";

export const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  gender: z.string(),
  status: z.string(),
});

const FormUsers = () => {
  const { data, modalAction, isOpen } = useSelector(
    (state: IRootState) => state.modal
  );

  const initialValues = {
    name: data?.name || "",
    email: data?.email || "",
    gender: data?.gender || "",
    status: data?.status || "",
  };

  const [payload, setPayload] = useState<UserPayload>(initialValues);

  const userCreateMutation = useCreateUser();
  const userUpdateMutation = useUpdateUser();
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  const onSubmitAction = async (values: z.infer<typeof formSchema>) => {
    const payload = {
      name: values.name,
      email: values.email,
      gender: values.gender,
      status: values.status,
    };

    if (modalAction === "add" || !isOpen) {
      userCreateMutation.mutate(payload);
    } else {
      userUpdateMutation.mutate({ id: data?.id, ...payload });
    }

    dispatch(clearModal());
    form.reset();
  };

  const handleChangedInput = (name: string, value: string) => {
    setPayload({ ...payload, [name]: value });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitAction)}
        className="flex flex-col gap-3"
      >
        <CustomField
          control={form.control}
          name="name"
          formLabel="Name"
          className="w-full"
          render={({ field }) => (
            <Input
              value={field.value}
              className="input-field"
              placeholder="Input Name"
              onChange={(e) => {
                handleChangedInput("name", e.target.value);
                field.onChange(e.target.value);
              }}
            />
          )}
        />

        <CustomField
          control={form.control}
          name="email"
          formLabel="Email"
          className="w-full"
          render={({ field }) => (
            <Input
              className="input-field"
              value={field.value}
              placeholder="Input Email"
              onChange={(e) => {
                handleChangedInput("email", e.target.value);
                field.onChange(e.target.value);
              }}
            />
          )}
        />

        <CustomField
          control={form.control}
          name="gender"
          formLabel="Gender"
          className="w-full"
          render={({ field }) => (
            <Select
              onValueChange={(value) => {
                handleChangedInput("gender", value);
                field.onChange(value);
              }}
              value={field.value}
            >
              <SelectTrigger className="select-field">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                {Gender.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                    className="select-item"
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        <CustomField
          control={form.control}
          name="status"
          formLabel="Status"
          className="w-full"
          render={({ field }) => (
            <Select
              onValueChange={(value) => {
                handleChangedInput("status", value);
                field.onChange(value);
              }}
              value={field.value}
            >
              <SelectTrigger className="select-field">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                {Status.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                    className="select-item"
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        <div className="mt-5 w-full">
          <ButtonAction
            disabled={Object.values(payload).some((item) => item === "")}
            action="add"
          />
        </div>
      </form>
    </Form>
  );
};

export default FormUsers;
