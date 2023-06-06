import ContactForm from "./components/ContactForm";
import LottieSection from "./components/LottieSection";
import SnackbarProvider from "react-simple-snackbar";

function App() {
  return (
    <SnackbarProvider>
      <div className="App md:h-screen w-screen bg-gray-100">
        <div className="h-full flex  flex-col-reverse sm:flex-row max-w-[1196px] mx-auto  items-center justify-center">
          {/* //form */}
          <ContactForm />
          {/* //how can i help */}
          <LottieSection />
        </div>
      </div>
    </SnackbarProvider>
  );
}

export default App;
