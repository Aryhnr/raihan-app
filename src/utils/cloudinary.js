/**
 * Optimasi URL gambar Cloudinary
 * @param {string} url - URL cloudinary original
 * @param {number} width - lebar target (default 700)
 * @returns {string} URL yang sudah dioptimasi
 */
export const getOptimizedImage = (url, width = 700) => {
  if (!url || !url.includes("cloudinary.com")) return url;

  return url.replace(
    "/image/upload/",
    `/image/upload/w_${width},f_auto,q_auto/`,
  );
};
