import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * to load the built addon in this test Storybook
 */
function previewAnnotations(entry = []) {
  return [...entry, join(__dirname, "../dist/preview.js")];
}

function managerEntries(entry = []) {
  return [...entry, join(__dirname, "../dist/manager.js")];
}

export { managerEntries, previewAnnotations };
