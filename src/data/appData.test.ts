import { describe, expect, it } from 'vitest';
import { contactData, gmailComposeUrl } from './contactData';
import { expertProfiles } from './expertData';
import { faqChatbotData } from './faqChatbotData';
import { automobileParts, shopListings, usedCars } from './shopData';
import { recoveryTrucks, rentalListings, rideHomeVehicles } from './rentalData';
import { servicesData } from './servicesData';

describe('application data', () => {
  it('keeps service records complete and uniquely identified', () => {
    const serviceIds = servicesData.map((service) => service.id);

    expect(serviceIds.length).toBeGreaterThan(0);
    expect(new Set(serviceIds).size).toBe(serviceIds.length);
    expect(servicesData.every((service) => service.options.length > 0)).toBe(true);
    expect(servicesData.every((service) => service.options.every((option) => option.price > 0))).toBe(true);
  });

  it('keeps package IDs unique within each service', () => {
    servicesData.forEach((service) => {
      const optionIds = service.options.map((option) => option.id);

      expect(new Set(optionIds).size).toBe(optionIds.length);
    });
  });

  it('keeps chatbot FAQ records complete and uniquely identified', () => {
    const faqIds = faqChatbotData.map((faq) => faq.id);

    expect(new Set(faqIds).size).toBe(faqIds.length);
    expect(faqChatbotData.every((faq) => faq.question && faq.answer && faq.keywords.length > 0)).toBe(true);
    expect(faqChatbotData.find((faq) => faq.question.includes('book a service'))?.answer).toContain(contactData.phone);
  });

  it('creates a valid Gmail inquiry link from canonical contact data', () => {
    const url = new URL(gmailComposeUrl('Service inquiry', 'Hello FixMyRide'));

    expect(url.hostname).toBe('mail.google.com');
    expect(url.searchParams.get('to')).toBe(contactData.email);
    expect(url.searchParams.get('su')).toBe('Service inquiry');
    expect(url.searchParams.get('body')).toBe('Hello FixMyRide');
  });

  it('keeps WhatsApp contact data in the format required by wa.me', () => {
    expect(contactData.whatsappNumber).toMatch(/^\d+$/);
    expect(contactData.whatsappNumber).toBe(contactData.phone.replace(/\D/g, ''));
  });

  it('keeps marketplace listings complete and uniquely identified', () => {
    const listingIds = shopListings.map((listing) => listing.id);

    expect(usedCars.length).toBeGreaterThan(0);
    expect(automobileParts).toHaveLength(20);
    expect(new Set(listingIds).size).toBe(listingIds.length);
    expect(shopListings.every((listing) => listing.images.length > 0 && listing.price > 0 && listing.description.length > 0)).toBe(true);
  });

  it('keeps part conditions limited to the supported marketplace values', () => {
    expect(automobileParts.every((part) => part.condition === 'New' || part.condition === 'Used')).toBe(true);
    expect(automobileParts.every((part) => part.compatibility.length > 0)).toBe(true);
  });

  it('keeps the expert directory complete and uniquely identified', () => {
    const expertIds = expertProfiles.map((expert) => expert.id);

    expect(expertProfiles).toHaveLength(30);
    expect(new Set(expertIds).size).toBe(expertIds.length);
    expect(expertProfiles.every((expert) => expert.name && expert.role && expert.specialty && expert.experience && expert.certifications.length > 0 && expert.performance.completedJobs > 0 && expert.performance.responseTime && expert.performance.repeatCustomerRate)).toBe(true);
  });

  it('keeps recovery and ride-home options retrievable and complete', () => {
    const rentalIds = rentalListings.map((listing) => listing.id);

    expect(recoveryTrucks.length).toBeGreaterThan(0);
    expect(rideHomeVehicles.length).toBeGreaterThan(0);
    expect(new Set(rentalIds).size).toBe(rentalIds.length);
    expect(recoveryTrucks.every((truck) => truck.capacity && truck.bedDimensions && truck.suitableFor.length > 0)).toBe(true);
    expect(rideHomeVehicles.every((ride) => ride.seats > 0 && ride.luggageCapacity && ride.suitableFor.length > 0)).toBe(true);
    expect(rentalListings.every((listing) => listing.pricePerTrip > 0 && listing.images.length > 0 && listing.serviceArea)).toBe(true);
  });
});