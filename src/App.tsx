import { UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <main>
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
