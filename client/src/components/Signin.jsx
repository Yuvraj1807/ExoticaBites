import React from "react";
import { SignIn, SignedOut, SignUp, SignedIn } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const Signin = () => {
  return (
    <div className="relative top-[12vh]">
      <SignedOut>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex w-[100vw] h-[87vh] items-center flex-col">
            <h1 className="m-8 text-4xl font-black ">Sign In</h1>
            <SignIn
              appearance={{
                variables: {
                  colorPrimary: "#F0ECE5",
                  colorText: "#F0ECE5",
                  colorTextSecondary: "#F0ECE5",
                  colorTextOnPrimaryBackground: "black",
                  colorBackground: "#080912",
                  colorNeutral: "#F0ECE5",
                  colorInputText: "#F0ECE5",
                  colorInputBackground: "#0e0f1a",
                },
              }}
              signUpUrl="/sign-up"
            />
          </div>
        </motion.div>
      </SignedOut>

      <SignedIn></SignedIn>
    </div>
  );
};

export default Signin;
