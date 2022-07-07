export default {
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'about',
            title: 'About',
            type: 'string'
        },
        {
            name: 'destination',
            title: 'Destination',
            type: 'url'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true //enables the function to decide which area of the image will be cropped which will not
            }
        },
        {
            name: 'userId',
            title: 'UserId',
            type: 'string'
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy'
        },
        {
            name: 'save',
            title: 'Save',
            type: 'array',
            of: [{type: 'save'}] //we will have lots of saves inside this Save array
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{type: 'comment'}] //we will need new schema for comment and save
        },
    ]
}