// Get the "Click me!" button
const button = document.getElementById('button-1');

// Get the message container
const messageContainer = document.getElementById('message-container');

// Add event listener to the "Click me!" button
button.addEventListener('click', showCake);

// Function to show the cake image and message
function showCake() {
  // Create an image element to display the cake image
  const cakeImage = document.createElement('img');
  cakeImage.src = 'img/cake.jpg.jpg';// Replace with the path to your cake image
  cakeImage.alt = 'Happy Birthday Cake';

  // Create a paragraph element to display the message
  const messageParagraph = document.createElement('p');
  messageParagraph.textContent = 'Happy Birthday to this Precious Girl! NESCHAI B. DIOGON AKA my loml:))) I just wanna say Happybirthday deengg! And Thankyou and I am sso proud of you for making it through this year of your life always know that I am here for u always and that you have me on your side as you partake on your journey I will be the biggesst and no. 1 fan in your life! Thankyou sa tanan for being a caring girl and the memories we shared together I hope and pray to be with you Forever. I wanna give back to you as much as I could and now I take this gift I made for you in the meantime I was free during the past days (P.S this took my whole month of september ahhh HAHAHA) and that I am always always alwayssss PROUD OF YOU! may God Bless you and your family and I will continue to support you till the end. I LOVEEEE YOUUUUU DENNNNGGG WITH A LOTS OF KISSESS. HAPPY BIRTHDAY ONCE AGAIN I LOVE YOUU Deeeeengg:))) MUAHH!!!! Happy Birthday:) love yahhhh ;)    - bboiii ezra:)';

  // Add the cake image and message to the message container
  messageContainer.innerHTML = '';
  messageContainer.appendChild(cakeImage);
  messageContainer.appendChild(messageParagraph);

  // Show the message container
  messageContainer.classList.add('show');
}


