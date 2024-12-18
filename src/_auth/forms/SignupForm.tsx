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
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const SignUpForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    axios
      .post(
        `https://jobboard-backend-bjggc0fmcghuetea.westeurope-01.azurewebsites.net/users/register/`,
        {
          email: values.email,
          username: values.username,
          password: values.password,
        }
      )
      .then((res) => {
        console.log(res);
        toast({
          title: "Account Created!",
          description: "Use your credentials to login.",
        });
        navigate("/sign-in");
      })
      .catch((err) => {
        console.log(err);
        if (
          err.response.status == 400 &&
          err.response.data.error == undefined
        ) {
          toast({
            variant: "destructive",
            title: "Error!",
            description: "user profile with this username already exists.",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Error!",
            description: err.response.data.error + "",
          });
        }
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
          Create a new account
        </h2>
        <p className="text-light-3 small-medium md:base-regular">
          To use our Job Board, please enter your account details
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
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <Button
            type="submit"
            className="shad-button_primary gap-2 bg-[#021C73] hover:bg-[#122975]"
          >
            Submit
          </Button>
          <p className="text-small-regular text-light-2 text-center">
            Already have an account?
            <Link
              to="/sign-in"
              className="text-blue-500 text-small-semibold ml-1"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignUpForm;
