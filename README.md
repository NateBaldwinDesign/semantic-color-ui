# Semantic Color UI
Testing the concept of true semantics in UI color application

========================

## Getting started
`gulp build` will compile sass
`gulp watch` will compile sass and watch for changes 

## How does it work?
1. Define your "Raw Materials" (hex values, etc.)
2. Assign semantics via Sass maps
3. Apply color to components using semantic colors.

## Why?
Colors, as with most sub-atomic design elements should be applied throughout the UI with *meaning*.

A structured, systematic use of semantics and affordances by design element will allow your UI to truly become a design *language*.

When the development is following semantic structure, designers and developers are more aligned with the purpose behind color application.

## Example of use
```scss
.button {
  background-color: semantic-color(neutral, light);
}

.button--error {
  background-color: semantic-color(negative, light);
}
```
Sometimes the HTML semantics are not 1:1 with each other. Naming your semantics broadly will allow you to encompass all instances that you would use the color. It also helps to remove confusion about whether your color is a design-owned semantic vs a code-specific semantic.
*For example:*

```scss
.input::invalid {
  border-color: semantic-color(negative, base);
}

.button--error {
  border-color: semantic-color(negative, base);
}
```
