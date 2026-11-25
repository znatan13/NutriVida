module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'tests/unit/**/*.spec.tsx'
    ],
    preprocessors: {
      'tests/unit/**/*.spec.tsx': 'karma-typescript'
    },
    reporters: ['progress', 'karma-typescript'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: false,
    client: {
      jasmine: {
        random: false
      }
    },
    karmaTypescriptConfig: {
      compilerOptions: {
        jsx: 'react-jsx',
        module: 'commonjs',
        target: 'ES2020',
        sourceMap: true,
        esModuleInterop: true,
        skipLibCheck: true
      },
      bundlerOptions: {
        entrypoints: /\.spec\.tsx$/,
        resolve: {
          extensions: ['.js', '.json', '.mjs', '.ts', '.tsx']
        }
      },
      coverageOptions: {
        instrumentation: true,
        exclude: [
          /\.d\.ts$/i,
          /\.spec\.tsx$/i,
          /node_modules/i,
          /src\/main\.tsx$/i,
          /src\/App\.tsx$/i
        ]
      },
      reports: {
        html: 'coverage',
        'text-summary': ''
      }
    }
  });
};
