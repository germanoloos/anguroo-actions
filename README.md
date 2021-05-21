<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/germanoloos/anguroo-actions.git
   ```
2. Install NPM packages
   ```sh
   npm install
   cd ./types/frontend
   npm install
   ```


<!-- USAGE EXAMPLES -->
### Frontend Build Stack Execution

* Run in directory './types/frontend'

## Base64 Input
   ```sh
   npm start -- eyJsb2dzIjpbIlN0YXJ0aW5nIGNyZWF0aW9uIG9mIGFuZ3Vyb28td2ViLi4uIl0sImZpbmlzaGVkIjpmYWxzZSwidXJsIjpudWxsLCJuYW1lIjoiYW5ndXJvby13ZWIiLCJ0eXBlIjoiZnJvbnRlbmQiLCJmcmFtZXdvcmsiOnsibmFtZSI6ImFuZ3VsYXIiLCJwcm9wcyI6eyJwcmVmaXgiOiJhcHAiLCJhbmd1bGFyTWF0ZXJpYWwiOnRydWUsInN0eWxlc2hlZXQiOiJTQ1NTIiwiYm9vdHN0cmFwIjp0cnVlLCJqcXVlcnkiOnRydWUsIm5neE1hc2siOnRydWV9fSwiaWQiOiJqSjhtRjIzeGhjSjVDQmZUOVdZVCJ9
   ```

## Express server for API Rest
   ```sh
   npm run serve
   ```

* Post example to route

# http://localhost:666/create-project

   ```sh
   {
    "id": "jJ8mF23xhcJ5CBfT9WYT",
    "name": "anguroo-web",
    "type": "frontend",
    "framework": {
        "name": "angular",
        "props": {
            "prefix": "app",
            "angularMaterial": true,
            "stylesheet": "SCSS",
            "bootstrap": true,
            "jquery": true,
            "ngxMask": true
            }
        }
    }
   ```

