
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useToast } from "@/components/ui/use-toast";
import JobListingsPage from "@/components/JobListingsPage";

const Home = () => {
  const signOut = useSignOut();
  const { toast } = useToast();
  return (
    <div>
      <div>Welcome to START Nuremberg's Job Board</div>
      <JobListingsPage />

      {/*  <button 
      onClick={() => {
        toast(
            {title: "Signed Out!", 
            description: "You have been successfully signed out.",}
          );
        signOut();  
        }
      }
    >
    Sign Out!</button> */}
    </div>
  );
};

export default Home;
