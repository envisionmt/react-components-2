export function useDeviceDownload() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone';
  }

  if (/android/i.test(userAgent)) {
    window.open('https://play.google.com/store/apps/details?hl=en&id=com.envision.envision');
    return 'Android';
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.open('https://apps.apple.com/us/app/envision-video-art/id943637063');
    return 'iOS';
  }

  return 'unknown';
}
