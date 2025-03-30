# Kusal Pabasara - Personal Portfolio Website

![Website Preview](images/website-preview.jpg)

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Computer Science and Engineering student at the University of Moratuwa, Sri Lanka.

## 🌐 Live Demo

[View Live Website](https://kusalpabasara.github.io) <!-- Replace with your actual GitHub Pages URL -->

## ✨ Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean and professional interface with smooth animations
- **Interactive Elements**: Smooth scrolling, navigation, and form validation
- **Contact Form**: Integrated with Formspree for easy communication
- **Performance Optimized**: Fast loading and smooth performance

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive elements and form handling
- **Formspree**: Contact form submission handling
- **Font Awesome**: Icons and visual elements
- **Google Fonts**: Typography (Poppins and Roboto)

## 📂 Project Structure

```
kusal-website/
│
├── index.html              # Main HTML file
├── css/
│   └── style.css           # CSS styles
├── js/
│   └── script.js           # JavaScript functionality
└── images/
    ├── kusal-photo.jpg     # Profile photo
    ├── project1.jpg        # Project images
    ├── project2.jpg
    └── project3.jpg
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript (for customization)

### Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kusalpabasara/portfolio.git
   cd portfolio
   ```

2. **View locally**
   - Open `index.html` in your browser to view the website

3. **Deploy to GitHub Pages**
   - Push the repository to your GitHub account
   - Enable GitHub Pages in repository settings
   - Your site will be available at `https://yourusername.github.io/portfolio`

## 📝 Customization Guide

### Profile Information

Edit the following sections in `index.html` to personalize the website:

- Update header and hero section with your information
- Modify the About section with your background
- Edit the Skills section to showcase your abilities
- Update the Experience section with your own experiences
- Replace Project details with your own work

### Contact Form Setup

The contact form uses Formspree for handling submissions:

1. Create an account at [Formspree](https://formspree.io/)
2. Set up a new form and get your unique endpoint
3. Update the endpoint in `script.js`:
   ```javascript
   fetch('https://formspree.io/f/YOUR_ENDPOINT', {
   ```

### Styling Customization

The website uses CSS variables for easy styling customization:

```css
:root {
    --primary: #3a4f72;    /* Primary color */
    --secondary: #f5f5f5;  /* Secondary color */
    --accent: #e67e22;     /* Accent color */
    --dark: #2c3e50;       /* Dark color */
    --light: #ecf0f1;      /* Light color */
    --text: #333;          /* Text color */
    --container: 1200px;   /* Container width */
}
```

Edit these variables in `style.css` to change the color scheme.

## 📱 Mobile Responsiveness

The website is fully responsive with dedicated styles for different screen sizes:

- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (576px to 767px)
- Small Mobile (575px and below)

## 📧 Contact Form

The contact form is integrated with Formspree to handle submissions without requiring server-side code:

- Form validation ensures all required fields are completed
- Success and error messages provide user feedback
- Submissions are sent directly to your email

## 🙏 Acknowledgements

- [Font Awesome](https://fontawesome.com/) for the icons
- [Google Fonts](https://fonts.google.com/) for the typography
- [Formspree](https://formspree.io/) for the contact form functionality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 About Me

I'm Kusal Pabasara, a Computer Science and Engineering undergraduate at the University of Moratuwa, Sri Lanka. I'm passionate about software engineering, embedded systems, and computer graphics.

Feel free to connect with me:
- Email: kusalp.23@cse.mrt.ac.lk
- Phone: +94 715720764
- Location: Galle, Sri Lanka

---

⭐ If you find this project helpful, please consider giving it a star on GitHub! ⭐
