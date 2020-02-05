## Set Up

Go to [Cloudinary](https://cloudinary.com/) and create an account
Preserve CloudName, ApiSecret, ApiKey

Using VSCode console go to /API folder and
set user secrets for JWT token and Cloudinary API credentials:

`dotnet user-secrets set "TokenKey" "some-value"`

`dotnet user-secrets set "Cloudinary:CloudName" "some-value"`

`dotnet user-secrets set "Cloudinary:ApiSecret" "some-value"`

`dotnet user-secrets set "Cloudinary:ApiKey" "some-value"`

## Launching

Using VSCode console go to /API folder and run command:

`dotnet watch run`

Go to /client-app folder and run commands:

`npm install`

`npm start`
