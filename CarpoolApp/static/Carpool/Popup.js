function createCarpool() {
    const overlay = document.getElementById('popupOverlay');
    overlay.style.display = 'flex';
}

function closePopup() {
            const overlay = document.getElementById('popupOverlay');
            overlay.style.opacity = '0';
            overlay.style.transform = 'scale(0.95)';
            overlay.style.transition = 'all 0.3s ease-out';
            setTimeout(() => {
                overlay.style.display = 'none';
                overlay.style.opacity = '1';
                overlay.style.transform = 'scale(1)';
            }, 300);
        }
        function updateRouteVisualization() {
            const sourceInput = document.getElementById('source');
            const destinationInput = document.getElementById('destination');
            const sourceDisplay = document.getElementById('sourceDisplay');
            const destinationDisplay = document.getElementById('destinationDisplay');
        
            console.log('Source Input Value:', sourceInput.value);
            console.log('Destination Input Value:', destinationInput.value);
            console.log('Source Display Element:', sourceDisplay);
            console.log('Destination Display Element:', destinationDisplay);
        
            // Update source display
            sourceDisplay.textContent = sourceInput.value ? sourceInput.value : 'Enter Start';
            console.log('Source Display Text after update:', sourceDisplay.textContent);
        
            // Update destination display
            destinationDisplay.textContent = destinationInput.value ? destinationInput.value : 'Enter End';
            console.log('Destination Display Text after update:', destinationDisplay.textContent);
        
            // Add animation class to trigger fade effect
            sourceDisplay.style.opacity = '0';
            destinationDisplay.style.opacity = '0';
            setTimeout(() => {
                sourceDisplay.style.opacity = '1';
                destinationDisplay.style.opacity = '1';
            }, 50);
        }


        document.getElementById('routeForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {
                source: document.getElementById('source').value,
                destination: document.getElementById('destination').value,
                datetime: document.getElementById('datetime').value
            };
            console.log('Form submitted:', formData);
            
            // Show success message with animation
            const btn = document.querySelector('.submit-btn');
            btn.innerHTML = '<i class="fas fa-check"></i> Journey Planned!';
            btn.style.background = 'linear-gradient(45deg, #00b894, #00cec9)';
            
            setTimeout(() => {
                closePopup();
            }, 1500);
        });
    