
# `Firebase Host`
* instruction: console > Build > Hosting >Get Started

## one time for each computer
```
npm install -g firebase-tools
firebase login (y)
```
## if need to reauth
```
firebase login --reauth
```

## for every project
### NB: space bar press করলে সিলেক্ট/ আনসিলেক্ট হবে। 
* 1. firebase init (y)
     
* 2. Are you ready to proceed? y
* 3. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
* 4. Use an existing project [project select এর অপশন আসবে। firebase এ ঢুকে address bar এক লিংক এর সাথে একটা আইডি থাকে সেটার সাথে মিল রেখে সঠিক অপশন  select করে enter চাপতে হবে]
* 5. What do you want to use as your public directory? (public) ans: build
* 6. Configure as a single-page app (rewrite all urls to /index.html)? ans : y
* 7. Set up automatic builds and deploys with GitHub? ans: n
* 8. npm run build
* 9. firebase deploy
### এখানেই লাইভ হোস্টিং লিংক পাওয়া যাবে। 
## Remind that if make any modified
```
    npm run build
    firebase deploy
```


# `Vercel Host`
### You have to check first
* `in pakage.json` "scripts": {"build": "index.js"},
* have you `.env` file? It should be create when connect mongodb
* create a file named `vercel.json`
```
{
    "version": 2,
    "builds": [
        {
            "src": "./index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/"
        }
    ]
}
```
* write `.vercel` in `.gitignore`
## go to `cmd`
* command `vercel`,  if first time [`npm i -g vercel`]

* 1. Set Up and deploy: y enter
* 2. Which Scope do you want to deploy to? : [এখানে এক বা একাধিক একাউন্ট লগিন থাকে, যদি একটা থাকে শুধু এন্টার মারতে হবে]
* 3. Link to existing project? n [এর আগেও ডিপ্লয় করেছি কিনা (n) নাকি আগেও করে রেখেছিলাম যাষ্ট চেঞ্জ করতে চাই (y)]
* 4. What's Your projects name? [enter or edit][যে নামটি শো করছে সেটি দিতে চাইলে press `enter`,Otherwise `edit`]
* 5. In which directory is your code located? press `enter ` [মানে যে ফোল্ডারটি আছে সেই ফোল্ডারটিই কিনা]
--- uploading
* 6. go to vercel website and select the project and click it
* 7. go to setting > `Environment Variables`,
* 8. setup all key value pair from `.env`
* 9. LAST: goto client site and replace  the url instead all of `http://localhost:5000`

# `Redirect AFTER Login-1:` [Click Here:69-2](https://web.programming-hero.com/web-6/video/web-6-69-2-recap-auth-redirect-after-successful-login)


# Documentation
* [Read About Axios](https://axios-http.com/docs/intro)
* [Read about JWT](https://jwt.io/introduction)

