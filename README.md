# Tadiosa's Gown — React

This is the React (Vite) version of the Tadiosa's Gown website.

## Setup

1. **Install Node.js** (if not yet installed): https://nodejs.org — download the LTS version.

2. **Copy images** — paste all your `.jpg`/`.jpeg`/`.png` image files from the original folder into:
   ```
   tadiosas-gown-react/public/
   ```
   (Create the `public` folder if it doesn't exist.)

3. **Install dependencies** — open a terminal inside `tadiosas-gown-react/` and run:
   ```
   npm install
   ```

4. **Start the dev server:**
   ```
   npm run dev
   ```
   Then open http://localhost:5173 in your browser.

5. **Build for production:**
   ```
   npm run build
   ```

## Project Structure

```
src/
  components/
    Navbar.jsx        — fixed nav with scroll-active links + Book Now button
    ContactModal.jsx  — social links modal
    Hero.jsx          — hero section
    Marquee.jsx       — animated text ticker
    Collections.jsx   — collections grid
    About.jsx         — about / featured section
    Catalog.jsx       — filterable rental catalog with expand/collapse
    Services.jsx      — services cards
    Testimonials.jsx  — client reviews
    Contact.jsx       — contact info + map
    Footer.jsx        — footer
  data/
    catalogItems.js   — all catalog product data in one place
  App.jsx             — root component
  main.jsx            — entry point
  index.css           — all styles (converted from styles.css)
```
