import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookiesAccepted");

    // Only permanently hide if accepted
    if (consent === "accepted") {
      setVisible(false);
      return;
    }

    // Reject or no decision → show banner
    setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookiesAccepted", "rejected");
    setVisible(false);

    // 🔁 show again after delay (user-friendly re-prompt)
    setTimeout(() => {
      setVisible(true);
    }, 60000); // 1 minute (adjust if you want)
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-white/90 border-t border-gray-200 shadow-2xl">

        <div className="max-w-6xl mx-auto px-4 py-4 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-sm md:text-base font-semibold text-gray-900">
              We use cookies to improve your experience
            </h3>
            <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
              We use cookies to analyze traffic, personalize content, and ensure the best experience on our website.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto">

            <button
              onClick={rejectCookies}
              className="flex-1 md:flex-none px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Reject
            </button>

            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none px-5 py-2 text-sm rounded-lg bg-black text-white hover:bg-gray-900 shadow-md transition"
            >
              Accept All
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}