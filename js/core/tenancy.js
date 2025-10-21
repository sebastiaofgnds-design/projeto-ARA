export function getTenantFromPath() {
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);
  return parts[0] || null;
}
