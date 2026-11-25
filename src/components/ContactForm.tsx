"use client";

import { useState } from "react";
import { CheckCircle2, Send, Phone } from "lucide-react";

export default function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    registration: "",
    postcode: "",
    service: defaultService,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Enquiry Received
        </h3>
        <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
          Thank you, {formData.name || "customer"}. Our mobile auto electrician will review your vehicle details and get back to you shortly. For urgent callouts, please call directly.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="tel:07753891461"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-[#0066d6] hover:bg-[#0052b0]"
          >
            <Phone className="w-4 h-4" />
            Call 07753 891461
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="px-5 py-2.5 rounded-lg font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:bg-slate-50"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Smith"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066d6] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="07700 900000"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066d6] focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066d6] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
            Postcode / Location *
          </label>
          <input
            type="text"
            required
            value={formData.postcode}
            onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
            placeholder="S40 1AA"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066d6] focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
            Vehicle Make & Model *
          </label>
          <input
            type="text"
            required
            value={formData.vehicle}
            onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
            placeholder="e.g. 2019 Ford Transit Custom"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066d6] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
            Registration Plate
          </label>
          <input
            type="text"
            value={formData.registration}
            onChange={(e) => setFormData({ ...formData, registration: e.target.value.toUpperCase() })}
            placeholder="AB19 CDE"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 uppercase focus:outline-none focus:ring-2 focus:ring-[#0066d6] focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
          Service Required *
        </label>
        <select
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#0066d6] focus:border-transparent"
        >
          <option value="">Select a service...</option>
          <option value="Replacement Car Key / Fob">Replacement Car Key / Fob</option>
          <option value="Vehicle Diagnostics">Vehicle Diagnostics & Fault Finding</option>
          <option value="Electrical Repairs">Auto Electrical Repairs & Wiring</option>
          <option value="Ghost 2 Immobiliser">Ghost 2 Immobiliser Installation</option>
          <option value="ECU Remapping">Mobile ECU Remapping</option>
          <option value="Battery Replacement & Coding">Battery Replacement & Coding</option>
          <option value="Fleet / Commercial Electrics">Fleet & Commercial Electrics</option>
          <option value="OEM Upgrades / Dash Cam / Towbar">OEM Upgrades / Dash Cam / Towbar</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
          Fault Description / Details
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe any warning lights, symptoms, or what you need..."
          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066d6] focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm text-white bg-[#0066d6] hover:bg-[#0052b0] shadow-md transition-all"
      >
        <Send className="w-4 h-4" />
        Submit Enquiry
      </button>
    </form>
  );
}
