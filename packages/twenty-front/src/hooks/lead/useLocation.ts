import { useEffect, useState } from 'react';
import { ISelectOption } from '../../utils/types/index';

const locationData = [
  {
    display_name: 'Panama',
    country: 'Panama',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Croatia',
    country: 'Croatia',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Djibouti',
    country: 'Djibouti',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Saint Kitts and Nevis',
    country: 'Saint Kitts and Nevis',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'France, Polynésie française (eaux territoriales)',
    country: 'France, Polynésie française (eaux territoriales)',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Namibia',
    country: 'Namibia',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Falkland Islands',
    country: 'Falkland Islands',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Myanmar',
    country: 'Myanmar',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Dominican Republic',
    country: 'Dominican Republic',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Malaysia',
    country: 'Malaysia',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Vanuatu',
    country: 'Vanuatu',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Indonesia',
    country: 'Indonesia',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Montserrat',
    country: 'Montserrat',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Albania',
    country: 'Albania',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Armenia',
    country: 'Armenia',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Congo-Brazzaville',
    country: 'Congo-Brazzaville',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Samoa',
    country: 'Samoa',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Ukraine',
    country: 'Ukraine',
    weight: 10,
    relations: [],
  },
  {
    display_name:
      'France, Terres australes et antarctiques françaises, Îles Kerguelen (eaux territoriales)',
    country:
      'France, Terres australes et antarctiques françaises, Îles Kerguelen (eaux territoriales)',
    weight: 10,
    relations: [],
  },
  {
    display_name: 'Seychelles',
    country: 'Seychelles',
    weight: 10,
    relations: [],
  },
];

export const useLocation = (query = '') => {
  const [locationOption, setLocationOption] = useState<ISelectOption[]>([]);

  const handleGetLocations = (q: string | null): void => {
    const filteredLocations = q
      ? locationData.filter((item) =>
          item.display_name.toLowerCase().includes(q.toLowerCase()),
        )
      : locationData;

    setLocationOption(
      filteredLocations.map((item) => ({
        value: item.country,
        label: item.display_name,
      })),
    );
  };

  useEffect(() => {
    handleGetLocations(null); // Initial load
  }, []);

  useEffect(() => {
    handleGetLocations(query); // Re-run when query changes
  }, [query]);

  return { locationOption };
};
