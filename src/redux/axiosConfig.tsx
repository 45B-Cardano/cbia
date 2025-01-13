const options = {
  interceptors: {
    request: [
      ({ getState }: any, config: any) => {
        const store = getState();
        const token = store?.auth?.tokens?.access;
        if (token) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = token ? `Bearer ${token}` : null;
        }
        return config;
      },
    ],
  },
};

export default options;
