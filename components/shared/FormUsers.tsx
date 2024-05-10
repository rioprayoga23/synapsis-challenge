import { CustomField } from "@/components/shared/CustomField";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

import ButtonAction from "@/components/shared/ButtonAction";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Gender, Status } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  gender: z.string(),
  status: z.string(),
});

const FormUsers = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: initialValues,
  });

  return (
    <Form {...form}>
      <form action="" className="flex flex-col gap-3">
        <CustomField
          control={form.control}
          name="name"
          formLabel="Name"
          className="w-full"
          render={({ field }) => <Input {...field} className="input-field" />}
        />

        <CustomField
          control={form.control}
          name="email"
          formLabel="Email"
          className="w-full"
          render={({ field }) => <Input {...field} className="input-field" />}
        />

        <CustomField
          control={form.control}
          name="gender"
          formLabel="Gender"
          className="w-full"
          render={({ field }) => (
            <Select
              onValueChange={(value) =>
                // onSelectFieldHandler(value, field.onChange)
                null
              }
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
          name="gender"
          formLabel="Status"
          className="w-full"
          render={({ field }) => (
            <Select
              onValueChange={(value) =>
                // onSelectFieldHandler(value, field.onChange)
                null
              }
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
          <ButtonAction action="add" />
        </div>
      </form>
    </Form>
  );
};

export default FormUsers;
