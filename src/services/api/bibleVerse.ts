export const getVerses = async (verses: string) => {
  try {
    const response = await fetch(
      `https://iglesiadecristo.ictalca.cl/generar_texto?texto=${verses}`,
      {
        method: 'GET',
      }
    );
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
  }
};
