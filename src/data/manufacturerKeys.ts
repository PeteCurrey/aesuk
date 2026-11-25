import type { ManufacturerKeyData } from "@/components/ManufacturerKeyTemplate";

export const manufacturerKeyPages: Record<string, ManufacturerKeyData> = {
  "ford-key-replacement-chesterfield": {
    manufacturer: "Ford",
    slug: "ford-key-replacement-chesterfield",
    description:
      "Fast mobile Ford key replacement, spare key cutting, and PATS immobiliser programming in Chesterfield & Derbyshire. We carry stock for Fiesta, Focus, Kuga, Puma, and Ford Transit vans.",
    metaDescription:
      "Ford key replacement & programming in Chesterfield. Mobile service for Ford Transit, Fiesta, Focus & Kuga keys and keyless fobs. Call 07753 891461.",
    models: [
      "Ford Transit & Transit Custom",
      "Ford Fiesta (MK6, MK7, MK8)",
      "Ford Focus (MK2, MK3, MK4)",
      "Ford Kuga & Puma",
      "Ford Ranger & Mondeo",
      "Ford EcoSport & S-Max",
    ],
    keyTypes: [
      "3-Button Remote Flip Keys",
      "Ford Keyless Go / Smart Proximity Fobs",
      "Transit Rechargeable Blue Remote Keys",
      "HU101 High-Security Laser Cut Blades",
      "Standard Transponder Spare Keys",
    ],
    commonIssues: [
      "Transit rechargeable fob battery failure",
      "All keys lost on commercial vans",
      "Worn HU101 blade not turning ignition",
      "Keyless entry 'Key Not Detected' faults",
      "Blocked or corrupted PATS immobiliser data",
    ],
    faqs: [
      {
        question: "Can you replace a lost Ford Transit Custom key the same day?",
        answer:
          "Yes. We stock Ford Transit and Transit Custom keys on our mobile vans, allowing us to unlock the vehicle non-destructively, cut a new blade, and program the remote fob on-site the same day.",
      },
      {
        question: "Why does my Ford Transit blue key fob stop locking the van?",
        answer:
          "Older Transit blue remote keys use a soldered rechargeable battery that charges in the ignition barrel. Over time the battery cells degrade or solder joints crack. We can replace and reprogram a brand-new remote fob.",
      },
      {
        question: "Can you delete stolen Ford keys from my car's memory?",
        answer:
          "Yes. When programming new keys, we erase all missing or stolen keys from the vehicle's immobiliser module so old keys can no longer start the engine.",
      },
    ],
  },
  "volkswagen-key-replacement-chesterfield": {
    manufacturer: "Volkswagen",
    slug: "volkswagen-key-replacement-chesterfield",
    description:
      "Specialist mobile VW key replacement and VAG immobiliser programming across Chesterfield & Derbyshire. Covering Golf, Polo, Tiguan, Passat, Transporter T5/T6, and Caddy.",
    metaDescription:
      "Volkswagen key replacement Chesterfield. Mobile VW Golf, Polo, Tiguan & Transporter key cutting and programming. Call 07753 891461.",
    models: [
      "VW Golf (MK5, MK6, MK7, MK8)",
      "VW Polo & Up!",
      "VW Transporter T5, T6 & T6.1",
      "VW Caddy & Crafter",
      "VW Tiguan, T-Roc & Touareg",
      "VW Passat & Arteon",
    ],
    keyTypes: [
      "VAG MQB Smart & Flip Keys",
      "3-Button Remote Flip Keys",
      "VW KESSY Keyless Proximity Fobs",
      "HU66 & HU162T Laser Cut Blades",
      "Emergency Mechanical Insert Blades",
    ],
    commonIssues: [
      "All keys lost on MQB platform vehicles",
      "Broken flip-key hinge mechanisms",
      "Transporter T5/T6 worn ignition blades",
      "KESSY 'Key Not Found' dashboard warnings",
      "Water-damaged or crushed remote fobs",
    ],
    faqs: [
      {
        question: "Do I have to go to a VW main dealer for an MQB key?",
        answer:
          "No. We have specialist VAG diagnostic and immobiliser programming equipment that allows us to cut and code most Volkswagen keys—including MQB models—at your driveway without dealer wait times.",
      },
      {
        question: "Can you unlock my VW Transporter if the keys are locked inside?",
        answer:
          "Yes. We use specialist lock-picking tools for VW HU66 and HU162T locks to open your van without any damage to doors, seals, or glass.",
      },
      {
        question: "How long does VW key programming take?",
        answer:
          "Most spare or replacement Volkswagen keys take between 30 and 60 minutes on-site from arrival.",
      },
    ],
  },
  "bmw-key-replacement-chesterfield": {
    manufacturer: "BMW",
    slug: "bmw-key-replacement-chesterfield",
    description:
      "Mobile BMW key replacement, Comfort Access fob coding, and CAS/FEM/BDC immobiliser programming in Chesterfield & Derbyshire. Covering 1 Series, 3 Series, 5 Series, X1, X3, and X5.",
    metaDescription:
      "BMW key replacement Chesterfield. Mobile BMW Comfort Access & smart key programming for CAS, FEM & BDC systems. Call 07753 891461.",
    models: [
      "BMW 1 Series & 2 Series",
      "BMW 3 Series (E90, F30, G20)",
      "BMW 4 Series & 5 Series",
      "BMW X1, X3, X5 & X6",
      "BMW Z4 & MINI Cooper",
    ],
    keyTypes: [
      "BMW Comfort Access Smart Fobs",
      "F-Series & G-Series Proximity Keys",
      "E-Series Slot-In Smart Keys",
      "Diamond & Blade Remote Keys",
      "HU92 & HU100R Emergency Blades",
    ],
    commonIssues: [
      "Comfort Access door handle / antenna faults",
      "All keys lost requiring CAS/FEM/BDC coding",
      "Rechargeable E-series key battery failure",
      "Water-damaged fobs after washing",
      "Key no longer recognised in ignition slot",
    ],
    faqs: [
      {
        question: "Can you make a new BMW key if all keys are lost?",
        answer:
          "Yes. For CAS1–CAS4, FEM, and BDC immobiliser systems, we can read the required security data and program a brand-new BMW smart key on-site.",
      },
      {
        question: "Do you program BMW Comfort Access keyless entry fobs?",
        answer:
          "Yes, we supply and program full Comfort Access proximity keys so push-button start and keyless door unlocking work as original.",
      },
      {
        question: "Is it cheaper than a BMW main dealer?",
        answer:
          "Yes. Main dealers often charge higher rates and require your V5C plus a 7–14 day wait for a pre-ordered key. We come to you the same or next day.",
      },
    ],
  },
  "audi-key-replacement-chesterfield": {
    manufacturer: "Audi",
    slug: "audi-key-replacement-chesterfield",
    description:
      "Specialist Audi key replacement and Advanced Key programming across Chesterfield & Derbyshire. Mobile service for A1, A3, A4, A5, A6, Q3, Q5, and Q7.",
    metaDescription:
      "Audi key replacement Chesterfield. Mobile Audi A1, A3, A4, Q3 & Q5 key fob programming and emergency replacement. Call 07753 891461.",
    models: [
      "Audi A1, A3 & S3",
      "Audi A4, A5 & S4/S5",
      "Audi A6, A7 & A8",
      "Audi Q2, Q3, Q5 & Q7",
      "Audi TT & R8",
    ],
    keyTypes: [
      "Audi Advanced Key (Proximity Smart Fobs)",
      "Audi Slot-In Smart Keys (BCM2)",
      "MQB Flip & Smart Remote Keys",
      "HU66 & HU162T Laser Emergency Blades",
    ],
    commonIssues: [
      "All keys lost on Audi BCM2 or MQB platforms",
      "Faulty remote lock/unlock buttons",
      "Key not detected for push-button start",
      "Locked keys inside boot or cabin",
    ],
    faqs: [
      {
        question: "Can you replace an Audi A3 or A4 key without the original?",
        answer:
          "Yes. We can cut a new emergency blade and program a replacement Audi remote or smart key even when all keys are lost.",
      },
      {
        question: "Will a replacement Audi key include the emergency metal blade?",
        answer:
          "Yes, every Audi smart key we supply includes a precision laser-cut emergency blade so you can still unlock the driver's door if the fob battery runs flat.",
      },
    ],
  },
  "mercedes-key-replacement-chesterfield": {
    manufacturer: "Mercedes-Benz",
    slug: "mercedes-key-replacement-chesterfield",
    description:
      "Mobile Mercedes-Benz key replacement and FBS3/KEYLESS-GO smart key programming in Chesterfield & Derbyshire. Covering A-Class, C-Class, E-Class, Vito, and Sprinter.",
    metaDescription:
      "Mercedes key replacement Chesterfield. Mobile Mercedes A-Class, C-Class, E-Class, Vito & Sprinter key programming. Call 07753 891461.",
    models: [
      "Mercedes A-Class & B-Class",
      "Mercedes C-Class & CLA",
      "Mercedes E-Class & S-Class",
      "Mercedes GLA, GLC & GLE",
      "Mercedes Vito & Sprinter Vans",
    ],
    keyTypes: [
      "Mercedes Chrome Smart Keys (FBS3)",
      "KEYLESS-GO Proximity Fobs",
      "Sprinter & Vito EIS Remote Keys",
      "HU64 Emergency Metal Blades",
    ],
    commonIssues: [
      "EIS (Electronic Ignition Switch) not turning key",
      "All keys lost on Mercedes FBS3 systems",
      "Worn Sprinter/Vito key blades or fob casings",
      "KEYLESS-GO push-start not responding",
    ],
    faqs: [
      {
        question: "Can you diagnose a Mercedes key that won't turn in the ignition?",
        answer:
          "Yes. When a Mercedes key stops turning, it can be either a faulty infrared key or an EIS/ESL steering lock fault. We carry dealer-level Mercedes diagnostics to test both and supply a new key if needed.",
      },
      {
        question: "Do you cover Mercedes Sprinter and Vito commercial vans?",
        answer:
          "Yes, we provide same-day mobile key replacement for Sprinter and Vito vans across Chesterfield and Derbyshire.",
      },
    ],
  },
  "vauxhall-key-replacement-chesterfield": {
    manufacturer: "Vauxhall",
    slug: "vauxhall-key-replacement-chesterfield",
    description:
      "Fast mobile Vauxhall key replacement and programming in Chesterfield & Derbyshire. Covering Corsa, Astra, Mokka, Insignia, Crossland, and Vivaro vans.",
    metaDescription:
      "Vauxhall key replacement Chesterfield. Mobile Corsa, Astra, Mokka, Insignia & Vivaro key cutting and coding. Call 07753 891461.",
    models: [
      "Vauxhall Corsa (D, E, F)",
      "Vauxhall Astra (J, K, L)",
      "Vauxhall Mokka & Crossland",
      "Vauxhall Insignia & Grandland",
      "Vauxhall Vivaro, Combo & Movano",
    ],
    keyTypes: [
      "2-Button & 3-Button Flip Remote Keys",
      "Vauxhall PEPS Keyless Smart Fobs",
      "HU100 & HU136 Laser Cut Blades",
      "Commercial Van Remote Keys",
    ],
    commonIssues: [
      "Broken flip blade pin or split rubber buttons",
      "All keys lost without the Vauxhall Car Pass",
      "Immobiliser padlock warning light flashing",
      "Vivaro remote central locking failure",
    ],
    faqs: [
      {
        question: "Do I need my Vauxhall Car Pass security code?",
        answer:
          "No. Even if you don't have your Vauxhall Car Pass card, we can extract the 4-digit security PIN directly from the vehicle's body control module on-site.",
      },
      {
        question: "Can you repair or replace a Vauxhall Corsa key with torn buttons?",
        answer:
          "Yes. We can either refurbish/re-case a damaged fob or supply and program a brand-new flip key at your home or workplace.",
      },
    ],
  },
};
