"use client";
import { useFormStatus, useFormState } from "react-dom";
import { LoaderIcon } from "lucide-react";
import { subscribe } from "./action";
import { FC } from "react";

const FormInput: FC = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <input
        type="email"
        name="email"
        className="w-full md:w-3/5 px-8 py-4 bg-neutral-100 rounded-lg shadow justify-start items-center gap-2.5 inline-flex"
        placeholder="Email Address"
      />
      <button
        type="submit"
        disabled={pending}
        className={`w-full md:w-2/5 px-8 py-4 bg-indigo-700 rounded-lg justify-center items-center inline-flex text-zinc-50 font-semibold ${
          pending ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-800"
        }`}
      >
        {pending && <LoaderIcon className="animate-spin mr-2" />}
        {pending ? "Subscribing..." : "Subscribe"}
      </button>
    </>
  );
};

export const WaitlistForm = () => {
  const [result, formAction] = useFormState(subscribe, false);

  return (
    <form action={formAction} className="flex flex-col md:flex-row gap-4 py-8">
      {result ? (
        <div className="text-indigo-500 text-xl font-semibold">
          Thank you for subscribing! We will notify you once we launch.
        </div>
      ) : (
        <FormInput />
      )}
    </form>
  );
};
