import ledHeadlight from "@/assets/products/led-headlight.jpg";
import fogLamp from "@/assets/products/fog-lamp.jpg";
import drl from "@/assets/products/drl.jpg";
import carAudio from "@/assets/products/car-audio.jpg";
import reverseCamera from "@/assets/products/reverse-camera.jpg";
import ambientLight from "@/assets/products/ambient-light.jpg";
import carSensor from "@/assets/products/car-sensor.jpg";
import carVacuum from "@/assets/products/car-vacuum.jpg";

export interface Product {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  category: string;
  categorySlug: string;
  price?: string;
  image: string;
  images: string[];
  badge?: string;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  specs: { label: string; value: string }[];
  features: string[];
  compatibility: string[];
  warranty: string;
}

export const categories = [
  { slug: "lighting", name: "Lighting", icon: "💡", description: "LED Headlights, DRLs, Fog Lamps & more" },
  { slug: "audio", name: "Car Audio", icon: "🔊", description: "Sound Systems, Subwoofers, Speakers" },
  { slug: "safety", name: "Safety & Cameras", icon: "📷", description: "Reverse Cameras, Sensors, Dashcams" },
  { slug: "interior", name: "Interior", icon: "🎨", description: "Ambient Lights, Seat Covers, Accessories" },
  { slug: "electronics", name: "Electronics", icon: "⚡", description: "Car Electronics & Smart Accessories" },
  { slug: "spare-parts", name: "Spare Parts", icon: "🔧", description: "Genuine & Compatible Auto Parts" },
  { slug: "cleaning", name: "Cleaning", icon: "🧹", description: "Car Vacuum Cleaners & Cleaning Kits" },
  { slug: "exterior", name: "Exterior", icon: "🚗", description: "Exterior Styling & Accessories" },
];

export const products: Product[] = [
  {
    id: "led-headlight-h4",
    name: "H4 LED Headlight Bulbs",
    shortDesc: "Ultra-bright 12000LM LED headlights with 6500K cool white beam",
    description: "Experience unparalleled road visibility with our H4 LED Headlight Bulbs. Engineered with the latest LED chip technology, these bulbs produce an incredible 12000 lumens of crystal-clear 6500K cool white light — 300% brighter than standard halogen bulbs. The precision beam pattern eliminates dark spots while the efficient heat dissipation system ensures a lifespan of 50,000+ hours.",
    category: "Lighting",
    categorySlug: "lighting",
    price: "₹2,499",
    image: ledHeadlight,
    images: [ledHeadlight, ledHeadlight, ledHeadlight],
    badge: "Best Seller",
    isBestSeller: true,
    isFeatured: true,
    specs: [
      { label: "Lumens", value: "12,000 LM (per set)" },
      { label: "Color Temperature", value: "6500K Pure White" },
      { label: "Power", value: "55W" },
      { label: "Voltage", value: "12V DC" },
      { label: "Lifespan", value: "50,000+ Hours" },
      { label: "IP Rating", value: "IP68 Waterproof" },
    ],
    features: [
      "300% brighter than halogen bulbs",
      "360° adjustable beam angle",
      "Built-in EMC to prevent radio interference",
      "Fan-less silent operation",
      "Plug & play installation — no wiring required",
      "Anti-glare precision beam pattern",
    ],
    compatibility: ["Maruti Suzuki Swift", "Honda City", "Hyundai i20", "Toyota Innova", "Mahindra Scorpio", "Most H4 fitment vehicles"],
    warranty: "2 Years Manufacturer Warranty",
  },
  {
    id: "fog-lamp-universal",
    name: "Universal Projector Fog Lamps",
    shortDesc: "Amber/white dual-color fog lamps with halo ring, set of 2",
    description: "Cut through fog, rain, and haze with our Universal Projector Fog Lamps. The dual-color amber/white projector lens delivers maximum visibility in all weather conditions. The integrated halo angel-eye ring adds a premium sporty look to your vehicle's front fascia.",
    category: "Lighting",
    categorySlug: "lighting",
    price: "₹1,899",
    image: fogLamp,
    images: [fogLamp, fogLamp],
    badge: "Hot",
    isBestSeller: true,
    isFeatured: true,
    specs: [
      { label: "Type", value: "H11 Projector Lens" },
      { label: "Colors", value: "Amber + White (Dual)" },
      { label: "Power", value: "35W per lamp" },
      { label: "Voltage", value: "12V DC" },
      { label: "Diameter", value: "2.5 inch" },
      { label: "IP Rating", value: "IP65" },
    ],
    features: [
      "Dual-color amber & white",
      "Angel eye halo ring",
      "Universal fitment bracket",
      "Projector lens for precise beam",
      "Vibration resistant housing",
      "Easy installation kit included",
    ],
    compatibility: ["Universal fit — Sedans", "Hatchbacks", "SUVs", "MUVs", "Trucks"],
    warranty: "1 Year Warranty",
  },
  {
    id: "drl-flexible",
    name: "Flexible DRL Strip Lights",
    shortDesc: "Sequential turn signal DRL strips with waterproof design, pair",
    description: "Transform your vehicle's front profile with our Flexible DRL Strip Lights. Featuring eye-catching sequential turn signal animation, these ultra-slim LED strips integrate seamlessly with your existing turn signal system. The flexible PCB allows perfect contouring along any bumper shape.",
    category: "Lighting",
    categorySlug: "lighting",
    price: "₹1,299",
    image: drl,
    images: [drl, drl],
    badge: "New",
    isBestSeller: false,
    isFeatured: true,
    specs: [
      { label: "Type", value: "2835 SMD LED Strip" },
      { label: "Color", value: "White (DRL) / Amber (Turn)" },
      { label: "Length", value: "60cm per strip" },
      { label: "Power", value: "12W per pair" },
      { label: "IP Rating", value: "IP67 Waterproof" },
      { label: "Signal", value: "Sequential Turn Signal" },
    ],
    features: [
      "Sequential flowing turn signal",
      "Ultra-bright 6000K white DRL",
      "Flexible bendable PCB",
      "Self-adhesive 3M tape backing",
      "T10/festoon connector compatible",
      "Flicker-free canbus ready",
    ],
    compatibility: ["Universal — All vehicles with 12V system", "SUVs", "Sedans", "Trucks", "Vans"],
    warranty: "1 Year Warranty",
  },
  {
    id: "car-audio-system",
    name: "2-DIN Car Multimedia System",
    shortDesc: "7-inch touchscreen with Bluetooth, USB, FM, and rear camera input",
    description: "Elevate your in-car entertainment with our 2-DIN Car Multimedia System. The vibrant 7-inch capacitive touchscreen supports all your media needs — Bluetooth audio streaming, hands-free calling, USB/SD playback, and FM radio. The universal 2-DIN chassis fits most standard car dashboards.",
    category: "Car Audio",
    categorySlug: "audio",
    price: "₹6,999",
    image: carAudio,
    images: [carAudio, carAudio],
    badge: "Premium",
    isBestSeller: true,
    isFeatured: true,
    specs: [
      { label: "Screen", value: '7" Capacitive HD Touchscreen' },
      { label: "Bluetooth", value: "BT 5.0 Audio + Hands-free" },
      { label: "Resolution", value: "1024 x 600 px" },
      { label: "USB", value: "Dual USB 2.0 Input" },
      { label: "Power Output", value: "4 x 50W" },
      { label: "Camera Input", value: "Rear camera compatible" },
    ],
    features: [
      "7-inch HD capacitive touchscreen",
      "Bluetooth 5.0 audio streaming",
      "Hands-free calling",
      "USB/SD card media playback",
      "FM/AM radio with RDS",
      "Rear camera input compatible",
      "Steering wheel control compatible",
      "Android/iPhone mirror link",
    ],
    compatibility: ["Universal 2-DIN fitment", "Most Indian market vehicles", "Requires professional installation"],
    warranty: "1 Year Manufacturer Warranty",
  },
  {
    id: "reverse-camera-hd",
    name: "HD Night Vision Reverse Camera",
    shortDesc: "170° wide angle reverse camera with night vision and parking guidelines",
    description: "Never worry about blind spots again with our HD Night Vision Reverse Camera. The 170° ultra-wide angle lens provides a complete rear view, while the advanced CMOS sensor delivers crisp images even in complete darkness. Automatic parking guidelines overlay makes parking effortless.",
    category: "Safety & Cameras",
    categorySlug: "safety",
    price: "₹1,499",
    image: reverseCamera,
    images: [reverseCamera, reverseCamera],
    badge: "Popular",
    isBestSeller: true,
    isFeatured: false,
    specs: [
      { label: "Resolution", value: "1280 x 720p HD" },
      { label: "Viewing Angle", value: "170° Ultra Wide" },
      { label: "Night Vision", value: "IR LEDs, 10m range" },
      { label: "IP Rating", value: "IP68 Waterproof" },
      { label: "Video Output", value: "CVBS / AHD" },
      { label: "Image", value: "Mirror / Normal flip" },
    ],
    features: [
      "1280x720 HD resolution",
      "170° super wide angle",
      "Night vision IR LEDs",
      "Automatic parking guidelines",
      "Mirror image flip option",
      "IP68 weatherproof rating",
      "Compact discreet design",
    ],
    compatibility: ["Universal fitment", "Connects to any screen with AV/CVBS input", "All car models"],
    warranty: "1 Year Warranty",
  },
  {
    id: "ambient-light-rgb",
    name: "RGB Interior Ambient Light Kit",
    shortDesc: "64-color RGB LED strips for car interior with app control and music sync",
    description: "Create the ultimate car cabin atmosphere with our RGB Interior Ambient Light Kit. With 64 colors and multiple dynamic effects, transform your interior on demand. The smart app control lets you adjust brightness, color, and lighting modes right from your smartphone. Music sync mode pulses the lights to your music beat.",
    category: "Interior",
    categorySlug: "interior",
    price: "₹999",
    image: ambientLight,
    images: [ambientLight, ambientLight],
    badge: "Trending",
    isBestSeller: false,
    isFeatured: true,
    specs: [
      { label: "Colors", value: "64 RGB Colors" },
      { label: "Control", value: "App + Remote" },
      { label: "Strips", value: "4 x 90cm LED strips" },
      { label: "Power", value: "12V cigarette lighter" },
      { label: "Modes", value: "Static / Flash / Fade / Music Sync" },
      { label: "Brightness", value: "Adjustable" },
    ],
    features: [
      "64 million color combinations",
      "Smartphone app control",
      "IR remote included",
      "Music sync / beat detection mode",
      "Timer auto-off function",
      "4 strips for full interior coverage",
      "Self-adhesive installation",
    ],
    compatibility: ["Universal — all car interiors", "12V power via cigarette socket", "iOS & Android app"],
    warranty: "6 Months Warranty",
  },
  {
    id: "parking-sensor-kit",
    name: "4-Sensor Parking Sensor Kit",
    shortDesc: "Ultrasonic parking sensors with LED display and buzzer warning system",
    description: "Park with confidence using our 4-Sensor Parking Sensor Kit. Four ultrasonic sensors continuously monitor the area behind your vehicle and provide real-time distance feedback via LED display and graduated audio alerts. The kit includes everything needed for a clean professional installation.",
    category: "Safety & Cameras",
    categorySlug: "safety",
    price: "₹1,299",
    image: carSensor,
    images: [carSensor, carSensor],
    badge: "Must Have",
    isBestSeller: true,
    isFeatured: false,
    specs: [
      { label: "Sensors", value: "4 x Ultrasonic 40kHz" },
      { label: "Detection Range", value: "0.3m – 2.5m" },
      { label: "Display", value: "LED distance indicator" },
      { label: "Alert", value: "Graduated audio beeping" },
      { label: "Sensor Diameter", value: "22mm" },
      { label: "IP Rating", value: "IP67" },
    ],
    features: [
      "4 rear ultrasonic sensors",
      "0.3m to 2.5m detection range",
      "LED distance display panel",
      "Graduated audio alerts",
      "Auto-activate on reverse gear",
      "Easy DIY installation",
      "Available in multiple colors",
    ],
    compatibility: ["Universal fitment — all vehicles", "Requires 12V power and reverse signal wire"],
    warranty: "1 Year Warranty",
  },
  {
    id: "car-vacuum-cordless",
    name: "Cordless Car Vacuum Cleaner",
    shortDesc: "8000Pa suction handheld vacuum with HEPA filter and LED light",
    description: "Keep your car spotless with our high-performance Cordless Car Vacuum Cleaner. The powerful 8000Pa suction tackles pet hair, crumbs, dust, and debris from every corner of your car. The compact design reaches under seats and into crevices, while the HEPA filter traps 99.97% of fine particles.",
    category: "Cleaning",
    categorySlug: "cleaning",
    price: "₹2,199",
    image: carVacuum,
    images: [carVacuum, carVacuum],
    badge: "Top Rated",
    isBestSeller: false,
    isFeatured: true,
    specs: [
      { label: "Suction Power", value: "8000 Pa" },
      { label: "Battery", value: "2200mAh Li-ion" },
      { label: "Runtime", value: "25 minutes" },
      { label: "Charge Time", value: "4 hours (USB-C)" },
      { label: "Filter", value: "HEPA Washable" },
      { label: "Weight", value: "450g" },
    ],
    features: [
      "8000Pa powerful suction",
      "2-in-1 handheld & stick design",
      "HEPA washable filter",
      "Built-in LED work light",
      "USB-C fast charging",
      "Multiple nozzle attachments",
      "Easy one-click empty dust cup",
    ],
    compatibility: ["Universal — all vehicle types", "Also suitable for home use"],
    warranty: "1 Year Warranty",
  },
];

export const WHATSAPP_NUMBER = "917011040696";
export const getWhatsAppLink = (productName?: string) => {
  const message = productName
    ? `Hi! I'm interested in *${productName}*. Please share more details and pricing.`
    : "Hi! I'd like to enquire about your automobile accessories. Please help me.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
