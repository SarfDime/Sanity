export default {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
        {
            name: 'sections',
            title: 'Sections',
            type: 'array',
            of: [{ type: 'cta' }, { type: 'info' }],
        }
    ]
}