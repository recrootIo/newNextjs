const { useRouter } = require("next/router");
const { useEffect } = require("react");

const withAuth = (WrappedComponent) => {
    const AuthenticatedComponent = (props) => {
      const router = useRouter();
  
      useEffect(() => {
        const user =  JSON.parse(localStorage.getItem("User"));
        // Perform your authentication logic here
        // Example: Check if the user is authenticated, if not, redirect to login page
        const isAuthenticated = user?.User?.email_is_verified === true ;// Your authentication check
        if (user) {
            if (!isAuthenticated) {
                router.replace('/Verifymobile');
            }
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  
      return <WrappedComponent {...props} />;
    };
  
    return AuthenticatedComponent;
  };
  

  export default withAuth;