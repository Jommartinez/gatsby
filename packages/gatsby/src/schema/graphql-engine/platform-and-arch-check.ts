if (
  process.env.GATSBY_FUNCTIONS_PLATFORM !== process.platform ||
  process.env.GATSBY_FUNCTIONS_ARCH !== process.arch
) {
  throw new Error(
    `Incompatible DSG/SSR executing environment. Function was built for "${process.env.GATSBY_FUNCTIONS_PLATFORM}/${process.env.GATSBY_FUNCTIONS_ARCH}" but is executing on "${process.platform}/${process.arch}".` +
      (process.env.gatsby_executing_command === `serve`
        ? `\n\nIf you are trying to run DSG/SSR engine locally, consider using experimental utility to rebuild functions for your local platform:\n\nnode node_modules/gatsby/dist/schema/graphql-engine/standalone-regenerate.js`
        : ``) +
      `\n\nTo generate engines for "${process.platform}/${process.arch}" run 'gatsby build --functions-platform=${process.platform} --functions-arch=${process.arch}' or run 'gatsby build' with following envirnment variables:\n\nGATSBY_FUNCTIONS_PLATFORM=${process.platform}\nGATSBY_FUNCTIONS_ARCH=${process.arch}`
  )
}
