export function getTenantFromURL() {
  const url = new URL(window.location.href);
  return url.searchParams.get("setor") || "analista";
}
