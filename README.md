# Suprematism Dropdown Image

An Angular 2 dropdown component with the selected item showcased with an image.


#### Installation
```bash
npm i -S CINBCUniversal/suprematism-dropdown-image
```
Until it is published to npm, point to github. A consequence of this is that
built files must be checked-in. When we publish to npm with `npm publish`,
there is a prehook to build the files and a posthook to delete them
(so only source files are saved in git). For now, after doing development,
we must manually run the publish prehook and save the files.


#### View
- [Hosted on Github Pages](https://cinbcuniversal.github.io/suprematism-dropdown-image/)
- Run the example locally with `npm run example`


## Components
- [`supre-dropdown-image`](#supre-dropdown-image)

#### <a id="supre-dropdown-image"></a> `supre-dropdown-image`
A component for a dropdown with showcased image.

##### Directives
- `supreDefault: string` - the default selected item
- `supreItems: Array<Item> - an array of items


##### Events
-  `itemSelected: Item` - the selected item


## States
The dropdown image component has these states:
- `open`
- `closed`
- `single`
- `multi`

Each dropdown item within it has these states:
- `active`
- `selected`


## Example
```html
<supre-dropdown-image supreDefault="Ford Motor Company" (itemSelected)="itemChanged($event)"
  [supreItems]="[
    { name: 'Applebees', image: '//upload.wikimedia.org/wikipedia/en/b/bc/Applebee%27s.svg' },
    { name: 'Barclays Bank', image: '//upload.wikimedia.org/wikipedia/en/7/7e/Barclays_logo.svg' },
    { name: 'Ford Motor Company', image: '//upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg' },
    { name: 'Toyota Inc', image: '//upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg' }
  ]"
></supre-dropdown-image>
```
