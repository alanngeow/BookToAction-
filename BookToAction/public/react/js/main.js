/*
================================================
Main Client JavaScript File

This file handles browser-side behavior.

We use jQuery to simplify DOM manipulation.
================================================
*/

$(document).ready(function(){

  /*
  Character Counter Example

  This helps users see how many characters
  they have typed in their notes.
  */

  $("#notes").on("input", function(){

    const length = $(this).val().length;

    $("#charCount").text(length + " characters");

  });

});