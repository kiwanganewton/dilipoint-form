'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function NewsletterForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [receiveWhatsapp, setReceiveWhatsapp] = useState(false);
  const [loading, setLoading] = useState(false);
 const [showSuccess, setShowSuccess] = useState(false);
 

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);

  console.log({
    fullName,
    email,
    phone,
    receiveWhatsapp,
  });

  setTimeout(() => {
    setShowSuccess(true);

    setFullName("");
    setEmail("");
    setPhone("");
    setReceiveWhatsapp(false);
    setLoading(false);
  }, 1500);
};


  return (
   <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 md:py-16">
  <div className="max-w-md w-full">
 <div className="bg-white border border-gray-200 rounded p-6 sm:p-8 shadow-[0_0_30px_rgba(15,23,42,0.08)]">
      <div className="text-center mb-8">
  <img
    src="/dilipoint-logo.png"
    alt="Dilipoint"
    className="h-14 mx-auto mb-4 w-auto"
  />

  <p className="text-gray-600 text-[15px] leading-relaxed">
    Join 1000+ of professionals & entrepreneurs receiving Weekly business insights.
  </p>
</div>

         <form onSubmit={handleSubmit} className="space-y-5">
  {/* Full Name */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Full Name
    </label>
    <input
      type="text"
      required
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      placeholder="John Mwita"
      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600 transition-colors"
    />
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Email Address
    </label>
    <input
      type="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="john@example.com"
      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600 transition-colors"
    />
  </div>

  {/* Phone ( ALWAYS REQUIRED) */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Phone Number
    </label>
    <input
      type="tel"
      required
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      placeholder="+255 612 345 678"
      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600 transition-colors"
    />
  </div>

  {/* WhatsApp checkbox */}
  <div className="flex items-start gap-3">
    <input
      type="checkbox"
      id="whatsapp"
      checked={receiveWhatsapp}
      onChange={(e) => setReceiveWhatsapp(e.target.checked)}
      className="mt-1 h-4 w-4 accent-[#ef4444]"
    />
    <label
      htmlFor="whatsapp"
      className="text-sm text-gray-700 leading-relaxed cursor-pointer"
    >
      I would like to receive business insights and updates via WhatsApp.
    </label>
  </div>

  {/* Conditional WhatsApp field */}
  <AnimatePresence initial={false}>
    {receiveWhatsapp && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="pt-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp Phone Number
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+255 612 345 678"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>
      </motion.div>
    )}
  </AnimatePresence>

  {/* MAIN SUBMIT BUTTON */}
  <button
    type="submit"
    disabled={loading}
    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-3 rounded font-semibold transition-colors"
  >
    {loading ? "Joining..." : "Join Free"}
  </button>

  {/* GOOGLE BUTTON */}
  <button
    type="button"
    className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:border-gray-400 py-3 px-4 rounded text-gray-700 font-medium transition-colors"
  >
    <img
      src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
      alt="Google"
      className="w-5 h-5"
    />
    Join with Google
  </button>

  <p className="text-center text-xs text-gray-500 pt-2">
    We respect your inbox. Unsubscribe anytime.
  </p>
</form>
        </div>
      </div>



  {/* REGISTRATION SUCCESS POPUP */}


<AnimatePresence>
  {showSuccess && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowSuccess(false)}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="bg-white rounded border border-gray-200 shadow-lg shadow-gray-200/60 w-full max-w-sm p-8 text-center"
      >
        {/* Animated Success Icon */}

        <div className="relative mx-auto w-20 h-20">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-red-100"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [1, 0.35, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 180,
            }}
            className="absolute inset-2 rounded-full bg-red-600 flex items-center justify-center"
          >
            <motion.svg
              viewBox="0 0 52 52"
              className="w-8 h-8"
            >
              <motion.path
                fill="none"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 27l8 8 16-18"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                }}
              />
            </motion.svg>
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-8 text-2xl font-semibold text-gray-900"
        >
         Welcome Aboard!
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-3 text-[15px] leading-7 text-gray-600"
        >
          You have successfully joined the Dilipoint Business Growth Center.
       
        </motion.p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>






    </section>
  );
}