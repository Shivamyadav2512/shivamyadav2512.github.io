# Valentine's Day Interactive Website 💕

A whimsical, interactive website created to express your love! This website features an animated love letter, photo gallery, relationship timeline, and a fun memory matching game.

## 🌟 Features

1. **Landing Page** - Four interactive cards with floating heart animations
2. **Love Letter** - Envelope opening animation with typewriter effect
3. **Photo Gallery** - Responsive carousel with lightbox view
4. **Timeline** - Scroll-triggered relationship milestones
5. **Memory Game** - Fun matching game with victory animation

## 🎨 Customization Guide

### 1. Customize the Love Letter

**File:** `love-letter.html`

Find the letter content section (around lines 22-31) and replace the text with your own heartfelt message:

```html
<h2>My Dearest Valentine,</h2>
<p class="letter-line">Your custom message here...</p>
<p class="letter-line">Another line of your love letter...</p>
<!-- Add or remove lines as needed -->
<p class="letter-signature">All my love,<br>Your Name 💕</p>
```

**Tips:**
- Each `<p class="letter-line">` creates a new line that animates separately
- Add as many lines as you want
- Emojis are supported and encouraged! ❤️💕✨

### 2. Add Your Photos to Gallery

**Step 1:** Add your photos to the `images/` folder
- Recommended size: 800x600px or similar ratio
- Supported formats: JPG, PNG, GIF
- Name them descriptively (e.g., `first-date.jpg`, `beach-sunset.png`)

**Step 2:** Update `gallery.html` (around lines 18-50)

Replace the placeholder divs with actual images:

```html
<!-- BEFORE (placeholder) -->
<div class="placeholder-image">
    <span class="placeholder-icon">📷</span>
    <p>Replace with your photo</p>
</div>

<!-- AFTER (with your photo) -->
<img src="images/your-photo.jpg" alt="Description" style="width: 100%; height: 400px; object-fit: cover; border-radius: 15px;">
```

Update the caption:
```html
<p class="slide-caption">Your custom caption here</p>
```

**To add more slides:**
Simply copy an entire `<div class="carousel-slide">` block and paste it before the closing `</div>` of `carousel-track`.

### 3. Customize the Timeline

**File:** `timeline.html`

Each timeline item now includes a photo placeholder! Find the timeline items (starting around line 18) and customize each milestone:

```html
<div class="timeline-item timeline-left" data-animate="left">
    <div class="timeline-content">
        <div class="timeline-image">
            <span class="timeline-placeholder">📷</span>
            <p class="timeline-image-hint">Add photo</p>
        </div>
        <div class="timeline-date">🌟 Your Date or Label</div>
        <h3>Event Title</h3>
        <p>Description of this special moment in your relationship.</p>
    </div>
</div>
```

**To add photos to timeline items:**

Replace the placeholder div with an actual image:

```html
<!-- BEFORE (placeholder) -->
<div class="timeline-image">
    <span class="timeline-placeholder">📷</span>
    <p class="timeline-image-hint">Add photo</p>
</div>

<!-- AFTER (with your photo) -->
<div class="timeline-image">
    <img src="images/first-meeting.jpg" alt="First Meeting">
</div>
```

**Tips:**
- Add your photos to the `images/` folder first
- Alternate between `timeline-left` and `timeline-right` for visual variety
- Change the emoji in `timeline-date` to match the event (🌟💕🎉🌈✨)
- Photos are automatically cropped to fit nicely (200px height)
- Add or remove timeline items as needed
- Keep descriptions concise but meaningful

**To add a timeline item:**
Copy an entire `<div class="timeline-item">` block and paste it in the timeline section.

### 4. Customize Colors

**File:** `styles.css`

The color scheme uses these main colors:

```css
/* Main pink: #ff6b9d */
/* Secondary purple: #9b6b9e */
/* Light pink: #ffd6e8 */
/* Light purple: #e8d5f2 */
/* Light blue: #d4e8fc */
```

To change the color scheme:
1. Search for these hex codes in `styles.css`
2. Replace with your preferred colors
3. Keep the contrast readable (light backgrounds with darker text)

### 5. Add Background Music (Optional)

**Step 1:** Add an audio file to the `valentine/` folder
- Recommended format: MP3
- Keep file size reasonable (<5MB)
- Name it `background-music.mp3`

**Step 2:** Add this code to `script.js` (at the bottom):

```javascript
// Create audio element
const audio = new Audio('background-music.mp3');
audio.loop = true;
audio.volume = 0.3; // 30% volume

// Update music toggle
const musicBtn = document.getElementById('musicBtn');
if (musicBtn) {
    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicBtn.textContent = '🔇';
        } else {
            audio.pause();
            musicBtn.textContent = '🎵';
        }
    });
}
```

### 6. Personalize the Landing Page

**File:** `index.html`

Update the welcome message (lines 12-13):

```html
<h1 class="fade-in">Your Custom Title! 💕</h1>
<p class="subtitle fade-in-delay">Your custom subtitle...</p>
```

Change card titles and descriptions (lines 16-46):
```html
<h3>Your Card Title</h3>
<p>Your card description</p>
```

### 7. Update Memory Game Symbols

**File:** `script.js`

Find the `cardSymbols` array (around line 157):

```javascript
const cardSymbols = ['💕', '💖', '💗', '💝', '💓', '💘', '❤️', '💞'];
```

Replace with your own emojis or even short text. You can also use photo pairs by changing the card back content to use `<img>` tags instead.

## 📱 Mobile Responsive

The website is fully responsive and works beautifully on:
- Desktop computers
- Tablets
- Mobile phones (iOS and Android)

## 🚀 Deployment

This website is already in your GitHub Pages repository! To access it:

1. **Local Testing:** Open `valentine/index.html` in your browser
2. **Live URL:** `https://yourdomain.github.io/valentine/`

After customizing, commit and push your changes:

```bash
git add valentine/
git commit -m "Customize Valentine's website"
git push origin master
```

Your changes will be live in a few minutes!

## 💡 Tips for the Best Experience

1. **Test on Mobile:** Make sure to test on your phone - she'll probably view it there!
2. **Proofread Everything:** Check all text for typos before sharing
3. **Optimize Photos:** Use a tool like TinyPNG to compress images if needed
4. **Personal Touch:** The more personal and specific your messages, the better
5. **Timing:** Share the link at the perfect moment! 💝

## 🎁 Sharing the Website

You can share the link in several ways:
- Text message with the URL
- QR code (generate at qr-code-generator.com)
- Handwritten note with the URL
- Social media (if you want it public)

## 🐛 Troubleshooting

**Images not showing:**
- Check that image paths are correct (case-sensitive!)
- Make sure images are in the `images/` folder
- Verify file extensions match (.jpg, .png, etc.)

**Animations not working:**
- Make sure `script.js` is linked correctly
- Check browser console for errors (F12)
- Try a different browser

**Layout looks wrong:**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that `styles.css` is linked correctly
- Verify no typos in HTML class names

## 💖 Making It Even More Special

**Additional ideas:**
- Add a custom favicon (replace browser tab icon)
- Include voice notes or video messages
- Add hidden easter eggs (secret messages on certain clicks)
- Create a countdown timer to your next date
- Add a "reasons I love you" page with 100 items

## 📝 File Structure

```
valentine/
├── index.html          # Landing page
├── love-letter.html    # Animated letter
├── gallery.html        # Photo carousel
├── timeline.html       # Relationship timeline
├── memory-game.html    # Matching game
├── styles.css          # All styling
├── script.js           # All interactivity
├── README.md           # This file
└── images/             # Your photos go here
```

## ❤️ Final Notes

This website was created with love! Take your time personalizing it - the effort you put into customization will show how much you care.

Remember: It's not about perfection, it's about the thought and love you put into it.

Happy Valentine's Day! 💕✨

---

**Need help?** Feel free to experiment and make changes. You can always restore the original files if needed!
