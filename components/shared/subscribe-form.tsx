"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { MdOutlineMailOutline } from "react-icons/md";


const formSchema = z.object({
    email: z.string()
})

export function SubsForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
      })
     
      // 2. Define a submit handler.
     async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 flex flex-col items-center justify-center w-full ">
        <FormField
    
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full border-2 border-gray-600 rounded-md px-1  flex justify-center items-center">
              <FormControl className="  ">
                <Input placeholder="Your Email" className="border-none outline-none focus-visible:ring-0" {...field} />
              </FormControl>
                <MdOutlineMailOutline className="w-8 h-8 "/>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full text-white" type="submit">Subscribe</Button>
      </form>
    </Form>
  )
}
