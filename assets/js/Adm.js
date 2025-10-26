
(function() {
  // Load Google Publisher Tag script asynchronously
  var gptScript = document.createElement('script');
  gptScript.async = true;
  gptScript.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
  document.head.appendChild(gptScript);

  // Once the GPT script is loaded, initialize the sticky ad
  gptScript.onload = function() {
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(function() {
      // Define the sticky ad slot
      var anchorSlot_2 = window.googletag.defineOutOfPageSlot(
        '//23079347111/sticky',
        window.googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR
      );

      if (anchorSlot_2) {
        anchorSlot_2.addService(window.googletag.pubads());
      }

      // Enable single request architecture (SRA)
      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();

      // Display the sticky ad
      window.googletag.display(anchorSlot_2);
    });
  };
})();
