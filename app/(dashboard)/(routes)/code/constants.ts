import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required."
  }),
});
//the above code is used to set the form schema 
//zod is used as a -> essentially a set of rules that define the structure and validation requirements for data in a form.
//formschema is used with z.object and it should be prompt: and it says it should be string value 
//and another is the prompt length should be min of 1 char if it fails message is sent saying prompt is required