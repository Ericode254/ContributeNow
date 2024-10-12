import { SignIn, SignUp, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Routes>
        <Route
          path="/"
          element={
            <Unauthenticated>
              <LandingPage />
            </Unauthenticated>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Unauthenticated>
              <div className="flex items-center justify-center min-h-screen">
                <SignUp />
              </div>
            </Unauthenticated>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Unauthenticated>
              <div className="flex items-center justify-center min-h-screen">
                <SignIn />
              </div>
            </Unauthenticated>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Authenticated>
              <div>
                <UserButton />
                <Content />
              </div>
            </Authenticated>
          }
        />
      </Routes>
    </main>
  );
}

function Content() {
  const messages = useQuery(api.messages.getForCurrentUser);
  return <div>Authenticated content: {messages?.length}</div>;
}

export default App;
