// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tim Brady
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const length = parseInt(document.getElementById('length-of-triangle').value)
  const width = parseInt(document.getElementById('width-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume + ' mm³'
}

