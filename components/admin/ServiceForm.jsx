"use client";

import { useState, useEffect } from "react";
import { uploadImage } from "@/lib/upload";
import { getServiceBySlug } from "@/lib/services";
import {
  emptyFeature,
  emptyPricingPlan,
  featuresToFormState,
  pricingPlansToFormState,
  sanitizeFeaturesForSave,
  sanitizePricingPlansForSave,
} from "@/lib/service-data";
import Button from "@/components/ui/button";

export default function ServiceForm({
  initialData = null,
  onSubmit,
  onCancel,
  isLoading = false,
}) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    image: "",
    features: [emptyFeature()],
    pricingPlans: [emptyPricingPlan()],
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        slug: initialData.slug || "",
        description: initialData.description || "",
        image: initialData.image || "",
        features: featuresToFormState(initialData.features),
        pricingPlans: pricingPlansToFormState(initialData.pricingPlans),
      });
      setImagePreview(initialData.image || "");
      setImageFile(null);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (index, field, value) => {
    const next = [...formData.features];
    next[index] = { ...next[index], [field]: value };
    setFormData((prev) => ({ ...prev, features: next }));
  };

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, emptyFeature()],
    }));
  };

  const removeFeature = (index) => {
    const next = formData.features.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      features: next.length ? next : [emptyFeature()],
    }));
  };

  const handlePlanChange = (index, field, value) => {
    const next = [...formData.pricingPlans];
    next[index] = { ...next[index], [field]: value };
    setFormData((prev) => ({ ...prev, pricingPlans: next }));
  };

  const handlePlanFeatureChange = (planIndex, featureIndex, value) => {
    const next = [...formData.pricingPlans];
    const planFeatures = [...next[planIndex].features];
    planFeatures[featureIndex] = value;
    next[planIndex] = { ...next[planIndex], features: planFeatures };
    setFormData((prev) => ({ ...prev, pricingPlans: next }));
  };

  const addPlanFeature = (planIndex) => {
    const next = [...formData.pricingPlans];
    next[planIndex] = {
      ...next[planIndex],
      features: [...next[planIndex].features, ""],
    };
    setFormData((prev) => ({ ...prev, pricingPlans: next }));
  };

  const removePlanFeature = (planIndex, featureIndex) => {
    const next = [...formData.pricingPlans];
    const planFeatures = next[planIndex].features.filter((_, i) => i !== featureIndex);
    next[planIndex] = {
      ...next[planIndex],
      features: planFeatures.length ? planFeatures : [""],
    };
    setFormData((prev) => ({ ...prev, pricingPlans: next }));
  };

  const addPricingPlan = () => {
    setFormData((prev) => ({
      ...prev,
      pricingPlans: [...prev.pricingPlans, emptyPricingPlan()],
    }));
  };

  const removePricingPlan = (index) => {
    const next = formData.pricingPlans.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      pricingPlans: next.length ? next : [emptyPricingPlan()],
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = (formData.title || "").trim();
    const slug = (formData.slug || "").trim();
    const description = (formData.description || "").trim();
    const hasImage = !!(formData.image || imageFile);

    if (!title || !slug || !description || !hasImage) {
      alert("Please fill all required fields (title, slug, description, image).");
      return;
    }

    try {
      const existing = await getServiceBySlug(slug);
      if (existing && existing.id !== initialData?.id) {
        alert("Slug already exists. Please choose a unique slug.");
        return;
      }
    } catch {
      // continue
    }

    let imageUrl = formData.image;

    if (imageFile) {
      try {
        imageUrl = await uploadImage(imageFile);
      } catch {
        alert("Failed to upload image");
        return;
      }
    }

    await onSubmit({
      ...formData,
      title,
      slug,
      description,
      image: imageUrl,
      features: sanitizeFeaturesForSave(formData.features),
      pricingPlans: sanitizePricingPlansForSave(formData.pricingPlans),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-strong">Service Title *</label>
          <input
            required
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input w-full"
            placeholder="e.g. Web Development"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-strong">Slug *</label>
          <input
            required
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="input w-full"
            placeholder="e.g. web-development"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-strong">Description *</label>
        <textarea
          required
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="input w-full"
          placeholder="Service description..."
        />
      </div>

      <div className="space-y-4">
        <label className="text-sm font-semibold text-strong">Service Image *</label>
        <div className="flex items-center gap-6">
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg border border-[var(--border)]"
            />
          )}
          <input
            required={!formData.image}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm text-muted file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500/10 file:text-orange-600 hover:file:bg-orange-500/20"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-[var(--border)] pb-2">
          <h4 className="font-bold text-strong">Features</h4>
          <button
            type="button"
            onClick={addFeature}
            className="text-sm text-orange-500 hover:underline font-medium"
          >
            + Add Feature
          </button>
        </div>
        <div className="space-y-4">
          {formData.features.map((feature, idx) => (
            <div
              key={idx}
              className="glass p-4 rounded-xl space-y-3 border border-[var(--border)]"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-muted uppercase">
                  Feature {idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeFeature(idx)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
              <input
                type="text"
                value={feature.title}
                onChange={(e) => handleFeatureChange(idx, "title", e.target.value)}
                className="input w-full"
                placeholder="Feature title *"
              />
              <textarea
                value={feature.description}
                onChange={(e) =>
                  handleFeatureChange(idx, "description", e.target.value)
                }
                className="input w-full"
                rows="2"
                placeholder="Feature description"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-[var(--border)] pb-2">
          <h4 className="font-bold text-strong">Pricing Plans</h4>
          <button
            type="button"
            onClick={addPricingPlan}
            className="text-sm text-orange-500 hover:underline font-medium"
          >
            + Add Plan
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formData.pricingPlans.map((plan, planIdx) => (
            <div
              key={planIdx}
              className="glass p-4 rounded-xl space-y-3 border border-[var(--border)]"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-muted uppercase">
                  Plan {planIdx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removePricingPlan(planIdx)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
              <input
                type="text"
                value={plan.name}
                onChange={(e) => handlePlanChange(planIdx, "name", e.target.value)}
                className="input w-full"
                placeholder="Plan name (e.g. Starter)"
              />
              <input
                type="text"
                value={plan.price}
                onChange={(e) => handlePlanChange(planIdx, "price", e.target.value)}
                className="input w-full"
                placeholder="Price (e.g. $99)"
              />
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted">Plan features</p>
                {plan.features.map((f, fIdx) => (
                  <div key={fIdx} className="flex gap-2">
                    <input
                      type="text"
                      value={f}
                      onChange={(e) =>
                        handlePlanFeatureChange(planIdx, fIdx, e.target.value)
                      }
                      className="input flex-1 text-sm"
                      placeholder="Plan feature..."
                    />
                    <button
                      type="button"
                      onClick={() => removePlanFeature(planIdx, fIdx)}
                      className="text-red-500 px-2"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addPlanFeature(planIdx)}
                  className="text-xs text-orange-500 hover:underline"
                >
                  + Add plan feature
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : initialData ? "Update Service" : "Create Service"}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
