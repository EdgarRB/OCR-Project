import { useQuery, useQueryClient } from "@tanstack/react-query";
import FetchFunction from "./Fetch";

type ScrapeResponse = {
  text: string;
};

const useScrapeTextApi = (url: string) => {
  const queryClient = useQueryClient();

  const query = useQuery<ScrapeResponse>({
    queryKey: ["scrape-text", url],
    queryFn: () => FetchFunction("http://localhost:3001/scrape", { url }),
    enabled: false,
    staleTime: 1000 * 60 * 30, // 30 minutos de cache
  });

  const fetchManual = async () => {
    // Como no es un usequery al uso revisamos si hay cache
    const cached = queryClient.getQueryData<ScrapeResponse>([
      "scrape-text",
      url,
    ]);

    if (cached) {
      return cached; // devuelve cache instantáneo
    }

    // Si no hay cache, ejecutamos fetch
    const result = await query.refetch();
    return result.data;
  };

  return { ...query, fetchManual };
};

export default useScrapeTextApi;
