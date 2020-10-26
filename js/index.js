let lightMode = true;
const siteContent = {
  nav: {
    "nav-item-0": "Home",
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Ideas",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street \nSomewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Container with every element on the page in it.

//Header and all of the elements inside of the header.

const nav = document.querySelector("nav"); //as a nodelist not a real array
const newAnchor = document.createElement("a");
newAnchor.setAttribute("href", "#");
nav.prepend(newAnchor.cloneNode(true));
nav.appendChild(newAnchor.cloneNode(true));
const navLinks = document.querySelectorAll("nav a"); //as a nodelist not a real array
navLinks.forEach((link) => (link.style.color = "green"));
navLinks.forEach(
  (link, i) => (link.textContent = siteContent.nav["nav-item-" + i])
);

//CTA section and all of the elements in it.
const ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.innerText = siteContent.cta.h1.split(" ").join("\n");
const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;
const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

//Main content section and all of the elements in it.
const mainContent = document.querySelector(".main-content");
const firstTopHeader = document.querySelector(
  ".top-content .text-content:nth-of-type(1) h4"
);
firstTopHeader.textContent = siteContent["main-content"]["features-h4"];
const firstTopParagraph = document.querySelector(
  ".top-content .text-content:nth-of-type(1) p"
);
firstTopParagraph.textContent = siteContent["main-content"]["features-content"];

const secondTopHeader = document.querySelector(
  ".top-content .text-content:nth-of-type(2) h4"
);
secondTopHeader.textContent = siteContent["main-content"]["about-h4"];
const secondTopParagraph = document.querySelector(
  ".top-content .text-content:nth-of-type(2) p"
);
secondTopParagraph.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const firstBottomHeader = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) h4"
);
firstBottomHeader.textContent = siteContent["main-content"]["services-h4"];
const firstBottomParagraph = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) p"
);
firstBottomParagraph.textContent =
  siteContent["main-content"]["services-content"];

const secondBottomHeader = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) h4"
);
secondBottomHeader.textContent = siteContent["main-content"]["product-h4"];
const secondBottomParagraph = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) p"
);
secondBottomParagraph.textContent =
  siteContent["main-content"]["product-content"];

const thirdBottomHeader = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) h4"
);
thirdBottomHeader.textContent = siteContent["main-content"]["vision-h4"];
const thirdBottomParagraph = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) p"
);
thirdBottomParagraph.textContent =
  siteContent["main-content"]["vision-content"];

//contact section
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];
const firstContactParagraph = document.querySelector(
  ".contact p:nth-of-type(1)"
);
firstContactParagraph.innerText = siteContent.contact.address;
const secondContactParagraph = document.querySelector(
  ".contact p:nth-of-type(2)"
);
secondContactParagraph.textContent = siteContent.contact.phone;
const thirdContactParagraph = document.querySelector(
  ".contact p:nth-of-type(3)"
);
thirdContactParagraph.textContent = siteContent.contact.email;

//footer
const button = document.createElement("button");
button.textContent = "Night Mode";

button.style.border = "1px double black";
button.style.fontSize = "16px";
button.style.background = "white";
button.style.width = "170px";
button.style.height = "32px";
button.style.marginTop = "10px";
button.style.cursor = "pointer";

const footer = document.querySelector("footer");
footer.appendChild(button);

const footerParagraph = document.querySelector("footer p");
footerParagraph.textContent = siteContent.footer.copyright;

button.addEventListener("click", () => {
  if (lightMode) {
    lightMode = false;
    document.querySelector("body").style.background = "black";
    document.querySelector("body").style.color = "white";
  } else if (!lightMode) {
    lightMode = true;
    document.querySelector("body").style.background = "white";
    document.querySelector("body").style.color = "black";
  }
});
