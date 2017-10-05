module.exports = {
    "env": {
        "browser": true
    },
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "rules": {
        "jsx-a11y/href-no-hash": 0,
        "react/prop-types": 0,
        "no-underscore-dangle": 0
    }
};