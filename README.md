# Introduction

This repo contains tests for Makersights web application. In this repo we have used Page Object Model.

# Requirements

Playwright 1.36.0
Node.JS v18.16.1
Visual Code

# Installation 

- use following link to install node.js

https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac

- use following link to install playwright

https://playwright.dev/docs/intro

- Install Playwright Runner and Playwright Test for VScode extensions in visual code

# How to Run Tests

- You can run singlle test file from terminal using following command

npx playwright test filename.spec.js 

- To run specific test case use test.only format in the spec file

- To run all tests use following command

npx playwright tests

- All the tests can be run from the test explorer as well


# How to Debug Tests

- To debug tests use following command in terminal, you can debug using playwright inspector

npx playwright test filename.spec.js --debug
