import { Header } from "./components/common/Header";
import { BackgroundAnimation } from "./components/common/BackgroundAnimation";
import { Sphere } from "./components/common/Sphere";
import { RecognizedContent } from "./components/RecognizedContent/RecognizedContent";
import { Footer } from "./components/common/Footer";
import { SpeechProvider } from "./context/SpeechContext";

function App() {
  return (
    <SpeechProvider>
      <div className="relative w-full h-screen bg-gradient-to-b from-blue-500 to-blue-700 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <BackgroundAnimation />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-between h-full">
          {/* Header */}
          <Header />
          {/* Center Content */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <Sphere />
            <RecognizedContent />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </SpeechProvider>
  );
}

export default App;
