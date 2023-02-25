import { useMutation, useQueryClient } from 'react-query';
import { useNotifications } from 'reapop';
import { envisionClient } from '@envision/utils';

export function useAuthenticate() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.authenticate(params.values.email, params.values.password);
      return result;
    },
    {
      onSuccess: (data, params) => {
        queryClient.invalidateQueries('user');
        if (data?.accessToken) {
          params?.setLoading(false);
        }
      },
      onError: (error, params) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: 'Email and/or Password is incorrect!',
        });

        if (error?.message) {
          params?.setLoading(false);
        }
      },
    }
  );
}

export function useCreateUser() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.post('/users', params.values, true, 20000);
      return result;
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries('users');
        window.gtag('event', 'sign_up', {
          event_category: 'engagement',
          event_label: 'user_signup',
        });
        window.lintrk('track', { conversion_id: 6756020 });
        window.fbq('trackCustom', 'sign_up', {
          content_category: 'engagement',
          content_anme: 'user_signup',
        });
        notify({
          status: 'success',
          title: 'Account Created Successfully!',
          message: 'Logging in...',
        });
      },
      onError: (error, params) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: 'There was a problem creating a user.',
        });
        if (error?.message) {
          params?.setLoading(false);
        }
      },
    }
  );
}

export function useSetupUser() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.post(`/v2/setupToken/${params.token}`, params.values, true, 20000);
      return result;
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries('users');
        notify({
          status: 'success',
          title: 'Account Setup Successful!!',
          message: 'Logging in...',
        });
      },
      onError: (error, params) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: 'There was a problem setting up your account.',
        });
        if (error?.message) {
          params?.setLoading(false);
        }
      },
    }
  );
}

export function useAddFavorite() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.post('/v2/collections/favorites', { artworkId: params.id });
      return result;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['collections', 'favorites']);
        notify({ status: 'success', title: 'Artwork Added', message: 'Artwork has been added to your favorites.' });
      },
      onError: (e) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useRemoveFavorite() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.delete(`/v2/collections/favorites/${params.id}`);
      return result;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['collections', 'favorites']);
        notify({
          status: 'success',
          title: 'Artwork Removed',
          message: 'Artwork has been removed from your favorites.',
        });
      },
      onError: (e) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useCreateCollection() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.post('/v2/collections', params.params);
      return result;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('userCollections');
        notify({
          status: 'success',
          title: 'Collection Created',
          message: 'You have created a new collection.',
        });
      },
      onError: (e, params) => {
        if (params.setSubmitting) params.setSubmitting(false);
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useUpdateCollection() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.put(`/v2/collections/${params.id}`, params.params);
      return result;
    },
    {
      onSuccess: (data, params) => {
        queryClient.invalidateQueries('userCollections');
        queryClient.invalidateQueries(['collections', params.id]);
        notify({
          status: 'success',
          title: 'Collection Updated',
          message: 'Your collection has been updated.',
        });
      },
      onError: (e, params) => {
        if (params.setSubmitting) params.setSubmitting(false);
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useDeleteCollection() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.delete(`/v2/collections/${params.id}`);
      return result;
    },
    {
      onSuccess: (data, params) => {
        queryClient.invalidateQueries('userCollections');
        queryClient.invalidateQueries(['collections', params.id]);
        notify({
          status: 'success',
          title: 'Collection Deleted',
          message: 'Your collection has been deleted.',
        });
      },
      onError: (e, params) => {
        if (params.setSubmitting) params.setSubmitting(false);
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useSubmitDiscovery() {
  const { notify } = useNotifications();
  return useMutation(
    async (params) => {
      const result = await envisionClient.post(`/collections/${params.collectionId}`);
      return result.data;
    },
    {
      onSuccess: async () => {
        notify({
          status: 'success',
          title: 'Collection Submitted',
          message: 'Collection has been submitted for discovery.',
        });
      },
      onError: () => {
        notify({ status: 'error', title: 'Failed to Submit', message: 'Collection could not be submitted.' });
      },
    }
  );
}

export function useAddToCollection() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.post(`/v2/collections/${params.id}`, { artworkId: params.artworkId });
      return result;
    },
    {
      onSuccess: (data, params) => {
        queryClient.invalidateQueries(['collections', params.id]);
        notify({
          status: 'success',
          title: 'Artwork Added',
          message: 'Artwork has been added to this collection.',
        });
      },
      onError: (e) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useRemoveFromCollection() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.delete(`/v2/collections/${params.id}/${params.artworkId}`);
      return result;
    },
    {
      onSuccess: (data, params) => {
        queryClient.invalidateQueries(['collections', params.id]);
        queryClient.invalidateQueries(['collections', 'favorites']);
        notify({
          status: 'success',
          title: 'Artwork Removed',
          message: 'Artwork has been removed from this collection.',
        });
      },
      onError: (e) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useFollowCollection() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.post(`/v2/collections/${params.id}/followers`, { userId: params.userId });
      return result;
    },
    {
      onSuccess: (data, params) => {
        queryClient.invalidateQueries(['collections', params.id]);
        queryClient.invalidateQueries('followedCollections');
        notify({
          status: 'success',
          title: 'Following Collection',
          message: 'You are now following a collection.',
        });
      },
      onError: (e) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useUnfollowCollection() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.delete(`/v2/collections/${params.id}/followers/${params.userId}`);
      return result;
    },
    {
      onSuccess: (data, params) => {
        queryClient.invalidateQueries(['collections', params.id]);
        queryClient.invalidateQueries('followedCollections');
        notify({
          status: 'success',
          title: 'Unfollowed Collection',
          message: 'You are no longer following a collection.',
        });
      },
      onError: (e) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useDeleteArtwork() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.delete(`/v2/artwork/${params.id}`);
      return result;
    },
    {
      onSuccess: (data, params) => {
        queryClient.invalidateQueries(['collections', params.collectionId]);
        notify({
          status: 'success',
          title: 'Artwork Deleted',
          message: 'Your personal upload has been deleted.',
        });
      },
      onError: (e) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useAddDevice() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.post('/v2/devices', params.params);
      return result;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('devices');
        notify({
          status: 'success',
          title: 'Display Added',
          message: 'A new display has been added to your account.',
        });
      },
      onError: (e, params) => {
        if (params.setSubmitting) params.setSubmitting(false);
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useUpdateDevice() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.patch(`/v2/devices/${params.id}`, params.params);
      return result;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('devices');
        notify({
          status: 'success',
          title: 'Display Settings Updatd',
          message: 'The settings for this display have been updated.',
        });
      },
      onError: (e, params) => {
        if (params.setSubmitting) params.setSubmitting(false);
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useRemoveDevice() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.delete(`/v2/devices/${params.id}`);
      return result;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('devices');
        notify({
          status: 'success',
          title: 'Display Removed',
          message: 'A display has been removed from your account.',
        });
      },
      onError: (e) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function usePlayOnDevices() {
  const { notify } = useNotifications();
  return useMutation(
    async (params) => {
      const result = await envisionClient.post(`/users/${params.id}/devices/play`, params.params);
      return result;
    },
    {
      onSuccess: () => {
        notify({
          status: 'success',
          title: 'Playing on Displays',
          message: 'Artwork is now playing on your selected displays.',
        });
      },
      onError: () => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: 'There was a problem playing your artwork on the selected displays.',
        });
      },
    }
  );
}

export function useAddWallet() {
  const { notify } = useNotifications();
  return useMutation(
    async (params) => {
      const result = await envisionClient.post(`/v2/wallets`, params.params);
      return result;
    },
    {
      onSuccess: () => {
        window.gtag('event', 'wallet_pairing', {
          event_category: 'engagement',
          event_label: 'wallet_pairing',
        });
        notify({
          status: 'success',
          title: 'Wallet Added',
          message: 'A wallet has been added to your account.',
        });
      },
      onError: (e) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useRemoveWallet() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async (params) => {
      const result = await envisionClient.delete(`/v2/wallets/${params.id}`);
      return result;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('wallets');
        notify({
          status: 'success',
          title: 'Wallet Removed',
          message: 'Wallet and all associated NFTs have been removed from your account.',
        });
      },
      onError: (e) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useResyncWallets() {
  const { notify } = useNotifications();
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      const result = await envisionClient.post('/v2/wallets/resync');
      return result;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['wallets']);
        notify({ status: 'success', title: 'Wallet Resync Initiated', message: 'This may take some time.' });
      },
      onError: (e) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}

export function useAddPrivateArtwork() {
  const { notify } = useNotifications();
  return useMutation(
    async (params) => {
      const result = await envisionClient.post(`/v2/artwork/private`, params.params);
      return result;
    },
    {
      onSuccess: () => {
        notify({
          status: 'success',
          title: 'Personal Upload Saved',
          message: 'Your upload will be available shortly.',
        });
      },
      onError: (e) => {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: e.response?.data?.message,
        });
      },
    }
  );
}
