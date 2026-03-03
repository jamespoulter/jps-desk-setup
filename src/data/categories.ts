export interface Category {
  id: string;
  label: string;
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "All" },
  { id: "cameras", label: "Cameras & Video" },
  { id: "audio", label: "Audio" },
  { id: "monitors", label: "Monitors" },
  { id: "peripherals", label: "Peripherals" },
  { id: "lighting", label: "Lighting" },
  { id: "control", label: "Control & Streaming" },
  { id: "printing", label: "3D Printing" },
  { id: "devices", label: "Devices" },
];
