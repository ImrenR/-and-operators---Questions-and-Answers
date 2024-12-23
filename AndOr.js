 //? Question 1 : If the user has not entered a username in their profile, use "Guest" as the default name. Use the following variables to determine the username.

 const kullaniciAdi="";
 const ozelAd="Guest";

 const result = kullaniciAdi || ozelAd;

 console.log(result);

  //? Question 2 : A product can have three different prices: discountedPrice, campaignPrice, or regularPrice. If none of these prices exist, return "No price available."

  
  const indirimlFiyat=undefined;
  const kampanyaliFiyat=null;
  const normalFiyat=undefined;
 
  const fiyat= indirimlFiyat || kampanyaliFiyat || normalFiyat || "No price available";
  console.log(fiyat);
//? Question 3 : If a user does not have a phone number or email address, return the default message "Contact information missing."


const telNo= null;
const emailAddress="";

const information= telNo || emailAddress || "Contact information missing"
console.log(information);

//? Question 4 : A user can have three different address details: homeAddress, workAddress, or postBox. If all the details are missing, return "No address available.

const homeAddress= null;
const workAddress="";
const zipCode=undefined;

const personalInfo= homeAddress || workAddress || zipCode || "No address available."
console.log(personalInfo);

//? Question 5 : An application has language options such as userLanguage, browserLanguage, and defaultLanguage. If all options are missing, return "No language selected"

const userLanguage= null;
const browserLanguage= undefined;
const defaultLanguage="";

const language= userLanguage|| browserLanguage ||defaultLanguage||"No language selected"
console.log(language)

//? Question 6 :To complete an order, both paymentMade and productReady must be true. If both conditions are met, return the message "Order completed", otherwise return "Order pending".

const paymentMade= true;
const productReady= true; 
 
const order = paymentMade || productReady 
? "Order Completed"
: "Order Pending"

console.log(order);

//? Question 7 : If both discountCodeEntered and productInCart are true for a product, the discount will be applied. Otherwise, return the message "Discount cannot be applied."

const discountCodeEntered=true;
const productInCart=true;
 
const shop= discountCodeEntered && productInCart ? "Discount can be applied" : "Discount cannot be applied"

console.log(shop);

//? Question 8 :  If a profile contains both profilePhoto and aboutInfo, return "Profile complete". Otherwise, return "Profile incomplete".
const profilePhoto= "Imren";
const aboutInfo="";

if(profilePhoto && aboutInfo) {
  console.log("Profile completed");
}else{
  console.log("Profile incomplete");
}
//? Question 9 : To share a post, both title and content must be filled. Otherwise, return the message "Post incomplete."

const title = "All About Us";
const content = undefined;

if(title && content){
  console.log("Post completed");

}else{
  console.log("Post incompleted")
}

//? Question 10 : To attend an event, both ticketPurchased and ageLimitEligible must be true. Otherwise, return "Participation not allowed."

const ticketPurchased= true;
const ageLimitEligible=true;

const shop1 = ticketPurchased && ageLimitEligible ? console.log("Participation allowed")
   :console.log("Participation not allowed")
