
(function() {
  function initStickyAd() {
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(function() {
      if (window.anchorSlot_2) return; // Prevent duplicate setup

      var anchorSlot_2 = window.googletag.defineOutOfPageSlot(
        '//23079347111/sticky',
        window.googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR
      );

      if (anchorSlot_2) {
        anchorSlot_2.addService(window.googletag.pubads());
      }

      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();
      window.googletag.display(anchorSlot_2);
    });
  }

  // Load GPT if not already loaded
  if (!window.googletag || !window.googletag.apiReady) {
    var gptScript = document.createElement('script');
    gptScript.async = true;
    gptScript.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
    gptScript.onload = initStickyAd;
    document.head.appendChild(gptScript);
  } else {
    initStickyAd();
  }
})();
