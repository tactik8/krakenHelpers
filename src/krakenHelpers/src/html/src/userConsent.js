


export function userConsent(){



    return `

    <script src="/consent/consent.js">

        


    </script>
    
    `

    

    return `

        <style>
#consentModal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 300px;
}

.modal-content h2 {
    margin-top: 0;
}

.modal-content button {
    margin: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

#acceptConsent {
    background-color: #4CAF50;
    color: white;
}

#declineConsent {
    background-color: #f44336;
    color: white;
}


        </style>
    
        <script>

            function showConsentModal() {
                // Check if consent has already been given
                if (localStorage.getItem('userConsent') === 'true') {
                    return; // Consent already given, no need to show modal
                }
            
                // Create the modal HTML
                const modal = document.createElement('div');
                modal.id = 'consentModal';
                modal.innerHTML = '<div class="modal-content"><h2>We Value Your Privacy</h2><p>We use cookies to improve your experience on our website. By continuing, you consent to our use of cookies.</p><button id="acceptConsent">Accept</button><button id="declineConsent">Decline</button></div>';
            
                // Append modal to body
                document.body.appendChild(modal);
            
                // Event listeners for buttons
                document.getElementById('acceptConsent').addEventListener('click', function() {
                    localStorage.setItem('userConsent', 'true');
                    document.body.removeChild(modal);
                });
            
                document.getElementById('declineConsent').addEventListener('click', function() {
                    localStorage.setItem('userConsent', 'false');
                    document.body.removeChild(modal);
                });
            }
            
            // Call the function to show the modal on page load
            window.onload = showConsentModal;






        </script>
    
    
    
    
    `
}