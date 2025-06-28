function loadMainGame() {
    // 1. Create the game iframe
    var iframeHTML = `<iframe class="game-iframe iframeloader" id="game-area" src="https://faf-games.github.io/game/pacman/" width="480" height="800" scrolling="none" frameborder="0" allowfullscreen="" tabindex="0"></iframe>`;
    // 2. Create the fullscreen button HTML
    var fullscreenBtnHTML = `
        <button id="fullscreenButton" class="fullscreen-btn" style="display:inline-flex; margin-top:18px;" onclick="open_fullscreen()">
            <i class="fas fa-expand"></i> Fullscreen
        </button>
    `;
    // 3. Set the inner HTML of the game area container
    document.getElementById("loadgame").innerHTML = iframeHTML + fullscreenBtnHTML;

    // 4. Scroll the game into view
    document.getElementById('loadgame').scrollIntoView();
}
function open_fullscreen() {
    var iframe = document.getElementById('game-area'); // Match your iframe ID
    if (!iframe) {
        alert('Game frame not found!');
        return;
    }
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    } else {
        alert('Fullscreen is not supported in this browser.');
    }
}





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
  // Create <link> element
  var link = document.createElement("link");
  link.rel = "dns-prefetch";
  link.href = "https://universal.wgplayer.com";

  // Create <script> element
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.fetchPriority = "high";
  script.src = "https://universal.wgplayer.com/tag/?lh=" + window.location.hostname +
               "&wp=" + window.location.pathname +
               "&ws=" + window.location.search;

  // Append to <head>
  var head = document.getElementsByTagName("head")[0];
  if (head) {
    head.appendChild(link);
    head.appendChild(script);
  }
})();




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

// Dynamically add the manifest link
function addManifestLink() {
    const manifestLink = document.createElement('link');
    manifestLink.rel = 'manifest';
    manifestLink.href = '/manifest.json'; // Ensure manifest.json exists in the root
    document.head.appendChild(manifestLink);
    console.log('Manifest added:', manifestLink.href);
}

// Register the service worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
                trackEvent('PWA_service_worker', 'Service Worker', 'Registered', 1);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
                trackEvent('PWA_service_worker', 'Service Worker', 'Failed', 0);
            });
    } else {
        console.warn('Service Worker not supported in this browser.');
        trackEvent('PWA_service_worker', 'Service Worker', 'Not Supported', 0);
    }
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

// Set up PWA installation prompt
function setupPwaInstallation() {
    let deferredPrompt;
    const isPwaInstalled = localStorage.getItem('pwaInstalled');

    if (!isPwaInstalled && !isMobileDevice()) {
        const popupHTML = `
            <div id="pwa-popup" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.8); color: #333; text-align: center; z-index: 1000; display: flex; align-items: center; justify-content: center;">
                <div style="padding: 25px; background: #f5f5f5; border-radius: 20px; width: 90%; max-width: 450px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); text-align: center;">
                    <h2 style="font-size: 22px; margin-bottom: 15px; color: #2c3e50;">Install Our App for a Faster, Seamless Experience!</h2>
                    <button id="install-button" style="padding: 12px 28px; font-size: 18px; cursor: pointer; background: #7f2525; color: white; border: none; border-radius: 30px;">Add to Home Screen</button>
                    <button id="close-popup" style="padding: 12px 28px; font-size: 18px; cursor: pointer; background-color: transparent; color: #888; border: none; border-radius: 30px;">Not Now</button>
                </div>
            </div>
        `;
        $('body').append(popupHTML);

        const popup = $('#pwa-popup');
        const installButton = $('#install-button');
        const closePopupButton = $('#close-popup');

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            popup.show();
            console.log('beforeinstallprompt event triggered');
            trackEvent('PWA_prompt', 'PWA', 'Prompt Displayed', 1);
        });

        installButton.on('click', () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('PWA installation accepted');
                        trackEvent('PWA_installation', 'PWA', 'Accepted', 1);
                        localStorage.setItem('pwaInstalled', 'true');
                    } else {
                        console.log('PWA installation dismissed');
                        trackEvent('PWA_installation', 'PWA', 'Dismissed', 0);
                    }
                    deferredPrompt = null;
                    popup.hide();
                }).catch(error => {
                    console.error('Error during PWA installation:', error);
                });
            }
        });

        closePopupButton.on('click', () => {
            popup.hide();
            console.log('PWA popup closed.');
            trackEvent('PWA_prompt', 'PWA', 'Closed', 0);
        });

        window.addEventListener('appinstalled', () => {
            console.log('PWA installed successfully.');
            trackEvent('PWA_installation', 'PWA', 'Successful', 1);
            localStorage.setItem('pwaInstalled', 'true');
            popup.hide();
        });
    } else {
        console.log('PWA is already installed or device is mobile.');
    }
}

// Detect mobile devices
function isMobileDevice() {
    return window.matchMedia("(max-width: 767px)").matches || /Mobi|Android/i.test(navigator.userAgent);
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
