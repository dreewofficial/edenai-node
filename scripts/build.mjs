import esbuild from "esbuild";
import esbuildPluginTsc from "esbuild-plugin-tsc";

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: false,
    format: "cjs",
    outfile: "dist/index.js",
    sourcemap: false,
    minify: true,
    plugins: [
      esbuildPluginTsc({ tsconfigPath: "./tsconfig.json", force: true }),
    ],
  })
  .then(() => {
    console.log(`Project built successfully`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
