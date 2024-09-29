export function setDataOnLs(key: string, data: unknown) {
  if (!data) return;

  localStorage.setItem(key, JSON.stringify(data));
}

export function getDataFromLs(key: string) {
  if (!key) return;

  const data = JSON.parse(localStorage.getItem(key) ?? "");

  return data;
}
