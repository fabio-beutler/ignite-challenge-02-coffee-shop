import { useEffect, useState } from 'react';

interface Address {
  city: string;
  postcode: string;
  state: string;
  country: string;
  country_code: string;
}

async function getCity(latitude: number, longitude: number) {
  const locationIQResponse = await fetch(
    `${'https://us1.locationiq.com'}/v1/reverse.php?key=${'pk.742766c8852dac61bcd72d50fc9a19db'}&lat=${latitude}&lon=${longitude}&format=json`
  ).then((res) => res.json());

  const {
    address: { postcode, country, country_code },
  } = locationIQResponse;

  const brasilApiResponse = await fetch(
    `https://brasilapi.com.br/api/cep/v2/${postcode}`
  ).then((res) => res.json());

  const { city, state } = brasilApiResponse;

  return { city, postcode, state, country, country_code };
}

export function useLocation() {
  const [value, setValue] = useState<Address | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function getLocation() {
    try {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getCity(position.coords.latitude, position.coords.longitude).then(
            (res) => {
              setValue(res);
            }
          );
        },
        () => {
          setError('Unable to retrieve your location');
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } catch {
      setError('Unable to retrieve your location');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return { address: value, error, loading };
}
