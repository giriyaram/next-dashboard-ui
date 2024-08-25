"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputFeild from "../InputFeild";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be least 3 charectors long" })
    .max(20, { message: "Username must be most 20 charectors long" }),
  email: z.string().email({ message: "Inavild email addres !" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 charectors long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood type is required!" }),
  birthday: z.date({ message: "Date is required!" }),
  sex: z.enum(["male", "female"], { message: "Sec is required!" }),
  img: z.instanceof(File, { message: "Image is required!" }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form action="" className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new teacher</h1>
      <span className="text-xs text-gray-400">Authentication Information</span>
      <div className="flex flex-wrap gap-4 justify-between">
        <InputFeild
          label="Username"
          type="text"
          register={register}
          defaultValue={data?.username}
          name="username"
          error={errors.username}
        />
        <InputFeild
          label="Email"
          type="email"
          register={register}
          defaultValue={data?.email}
          name="email"
          error={errors.email}
        />
        <InputFeild
          label="Password"
          type="password"
          register={register}
          defaultValue={data?.password}
          name="password"
          error={errors.password}
        />
      </div>
      <span className="text-xs text-gray-400">Personal Information</span>

      <div className="flex flex-wrap gap-4 justify-between">
        <InputFeild
          label="First Name"
          type="text"
          register={register}
          defaultValue={data?.firstName}
          name="firstName"
          error={errors.firstName}
        />
        <InputFeild
          label="Last Name"
          type="text"
          register={register}
          defaultValue={data?.lastName}
          name="lastName"
          error={errors.lastName}
        />
        <InputFeild
          label="phone"
          type="text"
          register={register}
          defaultValue={data?.phone}
          name="phone"
          error={errors.phone}
        />
        <InputFeild
          label="Address"
          type="text"
          register={register}
          defaultValue={data?.address}
          name="address"
          error={errors.address}
        />
        <InputFeild
          label="Blood Type"
          type="text"
          register={register}
          defaultValue={data?.bloodType}
          name="bloodType"
          error={errors.bloodType}
        />
        <InputFeild
          label="Birthday"
          type="date"
          register={register}
          defaultValue={data?.birthday}
          name="birthday"
          error={errors.birthday}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
