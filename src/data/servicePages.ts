import type { ServicePageData } from "@/components/ServicePageTemplate";

function buildTownKeyPage(
  slug: string,
  town: string,
  distance: string,
  postcodes: string,
  bgImage = "/assets/key-replacement-hero.jpg"
): ServicePageData {
  return {
    slug,
    badge: `Mobile Car Keys · ${town}`,
    pageTitle: `Car Key Replacement ${town} | Mobile Auto Locksmith`,
    metaDescription: `Fast mobile car key replacement and fob programming in ${town} (${postcodes}). Lost keys, spare keys, and emergency callouts just ${distance} from our Chesterfield base. Call 07753 891461.`,
    h1: `Car Key Replacement in ${town}`,
    highlight: `Mobile Service (${postcodes})`,
    intro: `Lost your car keys, locked them inside your vehicle, or need a spare key cut and coded in ${town}? Our mobile auto locksmith van comes directly to you (${distance} from Chesterfield) with same-day service.`,
    backgroundImage: bgImage,
    services: [
      {
        name: "Lost All Car Keys",
        description: `Complete mobile replacement when you have no working key in ${town}. Non-destructive entry, blade cutting, and immobiliser coding.`,
        features: ["Non-destructive vehicle entry", "Old lost keys erased from memory", "Same-day roadside or home callout"],
        pricing: "From £160",
      },
      {
        name: "Spare Car Keys & Fobs",
        description: `Avoid emergency costs by getting a spare remote or transponder key cut and programmed at your home or workplace in ${town}.`,
        features: ["OEM-quality remote & smart fobs", "Laser-cut blades on-site", "Fraction of main dealer prices"],
        pricing: "From £110",
      },
      {
        name: "Broken Key & Fob Repair",
        description: `Snapped blades, worn micro-switches, or non-responding central locking buttons repaired or replaced on the spot.`,
        features: ["New key shells & batteries", "Transponder chip cloning", "Immobiliser fault diagnostics"],
        pricing: "From £65",
      },
    ],
    benefits: [
      `Rapid mobile dispatch to ${town} (${postcodes})`,
      "No recovery truck needed to a main dealer",
      "Covering cars, 4x4s & commercial vans",
      "Upfront fixed pricing before work starts",
    ],
    areasServed: [town, "Chesterfield", "Derbyshire"],
    faqs: [
      {
        question: `How quickly can you reach ${town} for a lost car key?`,
        answer: `We are based just ${distance} away in Chesterfield, meaning we can usually attend emergency callouts in ${town} (${postcodes}) the same day.`,
      },
      {
        question: `Do you need my vehicle recovered to a garage in ${town}?`,
        answer: `No. Our mobile workshop carries key cutting machines and dealer-level programming diagnostics, so everything is completed at your home, workplace, or roadside.`,
      },
    ],
    relatedLinks: [
      { label: "All Key Services", href: "/replacement-car-keys-chesterfield" },
      { label: "Ford Key Replacement", href: "/ford-key-replacement-chesterfield" },
      { label: "VW Key Replacement", href: "/volkswagen-key-replacement-chesterfield" },
      { label: "Service Areas", href: "/service-areas" },
    ],
  };
}

function buildKeyVariationPage(
  slug: string,
  h1: string,
  badge: string,
  intro: string,
  metaDescription: string
): ServicePageData {
  return {
    slug,
    badge,
    pageTitle: `${h1}`,
    metaDescription,
    h1,
    highlight: "Chesterfield & Derbyshire",
    intro,
    backgroundImage: "/assets/key-replacement-hero.jpg",
    services: [
      {
        name: "Mobile Key Cutting & Coding",
        description: "Precision laser blade cutting and OBD2/EEPROM immobiliser programming at your driveway or workplace.",
        features: ["Transponder & remote fobs", "Smart proximity & keyless go", "All makes & commercial vans"],
        pricing: "From £110",
      },
      {
        name: "Emergency All-Keys-Lost",
        description: "Non-destructive vehicle unlocking and full key replacement when no working key remains.",
        features: ["Zero door or lock damage", "Missing keys deleted from ECU", "Same-day emergency attendance"],
        pricing: "From £160",
      },
      {
        name: "Immobiliser & Key Diagnostics",
        description: "Dealer-level fault finding when your car shows 'Key Not Detected' or flashing immobiliser lights.",
        features: ["Aerial coil & antenna testing", "BCM/CAS/FEM diagnostics", "Battery & transponder checks"],
        pricing: "From £65",
      },
    ],
    benefits: [
      "100% mobile across Chesterfield & Derbyshire",
      "Save up to 50% compared to main dealer quotes",
      "Same-day availability for urgent callouts",
      "12-month warranty on all supplied keys",
    ],
    faqs: [
      {
        question: "Do I need the original key code or Car Pass?",
        answer: "No. Our diagnostic equipment extracts security PINs and immobiliser data directly from the vehicle on-site.",
      },
      {
        question: "How long does it take to program a replacement key?",
        answer: "Most spare or replacement keys are cut, coded, and tested within 30–60 minutes at your location.",
      },
    ],
    relatedLinks: [
      { label: "Replacement Car Keys", href: "/replacement-car-keys-chesterfield" },
      { label: "Ford Keys", href: "/ford-key-replacement-chesterfield" },
      { label: "BMW Keys", href: "/bmw-key-replacement-chesterfield" },
      { label: "Contact Us", href: "/contact" },
    ],
  };
}

function buildTuningPage(
  slug: string,
  h1: string,
  metaDescription: string,
  intro: string
): ServicePageData {
  return {
    slug,
    badge: "Mobile ECU Remapping · Chesterfield",
    pageTitle: `${h1}`,
    metaDescription,
    h1,
    highlight: "Safe, Diagnostic-Led Tuning",
    intro,
    backgroundImage: "/assets/aes-hero-luxury-car.png",
    services: [
      {
        name: "Stage 1 Performance Remap",
        description: "Bespoke ECU calibration unlocking safe horsepower and torque gains with sharper throttle response.",
        features: ["Pre-remap full diagnostic health check", "Battery voltage stabilisation", "Custom written calibration file"],
        pricing: "From £249",
      },
      {
        name: "Economy & Fleet Remap",
        description: "Optimised torque delivery at lower RPMs designed to reduce diesel fuel consumption on cars and vans.",
        features: ["Ideal for Transit, Sprinter & Vivaro vans", "Smoother towing & load pulling", "Up to 15% MPG improvement"],
        pricing: "From £249",
      },
      {
        name: "ECU Diagnostics & Cloning",
        description: "Full engine management diagnostics, sensor live data logging, and replacement ECU cloning.",
        features: ["DPF, EGR & AdBlue fault diagnostics", "Boost leak & fuel rail pressure checks", "Original file backup kept safely"],
        pricing: "From £65",
      },
    ],
    benefits: [
      "Full dealer-level diagnostic check before tuning",
      "100% mobile service at your home or workplace",
      "Original factory ECU file backed up securely",
      "Safe within manufacturer mechanical tolerances",
    ],
    faqs: [
      {
        question: "Why choose an auto electrician for ECU remapping?",
        answer: "An ECU remap modifies your vehicle's engine management computer. Unlike generic flashers, we run a full diagnostic health check and use professional battery voltage support to prevent ECU bricking.",
      },
      {
        question: "Can my vehicle be returned to standard later?",
        answer: "Yes. We always store your original factory ECU file so we can revert the vehicle back to stock whenever required.",
      },
    ],
    relatedLinks: [
      { label: "ECU Remapping", href: "/ecu-remapping" },
      { label: "Vehicle Diagnostics", href: "/diagnostics" },
      { label: "Fleet Services", href: "/fleet-services" },
    ],
  };
}

export const servicePages: Record<string, ServicePageData> = {
  // Core Electrical Services
  diagnostics: {
    slug: "diagnostics",
    badge: "Dealer-Level Diagnostics",
    pageTitle: "Mobile Vehicle Diagnostics Chesterfield",
    metaDescription:
      "Dealer-level mobile car & van diagnostics in Chesterfield & Derbyshire. Oscilloscope testing, CAN-bus fault tracing, EML, ABS, airbag & DPF diagnostics. Call 07753 891461.",
    h1: "Mobile Vehicle Diagnostics",
    highlight: "Chesterfield & Derbyshire",
    intro:
      "We go far beyond basic fault-code reading. Using dealer-grade diagnostic interfaces and 4-channel PicoScope oscilloscopes, we trace complex electrical, CAN-bus, and engine management faults at your door.",
    backgroundImage: "/assets/aes-hero-diagnostics.jpg",
    services: [
      {
        name: "Full System Diagnostic Scan",
        description: "Complete interrogation of Engine, ABS, Airbag, Gearbox, BCM, and comfort control modules with live data analysis.",
        features: ["Dealer-level fault code interpretation", "Live sensor waveform verification", "Written diagnostic report"],
        pricing: "From £65",
      },
      {
        name: "Oscilloscope & CAN-Bus Testing",
        description: "Pinpoint intermittent wiring breaks, shorted communication lines, and sensor glitches other garages miss.",
        features: ["PicoScope waveform capture", "CAN-High / CAN-Low network testing", "No parts-cannon guesswork"],
        pricing: "From £85",
      },
      {
        name: "Non-Start & Immobiliser Tracing",
        description: "Rapid roadside or driveway diagnosis for vehicles that crank and won't start or show immobiliser lockouts.",
        features: ["Fuel rail & injector signal checks", "Crank/cam sensor synchronisation", "Starter & relay circuit testing"],
        pricing: "From £75",
      },
    ],
    benefits: [
      "Accurate root-cause diagnosis before replacing parts",
      "Save towing/recovery costs to a main dealership",
      "Dealer-level tools for VAG, BMW, Ford, Mercedes & more",
      "Transparent hourly or fixed diagnostic rates",
    ],
    faqs: [
      {
        question: "What makes your diagnostics different from a standard garage?",
        answer: "Standard garages often rely on generic OBD code readers that only suggest possible causes. We use oscilloscope waveform testing, wiring schematics, and dealer-level software to prove the exact faulty component or wire.",
      },
      {
        question: "Can you clear and diagnose airbag or ABS warning lights?",
        answer: "Yes. We diagnose wheel speed sensors, ABS pumps, clock springs, and occupancy sensors, repair the underlying electrical fault, and reset the warning lights.",
      },
    ],
    relatedLinks: [
      { label: "Electrical Repairs", href: "/electrical-repairs" },
      { label: "Alternator & Starter Diagnostics", href: "/alternator-starter-motor-diagnostics-chesterfield" },
      { label: "Battery Coding", href: "/battery-replacement-coding-chesterfield" },
    ],
  },

  "electrical-services": {
    slug: "electrical-services",
    badge: "Auto Electrical Specialists",
    pageTitle: "Auto Electrical Services Chesterfield",
    metaDescription:
      "Comprehensive mobile auto electrical services in Chesterfield & Derbyshire. Diagnostics, wiring repairs, Ghost 2 immobilisers, car keys & fleet electrics. Call 07753 891461.",
    h1: "Mobile Auto Electrical Services",
    highlight: "Cars, Vans & Commercial Fleets",
    intro:
      "Complete mobile auto electrical engineering across Chesterfield and Derbyshire. From parasitic battery drains and damaged looms to security systems and key programming.",
    backgroundImage: "/assets/services-workshop-bg.jpg",
    services: [
      {
        name: "Wiring & Loom Repairs",
        description: "OEM-standard repairs for rodent damage, water ingress, corroded plugs, and chafed engine bay harnesses.",
        features: ["Heat-shrink & solder-seal joints", "OEM connector pin replacement", "Waterproof loom protection"],
      },
      {
        name: "Parasitic Drain Tracing",
        description: "Find out why your car or van battery goes flat overnight without disconnecting random fuses.",
        features: ["Thermal camera & millivolt testing", "Module sleep-cycle monitoring", "Alternator diode ripple checks"],
      },
      {
        name: "Module Coding & Programming",
        description: "Replacement module coding, battery BMS registration, and towbar/accessory ECU activation.",
        features: ["AGM/EFB battery registration", "Injector & sensor coding", "Body control module diagnostics"],
      },
    ],
    benefits: [
      "100% mobile workshop to your driveway or yard",
      "IMI-qualified auto electrical specialist",
      "Full public liability & trade insurance",
      "Same-day appointments where available",
    ],
    faqs: [
      {
        question: "Do you repair rodent-damaged wiring harnesses?",
        answer: "Yes. We regularly repair chewed engine bay and sensor wiring looms on-site using OEM-grade wire, crimp terminals, and adhesive-lined heat shrink.",
      },
    ],
    relatedLinks: [
      { label: "Vehicle Diagnostics", href: "/diagnostics" },
      { label: "Electrical Repairs", href: "/electrical-repairs" },
      { label: "Replacement Car Keys", href: "/replacement-car-keys-chesterfield" },
    ],
  },

  "electrical-repairs": {
    slug: "electrical-repairs",
    badge: "Fault Finding & Repairs",
    pageTitle: "Mobile Auto Electrical Repairs Chesterfield",
    metaDescription:
      "Expert mobile auto electrical repairs in Chesterfield. Wiring looms, parasitic battery drains, central locking, lighting faults & ECU wiring repaired at your door.",
    h1: "Auto Electrical Repairs",
    highlight: "Pinpoint Fault Tracing & Repair",
    intro:
      "Intermittent electrical gremlins, flat batteries overnight, blown fuses, or dead lighting circuits? We locate the exact fault and carry out permanent, OEM-spec repairs on-site.",
    backgroundImage: "/assets/workshop-tools.jpg",
    services: [
      {
        name: "Parasitic Battery Drain",
        description: "If your battery goes flat after sitting overnight or over a weekend, we measure sleep-state current draw to isolate the culprit module.",
        features: ["Non-invasive fuse voltage drop test", "CAN-bus wake-up tracing", "Alternator & tracker drain checks"],
        pricing: "From £75",
      },
      {
        name: "Short Circuits & Wiring Faults",
        description: "Tracing dead circuits, melted fuse boxes, earth faults, and broken door-shut loom wires.",
        features: ["Door loom & tailgate repairs", "Corrosion & water ingress remediation", "Load testing under real current"],
        pricing: "From £65",
      },
      {
        name: "Lighting, Wiper & Window Faults",
        description: "Diagnosing non-working headlights, trailer lighting modules, electric windows, and central locking actuators.",
        features: ["LED/HID ballast & module checks", "BCM output testing", "Switch & motor load testing"],
        pricing: "From £65",
      },
    ],
    benefits: [
      "Permanent repairs—no temporary scotch-locks or tape",
      "Tested under full electrical load",
      "Mobile service across Chesterfield & Derbyshire",
    ],
    faqs: [
      {
        question: "Can you fix a car that keeps blowing the same fuse?",
        answer: "Yes. Using thermal imaging and circuit isolation tools, we locate the exact short-to-ground wire or failing component causing the fuse to blow.",
      },
    ],
    relatedLinks: [
      { label: "Vehicle Diagnostics", href: "/diagnostics" },
      { label: "Battery Replacement", href: "/battery-replacement-coding-chesterfield" },
    ],
  },

  "security-systems": {
    slug: "security-systems",
    badge: "TASSA Vehicle Security",
    pageTitle: "Vehicle Security Systems & Immobilisers Chesterfield",
    metaDescription:
      "Protect your car or van in Chesterfield with TASSA-approved Ghost 2 immobilisers, trackers, and Thatcham security systems installed at your home.",
    h1: "Vehicle Security Systems",
    highlight: "Covert Immobilisers & Protection",
    intro:
      "Defend your vehicle against relay theft, key cloning, and OBD port hacking. We supply and install TASSA-verified covert immobilisers and vehicle security systems at your driveway.",
    backgroundImage: "/assets/ghost2-installation-hero.jpg",
    services: [
      {
        name: "Autowatch Ghost 2 Immobiliser",
        description: "The UK's leading covert CAN-bus immobiliser. Requires your unique steering wheel / dashboard PIN sequence before the engine will start.",
        features: ["TASSA-verified with certificate", "Undetectable by RF scanners", "Stops relay & key-cloning theft"],
        pricing: "£499 Fitted",
      },
      {
        name: "Commercial Van Security",
        description: "Tailored immobilisers and alarm integration for Ford Transit, VW Transporter, and trade vans.",
        features: ["Protects tools & fleet assets", "Discreet hidden installation", "Service/Valet mode included"],
      },
    ],
    benefits: [
      "TASSA registered professional installation",
      "Mobile fitting at your home or workplace",
      "No key fobs to lose—uses existing car buttons",
    ],
    faqs: [
      {
        question: "Does a Ghost 2 immobiliser void my manufacturer warranty?",
        answer: "No. The Ghost 2 connects cleanly to the vehicle's CAN-bus network without cutting factory wires or leaving visible marks.",
      },
    ],
    relatedLinks: [
      { label: "Ghost 2 Immobiliser", href: "/ghost-2-immobiliser" },
      { label: "Immobiliser Installation", href: "/immobiliser-installation-chesterfield" },
    ],
  },

  "ghost-2-immobiliser": {
    slug: "ghost-2-immobiliser",
    badge: "TASSA Approved Installer",
    pageTitle: "Autowatch Ghost 2 Immobiliser Chesterfield | £499 Fitted",
    metaDescription:
      "TASSA-approved Autowatch Ghost 2 immobiliser fitting in Chesterfield & Derbyshire. Mobile installation at your home or work for £499. Stops relay theft & key cloning.",
    h1: "Autowatch Ghost 2 Immobiliser",
    highlight: "TASSA Approved · £499 Mobile Fitted",
    intro:
      "Protect your car or van from keyless relay theft and OBD key cloning. The Autowatch Ghost 2 is completely invisible to thieves and requires your personal button sequence before the engine can start.",
    backgroundImage: "/assets/ghost2-installation-hero.jpg",
    services: [
      {
        name: "Ghost 2 Full Mobile Installation",
        description: "Supplied, covertly installed, and tested at your home or workplace anywhere in Chesterfield & Derbyshire.",
        features: ["Official TASSA certificate for insurers", "No extra key fobs required", "2-year manufacturer warranty"],
        pricing: "£499 Fitted",
      },
      {
        name: "Valet / Service Mode & App",
        description: "Easily put your vehicle into Service Mode for MOTs or garage visits without revealing your personal PIN code.",
        features: ["Smartphone Bluetooth pairing option", "Changeable PIN sequence anytime", "Weatherproof & silent operation"],
      },
    ],
    benefits: [
      "Stops thieves even if they steal or clone your key",
      "No radio frequency signals for scanners to detect",
      "Recognised by major UK insurance providers",
      "Fitted cleanly on your driveway in ~2 hours",
    ],
    faqs: [
      {
        question: "How does the Ghost 2 immobiliser work?",
        answer: "Before starting the engine (or selecting Drive on some models), you enter a custom 4-to-20 press sequence using existing buttons on your steering wheel, door panel, or centre console. Without it, the vehicle will not start or move.",
      },
      {
        question: "What happens when I take my car to a garage for servicing?",
        answer: "You simply activate Service/Valet Mode via your button sequence or the Ghost smartphone app, allowing the garage to drive the car normally without knowing your PIN.",
      },
    ],
    relatedLinks: [
      { label: "Security Systems", href: "/security-systems" },
      { label: "Ghost 2 Blog Guide", href: "/blog/ghost-2-protects-vehicle-chesterfield" },
    ],
  },

  upgrades: {
    slug: "upgrades",
    badge: "OEM & Accessory Retrofits",
    pageTitle: "OEM Upgrades, Dash Cams & Towbars Chesterfield",
    metaDescription:
      "Mobile installation of hardwired dash cams, parking sensors, reversing cameras, and towbar electrics in Chesterfield & Derbyshire. Factory-finish fitting.",
    h1: "OEM & Accessory Upgrades",
    highlight: "Factory-Standard Mobile Fitting",
    intro:
      "Enhance your vehicle's safety, practicality, and convenience with cleanly wired dash cams, flush parking sensors, reversing cameras, and coded towbar electrics.",
    backgroundImage: "/assets/oem-upgrades-hero.jpg",
    services: [
      {
        name: "Hardwired Dash Cams",
        description: "Front and rear 4K dash cams hardwired to your fuse box with parking mode protection and zero hanging cables.",
        features: ["Concealed headliner & A-pillar routing", "Low-voltage battery cut-off", "Front & rear dual-channel options"],
        pricing: "From £85",
      },
      {
        name: "Parking Sensors & Reversing Cameras",
        description: "Colour-coded flush rear/front sensors and crisp reversing cameras integrated neatly into your vehicle.",
        features: ["OEM-style flush sensor fitting", "Towbar-compatible calibration", "Clear visual & audible alerts"],
        pricing: "From £175",
      },
      {
        name: "Towbar Wiring & Coding",
        description: "Dedicated 7-pin and 13-pin vehicle-specific towbar wiring kits with full ECU trailer module coding.",
        features: ["Preserves vehicle warranty", "Activates trailer stability & PDC mute", "Caravan & bike rack ready"],
      },
    ],
    benefits: [
      "Clean, concealed OEM-grade wiring",
      "No messy 12V cigarette lighter cables",
      "Full diagnostic coding included where required",
    ],
    faqs: [
      {
        question: "Can you fit a dash cam I have already bought?",
        answer: "Yes. We offer a fitting-only service for customer-supplied dash cams (such as Nextbase, BlackVue, or Thinkware) as well as full supply-and-fit packages.",
      },
    ],
    relatedLinks: [
      { label: "Dash Cam Installation", href: "/dash-cam-installation-chesterfield" },
      { label: "Parking Sensors", href: "/parking-sensors-chesterfield" },
      { label: "Towbar Wiring", href: "/tow-bar-wiring-chesterfield" },
    ],
  },

  "oem-upgrades": {
    slug: "oem-upgrades",
    badge: "OEM Retrofits",
    pageTitle: "OEM Vehicle Upgrades Chesterfield",
    metaDescription: "Factory-standard OEM vehicle upgrades in Chesterfield: hardwired dash cams, reversing cameras, parking sensors & towbar coding.",
    h1: "OEM Vehicle Upgrades",
    highlight: "Chesterfield & Derbyshire",
    intro: "Factory-finish electrical upgrades installed cleanly at your home or workplace.",
    backgroundImage: "/assets/oem-upgrades-hero.jpg",
    services: [
      {
        name: "Dash Cam Hardwiring",
        description: "Concealed ignition & permanent live hardwiring with battery drain protection.",
        features: ["Zero visible wires", "Parking mode ready", "Fuse-tap safe installation"],
        pricing: "From £85",
      },
      {
        name: "Reversing Cameras & Sensors",
        description: "Improve visibility and avoid costly bumper scrapes with factory-look sensors and cameras.",
        features: ["Colour-matched sensors", "Night-vision cameras", "Mobile fitting"],
        pricing: "From £175",
      },
    ],
    faqs: [
      {
        question: "Will hardwiring a dash cam drain my car battery?",
        answer: "No. We use dedicated hardwire kits with built-in low-voltage cut-off protection so your car always retains enough charge to start.",
      },
    ],
    relatedLinks: [{ label: "All Upgrades", href: "/upgrades" }],
  },

  "fleet-services": {
    slug: "fleet-services",
    badge: "Commercial & Fleet",
    pageTitle: "Fleet Auto Electrical Services Chesterfield",
    metaDescription:
      "Priority mobile auto electrical support for commercial fleets in Chesterfield & Derbyshire. Chapter 8 lighting, beacons, diagnostics, spare van keys & split-charge systems.",
    h1: "Fleet & Commercial Auto Electrics",
    highlight: "Minimise Vehicle Downtime",
    intro:
      "Keep your vans and commercial fleet on the road. We attend your depot or job site across Derbyshire & South Yorkshire for diagnostics, Chapter 8 safety lighting, spare keys, and electrical repairs.",
    backgroundImage: "/assets/fleet-services-hero.jpg",
    services: [
      {
        name: "Chapter 8 & Work Lighting",
        description: "High-visibility amber LED lightbars, grille strobes, work lamps, and beacon installations for highway & utility fleets.",
        features: ["R65 / Chapter 8 compliant", "Dashboard switch integration", "Heavy-duty waterproof wiring"],
      },
      {
        name: "Fleet Diagnostics & Non-Start",
        description: "Priority callouts for Transit, Sprinter, Vivaro, and Crafter vans experiencing DPF, AdBlue, or CAN-bus faults.",
        features: ["On-site at your yard or depot", "Dealer-level van diagnostics", "Reduced recovery costs"],
      },
      {
        name: "Spare Van Keys & Security",
        description: "Bulk spare key cutting, lost fleet key replacement, and Ghost 2 immobiliser installations to protect tools.",
        features: ["Fleet account invoicing", "On-site key programming", "Deadlock & immobiliser advice"],
      },
    ],
    benefits: [
      "We come to your yard—no driver time wasted",
      "Flexible scheduling for commercial operators",
      "Consistent OEM-grade workmanship across your fleet",
    ],
    faqs: [
      {
        question: "Do you offer fleet account billing for local businesses?",
        answer: "Yes, we support local trades, civil engineering firms, and delivery fleets across Derbyshire with streamlined invoicing and priority callouts.",
      },
    ],
    relatedLinks: [
      { label: "Chapter 8 Lighting", href: "/chapter-8-lighting-chesterfield" },
      { label: "Aux & Off-Road Lighting", href: "/aux-off-road-lighting-chesterfield" },
    ],
  },

  // ECU Remapping & Tuning
  tuning: buildTuningPage(
    "tuning",
    "Mobile Performance Tuning",
    "Mobile ECU remapping and performance tuning in Chesterfield & Derbyshire. Diagnostic-led Stage 1 & economy remaps at your door.",
    "Unlock smoother power delivery, sharper throttle response, and improved fuel economy with our diagnostic-led mobile ECU remapping service."
  ),
  "ecu-remapping": buildTuningPage(
    "ecu-remapping",
    "Mobile ECU Remapping",
    "Safe mobile ECU remapping in Chesterfield & Derbyshire. Custom Stage 1 performance and diesel economy calibrations with full pre-remap diagnostics.",
    "Bespoke mobile ECU remapping delivered to your driveway. Every remap includes a full dealer-level diagnostic health check and battery stabilisation."
  ),
  "performance-tuning": buildTuningPage(
    "performance-tuning",
    "Performance Tuning & Remapping",
    "Professional mobile car and van performance tuning in Chesterfield. Stage 1 remaps and economy tuning.",
    "Safe, reliable mobile performance tuning backed by dealer-level diagnostic hardware."
  ),
  "car-remap": buildTuningPage(
    "car-remap",
    "Mobile Car Remap Service",
    "Book a mobile car remap in Chesterfield & Derbyshire. Improved BHP, torque, and MPG.",
    "Custom car remapping at your home or workplace across Chesterfield, Sheffield, and Derbyshire."
  ),
  "remapping-guide": buildTuningPage(
    "remapping-guide",
    "ECU Remapping Guide",
    "Everything you need to know about safe mobile ECU remapping in Chesterfield.",
    "Learn how diagnostic-led ECU remapping safely improves torque, drivability, and fuel efficiency."
  ),
  "what-is-car-remapping": buildTuningPage(
    "what-is-car-remapping",
    "What Is Car Remapping?",
    "Understand how car ECU remapping works, what gains to expect, and why pre-remap diagnostics matter.",
    "Car remapping optimises the software parameters inside your Engine Control Unit (ECU) for better power, torque, and efficiency."
  ),
  "ecu-remap-chesterfield": buildTuningPage(
    "ecu-remap-chesterfield",
    "ECU Remap Chesterfield",
    "Mobile ECU remap in Chesterfield. Stage 1 power and economy remaps at your door. Call 07753 891461.",
    "Professional mobile ECU remapping in Chesterfield with full pre-tune diagnostics."
  ),
  "ecu-remapping-chesterfield": buildTuningPage(
    "ecu-remapping-chesterfield",
    "ECU Remapping Chesterfield",
    "Trusted ECU remapping in Chesterfield & Derbyshire. Mobile Stage 1 & fleet economy tuning.",
    "Safe, custom ECU remapping in Chesterfield carried out at your home or workplace."
  ),
  "performance-chip-chesterfield": buildTuningPage(
    "performance-chip-chesterfield",
    "Performance Tuning & ECU Remapping Chesterfield",
    "Safe ECU remapping vs tuning boxes in Chesterfield. Custom software calibration for cars and vans.",
    "Avoid risky plug-in tuning boxes—choose a proper diagnostic-led ECU remap in Chesterfield."
  ),
  "car-tuning-chesterfield": buildTuningPage(
    "car-tuning-chesterfield",
    "Car Tuning Chesterfield",
    "Mobile car tuning in Chesterfield. Custom Stage 1 performance and fuel economy remapping.",
    "Specialist mobile car tuning in Chesterfield with dealer-level diagnostics."
  ),
  "car-performance-garage-chesterfield": buildTuningPage(
    "car-performance-garage-chesterfield",
    "Mobile Car Performance Specialist Chesterfield",
    "Skip the garage wait—mobile car performance tuning and ECU remapping in Chesterfield.",
    "Dealer-grade diagnostics and custom performance ECU remapping brought directly to your driveway in Chesterfield."
  ),
  "car-engine-tuning-chesterfield": buildTuningPage(
    "car-engine-tuning-chesterfield",
    "Car Engine Tuning Chesterfield",
    "Mobile engine tuning and ECU calibration in Chesterfield & Derbyshire.",
    "Precision engine ECU tuning for diesel and petrol vehicles across Chesterfield."
  ),
  "tuning-garage-chesterfield": buildTuningPage(
    "tuning-garage-chesterfield",
    "Mobile Tuning Specialist Chesterfield",
    "Mobile ECU tuning and diagnostics in Chesterfield. No workshop visit required.",
    "All the capability of a specialist tuning garage, delivered directly to your home or workplace in Chesterfield."
  ),

  // Main Key Replacement Pillar
  "replacement-car-keys-chesterfield": {
    slug: "replacement-car-keys-chesterfield",
    badge: "Mobile Auto Locksmith · Chesterfield",
    pageTitle: "Replacement Car Keys Chesterfield | Mobile Key Cutting & Coding",
    metaDescription:
      "Fast mobile replacement car keys in Chesterfield & Derbyshire. Lost all keys, spare keys, remote fobs & smart proximity keys cut and programmed at your door. Call 07753 891461.",
    h1: "Replacement Car Keys Chesterfield",
    highlight: "Mobile Cutting & Programming at Your Door",
    intro:
      "Lost your only car key, locked your keys inside the car, or need a spare remote fob? We come to you anywhere in Chesterfield and Derbyshire—unlocking, cutting, and programming new keys on the spot.",
    backgroundImage: "/assets/key-replacement-hero.jpg",
    services: [
      {
        name: "All Keys Lost Emergency Service",
        description: "No working key? We gain non-destructive entry, decode the lock, cut a fresh blade, and code new keys to your immobiliser.",
        features: ["Zero damage door unlocking", "Old lost keys erased from ECU", "Same-day roadside & home callout"],
        pricing: "From £160",
      },
      {
        name: "Spare Car Keys & Remote Fobs",
        description: "Getting a spare key now saves hundreds compared to an all-keys-lost emergency.",
        features: ["Transponder, flip & smart keys", "Laser-cut blades on-site", "Much faster & cheaper than dealers"],
        pricing: "From £110",
      },
      {
        name: "Key Fob Repair & Reprogramming",
        description: "Fix dead central locking buttons, snapped key blades, or keys that have lost sync with the vehicle.",
        features: ["Micro-switch & shell replacement", "Battery & transponder checks", "Immobiliser fault diagnostics"],
        pricing: "From £65",
      },
    ],
    benefits: [
      "Save up to 50% vs main dealer prices",
      "No vehicle recovery required—100% mobile",
      "Covering Ford, VW, BMW, Audi, Mercedes, Vauxhall & more",
      "12-month warranty on all supplied keys",
    ],
    faqs: [
      {
        question: "How much does a replacement car key cost in Chesterfield?",
        answer: "Spare transponder and remote keys start from £110, while all-keys-lost emergency callouts start from £160 depending on the vehicle make, year, and key type. Call 07753 891461 with your reg for an exact fixed quote.",
      },
      {
        question: "Can you replace keyless-entry / push-to-start smart fobs?",
        answer: "Yes. We stock and program proximity and keyless-go smart fobs for most modern manufacturers including Ford, BMW, Audi, VW, Mercedes, Vauxhall, Nissan, and Land Rover.",
      },
    ],
    relatedLinks: [
      { label: "Ford Keys", href: "/ford-key-replacement-chesterfield" },
      { label: "VW Keys", href: "/volkswagen-key-replacement-chesterfield" },
      { label: "BMW Keys", href: "/bmw-key-replacement-chesterfield" },
      { label: "Audi Keys", href: "/audi-key-replacement-chesterfield" },
      { label: "Mercedes Keys", href: "/mercedes-key-replacement-chesterfield" },
      { label: "Vauxhall Keys", href: "/vauxhall-key-replacement-chesterfield" },
    ],
  },

  // Other Auto Electrical Service Pages
  "replacement-car-fobs-chesterfield": buildKeyVariationPage(
    "replacement-car-fobs-chesterfield",
    "Replacement Car Fobs Chesterfield",
    "Key Fob Specialists",
    "Mobile supply, cutting, and programming of remote car key fobs in Chesterfield & Derbyshire.",
    "Replacement car key fobs in Chesterfield. Mobile programming for remote flip keys & smart fobs. Call 07753 891461."
  ),
  "battery-replacement-coding-chesterfield": {
    slug: "battery-replacement-coding-chesterfield",
    badge: "Battery & BMS Coding",
    pageTitle: "Car Battery Replacement & Coding Chesterfield",
    metaDescription:
      "Mobile AGM & EFB start-stop car battery replacement and BMS ECU coding in Chesterfield & Derbyshire. Call 07753 891461.",
    h1: "Battery Replacement & Coding",
    highlight: "Chesterfield & Derbyshire",
    intro:
      "Modern start-stop vehicles require AGM or EFB batteries to be registered to the Battery Management System (BMS). We test, supply, fit, and code new batteries at your home or workplace.",
    backgroundImage: "/assets/aes-hero-diagnostics.jpg",
    services: [
      {
        name: "Mobile Battery Testing & Alternator Check",
        description: "Load testing your battery and verifying alternator charging output before replacing anything.",
        features: ["CCA & state-of-health test", "Alternator ripple & output check", "Parasitic drain check available"],
      },
      {
        name: "AGM & EFB Supply, Fit & BMS Coding",
        description: "OEM-spec batteries fitted and coded to your vehicle's ECU so start-stop and charging work properly.",
        features: ["BMW, Audi, VW, Mercedes & Ford", "Prevents overcharging & early failure", "Old battery recycled responsibly"],
      },
    ],
    benefits: [
      "Fitted at your home or work—no jump-start needed",
      "Full ECU battery registration included",
      "Stops dashboard battery & start-stop warnings",
    ],
    faqs: [
      {
        question: "What happens if a start-stop battery isn't coded?",
        answer: "The vehicle's BMS continues using the charging profile for the old degraded battery, which can overcharge or undercharge the new battery and shorten its lifespan.",
      },
    ],
    relatedLinks: [{ label: "Electrical Repairs", href: "/electrical-repairs" }],
  },
  "aux-off-road-lighting-chesterfield": {
    slug: "aux-off-road-lighting-chesterfield",
    badge: "Commercial & 4x4 Lighting",
    pageTitle: "Aux & Off-Road LED Lighting Installation Chesterfield",
    metaDescription:
      "Professional installation of LED lightbars, spotlights, work lamps, and auxiliary switch panels for 4x4s, pickups & vans in Chesterfield.",
    h1: "Aux & Off-Road Lighting Installation",
    highlight: "Pickups, 4x4s & Work Vehicles",
    intro:
      "Relay-protected, neatly loomed auxiliary LED lightbars, reverse work lamps, and cab switch panels installed to commercial standards.",
    backgroundImage: "/assets/fleet-services-hero.jpg",
    services: [
      {
        name: "LED Lightbars & Spotlights",
        description: "High-output LED bars wired cleanly with waterproof connectors, relays, and CAN-bus high-beam triggers.",
        features: ["Waterproof Deutsch connectors", "Dedicated fused relay circuits", "OEM-style cabin switches"],
      },
      {
        name: "Rear Work & Reverse Lamps",
        description: "Bright work lighting for commercial vans, recovery trucks, and 4x4 pickups.",
        features: ["Switchable or reverse-triggered", "Heavy-duty split conduit", "Zero battery drain"],
      },
    ],
    faqs: [
      {
        question: "Can you wire spotlights to work with LED matrix headlights?",
        answer: "Yes. On modern vehicles with CAN-bus controlled headlights, we use a CAN-bus interface module to safely trigger auxiliary spotlights.",
      },
    ],
    relatedLinks: [
      { label: "Chapter 8 Lighting", href: "/chapter-8-lighting-chesterfield" },
      { label: "Fleet Services", href: "/fleet-services" },
    ],
  },
  "chapter-8-lighting-chesterfield": {
    slug: "chapter-8-lighting-chesterfield",
    badge: "Highway Compliance",
    pageTitle: "Chapter 8 Beacon & Warning Lighting Chesterfield",
    metaDescription:
      "Mobile Chapter 8 amber LED beacon, lightbar, and grille strobe installation for commercial vans and highway fleets in Chesterfield & Derbyshire.",
    h1: "Chapter 8 Lighting Installation",
    highlight: "Chesterfield & Derbyshire Fleets",
    intro:
      "R65-compliant amber roof lightbars, beacons, and perimeter strobes installed cleanly at your yard or depot.",
    backgroundImage: "/assets/fleet-services-hero.jpg",
    services: [
      {
        name: "R65 Roof Beacons & Lightbars",
        description: "Low-profile LED warning bars wired with neat roof glands and illuminated cab switches.",
        features: ["ECE R65 approved hardware", "Watertight roof entry", "Flash-pattern control"],
      },
      {
        name: "Grille & Rear Perimeter Strobes",
        description: "High-intensity directional amber LEDs for maximum roadside visibility.",
        features: ["Synchronised flash patterns", "Fused & relay protected", "Fleet bulk rates"],
      },
    ],
    faqs: [
      {
        question: "Do you come to our company yard to fit multiple vans?",
        answer: "Yes, we fit Chapter 8 lighting on-site at your depot across Chesterfield, Sheffield, and Derbyshire to minimise fleet downtime.",
      },
    ],
    relatedLinks: [{ label: "Fleet Services", href: "/fleet-services" }],
  },
  "towbar-fitting-chesterfield": {
    slug: "towbar-fitting-chesterfield",
    badge: "Towbar Electrics & Fitting",
    pageTitle: "Towbar Wiring & Fitting Chesterfield",
    metaDescription: "Vehicle-specific 7-pin & 13-pin towbar electrics and diagnostic ECU coding in Chesterfield & Derbyshire.",
    h1: "Towbar Electrics & Fitting",
    highlight: "Dedicated Wiring & Coding",
    intro: "Vehicle-specific towbar wiring looms and full dealer-level trailer module coding so your vehicle's safety systems work seamlessly when towing.",
    backgroundImage: "/assets/oem-upgrades-hero.jpg",
    services: [
      {
        name: "13-Pin & 7-Pin Dedicated Wiring",
        description: "Factory-integration wiring kits that communicate with your car's CAN-bus network.",
        features: ["Trailer stability control active", "Rear parking sensors auto-mute", "Bulb-out warning integration"],
      },
    ],
    faqs: [
      {
        question: "Why use dedicated towbar wiring instead of universal bypass?",
        answer: "Dedicated wiring integrates with your car's ABS, stability control, reversing sensors, and battery charging, and protects your manufacturer warranty.",
      },
    ],
    relatedLinks: [{ label: "Towbar Wiring", href: "/tow-bar-wiring-chesterfield" }],
  },
  "tow-bar-wiring-chesterfield": {
    slug: "tow-bar-wiring-chesterfield",
    badge: "Towbar Electrics",
    pageTitle: "Towbar Wiring & Coding Chesterfield",
    metaDescription: "Mobile 7-pin and 13-pin towbar wiring repairs, dedicated kit installation, and trailer ECU coding in Chesterfield.",
    h1: "Towbar Wiring & Coding",
    highlight: "Chesterfield & Derbyshire",
    intro: "Mobile towbar electrical installation, fault finding, and trailer module ECU coding at your home or workplace.",
    backgroundImage: "/assets/oem-upgrades-hero.jpg",
    services: [
      {
        name: "Trailer Module Coding & Repairs",
        description: "Fix dead caravan 12V feeds, corroded 13-pin sockets, or uncoded aftermarket towbar kits.",
        features: ["Socket replacement & rewiring", "Dealer-level trailer coding", "Caravan split-charge testing"],
      },
    ],
    faqs: [
      {
        question: "Can you code a towbar that another fitter installed?",
        answer: "Yes. We provide mobile trailer module coding for VW, Audi, Skoda, Seat, BMW, Ford, Mercedes, and Land Rover vehicles.",
      },
    ],
    relatedLinks: [{ label: "OEM Upgrades", href: "/upgrades" }],
  },
  "dash-cam-installation-chesterfield": {
    slug: "dash-cam-installation-chesterfield",
    badge: "Hardwired Dash Cams",
    pageTitle: "Dash Cam Installation Chesterfield | Hardwired Mobile Fitting",
    metaDescription: "Mobile hardwired front & rear dash cam installation in Chesterfield. Zero visible wires, parking mode enabled. Call 07753 891461.",
    h1: "Dash Cam Installation",
    highlight: "Concealed Mobile Hardwiring",
    intro: "Clean, factory-look front and rear dash cam installation at your home or workplace—completely hidden wiring with parking mode support.",
    backgroundImage: "/assets/oem-upgrades-hero.jpg",
    services: [
      {
        name: "Single or Dual-Channel Hardwiring",
        description: "Safely fused into your vehicle's fuse box with zero airbag interference and hidden trim routing.",
        features: ["Fits Nextbase, Thinkware, BlackVue & more", "Low-voltage battery protection", "Supply & fit or fit-only"],
        pricing: "From £85",
      },
    ],
    faqs: [
      {
        question: "How long does a front and rear dash cam installation take?",
        answer: "Usually around 60 to 90 minutes at your driveway or workplace.",
      },
    ],
    relatedLinks: [{ label: "OEM Upgrades", href: "/upgrades" }],
  },
  "parking-sensors-chesterfield": {
    slug: "parking-sensors-chesterfield",
    badge: "Parking Assistance",
    pageTitle: "Parking Sensors Fitted Chesterfield",
    metaDescription: "Flush colour-coded front and rear parking sensors fitted at your home in Chesterfield & Derbyshire.",
    h1: "Parking Sensors Fitted",
    highlight: "Chesterfield & Derbyshire",
    intro: "Flush-mounted, colour-matched parking sensors installed cleanly at your home or office.",
    backgroundImage: "/assets/oem-upgrades-hero.jpg",
    services: [
      {
        name: "Rear & Front Flush Parking Sensors",
        description: "OEM-look sensors painted to match your bumper with accurate audible warnings.",
        features: ["Colour-matched finish", "Towbar-friendly setup", "Clean concealed wiring"],
        pricing: "From £175",
      },
    ],
    faqs: [
      {
        question: "Can parking sensors be fitted if my car has a towbar?",
        answer: "Yes, we calibrate and position the sensors to ignore fixed towbars.",
      },
    ],
    relatedLinks: [{ label: "Reversing Cameras", href: "/parking-sensors-reversing-cameras-chesterfield" }],
  },
  "parking-sensors-reversing-cameras-chesterfield": {
    slug: "parking-sensors-reversing-cameras-chesterfield",
    badge: "Cameras & Sensors",
    pageTitle: "Parking Sensors & Reversing Cameras Chesterfield",
    metaDescription: "Mobile reversing camera and parking sensor fitting for cars, motorhomes & vans in Chesterfield & Derbyshire.",
    h1: "Parking Sensors & Reversing Cameras",
    highlight: "Cars, Vans & Motorhomes",
    intro: "High-definition reversing cameras and flush parking sensors fitted cleanly on your driveway.",
    backgroundImage: "/assets/oem-upgrades-hero.jpg",
    services: [
      {
        name: "Reversing Camera Systems",
        description: "OEM screen integration or dedicated dash/mirror monitors for vans, motorhomes, and cars.",
        features: ["Wide-angle night vision", "Waterproof IP68 cameras", "Commercial van brake-light cameras"],
        pricing: "From £175",
      },
    ],
    faqs: [
      {
        question: "Do you fit brake-light reversing cameras for Transit and Sprinter vans?",
        answer: "Yes, we supply and fit OEM-style high-level brake-light cameras for all major commercial vans.",
      },
    ],
    relatedLinks: [{ label: "Fleet Services", href: "/fleet-services" }],
  },
  "alternator-starter-motor-diagnostics-chesterfield": {
    slug: "alternator-starter-motor-diagnostics-chesterfield",
    badge: "Charging & Starting",
    pageTitle: "Alternator & Starter Motor Diagnostics Chesterfield",
    metaDescription: "Mobile alternator, smart charging, and starter motor diagnostics in Chesterfield. Avoid replacing expensive parts unnecessarily.",
    h1: "Alternator & Starter Diagnostics",
    highlight: "Chesterfield & Derbyshire",
    intro: "Battery warning light on or car refusing to crank? Before paying for an alternator or starter motor, we test the LIN-bus smart charging, relays, and earth straps on-site.",
    backgroundImage: "/assets/aes-hero-diagnostics.jpg",
    services: [
      {
        name: "Smart Alternator & LIN-Bus Testing",
        description: "Oscilloscope ripple, LIN control signal, and voltage drop testing across the charging circuit.",
        features: ["Tests alternator vs ECU signal", "Checks main power & earth cables", "Stops needless part swaps"],
        pricing: "From £65",
      },
      {
        name: "Starter Circuit & Non-Crank Diagnosis",
        description: "Pinpoint faulty starter solenoids, immobiliser lockouts, ignition switches, or corroded earth straps.",
        features: ["Current clamp cranking analysis", "Relay & fuse box testing", "Mobile roadside diagnosis"],
        pricing: "From £65",
      },
    ],
    faqs: [
      {
        question: "Why is my battery light still on after a new alternator?",
        answer: "Modern vehicles use LIN-bus or ECU-controlled smart alternators. A broken control wire, blown battery-monitor fuse, or incompatible alternator will trigger the warning light.",
      },
    ],
    relatedLinks: [
      { label: "Battery Coding", href: "/battery-replacement-coding-chesterfield" },
      { label: "Vehicle Diagnostics", href: "/diagnostics" },
    ],
  },
  "immobiliser-installation-chesterfield": {
    slug: "immobiliser-installation-chesterfield",
    badge: "TASSA Security",
    pageTitle: "Immobiliser Installation Chesterfield | Ghost 2 Specialist",
    metaDescription: "Mobile TASSA-approved immobiliser installation in Chesterfield & Derbyshire. Protect your car or van from theft.",
    h1: "Immobiliser Installation",
    highlight: "Chesterfield & Derbyshire",
    intro: "Covert, TASSA-registered immobiliser installations carried out at your home or workplace.",
    backgroundImage: "/assets/ghost2-installation-hero.jpg",
    services: [
      {
        name: "Autowatch Ghost 2 Installation",
        description: "CAN-bus immobiliser protecting against relay theft and key cloning.",
        features: ["£499 fully fitted", "TASSA certificate included", "2-year warranty"],
        pricing: "£499 Fitted",
      },
    ],
    faqs: [
      {
        question: "How long does immobiliser fitting take?",
        answer: "A Ghost 2 installation typically takes around 2 hours at your home or workplace.",
      },
    ],
    relatedLinks: [{ label: "Ghost 2 Immobiliser", href: "/ghost-2-immobiliser" }],
  },

  // Key Replacement Keyword Variation Pages
  "broken-car-key-replacement-chesterfield": buildKeyVariationPage(
    "broken-car-key-replacement-chesterfield",
    "Broken Car Key Replacement Chesterfield",
    "Snapped & Damaged Keys",
    "Snapped key blade, damaged flip mechanism, or crushed remote fob? We cut and program brand-new replacement keys on-site in Chesterfield.",
    "Broken car key replacement in Chesterfield. Snapped blades extracted and new remote keys cut & coded at your door. Call 07753 891461."
  ),
  "spare-car-key-chesterfield": buildKeyVariationPage(
    "spare-car-key-chesterfield",
    "Spare Car Key Chesterfield",
    "Spare Keys Cut & Coded",
    "Get a spare car or van key cut and programmed at your home or workplace in Chesterfield—save hundreds compared to an all-keys-lost emergency.",
    "Spare car key cutting and programming in Chesterfield. Mobile service for all makes & vans from £110. Call 07753 891461."
  ),
  "car-key-reprogramming-chesterfield": buildKeyVariationPage(
    "car-key-reprogramming-chesterfield",
    "Car Key Reprogramming Chesterfield",
    "Key & Fob Coding",
    "Key fob stopped unlocking or immobiliser light flashing? We reprogram car keys, clear lost keys from memory, and repair immobiliser sync faults.",
    "Mobile car key reprogramming in Chesterfield & Derbyshire. Remote fob coding and immobiliser resyncing. Call 07753 891461."
  ),
  "lost-car-key-chesterfield": buildKeyVariationPage(
    "lost-car-key-chesterfield",
    "Lost Car Key Replacement Chesterfield",
    "All Keys Lost Specialist",
    "Lost your only car key in Chesterfield? We unlock your vehicle without damage, cut a brand-new key, and erase the missing key from the car's computer.",
    "Lost all your car keys in Chesterfield? Same-day mobile replacement, non-destructive entry & coding. Call 07753 891461."
  ),
  "emergency-car-key-chesterfield": buildKeyVariationPage(
    "emergency-car-key-chesterfield",
    "Emergency Car Key Replacement Chesterfield",
    "Same-Day Emergency Callout",
    "Locked out of your car or stranded with a lost or snapped key in Chesterfield? Rapid mobile dispatch straight to your vehicle.",
    "Emergency mobile car key replacement & vehicle unlocking in Chesterfield. Fast response, zero damage. Call 07753 891461."
  ),
  "keyless-entry-programming-chesterfield": buildKeyVariationPage(
    "keyless-entry-programming-chesterfield",
    "Keyless Entry Programming Chesterfield",
    "Keyless & Push-Start",
    "Mobile programming for keyless entry and push-button start fobs across Chesterfield & Derbyshire.",
    "Keyless entry and smart fob programming in Chesterfield. Mobile replacement for Ford, BMW, Audi, VW & more."
  ),
  "proximity-key-replacement-chesterfield": buildKeyVariationPage(
    "proximity-key-replacement-chesterfield",
    "Proximity Key Replacement Chesterfield",
    "Proximity Smart Fobs",
    "Replacement proximity smart keys cut and coded at your driveway for keyless-go vehicles.",
    "Proximity key replacement in Chesterfield. Smart push-to-start fobs supplied and programmed on-site."
  ),
  "car-key-copy-chesterfield": buildKeyVariationPage(
    "car-key-copy-chesterfield",
    "Car Key Copy & Duplication Chesterfield",
    "Mobile Key Duplication",
    "Need an extra copy of your car or van key? We cut and clone transponder and remote keys at your home or workplace.",
    "Mobile car key copy and duplication in Chesterfield. Transponder & remote spare keys from £110."
  ),
  "smart-key-programming-chesterfield": buildKeyVariationPage(
    "smart-key-programming-chesterfield",
    "Smart Key Programming Chesterfield",
    "Smart Key Specialists",
    "Dealer-level smart key programming for modern vehicles across Chesterfield & Derbyshire.",
    "Mobile smart key programming in Chesterfield. Push-start and comfort access keys coded at your door."
  ),
  "key-fob-battery-replacement-chesterfield": buildKeyVariationPage(
    "key-fob-battery-replacement-chesterfield",
    "Key Fob Battery & Repair Chesterfield",
    "Fob Testing & Repair",
    "Key fob not working even after a battery swap? We test RF transmission, repair micro-switches, replace rechargeable fob cells, and supply new fobs.",
    "Key fob battery replacement, RF testing, and fob repair in Chesterfield. Call 07753 891461."
  ),
  "transponder-key-chesterfield": buildKeyVariationPage(
    "transponder-key-chesterfield",
    "Transponder Key Cutting & Coding Chesterfield",
    "Immobiliser Chip Coding",
    "Precision transponder chip programming and cloning for cars, vans, and commercial vehicles in Chesterfield.",
    "Mobile transponder key cutting and immobiliser chip programming in Chesterfield & Derbyshire."
  ),
  "immobiliser-key-chesterfield": buildKeyVariationPage(
    "immobiliser-key-chesterfield",
    "Immobiliser Key Programming Chesterfield",
    "Immobiliser Specialists",
    "Car won't start with immobiliser light flashing? We diagnose key transponders, aerial coils, and program replacement immobiliser keys on-site.",
    "Mobile immobiliser key programming and fault finding in Chesterfield. Call 07753 891461."
  ),
  "car-key-locksmith-chesterfield": buildKeyVariationPage(
    "car-key-locksmith-chesterfield",
    "Car Key Locksmith Chesterfield",
    "Auto Locksmith Service",
    "Dedicated mobile car key locksmith in Chesterfield. Non-destructive vehicle unlocking, key cutting, and dealer-level immobiliser programming.",
    "Mobile car key locksmith in Chesterfield & Derbyshire. Locked out or lost keys? Call 07753 891461."
  ),

  // Town Location Pages
  "car-key-replacement-dronfield": buildTownKeyPage("car-key-replacement-dronfield", "Dronfield", "6 miles", "S18", "/assets/key-replacement-dronfield.jpg"),
  "car-key-replacement-sheffield": buildTownKeyPage("car-key-replacement-sheffield", "Sheffield", "12 miles", "S1–S17, S20", "/assets/key-replacement-sheffield.jpg"),
  "car-key-replacement-matlock": buildTownKeyPage("car-key-replacement-matlock", "Matlock", "11 miles", "DE4", "/assets/key-replacement-matlock.jpg"),
  "car-key-replacement-bolsover": buildTownKeyPage("car-key-replacement-bolsover", "Bolsover", "6 miles", "S44", "/assets/key-replacement-bolsover.jpg"),
  "car-key-replacement-staveley": buildTownKeyPage("car-key-replacement-staveley", "Staveley", "5 miles", "S43"),
  "car-key-replacement-clay-cross": buildTownKeyPage("car-key-replacement-clay-cross", "Clay Cross", "5 miles", "S45"),
  "car-key-replacement-eckington": buildTownKeyPage("car-key-replacement-eckington", "Eckington", "7 miles", "S21"),
  "car-key-replacement-bakewell": buildTownKeyPage("car-key-replacement-bakewell", "Bakewell", "13 miles", "DE45"),
  "car-key-replacement-buxton": buildTownKeyPage("car-key-replacement-buxton", "Buxton", "24 miles", "SK17"),
  "car-key-replacement-alfreton": buildTownKeyPage("car-key-replacement-alfreton", "Alfreton", "11 miles", "DE55"),
};
