# 🎂 Happy Birthday Babie! 💕

## Welcome to Babieboo - A Romantic Birthday Website

This is a special romantic website created to celebrate **Babie's 27th Birthday on June 16th**!

---

## 🌟 Features

✨ **Three Beautiful Tabs:**
- **Home** - Countdown timer and greeting
- **Gallery** - Beautiful photo collection (15 photos)
- **Love Letter** - Open the envelope to read your love letter + Spotify embed

💖 **Interactive Elements:**
- 🎯 Countdown timer to June 16th
- 💌 Clickable envelope to reveal love letter
- 🎉 Confetti animations
- 📸 Photo gallery with 15 slots
- 🎵 Spotify music player embed
- 🎨 Romantic color scheme (red, pink, purple, gold)
- ✨ Random photos scattered throughout pages
- 💕 Floating heart animations

---

## 📋 How to Add Your Content

### 1. **Add Your Love Letter**

Open `index.html` and find this section:

```html
<!-- ⭐ PASTE YOUR MESSAGE HERE ⭐ -->
<p>
    [INSERT YOUR LOVE LETTER HERE]
    
    Write your heartfelt message, memories, and reasons why you love her.
    You can make it as long or short as you'd like!
</p>
<!-- ⭐ END OF MESSAGE AREA ⭐ -->
```

Replace the placeholder text with your personal love letter!

---

### 2. **Add Your 15 Photos**

#### Option A: Using Image URLs (Easiest)
1. Upload your 15 photos to an online service (Google Drive, Imgur, or a cloud service)
2. Get the direct image links
3. In `index.html`, find the Gallery section:

```html
<div class="gallery-item"><div class="photo-placeholder">Photo 1</div></div>
```

Replace each line with:

```html
<div class="gallery-item">
    <img src="YOUR_IMAGE_URL_HERE" alt="Photo 1" style="width: 100%; height: 250px; object-fit: cover;">
</div>
```

#### Option B: Upload Photos to Repository
1. Create a folder called `photos` in your repository
2. Upload your 15 photos there
3. Update the gallery links to:

```html
<div class="gallery-item">
    <img src="photos/photo1.jpg" alt="Photo 1" style="width: 100%; height: 250px; object-fit: cover;">
</div>
```

---

### 3. **Add Random Photos Throughout the Site**

Find these sections in `index.html`:

- `<div class="random-photo-placeholder">Photo 1</div>` (in Home tab)
- `<div class="random-photo-placeholder">Photo 1</div>` (in Love Letter tab)

Replace them with:

```html
<img src="YOUR_IMAGE_URL" alt="Photo" style="width: 100%; height: 200px; object-fit: cover; border-radius: 15px;">
```

---

### 4. **Add Spotify Music**

Find this section in `index.html`:

```html
<div class="spotify-placeholder">
    [SPOTIFY EMBED WILL GO HERE]
</div>
```

**To get Spotify embed code:**
1. Go to [Spotify](https://open.spotify.com)
2. Find the song you want
3. Click the three dots (•••) → "Share" → "Embed Track"
4. Copy the embed code
5. Replace the placeholder with your embed code

Example:
```html
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/YOUR_TRACK_ID?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
```

---

## 🚀 Deploy to GitHub Pages

1. Make sure your repository is **PUBLIC** (Settings → Change visibility)
2. Go to **Settings → Pages**
3. Under "Source," select `main` branch and `/root` folder
4. Click **Save**
5. Your site will be live at: `https://valentinmose-sudo.github.io/Babieboo/`

Wait a few minutes for GitHub to build and deploy! 🌐

---

## 🎨 Customize Colors

Open `style.css` and find the color definitions:

```css
body {
    background: linear-gradient(135deg, #1a0033 0%, #330066 25%, #660099 50%, #990066 75%, #cc0066 100%);
}
```

Edit the hex color codes (#1a0033, #330066, etc.) to change the theme!

---

## 📱 Mobile Responsive

The website is fully responsive and works great on:
- Desktop
- Tablets
- Mobile phones

---

## 🎉 Features Breakdown

| Feature | Description |
|---------|-------------|
| **Countdown** | Live countdown to June 16th |
| **Envelope** | Click to reveal your love letter |
| **Gallery** | Beautiful grid of 15 photos |
| **Confetti** | Celebration animation when opening letter |
| **Music** | Embedded Spotify player |
| **Responsive** | Works on all devices |
| **Romantic Theme** | Red, pink, purple, gold colors |

---

## 💡 Tips

- Make sure image URLs don't have spaces
- Test your site on mobile before sending
- Keep love letter text personal and heartfelt
- Choose high-quality photos
- Test the Spotify embed works

---

## 🎂 Made with ❤️ for Babie

Happy 27th Birthday! This website is a celebration of your special day.

---

## 📞 Need Help?

If you need to modify anything:
1. Edit the files in your repo
2. Commit your changes
3. GitHub Pages will automatically update within minutes

Enjoy! 💕✨
