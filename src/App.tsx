import { createContext, useState } from "react";
import { type Dispatch, type SetStateAction } from "react";
import TaskContainer from "./components/TaskContainer";
import Sidebar from "./components/Sidebar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import zustandStore from "./store/store";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 1000* 60 *5
    }
  }
});

type Theme = "dark" | "light";
interface ContextValue {
  theme: string;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

const App = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const ThemeContext = createContext<ContextValue>({ theme, setTheme });

  const formActive = zustandStore(state=>state.formActive)

  const value: ContextValue = {
    theme,
    setTheme,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={value}>
        <div
          className={`${
            theme == "dark" && "dark"
          } ${formActive && "backdrop:blur-md"}  dark:bg-stone-800 p-2 md:p-4 font-primary relative`}
        >
          <Toaster
            position="top-right"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
                style: {
                  backgroundColor: "green",
                  color: "white",
                },
              },
              error: {
                duration: 5000,
                style: {
                  backgroundColor: "red",
                  color: "white",
                },
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                borderRadius: "10px",
              },
            }}
          />
          <div className="flex flex-col-reverse md:flex-row gap-6 m-6">
            <Sidebar />

            <TaskContainer />
          </div>
        </div>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
