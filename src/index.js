console.log('%c HI', 'color: firebrick');

document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imgContainer = document.getElementById("dog-image-container");
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                imgContainer.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById("dog-breeds");
            for (const breed in data.message) {
                const listItem = document.createElement("li");
                listItem.textContent = breed;
                breedList.appendChild(listItem);

                // Add event listener for each breed item
                listItem.addEventListener("click", function() {
                    this.style.color = "red"; // Change color as desired
                });
            }

            // Add event listener for dropdown menu to filter breeds
            const breedDropdown = document.getElementById("breed-dropdown");
            breedDropdown.addEventListener("change", function() {
                const selectedLetter = breedDropdown.value;
                const breedItems = document.querySelectorAll("#dog-breeds li");

                breedItems.forEach(item => {
                    if (item.textContent.startsWith(selectedLetter)) {
                        item.style.display = "block"; // Show breeds starting with selected letter
                    } else {
                        item.style.display = "none"; // Hide breeds not starting with selected letter
                    }
                });
            });
        })
        .catch(error => {
            console.error('Error fetching breeds:', error);
        });
});