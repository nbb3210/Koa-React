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
    "globals": {
        "HOST": false,
    },
    "rules": {
        "jsx-a11y/href-no-hash": 0,
        "jsx-a11y/no-static-element-interactions":0,
        "react/prop-types": 0,
        "no-underscore-dangle": 0
    }
};