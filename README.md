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

- To use the library in the webpage, copy all of `/dist` and its contents to your own asset repository. Then just add a script tag linking to its location to the page where the `frizzy.min.js`.

To use the library in the webpage, add the script tag (mandatory) and stylesheet reference (optional, but recommended especially if multiple stylesheets are used in the document) as shown in the page of Airfrov website where Frizzy components are used.

```html
<head>
	<link rel="stylesheet" href="path/to/dist/frizzy.min.css" />
</head>
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

#### Classic Stacked Radios

Declaring `data-fz-radio-size` is optional. The default radio size is **18px**. Since `/frizzy.js` is only loaded once, changing this data attribute **after** the page is loaded will not change the radio size.

```html
	
<div class="fz-radio-wrapper" data-fz-radio-type="classic" data-fz-radio-size="18px">
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

Declaring `data-fz-radio-size` is optional. The default radio size is **25px**. Since `/frizzy.js` is only loaded once, changing this data attribute **after** the page is loaded will not change the radio size.

```html
	
<div class="fz-radio-wrapper" data-fz-radio-type="ticked" data-fz-radio-size="25px">
	<div class="fz-radio-label">
		Vegetarian
	</div>
	<input class="fz-radio" id="meal-selection__veg" type="radio" name="tickedRadioInputs" value="veg" />
	<label class="fz-radio-inner" for="meal-selection__veg">
		<!-- Tick element -->
	</label>
</div>

<div class="fz-radio-wrapper" data-fz-radio-type="ticked" data-fz-radio-size="50px">
	<input class="fz-radio" id="meal-selection__noveg" type="radio" name="tickedRadioInputs" value="nonveg" checked />
	<label class="fz-radio-inner" for="meal-selection__chicken">
		<!-- Tick element -->
	</label>
	<div class="fz-radio-label">
		Non-vegetarian (Chicken)
	</div>
</div>

<div class="fz-radio-wrapper" data-fz-radio-type="ticked" data-fz-radio-size="10px">
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

### Bookmark Checkbox

Declaring `data-fz-checkbox-size` is optional. The default checkbox size is **25px**. Since `/frizzy.js` is only loaded once, changing this data attribute **after** the page is loaded will not change the checkbox size.

```html

<div class="fz-checkbox-wrapper" data-fz-checkbox-type="bookmark" data-fz-checkbox-size="40px">
  <input class="fz-checkbox" type="checkbox" value="some_value" />
  <div class="fz-bookmark"></div>
</div>

```

### Inputs: File

#### Squared Image File Uploader

<ul>
  <li><code>class="fz-uploader"</code> - <b>Required</b></li>
  <li><code>data-fz-uploader-file-type="image"</code> - <b>Required</b></li>
  <li><code>data-fz-uploader-variant="squared__default"</code> - <b>Required</b></li>
  <li>
    <code>data-fz-upload-slots</code> - <b>Optional</b>. But if declared inside the <code>.fz-uploader</code> element:
    <ul>
      <li>
        In the <code>.fz-uploader</code> parent container, you <b>MUST</b> at least include a single <code>.fz-upload-slot</code> element.
        All inner contents will dynamically be replaced by script-pushed snippets based on the last <code>.fz-upload-slot</code> element.
      </li>
      <li>
        The <i>last</i> <code>.fz-upload-slot</code> element <b>SHOULD NOT</b> have attributes or properties, i.e. <code>id="..."</code> attribute, as the entire node element, including its attributes and properties, will be used to clone new upload slots.
      </li>
      <li>
        The <code>display</code> attribute of the CSSStyleDeclaration / style attribute of the <code>.fz-upload-slot</code> element <b>MUST NOT</b> be mutated further by the user agent. This attribute is used to determine if the upload slot is empty or occupied by an existing image when scanning all slots in the event an image is added or removed.
      </li>
    </ul>
  </li>
  <li>
    <code>data-fz-total-size-limit="8"</code>: <b>Optional.</b> In megabytes (1 MB = 10^6 bytes). If included, total size of all files allowed to be selected for upload in this <code>.fz-uploader</code> group is limited by the amount declared. This value <b>MUST NOT</b> be reassigned after the page is loaded.
  </li>
  <li>
    <code>data-fz-file-size-limit="0"</code>: <b>Optional.</b> In megabytes (1 MB = 10^6 bytes). Each file size allowed per input. This value <b>SHOULD NOT</b> be reassigned after the page is loaded.
  </li>
	<li>
    <code>data-fz-file-size-limit-cb="userDefinedCallbackAfterUploadForFileSize"</code> - 
    <b>Optional.</b> Where <code>userDefinedCallbackAfterUploadForFileSize</code> is a function can be declared by the user in the window scope to be invoked after attempting to set an uploaded file.
  </li>
  <li>
    <code>data-fz-total-size-limit-cb="userDefinedCallbackAfterUploadForTotalSize"</code> - 
    <b>Optional.</b> Where <code>userDefinedCallbackAfterUploadForTotalSize</code> is a function can be declared by the user in the window scope to be invoked after attempting to set an uploaded file.
  </li>
	<li>
		<code>data-fz-init-existing-files="initialiseExistingFilesDefinedByUser"</code> - <b>Optional.</b> Where <code>initialiseExistingFilesDefinedByUser</code> is a function that can be declared by the user in the window scope when initialising the uploader to initialise user-defined existing images (usually server-rendered) within the uploader for edit or update. This function <b>MUST BE</b> defined <b>before</b> declaring frizzy.js.
	</li>
	<li>
		<code>data-fz-rm-existing-file-cb="removeExistingFileCb"</code> - <b>Optional.</b> Where <code>removeExistingFileCb</code> is a function that can be declared by the user in the window scope to be invoked after removing an existing image declared by the user within <code>initialiseExistingFilesDefinedByUser</code>.
	</li>
</ul>

```js
function userDefinedCallbackAfterUploadForFileSize (uploader) {
  console.log(uploader.el); // the element where this function is declared in the element's data attribute, i.e. (.fz-uploader)
  console.log(uploader.size.file); // Size of the file in the upload attempt in MB
  console.log(uploader.size.max); // Size of file limit in MB
  console.log(uploader.size.exceeded); // Boolean if the latest file is within file size limit
}

function userDefinedCallbackAfterUploadForTotalSize (uploader) {
  console.log(uploader.el); // the element where this function is declared in the element's data attribute, i.e. (.fz-uploader)
  console.log(uploader.size.total); // Total size of all files including the file in upload attempt in MB
  console.log(uploader.size.max); // Size of total limit in MB
  console.log(uploader.size.exceeded); // Boolean if the total file size after latest file is less than total size limit
}


function initialiseExistingFilesDefinedByUser (uploader) {
  console.log(uploader.el); // the element where this function is declared in the element's data attribute, i.e. (.fz-uploader)
  const data = [
    {
      id: 1,
      type: "image",
      attributes: {
        src: "https://s3-ap-southeast-1.amazonaws.com/airfrovstg/2018-08-13_95291.8198321946.jpg",
        caption: "Tsum Tsum at Bugis Street and Malay Street junction"
      }
    },
    {
      id: 0,
      type: "image",
      attributes: {
        src: "https://s3-ap-southeast-1.amazonaws.com/airfrovstg/2016-11-21_37155518992438.jpg",
        caption: "Korean banana milk"
      }
    }
  ];
  return data;
}

function removeExistingFileCb (uploader) {
  console.log(uploader.el); // the parent uploader element where this function is declared in the element's data attribute, i.e. (.fz-uploader)
  console.log(uploader.slotEl); // the slot element where this function is declared in the element's data attribute
  console.log(uploader.slotEl.querySelector("img").dataset.fzExistingImageId); // Existing image ID
}
```

##### Default

```html
<div class="fz-uploader" data-fz-uploader-file-type="image" data-fz-uploader-variant="squared__default" data-fz-total-size-limit="8" data-fz-file-size-limit="2" data-fz-max-upload-slots="3" data-fz-file-size-limit-cb="userDefinedCallbackAfterUploadForFileSize" data-fz-total-size-limit-cb="userDefinedCallbackAfterUploadForTotalSize">
  <div class="fz-upload-slots">
    <!-- Below: Upload slot 1 -->
    <div class="fz-upload-slot">
      <div class="fz-upload-slot__placeholder">
        <div class="fz-upload-slot__placeholder__icon"></div>
        <div class="fz-upload-slot__placeholder__text">Upload image</div>
      </div>
      <input type="file" name="defaultDemoImages" accept="image/jpg,image/png,image/jpeg" />
      <div class="fz-upload-slot__preview-grp">
        <div class="fz-upload-slot__preview-wrapper">
          <img src="#" alt="Image Preview" />
        </div>
        <button class="fz-upload-slot__rm-img">
          <div class="fz-upload-slot__rm-img__icon"></div>
        </button>
      </div>
    </div>
    <!-- Above: Upload slot 1 -->
    <!-- Below: This upload slot will be used as a reference to clone when a new slot is populated if .data-fz-upload-slots is specified. -->
    <!-- Below: Upload slot 2 -->
    <div class="fz-upload-slot">
      <div class="fz-upload-slot__placeholder">
        <div class="fz-upload-slot__placeholder__icon"></div>
        <div class="fz-upload-slot__placeholder__text">Upload image</div>
      </div>
      <input type="file" name="defaultDemoImages" accept="image/jpg,image/png,image/jpeg" />
      <div class="fz-upload-slot__preview-grp">
        <div class="fz-upload-slot__preview-wrapper">
          <img src="#" alt="Image Preview" />
        </div>
        <button class="fz-upload-slot__rm-img">
          <div class="fz-upload-slot__rm-img__icon"></div>
        </button>
      </div>
    </div>
    <!-- Above: Upload slot 2 -->
    <!-- Above: This upload slot will be used as a reference to clone when a new slot is populated if .data-fz-upload-slots is specified. -->
  </div>
</div>
```

##### Captioned

Captions per each squared image.

```html
<div class="fz-uploader" data-fz-uploader-file-type="image" data-fz-uploader-variant="squared__captioned" data-fz-max-upload-slots="3" data-fz-file-size-limit-cb="userDefinedCallbackAfterUploadForFileSize" data-fz-total-size-limit-cb="userDefinedCallbackAfterUploadForTotalSize">
  <div class="fz-upload-slots">
    <!-- Upload slot 1 -->
    <div class="fz-upload-slot">
      <div class="fz-upload-slot__placeholder">
        <div class="fz-upload-slot__placeholder__icon"></div>
        <div class="fz-upload-slot__placeholder__text">Upload image</div>
      </div>
      <input type="file" name="captionedDemoImages" accept="image/jpg,image/png,image/jpeg"/>
      <div class="fz-upload-slot__preview-grp">
        <div class="fz-upload-slot__preview-wrapper">
          <img src="#" alt="Image Preview" />
        </div>
        <button class="fz-upload-slot__rm-img">
          <div class="fz-upload-slot__rm-img__icon"></div>
        </button>
      </div>
      <div class="fz-upload-slot__caption-grp">
        <input type="text" name="captionedDemoCaptions" value="" placeholder="Captions for the image" />
      </div>
    </div>
    <!-- End: Upload slot 1 -->
    <!-- Upload slot 2 -->
    <div class="fz-upload-slot">
      <div class="fz-upload-slot__placeholder">
        <div class="fz-upload-slot__placeholder__icon"></div>
        <div class="fz-upload-slot__placeholder__text">Upload image</div>
      </div>
      <input type="file" name="captionedDemoImages" accept="image/jpg,image/png,image/jpeg"/>
      <div class="fz-upload-slot__preview-grp">
        <div class="fz-upload-slot__preview-wrapper">
          <img src="#" alt="Image Preview" />
        </div>
        <button class="fz-upload-slot__rm-img">
          <div class="fz-upload-slot__rm-img__icon"></div>
        </button>
      </div>
      <div class="fz-upload-slot__caption-grp">
        <input type="text" name="captionedDemoCaptions" value="" placeholder="Captions for the image" />
      </div>
    </div>
    <!-- End: Upload slot 2 -->
  </div>
</div>
```

#### Comment

<ul>
  <li>
    <code>data-fz-comment-img-inner-html="Upload image"</code> - 
    Optional. Inner HTML for the text shown if an image is in preview
  </li>
  <li>
    <code>data-fz-comment-txt-inner-html="Upload image"</code> - 
    Required if <code>data-fz-comment-img-inner-html</code> is declared. Inner HTML for the text shown if an image is removed from preview.
  </li>
</ul>

```html
<div class="demo-container">
  <h4>Comment</h4>
  <ul>
    <li>
      <code>data-fz-comment-img-inner-html="Upload image"</code> - 
      Optional. Inner HTML for the text shown if an image is in preview
    </li>
    <li>
      <code>data-fz-comment-txt-inner-html="Upload image"</code> - 
      Required if <code>data-fz-comment-img-inner-html</code> is declared. Inner HTML for the text shown if an image is removed from preview.
    </li>
  </ul>
  <div class="fz-comment-grp">
    <textarea name="foobar" rows="3" cols="30" placeholder="Enter text here..."></textarea>
    <div class="fz-comment__cta">
      <div class="fz-uploader" data-fz-uploader-file-type="image" data-fz-uploader-variant="squared__comment" data-fz-file-size-limit="8" data-fz-file-size-limit-cb="userDefinedCallbackAfterUploadForFileSize" data-fz-total-size-limit-cb="userDefinedCallbackAfterUploadForTotalSize">
        <div class="fz-upload-slots">
          <!-- Upload slot 1 -->
          <div class="fz-upload-slot">
            <div class="fz-upload-slot__icon"></div>
            <input type="file" name="barfoo" accept="image/jpg,image/png,image/jpeg"/>
            <div class="fz-upload-slot__preview-grp">
              <div class="fz-upload-slot__preview-wrapper">
                <img src="#" alt="Image Preview" />
              </div>
              <button class="fz-upload-slot__rm-img">
                <div class="fz-upload-slot__rm-img__icon"></div>
              </button>
            </div>
          </div>
          <!-- End: Upload slot 1 -->
        </div>
      </div>
      <button class="fz-btn fz-comment__submit" data-fz-btn-variant="info" type="button" name="foobarfoo" data-fz-comment-img-inner-html="Upload image" data-fz-comment-txt-inner-html="Submit">
        Submit
      </button>
    </div>
  </div>
</div>
```

### Buttons

#### Header
##### Back

```html
	<!-- Font Awesome is needed for the caret icon -->
	<a class="fz-header-back-btn">
		<i class="fa fa-caret-left" aria-hidden="true"></i>
		Kembali ke Request
	</a>

```

#### Default
##### Neutral

```html
	<!-- Font Awesome is needed for the caret icon -->
	<button type="button" class="fz-btn" data-fz-btn-variant="neu">
		<i class="fa fa-caret-left" aria-hidden="true"></i> Sebelumnya (Button)
	</button>

	<a href="https://www.airfrov.com" class="fz-btn" data-fz-btn-variant="neu">
		Sebelumnya (Anchor)
	</a>

```

##### Primary

```html
	<!-- Font Awesome is needed for the caret icon -->
	<button type="button" class="fz-btn" data-fz-btn-variant="pri">
		<i class="fa fa-caret-left" aria-hidden="true"></i> View Dispute
	</button>

	<a href="https://www.airfrov.com" class="fz-btn" data-fz-btn-variant="pri">
		Penawaran dari Traveller
	</a>

```

###### Alternate

```html
	<!-- Font Awesome is needed for the caret icon -->
	<button type="button" class="fz-btn" data-fz-btn-variant="pri--alt">
		<i class="fa fa-caret-left" aria-hidden="true"></i> View Dispute
	</button>

	<a href="https://www.airfrov.com" class="fz-btn" data-fz-btn-variant="pri--alt">
		Penawaran dari Traveller
	</a>

```

##### Positive

```html
	<!-- Font Awesome is needed for the caret icon -->
	<button type="button" class="fz-btn" data-fz-btn-variant="pos">
		Berikutnya (Button) <i class="fa fa-caret-right" aria-hidden="true"></i> 
	</button>

	<a href="https://www.airfrov.com" class="fz-btn" data-fz-btn-variant="pos">
		Berikutnya (Anchor)
	</a>

```

##### Negative

```html
	<!-- Font Awesome is needed for the caret icon -->
	<button type="button" class="fz-btn" data-fz-btn-variant="neg">
		<i class="fa fa-caret-left" aria-hidden="true"></i> Tidak (Button)
	</button>

	<a href="https://www.airfrov.com" class="fz-btn" data-fz-btn-variant="neg">
		Tidak (Anchor)
	</a>

```

##### Info
###### Default

```html
	<!-- Font Awesome is needed for the caret icon -->
	<button type="button" class="fz-btn" data-fz-btn-variant="info">
		<i class="fa fa-caret-left" aria-hidden="true"></i> Tidak (Button)
	</button>

	<a href="https://www.airfrov.com" class="fz-btn" data-fz-btn-variant="info">
		Tidak (Anchor)
	</a>

```
###### Alternate

```html
	<!-- Font Awesome is needed for the caret icon -->
	<button type="button" class="fz-btn" data-fz-btn-variant="info--alt">
		<i class="fa fa-caret-left" aria-hidden="true"></i> Tidak (Button)
	</button>

	<a href="https://www.airfrov.com" class="fz-btn" data-fz-btn-variant="info--alt">
		Tidak (Anchor)
	</a>

```

#### Details
##### Neutral

```html
	<a class="fz-btn" data-fz-btn-variant="pri" data-fz-btn-type="details" href="#">
		<div class="fz-btn__icon">
			<!-- Custom SVG / Font Awesome 4 or 5 glyphicon should go in here -->
			<!-- Works with your custom inline SVG -->
			<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 322.7 261.28">
				<path d="M322.7,48.4,124,247.1h0l-14.18,14.18L0,151.46,48.48,103,109.9,164.4,274.3,0l48.4,48.4Z"/>
			</svg>
		</div>
		<div class="fz-btn__copy">
			View dispute
		</div>
		<div class="fz-btn__icon">
			<i class="fa fa-caret-right"></i>
		</div>
	</a>
	<button type="button" class="fz-btn" data-fz-btn-variant="pri" data-fz-btn-type="details">
		<div class="fz-btn__icon">
			<!-- Custom SVG / Font Awesome 4 or 5 glyphicon should go in here -->
			<!-- Works with your custom inline SVG -->
			<i class="fa fa-exclamation-circle">
			</i>
		</div>
		<div class="fz-btn__copy">
			View dispute
		</div>
		<div class="fz-btn__icon">
			<i class="fa fa-caret-right"></i>
		</div>
	</button>
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

## References

- [Webpack Loaders, CSS and Style Loaders](https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a)
