function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

function showNavigatorInfo() {
    alert(`Navigator Info:\nApp Name: ${navigator.appName}\nProduct: ${navigator.product}\nApp Version: ${navigator.appVersion}\nUser Agent: ${navigator.userAgent}\nPlatform: ${navigator.platform}\nLanguage: ${navigator.language}`);
}

function showWindowInfo() {
    alert(`Window Info:\nInner Height: ${window.innerHeight}\nInner Width: ${window.innerWidth}`);
}

function showScreenInfo() {
    alert(`Screen Info:\nWidth: ${screen.width}\nHeight: ${screen.height}\nAvailable Width: ${screen.availWidth}\nAvailable Height: ${screen.availHeight}\nColor Depth: ${screen.colorDepth}\nPixel Depth: ${screen.pixelDepth}`);
}

function showLocationInfo() {
    alert(`Location Info:\nHref: ${window.location.href}\nHostname: ${window.location.hostname}\nPathname: ${window.location.pathname}\nProtocol: ${window.location.protocol}`);
}

function showGeolocationInfo() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            alert(`Geolocation Info:\nLatitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
