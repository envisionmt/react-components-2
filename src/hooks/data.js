import { useQuery, useInfiniteQuery } from 'react-query';
import { envisionClient } from '@envision/utils';

export function useUser() {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery(
    'user',
    async () => {
      const result = await envisionClient.get('/me');
      return result.data;
    },
    { enabled: isAuthed }
  );
}

export function useAccount() {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery(
    'account',
    async () => {
      const result = await envisionClient.get('/v2/account');
      return result.data;
    },
    { enabled: isAuthed }
  );
}

export function useAllArtists(queryParams = {}) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery('artists', async () => {
    const result = await envisionClient.get('/v2/artists', queryParams, !isAuthed);
    return result.data;
  });
}

export function useAllArtistsInfinite(queryKey, queryParams = {}, limit = 24) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useInfiniteQuery(
    queryKey,
    async ({ pageParam = { limit, offset: 0 } }) => {
      const result = await envisionClient.get('/v2/artists', { ...queryParams, ...pageParam }, !isAuthed);
      return result.data;
    },
    {
      getNextPageParam: (page) => (page.nextOffset < page.total ? { limit, offset: page.nextOffset } : false),
    }
  );
}

export function useSingleArtist(id) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery(['artists', id], async () => {
    const result = await envisionClient.get(`/v2/artists/${id}`, null, !isAuthed);
    return result.data;
  });
}

export function useAllArtwork(queryParams = {}) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery('artwork', async () => {
    const result = await envisionClient.get('/v2/artwork', queryParams, !isAuthed);
    return result.data;
  });
}

export function useAllArtworkInfinite(queryKey, queryParams = {}, limit = 12) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useInfiniteQuery(
    queryKey,
    async ({ pageParam = { limit, offset: 0 } }) => {
      const result = await envisionClient.get('/v2/artwork', { ...queryParams, ...pageParam }, !isAuthed);
      return result.data;
    },
    {
      getNextPageParam: (page) => (page.nextOffset < page.total ? { limit, offset: page.nextOffset } : false),
    }
  );
}

export function useSingleArtwork(id) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery(['artwork', id], async () => {
    const result = await envisionClient.get(`/v2/artwork/${id}`, null, !isAuthed);
    return result.data;
  });
}

export function useTokens(id) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery(
    ['artwork', id, 'tokens'],
    async () => {
      const result = await envisionClient.get(`/v2/artwork/${id}/tokens`, null);
      return result.data;
    },
    { enabled: isAuthed }
  );
}

export function useAllCategories() {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery('categories', async () => {
    const result = await envisionClient.get('/categories', null, !isAuthed);
    return result.data;
  });
}

export function useManyCollections(queryKey, subpath = '', limit = 100) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery(
    queryKey,
    async () => {
      const result = await envisionClient.get(`/v2/collections${subpath}`, { limit }, !isAuthed);
      return result.data;
    },
    { enabled: isAuthed }
  );
}

export function useSingleCollectionInfinite(id, queryParams = {}, limit = 12) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useInfiniteQuery(
    ['collections', id],
    async ({ pageParam = { limit, offset: 0 } }) => {
      const result = await envisionClient.get(`/v2/collections/${id}`, { ...queryParams, ...pageParam }, !isAuthed);
      return result.data;
    },
    {
      getNextPageParam: (page) => (page.nextOffset < page.total ? { limit, offset: page.nextOffset } : false),
    }
  );
}

export function useSingleCollection(id, queryParams = {}) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery(
    ['collections', id],
    async () => {
      const result = await envisionClient.get(`/v2/collections/${id}`, { ...queryParams }, !isAuthed);
      return result.data;
    },
    {
      enabled: !!id,
    }
  );
}

export function useFavoritesCollection() {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery(
    ['collections', 'favorites'],
    async () => {
      const result = await envisionClient.get(`/v2/collections/favorites`, null, !isAuthed);
      return result.data;
    },
    {
      staleTime: 10000,
      enabled: isAuthed,
    }
  );
}

export function useAllDevices(queryParams = {}) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery('devices', async () => {
    const result = await envisionClient.get('/v2/devices', queryParams, !isAuthed);
    return result.data;
  });
}

export function useAllDevicesInfinite(queryKey, queryParams = {}, limit = 12) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useInfiniteQuery(
    queryKey,
    async ({ pageParam = { limit, offset: 0 } }) => {
      const result = await envisionClient.get('/v2/devices', { ...queryParams, ...pageParam }, !isAuthed);
      return result.data;
    },
    {
      getNextPageParam: (page) => (page.nextOffset < page.total ? { limit, offset: page.nextOffset } : false),
    }
  );
}

export function useSingleDevice(id) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery(
    ['devices', id],
    async () => {
      const result = await envisionClient.get(`/v2/devices/${id}`, null, !isAuthed);
      return result.data;
    },
    {
      enabled: isAuthed && !!id,
    }
  );
}

export function useAllWallets() {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery(
    'wallets',
    async () => {
      const result = await envisionClient.get('/v2/wallets', null, !isAuthed);
      return result.data;
    },
    {
      enabled: isAuthed,
    }
  );
}

export function useWalletPreview(address) {
  const isAuthed = !!envisionClient.getCredentials().accessToken;
  return useQuery(
    ['wallets', 'preview', address],
    async () => {
      const result = await envisionClient.get(`/v2/wallets/${address}/preview`, null, !isAuthed, 60000);
      return result.data;
    },
    {
      enabled: isAuthed && !!address,
    }
  );
}

export function useSetupToken(token, email) {
  return useQuery(['account', 'setup'], async () => {
    const result = await envisionClient.get('/v2/setupToken', { token, email }, true);
    return result.data;
  });
}

export function useSubscriptionPricing() {
  return useQuery(['subscriptions', 'pricing'], async () => {
    const result = await envisionClient.get('/v2/billing/subscriptions/pricing', null, true);
    return result.data;
  });
}

export function useSubscriptionPrices() {
  return useQuery('subscriptions', async () => {
    const result = await envisionClient.get(`/ecommerce/products`, null, true);
    return result.data;
  });
}

export function useDigitalCanvasData() {
  return useQuery('digitalCanvas', async () => {
    const result = await envisionClient.get(`/ecommerce/digitalcanvas`, null, true);
    return result.data;
  });
}
