# Frizzy

Reusable UI component library for Airfrov web.

## Initialising repository

`npm install` installs all vendor packages needed inside `./node_modules`.

## Adding a new component

- Create a new folder inside `./src/components`, e.g. `./src/components/someButton`.
- The entry file is `index.js`. Keep the component self-contained. Typically the minimum files are `someButton/index.js` &amp; `someButton/index.scss`. To compile all SCSS files into CSS files, run `npm run build-css`. `npm run watch-css` allows continuous compiling whenever SCSS files are modified. 
- Add the new component to be added into the compiled script as so:

```js
// ./index.js
import someButton from './components/someButton';
```
- You can also allow the component to be run on page load where the script is launched.

```js
// ./index.js

import someButton from './components/someButton';
someButton();
```

- Compile the script once the changes are made. `npm run build-css` is also run before webpack compilation.

```shell
npm run build
```

- To use the library in the webpage, copy all of `/dist` and its contents to your own asset repository. Then just add a script tag linking to its location to the page where the `frizzy.min.js`. `/dist/demo` is not necessary and can be deleted when deploying.

```html
<body>
	<!-- content here -->
	<script src="path/to/dist/frizzy.min.js"></script>
</body>
```

## Components

### Inputs

#### Binary Inline Radios

```html
	
<div class="fz-radio-grp--binary">
	<label class="fz-radio-wrapper">
		<input class="fz-radio" type="radio" checked name="binaryRadioInputs" value="Yes" />
		<span class="fz-radio-inner">Ya</span>
	</label>
	<label class="fz-radio-wrapper">
		<input class="fz-radio" type="radio" name="binaryRadioInputs" value="No" />
		<span class="fz-radio-inner">Tidak</span>
	</label>
</div>


```

#### Multiple Inline Radios

```html

<div class="fz-radio-grp">
	<label class="fz-radio-wrapper">
		<input class="fz-radio" type="radio" checked name="multiRadioInputs" value="1">
		<span class="fz-radio-inner">1 kilogram</span>
	</label>
	<label class="fz-radio-wrapper">
		<input class="fz-radio" type="radio" name="multiRadioInputs" value="2" />
		<span class="fz-radio-inner">2 kilograms</span>
	</label>
	<label class="fz-radio-wrapper">
		<input class="fz-radio" type="radio" name="multiRadioInputs" value="3" />
		<span class="fz-radio-inner">3 kilograms</span>
	</label>
	<label class="fz-radio-wrapper">
		<input class="fz-radio" type="radio" name="multiRadioInputs" value="4" />
		<span class="fz-radio-inner">4 kilograms</span>
	</label>
	<label class="fz-radio-wrapper">
		<input class="fz-radio" type="radio" name="multiRadioInputs" value="5" />
		<span class="fz-radio-inner">5 kilograms</span>
	</label>
</div>

```

### Buttons

#### Header: Back

```html
	<!-- Font Awesome is needed for the caret icon -->
	<a class="fz-header-back-btn">
		<i class="fa fa-caret-left" aria-hidden="true"></i>
		Kembali ke Request
	</a>

```

### Layouts

#### Multistep Form

`data-steps-id` data attribute is mandatory in `.fz-steps-select` and `fz-content-steps`.

Ensure that `data-steps-id` in `.fz-steps-select` value in the steps title list is the same as the one in `.fz-content-steps`. `data-steps-id` will symlink to the appropriate `.fz-content-step` to show.

`data-step-nr` data attribute
 is mandatory in `.fz-step-title` and `.fz-content-step`. It will symlink each `.fz-content-step` with `.fz-step-title`.

`.fz-step-indicator__current` and `fz-step-indicator__total` will count total steps in the form and generate the values accordingly. Avoid putting inner text / markup.

```html
<!-- Font Awesome is needed for the gift and caret icons -->
<div class="fz-multistep-form-wrapper">
	<div class="fz-steps-wrapper">
		<a class="fz-header-back-btn">
			<i class="fas fa-caret-left"></i>
			Kembali ke Request
		</a>
		<h1 class="fz-page-title">
			<i class="fa fa-gift" aria-hidden="true"></i> Bantu Belikan
		</h1>
		<ul class="fz-steps-select" data-steps-id="demoForm">
			<li class="fz-step-title" data-step-nr="1">
				<div class="fz-step-nr-disc">
					<div class="fz-step-nr">1</div>
				</div>
				<div class="fz-step-copy">
					<h2 class="fz-step-title__name">
						Detail Barang
					</h2>
					<h3 class="fz-step-title__deck">
						Berat, ukuran dan karakteristik barang.
					</h3>
				</div>
			</li>
			<li class="fz-step-title" data-step-nr="2">
				<div class="fz-step-nr-disc">
					<div class="fz-step-nr">2</div>
				</div>
				<div class="fz-step-copy">
					<h2 class="fz-step-title__name">
						Ringkasan Penawaran dan Detail
					</h2>
					<h3 class="fz-step-title__deck">
						Ringkasan penawaran dan detail trip.
					</h3>
				</div>
			</li>
			<li class="fz-step-title" data-step-nr="3">
				<div class="fz-step-nr-disc">
					<div class="fz-step-nr">3</div>
				</div>
				<div class="fz-step-copy">
					<h2 class="fz-step-title__name">
						Detail Pengiriman
					</h2>
					<h3 class="fz-step-title__deck">
						Complete delivery details and chosen service.
					</h3>
				</div>
			</li>
		</ul>
	</div>
	
	<div class="fz-content-wrapper">
		<ul class="fz-content-steps" data-steps-id="demoForm">
			<!-- Step indicator -->
			<h2 class="fz-step-indicator">
				Bagian&nbsp;
				<span class="fz-step-indicator__current">
					<!-- Current step is pushed in here -->
				</span>&nbsp;
				dari&nbsp;
				<span class="fz-step-indicator__total">
					<!-- Total number of steps is pushed in here -->
				</span>
			</h2>
			<li class="fz-content-step" data-step-nr="1">
				Berat, ukuran dan karakteristik barang.
			</li>
			<li class="fz-content-step" data-step-nr="2">
				Ringkasan Penawaran dan Detail
			</li>
			<li class="fz-content-step" data-step-nr="3">
				Detail Pengiriman
			</li>
		</ul>
	</div>
	
</div>

<!-- ... Your other content ... -->

<script src="../../frizzy.min.js"></script>

<script type="text/javascript">
	(() => {
		// console.log("This allows clicking on first item by default...");
		const firstStepTitleElements = document.getElementsByClassName("fz-step-title");
		if (typeof firstStepTitleElements !== 'undefined') {
			firstStepTitleElements[0].click();
		}
	})();
</script>

```

## References

- [Webpack Loaders, CSS and Style Loaders](https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a)
