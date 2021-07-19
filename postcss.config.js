module.exports =
  {
    plugins:
      [
        // eslint-disable-next-line global-require
        require('postcss-import'),
        // eslint-disable-next-line global-require
        require('postcss-url'),
        // eslint-disable-next-line global-require
        require('postcss-preset-env')(
          {
            browsers:
              'last 2 versions',
            stage: 0,
          }
        ),
      ],
  };
