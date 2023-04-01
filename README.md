# Scryfall-Data-Custom-Function-in-Google-Sheets
Custom Function (Google Sheets) to Import Scryfall Data (Magic: The Gathering)

## 1. What's Scryfall?
https://scryfall.com/

## 2. Setup
### 2.1. Create a custom function in Google Sheets
https://developers.google.com/apps-script/guides/sheets/functions

## 3. Examples
### 3.1. Search for "Blac Lo" without setting a parameter to return all information.
```
=scryfall("black lo")
```

![Scryfall](https://user-images.githubusercontent.com/66874303/229307460-ecc308c1-17e5-42d9-b5fa-6506c192a0a3.PNG)

### 3.2. Search for "Blac Lo" with a parameter ("price") to return the cards price in €.
```
=scryfall("black lo"; "price")
```

![Scryfall2](https://user-images.githubusercontent.com/66874303/229307599-829c3ea0-1e6a-4d1c-8ee1-a78f2686fa71.PNG)
