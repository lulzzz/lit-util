# @appnest/lit-util

## 🤔 What is this?

This project is a collection of functions I tend to use when building projects based on lit-html. The goal is to give you some inspiration and make your life a little easier when finding yourself in need of the same functionality.


## 🎉 Install the dependency

```javascript
npm i @appnest/lit-util
```

## 📝 Translate your application

### Step 1 - To take advantage of the translation features you first need to have your strings in a JSON structure.

```json
// en.json
{
	"lang": "en",
	"header": {
		"title": "Hello",
		"subtitle": "World"
	},
	"cta": {
		"awesome": "{{ things }} are awesome!",
		"cats": "Cats"
	}
}
```

### Step 2 - Load the strings depending on the language

Use the function `getStrings` to load the strings at a given path. If you want to cache the strings for next time you are using the `getStrings` function, you might want to cache the result using the function `addStringsToCache` using the path as key.

```javascript
const path = `/assets/i18n/en.json`;
const strings = await getStrings(path);
addStringsToCache(path, strings);
```

### Step 3 - Set the strings

Use the function `setStrings` to set the current strings of the language. When this function is invoked, the event `stringsChanged` will be dispatched on the window object.

```javascript
await setStrings(strings);
```

### Step 4 - Get the translated strings

To get a translated string use the function `get`. Give this function a string with the chain of keys that points to the desired string in the JSON structure. The below example is based on the strings defined in `step 1`.

```javascript
get("lang"); // "en"
get("header.title"); // "Hello"
get("header.subtitle"); // "World"
```

### Step 5 - Interpolate values

Using the `get` function it is possible to interpolate values. Simply use the `{{ key }}` syntax in your strings and provide an object with values replacing those defined in the string when using the `get` function. The below example is based on the strings defined in `step 1`.

```javascript
get("cta.awesome", { thing: get("cta.cats") )); // Cats are awesome!
```

### Step 6 - Use the `translate` directive

If you are using `lit-html` you might want to use the `translate` directive. This directive makes sure to automatically update all of the translated parts when the method `setStrings` is called and the `stringsChanged` event is dispatched on the window object.

```javascript
class MyComponent extends LitElement {
	render () {
		html`
			<h1>${translate("header.title")}</h1>
			<p>${translate("header.subtitle")}</p>
			<span>${translate("cta.awesome", {things: get("cta.cats") })}</span>
		`;
	}
}
```

## 🦀 Use `@customElement()` to define your custom elements.

Use the `customElement` decorator to define your custom elements. Simply give it a tag-name and your custom element will be defined.

```javascript
@customElement("hello-component")
export class HelloComponent extends LitElement {
	...
}
```


## 🌻 Util

Coming soon..



## 🎉 License

Licensed under [MIT](https://opensource.org/licenses/MIT).