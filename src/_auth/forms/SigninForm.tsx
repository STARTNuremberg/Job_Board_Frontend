import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"




const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
})

const SignInForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }


  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img
          src="/assets/icons/START_nuremberg_blue.svg"
          alt="logo"
          className="max-w-xs"
        />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12 ">
          Login to your account
        </h2>
        <p className="text-light-3 small-medium md:base-regular">
          To use our Job Board, please enter your account details.
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary gap-2 bg-[#021C73] hover:bg-[#122975]" >
            Login
          </Button>
          <p className="text-small-regular text-light-2 text-center">
            <Link
              to=""
              className="text-primary-500 text-small-semibold ml-1"
            >
              Forgot your password?
            </Link>
          </p>
          <p className="text-small-regular text-light-2 text-center">
            Don't have an account?
            <Link
              to="/sign-up"
              className="text-primary-500 text-small-semibold ml-1"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignInForm;
