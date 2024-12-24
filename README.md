# JavaScript Conditional Operations

This project showcases various conditional operations using JavaScript to solve common problems involving default values, logical operators, and conditional statements. Each question explores a specific use case. 

---

## Question 1: Default Username
**Problem:**
If the user has not entered a username, use "Guest" as the default.

**Code:**
```javascript
const kullaniciAdi = "";
const ozelAd = "Guest";

const result = kullaniciAdi || ozelAd;
console.log(result); // Output: Guest
```

---

## Question 2: Product Pricing
**Problem:**
A product can have multiple pricing options: `discountedPrice`, `campaignPrice`, or `regularPrice`. If none exist, return "No price available."

**Code:**
```javascript
const indirimlFiyat = undefined;
const kampanyaliFiyat = null;
const normalFiyat = undefined;

const fiyat = indirimlFiyat || kampanyaliFiyat || normalFiyat || "No price available";
console.log(fiyat); // Output: No price available
```

---

## Question 3: Missing Contact Information
**Problem:**
If a user does not have a phone number or email address, return "Contact information missing."

**Code:**
```javascript
const telNo = null;
const emailAddress = "";

const information = telNo || emailAddress || "Contact information missing";
console.log(information); // Output: Contact information missing
```

---

## Question 4: Address Availability
**Problem:**
If all address details (`homeAddress`, `workAddress`, or `postBox`) are missing, return "No address available."

**Code:**
```javascript
const homeAddress = null;
const workAddress = "";
const zipCode = undefined;

const personalInfo = homeAddress || workAddress || zipCode || "No address available.";
console.log(personalInfo); // Output: No address available
```

---

## Question 5: Language Selection
**Problem:**
An application has `userLanguage`, `browserLanguage`, and `defaultLanguage`. If all are missing, return "No language selected."

**Code:**
```javascript
const userLanguage = null;
const browserLanguage = undefined;
const defaultLanguage = "";

const language = userLanguage || browserLanguage || defaultLanguage || "No language selected";
console.log(language); // Output: No language selected
```

---

## Question 6: Order Completion
**Problem:**
An order is completed if both `paymentMade` and `productReady` are true. Otherwise, return "Order pending."

**Code:**
```javascript
const paymentMade = true;
const productReady = true;

const order = paymentMade && productReady ? "Order Completed" : "Order Pending";
console.log(order); // Output: Order Completed
```

---

## Question 7: Discount Application
**Problem:**
A discount is applied if both `discountCodeEntered` and `productInCart` are true. Otherwise, return "Discount cannot be applied."

**Code:**
```javascript
const discountCodeEntered = true;
const productInCart = true;

const shop = discountCodeEntered && productInCart ? "Discount can be applied" : "Discount cannot be applied";
console.log(shop); // Output: Discount can be applied
```

---

## Question 8: Profile Completion
**Problem:**
A profile is complete if both `profilePhoto` and `aboutInfo` are provided. Otherwise, return "Profile incomplete."

**Code:**
```javascript
const profilePhoto = "Imren";
const aboutInfo = "";

if (profilePhoto && aboutInfo) {
  console.log("Profile completed");
} else {
  console.log("Profile incomplete"); // Output: Profile incomplete
}
```

---

## Question 9: Post Completion
**Problem:**
A post is complete if both `title` and `content` are provided. Otherwise, return "Post incomplete."

**Code:**
```javascript
const title = "All About Us";
const content = undefined;

if (title && content) {
  console.log("Post completed");
} else {
  console.log("Post incomplete"); // Output: Post incomplete
}
```

---

## Question 10: Event Participation
**Problem:**
To participate in an event, both `ticketPurchased` and `ageLimitEligible` must be true. Otherwise, return "Participation not allowed."

**Code:**
```javascript
const ticketPurchased = true;
const ageLimitEligible = true;

const participation = ticketPurchased && ageLimitEligible ? "Participation allowed" : "Participation not allowed";
console.log(participation); // Output: Participation allowed
```

---

## Summary
This project provides examples of using logical operators and conditions to handle default values and implement specific business logic. The solutions are concise, efficient, and suitable for real-world applications.
