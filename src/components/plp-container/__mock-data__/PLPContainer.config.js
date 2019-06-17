const config = {
    componentID: 'PLPPage',
    componentName: 'PLPContainer',
    componentData: {
        // ( optional )__uid__ for component to identify uniquely when component is used multiple times
        __uid__: 'PLPPage',

        // Keeping all the endpoints here
        serviceEndPoints: {
            productsList: 'https://api.jsonbin.io/b/5d07ae012132b7426d02d7ed'
        },

        // The following key is to keep labels for CMS authoring
        labels: {
            labelSale: 'Sale',
            labelExclusive: 'Exclusive',
            labelFilterBySize: 'Filter By Size'
        },

        errorMessages: {
            ERR_NO_FILTER_RESULTS:
                'We are sorry, but we did not find any data with your selection. Please try a different combination',
            ERR_DATA_RETRIVE_ERROR: 'Something went wrong behind the scene. Pleas try again later.'
        },

        // Keeping config as standard key for any kind of runtime configuration
        config: {},

        // Other properties to follow now
        title: 'Sample PLP application'
    }
};

export default config;
