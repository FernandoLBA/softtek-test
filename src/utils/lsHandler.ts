export function setDataOnLs(key: string, data: unknown) {
  try {
    {
      if (!data) return;
    
      localStorage.setItem(key, JSON.stringify(data));
    }
  } catch (error) {
    console.log(error);
  }
}

export function getDataFromLs(key: string) {
  try {
    if (!key) return;
  
    const data: string = localStorage.getItem(key) ?? "";
    const json = JSON.parse(data);
  
    return json;
  } catch (error) {
    console.log(error);
  }
}
