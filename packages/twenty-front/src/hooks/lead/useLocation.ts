import { useEffect, useState } from "react";

import { leadApi } from "../../api/leads";
import { ISelectOption } from "../../utils/types/index";
import { ILocation } from "../../utils/types/leads";

export const useLocation = (query: any) => {
  const [locationOption, setLocationOption] = useState<ISelectOption[]>([]);

  const handleGetLocations = async (q: any = null): Promise<void> => {
    try {
      const res = (await leadApi.getLocation(q)) as unknown as ILocation[];
  
      // Validate and process the response
      if (Array.isArray(res)) {
        setLocationOption(
          res.map((item) => ({
            value: item.country,
            label: item.display_name,
          }))
        );
      } else {
        console.error("Unexpected API response:", {
          query: q,
          response: res,
        });
      }
    } catch (error) {
      console.error("Error fetching locations:", {
        query: q,
        error: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : undefined,
      });
    }
  };

  useEffect(() => {
    handleGetLocations(null);
  }, []);

  useEffect(() => {
    if (query) {
      handleGetLocations(query);
    } else {
      handleGetLocations(null);
    }
  }, [query]);

  return { locationOption };
};
