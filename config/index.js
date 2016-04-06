const NODE_ENV = process.env.NODE_ENV || 'development';

export default {

  // Environment
  __CLIENT__: false,
  __SERVER__: true,
  __DEV__: NODE_ENV === 'development',
  __PROD__: NODE_ENV === 'production',

  // Server Configuration
  SERVER_PORT: process.env.PORT || 3000,
};
