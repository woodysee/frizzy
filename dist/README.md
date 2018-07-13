# Frizzy

Reusable UI component library for Airfrov web.

## **Version:** 0.2.0

- Separated minified script
- New components
	- Classic Stacked Radios
	- Ticked Stacked Radios

## Initialising

To use the library in the webpage, use the script tag as shown in the page of Airfrov website where Frizzy components are used.

```html
<head>
	<!-- Your other stylesheets / scripts / links here -->
	<link rel="stylesheet" href="frizzy.min.css" />
</head>
<body>
	<!-- Your content here -->
	<script src="/css/frizzy/0.2.0/dist/frizzy.min.js"></script>
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

#### Classic Stacked Radios

```html
	
<div class="fz-radio-wrapper" data-fz-radio-type="classic">
	<div class="fz-radio-label">
		Stok habis
	</div>
	<input class="fz-radio" id="batalkan-penawaran__stok" type="radio" name="classicRadioInputs" value="Out of stock" checked />
	<label class="fz-radio-inner" for="batalkan-penawaran__stok">
		<!-- Radio element -->
	</label>
</div>

<div class="fz-radio-wrapper" data-fz-radio-type="classic">
	<input class="fz-radio" id="batalkan-penawaran__barang" type="radio" name="classicRadioInputs" value="Could not find item"/>
	<label class="fz-radio-inner" for="batalkan-penawaran__barang">
		<!-- Tick element -->
	</label>
	<div class="fz-radio-label">
		Barang tidak ditemukan
	</div>
</div>

<div class="fz-radio-wrapper" data-fz-radio-type="classic">
	<input class="fz-radio" id="batalkan-penawaran__waktu" type="radio" name="classicRadioInputs" value="Not enough time to purchase"/>
	<label class="fz-radio-inner" for="batalkan-penawaran__waktu">
		<!-- Tick element -->
	</label>
	<div class="fz-radio-label">
		Waktu terbatas  
	</div>
</div>

```

#### Ticked Stacked Radios

```html
	
<div class="fz-radio-wrapper" data-fz-radio-type="ticked">
	<div class="fz-radio-label">
		Vegetarian
	</div>
	<input class="fz-radio" id="meal-selection__veg" type="radio" name="tickedRadioInputs" value="veg" />
	<label class="fz-radio-inner" for="meal-selection__veg">
		<!-- Tick element -->
	</label>
</div>

<div class="fz-radio-wrapper" data-fz-radio-type="ticked">
	<input class="fz-radio" id="meal-selection__noveg" type="radio" name="tickedRadioInputs" value="nonveg" checked />
	<label class="fz-radio-inner" for="meal-selection__chicken">
		<!-- Tick element -->
	</label>
	<div class="fz-radio-label">
		Non-vegetarian (Chicken)
	</div>
</div>

<div class="fz-radio-wrapper" data-fz-radio-type="ticked">
	<input class="fz-radio" id="meal-selection__noveg" type="radio" name="tickedRadioInputs" value="nonveg" checked />
	<label class="fz-radio-inner" for="meal-selection__fish">
		<!-- Tick element -->
	</label>
	<div class="fz-radio-label">
		Non-vegetarian (Fish)
	</div>
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

#### Multiple Inline Radios (Big)

```html

<div class="fz-radio-grp--big">
	<label class="fz-radio-wrapper">
		<input class="fz-radio" type="radio" checked name="radio" value="kecil" />
		<div class="fz-radio-inner">
			<span class="fz-radio-graphic">
				<!-- Custom SVG / Font Awesome 4 or 5 glyphicon should go in here -->
				<!-- Works with Font Awesome 5 -->
				<i class="fa fa-mobile" aria-hidden="true"></i>
			</span>
			<p class="fz-radio-inner__title">
				Small
			</p>
			<p class="fz-radio-inner__subtitle">
				20 x 20 x 20 cm
			</p>
		</div>
	</label>
	<label class="fz-radio-wrapper">
		<input class="fz-radio" type="radio" name="radio" value="sedang" />
		<div class="fz-radio-inner">
			<span class="fz-radio-graphic">
				<!-- Custom SVG / Font Awesome 4 or 5 glyphicon should go in here -->
				<!-- Works with your custom inline SVG -->
				<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 322.7 261.28">
					<path d="M322.7,48.4,124,247.1h0l-14.18,14.18L0,151.46,48.48,103,109.9,164.4,274.3,0l48.4,48.4Z"/>
				</svg>
			</span>
			<p class="fz-radio-inner__title">
				Medium
			</p>
			<p class="fz-radio-inner__subtitle">
				30 x 25 x 20 cm
			</p>
		</div>
	</label>
	<label class="fz-radio-wrapper">
		<input class="fz-radio" type="radio" name="radio" value="besar" />
		<div class="fz-radio-inner">
			<span class="fz-radio-graphic">
				<!-- Custom SVG / Font Awesome 4 or 5 glyphicon should go in here -->
				<!-- Works with Font Awesome 4 -->
				<i class="fa fa-suitcase" aria-hidden="true"></i>
			</span>
			<p class="fz-radio-inner__title">
				Large
			</p>
			<p class="fz-radio-inner__subtitle">
				35 x 22 x 55 cm
			</p>
		</div>
	</label>
</div>

```

#### Labelled Checkbox

```html

<!-- With label -->
<div class="fz-checkbox-wrapper">
	<div class="fz-checkbox-label">
		With label (left)
	</div>
	<input class="fz-checkbox" id="business-logic-name-1" type="checkbox" />
	<label class="fz-checkbox-tick" for="business-logic-name-1">
		<!-- Tick element -->
	</label>
</div>

<!-- With label -->
<div class="fz-checkbox-wrapper">
	<input class="fz-checkbox" id="business-logic-name-2" type="checkbox" />
	<label class="fz-checkbox-tick" for="business-logic-name-2">
		<!-- Tick element -->
	</label>
	<div class="fz-checkbox-label">
		With label (right)
	</div>
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

#### Neutral

```html
	<!-- Font Awesome is needed for the caret icon -->
	<button type="button" class="fz-btn--neu">
		<i class="fa fa-caret-left" aria-hidden="true"></i> Sebelumnya (Button)
	</button>

	<a href="https://www.airfrov.com" class="fz-btn--neu">
		Sebelumnya (Anchor)
	</a>

```

#### Positive

```html
	<!-- Font Awesome is needed for the caret icon -->
	<button type="button" class="fz-btn--pos">
		Berikutnya (Button) <i class="fa fa-caret-right" aria-hidden="true"></i> 
	</button>

	<a href="https://www.airfrov.com" class="fz-btn--pos">
		Berikutnya (Anchor)
	</a>

```

#### Negative

```html
	<!-- Font Awesome is needed for the caret icon -->
	<button type="button" class="fz-btn--neg">
		<i class="fa fa-caret-left" aria-hidden="true"></i> Tidak (Button)
	</button>

	<a href="https://www.airfrov.com" class="fz-btn--neg">
		Tidak (Anchor)
	</a>

```

### Banners

#### Alert: Notice

```html

<div class="fz-banner--notice">
	<div class="fz-banner__icon">
	</div>
	<div class="fz-banner__copy">
		Ongkir bervariasi tergantung jarak dari lokasi Traveller yang memesan Go-Send dan akan dibayarkan oleh requester saat driver Gojek memberikan barang request
	</div>
</div>

```

#### Alert: Warning

```html

<div class="fz-banner--warning">
	<div class="fz-banner__icon">
	</div>
	<div class="fz-banner__copy">
		Ini tidak dapat lagi dilakukan pada versi aplikasi ini. Silahkan update aplikasi melalui App Store atau Google Play.
	</div>
</div>

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
			<i class="fa fa-caret-left"></i>
			Kembali ke Request
		</a>
		<h1 class="fz-page-title">
			<i class="fa fa-gift" aria-hidden="true"></i> Bantu Belikan
		</h1>
		<ul class="fz-steps-select" data-steps-id="demoForm">
			<li class="fz-step-title" data-step-nr="1">
				<div class="fz-step-nr-disc">
					<div class="fz-step-tick">
						<!-- Tick element and style is hidden when the parent element is `.fz-step-nr-disc`. -->
					</div>
					<div class="fz-step-nr">
						<!-- Step number is shown when the parent element is `.fz-step-nr-disc`. -->
						1
					</div>
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
				<div class="fz-step-nr-disc--done">
					<div class="fz-step-tick">
						<!-- Tick element and style is shown when the parent element class is `.fz-step-nr-disc&#8212;&#8212;done` signifiying a complete step in the multistep form. -->
					</div>
					<div class="fz-step-nr">
						<!-- Step number is hidden when the parent element is `.fz-step-nr-disc&#8212;&#8212;done` to make way for the tick in the sibling .fz-step-tick element. -->
						2
					</div>
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
		<div class="fz-steps-footer">
			Apakah produk ini boleh dibawa masuk ke Indonesia? Cek <a href="https://www.airfrov.com">FAQ</a> kami.
		</div>
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
			<!-- Step 1 -->
			<li class="fz-content-step" data-step-nr="1">
				<h3 class="fz-content-step__title">
					Detail Barang
				</h3>
				<hr />
				<!-- Special Handling -->
				<div class="fz-form-grp">
					<div class="fz-form-grp__name">
						<div class="fz-form-grp__name__title">
							Penanganan Khusus
						</div>
						<div class="fz-form-grp__name__deck">
							mudah basi, harus masuk kulkas, dll
						</div>
					</div>
					<div class="fz-form-grp__input">
						<div class=" fz-radio-grp--binary">
							<label class="fz-radio-wrapper">
								<input class="fz-radio" type="radio" checked name="handleWithCare" value="Yes" />
								<span class="fz-radio-inner">Ya</span>
							</label>
							<label class="fz-radio-wrapper">
								<input class="fz-radio" type="radio" name="handleWithCare" value="No" />
								<span class="fz-radio-inner">Tidak</span>
							</label>
						</div>
					</div>
				</div>
				<!-- End: Special Handling -->
				<hr />
				<!-- Weight -->
				<div class="fz-form-grp--multiline">
					<div class="fz-form-grp__name">
						<div class="fz-form-grp__name__title">
							Berat Barang
						</div>
					</div>
					<div class="fz-form-grp__input">
						<div class="fz-radio-grp">
							<label class="fz-radio-wrapper">
								<input class="fz-radio" type="radio" checked name="weight" value="1">
								<span class="fz-radio-inner">1 kilogram</span>
							</label>
							<label class="fz-radio-wrapper">
								<input class="fz-radio" type="radio" name="weight" value="2" />
								<span class="fz-radio-inner">2 kilogram</span>
							</label>
							<label class="fz-radio-wrapper">
								<input class="fz-radio" type="radio" name="weight" value="3" />
								<span class="fz-radio-inner">3 kilogram</span>
							</label>
							<label class="fz-radio-wrapper">
								<input class="fz-radio" type="radio" name="weight" value="4" />
								<span class="fz-radio-inner">4 kilogram</span>
							</label>
							<label class="fz-radio-wrapper">
								<input class="fz-radio" type="radio" name="weight" value="5" />
								<span class="fz-radio-inner">5 kilogram</span>
							</label>
						</div>
					</div>
				</div>
				<!-- End: Weight -->
			</li>
			<!-- End: Step 1 -->
			<!-- Step 2 -->
			<li class="fz-content-step" data-step-nr="2">
				Ringkasan Penawaran dan Detail
			</li>
			<!-- End: Step 2 -->
			<!-- Step 3 -->
			<li class="fz-content-step" data-step-nr="3">
				Detail Pengiriman
			</li>
			<!-- End: Step 3 -->
		</ul>
		<!-- End: .fz-content-steps -->
	</div>
	<!-- End: .fz-content-wrapper -->
</div>
<!-- End: .fz-multistep-form-wrapper -->

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