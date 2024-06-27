# @tomas-light/stylelint-config-idiomatic-order

Order your styles based on [idiomatic-css](https://github.com/necolas/idiomatic-css#declaration-order).


> It is a fork of original [stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order) package with a few updates:
> - added grid rules
> - added overflow-x, overflow-y rules
> - place box-sizing and overflow after flex and grid rules

As far as author of original packages does not update its code, I'm, going try to do it as long as
I use the package by myself. If there are some rules you want to include, please feel free to open an Issue and 
I will do my best to include them as fast as I can. Thank you for your participation ❤️ 

## Installation

npm
```bash
npm install --save-dev @tomas-light/stylelint-config-idiomatic-order
```
yarn
```bash
yarn add -D @tomas-light/stylelint-config-idiomatic-order
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "@tomas-light/stylelint-config-idiomatic-order"
}
```

You can easily [extend](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configure.md#extends) the config to your needs.

## [License](LICENSE)
