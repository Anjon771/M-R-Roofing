/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { RoofCalculator } from './components/RoofCalculator';
import { Services } from './components/Services';
import { ProcessAndTrust } from './components/ProcessAndTrust';
import { ProjectGallery } from './components/ProjectGallery';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EstimateModal } from './components/EstimateModal';
import { EmergencyBanner } from './components/EmergencyBanner';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [isStormAlertOpen, setIsStormAlertOpen] = useState(false);
  const [presetScope, setPresetScope] = useState('');
  const [selectedService, setSelectedService] = useState('Residential Replacement');

  const handleOpenBooking = () => {
    setIsEstimateModalOpen(true);
  };

  const handleSelectEstimateFromCalculator = (summary: string) => {
    setPresetScope(summary);
    // Smooth scroll to contact section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromBento = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenStormAlert={() => setIsStormAlertOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Architectural Image & Proof Strip */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Interactive Before & After Restoration Slider */}
        <BeforeAfterSlider />

        {/* Interactive Roof Cost Calculator & Material Configurator */}
        <RoofCalculator onSelectEstimate={handleSelectEstimateFromCalculator} />

        {/* Asymmetric Bento Grid Services */}
        <Services onSelectService={handleSelectServiceFromBento} />

        {/* 4-Step Process & Triple Barrier Anatomy */}
        <ProcessAndTrust />

        {/* Filterable Project Gallery & Case Studies */}
        <ProjectGallery />

        {/* Verified Customer Reviews & Social Proof */}
        <Reviews />

        {/* Frequently Asked Questions Accordion */}
        <FAQ />

        {/* On-Page Lead Capture & Free 21-Point Inspection Booking */}
        <ContactSection
          initialNotes={presetScope}
          initialService={selectedService}
        />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Quick Interactive Modals */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        presetScope={presetScope}
      />

      <EmergencyBanner
        isOpen={isStormAlertOpen}
        onClose={() => setIsStormAlertOpen(false)}
        onBookEmergency={() => {
          setSelectedService('Emergency Active Leak Repair');
          const contactElem = document.getElementById('contact');
          if (contactElem) {
            contactElem.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </div>
  );
}
