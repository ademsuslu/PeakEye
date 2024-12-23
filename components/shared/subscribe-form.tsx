"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MdOutlineMailOutline } from "react-icons/md";
import { handleCreateNewsletter } from "@/app/actions/create";
import { FaCheck } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

const formSchema = z.object({
  email: z.string().email("Lütfen geçerli bir e-posta adresi giriniz."),
});
import { useToast } from "@/hooks/use-toast"


export function SubsForm() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
   const res =  await  handleCreateNewsletter(String(values?.email));
   toast({
    title: "Newsletter ",
    description: (
      <>
        {res.status === 200 ? (
          <div className="inline-flex text-bold text-md">
            {res.message}  <CiCircleInfo className="text-red-400 ml-2" />
          </div>
        ) : (
          <div className="inline-flex text-bold text-md">
            {res.message} <FaCheck className="text-green-400 ml-2" />
          </div>
        )}
      </>
    ),
      })

  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 flex flex-col items-center justify-center w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full border-2 border-gray-600 rounded-md px-1 flex justify-center items-center">
            
               <FormControl>
                <Input
                  placeholder="Your Email"
                  className="border-none outline-none focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <MdOutlineMailOutline className="w-8 h-8" />
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
        <Button className="w-full text-white" type="submit">
          Subscribe
        </Button>
      </form>
    </Form>
  );
}
