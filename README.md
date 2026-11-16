# Chevanth Vijay Portfolio

Plain HTML, CSS and JavaScript. No build step, no backend, no installs.

## Run it
1. Open the folder in VS Code and install the **Live Server** extension.
2. Right-click `index.html` and choose **Open with Live Server**.
   (Or open `index.html` directly in a browser. Fonts need internet.)

## Folder map
```
index.html              page structure and text (About, Contact, etc.)
css/style.css           all styling and colours (variables at the top)
js/data.js              reels, clients, projects, testimonials (EDIT THIS)
js/main.js              loader, scroll animations, filters, gallery
assets/images/profile.jpg           your portrait (already added)
assets/images/posters/poster-01.jpg ... poster-10.jpg
assets/images/reels/                reel thumbnails
assets/images/clients/              optional client logos
```

## Replace your portrait
Save your photo as `assets/images/profile.jpg` (replace the existing file). Best size: 4:5 portrait, about 900 x 1125 px, under 300 KB.

## Add poster images
Put 10 images in `assets/images/posters/` named exactly `poster-01.jpg` to `poster-10.jpg`. Use the same 4:5 ratio (for example 1080 x 1350 px) and keep each under 400 KB. Empty slots show a dotted placeholder with the filename. Clicking a poster opens a viewer (arrow keys and Esc work).

## Add Instagram Reels
Open `js/data.js` and edit or copy a block in `videos`:
```js
{ title: "Diwali offer reel", url: "https://www.instagram.com/reel/XXXXXXXX/",
  thumb: "assets/images/reels/reel-01.jpg",
  category: "Video Editing & Reels", description: "One line about the reel." },
```
Save a screenshot or cover image as the thumbnail in `assets/images/reels/`. Clicking the card opens the Reel on Instagram. A blank `url` shows an empty slot.

## Add clients
In `js/data.js`, add to `clients`:
```js
{ name: "Business name", place: "City", work: "What you made for them.", logo: "assets/images/clients/name.png" }
```
`logo` is optional. Only add real clients, and get permission before using a logo.

## Add or edit projects
In `js/data.js`, add to `projects`. `cat` must match one of the five names in `categories` so the filter buttons work. `link` is optional.

## Testimonials
Add real ones to `testimonials` in `js/data.js`. Until then the block stays hidden and the "How we'll work together" steps show instead.

## Edit text, colours, contact
- About text, availability and contact details: `index.html`
- Services and software lists: top of `js/main.js` (`SV` and `SOFT`)
- Colours: the `:root` variables at the top of `css/style.css`
- Software icons are simple built-in marks. To use official artwork, download it from each brand's asset page and swap it in `SOFT`.

## Deploy (free)
- **Netlify:** go to app.netlify.com/drop and drag the whole folder in. You get a live link in seconds.
- **GitHub Pages:** push the folder to a GitHub repo, then Settings > Pages > Deploy from branch `main`, folder `/ (root)`.
- **Vercel:** import the repo, framework "Other", no build command.
A custom domain costs roughly 700 to 1,500 INR per year.

## About an admin dashboard
This site has no admin login, on purpose: a password in front-end code is not secure. You update content by editing `js/data.js`, which is free and safe. A real dashboard would need a backend (for example Supabase or Firebase) and can be added later if you need it.
