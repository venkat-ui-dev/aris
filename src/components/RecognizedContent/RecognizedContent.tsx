import { useSpeechContext } from '../../context/SpeechContext'

export const RecognizedContent = () => {
    const { transcribedText } = useSpeechContext();

    const renderTextWithAnimation = (text: string) => {
        return text.split('').map((char, index) => {
            if (char === ' ') {
                return (
                    <span key={index} className="inline-block opacity-0">
                        &nbsp;
                    </span>
                );
            }
            return (
                <span
                    key={index}
                    className="inline-block opacity-0 animate-fadeIn"
                    style={{
                        animationDelay: `${index * 0.1}s`,
                    }}
                >
                    {char}
                </span>
            );
        });
    };

    return (
        <div className="text-center">
            {/* Transcribed Text */}
            <div className="mb-6 mt-8 px-6">
                <p className="text-white text-lg md:text-xl">
                    {!transcribedText
                        ? renderTextWithAnimation('Thank you, I will summarize this meeting, create an action plan, and save it to your history.')
                        : renderTextWithAnimation(transcribedText)
                    }
                </p>
            </div>

            {/* Action Plan Button */}
            <div className="mt-12">
                <button className="px-6 py-2 text-white font-semibold rounded-full border border-transparent bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200 ease-in-out">
                    See my action plan
                </button>
            </div>
        </div>

    )
}
