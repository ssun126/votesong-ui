export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW'
            }
        },
        {
            title: true,
            name: 'Admin Site',
            wrapper: {            // optional wrapper object
                element: '',        // required valid HTML5 element tag
                attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
            },
            class: ''             // optional class names space delimited list for title item ex: "text-center"
        },
       /* {
            name: 'Sbp',
            url: '/sbp',
            icon: 'icon-puzzle'
        },
        {
            name: 'Tab',
            url: '/tab',
            icon: 'icon-puzzle'
        },
        {
            name: 'Audio',
            url: '/audio',
            icon: 'icon-puzzle'
        },
        {
            name: 'Upload',
            url: '/upload',
            icon: 'icon-puzzle'
        },*/
        {
            name: 'Registration',
            url: '/registration',
            icon: 'icon-puzzle'
        },
        {
            name : 'List',
            url : '/list',
            icon :  'icon-puzzle'
        },
        {
            name : 'FilterList',
            url : 'filterList',
            icon : 'icon-puzzle'
        }
    ]
};
