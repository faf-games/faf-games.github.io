

document.addEventListener("DOMContentLoaded", function () {
    // Create Fullscreen Button
    const button = document.createElement("button");
    button.id = "fullscreenButton";
    button.className = "fullscreen-btn";
    button.style.display = "none"; // Initially hidden
    button.innerHTML = `<i class="fas fa-expand"></i> Fullscreen`;
    button.onclick = function () {
        const game = document.getElementById("game-area");
        if (game) {
            if (game.requestFullscreen) {
                game.requestFullscreen();
            } else if (game.mozRequestFullScreen) {
                game.mozRequestFullScreen();
            } else if (game.webkitRequestFullscreen) {
                game.webkitRequestFullscreen();
            } else if (game.msRequestFullscreen) {
                game.msRequestFullscreen();
            }
        }
    };

    // Append button below game container
    const container = document.getElementById("loadgame");
    if (container) {
        container.parentNode.insertBefore(button, container.nextSibling);
    }

    // Observer or delay to show button after iframe loads
    const observer = new MutationObserver(function () {
        const iframe = document.getElementById("game-area");
        if (iframe) {
            document.getElementById("fullscreenButton").style.display = "inline-flex";
            observer.disconnect(); // Stop observing
        }
    });

    observer.observe(document.getElementById("loadgame"), { childList: true, subtree: true });
});



// Create and insert the async Funding Choices script
const fundingScript = document.createElement('script');
fundingScript.async = true;
fundingScript.src = "https://fundingchoicesmessages.google.com/i/pub-9427048641572074?ers=1";
fundingScript.setAttribute("nonce", "7M3TLdpr6ws84KtZqprB7Q");
document.head.appendChild(fundingScript);

// Create and insert the inline script
const inlineScript = document.createElement('script');
inlineScript.setAttribute("nonce", "7M3TLdpr6ws84KtZqprB7Q");
inlineScript.textContent = `
(function() {
  function signalGooglefcPresent() {
    if (!window.frames['googlefcPresent']) {
      if (document.body) {
        const iframe = document.createElement('iframe');
        iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
        iframe.style.display = 'none';
        iframe.name = 'googlefcPresent';
        document.body.appendChild(iframe);
      } else {
        setTimeout(signalGooglefcPresent, 0);
      }
    }
  }
  signalGooglefcPresent();
})();
`;
document.head.appendChild(inlineScript);







(function() {
  var script = document.createElement('script');
  script.src = "https://analytics.ahrefs.com/analytics.js";
  script.setAttribute("data-key", "YL5wznEh3STXlmF8Jc5rFA");
  script.async = true;
  document.head.appendChild(script);
})();

$(window).on('load', function () {
    // Initialize features
    initializePwaFeatures();
    initializeGoogleAnalytics();
    initializeProjectFilter();
});

// Initialize PWA Features
function initializePwaFeatures() {
    addManifestLink();
    registerServiceWorker();
    setupPwaInstallation();
}


// Set up Google Analytics
function initializeGoogleAnalytics() {
    const googleAnalyticsScript = document.createElement('script');
    googleAnalyticsScript.async = true;
    googleAnalyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=G-6BPGNZNTLZ";
    document.head.appendChild(googleAnalyticsScript);

    googleAnalyticsScript.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-6BPGNZNTLZ');
        console.log('Google Analytics initialized.');
    };
}


// Track events in Google Analytics
function trackEvent(action, category, label, value) {
    if (typeof gtag === 'function') {
        gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
        console.log(`Event tracked: ${action}, ${category}, ${label}, ${value}`);
    } else {
        console.warn('gtag not initialized. Event not tracked:', action);
    }
}

// Initialize project filter
function initializeProjectFilter() {
    const $container = $('.projectContainer');
    $('.projectFilter a').on('click', function () {
        $('.projectFilter .current').removeClass('current');
        $(this).addClass('current');
        const selector = $(this).attr('data-filter');
        requestAnimationFrame(() => {
            if ($container.length) {
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
            }
        });
        console.log('Project filter applied:', selector);
        return false;
    });
}
