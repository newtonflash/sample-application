const config = {
    componentID: 'PLPPage',
    componentName: 'PLPContainer',
    componentData: {
        // ( optional )__uid__ for component to identify uniquely when component is used multiple times
        __uid__: 'PLPPage',

        // Keeping all the endpoints here
        serviceEndPoints: {
            productsList: 'https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3'
        },

        // The following key is to keep labels for CMS authoring
        labels: {
            labelSale: 'Sale',
            labelExclusive: 'Exclusive',
            labelFilterBySize: 'Filter By Size'
        },

        // Keeping config as standard key for any kind of runtime configuration
        config: {},

        // Other properties to follow now
        title: "Women's tops"
    }
};

export default config;
