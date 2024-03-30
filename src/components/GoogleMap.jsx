import React from 'react';

const GoogleMap = () => {
    return (
        <div className="map-area">
            <div className="maps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4204.140740968644!2d-87.61397041529199!3d41.83311215133731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2bf50ef12677%3A0x10f49c239ca69fe8!2sLake%20Meadows%20Shopping%20Center!5e0!3m2!1sen!2sus!4v1711312525577!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: '0' }} // Here, style is passed as an object
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default GoogleMap