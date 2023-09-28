export interface Weather {
  list: [
    {
      main: {
        temp: number;
        temp_min: number;
        temp_max: number;
      };
      weather: [
        {
          main: string;
          description: string;
        }
      ];
      dt_txt: number;
    }
  ];
  city: {
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
  };
}
