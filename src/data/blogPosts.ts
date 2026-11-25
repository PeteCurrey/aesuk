export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  relatedHref: string;
  relatedLabel: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-5-electrical-faults-derbyshire-vehicles",
    title: "Top 5 Electrical Faults We See on Derbyshire Vehicles",
    excerpt:
      "From parasitic battery drains and corroded earth straps to CAN-bus communication dropouts—discover the most common electrical faults affecting cars and vans in Derbyshire.",
    category: "Diagnostics",
    readTime: "4 min read",
    publishedAt: "2026-02-12",
    relatedHref: "/diagnostics",
    relatedLabel: "Explore Mobile Diagnostics",
    sections: [
      {
        heading: "1. Parasitic Battery Drains",
        paragraphs: [
          "One of the most frequent callouts we attend across Chesterfield and Matlock is a car battery that goes flat overnight. On modern vehicles, a control module failing to enter sleep mode—such as a Bluetooth module, boot latch switch, or aftermarket tracker—can draw several amps continuously.",
          "Rather than guessing by pulling fuses, we use millivolt drop testing across fuses and thermal imaging to pinpoint the exact awake circuit without waking up the rest of the vehicle's CAN-bus.",
        ],
      },
      {
        heading: "2. Corroded Earth Straps & Moisture Ingress",
        paragraphs: [
          "Derbyshire's wet winters and salted roads take a heavy toll on chassis earth points and under-bonnet connectors. High-resistance earth straps cause slow cranking, erratic dashboard warnings, and smart alternator charging faults.",
        ],
      },
      {
        heading: "3. CAN-Bus Communication Errors",
        paragraphs: [
          "When multiple warning lights (ABS, traction control, power steering, and engine management) illuminate simultaneously, the root cause is often a shorted or damaged CAN-bus twisted pair rather than failed modules.",
        ],
      },
      {
        heading: "4. Broken Door-Shut & Tailgate Wiring Looms",
        paragraphs: [
          "Constant opening and closing causes copper conductors inside rubber door bellows to fatigue and snap—leading to central locking failures, dead electric windows, or faulty reversing cameras.",
        ],
      },
      {
        heading: "5. Uncoded Start-Stop Batteries",
        paragraphs: [
          "Fitting a new AGM or EFB battery without registering it to the Battery Management System (BMS) causes improper charging voltages and premature battery failure.",
        ],
      },
    ],
  },
  {
    slug: "why-mobile-ecu-remapping-safer",
    title: "Why Diagnostic-Led Mobile ECU Remapping Is Safer",
    excerpt:
      "Why choosing an auto electrical specialist for mobile ECU remapping—with full pre-tune diagnostics and battery voltage support—protects your engine and ECU.",
    category: "ECU Remapping",
    readTime: "4 min read",
    publishedAt: "2026-02-05",
    relatedHref: "/ecu-remapping",
    relatedLabel: "Mobile ECU Remapping",
    sections: [
      {
        heading: "The Problem with Generic Flashers",
        paragraphs: [
          "Many mobile tuners simply plug a generic laptop into the OBD port and flash a pre-made file without checking whether the engine has underlying boost leaks, injector wear, or DPF restriction.",
          "Remapping a vehicle with an existing fault only amplifies the problem and can put components under unnecessary stress.",
        ],
      },
      {
        heading: "Pre-Remap Dealer-Level Health Checks",
        paragraphs: [
          "At AES Autoelectrical, every Stage 1 or economy remap begins with a full diagnostic scan and live-data inspection. We verify fuel rail pressure, turbo boost targets, and sensor health before modifying any calibration.",
        ],
      },
      {
        heading: "Battery Voltage Stabilisation",
        paragraphs: [
          "During ECU reading and writing, vehicle fans or modules can draw heavy current. A voltage drop mid-write can corrupt the ECU. We use regulated power supply support throughout the entire process and always retain a backup of your original factory file.",
        ],
      },
    ],
  },
  {
    slug: "ghost-2-protects-vehicle-chesterfield",
    title: "How the Ghost 2 Immobiliser Protects Your Vehicle in Chesterfield",
    excerpt:
      "Keyless relay theft and OBD key cloning can take a vehicle in under 30 seconds. Learn how the TASSA-verified Autowatch Ghost 2 stops thieves cold.",
    category: "Vehicle Security",
    readTime: "5 min read",
    publishedAt: "2026-01-24",
    relatedHref: "/ghost-2-immobiliser",
    relatedLabel: "Ghost 2 Immobiliser Fitting",
    sections: [
      {
        heading: "Why Factory Immobilisers Aren't Enough",
        paragraphs: [
          "Modern keyless-entry cars and commercial vans are frequently targeted using relay amplifiers—capturing your key's signal from inside your hallway—or OBD programmers plugged straight into the diagnostic port.",
        ],
      },
      {
        heading: "Zero RF Signals, Zero Key Fobs",
        paragraphs: [
          "The Autowatch Ghost 2 emits no radio frequency signals, has no LED indicators, and uses no separate key fobs. Even if a thief clones your key or breaks into your house for the physical key, the engine will not start without your personal button sequence.",
        ],
      },
      {
        heading: "TASSA Approved Mobile Fitting",
        paragraphs: [
          "We install the Ghost 2 covertly at your home or workplace across Chesterfield and Derbyshire for £499, complete with an official TASSA certificate recognised by UK insurers.",
        ],
      },
    ],
  },
  {
    slug: "fleet-electrical-maintenance-tips",
    title: "Fleet Electrical Maintenance Tips to Reduce Van Downtime",
    excerpt:
      "Practical preventative electrical checks for commercial van operators in Derbyshire—covering batteries, alternators, Chapter 8 lighting, and spare keys.",
    category: "Fleet Services",
    readTime: "4 min read",
    publishedAt: "2026-01-15",
    relatedHref: "/fleet-services",
    relatedLabel: "Commercial Fleet Services",
    sections: [
      {
        heading: "Always Keep a Working Spare Van Key",
        paragraphs: [
          "A lost single key can sideline a tradesperson or delivery van for an entire day. Getting a spare key cut and coded in advance costs significantly less than an emergency all-keys-lost callout.",
        ],
      },
      {
        heading: "Inspect Auxiliary & Chapter 8 Wiring",
        paragraphs: [
          "Aftermarket beacons, work lamps, and inverters wired with scotch-locks or unsealed crimps quickly corrode in UK weather, causing blown fuses and parasitic battery drains.",
        ],
      },
      {
        heading: "Monitor Battery State of Health Before Winter",
        paragraphs: [
          "Commercial vans making frequent short stops place heavy demand on starter motors and AGM batteries. Proactive load testing prevents unexpected morning non-starts.",
        ],
      },
    ],
  },
  {
    slug: "top-3-upgrades-modernise-vehicle-electronics",
    title: "Top 3 Upgrades to Modernise Your Vehicle Electronics",
    excerpt:
      "Hardwired 4K dash cams, flush parking sensors, and dedicated towbar wiring—three practical upgrades that protect your vehicle and add everyday convenience.",
    category: "OEM Upgrades",
    readTime: "3 min read",
    publishedAt: "2026-01-08",
    relatedHref: "/upgrades",
    relatedLabel: "View OEM Upgrades",
    sections: [
      {
        heading: "1. Concealed Hardwired Dash Cams",
        paragraphs: [
          "A properly hardwired front and rear dash cam protects you on the road and while parked, with zero dangling 12V cables and built-in battery voltage cut-off.",
        ],
      },
      {
        heading: "2. Flush Colour-Coded Parking Sensors & Reversing Cameras",
        paragraphs: [
          "Ideal for larger SUVs, motorhomes, and panel vans—OEM-style flush sensors and night-vision reversing cameras prevent costly low-speed bumper damage.",
        ],
      },
      {
        heading: "3. Vehicle-Specific Coded Towbar Electrics",
        paragraphs: [
          "Dedicated 13-pin wiring integrates seamlessly with your vehicle's trailer stability control, rear sensor muting, and bulb monitoring.",
        ],
      },
    ],
  },
];
