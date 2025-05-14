export const useApi = (locale: string) => {
  // const config = useRuntimeConfig();

  const fetchPageData = async () => {
    // console.log(config);
    const endpoint = locale === 'de' ? 'bio-digestin-de' : 'bio-digestin';
    try {
      // https://backend.artroshield.de/api/v1
      const response = await fetch(`https://backend.artroshield.de/api/v1/pages/${endpoint}`);

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching page data:', error);
      return null;
    }
  };

  return {
    fetchPageData,
  };
};
