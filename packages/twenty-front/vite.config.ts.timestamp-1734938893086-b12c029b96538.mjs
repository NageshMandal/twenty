// packages/twenty-front/vite.config.ts
import { isNonEmptyString } from "file:///home/nagesh/twenty/node_modules/@sniptt/guards/build/index.js";
import react from "file:///home/nagesh/twenty/node_modules/@vitejs/plugin-react-swc/index.mjs";
import wyw from "file:///home/nagesh/twenty/node_modules/@wyw-in-js/vite/esm/index.mjs";
import fs from "fs";
import path from "path";
import { defineConfig, loadEnv, searchForWorkspaceRoot } from "file:///home/nagesh/twenty/node_modules/vite/dist/node/index.js";
import checker from "file:///home/nagesh/twenty/node_modules/vite-plugin-checker/dist/esm/main.js";
import svgr from "file:///home/nagesh/twenty/node_modules/vite-plugin-svgr/dist/index.js";
import tsconfigPaths from "file:///home/nagesh/twenty/node_modules/vite-tsconfig-paths/dist/index.mjs";
var __vite_injected_original_dirname = "/home/nagesh/twenty/packages/twenty-front";
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const {
    REACT_APP_SERVER_BASE_URL,
    VITE_BUILD_SOURCEMAP,
    VITE_DISABLE_TYPESCRIPT_CHECKER,
    VITE_DISABLE_ESLINT_CHECKER,
    VITE_HOST,
    SSL_CERT_PATH,
    SSL_KEY_PATH,
    REACT_APP_PORT,
  } = env;
  const port = isNonEmptyString(REACT_APP_PORT) ? parseInt(REACT_APP_PORT) : 3001;
  const isBuildCommand = command === "build";
  const tsConfigPath = isBuildCommand ? path.resolve(__vite_injected_original_dirname, "./tsconfig.build.json") : path.resolve(__vite_injected_original_dirname, "./tsconfig.dev.json");
  const checkers = {
    overlay: false
  };
  if (VITE_DISABLE_TYPESCRIPT_CHECKER === "true") {
    console.log(
      `VITE_DISABLE_TYPESCRIPT_CHECKER: ${VITE_DISABLE_TYPESCRIPT_CHECKER}`
    );
  }
  if (VITE_DISABLE_ESLINT_CHECKER === "true") {
    console.log(`VITE_DISABLE_ESLINT_CHECKER: ${VITE_DISABLE_ESLINT_CHECKER}`);
  }
  if (VITE_BUILD_SOURCEMAP === "true") {
    console.log(`VITE_BUILD_SOURCEMAP: ${VITE_BUILD_SOURCEMAP}`);
  }
  if (VITE_DISABLE_TYPESCRIPT_CHECKER !== "true") {
    checkers["typescript"] = {
      tsconfigPath: tsConfigPath
    };
  }
  if (VITE_DISABLE_ESLINT_CHECKER !== "true") {
    checkers["eslint"] = {
      lintCommand: "cd ../.. && eslint packages/twenty-front --report-unused-disable-directives --max-warnings 0 --config .eslintrc.cjs"
    };
  }
  return {
    root: __vite_injected_original_dirname,
    cacheDir: "../../node_modules/.vite/packages/twenty-front",
    server: {
      port,
      ...VITE_HOST ? { host: VITE_HOST } : {},
      ...SSL_KEY_PATH && SSL_CERT_PATH ? {
        protocol: "https",
        https: {
          key: fs.readFileSync(env.SSL_KEY_PATH),
          cert: fs.readFileSync(env.SSL_CERT_PATH)
        }
      } : {
        protocol: "http"
      },
      fs: {
        allow: [
          searchForWorkspaceRoot(process.cwd()),
          "**/@blocknote/core/src/fonts/**"
        ]
      }
    },
    plugins: [
      react({ jsxImportSource: "@emotion/react" }),
      tsconfigPaths({
        projects: ["tsconfig.json", "../twenty-ui/tsconfig.json"]
      }),
      svgr(),
      checker(checkers),
      // TODO: fix this, we have to restrict the include to only the components that are using linaria
      // Otherwise the build will fail because wyw tries to include emotion styled components
      wyw({
        include: [
          "**/CurrencyDisplay.tsx",
          "**/EllipsisDisplay.tsx",
          "**/ContactLink.tsx",
          "**/BooleanDisplay.tsx",
          "**/LinksDisplay.tsx",
          "**/RoundedLink.tsx",
          "**/OverflowingTextWithTooltip.tsx",
          "**/Chip.tsx",
          "**/Tag.tsx",
          "**/MultiSelectFieldDisplay.tsx",
          "**/RatingInput.tsx",
          "**/RecordTableCellContainer.tsx",
          "**/RecordTableCellDisplayContainer.tsx",
          "**/Avatar.tsx",
          "**/RecordTableBodyDroppable.tsx",
          "**/RecordTableCellBaseContainer.tsx",
          "**/RecordTableCellTd.tsx",
          "**/RecordTableTd.tsx",
          "**/RecordTableHeaderDragDropColumn.tsx",
          "**/ActorDisplay.tsx",
          "**/AvatarChip.tsx"
        ],
        babelOptions: {
          presets: ["@babel/preset-typescript", "@babel/preset-react"]
        }
      })
    ],
    optimizeDeps: {
      exclude: ["../../node_modules/.vite", "../../node_modules/.cache"]
    },
    build: {
      outDir: "build",
      sourcemap: VITE_BUILD_SOURCEMAP === "true"
    },
    envPrefix: "REACT_APP_",
    define: {
      _env_: {
        REACT_APP_SERVER_BASE_URL
      },
      "process.env": {
        REACT_APP_SERVER_BASE_URL
      }
    },
    css: {
      modules: {
        localsConvention: "camelCaseOnly"
      }
    },
    resolve: {
      alias: {
        path: "rollup-plugin-node-polyfills/polyfills/path"
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZXMvdHdlbnR5LWZyb250L3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvbmFnZXNoL3R3ZW50eS9wYWNrYWdlcy90d2VudHktZnJvbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL25hZ2VzaC90d2VudHkvcGFja2FnZXMvdHdlbnR5LWZyb250L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL25hZ2VzaC90d2VudHkvcGFja2FnZXMvdHdlbnR5LWZyb250L3ZpdGUuY29uZmlnLnRzXCI7LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgaXNOb25FbXB0eVN0cmluZyB9IGZyb20gJ0BzbmlwdHQvZ3VhcmRzJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xuaW1wb3J0IHd5dyBmcm9tICdAd3l3LWluLWpzL3ZpdGUnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52LCBzZWFyY2hGb3JXb3Jrc3BhY2VSb290IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgY2hlY2tlciBmcm9tICd2aXRlLXBsdWdpbi1jaGVja2VyJztcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5cbnR5cGUgQ2hlY2tlcnMgPSBQYXJhbWV0ZXJzPHR5cGVvZiBjaGVja2VyPlswXTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksICcnKTtcblxuICBjb25zdCB7XG4gICAgUkVBQ1RfQVBQX1NFUlZFUl9CQVNFX1VSTCxcbiAgICBWSVRFX0JVSUxEX1NPVVJDRU1BUCxcbiAgICBWSVRFX0RJU0FCTEVfVFlQRVNDUklQVF9DSEVDS0VSLFxuICAgIFZJVEVfRElTQUJMRV9FU0xJTlRfQ0hFQ0tFUixcbiAgICBWSVRFX0hPU1QsXG4gICAgU1NMX0NFUlRfUEFUSCxcbiAgICBTU0xfS0VZX1BBVEgsXG4gICAgUkVBQ1RfQVBQX1BPUlQsXG4gIH0gPSBlbnY7XG5cbiAgY29uc3QgcG9ydCA9IGlzTm9uRW1wdHlTdHJpbmcoUkVBQ1RfQVBQX1BPUlQpXG4gICAgPyBwYXJzZUludChSRUFDVF9BUFBfUE9SVClcbiAgICA6IDMwMDE7XG5cbiAgY29uc3QgaXNCdWlsZENvbW1hbmQgPSBjb21tYW5kID09PSAnYnVpbGQnO1xuXG4gIGNvbnN0IHRzQ29uZmlnUGF0aCA9IGlzQnVpbGRDb21tYW5kXG4gICAgPyBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi90c2NvbmZpZy5idWlsZC5qc29uJylcbiAgICA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3RzY29uZmlnLmRldi5qc29uJyk7XG5cbiAgY29uc3QgY2hlY2tlcnM6IENoZWNrZXJzID0ge1xuICAgIG92ZXJsYXk6IGZhbHNlLFxuICB9O1xuXG4gIGlmIChWSVRFX0RJU0FCTEVfVFlQRVNDUklQVF9DSEVDS0VSID09PSAndHJ1ZScpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBWSVRFX0RJU0FCTEVfVFlQRVNDUklQVF9DSEVDS0VSOiAke1ZJVEVfRElTQUJMRV9UWVBFU0NSSVBUX0NIRUNLRVJ9YCxcbiAgICApO1xuICB9XG5cbiAgaWYgKFZJVEVfRElTQUJMRV9FU0xJTlRfQ0hFQ0tFUiA9PT0gJ3RydWUnKSB7XG4gICAgY29uc29sZS5sb2coYFZJVEVfRElTQUJMRV9FU0xJTlRfQ0hFQ0tFUjogJHtWSVRFX0RJU0FCTEVfRVNMSU5UX0NIRUNLRVJ9YCk7XG4gIH1cblxuICBpZiAoVklURV9CVUlMRF9TT1VSQ0VNQVAgPT09ICd0cnVlJykge1xuICAgIGNvbnNvbGUubG9nKGBWSVRFX0JVSUxEX1NPVVJDRU1BUDogJHtWSVRFX0JVSUxEX1NPVVJDRU1BUH1gKTtcbiAgfVxuXG4gIGlmIChWSVRFX0RJU0FCTEVfVFlQRVNDUklQVF9DSEVDS0VSICE9PSAndHJ1ZScpIHtcbiAgICBjaGVja2Vyc1sndHlwZXNjcmlwdCddID0ge1xuICAgICAgdHNjb25maWdQYXRoOiB0c0NvbmZpZ1BhdGgsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChWSVRFX0RJU0FCTEVfRVNMSU5UX0NIRUNLRVIgIT09ICd0cnVlJykge1xuICAgIGNoZWNrZXJzWydlc2xpbnQnXSA9IHtcbiAgICAgIGxpbnRDb21tYW5kOlxuICAgICAgICAnY2QgLi4vLi4gJiYgZXNsaW50IHBhY2thZ2VzL3R3ZW50eS1mcm9udCAtLXJlcG9ydC11bnVzZWQtZGlzYWJsZS1kaXJlY3RpdmVzIC0tbWF4LXdhcm5pbmdzIDAgLS1jb25maWcgLmVzbGludHJjLmNqcycsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcm9vdDogX19kaXJuYW1lLFxuICAgIGNhY2hlRGlyOiAnLi4vLi4vbm9kZV9tb2R1bGVzLy52aXRlL3BhY2thZ2VzL3R3ZW50eS1mcm9udCcsXG5cbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IHBvcnQsXG4gICAgICAuLi4oVklURV9IT1NUID8geyBob3N0OiBWSVRFX0hPU1QgfSA6IHt9KSxcbiAgICAgIC4uLihTU0xfS0VZX1BBVEggJiYgU1NMX0NFUlRfUEFUSFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHByb3RvY29sOiAnaHR0cHMnLFxuICAgICAgICAgICAgaHR0cHM6IHtcbiAgICAgICAgICAgICAga2V5OiBmcy5yZWFkRmlsZVN5bmMoZW52LlNTTF9LRVlfUEFUSCksXG4gICAgICAgICAgICAgIGNlcnQ6IGZzLnJlYWRGaWxlU3luYyhlbnYuU1NMX0NFUlRfUEFUSCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBwcm90b2NvbDogJ2h0dHAnLFxuICAgICAgICAgIH0pLFxuICAgICAgZnM6IHtcbiAgICAgICAgYWxsb3c6IFtcbiAgICAgICAgICBzZWFyY2hGb3JXb3Jrc3BhY2VSb290KHByb2Nlc3MuY3dkKCkpLFxuICAgICAgICAgICcqKi9AYmxvY2tub3RlL2NvcmUvc3JjL2ZvbnRzLyoqJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHJlYWN0KHsganN4SW1wb3J0U291cmNlOiAnQGVtb3Rpb24vcmVhY3QnIH0pLFxuICAgICAgdHNjb25maWdQYXRocyh7XG4gICAgICAgIHByb2plY3RzOiBbJ3RzY29uZmlnLmpzb24nLCAnLi4vdHdlbnR5LXVpL3RzY29uZmlnLmpzb24nXSxcbiAgICAgIH0pLFxuICAgICAgc3ZncigpLFxuICAgICAgY2hlY2tlcihjaGVja2VycyksXG4gICAgICAvLyBUT0RPOiBmaXggdGhpcywgd2UgaGF2ZSB0byByZXN0cmljdCB0aGUgaW5jbHVkZSB0byBvbmx5IHRoZSBjb21wb25lbnRzIHRoYXQgYXJlIHVzaW5nIGxpbmFyaWFcbiAgICAgIC8vIE90aGVyd2lzZSB0aGUgYnVpbGQgd2lsbCBmYWlsIGJlY2F1c2Ugd3l3IHRyaWVzIHRvIGluY2x1ZGUgZW1vdGlvbiBzdHlsZWQgY29tcG9uZW50c1xuICAgICAgd3l3KHtcbiAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICcqKi9DdXJyZW5jeURpc3BsYXkudHN4JyxcbiAgICAgICAgICAnKiovRWxsaXBzaXNEaXNwbGF5LnRzeCcsXG4gICAgICAgICAgJyoqL0NvbnRhY3RMaW5rLnRzeCcsXG4gICAgICAgICAgJyoqL0Jvb2xlYW5EaXNwbGF5LnRzeCcsXG4gICAgICAgICAgJyoqL0xpbmtzRGlzcGxheS50c3gnLFxuICAgICAgICAgICcqKi9Sb3VuZGVkTGluay50c3gnLFxuICAgICAgICAgICcqKi9PdmVyZmxvd2luZ1RleHRXaXRoVG9vbHRpcC50c3gnLFxuICAgICAgICAgICcqKi9DaGlwLnRzeCcsXG4gICAgICAgICAgJyoqL1RhZy50c3gnLFxuICAgICAgICAgICcqKi9NdWx0aVNlbGVjdEZpZWxkRGlzcGxheS50c3gnLFxuICAgICAgICAgICcqKi9SYXRpbmdJbnB1dC50c3gnLFxuICAgICAgICAgICcqKi9SZWNvcmRUYWJsZUNlbGxDb250YWluZXIudHN4JyxcbiAgICAgICAgICAnKiovUmVjb3JkVGFibGVDZWxsRGlzcGxheUNvbnRhaW5lci50c3gnLFxuICAgICAgICAgICcqKi9BdmF0YXIudHN4JyxcbiAgICAgICAgICAnKiovUmVjb3JkVGFibGVCb2R5RHJvcHBhYmxlLnRzeCcsXG4gICAgICAgICAgJyoqL1JlY29yZFRhYmxlQ2VsbEJhc2VDb250YWluZXIudHN4JyxcbiAgICAgICAgICAnKiovUmVjb3JkVGFibGVDZWxsVGQudHN4JyxcbiAgICAgICAgICAnKiovUmVjb3JkVGFibGVUZC50c3gnLFxuICAgICAgICAgICcqKi9SZWNvcmRUYWJsZUhlYWRlckRyYWdEcm9wQ29sdW1uLnRzeCcsXG4gICAgICAgICAgJyoqL0FjdG9yRGlzcGxheS50c3gnLFxuICAgICAgICAgICcqKi9BdmF0YXJDaGlwLnRzeCcsXG4gICAgICAgIF0sXG4gICAgICAgIGJhYmVsT3B0aW9uczoge1xuICAgICAgICAgIHByZXNldHM6IFsnQGJhYmVsL3ByZXNldC10eXBlc2NyaXB0JywgJ0BiYWJlbC9wcmVzZXQtcmVhY3QnXSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIF0sXG5cbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGV4Y2x1ZGU6IFsnLi4vLi4vbm9kZV9tb2R1bGVzLy52aXRlJywgJy4uLy4uL25vZGVfbW9kdWxlcy8uY2FjaGUnXSxcbiAgICB9LFxuXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogJ2J1aWxkJyxcbiAgICAgIHNvdXJjZW1hcDogVklURV9CVUlMRF9TT1VSQ0VNQVAgPT09ICd0cnVlJyxcbiAgICB9LFxuXG4gICAgZW52UHJlZml4OiAnUkVBQ1RfQVBQXycsXG5cbiAgICBkZWZpbmU6IHtcbiAgICAgIF9lbnZfOiB7XG4gICAgICAgIFJFQUNUX0FQUF9TRVJWRVJfQkFTRV9VUkwsXG4gICAgICB9LFxuICAgICAgJ3Byb2Nlc3MuZW52Jzoge1xuICAgICAgICBSRUFDVF9BUFBfU0VSVkVSX0JBU0VfVVJMLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgbW9kdWxlczoge1xuICAgICAgICBsb2NhbHNDb252ZW50aW9uOiAnY2FtZWxDYXNlT25seScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgcGF0aDogJ3JvbGx1cC1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMvcG9seWZpbGxzL3BhdGgnLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixPQUFPLFFBQVE7QUFDZixPQUFPLFVBQVU7QUFDakIsU0FBUyxjQUFjLFNBQVMsOEJBQThCO0FBQzlELE9BQU8sYUFBYTtBQUNwQixPQUFPLFVBQVU7QUFDakIsT0FBTyxtQkFBbUI7QUFUMUIsSUFBTSxtQ0FBbUM7QUFhekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBTTtBQUNqRCxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFFM0MsUUFBTTtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRixJ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
