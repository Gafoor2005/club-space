export const fetchDrive = async (url:string, token:string) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error:", errorResponse);
  
        // Check if the fixItUrl exists in the error response
        if (errorResponse.error && errorResponse.error["@error.fixItUrl"]) {
            console.log("Fix It URL:", errorResponse.error["@error.fixItUrl"]);
            // Optionally navigate to the fixItUrl or show it to the user
            const newWindowRef =  window.open(errorResponse.error["@error.fixItUrl"], '_blank','height=480,width=720'); // Opens in a new tab
             // Check if the window was opened successfully
            if (newWindowRef) {
                // Add an event listener to the new window for the load event
                newWindowRef.onload = () => {
                // Close the window once the page has loaded
                newWindowRef.close();
                };
            } else {
                console.error("Failed to open the new window. Please check your browser settings.");
                alert("pop-up blocked by browser, enable pop-up in browser settings\n\nIt is required for library funtionallity\n\nALLOW POP-UP ONLY THIS TIME - will not asked anymore.")
                try{

                    newWindowRef!.onload = () => {
                        // Close the window once the page has loaded
                        newWindowRef!.close();
                    };
                }catch(e){}
            }
            
        }
        throw new Error(errorResponse.error.message || "Unknown error occurred");
    }

    return response.json();
};
