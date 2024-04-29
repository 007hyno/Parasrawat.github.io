document.addEventListener('DOMContentLoaded', function() {
    console.log("Startedgreen🟢");
    // Your in the format of [anchor link, image source, title, description]
    const data = [
      ['https://play.google.com/store/apps/details?id=com.paras.hanumanchalisa', './utils/hanumanChalisa.png', 'Hanuman Chalisa Explained', 'Authentic meaning of Hanuman Chalisa With 5 types of Hanuman Chalisa🎧','./utils/android1.png','Android'],
      ['https://findvalentineon.web.app/', './utils/valantineFinder.png', 'Valantine Finder', 'Meet people with common interests.','./utils/web.png','Web'],
      ['https://play.google.com/store/apps/details?id=com.paras.aartisangrah', './utils/AartiSangrah.png', 'Aarti Sangrah', 'Understand aarti and Hanuman Chalisa with Hindi and English meanings.','./utils/android1.png','Android'],
      ['https://github.com/007hyno/Social-Media', './utils/SocialMedia.png', 'Social Media', 'SPA(Single Page Application) for communities. ','./utils/web.png','Web'],
      ['https://007hyno.github.io/find-vac.github.io/', './utils/vaccination.png', 'Vaccination (Depriciated)', 'Find vacant Covid Vaccination slots near you','./utils/web.png','Web']
    ];
  
    // Function to create a card
    function createCard(cardData) {
      const [link, imgSrc, title, desc, iconSrc, type] = cardData;
      return `
        <a href="${link}" target="_blank" class="cardView">
            <div class="cardTop">
                <div class="cardTopleft">
                    <div class="cardIcon">
                    <img src="${imgSrc}" alt="profile">
                    </div>
                    <div class="cardTitle">
                    <h2>${title}</h2>
                    </div>
                </div>
                <div class="cardTopright">
                    <div class="type">
                    <p>${type}</p>
                        <img src="${iconSrc}" alt="icon">
                    </div>
                </div>
            </div>
            <div class="cardBottom">
                <h2>${desc}</h2>
            </div>
        </a>
      `;
    }
  
    // Function to render all cards
    function renderCards(data) {
      const container = document.querySelector('.sec2'); // Make sure you have a div with id="cardContainer" in your HTML
      container.innerHTML = data.map(createCard).join('');
    }
  
    // Call renderCards
    renderCards(data);
    console.log("Finished🟢");
  });
  
  