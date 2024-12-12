export const BackgroundAnimation = () => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Top Glow */}
            <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-green-400 opacity-40 blur-3xl animate-glow"></div>

            {/* Bottom Glow */}
            <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-green-400 opacity-40 blur-3xl animate-glow"></div>
        </div>
    );
}
