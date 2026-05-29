/**
 * Uploads an image to Cloudinary and returns the secure URL.
 * @param {File} file
 * @param {string} folder - Unused (kept for API compatibility with existing callers)
 */
export async function uploadImage(file, folder = "services") {
  if (!file) {
    console.error("[uploadImage] No file provided");
    return null;
  }

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error(
      "Cloudinary is not configured. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET."
    );
  }

  try {
    console.log("[uploadImage] starting", {
      name: file?.name,
      type: file?.type,
      size: file?.size,
      folder,
      cloudName,
    });

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("[uploadImage] Cloudinary error response:", data);
      throw new Error(data?.error?.message || "Image upload failed");
    }

    const secureUrl = data.secure_url;
    if (!secureUrl) {
      throw new Error("Cloudinary did not return a secure_url");
    }

    console.log("[uploadImage] uploaded", {
      public_id: data.public_id,
      secure_url: secureUrl,
    });

    return secureUrl;
  } catch (error) {
    console.error("[uploadImage] Error uploading image:", error);
    throw error;
  }
}
