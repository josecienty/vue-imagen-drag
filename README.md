# vue-imagen-drop
## [JOSE CIENTY DEVELOPER](https://github.com/josecienty).

A beautiful vue component for upload image with select or drag and drop.

**Notice**: This component is designed for pc.

[![GitHub issues](https://img.shields.io/github/issues/dai-siki/vue-image-crop-upload.svg)](https://github.com/josecienty/vue-imagen-drag/issues)
[![GitHub forks](https://img.shields.io/github/forks/dai-siki/vue-image-crop-upload.svg)](https://github.com/josecienty/vue-imagen-drag/network)
[![GitHub stars](https://img.shields.io/github/stars/dai-siki/vue-image-crop-upload.svg)](https://github.com/josecienty/vue-imagen-drag/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/dai-siki/vue-image-crop-upload.svg?style=social)](https://twitter.com/CientyArguello)

## Change log
#### - Compatible vue2

## Screenshot
![screenshot](screenshot/1.png)

## Brower compatibility
IE10+

## Install
#### npm
```shell
$ npm i vue-imagen-drag
```


## Usage
#### Props
| Name              | Type               | Default             | Description                                         |
| ----------------| ---------------- | ---------------| ------------------------------------------|
| id             | String            |  'image-drag-drop'                | **Necesary** id to component |
| height				| String,Number		| 'auto'               | height size of component |
| value				| String		| ''               | Image route, return base64File |

#### Examples
```html
<div id="app">
  <vue-imagen-drag
    height="200px"
    v-model="imagen"
  />
</div>

<script>
  import Vue from 'vue';
  import VueImagenDrag from 'vue-imagen-drag';
	
  new Vue({
		el: '#app',
		data: {
			imagen:''
		},
		components: {
			'vue-imagen-drag': VueImagenDrag
		},
	});
</script>
```
