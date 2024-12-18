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
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const SignInForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const signIn = useSignIn();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post(
        `https://jobboard-backend-bjggc0fmcghuetea.westeurope-01.azurewebsites.net/users/token/`,
        {
          username: values.username,
          password: values.password,
        }
      )
      .then((res) => {
        if (res.status == 200) {
          if (
            signIn({
              auth: {
                token: res.data.access,
                type: "Bearer",
              },
              //refresh: res.data.refresh
              userState: {
                token: res.data.access,
              },
            })
          ) {
            console.log("User signed in");
            toast({
              title: "User Signed In!",
              description: "You have been successfully signed in.",
            });
            navigate("/");
          }
        }
      })
      .catch((err) => {
        console.log(err);
        form.reset();
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong!",
          description: err.response.data.detail + "",
        });
      });
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img
          onClick={() => {
            navigate("/");
          }}
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="username" className="shad-input" {...field} />
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
          <Button
            type="submit"
            className="shad-button_primary gap-2 bg-[#021C73] hover:bg-[#122975]"
          >
            Login
          </Button>
          <p className="text-small-regular text-light-2 text-center">
            <Link to="" className="text-primary-500 text-small-semibold ml-1">
              Forgot your password?
            </Link>
          </p>
          <p className="text-small-regular text-light-2 text-center">
            Don't have an account?
            <Link
              to="/sign-up"
              className="text-blue-500 text-small-semibold ml-1"
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
