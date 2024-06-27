import { readFile } from 'node:fs/promises';
import path from 'path';
import stylelint from 'stylelint';
import { fileURLToPath } from 'url';
import { expect, test } from 'vitest';
import config from '../src/sorter.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const paths = {
  fixture: path.join(__dirname, 'fixture.css'),
  expected: path.join(__dirname, 'expected.css'),
};

async function lint() {
  const fixture = await readFile(paths.fixture, 'utf8');
  const expected = await readFile(paths.expected, 'utf8');

  const linterResult = await stylelint.lint({
    code: fixture,
    config,
    fix: true,
  });
  return { linterResult, expected };
}

test('has no stylelint errors', async () => {
  const { linterResult } = await lint();
  expect(linterResult.errored).toBe(false);
});

function testNLines(shift) {
  test(`result equals to expected one ${shift} - ${shift + 100 - 1}`, async () => {
    const { expected, linterResult } = await lint();
    const resultN = linterResult.code.split('\n').slice(shift, shift + 100);
    const expectedN = expected.split('\n').slice(shift, shift + 100);
    expect(resultN).toEqual(expectedN);
  });
}

const totalLinesCount = 10452;
Array.from({ length: totalLinesCount / 100 + 1 }).map((_, index) =>
  testNLines(index * 100)
);
// Array.from({ length: 500 / 100 + 1 }).map((_, index) =>
//   testNLines(index * 100)
// );
