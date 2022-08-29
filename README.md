<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/emoji-lib/main/.github/images/favicon512x512-emoji-lib.png" align="center" alt=":package: emoji-lib" />
 <h2 align="center">:package: emoji-lib</h2>
 <p align="center">Set of searchable emojis for web</p>
  <p align="center">
    <a href="https://github.com/hebertcisco/emoji-lib/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/hebertcisco/emoji-lib?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/emoji-lib/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/emoji-lib?style=flat&color=336791" />
    </a>
     <a href="https://github.com/hebertcisco/emoji-lib">
      <img alt="GitHub Downloads" src="https://img.shields.io/npm/dw/emoji-lib?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/emoji-lib">
      <img alt="GitHub Total Downloads" src="https://img.shields.io/npm/dt/emoji-lib?color=336791&label=Total%20downloads" />
    </a>
 <a href="https://github.com/hebertcisco/emoji-lib">
      <img alt="GitHub release" src="https://img.shields.io/github/release/hebertcisco/emoji-lib.svg?style=flat&color=336791" />
    </a>
     <a href="https://github.com/hebertcisco/emoji-lib/actions/workflows/npm-publish.yml">
      <img alt="Node.js build and publish package" src="https://github.com/hebertcisco/emoji-lib/actions/workflows/npm-publish.yml/badge.svg" />
    </a>
     <a href="https://github.com/hebertcisco/emoji-lib/actions/workflows/coverage.yml">
      <img alt="Running Code Coverage" src="https://github.com/hebertcisco/emoji-lib/actions/workflows/coverage.yml/badge.svg" />
    </a>
     <a href="https://codecov.io/gh/hebertcisco/emoji-lib" >
<img src="https://codecov.io/gh/hebertcisco/emoji-lib/branch/main/graph/badge.svg?token=QKF86EQVUM"/>
</a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/emoji-lib/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/emoji-lib/issues/new/choose">Request Feature</a>
  </p>
 <h3 align="center">Systems on which it has been tested:</h3>
 <p align="center">
   <a href="https://www.apple.com/br/macos/">
      <img alt="Macos" src="https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white&style=flat" />
    </a>
    <a href="https://ubuntu.com/download">
      <img alt="Ubuntu" src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white&style=flat" />
    </a>
    <a href="https://www.microsoft.com/pt-br/windows/">
      <img alt="Windows" src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white&style=flat" />
    </a>
  </p>
<p align="center">Did you like the project? Please, considerate <a href="https://www.buymeacoffee.com/hebertcisco">a donation</a> to help improve!</p>

<p align="center"><strong>Set of searchable emojis for web</strong>✨</p>

# Getting started

## Installation

> Install with yarn or npm: `yarn` or `npm`:

```bash
# yarn
yarn add emoji-lib
```

```bash
# npm
npm i emoji-lib --save
```

### Import the lib with es6 or cjs

```mjs
// es6
import emoji from 'emoji-lib';
```

```cjs
// cjs
const emoji = require('emoji-lib');
```

### Usage examples

#### services

##### EmojiService

```cjs
#!/usr/bin/env node
const { EmojiService } = require("emoji-lib"); 

const emojiService = new EmojiService(); 

const emojiList = emojiService.getEmojiList(); // returns a list of all emojis
console.log('emojiList', emojiList[0]); // prints the first emoji

const emojiById = emojiService.getEmojiById('5ff7f6536ea31b02c0a37893'); // returns an emoji by id
console.log('emojiById', emojiById);

const emojiByTitle = emojiService.getEmojiByTitle('Grimacing'); // returns an emoji by title
console.log('emojiByTitle', emojiByTitle);

const emojiListByKeyword = emojiService.getEmojiListByKeyword('Grimacing'); // returns a list of emojis by keyword
console.log('emojiListByKeyword', emojiListByKeyword);

```

#### data

##### emoji_list

```cjs
#!/usr/bin/env node
const { emoji_list } = require("emoji-lib");

console.log(emoji_list[0]); // prints the first emoji
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2022 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
