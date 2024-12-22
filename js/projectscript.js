document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");
    const detailsSection = document.querySelector(".project-details");

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            // Clear previous content
            detailsSection.innerHTML = "";

            // Extract content
            const title = card.querySelector("h2")?.textContent || "Untitled Project";
            const description = card.querySelector("p:first-of-type")?.textContent || "No description available.";
            const purpose = card.querySelector("p:last-of-type")?.textContent || "Purpose not specified.";
            const ul = card.querySelector("ul")?.cloneNode(true); // Clone the list
            const link = card.querySelector("a")?.href || "#";
            const imageSrc = card.querySelector("img")?.src || "";

            // Create and append new elements
            const imgElement = document.createElement("img");
            imgElement.src = imageSrc;
            imgElement.alt = title;
            imgElement.style.cssText = "width: 100%; border-radius: 8px; margin-bottom: 20px;";
            detailsSection.appendChild(imgElement);

            const titleElement = document.createElement("h2");
            titleElement.textContent = title;
            detailsSection.appendChild(titleElement);

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = description;
            detailsSection.appendChild(descriptionElement);

            if (ul) {
                detailsSection.appendChild(ul); // Append the cloned list
            }

            const purposeElement = document.createElement("p");
            purposeElement.innerHTML = `<strong>Purpose:</strong> ${purpose}`;
            detailsSection.appendChild(purposeElement);

            const linkElement = document.createElement("a");
            linkElement.href = link;
            linkElement.target = "_blank";
            linkElement.textContent = "View Project";
            linkElement.style.cssText =
                "display: inline-block; margin-top: 20px; padding: 10px 15px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 5px;";
            detailsSection.appendChild(linkElement);

            // Scroll to details section
            detailsSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
