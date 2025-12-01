import {
  Activity,
  Brain,
  CircuitBoard,
  Focus,
  Globe,
  Layers,
  Lightbulb,
  Radar,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

export const heroCards = [
  {
    title: "Laser Projection Module",
    description: "DOE-shaped crimson beams render a crisp QWERTY grid on any surface.",
    icon: Focus,
  },
  {
    title: "Infrared Sensing System",
    description: "Twin IR planes triangulate taps with 92% detection accuracy.",
    icon: Radar,
  },
  {
    title: "Embedded Processing Unit",
    description: "Edge embedded system translates gestures into Bluetooth keystrokes.",
    icon: CircuitBoard,
  },
  {
    title: "Performance & Accuracy",
    description: "Sub-100ms latency with adaptive filtering keeps pace with rapid typing.",
    icon: Activity,
  },
  {
    title: "Applications & Innovation",
    description: "From sterile wards to AR battlefields, LPVK bends to futuristic workflows.",
    icon: Sparkles,
  },
];

export const overviewPoints = [
  "Traditional keyboards are bulky, mechanical, and tethered to flat hardware footprints.",
  "LPVK projects light instead of plastic, keeping travel kits featherweight and deskless.",
  "Touchless interaction preserves hygiene in healthcare, public kiosks, and shared workspaces.",
  "Infrared sensing plus holographic optics compress a full keyboard into a palm-sized puck.",
];

export const literatureTimeline = [
  {
    title: "Magic Cube & AGS Keyboard",
    description: "Commercial pioneers proved projection works, but accuracy lagged under harsh lighting.",
  },
  {
    title: "Ambient Light Interference",
    description: "IR washout triggered ghost presses in sunlit kiosks and glass desks.",
  },
  {
    title: "Battery & Power Drain",
    description: "Early optics guzzled >500mW, clipping true portability.",
  },
  {
    title: "No Haptic Feedback",
    description: "Users missed tactile cues, slowing adaptation versus mechanical decks.",
  },
];

export const methodologySections = [
  {
    title: "Projection Module",
    points: [
      "Red laser diode routed through holographic DOE for full keyboard stencil.",
      "Adjustable optics maintain 1:1 scale from café tables to cockpit trays.",
    ],
  },
  {
    title: "IR Sensing Module",
    points: [
      "Infrared grid hovers millimeters above the surface to capture finger breaks.",
      "Camera-assisted sensing rejects ambient spikes with temporal filtering.",
    ],
  },
  {
    title: "Processing Unit",
    points: [
      "Embedded system decodes XY coordinates, maps ASCII codes, and streams via Bluetooth HID.",
      "Edge firmware calibrates surfaces and logs diagnostics for adaptive tuning.",
    ],
  },
];

export const workingSteps = [
  "Laser diode paints the holographic keyboard layout.",
  "Infrared emitter floods workspace with invisible sensing plane.",
  "Finger interrupts IR beam; camera + photodiodes triangulate impact.",
  "Embedded firmware maps position to keycode and transmits via Bluetooth.",
];

export const softwareFlow = [
  "Initialize projection optics and IR grid bias.",
  "Calibrate intensity + distance for current surface.",
  "Stream sensor data into DSP pipeline for tap classification.",
  "Map gestures to ASCII + send to paired host.",
];

export const workflowHighlights = [
  {
    title: "Laser Diode",
    description: "Shapes the luminous QWERTY mesh via DOE optics.",
  },
  {
    title: "DOE",
    description: "Diffractive Optical Element spreads a single beam into 78 nodes.",
  },
  {
    title: "IR Grid",
    description: "Invisible mesh senses depth-less taps with millimeter tolerance.",
  },
  {
    title: "Camera Module",
    description: "Assists with gesture tracking and rejects stray reflections.",
  },
  {
    title: "Embedded System",
    description: "Brains of LPVK orchestrating filtering, mapping, and BLE.",
  },
];

export const resultsStats = [
  { label: "Detection Accuracy", value: "92%", detail: "Controlled testing environment" },
  { label: "Latency", value: "<100ms", detail: "Tap-to-keystroke propagation" },
  { label: "Power Budget", value: "~350mW", detail: "Full system draw" },
];

export const typingSpeedData = [
  { name: "Typing Speed (WPM)", Existing: 35, LPVK: 40, Mechanical: 70 },
];

export const accuracyData = [
  { name: "Accuracy (%)", Existing: 80, LPVK: 92, Mechanical: 95 },
];

export const powerData = [
  { name: "Power (mW)", Existing: 180, LPVK: 150, Mechanical: 50 },
];

export const applications = [
  { title: "Healthcare", description: "Sterile, wipe-free input inside ICUs and surgical theaters.", icon: Shield },
  { title: "IoT & Smart Home", description: "Ghost keyboards pop up beside smart hubs and mirrors.", icon: Globe },
  { title: "VR / AR", description: "Spatial typing inside immersive domes without bulky hardware.", icon: Brain },
  { title: "Military / Aerospace", description: "Compact control pads fit into cockpits and mission packs.", icon: Layers },
  { title: "Education", description: "Instructors carry one puck to power pop-up typing sessions.", icon: Lightbulb },
  { title: "Public Kiosks", description: "Rugged projection surfaces reduce maintenance in high-traffic kiosks.", icon: CircuitBoard },
  { title: "Assistive Tech", description: "Gesture-driven layouts adapt to mobility constraints.", icon: Zap },
];

export const futureRoadmap = [
  {
    title: "AI Accuracy Boost",
    description: "Neural decoders learn each typist's cadence and reduce noise.",
    year: "Phase 01",
  },
  {
    title: "Adaptive Calibration",
    description: "Realtime surface sensing tunes gain for glass, wood, or metal.",
    year: "Phase 02",
  },
  {
    title: "Gesture & AR Sync",
    description: "Air-gestures and AR overlays expand beyond flat planes.",
    year: "Phase 03",
  },
  {
    title: "Haptic Echo & Efficiency",
    description: "Ultrasonic haptics plus ultra-low-power MCUs for all-day use.",
    year: "Phase 04",
  },
];

export const teamMembers = [
  {
    name: "Bikash Prasad Yadav",
    role: "Team Lead",
    email: "bikashpdyadav11@gmail.com",
  },
  {
    name: "Vinutha M S",
    role: "Faculty Mentor",
    email: "vinuthams.cs@drait.edu.in",
  },
  {
    name: "Himanshu Yadav",
    role: "Team Member",
    email: "himanshutoofaani360@gmail.com",
  },
  {
    name: "Anshum Ashu",
    role: "Team Member",
    email: "anshumashu2002@gmail.com",
  },
  {
    name: "Bharatkumar M Patil",
    role: "Team Member",
    email: "1da22cs024.cs@drait.edu.in",
  },
];

export const heroStats = [
  { label: "Detection Accuracy", value: "92%" },
  { label: "Latency", value: "<100ms" },
  { label: "Power Footprint", value: "350mW" },
];

export const navLinks = [
  { label: "Overview", href: "/overview" },
  { label: "Methodology", href: "/methodology" },
  { label: "Model", href: "/model" },
  { label: "Results", href: "/results" },
  { label: "Applications", href: "/applications" },
  { label: "Future", href: "/future" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const feedbackHighlights = [
  {
    title: "Teams crave touchless workflows",
    author: "Dr. Mira Saxena • HCI Research Team",
    excerpt:
      "We need LPVK-style inputs near microscopes where gloves clash with traditional keyboards.",
  },
  {
    title: "AR field teams want holographic HUDs",
    author: "Kiran Iyer • Aerospace Ops",
    excerpt:
      "Pilots love the low profile device but request gesture macros and MIL-STD housings.",
  },
  {
    title: "Developers request SDK access",
    author: "Ritu Agarwal • XR Studio",
    excerpt:
      "An open API with raw IR frames would help us blend LPVK typing with custom AR overlays.",
  },
];

