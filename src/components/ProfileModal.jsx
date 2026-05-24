import { motion } from "framer-motion";
import profileImg from "../assets/tejprofile.jpeg";


export default function ProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-black/50 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center max-w-[90vw] max-h-[85vh]"
      >
        <img 
          src={profileImg} 
          alt="Profile Full Size" 
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-3xl"
          onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Tej+Pratap&background=random&color=fff&size=512"; }}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors z-10 backdrop-blur-md border border-white/20"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}
