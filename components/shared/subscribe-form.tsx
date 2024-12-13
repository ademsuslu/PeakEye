"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FaVoicemail } from "react-icons/fa"

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 flex flex-col items-center justify-center min-w-[300px] ">
        <FormField
    
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="w-full">
                <Input placeholder="Your Email" {...field} />
              </FormControl>
                <FaVoicemail/>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">Subscribe</Button>
      </form>
    </Form>
  )
}
