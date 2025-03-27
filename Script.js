
function spark(event) {
    const i = document.createElement('i');
    i.style.left = `${event.pageX}px`;
    i.style.top = `${event.pageY}px`;
    i.style.scale = `${Math.random() * 2 + 1}`;
    i.style.setProperty('--x', getRandomTransitionValue());
    i.style.setProperty('--y', getRandomTransitionValue());
    document.body.appendChild(i);

    // Change color every 1ms
    const colorInterval = setInterval(() => {
        i.style.background = getRandomColor();
    }, 500);

    // Remove element after 2 seconds
    setTimeout(() => {
        clearInterval(colorInterval); // Stop the color change
        document.body.removeChild(i);
    }, 2000);
}

function getRandomTransitionValue() {
    return `${Math.random() * 400 - 200}px`;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener('mousemove', spark);

// ---------------------------------------Scroll--------------------------------------------------
// const images = ['Blue color (2).png', 'Ornagecolor.png', 'GoldenChoclateDColor.png'];
// const colors = ['#6ECBD5', '#EAA338', '#DAB455'];
// let currentIndex = 0;
// function imgslider(image){
//     document.querySelector('.mainImage').src = image; // Use querySelector to target the correct image element by class
// }

// function bgcolor(color){
//     const sec = document.querySelector('.MainContainer'); // Correct selector for class
//     sec.style.backgroundColor = color; // Use correct property 'backgroundColor'
// }

// function autoChange() {
//     imgslider(images[currentIndex]);
//     bgcolor(colors[currentIndex]);

   
//     currentIndex = (currentIndex + 1) % images.length;
// }
// setInterval(autoChange, 3000);
//---------------------------------------------------------------------------------------------




// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
    // Access the HTML elements
    const flavorQuestion = document.getElementById('flavorQuestion');
    const packagingQuestion = document.getElementById('packagingQuestion');
    const customizeBtn = document.getElementById('customizeBtn');
    const resultFlavor = document.getElementById('resultFlavor');
    const resultPackaging = document.getElementById('resultPackaging');
    const flavorImage = document.getElementById('flavorImage');
    const packagingImage = document.getElementById('packagingImage');
    
    // Map the flavors to their respective images
    const flavorImages = {
      "Milk Chocolate": "Images/milk-chocolate.png",
      "Dark Chocolate": "Images/dark-chocolate.png",
      "White Chocolate": "Images/white-chocolate.png",
      "Caramel": "Images/caramel-chocolate.png",
      "Hazelnut": "Images/hazelnut-chocolate.png"
    };
  
    // Map the packaging to images
    const packagingImages = {
      "Classic Box": "Images/classic-box.png",
      "Eco-Friendly Wrap": "Images/eco-wrap.png",
      "Luxury Gift Pack": "Images/luxury-pack.png"
    };
  
    // Function to move to the next question
    function showPackagingQuestion() {
      flavorQuestion.classList.add('hidden'); // Hide the flavor question
      packagingQuestion.classList.remove('hidden'); // Show the packaging question
    }
  
    // Handle flavor selection
    document.querySelectorAll('input[name="flavor"]').forEach(input => {
      input.addEventListener('change', function () {
        // When a flavor is selected, move to the packaging question
        showPackagingQuestion();
      });
    });
  
    // Handle packaging selection
    document.querySelectorAll('input[name="packaging"]').forEach(input => {
      input.addEventListener('change', function () {
        // When packaging is selected, show the "Show My Custom Chocolate" button
        customizeBtn.classList.remove('hidden');
      });
    });
  
    // Handle the "Show My Custom Chocolate" button click event
    customizeBtn.addEventListener('click', function () {
      const selectedFlavor = document.querySelector('input[name="flavor"]:checked');
      const selectedPackaging = document.querySelector('input[name="packaging"]:checked');
      
      if (selectedFlavor && selectedPackaging) {
        const flavor = selectedFlavor.value;
        const packaging = selectedPackaging.value;
  
        // Display the selected flavor and packaging
        resultFlavor.textContent = `Flavor: ${flavor}`;
        resultPackaging.textContent = `Packaging: ${packaging}`;
  
        // Update the images for flavor and packaging
        flavorImage.src = flavorImages[flavor] || "";
        packagingImage.src = packagingImages[packaging] || "";
      } else {
        alert("Please select both flavor and packaging options!");
      }
    });
  });
  