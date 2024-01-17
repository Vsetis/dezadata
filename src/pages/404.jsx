import React from "react";
import Button from "../components/ui/Button";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col gap-8 justify-center items-center">
      <h1 className="text-4xl font-semibold">404 - page not found!</h1>
      <Button target="/">Back to the Home</Button>
    </div>
  );
};

export default ErrorPage;
