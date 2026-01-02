import React, { useState } from "react";
import Heading from "../Heading";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // In a real app, you would send this to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-linear-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-2xl overflow-hidden relative">
          <div className="px-8 py-12 md:px-12 md:py-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Stay Updated with{" "}
                  <span className="text-yellow-300">AI Trends</span>
                </h2>
                <p className="text-lg text-indigo-100 leading-relaxed">
                  Join 25,000+ AI professionals who receive our weekly
                  newsletter with the latest model releases, industry insights,
                  and exclusive early access to new features.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">📧</span>
                  </div>
                  <span className="text-sm text-indigo-100">
                    Weekly AI Updates
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">🚀</span>
                  </div>
                  <span className="text-sm text-indigo-100">Early Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">🎯</span>
                  </div>
                  <span className="text-sm text-indigo-100">No Spam, Ever</span>
                </div>
              </div>

              {isSubscribed ? (
                <div className="bg-green-500 text-white px-6 py-4 rounded-xl inline-flex items-center space-x-2">
                  <span className="text-xl">✅</span>
                  <span className="font-medium">
                    Thank you for subscribing!
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-xl hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                    >
                      Subscribe Now
                    </button>
                  </div>
                  <p className="text-xs text-indigo-200 mt-3">
                    By subscribing, you agree to our Privacy Policy and Terms of
                    Service.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Decorative elements - contained within the rounded container */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/5 rounded-full"></div>
          <div className="absolute top-1/2 right-8 w-12 h-12 bg-white/5 rounded-full"></div>
        </div>

        {/* Social proof section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Trusted by developers at leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Google</div>
            <div className="text-2xl font-bold text-gray-400">Microsoft</div>
            <div className="text-2xl font-bold text-gray-400">OpenAI</div>
            <div className="text-2xl font-bold text-gray-400">Meta</div>
            <div className="text-2xl font-bold text-gray-400">NVIDIA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
