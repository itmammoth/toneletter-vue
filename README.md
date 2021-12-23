# toneletter-vue

`toneletter-vue` is a vue.js plugin for `toneletter.js`

[toneletter.js](https://www.npmjs.com/package/toneletter)

# Installation

```bash
$ npm install toneletter-vue
```

# Usage

First, install as vue plugin:

```js
import Vue from "vue";
import ToneletterVue from 'toneletter-vue';

Vue.use(ToneletterVue);
```

toneletter-vue provides `v-toneletter` directive to make your input field toneletterized.

```vue
<!-- Basic usage -->
<textarea v-toneletter="{ lang: 'th' }"></textarea>

<!-- For chinese pinyin -->
<inut type="text" v-toneletter="{ lang: 'cn' }"></inut>

<!-- disabled -->
<inut type="text" v-toneletter="false"></inut>
```

# Options

You can pass options to `v-toneletter` directive.

| Option            | Description                                                           |
|-------------------|-----------------------------------------------------------------------|
| `lang`            | [See the toneletter.js](https://www.npmjs.com/package/toneletter)     |
| `phoneticSymbols` | [See the toneletter.js](https://www.npmjs.com/package/toneletter)     |
| `toneKeys`        | [See the toneletter.js](https://www.npmjs.com/package/toneletter)     |
| `autoObserve`     | `true` or `false` whether start observation when the element is bound |

# Handle with javascript

You can have access to Toneletter instance via `element.toneletter`.

```vue

<template>
  <textarea v-toneletter="{ lang: 'th' }" ref="text"></textarea>
</template>

<script>
...
const toneletter = this.$refs.text.toneletter;
toneletter.off();
...
</script>
```

# Contribute

Fork it, make pull request, free your mind.

```bash
$ npm install       # Install
$ npm run watch     # Watch and build
$ npm run build     # Build
$ npm run test:web  # Try toneletter with browser
```

# License

MIT License.