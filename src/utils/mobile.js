/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 * @returns {String}
 */
const getMobileOperatingSystem = () => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

/**
 * Determine if mobile platform.
 * This function returns boolean true or false
 * @returns {Boolean}
 */
const isMobilePlatform = () => {
  let isMobile = false;
  if (/Mobi/.test(navigator.userAgent)) {
    isMobile = true;
  }
  return isMobile;
};

export { getMobileOperatingSystem, isMobilePlatform };