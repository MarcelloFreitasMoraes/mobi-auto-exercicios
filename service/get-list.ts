export const fetchData = async (url: string, characterIds?: string) => {
  try {
    const response = await fetch(`${url}/${characterIds}`);   
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return null;
  }
};
