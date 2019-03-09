import React, { Fragment } from 'react'
import Highlight from '../components/Highlight'

export const data = [
  {
    id: 1,
    mark: 1,
    title: "Product name input",
    content: ["Should accept any characters."]
  },
  {
    id: 2,
    mark: 2,
    title: "Product price input",
    content: ["Should accept only numbers."]
  },
  {
    id: 3,
    mark: 3,
    title: "Toggle quantity buttons",
    content: [
      <Fragment>On <Highlight>click</Highlight> should decrease/increase product quantity.</Fragment>,
      <Fragment>Minimum value is <Highlight>1.</Highlight></Fragment>
    ]
  },
  {
    id: 4,
    mark: 4,
    title: "Icon selector",
    content: ["Should accept only numbers."]
  },
  {
    id: 5,
    mark: 5,
    title: "Add to cart button",
    content: [
      <Fragment>On <Highlight>click</Highlight> should add product item to the product list.</Fragment>,
      <Fragment>Button should be <Highlight>disabled</Highlight> if product name or product price is empty.</Fragment>
    ]
  },
  {
    id: 6,
    mark: 6,
    title: "Remove product button",
    content: [
      <Fragment>On <Highlight>click</Highlight> should remove product from product list.</Fragment>
    ]
  },
  {
    id: 7,
    mark: 7,
    title: "Link to separate product button",
    content: [
      <Fragment>On <Highlight>click</Highlight> should navigate user to <Highlight>/product/:id</Highlight> URL add render separate product item view.</Fragment>
    ]
  },
  {
    id: 8,
    mark: 8,
    title: "Toggle quantity buttons",
    content: [
      <Fragment>On <Highlight>click</Highlight> should decrease/increase current product quantity.</Fragment>
    ]
  },
  {
    id: 9,
    mark: 9,
    title: "Total price",
    content: ["Should calculate total products price."]
  },
  {
    id: 10,
    mark: 10,
    title: "Product item profile",
    content: ["Should render product icon and name."]
  },
  {
    id: 11,
    mark: 11,
    title: "Product item description",
    content: ["Should render product quantity, price and total price."]
  },
  {
    id: 12,
    mark: 12,
    title: "Back button",
    content: [
      <Fragment>On <Highlight>click</Highlight> should navigate user to the root <Highlight>/</Highlight> and render product list view.</Fragment>
    ]
  }
]