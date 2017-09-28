const getUrlParameter = (paramName) => {
  // paramName = paramName.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  // const regex = new RegExp('[\\?&]' + paramName + '=([^&#]*)');
  // let results = regex.exec(location.search);
  // return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));

  const url = window.location.href;
  paramName = paramName.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + paramName + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export { getUrlParameter };
