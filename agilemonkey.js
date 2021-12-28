// ==UserScript==
// @name Leapfrog Agile Keyboard Shortcut
// @version 0.1
// @match https://agile.lftechnology.com/courses/*
// @author unN00b
// ==/UserScript==

(function() {
  'use strict';
  var btnNext = document.getElementsByClassName("sequence-nav-button button-next")[0];
  var btnPrev = document.getElementsByClassName("sequence-nav-button button-previous")[0];

  function getNextPage() {
    btnNext.click();
  }

  function getPrevPage() {
    btnPrev.click();
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key == "ArrowRight")
      getNextPage();
    if (e.key == "ArrowLeft")
      getPrevPage();
  });
})();
