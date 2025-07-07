const storeItems = {
    'lego-store': [
        'Lego Star Wars Millennium Falcon',
        'Lego City Police Station',
        'Lego Creator Expert Modular Building',
        'Lego Technic Bugatti Chiron',
        'Lego Harry Potter Hogwarts Castle',
        'Lego Ideas Ship in a Bottle',
        'Lego Friends Heartlake City Grand Hotel',
        'Lego Duplo Animal Train',
        'Lego Minifigure Series Blind Bag',
        'Lego Classic Creative Brick Box'
    ],
    'walmart': [
        'Family-size box of Cheerios',
        'Gallon of 2% Milk',
        'Bag of Fresh Apples',
        'Laundry Detergent (Tide Pods)',
        'Toilet Paper (Charmin Ultra Soft)',
        'Kids\' Bicycle',
        'Board Game (Catan)',
        'Water Bottle (Hydro Flask)',
        'Bluetooth Speaker (JBL Flip)',
        'Set of Bath Towels',
        'Granola Bars (Nature Valley)',
        'Bottled Water (Dasani)',
        'Frozen Pizza (DiGiorno - Pepperoni)', // Assuming no alcohol in crust/sauce
        'Canned Soup (Campbell\'s Chicken Noodle)',
        'Box of Pasta (Barilla Spaghetti)'
    ],
    'target': [
        'Organic Bananas (bunch)',
        'Reusable Shopping Bag',
        'Yoga Mat',
        'Decorative Throw Pillow',
        'Children\'s Book (e.g., "The Very Hungry Caterpillar")',
        'Cookware Set (T-fal)',
        'Wireless Earbuds (JBL Tune)',
        'Picture Frame (8x10)',
        'Scented Candle (Vanilla Bean)',
        'Frozen Vegetables (Broccoli Florets)',
        'Box of Cereal (Honey Nut Cheerios)',
        'Sparkling Water (La Croix - Lime)',
        'Hummus and Pretzel Snack Pack'
    ],
    'car-dealership': { // Changed to an object for brands
        'Toyota': ['Toyota Camry LE', 'Toyota Corolla SE', 'Toyota RAV4 XLE', 'Toyota Highlander XLE'],
        'Honda': ['Honda Civic Sport', 'Honda CR-V EX', 'Honda Accord LX', 'Honda Pilot EX-L'],
        'Ford': ['Ford F-150 XLT', 'Ford Explorer XLT', 'Ford Mustang EcoBoost', 'Ford Bronco Sport'],
        'Tesla': ['Tesla Model 3 Long Range', 'Tesla Model Y Long Range', 'Tesla Model S Plaid', 'Tesla Cybertruck'],
        'Subaru': ['Subaru Outback Premium', 'Subaru Forester Sport', 'Subaru Crosstrek Limited', 'Subaru Ascent Premium'],
        'Jeep': ['Jeep Wrangler Sport', 'Jeep Grand Cherokee Laredo', 'Jeep Cherokee Latitude', 'Jeep Renegade Latitude'],
        'Hyundai': ['Hyundai Elantra SEL', 'Hyundai Tucson SEL', 'Hyundai Santa Fe SE', 'Hyundai Kona SE'],
        'Kia': ['Kia Seltos LX', 'Kia Sportage LX', 'Kia Forte LXS', 'Kia Telluride LX'],
        'Chevrolet': ['Chevrolet Equinox LT', 'Chevrolet Silverado 1500 LT', 'Chevrolet Colorado WT', 'Chevrolet Malibu LS'],
        'Nissan': ['Nissan Rogue SV', 'Nissan Altima S', 'Nissan Sentra SV', 'Nissan Titan S'],
        'Lamborghini': ['Lamborghini Aventador', 'Lamborghini Huracán', 'Lamborghini Urus', 'Lamborghini Countach', 'Lamborghini Diablo'],
        'Ferrari': ['Ferrari 488', 'Ferrari F8 Tributo', 'Ferrari Portofino', 'Ferrari SF90 Stradale', 'Ferrari Roma'],
        'Bugatti': ['Bugatti Chiron', 'Bugatti Veyron', 'Bugatti Divo', 'Bugatti Bolide', 'Bugatti Mistral'],
        'Porsche': ['Porsche 911', 'Porsche Taycan', 'Porsche Cayenne', 'Porsche Panamera', 'Porsche 718 Cayman'],
        'Mercedes-Benz': ['Mercedes-Benz C-Class', 'Mercedes-Benz E-Class', 'Mercedes-Benz S-Class', 'Mercedes-Benz GLC-Class', 'Mercedes-Benz GLE-Class'],
        'BMW': ['BMW 3 Series', 'BMW 5 Series', 'BMW X5', 'BMW 7 Series', 'BMW M3'],
        'Audi': ['Audi A4', 'Audi A6', 'Audi Q5', 'Audi Q7', 'Audi R8'],
        'Rolls-Royce': ['Rolls-Royce Phantom', 'Rolls-Royce Ghost', 'Rolls-Royce Cullinan', 'Rolls-Royce Spectre', 'Rolls-Royce Wraith'],
        'Bentley': ['Bentley Continental GT', 'Bentley Bentayga', 'Bentley Flying Spur', 'Bentley Mulsanne'],
        'Aston Martin': ['Aston Martin DB11', 'Aston Martin Vantage', 'Aston Martin DBS Superleggera', 'Aston Martin DBX', 'Aston Martin Valkyrie'],
        'McLaren': ['McLaren 720S', 'McLaren Artura', 'McLaren 765LT', 'McLaren GT', 'McLaren Senna'],
        'Lexus': ['Lexus LS', 'Lexus RX', 'Lexus ES', 'Lexus GX', 'Lexus LC'],
        'Land Rover': ['Land Rover Range Rover', 'Land Rover Range Rover Sport', 'Land Rover Defender', 'Land Rover Discovery', 'Land Rover Range Rover Velar'],
        'Maserati': ['Maserati Ghibli', 'Maserati Quattroporte', 'Maserati Levante', 'Maserati MC20', 'Maserati GranTurismo']
    },
    'best-buy': [
        'Samsung 55" 4K Smart TV',
        'Apple MacBook Air M2',
        'Sony WH-1000XM5 Noise-Cancelling Headphones',
        'Nintendo Switch OLED Model',
        'Dyson V11 Cordless Vacuum',
        'Bose SoundLink Revolve+ II Bluetooth Speaker',
        'Canon EOS Rebel T7 DSLR Camera',
        'Logitech MX Master 3S Wireless Mouse',
        'External Hard Drive (Western Digital 2TB)',
        'Smart Home Hub (Amazon Echo Dot)'
    ],
    'bricks-and-minifigs': [
        'Used Lego Star Wars X-Wing Fighter',
        'Rare Lego Minifigure (e.g., Mr. Gold)',
        'Bulk Lego Bricks (1lb bag)',
        'Custom Lego Minifigure Parts',
        'Lego Display Case',
        'Retired Lego Creator Set (e.g., Parisian Restaurant)',
        'Lego Baseplate (32x32 stud)',
        'Lego Technic Gear Set',
        'Lego City Road Plates',
        'Lego Friends Pet Shop'
    ],
    'family-mart': [
        'Onigiri (Salmon)',
        'Egg Salad Sandwich',
        'Banana',
        'Apple Juice Box',
        'Bottled Water',
        'Plain Rice Crackers (Senbei)',
        'Small bag of Potato Chips (Salted)',
        'Plain Yogurt Drink',
        'Milk Carton (Plain)',
        'Pack of Gum (Mint flavor)',
        'Small pack of Cookies (e.g., plain butter cookies)',
        'Hard-boiled Egg',
        'Fruit Jelly Cup',
        'Pocari Sweat (Sports Drink)' // Checked: Generally caffeine-free and acceptable
    ],
    'seven-eleven': [
        'Onigiri (Tuna Mayo)',
        'Ham & Cheese Sandwich',
        'Orange',
        'Bottled Green Tea (Decaffeinated, if available, otherwise avoid)', // Specific note for caution
        'Bottled Water',
        'Small bag of Pretzels',
        'Chocolate Bar (Hershey\'s Milk Chocolate)',
        'Small container of Fruit Salad',
        'Plain Croissant',
        'Small pack of Mints',
        'Cup Noodles (Chicken flavor - check for non-meat broth if vegetarian)', // Assuming standard chicken broth is fine
        'Iced Tea (Herbal, caffeine-free, e.g., Peach Herbal Tea)', // Explicitly herbal/caffeine-free
        'Small Bag of Mixed Nuts',
        'Yogurt Parfait (Fruit & Granola)'
    ]
};

const storeSelect = document.getElementById('store-select');
const getRecommendationBtn = document.getElementById('get-recommendation-btn');
const recommendationOutput = document.getElementById('recommendation-output');
const loadingIndicator = document.getElementById('loading-indicator');
const carBrandSelectionDiv = document.getElementById('car-brand-selection');
const carBrandSelect = document.getElementById('car-brand-select');

// Function to get a random item from a given array
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to populate car brands
function populateCarBrands() {
    carBrandSelect.innerHTML = '<option value="">-- Select a Brand --</option>'; // Clear existing options
    const brands = Object.keys(storeItems['car-dealership']);
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        carBrandSelect.appendChild(option);
    });
}

// Event listener for store selection change
storeSelect.addEventListener('change', () => {
    if (storeSelect.value === 'car-dealership') {
        carBrandSelectionDiv.style.display = 'block'; // Show car brand dropdown
        populateCarBrands();
    } else {
        carBrandSelectionDiv.style.display = 'none'; // Hide car brand dropdown
        carBrandSelect.value = ''; // Reset car brand selection
    }
    recommendationOutput.textContent = 'Your recommended item will appear here!'; // Reset output
    loadingIndicator.style.display = 'none'; // Hide loading
});

// Event listener for the button click
getRecommendationBtn.addEventListener('click', () => {
    const selectedStore = storeSelect.value;
    recommendationOutput.textContent = ''; // Clear previous output
    loadingIndicator.style.display = 'block'; // Show loading indicator

    if (selectedStore) {
        setTimeout(() => {
            let recommendedItem = '';
            if (selectedStore === 'car-dealership') {
                const selectedBrand = carBrandSelect.value;
                if (selectedBrand) {
                    const cars = storeItems['car-dealership'][selectedBrand];
                    if (cars && cars.length > 0) {
                        recommendedItem = getRandomItem(cars);
                    } else {
                        recommendedItem = 'No cars found for this brand. Please select another.';
                    }
                } else {
                    recommendedItem = 'Please select a car brand first!';
                }
            } else {
                const items = storeItems[selectedStore];
                if (items && items.length > 0) {
                    recommendedItem = getRandomItem(items);
                } else {
                    recommendedItem = 'No items found for this store. Please select another.';
                }
            }
            recommendationOutput.textContent = `You should buy: ${recommendedItem}!`;
            loadingIndicator.style.display = 'none'; // Hide loading indicator
        }, 700); // 700ms delay
    } else {
        recommendationOutput.textContent = 'Please select a store first!';
        loadingIndicator.style.display = 'none'; // Hide loading indicator
    }
});

// Initialize with a default message
document.addEventListener('DOMContentLoaded', () => {
    recommendationOutput.textContent = 'Your recommended item will appear here!';
});
