function topRightBottomLeft(prefix) {
  const rules = [];

  if (prefix) {
    rules.push(prefix);
    prefix = prefix + '-';
  } else {
    prefix = '';
  }

  return rules.concat([
    prefix + 'top',
    prefix + 'right',
    prefix + 'bottom',
    prefix + 'left',
  ]);
}

function minMax(suffix) {
  return [suffix, 'min-' + suffix, 'max-' + suffix];
}

function border(infix) {
  if (infix) {
    infix = '-' + infix;
  } else {
    infix = '';
  }

  return [
    'border' + infix,
    'border' + infix + '-width',
    'border' + infix + '-style',
    'border' + infix + '-color',
    'border' + infix + '-radius',
  ];
}

const cssModules = [].concat(['composes']);

const reset = ['all'];

const positioning = []
  .concat(['position', 'z-index'])
  .concat(topRightBottomLeft());

const displayAndBoxModel = []
  .concat(minMax('width'))
  .concat(minMax('height'))
  .concat(['display'])
  .concat([
    'grid',
    'grid-area',

    'grid-auto-columns',
    'grid-auto-rows',
    'grid-auto-flow',

    'grid-column',
    'grid-row',

    'grid-template',
    'grid-template-areas',
    'grid-template-columns',
    'grid-template-rows',

    'grid-row-start',
    'grid-column-start',
    'grid-row-end',
    'grid-column-end',
    'grid-row',
    'grid-column',

    'row-gap',
    'column-gap',
    'gap',
    'masonry-auto-flow',
  ])
  .concat([
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
  ])
  .concat([
    'align-content',
    'align-items',
    'align-self',
    'justify-content',
    'order',
  ])
  .concat(['box-sizing', 'overflow', 'overflow-x', 'overflow-y'])
  .concat(topRightBottomLeft('padding'))
  .concat(
    []
      .concat(border())
      .concat(border('top'))
      .concat(border('right'))
      .concat(border('bottom'))
      .concat(border('left'))
  )
  .concat(topRightBottomLeft('margin'));

export function sorter() {
  return {
    plugins: 'stylelint-order',
    rules: {
      'order/properties-order': [
        []
          .concat(cssModules)
          .concat(reset)
          .concat(positioning)
          .concat(displayAndBoxModel),
        { unspecified: 'bottomAlphabetical' },
      ],
    },
  };
}
