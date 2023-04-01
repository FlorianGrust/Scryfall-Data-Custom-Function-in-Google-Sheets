/**
 * Returns Card Information (Name / Price (€) / URL to Scryfall) based on a name search string.
 *
 * @param {String} QUERY Search String (e.g. "Black Lotus" or "Black Lo")
 * @param {String} PARAMETER [Optional] Defines what to return: "name" / "price" / "url"
 * @customfunction
 */

function scryfall(QUERY, PARAMETER) {

  var QUERY = String(QUERY).toLowerCase();
  var PARAMETER = String(PARAMETER).toLowerCase(); 

  var http_response = UrlFetchApp.fetch("https://api.scryfall.com/cards/named?fuzzy=" + QUERY);
  var api_data = JSON.parse(http_response.getContentText());

  switch (PARAMETER) {
    case 'name':
      var output = String(api_data['name']);
      break;
    case 'price':
      var output = Number(api_data['prices']['eur']);
      break;
    case 'url':
      var output = String(api_data['scryfall_uri']);
      break;
    default:
      var output = [[
        String(api_data['name']),
        Number(api_data['prices']['eur']),
        String(api_data['scryfall_uri'])
      ]];
  }
  
  return output;

}
