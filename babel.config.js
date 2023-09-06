module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
                '@src': './src',
      
        '@redux': './src/redux',
        '@screens': './src/screens',
        '@navigations': './src/navigations',
        '@components': './src/components',
        '@constants': './src/constants',
        '@core-ui': './src/core-ui',
        '@helpers': './src/helpers',
        '@hooks': './src/hooks',

        },
      },
    ],
  ],
};