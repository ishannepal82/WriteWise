import {Edit3, Mail, Archive, FileText, CheckCircle, Share2} from "lucide-react"

export const mockCards = [
  {
    title: "Write Notes",
    icon: <Edit3 size={24} />,
    desc: "Create quick and easy notes to capture your thoughts instantly."
  },
  {
    title: "Compose Letters",
    icon: <Mail size={24} />,
    desc: "Write formal and personalized letters with a simple interface."
  },
  {
    title: "Organize Notes",
    icon: <Archive size={24} />,
    desc: "Keep all your notes and letters organized and easy to find."
  },
  {
    title: "Save & Edit",
    icon: <FileText size={24} />,
    desc: "Save your drafts and edit them anytime, anywhere."
  },
  {
    title: "Mark as Done",
    icon: <CheckCircle size={24} />,
    desc: "Mark notes or tasks as completed to stay on top of your work."
  },
  {
    title: "Share Notes",
    icon: <Share2 size={24} />,
    desc: "Easily share your notes and letters with friends or colleagues."
  },
];

export const logos = [
  () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 35 L20 5 L35 35 Z" fill="#1E90FF" />
      </svg>
      <span style={{ fontWeight: "700", fontSize: 16 }}>BluePeak</span>
    </div>
  ),
  () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 H30 L20 30 Z" fill="#FF4500" />
      </svg>
      <span style={{ fontWeight: "700", fontSize: 16 }}>FlameForge</span>
    </div>
  ),
  () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 20 Q20 5 35 20 T35 35 L5 35 Z" fill="#008080" />
      </svg>
      <span style={{ fontWeight: "700", fontSize: 16 }}>AquaWave</span>
    </div>
  ),
  () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 L30 10 L20 30 Z" fill="#FFB300" />
      </svg>
      <span style={{ fontWeight: "700", fontSize: 16 }}>Solaris</span>
    </div>
  ),
  () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 30 C15 15, 25 15, 30 30 S35 35, 10 30 Z" fill="#4CAF50" />
      </svg>
      <span style={{ fontWeight: "700", fontSize: 16 }}>GreenLeaf</span>
    </div>
  ),
  () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 10 H35 L20 35 Z" fill="#9C27B0" />
      </svg>
      <span style={{ fontWeight: "700", fontSize: 16 }}>VioletCore</span>
    </div>
  ),
  () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 20 L20 5 L35 20 L20 35 Z" fill="#FF6F61" />
      </svg>
      <span style={{ fontWeight: "700", fontSize: 16 }}>CoralPeak</span>
    </div>
  ),
  () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 L30 10 L20 20 L30 30 L10 30 Z" fill="#3F51B5" />
      </svg>
      <span style={{ fontWeight: "700", fontSize: 16 }}>IndigoShift</span>
    </div>
  ),
  () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5 L35 35 H5 Z" fill="#00BCD4" />
      </svg>
      <span style={{ fontWeight: "700", fontSize: 16 }}>CyanForge</span>
    </div>
  ),
  () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 30 Q20 10 30 30 Z" fill="#FF9800" />
      </svg>
      <span style={{ fontWeight: "700", fontSize: 16 }}>AmberStone</span>
    </div>
  ),
];
